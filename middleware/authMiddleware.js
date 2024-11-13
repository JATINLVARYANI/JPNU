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
