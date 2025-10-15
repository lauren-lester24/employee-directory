import express from "express";
const app = express(); // create the express app
export default app;

import employees from "#db/employees";

//const express = require("express"); // import the express framework

// path, callback
app.get("/", (request, response) => {
  response.send("Hello Employees");
});

app.get("/employees", (request, response) => {
  response.send(employees);
});

app.get("/employees/:id", (request, response) => {
  console.log(typeof request.params.id);
  const employeeId = Number(request.params.id);
  const foundEmployee = employees.find(
    (employee) => employee.id === employeeId
  );

  if (!foundEmployee) {
    return response.status(404).json({ error: "Employee not found" });
  }
  response.json(foundEmployee);
});
