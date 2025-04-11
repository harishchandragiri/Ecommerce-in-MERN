import { ApiError } from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
    // If it's not an instance of ApiError, convert it to one
    if (!(err instanceof ApiError)) {
        err = new ApiError(500, err.message || "Internal Server Error");
    }

    return res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Something went wrong",
        errors: err.errors || [],
    });
};

export { errorHandler };
