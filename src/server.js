const express = require('express');

const app = express();

// routers
const customersRouter = require('./routes/customers.router');
const employeesRouter = require('./routes/employees.router');
const officesRouter = require('./routes/offices.router');
const reportRouter = require('./routes/report.router');

app.use('/customers', customersRouter);
app.use('/employees', employeesRouter);
app.use('/offices', officesRouter);
app.use('/report', reportRouter);

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
