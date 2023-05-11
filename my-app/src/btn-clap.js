
import './btn-clap.css';
import React, { useState } from 'react';


function ClapBouton(props) {
  const [claps, setClaps] = useState(props.start || 0);

  const handleClick = () => {
    if (claps < 20) {
      setClaps(claps + 1);
    }
  };

  return (
    <div className="clap-container">
      <button className="clap-button" onClick={handleClick}>
      👏
       Clap
      </button>
      <div className="clap-count">{claps}</div>
    </div>
  );
} 

export default ClapBouton;

