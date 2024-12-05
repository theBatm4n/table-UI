import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";
// import { useHover } from "@uidotdev/usehooks";
import './App.css';
import Button from './button.js';


const App = () => {
  const [Selectedtopics, setselectedtopics] = useState([])
  let selectedTopicsarray = [];
  // const [ref, hovering] = useHover();
  
  const mycellcomponent = (p) => {
    const handleClick = (value) => {
      console.log(value);
      if(!selectedTopicsarray.includes(value)){ // check if it exists in the filtered topics
        selectedTopicsarray.push(value);
        setselectedtopics(Selectedtopics => [...Selectedtopics, value]);
        console.log(selectedTopicsarray)
        console.log(Selectedtopics)
        // call the function for updating filters
      }
    };
    
    const isTopicSelected = (value) => { // check if the topic exists in the filtered topics
      return selectedTopicsarray.includes(value);
    }; 

    return (
      <>
        <Button 
          value={p.data.ticker}
          isButtonSelected={isTopicSelected(p.data.ticker)}
          handleClick={() => handleClick(p.data.ticker)}
        />
        <span> {' > '} </span>
        <button className={isTopicSelected(p.data.segment) ? 'button_selected' : 'button'} 
          onClick={() => handleClick(p.data.segment)}> 
          {p.data.segment} 
        </button>
        <span> {' > '} </span>
        <button className={isTopicSelected(p.data.metric) ? 'button_selected' : 'button'}
          onClick={() => handleClick(p.data.metric)}> 
          {p.data.metric} 
        </button>
      </>
    );
  };

  const [rowData] = useState([
    { ticker: "#TCS.NS", segment: "#Revenue", metric: "#Manufacturing", Date: "2024-09-11", Timeperiod: '3M ', Unit:"INR", Value: "19.19m" },
    { ticker: "#Amazon", segment: "#Profit", metric: "#Retail", Date: "2024-09-15", Timeperiod: '1Y ', Unit:"USD", Value: "5.67b" },
    { ticker: "#Microsoft", segment: "#Revenue", metric: "#Retail", Date: "2024-09-20", Timeperiod: '6M ', Unit:"EUR", Value: "8.42m" },
    { ticker: "#Amazon", segment: "#Profit", metric: "#Advertising", Date: "2024-09-25", Timeperiod: '2Y ', Unit:"JPY", Value: "3.91b" },
    { ticker: "#Apple", segment: "#Revenue", metric: "#Manufacturing", Date: "2024-09-30", Timeperiod: '1Y ', Unit:"USD", Value: "15.75b" },
    { ticker: "#TCS.NS", segment: "#Profit", metric: "#Retail", Date: "2024-10-05", Timeperiod: '3M ', Unit:"GBP", Value: "2.19b" }
  ]);
  
  const [colDefs] = useState([
    { 
      flex: 2,
      headerName: 'Topics',
      cellRenderer: mycellcomponent
    },
    { headerName: 'Date', field: 'Date' },
    { headerName: 'Timeperiod', field: 'Timeperiod'},
    { headerName: 'Unit', field: 'Unit' },
    { headerName: 'Value', field: 'Value' }
  ]);

  return (
    <div>
      <div
      className="ag-theme-quartz-dark" 
      style={{ height: 500, width: 1200 }} 
      >
        <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
        />
      </div>
      <div>
      <h2>Selected Topics:</h2>
      <p>Total selected topics: {Selectedtopics.length}</p>
            <ul>
                {Selectedtopics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                ))}
            </ul>
    </div>
    </div>
  )
 
 }

export default App;
