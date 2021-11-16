/*import React from "react";
import "./item.css";
export const Item = (props) => {
  return (
    <>
      <div className="card">
        <img id="todoimg" src={props.img} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{props.todo}</h5>
          <p className="card-text">
            {props.desc}
          </p>
          <a href="/" className="btn btn-primary">
            Completed
          </a>
        </div>
      </div>
    </>
  );
};*/


/*import React from "react";
import "./item.css";
export const Item = ({todo, onDelete}) => {
  return (
    <>
    <div className="card">
    <img id="todoimg" src={todo.img} className="card-img-top" />
    <div className="card-body">
        <h5 className="card-title">{(todo.index + 1) + ") " + todo.todo}</h5>
        <p className="card-text">{todo.desc}</p>
        <button className="btn-sm btn-danger" onClick={() => onDelete(todo.index)}>Delete</button>
    </div>
    </div>
    </>
  );
};*/

import React from "react";
import "./item.css";
export const Item = ({ todo, onDelete }) => {
  return (
    <>
      <div className="col">
        <div id="mycard" className="card">
          <div className="card-body">
            <h5 id="title" className="card-title">
              {todo.todo}
            </h5>
            <p id="desc" className="card-text">
              {todo.desc}
            </p>
            <button
              className="btn-sm btn-danger"
              onClick={() => onDelete(todo.index)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};