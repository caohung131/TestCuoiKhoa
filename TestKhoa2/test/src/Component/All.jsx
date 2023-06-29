import { Button, Input, Space } from "antd";
import React, { useContext, useEffect, useState } from "react";
import DataContext from "../DataContext.jsx";
import { Checkbox } from "antd";

const All = () => {
  const dataContext = useContext(DataContext);
  // const [isActive, setIsActive] = useState(false);
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleOnchange = (e) => {
    // console.log(checked)
    setInputValue(e.target.value);
  };

  //checked
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    if (e.target.checked) {
      console.log(dataContext);
      const newObj = dataContext.data.map((itemtC) => {
        if (itemtC.id === e.target.id) {
          return { ...itemtC, checked: !itemtC.checked };
        } else {
          return itemtC;
        }
      });

      dataContext.onChangeData(newObj);
    }

    // console.log(e.target)
  };

  useEffect(() => {
    const input = document.getElementById("input");
    input.value = "";
  }, [dataContext.data]);

  const handleClick = () => {
    dataContext.onChangeData([
      ...dataContext.data,
      {
        id: Math.floor(Math.random() * 100000),
        value: inputValue,
        checked: false,
      },
    ]);
    setInputValue("");
  };

  // setIsActive(false)

  const handleClick2 = (e) => {
    e.target.value = "";
    setInputValue("");
  };

   

  return (
    <div>
      <div>
        <div style={{ display: "flex" }}>
          <Input
            placeholder="Basic usage"
            onChange={handleOnchange}
            id="input"
            onClick={handleClick2}
          />
          <Space wrap>
            <Button type="primary" size={24} onClick={handleClick}>
              Add
            </Button>
          </Space>
        </div>
        <table>
          {dataContext.data.map((itemt, index) => (
            <tr>
              <td id={index}>
                <Checkbox
                  className={itemt.checked === false ? "" : "line-through"}
                  name="input"
                  onChange={onChange}
                  id={itemt.id}
                  // value={dataContext.data}
                  checked={itemt.checked}
                >
                  {itemt.value}
                </Checkbox>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default All;
