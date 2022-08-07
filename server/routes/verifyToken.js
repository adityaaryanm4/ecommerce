const jwt = require("jsonwebtoken")

const verifyToken = async (request, response, next) => {
    try {
        const authHeader = request.headers.token
        const token = authHeader.split(" ")[1] //since "bearer" type token
        if (authHeader) {
            const user = await jwt.verify(token, process.env.JWT_SEC)
            if (user) {
                request.user = user
            }
            else {
                return response.status(403).send("Invalid token")
            }
            next()
        }
        else {
            return response.status(401).send("You are not authenticated")
        }
    } catch (error) {
        response.status(500).json("Token invalid")
    }

}

const verifyTokenAndAuthorisation = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user._id === req.params._id || req.user.isAdmin === true) {
            next()
        }
        else {
            res.status(403).json("You are not allowed to do so!")
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {
    try {
        verifyToken(req, res, () => {
            if (req.user.isAdmin === true) {
                next()
            }
            else {
                res.status(403).json("You are not allowed to do so!")
            }
        })
    } catch (error) {
        res.status(500).json("Not an admin!")
    }
}


module.exports = { verifyToken, verifyTokenAndAuthorisation, verifyTokenAndAdmin }













