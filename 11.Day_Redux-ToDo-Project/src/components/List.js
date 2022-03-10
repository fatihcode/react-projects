import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  console.log(props.task.task);
  return (
    <div id="toDoList">
      
      <label htmlFor="basic-input">
        <span className="text-monospace">Things ToDo List</span>
        <br />
        <span className="text-monospace">Click on item to update:</span>
      </label>

      <div className="list-group">

        {props.task.task.map((item, i) => <ListItem key={i} id={i} task={item} />)}

      </div>

    </div>
  );
};

const NoList = () => {
  return (
    <div
      id="toDoList"
      className="d-flex align-items-center justify-content-center"
    >
      <p className="text-muted text-monospace mt-5">Your list is empty</p>
    </div>
  );
};

export { List, NoList };
