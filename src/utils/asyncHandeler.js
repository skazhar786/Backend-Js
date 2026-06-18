const asynHandeler = (requestHandler)=>{
    (req,res,next)=>{
 Promise.resolve(requestHandler(req,res,next))
    
    .catch((err)=>{
        next(err)
    })
}
}


export { asyncHandler }

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//        await fn(err,req,res)
//     } catch (error) {
//         res.status(err.code || 500).Json({
//             success: false,
//             message: err.message
//         })


//     }
// }