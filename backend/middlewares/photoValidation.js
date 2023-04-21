const { body } = require("express-validator")

const photoInsertValidation = () => {
    return [
        body("title")
            .not()
            .equals("undefined")
            .withMessage("O titulo é obrigatório")
            .isString()
            .withMessage("O titulo é obrigatório")
            .isLength({ min: 3 })
            .withMessage("O titulo deve ter no minimo 3 caractéres"),
        body("image").custom((value, { req }) => {
            if (!req.file) {
                throw new Error("A imagem é obrigatória")
            }
            return true
        })

    ]
}

module.exports = {
    photoInsertValidation,
    
}