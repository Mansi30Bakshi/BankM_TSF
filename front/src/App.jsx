import React from 'react'
import Home from './Components/Home'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Customer from './Components/Customer';
import CDeatil from './Components/CDetail';
import Transfer from './Components/Transfer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element = {<Customer/>}/>
        <Route path="/customers/:id" element = {<CDeatil/>}/>
        <Route path="/transfer" element = {<Transfer/>}/>
      </Routes>
    </Router>
  );
};

export default App;