module.exports = () => {
    return {
        forgotPassword : (req, res, next ) => {
            next();
            res.status(201).json( { ok : true })
        }
    }
}
