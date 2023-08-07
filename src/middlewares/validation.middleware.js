export function validateSchema(schema){
    return (req , res , next) => {
        const validation = schema.validate(req.body, {abortEarly : false})
        if (validation.error) return res.sendtatus(422)
        next()
    }
}