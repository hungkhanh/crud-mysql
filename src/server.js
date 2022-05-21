const express = require('express');

const app = express();

// routers
const customersRouter = require('./routes/customers.router');
const employeesRouter = require('./routes/employees.router');

app.use('/customers', customersRouter);
app.use('/employees', employeesRouter);

// test api
app.get('/', (req, res) => {
  res.status(200).json({
    statusCode: 200,
    success: true,
    message: 'hello from api',
  });
});

// port
const PORT = process.env.PORT || 8080;

// server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
