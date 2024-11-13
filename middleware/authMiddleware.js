import jwt from 'jsonwebtoken';

export const verifyRole = (allowedRoles) => (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied. Insufficient permissions." });
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to authenticate token." });
    }
};

export const authenticateUser = (req, res, next) => {
    try {
        const token = req.cookies.token; // Assuming the token is stored in a cookie named "token"
        if (!token) return res.status(401).json({ message: 'Authentication token is missing' });

        // Verify the JWT and extract user information
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.status(401).json({ message: 'Invalid token' });
            req.userId = decoded.userId; // Set userId from the decoded token onto the request object
            next();
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error authenticating user' });
    }
};