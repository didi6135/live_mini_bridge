import React, { useEffect, useState } from 'react';



function Card() {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/2H.svg')
      .then(response => response.text())
      .then(data => setSvgContent(data))
      .catch(error => console.error('Error fetching the SVG:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SVG from Node.js Server</h1>
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
      </header>
    </div>
  );
}

export default Card;
