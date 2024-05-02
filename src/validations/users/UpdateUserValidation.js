const { z } = require("zod");

class UpdateUserValidation {
  static validate(data) {
    const validation = z.object({
      name: z.string().optional(),
      email: z.string().email().optional(),
      phone: z.string().max(19).optional(),
      address: z.string().optional(),
    });
    validation.parse(data);
  }
}

module.exports = UpdateUserValidation;
