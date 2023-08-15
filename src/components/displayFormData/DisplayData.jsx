import React from "react";
//import { useState } from "react/cjs/react.development";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import FormInput from "./FormInput";
import Table from "./Tabel";
function DisplayData() {
  const [tableData, setTableData] = useState([]);
  const [formInputData, setformInputData] = useState({
    fullName: "",
    emailAddress: "",
    salary: "",
    id: "",
  });
  console.log(tableData, "tabledatas");
  console.log(formInputData);
  const [id, setID] = useState("");

  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,
    });
    setformInputData(newInput);
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = Object.values(formInputData).every(
      (res) => res === ""
    );
    console.log(checkEmptyInput);
    console.log(checkEmptyInput, "check");
    if (!checkEmptyInput) {
      if (formInputData.id) {
        const arr = tableData.map((elem) =>
          formInputData.id === elem.id ? formInputData : elem
        );
        setTableData(arr);
        const emptyInput = { fullName: "", emailAddress: "", salary: "" };
        setformInputData(emptyInput);
      } else {
        //  const newData = (data) => [...data, formInputData];
        setTableData((data) => [...data, { ...formInputData, id: uuidv4() }]);
        const emptyInput = { fullName: "", emailAddress: "", salary: "" };
        setformInputData(emptyInput);
      }
    }
  };
  const handleCallBack = (task) => {
    setformInputData(task);
    console.log(task, "callbasck");
  };
  const handleDeletedata = (data) => {
    console.log(data, "in delete");
    setTableData(data);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <FormInput
              handleChange={handleChange}
              formInputData={formInputData}
              handleSubmit={handleSubmit}
            />
            <Table
              tableData={tableData}
              onhandleCallBack={handleCallBack}
              onHandleDelete={handleDeletedata}
            />
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default DisplayData;
