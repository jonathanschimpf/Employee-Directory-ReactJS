import React, { useState, useEffect } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import JumbotronComp from "./components/Jumbotron";
import employees from "./employees.json";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [employeeData, updateEmployeeData] = useState({
    allEmployees: [],
    filteredEmployees: [],
    searchQuery: ""
  });

  useEffect(() => {
    updateEmployeeData({
      ...employeeData,
      allEmployees: employees,
      filteredEmployees: employees
    })
  }, [])

  const searchEmployee = () => {
    // updateEmployeeData({...employeeData, searchQuery: name1[0]})

    console.log(employeeData)

    const filteredEmployees = employeeData.allEmployees.filter(({ name }) => name[0] === employeeData.searchQuery)

    updateEmployeeData({
      ...employeeData,
      filteredEmployees
    })
  };

  return (

    <>

      <JumbotronComp searchEmployee={searchEmployee} />

      <Wrapper>
        {employeeData.filteredEmployees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            image={employee.image}
            name={employee.name}
            title={employee.title}
            phone={employee.phone}
            email={employee.email}
            searchEmployee={searchEmployee}
          />
        ))}
      </Wrapper>

    </>
  );
};


export default App;
