import { Button, Input, Space } from "antd";
import React, { useContext, useEffect, useState } from "react";
import DataContext from "../DataContext.jsx";
import { Checkbox } from "antd";
import {DeleteOutlined} from '@ant-design/icons'

const Complete = () => {
  const dataContext = useContext(DataContext);
  const [newData, setNewData] = useState([]);
  // const [isActive, setIsActive] = useState(false);
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleOnchange = (e) => {
    // console.log(checked)
    setInputValue(e.target.value);
  };
  const dataNew = dataContext.data.filter((itemt) => itemt.checked);

  const deleteAll = () => {
      const deleteAll = dataContext.data.filter((itemt) => !itemt.checked);
      dataContext.onChangeData(deleteAll)
  }

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


  const handleClick = () => {
    dataContext.onChangeData([
      ...dataContext.data,
      {
        id: Math.floor(Math.random() * 100000),
        value: inputValue,
        checked: false,
      },
    ]);
  };

  const handleDeleteOne = (e) => {
    const dataNew = dataContext.data.filter((itemt) => ((e.target.id != itemt.id) ? itemt : '' )
    )

    console.log(dataNew)
    dataContext.onChangeData(dataNew)
   
  }

  // setIsActive(false)
  useEffect(() => {
    const input = document.querySelector("#input");

    console.log(document.querySelector("#input"))
    input.value = "";
  }, []);

 
  return (
    <div>
      <div>
        <div style={{ display: "flex" }}>
          <Input
            placeholder="Basic usage"
            onChange={handleOnchange}
            id="input"
          />
          <Space wrap>
            <Button type="primary" size={24} onClick={handleClick}>
              Add
            </Button>
          </Space>
        </div>
        <table>
          {dataNew.map((itemt, index) => (
            <tr> 
              <td id={index}>
                <Checkbox
                  className={itemt.checked === false ? "" : "line-through"}
                  name="input"
                  onChange={onChange}
                  id={itemt.id}
                  checked={itemt.checked}
                  // value={dataContext.data}
                >
                  {itemt.value}
                </Checkbox>
              </td>
              <td><Button type="primary" onClick={handleDeleteOne}  id={itemt.id}><DeleteOutlined id="deleteicont"/></Button></td>
            </tr>
          ))}
          <tr>
            <td>
              <Button type="primary" danger onClick={deleteAll}><DeleteOutlined />
                Delete all
              </Button>
              
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Complete;
