// import React, { useState, useEffect } from 'react';

// const MyComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('/db.json')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         return response.json();
//       })
//       .then(jsonData => setData(jsonData))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Data from db.json:</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.description}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MyComponent;



import React, { useState, useEffect } from 'react';


function MyComponent() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => {
        setRobots(data); // Set robots to the array of objects returned by the API
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {robots.map((bot) => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name}/>
          <div>{bot.name}</div>
          </div>
      ))}
    </div>
  );
}

export default MyComponent

