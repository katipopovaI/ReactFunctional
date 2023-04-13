import { useState } from 'react';

import SliderUseState from './SliderUseState';
import SliderUseEffect from './SliderUseEffect';

import './App.css';

function App() {
  const [slide, setSlide] = useState(true);

  return (
    <>
      {/* <SliderUseState />; */}
      <button onClick={() => setSlide(false)}>Click</button>
      {slide ? <SliderUseEffect /> : null}
    </>
  );
}

export default App;
