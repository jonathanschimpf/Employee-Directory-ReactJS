import React, { useState, useEffect } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import JumbotronComp from "./components/Jumbotron";
import employees from "./employees.json";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [employeeData, updateEmployeeData] = useState({
    allEmployees: employees,
    filteredEmployees: employees,
    searchQuery: ""
  });

  const sortOrder = (sortASC) => {
    
    console.log("CoN soRt() LoG!")

    const sortedEmployees = employeeData.filteredEmployees.sort((a, b) => {
      // a = a.name.toLowerCase();
      // b = b.name.toLowerCase();
      // return a < b ? -1 : a > b ? 1 : 0;


  var nameA = a.name.toLowerCase();
  var nameB = b.name.toLowerCase();
  if (nameA < nameB) {

    return (sortASC) ?  -1 : 1;
  }

  if (nameA > nameB) {
    return (sortASC) ? 1: -1;
  }

  
  return 0;

    })

    updateEmployeeData({
      ...employeeData,
      filteredEmployees : sortedEmployees
    })
  };


  const searchEmployee = () => {

    console.log(employeeData)

    let filteredEmployees = employeeData.allEmployees.filter(({ name }) =>{

      const lowerCaseJson = name.toLowerCase();

      return lowerCaseJson.includes(employeeData.searchQuery.toLowerCase());

    })

    console.log(filteredEmployees)


    updateEmployeeData({
      ...employeeData,
      filteredEmployees
    })
  };

  useEffect(() => {

    searchEmployee();

  }, [employeeData.searchQuery])


  return (

    <>

      <JumbotronComp sortOrder={sortOrder} updateEmployeeData={updateEmployeeData} 
      searchEmployee={searchEmployee} employeeData={employeeData} />

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
