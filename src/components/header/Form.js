import React from "react";
import { Button, FoodInput, FormContainer, Select } from "./HeaderStyle";

const Form = ({ setQuery, query, getData, mealTypes, setMeal, meal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('::::', query, meal);
    getData();
  };

  const handleChange = (e) => {
    setMeal(e.target.value);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button>Search</Button>

      <Select name="mealTypes" id="mealTypes" onChange={handleChange}>
        {mealTypes?.map((item, index) => (
          <option value={item.toLowerCase()} key={index}>
            {item}
          </option>
        ))}
      </Select>
    </FormContainer>
  );
};

export default Form;
