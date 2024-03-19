const Error = require("../Constant")
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch (statusCode) {
        case Error.VALIDATION_FAILED:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
            })
            break
        case Error.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
            })
            break
        case Error.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            })
            break
        case Error.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack
            })
            break
        case Error.SERVER_ERROR:
            es.json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack
            })
        default:
            console.log("No Error All Good")
            break;
    }
}

module.exports = errorHandler