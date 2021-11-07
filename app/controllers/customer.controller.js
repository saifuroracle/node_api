const Customer = require("../models/customer.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    console.log(req.body);
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const customer = new Customer({
      email: req.body.email,
      name: req.body.name,
      active: req.body.active
    });
  
    // Save Customer in the database
    Customer.create(customer, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Customer.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
    console.log('req.body.id', req.body.id);
    Customer.findById(req.body.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.body.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.body.id
          });
        }
      } else res.send(data);
    });
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Customer.updateById(
      req.body.id,
      new Customer(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.body.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Customer with id " + req.body.id
            });
          }
        } else res.send(data);
      }
    );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Customer.remove(req.body.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.body.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Customer with id " + req.body.id
          });
        }
      } else res.send({ message: `Customer was deleted successfully!` });
    });
};

