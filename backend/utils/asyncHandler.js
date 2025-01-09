const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        //.then is not necessary to consume so .catch is is directly applied
        Promise.resolve(requestHandler(req, res, next))  
        .catch((error)=>next(error))
    }
}

export {asyncHandler}