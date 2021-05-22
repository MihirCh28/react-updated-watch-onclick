import React, { useState } from 'react';

const App = () => {

  let Time = new Date().toLocaleTimeString();
  const [CurrTime, setTime] = useState(Time);

  const UpdTime = () => {
    let CurrTime = new Date().toLocaleTimeString();
    setTime(CurrTime);

  };

  return (
    <>
      <h1> {CurrTime} </h1>
      <button onClick = {UpdTime}> Get Time </button>
    </>
  );
};

export default App;