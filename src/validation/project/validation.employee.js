import Joi from "joi";

const employeeSchema = Joi.object({
    firstName: Joi.string()
        .min(2)
        .max(50)
        .required(),
    lastName: Joi.string()
        .min(2)
        .max(50)
        .required(),
    salutation: Joi.string()
        .min(2)
        .max(100)
        .required(),
    email: Joi.string()
        .email()
        .required(),
    workPhone: Joi.string()
        .min(10)
        .max(15)
        .required(),
    mobile: Joi.string()
        .min(10)
        .max(15)
        .required(),
    active: Joi.boolean()
        
});

export { employeeSchema };
