const { z } = require("zod");

class CreateUserValidation {
  static validate(data) {
    const validation = z.object({
      name: z.string(),
      email: z.string().email(),
      phone: z.string().max(19),
      address: z.string(),
    });
    validation.parse(data);
  }
}

module.exports = CreateUserValidation;
