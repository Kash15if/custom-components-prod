import "./App.css";


// // importing data
import dummyData from "./data/data1";
import expandableTableDataForComp from "./data/expandableWithComponent";
import expandableTableData from "./data/expandableData";
import { useEffect, useState } from "react";

import Home from "./Pages/Homepage"
import Tables from "./Pages/Tables";

import { Route, Routes } from "react-router-dom";

function App() {


  const [columns, setColumns] = useState();
  const [data, setData] = useState(dummyData)
  useEffect(() => {
    let tempCols = Object.keys(dummyData[0]).map((colName) =>
    ({
      column: colName, sortable: true, editable: true, filterable: true,
      formInputDetails: { defaultVal: "abcd", inputType: "text", radioLabel: "Please select your favorite Web language:", data: [{ label: "xyz", value: "abc" }, { label: "uvw", value: "def" }], min: 0, max: 5 }
    }));

    tempCols.innerColumns = [
      {
        column: "current_address", sortable: true, filterable: true,

      }, {
        column: "permanent_address", sortable: true, filterable: true,

      },

    ]

    tempCols.innerColumns.innerColumns = [{
      column: "current_address", sortable: true, filterable: true,

    }, {
      column: "permanent_address", sortable: true, filterable: true,

    },]
    setColumns(tempCols);
    console.log(tempCols)
  }, []);


  const upDateData = (newaData) => {
    setData(newaData);
  }
  return (
    <div>

      <Routes>


        <Route path="/" element={<Home />} />


        <Route path="/tables" element={dummyData && columns && <Tables dummyData={dummyData} data={data}
          upDateData={upDateData}
          columns={columns}
          colmns={columns}
          expandableTableData={expandableTableData}
          expandableTableDataForComp={expandableTableDataForComp}
        />} />

        {/* <Route path="/popups" element={<Popups />} /> */}
      </Routes>

    </div>

  );
}

export default App;
