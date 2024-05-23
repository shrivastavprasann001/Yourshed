//middleware function used to validate the details

const { userSchema } = require("../zodvalidators/zod.input.validation");

const validate = (userSchema) => async (req, res, next) => {
  try {
    const parsebody = await userSchema.ParseAsync(req.body);
    req.body = parsebody;
    next();
  } catch (error) {
    res.status(400).json({ msg: "error" });
  }
};

module.exports = { validate };
