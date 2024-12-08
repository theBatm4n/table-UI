import React, { useState, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";
// import { useHover } from "@uidotdev/usehooks";
import './App.css';
import { ButtonCellRenderer } from './ButtonCellRenderer.js';


const App = () => {
  const [selectedTopics, setSelectedTopics] = useState([])
  const [colorIndex, setColorIndex] = useState(0)


  const handleClick = useCallback((value) => {
    setColorIndex(() => {
      setColorIndex( (colorIndex + 1) % 5 )
    })
    if (!selectedTopics.includes(value)) {
      setSelectedTopics([...selectedTopics, value]);
    } else {
      const updatedTopics = selectedTopics.filter(topic => topic !== value); // deselect the selected topic
      setSelectedTopics(updatedTopics);
    }
  }, [colorIndex, selectedTopics])

  const rowData = useMemo(() => [
    { ticker: "#TCS.NS", segment: "#Revenue", metric: "#Manufacturing", Date: "2024-09-11", Timeperiod: '3M ', Unit:"INR", Value: "19.19m" },
    { ticker: "#Amazon", segment: "#Profit", metric: "#Retail", Date: "2024-09-15", Timeperiod: '1Y ', Unit:"USD", Value: "5.67b" },
    { ticker: "#Microsoft", segment: "#Revenue", metric: "#Retail", Date: "2024-09-20", Timeperiod: '6M ', Unit:"EUR", Value: "8.42m" },
    { ticker: "#Amazon", segment: "#Profit", metric: "#Advertising", Date: "2024-09-25", Timeperiod: '2Y ', Unit:"JPY", Value: "3.91b" },
    { ticker: "#Apple", segment: "#Revenue", metric: "#Manufacturing", Date: "2024-09-30", Timeperiod: '1Y ', Unit:"USD", Value: "15.75b" },
    { ticker: "#TCS.NS", segment: "#Profit", metric: "#Retail", Date: "2024-10-05", Timeperiod: '3M ', Unit:"GBP", Value: "2.19b" }
  ], []);
  
  const colDefs = useMemo(() => [
    { 
      flex: 2,
      headerName: 'Topics',
      cellRenderer: ButtonCellRenderer,
      cellRendererParams: {
        selectedTopics: selectedTopics,
        handleClick: handleClick,
      }
    },
    { headerName: 'Date', field: 'Date' },
    { headerName: 'Timeperiod', field: 'Timeperiod'},
    { headerName: 'Unit', field: 'Unit' },
    { headerName: 'Value', field: 'Value' }
  ], [handleClick, selectedTopics]);

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
      <p>Total selected topics: {selectedTopics.length}</p>
            <ul>
                {selectedTopics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                ))}
            </ul>
      </div>
    </div>
  )
 
 }

export default App;
