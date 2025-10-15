import express from "express";
import employees from "#db/employees";

const app = express(); // create the express app



//const express = require("express"); // import the express framework

// path, callback
app.get("/", (request, response) => {
  response.send("Hello Employees");
});

app.get("/employees", (request, response) => {
  response.json(employees);
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


app.get("/employees/random", (request, response) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  response.json(randomEmployee);
});

export default app;
