const bcrypt = require("bcryptjs");
const ClientModel = require("../models/clientsModels");

const clientsController = {
  createClient: async (request, response) => {
    try {
      const {
        name,
        lastName,
        userName,
        phone,
        email,
        password,
        birthday,
        preferences,
        hasCreditCard,
      } = request.body;

      encryptPass = await bcrypt.hash(password, 10);
      const newClient = new ClientModel({
        name,
        lastName,
        userName,
        phone,
        email,
        password: encryptPass,
        birthday,
        preferences,
        hasCreditCard,
      });

      const clientCreated = await newClient.save();
      if (clientCreated)
        response.json({
          message: `Client created by ID: ${clientCreated._id}`,
        });
      else throw new Error(`Error creating a new client`);
    } catch (error) {
      response.json({ message: `Error during create a client` });
    }
  },

  readAllClients: async (request, response) => {
    try {
      const getClients = await ClientModel.find();
      if (getClients) response.json({ getClients });
      else throw new Error(`Error ocurred during read all clients`);
    } catch (error) {
      response.json({ message: `Error during read clients` });
    }
  },
  readClient: async (request, response) => {
    try {
      const getClient = await ClientModel.findById(request.params.id);
      if (getClient) response.json({ getClient });
      else throw new Error(`Error ocurred during search ID`);
    } catch (error) {
      response.json({
        message: `An error occurred with the read operation, please try again`,
      });
    }
  },

  updateClient: async (request, response) => {
    try {
      const {
        name,
        lastName,
        userName,
        phone,
        email,
        password,
        birthday,
        preferences,
        hasCreditCard,
      } = request.body;

      let updateClient = null;
      if (password) {
        updatePass = await bcrypt.hash(password, 10);
        updateClient = await ClientModel.findByIdAndUpdate(request.params.id, {
          name,
          lastName,
          userName,
          phone,
          email,
          password: updatePass,
          birthday,
          preferences,
          hasCreditCard,
        });
      } else {
        updateClient = await ClientModel.findByIdAndUpdate(request.params.id, {
          name,
          lastName,
          userName,
          phone,
          email,
          password: birthday,
          preferences,
          hasCreditCard,
        });
      }

      if (updateClient)
        response.json({
          message: `Client with _id: ${updateClient._id} update satisfactory`,
        });
      else throw new Error(`Please check  the information, client not found`);
    } catch (error) {
      response.json({
        message: `An error occurred with the update operation, please try again`,
      });
    }
  },
  deleteClient: async (request, response) => {
    try {
      const deleteClient = await ClientModel.findByIdAndDelete(
        request.params.id
      );
      if (deleteClient)
        response.json({
          message: `Client with _id: ${deleteClient._id} was deteled`,
        });
      else throw new Error(`Client did not found`);
    } catch (error) {
      response.json({
        message: `An error occurred with the delete operation, please try again`,
      });
    }
  },
};

module.exports = clientsController;
