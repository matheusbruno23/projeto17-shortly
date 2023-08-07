export function validateSchema(schema){
    return (req , res , next) => {
        const validation = schema.validate(req.body, {abortEarly : false})
        if (validation.error) return res.sendStatus(422)
        next()
    }
}