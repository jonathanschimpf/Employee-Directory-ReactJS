import React, { useState, useEffect } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import JumbotronComp from "./components/Jumbotron";
import employees from "./employees.json";
// import DunderCard from "./components/DunderCard";
// import DunderCardDeck from "./components/DunderCardDeck";
// import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

// app function where we useState //

function App() {
  const [employeeData, updateEmployeeData] = useState({

    allEmployees: employees,
    filteredEmployees: employees,
    searchQuery: ""

  });

  // sort buttons functionality
  // ascending + descending

  const sortOrder = (sortASC) => {

    console.log("CoN soRt() LoG!")

    const sortedEmployees = employeeData.filteredEmployees.sort((a, b) => {

      var nameA = a.name.toLowerCase();
      var nameB = b.name.toLowerCase();

      if (nameA < nameB) {

        return (sortASC) ? -1 : 1;

      }

      if (nameA > nameB) {

        return (sortASC) ? 1 : -1;

      }


      return 0;

    })

    updateEmployeeData({

      ...employeeData,
      filteredEmployees: sortedEmployees

    })
  };

  // live search feature that considers each letter typed
  // instantly gives results and displays none if consecutive..
  // .. characters do not exist in employee name.

  const searchEmployee = () => {

    console.log(employeeData)

    let filteredEmployees = employeeData.allEmployees.filter(({ name }) => {

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

  // here we return and layout the order of the page..
  // .map is used to generate all employees in the .json..
  // .. array (our local db) and then also helps in live search

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
