const bcrypt = require("bcryptjs");
const getToken = require("../helpers/gets");
const UserModel = require("../models/usersModels");

const usersController = {
  createUser: async (request, response) => {
    try {
      const {
        firstName,
        lastName,
        gender,
        userName,
        email,
        password,
        birthday,
        phone,
        rol,
      } = request.body;

      const encryptPassword = await bcrypt.hash(password, 10);
      const newUser = new UserModel({
        firstName,
        lastName,
        gender,
        userName,
        email,
        password: encryptPassword,
        birthday,
        phone,
        rol,
      });

      const userCreated = await newUser.save();
      const token = await getToken({
        id: userCreated._id,
        userName: userCreated.userName,
        firstName: userCreated.firstName
      });
      response.json({ message: `user created correctly`, token });
    } catch (error) {
      response.json({
        message: `Error during created user!, please check the information`,
      });
    }
  },

  getAllUsers: async (request, response) => {
    try {
      const readAllUsers = await UserModel.find();
      response.json({ readAllUsers });
    } catch (error) {
      response.json({
        message: `Error during read users!, someone wrong`,
      });
    }
  },

  getUser: async (request, response) => {
    try {
      const readUser = await UserModel.findById(request.params.id);
      if (readUser) {
        response.json({ readUser });
      } else throw new Error(`id didn't find, please check the information`);
    } catch (error) {
      response.json({ message: `Someone wrong, there was a problem` });
    }
  },

  updateUser: async (request, response) => {
    try {
      const {
        firstName,
        lastName,
        gender,
        userName,
        email,
        password,
        birthday,
        phone,
        rol,
      } = request.body;
      let userUpdate = null;
      if (password) {
        const encryptPassword = await bcrypt.hash(password, 10);
        userUpdate = await UserModel.findByIdAndUpdate(request.params.id, {
          firstName,
          lastName,
          gender,
          userName,
          email,
          password: encryptPassword,
          birthday,
          phone,
          rol,
        });
      } else {
        userUpdate = await UserModel.findByIdAndUpdate( request.params.id, {
          firstName,
          lastName,
          gender,
          userName,
          email,
          birthday,
          phone,
          rol,
        });
      }
      if (userUpdate) {
        response.json({
          message: `User with _id:${userUpdate._id} update satisfactory`,
        });
      } else throw new Error(`Please check  the information, user not found`);
    } catch (error) {
      response.json({
        message: `Error, something happened when we tried to update`,
      });
    }
  },

  deleteUser: async (request, response) => {
    try {
      const userDelete = await UserModel.findByIdAndRemove(request.params.id);
      if (userDelete) { 
        response.json({
          message: `User with _id: ${userDelete._id} was deteled`,
        });
      } else throw new Error(`User did not found`);
    } catch (error) {
      response.json({
        message: `Error, something happened when we tried to delete the user`,
      });
    }
  },
};

module.exports = usersController;
