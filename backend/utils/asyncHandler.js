const asyncHandler = (requestHandler) => {
    return(req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))   //.then is not necessary to consume so .catch is is directly applied
        .catch((error)=>next(error))
    }
}

export {asyncHandler}