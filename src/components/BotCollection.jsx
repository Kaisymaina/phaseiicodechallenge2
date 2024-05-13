import React, { useState, useEffect } from 'react';
import './App.css';
import SortBar from './SortBar';
import { Routes, Route, Link } from 'react-router-dom';

function BotCollection() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => {
        setRobots(data); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSort = (criteria) => {
    if (criteria === 'health') {
      const sortedRobots = [...robots].sort((a, b) => b.health - a.health); 
      setRobots(sortedRobots);
    }
  };
  
  return (
    <div>
      <SortBar onSort={handleSort}/>
      <div className='bot-card-container'>
        {robots.map((bot) => (
          <div key={bot.id} className="bot-card">
            <Link to={`/details/${bot.id}`}>
              <img src={bot.avatar_url} alt={bot.name} />
            </Link>
            <div> 
              {bot.name} <br/>
              Health: {bot.health} <br/>
              Class: {bot.bot_class}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BotCollection;
