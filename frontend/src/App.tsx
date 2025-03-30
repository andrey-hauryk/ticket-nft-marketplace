import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MintTicket from './components/MintTicket';
import TicketDetails from './components/TicketDetails';
import { ethers } from 'ethers';

const App = () => {
  return (
    <div>
      <MintTicket />
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<MintTicket />} />
    //     <Route path="/ticket" element={<TicketDetails />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
