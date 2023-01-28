import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

// React-Table
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useBlockLayout,
} from "react-table";


// React-Bootstrap
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// Table Components
import { GlobalFilter } from "./GlobalFilter";

// Table DATA
import MOCK_DATA from "../../data/MOCK_DATA.json";
import { GROUPED_COLUMNS } from "./columns";

function EmployeesTable() {
  // TO HAVE REEL EMPLOYEE DATA
  const employees = useSelector((state) =>
    state?.employee.employeesList.map((employee) => {
      return employee.newEmployee[0];
    })
  );
  // TO HAVE MOCKED EMPLOYEE DATA
  const dataMocked = useMemo(() => MOCK_DATA, []);

  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const [data, setData] = useState([...dataMocked]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useBlockLayout
  );

  const firstPageRows = page.slice(0, 100);
  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="d-flex justify-content-sm-end mx-auto">
            <Button
              variant="warning"
              size="sm"
              className="w-75 fw-light font-monospace text-center text-sm text-capitalize m-3 "
              onClick={() => {
                setData([...dataMocked]);
              }}
            >
              Mocked Data
            </Button>
          </Col>
          <Col>
            <Button
              variant="warning"
              size="sm"
              className="w-75 fw-light font-monospace text-center text-sm text-capitalize m-3 "
              onClick={() => {
                setData([...employees]);
              }}
            >
              Listed Data
            </Button>
          </Col>
        </Row>
        <Row className="h-8">
          <Col>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text>Show</InputGroup.Text>
              <Form.Select
                htmlSize="1"
                aria-label="size 3 select example"
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {[1, 5, 10, 25, 50, 100].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </Form.Select>
            </InputGroup>
          </Col>
          <Col>
            <GlobalFilter
              pageSize={pageSize}
              filter={globalFilter}
              setFilter={setGlobalFilter}
            />
          </Col>
          <Col>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text>Page</InputGroup.Text>
              <Form.Control
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
                style={{ width: "50px" }}
                id="inlineFormInputGroup"
                type="number"
                placeholder="1, 2, 3..."
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>

      <Table
        {...getTableProps()}
        responsive
        striped
        hover
        size="lg"
        variant="light"
      >
        <thead
          style={{ fontSize: 16 }}
          className="fw-bold text-center text-capitalize"
        >
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody style={{ fontSize: 12 }} {...getTableBodyProps()}>
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <tr style={{ fontSize: 12 }} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      style={{ fontSize: 12 }}
                      className="fw-light font-monospace text-center  text-sm text-capitalize"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Container />
      <Row className="mt-3">
        <Container
          style={{ fontSize: 16 }}
          className="fw-light font-monospace text-left text-sm text-capitalize"
        >
          <Col>
            Page {pageIndex + 1} of {pageOptions.length}
          </Col>
        </Container>
        <Container fluid className="mt-1 ">
          <Col className="d-flex justify-content-sm-end fw-light font-monospace text-center text-sm text-capitalize m-1">
            <Button
              style={{ fontSize: 16 }}
              className="fw-light font-monospace text-center text-sm text-capitalize m-1"
              size="sm"
              variant="btn-outline-dark"
              type="submit"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {"Begin"}
            </Button>{" "}
            <Button
              style={{ fontSize: 16 }}
              className="fw-light font-monospace text-center text-sm text-capitalize m-1"
              size="sm"
              variant="btn-outline-dark"
              type="submit"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Previous
            </Button>{" "}
            <Button
              style={{ fontSize: 16 }}
              className="fw-light font-monospace text-center text-sm text-capitalize m-1"
              size="sm"
              variant="btn-outline-dark"
              type="submit"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
            </Button>{" "}
            <Button
              style={{ fontSize: 16 }}
              className="fw-light font-monospace text-center text-sm text-capitalize m-1"
              size="sm"
              variant="btn-outline-dark"
              type="submit"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {"End"}
            </Button>{" "}
          </Col>
        </Container>
      </Row>
      <Container />
    </>
  );
}

export default EmployeesTable;
