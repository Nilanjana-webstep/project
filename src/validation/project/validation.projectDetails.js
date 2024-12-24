import Joi from "joi";

const projectDetailSchema = Joi.object({
    room: Joi.string()
    .min(1)
    .max(100000)
    .required(),

  floor: Joi.string()
    .min(1)
    .max(100)
    .required(),

  areaDetail: Joi.string()
    .min(1)
    .max(100)
    .required(),

  unit: Joi.string()
    .min(1)
    .max(10)
    .required(),

  cost: Joi.number()
    .min(1)
    .max(100000000000)
    .required()
})

export { projectDetailSchema };