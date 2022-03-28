import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="App">
  
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="App_Body">
         <Sidebar />
         <Feed/>
        <Widgets />
      
      
      </div>
      
       

      
          </div>
  );
}

export default App;
