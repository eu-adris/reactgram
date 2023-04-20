const { body } = require("express-validator")

const userCreateValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("O nome é obrigatório")
            .isLength({ min: 3 })
            .withMessage("O nome deve ter pelo menos 3 caracteres"),
        body("email")
            .isString()
            .withMessage("O e-mail é obrigatório")
            .isEmail()
            .withMessage("O e-mail não é válido"),
        body("password")
            .isString()
            .withMessage("A senha é obrigatória")
            .isLength({ min: 5 })
            .withMessage("A senha deve ter pelo menos 5 caracteres"),
        body("confirmpassword")
            .isString()
            .withMessage("A senha deve ser igual a confirmação")
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error("As senhas não são iguais");
                }
                return true
            })
    ]
}

const loginValidation = () => {
    return [
        body("email")
            .isString()
            .withMessage("O e-mail é obrigatório")
            .isEmail()
            .withMessage("Insira um email válido"),
        body("password")
            .isString()
            .withMessage("A senha é obrigatória"),
    ]
}

const userUpdateValidation = () => {
    return [
        body("name")
            .optional()
            .isLength({ min: 3 })
            .withMessage("O nome deve ter pelo menos 3 caracteres"),
        body("password")
            .optional()
            .isLength({ min: 5 })
            .withMessage("A senha deve ter pelo menos 5 caracteres"),

    ]
}

module.exports = {
    userCreateValidation,
    loginValidation,
    userUpdateValidation,
}