const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

class UserController {
  static async getUsers(req, res) {
    try {
      const users = await User.findAll();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async register(req, res) {
    try {
      const { username, email, password, role } = req.body;

      let image = 'https://via.placeholder.com/100';

      const saltRounds = bcrypt.genSaltSync(10);
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      let result = await User.create({
        username,
        email,
        // password,
        password: hashedPassword,
        role,
        image,
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async login(req, res) {
    try {
      const { email, password } = req.body;

      let result = await User.findOne({
        where: {
          email,
        },
      });

      if (!result) {
        return res.status(400).json({
          message: `username atau password salah`,
        });
      }

      const checkPassword = await bcrypt.compare(password, result.password);
      if (!checkPassword) {
        return res.status(400).json({
          message: `username atau password salah`,
        });
      }

      // if (result.password !== password) {
      //   return res.status(401).json({
      //     message: `Invalid username or password`,
      //   });
      // }

      const token = jwt.sign(
        {
          id: result.id,
          username: result.username,
          createdat: result.createdat,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: '30d',
        }
      );

      const response = {
        accessToken: token,
      };

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async delete(req, res) {
    try {
      const { id } = req.params;
      let result = await User.destroy({
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
      const { username, email, password, role, image } = req.body;
      const saltRounds = bcrypt.genSaltSync(10);
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      let result = await User.update(
        {
          username,
          email,
          password: hashedPassword,
          role,
          image,
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
      const result = await User.findByPk(id);

      result
        ? res.status(200).json(result)
        : res.status(404).json({
            message: `User id ${id} not found`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UserController;
