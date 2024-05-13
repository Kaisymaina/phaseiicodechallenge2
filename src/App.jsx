import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import BotDetails from './components/BotDetail';
import EnlistedBots from './components/EnlistedBots';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [enlistedBots, setEnlistedBots] = useState([]); 
  return (
    <div>
      <EnlistedBots enlistedBots={enlistedBots} />
      <Routes>
        <Route
          path="/"
          element={<BotCollection setEnlistedBots={setEnlistedBots} />}
        />
        <Route
          path="/details/:id"
          element={<BotDetails setEnlistedBots={setEnlistedBots} enlistedBots={enlistedBots} />} 
        />
        
      </Routes>
    </div>
  );
}

export default App;

















