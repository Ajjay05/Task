import store from './store';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incNum, decNum } from './action/index';
import Todo from './components/Todo';

const App = () => {

const myState=useSelector((state)=> state.incDec);
const dispatch = useDispatch();

  return (
    <>
<Todo></Todo>
    </>
  );
}

export default App;
