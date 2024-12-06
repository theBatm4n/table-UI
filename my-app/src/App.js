import React, { useState, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";
import './App.css';
import { ButtonCellRenderer } from './ButtonCellRenderer.js';


const App = () => {
    const [selectedTopics, setSelectedTopics] = useState([]) // keeps track of all selected filter topics

    const handleClick = useCallback((value) => {
      if (!selectedTopics.includes(value)) {
        // add topic to filtered topic 
        // run a synonym check and add those to selected topics too
        setSelectedTopics([...selectedTopics, value]);
      }else {
        const updatedTopics = selectedTopics.filter(topic => topic !== value); // deselect the selected topic
        setSelectedTopics(updatedTopics);
      }
    }, [selectedTopics])

   
    const rowData = useMemo(() => [
      { ticker: "#TCS.NS", segment: "#HotelDivision", metric: "#SegmentRevenue_AsReported", Date: "2024-09-11", Timeperiod: '3M ', Unit:"INR", Value: "19.19m" },
      { ticker: "#CANDC.NS", segment: "#ITServices", metric: "#SegmentAssets_AsReported", Date: "2024-09-15", Timeperiod: '1Y ', Unit:"USD", Value: "5.67b" },
      { ticker: "#CYBERMEDIA.NS", segment: "#Media", metric: "#SegmentAssets_AsReported", Date: "2024-09-20", Timeperiod: '6M ', Unit:"EUR", Value: "8.42m" },
      { ticker: "#CANDC.NS", segment: "#Textiles", metric: "#SegmentRevenue_AsReported", Date: "2024-09-25", Timeperiod: '2Y ', Unit:"JPY", Value: "3.91b" },
      { ticker: "#CYBERMEDIA.NS", segment: "#Media", metric: "#SegmentLiabilities_AsReported", Date: "2024-09-30", Timeperiod: '1Y ', Unit:"USD", Value: "15.75b" },
      { ticker: "#TCS.NS", segment: "#Textiles", metric: "#SegmentLiabilities_AsReported", Date: "2024-10-05", Timeperiod: '3M ', Unit:"GBP", Value: "2.19b" }
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
        style={{ height: 500, width: 1400 }} 
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
