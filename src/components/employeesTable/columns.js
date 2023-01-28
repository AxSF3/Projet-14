export const COLUMNS = [
  { Header: "First Name", Footer: "First Name", accessor: "first_name" },
  { Header: "Last Name", Footer: "Last Name", accessor: "last_name" },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
  },
  { Header: "Hiring Date", Footer: "Hiring Date", accessor: "start_date" },
  { Header: "Department", Footer: "Department", accessor: "department" },
  { Header: "Street", Footer: "Street", accessor: "street" },
  { Header: "City", Footer: "City", accessor: "city" },
  { Header: "State", Footer: "State", accessor: "state" },
  { Header: "Zip Code", Footer: "Zip Code", accessor: "zip_code" },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Fixed columns",
    Footer: "Fixed columns",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
    sticky: "left",
  },
  {
    Header: "Employee informations",
    Footer: "Employee informations",
    columns: [
      {
        Header: "birthday",
        Footer: "birthday",
        accessor: "date_of_birth",
      },
      {
        Header: "Hiring Date",
        Footer: "Hiring Date",
        accessor: "start_date",
      },
      { Header: "Department", Footer: "Department", accessor: "department" },
    ],
  },
  {
    Header: "Address",
    Footer: "Address",
    columns: [
      { Header: "Street", Footer: "Street", accessor: "street" },
      { Header: "City", Footer: "City", accessor: "city" },
      { Header: "State", Footer: "State", accessor: "state" },
      { Header: "Zip Code", Footer: "Zip Code", accessor: "zip_code" },
    ],
  },
];
