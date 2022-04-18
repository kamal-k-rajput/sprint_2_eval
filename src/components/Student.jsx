import { AddStudent } from "./AddStudent";
import { ShowStudents } from "./ShowStudents";
import { useState, useEffect } from "react";

export const Students = () => {
  const [toggle, settoggle] = useState(true);
  const [data, setdata] = useState([]);
  const [showdata, setshowdata] = useState(false);
  useEffect(() => {
    getdata();
    
  }, []);
  const getdata = () => {
    fetch("http://localhost:8080/students").then((d) => {
      d.json().then((data) => {
        console.log(data);
          setdata(data);
          setshowdata(true);
      });
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          settoggle(!toggle);
        }}
      >
        {toggle ? "Add a new Student" : "Goto the student list"}
      </button>
      {!toggle && showdata ? <AddStudent /> : <ShowStudents data={data} />}
      <div></div>
    </div>
  );
};
