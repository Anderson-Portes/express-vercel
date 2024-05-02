const UsersService = require("../services/UsersService");

class UsersController {
  static async list(req, res) {
    const people = await UsersService.list();
    return res.json(people);
  }

  static async find(req, res) {
    const id = Number(req.params.id);
    const person = await UsersService.find(id);
    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }
    return res.json(person);
  }

  static async create(req, res) {
    try {
      const data = req.body;
      const person = await UsersService.create(data);
      return res.json(person);
    } catch {
      return res.status(400).json({ message: "Invalid data." });
    }
  }

  static async update(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      await UsersService.update(id, data);
      return res.json({ message: "Person updated successfully." });
    } catch (error) {
      return res.status(400).json({ message: "Invalid data." });
    }
  }

  static async delete(req, res) {
    const id = Number(req.params.id);
    await UsersService.delete(id);
    return res.json({ message: "Person deleted." });
  }
}

module.exports = UsersController;
