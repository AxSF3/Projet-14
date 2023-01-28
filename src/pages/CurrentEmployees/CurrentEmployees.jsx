import React from "react";
import Container from "react-bootstrap/Container";
import EmployeesTable from "../../components/employeesTable/EmployeesTable";

function CurrentEmployees() {
  return (
    <Container fluid className="transparent p-3">
      <p className="h5 text-center text-dark m-3">Current employee</p>
      <Container fluid bg="dark" className="w-75 bg-light rounded shadow p-3">
        <EmployeesTable />
      </Container>
    </Container>
  );
}

export default CurrentEmployees;
