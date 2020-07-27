import React from 'react';
import './ToDoListMat.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import ListComp from './ListComp';

const ToDoListMat = () => {
    const [item, setItem] = useState("");
    const [itemArr, setItemArr] = useState([]);
    const inputEvent = (event) => {
        setItem(event.target.value);
    };
    
    const itemsList = () => {
        setItemArr((preVal) => {
            return [...preVal, item];
        });
        setItem("");
    };
    const clearList = () => {
        setItemArr((preVal) => {
            return [];
        });
    };
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" value={item} placeholder="Add Items" onChange={inputEvent} />
                    <Button className="newBtn" onClick={itemsList}>
                        <AddIcon />
                    </Button>
                    
                    <br />
                    <ol>
                        {itemArr.map((val, index) => {
                            return <ListComp key={index} text={val}  />
                        })}
                    </ol>
                    <br />
                    <Button onClick={clearList} className="clearbtn">Clear</Button>

                </div>
            </div>
        </>
    );
};

export default ToDoListMat;