/*import React from 'react'
import { Item } from './item';
import springboot from "../res/assets/springboot.png";
import django from "../res/assets/django.png";
export const ItemList = () => {
    return (
        <>
        <div>
            <Item img={springboot} todo="Learn Java" desc="Learn Spring Boot"/>
            <Item img={django} todo="Learn Python" desc="Learn Django"/>
        </div>
        </>
    );
}*/

/*import {React, useState} from 'react'
import { Item } from './item';
import springboot from "../res/assets/springboot.png";
import django from "../res/assets/django.png";
export const ItemList = () => {
    const [todos, setTodos] = useState([
    {
        index: 0,
        img: springboot,
        todo: "Learn Java",
        desc: "Learn Spring Boot",
    },
    {
        index: 1,
        img: django,
        todo: "Learn Python",
        desc: "Learn Django",
    },
    {
        index: 2,
        img: django,
        todo: "Learn Python",
        desc: "Learn Django",
    },]);
    const onDelete = (index) => {
        console.log(index); // 0
       
        setTodos(todos.filter((t) => {
            return t.index!=index;
        }));
    }
   
    return (
        <>
        <div className="container">
            {todos.map((todo) => {
                return <Item todo={todo} onDelete={() => onDelete(todo.index)}/>
            })}
        </div>
        </>
    );
}*/

import { React, useState, useEffect } from "react";
import { Item } from "./item";
import { AddTodo } from "./addTodo";
export const ItemList = () => {
    let mytodo;
    if(localStorage.getItem("todos")!==null){
        mytodo=JSON.parse(localStorage.getItem("todos"));
    }else{
        mytodo =[];
    }
  const [todos, setTodos] = useState(mytodo);

  useEffect(() => {
     localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  const onDelete = (index) => {
    console.log(index); // 0
    setTodos(
      todos.filter((t) => {
        return t.index != index;
      })
    );
  };
  const addTodo = (title, descrip) => {
    let i;
    if(todos.length === 0) {
        i = 0;
    } else {
        i = todos[todos.length - 1].index + 1;
    }
    let meow = {
        index: i,
        todo: title,
        desc: descrip
    }
    setTodos([...todos, meow]);
  }
  if(todos.length === 0) {
      return (
          <>
          <AddTodo addTodo={addTodo}/>
          <div className="container">
            <h2>No Todo Present</h2>
          </div>
          </>
      );
  } else {
    return (
        <>
          <AddTodo addTodo={addTodo}/>
          <div className="container">
            <div className="row">
              {todos.map((todo) => {
                return (
                  <>
                    <Item todo={todo} onDelete={() => onDelete(todo.index)} />
                  </>
                );
              })}
            </div>
          </div>
        </>
      );
  }
};