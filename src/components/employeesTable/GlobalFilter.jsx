import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);
  return (
    <Form>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text>Find</InputGroup.Text>
        <Form.Control
          placeholder="employees"
          id="inlineFormInputGroup"
          type="text"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
        />
      </InputGroup>
    </Form>
  );
};
