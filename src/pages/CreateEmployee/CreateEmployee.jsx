import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addInList } from "../../features/employeeSlice";

import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Modal } from "modal-celestin";

import MOCK_STATES_USA_ONLY from "../../data/MOCK_STATES_USA_ONLY.json";
import MOCK_DEPARTMENT from "../../data/MOCK_DEPARTMENT.json";

function CreateEmployee() {
  const dispatch = useDispatch();

  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [start_date, setStartDate] = useState("");
  const [department, setSelectedDepartment] = useState("");
  const [date_of_birth, setBirthDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setSelectedState] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [validated, setValidated] = useState(false);

  const newEmployee = [
    {
      first_name,
      last_name,
      start_date,
      department,
      date_of_birth,
      street,
      city,
      state,
      zip_code,
    },
  ];
  
  function resetInputs() {
    setFirstname("");
    setLastname("");
    setBirthDate("");
    setStartDate("");
    setStreet("");
    setCity("");
    setSelectedState("");
    setZipCode("");
    setSelectedDepartment("");
  }

  const handleModal = (e) => {
    const form = e.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setValidated(true);
      e.preventDefault();
      e.stopPropagation();
      setOpenModal((toggle) => !toggle);
      dispatch(addInList({ newEmployee }));
     
    }
  };

  const handleCancelModal = (e) => {
    e.preventDefault();
    resetInputs();
    setOpenModal(false);
  };

  const customText =
    "Employee created.";

  const customIcone = <p>🛎️</p>;

  return (
    <>
      <Container fluid className="transparent p-3 ">
        <p className="h5 text-center text-dark m-3">Create employee</p>

        <Col xs={10} md={6} className="m-auto">
          <Form
            noValidate
            validated={validated}
            onSubmit={handleModal}
            className="w-100 mb-5 mt-2 shadow border border-dark transparent rounded   m-auto p-3"
          >
            <Form.Label className="mb-2">Identity informations</Form.Label>
            <Row>
              <Col>
                <Form.Group controlId="validationCustom01">
                  <Form.Label visuallyHidden>LastName</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    size="sm"
                    className="mb-1"
                    placeholder="Last name"
                    onChange={(e) => setLastname(e.target.value)}
                    value={last_name}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="validationCustom02">
                  <Form.Label visuallyHidden>FirstName</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    size="sm"
                    className="mb-1"
                    placeholder="First name"
                    onChange={(e) => setFirstname(e.target.value)}
                    value={first_name}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <InputGroup hasValidation size="sm" className="mb-3">
              <InputGroup.Text>Date of birth</InputGroup.Text>
              <Form.Control
                id="inlineFormInputGroup"
                type="date"
                onChange={(e) => setBirthDate(e.target.value)}
                value={date_of_birth}
                required
              />
            </InputGroup>

            <Form.Label className="mb-2">Employee informations</Form.Label>

            <InputGroup hasValidation size="sm" className="mb-2">
              <InputGroup.Text>Hiring date</InputGroup.Text>
              <Form.Control
                id="inlineFormInputGroup"
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
                value={start_date}
                required
              />
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text>Department</InputGroup.Text>
              <Form.Select
                htmlSize="1"
                aria-label="size 3 select example"
                onChange={(e) => setSelectedDepartment(e.target.value)}
                value={department}
                required
              >
                <option>{department}</option>
                {MOCK_DEPARTMENT.map((stateObj, index) => {
                  return (
                    <option key={index} value={stateObj.value}>
                      {stateObj.value}
                    </option>
                  );
                })}
              </Form.Select>
            </InputGroup>

            <Form.Group className="mb-1" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                size="sm"
                placeholder="1234 Main St"
                onChange={(e) => setStreet(e.target.value)}
                value={street}
                required
              />
            </Form.Group>

            <Row className="mb-1">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control
                  placeholder="City"
                  size="sm"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Control
                  size="sm"
                  type="number"
                  placeholder="Zip"
                  onChange={(e) => setZipCode(e.target.value)}
                  value={zip_code}
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formGridState">
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text>State</InputGroup.Text>
                  <Form.Select
                    htmlSize="1"
                    aria-label="size 3 select example"
                    onChange={(e) => setSelectedState(e.target.value)}
                    value={state}
                    required
                  >
                    <option>{state}</option>
                    {MOCK_STATES_USA_ONLY.map((stateObj) => {
                      return (
                        <option
                          key={stateObj.abbreviation}
                          value={stateObj.name}
                        >
                          {stateObj.name}
                        </option>
                      );
                    })}
                  </Form.Select>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row>
              <Col>
                <Button size="sm" variant="btn-outline-dark" type="submit">
                  Submit
                </Button>
                <Button
                  onClick={handleCancelModal}
                  size="sm"
                  variant="btn-outline-dark"
                  type="reset"
                >
                  Reset
                </Button>{" "}
              </Col>
            </Row>
          </Form>
        </Col>
      </Container>

      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        customText={customText}
        customIcone={customIcone}
      />
    </>
  );
}

export default CreateEmployee;
