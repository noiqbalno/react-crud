const { Item, User } = require('../models');

class ItemController {
  static async getItems(req, res) {
    try {
      const items = await Item.findAll({
        order: [['id', 'ASC']],
        include: [User],
      });

      res.status(200).json(items);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async create(req, res) {
    try {
      const { name, category, price, stock, UserId } = req.body;

      let image = 'https://via.placeholder.com/100';

      let result = await Item.create({
        name,
        category,
        price,
        stock,
        image,
        UserId,
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async delete(req, res) {
    try {
      const { id } = req.params;
      let result = await Item.destroy({
        where: {
          id: +id,
        },
      });

      result === 1
        ? res.status(200).json({
            message: `id ${id} has been deleted`,
          })
        : res.status(200).json({
            message: `id ${id} has not been deleted`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { name, category, price, stock, image, UserId } = req.body;

      let result = await Item.update(
        {
          name,
          category,
          price,
          stock,
          image,
          UserId,
        },
        {
          where: {
            id: +id,
          },
        }
      );
      result[0] === 1
        ? res.status(200).json({
            message: `id ${id}: has been updated`,
          })
        : res.status(200).json({
            message: `id ${id}: has not been updated`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getDetails(req, res) {
    try {
      const { id } = req.params;
      const result = await Item.findByPk(id);

      result
        ? res.status(200).json(result)
        : res.status(404).json({
            message: `Item id ${id} not found`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = ItemController;
