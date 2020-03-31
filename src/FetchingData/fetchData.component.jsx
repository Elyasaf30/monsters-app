// import { useState, useEffect } from "react";

// export default function useFetch(url) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       const response = await fetch(url);
//       const data = await response.json();
//       setData(data);
//     }
//     getData();
//   }, [url]);

//   return data;
// // }

// import React, { useState, useEffect } from 'react';

// import './App.css';

// function App() {
//   const [data, setData] = useState({ monsters: [] });

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(users => setData({ data: users }))
//   }, [], console.log(data))

//   return (
//     <div>
//       dscdscdsc
//     </div>
//   );
// }

// export default App;
