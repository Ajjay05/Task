import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Todo.css"
import {addItem, deleteItem } from "../action/index";
import Todoreducer from "../reducer/Todoreducer";
const Todo = () => {


const [inputData, setInputData] = useState('');
const dispatch = useDispatch();
const list = useSelector((state)=>state.Todoreducer.list);


    return(
<>
<div className='container'>
    <div><input type="text" placeholder='Add your Item' value={inputData} onChange={(event) =>setInputData(event.target.value) }></input></div>
   <div><button onClick={() => dispatch(addItem(inputData),setInputData(''))}>Add</button></div>
   
    </div>

    

    <div >
    
    {
    list.map((element)=> {
    
        return(
     <div className="container" key={element.id}>
<div className="container"><button onClick={() => dispatch(deleteItem(element.id))}>X</button></div>
<div className="row"><h1>{element.data}</h1></div>
</div>

      )  })
    
    }

</div>


</>

    );
}
export default Todo;