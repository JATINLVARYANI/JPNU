import jwt from 'jsonwebtoken';

export const authenticateUser = (req, res, next) => {
    try {
        
        const token = req.cookies.token;

    
        if (!token) {
            return res.status(401).json({ error: "Access denied. No token provided." });
        }

        
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: "Invalid token." });
            }

            req.user = decoded;

            next();
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while authenticating the user." });
    }
};
