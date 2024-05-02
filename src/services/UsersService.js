const prisma = require("../lib/prisma");
const CreateUserValidation = require("../validations/users/CreateUserValidation");
const UpdateUserValidation = require("../validations/users/UpdateUserValidation");

class UsersService {
  static async list() {
    return await prisma.person.findMany();
  }

  static async find(id) {
    return await prisma.person.findUnique({ where: { id } });
  }

  static async create(data) {
    CreateUserValidation.validate(data);
    return await prisma.person.create({ data });
  }

  static async update(id, data) {
    UpdateUserValidation.validate(data);
    return await prisma.person.update({ where: { id }, data });
  }

  static async delete(id) {
    return await prisma.person.delete({ where: { id } });
  }
}

module.exports = UsersService;
