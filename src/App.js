import React from 'react';
import ImageDisplay from './Components/Image';
import TextResizer from './Components/TextOverlay';

const App = () => {
  return (
    <div style={{ position: 'relative' }}>
      <ImageDisplay />
      <div style={{ position: 'absolute', top: '15vh', left: '15vw', width: '70vw', height: '80vh' }}>
        <TextResizer />
      </div>
    </div>
  );
};

export default App;
