module.exports = app => {
    const customers = require("../controllers/customer.controller.js");
  
    // Create a new Customer
    app.post("/api/v1/customers/createCustomer", customers.create);
  
    // Retrieve all Customers
    app.post("/api/v1/customers/getAllCustomers", customers.findAll);
  
    // Retrieve a single Customer with customerId
    app.post("/api/v1/customers/:customerId", customers.findOne);
  
    // Update a Customer with customerId
    app.post("/api/v1/customers/:customerId", customers.update);
  
    // Delete a Customer with customerId
    app.post("/api/v1/customers/:customerId", customers.delete);
  
    // Create a new Customer
    app.post("/api/v1/customers", customers.deleteAll);
};