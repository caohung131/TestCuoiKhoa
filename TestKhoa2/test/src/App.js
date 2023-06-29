import React, { useEffect, useState } from "react";
import All from "./Component/All";
import Active from "./Component/Active";
import Complete from "./Component/Complete";
import "./style.css";

import { Tabs } from "antd";
import DataContext from "./DataContext.jsx";

const onChange = (key) => {
  console.log(key);
};

//tabs andt
const items = [
  {
    key: "1",
    label: `All`,
    children: <All />,
  },
  {
    key: "2",
    label: `Active`,
    children: <Active />,
  },
  {
    key: "3",
    label: `Completed`,
    children: <Complete />,
  },
];

const App = () => { 
  
  const dataJson = localStorage.getItem("data");
  const dataStorage = JSON.parse(dataJson);
  console.log(dataStorage);

  const [data, setData] = useState( (dataStorage) ? dataStorage : [
    {
      id: Math.floor(Math.random() * 100000),
      value: "Do some thing",
      checked: false,
    },
    {
      id: Math.floor(Math.random() * 100000),
      value: "Do some thing 2",
      checked: false,
    },
  ]);

 


   //day data
   useEffect(() => {
    const setjson = JSON.stringify(data);
    localStorage.setItem("data", setjson);
  }, [data]);

  return (
    <DataContext.Provider
      value={{
        data: data,
        onChangeData: setData,
      }}
    >
      <div>
        <div className="container">
          <h1 style={{ textAlign: "center" }}>#To do</h1>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default App;
