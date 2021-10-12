import './App.css';
import React from 'react';
import Block from "./Components/Block";
let counter = 0;
let color = 0;

function App() {
    const [data, setData] = React.useState(["red","green","blue"]);
    const [list, setList] = React.useState([]);
    const [change, setChange] = React.useState(false);

    React.useEffect(()=>{},[list,change])

    let elements = list.map((itm, idx)=>
        <div key={idx}><Block data={{backColor:data[color]}}></Block></div>
    )

    const reset =()=>{
        setList([]);
        counter = 0;
        color = 0;
        let newList = ["#" + Math.floor(Math.random()*16777215).toString(16),"#" + Math.floor(Math.random()*16777215).toString(16),"#" + Math.floor(Math.random()*16777215).toString(16)];
        setData(newList);
    }

    const addList =()=>{
        counter++;
        if(counter % 2 === 1) {
            let newList = list;
            newList.push("new");
            setList(newList);
        }
        if(counter % 5 === 0) {
            color++;
            if(color > 2) {
                color = 0;
            }
        }
        setChange(!change);
    }

  return (
    <div className="App">
        <button onClick={addList}>Increase</button>
        <button onClick={reset}>Reset</button>
        {elements}
    </div>
  );
}

export default App;
