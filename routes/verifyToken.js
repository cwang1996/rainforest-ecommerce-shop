const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    
    if(authHeader) {
            const token = authHeader.split(' ')[1];
            jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if(err)
                res.status(403).json('Token is not valid');
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json('User not authenticated');
    }
}

const verifyTA = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        } else {
            res.status(403).json('User not authenticated')
        }
    });
};

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin){
            next()
        } else {
            res.status(403).json('User not admin')
        }
    });
};

module.exports = {verifyToken, verifyTA, verifyAdmin};