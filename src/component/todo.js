import React, { useState } from "react";
// import todo from "../images/todo.svg";
import "./Todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (inputData === "") {
      alert("Kindly provide some Value");
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    const updateItems = items.filter((elem, index) => {
      return index !== id;
    });
    setItems(updateItems);
  };

  const removeAll=()=>{
    setItems([]);
  }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="" alt="todologo"></img>
            <figcaption>Add your List Year ✌️</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="type"
              placeholder="✍️ Add items... ✍️"
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            <i
              class="fa fa-plus add-btn"
              title="Add Item"
              onClick={addItem}
            ></i>
          </div>

          <div className="showItems">
            {items.map((elem, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{elem}</h3>
                  <i
                    class="far fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() => deleteItem(index)}
                  ></i>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
              <span>Check List</span>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
