import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

interface RangeValue {
  value: number;
}

const TopPlume = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0px 90px;
  -webkit-animation: ${(props:RangeValue) => `plume ${props.value * .45}s linear infinite`};
  -moz-animation: ${(props:RangeValue) => `plume ${props.value * .45}s linear infinite`};
  -ms-animation: ${(props:RangeValue) => `plume ${props.value * .45}s linear infinite`};
  animation: ${(props:RangeValue) => `plume ${props.value * .45}s linear infinite`};
  animation-delay: 3.5s;
`

const RightPlume = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  margin: -10px 88px;  
  -webkit-animation: ${ (props:RangeValue) => `plume ${props.value * .5}s linear infinite`};
  -moz-animation: ${ (props:RangeValue) => `plume ${props.value * .5}s linear infinite`};
  -ms-animation: ${ (props:RangeValue) => `plume ${props.value * .5}s linear infinite`};
  animation: ${ (props:RangeValue) => `plume ${props.value * .5}s linear infinite`};
`;

const WaterSpin = styled.div`
  position: absolute;
  opacity: .4;
  left: 0;
  top: 0;
  margin: -240px -100px;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: -webkit-radial-gradient(25px 25px, circle, #000, #7ec0ee);
  background: -moz-radial-gradient(25px 25px, circle, #000, #7ec0ee);
  background: radial-gradient(25px 25px, circle, #000, #7ec0ee);
 
  /* Spin background sphere */
  -webkit-animation: ${(props:RangeValue) => `spin ${props.value}s linear infinite`};
  -moz-animation: ${(props:RangeValue) => `spin ${props.value}s linear infinite`};
  -ms-animation: ${(props:RangeValue) => `spin ${props.value}s linear infinite`};
  animation: ${(props:RangeValue) => `spin ${props.value}s linear infinite`}

  -webkit-transition: all 1s ease;
  transition: all 1s ease;
  
  position: absolute;
  left: 0;
`;

const App: React.FC = props => {
  const [rangeVal, setRangeVal] = useState(8);

  const handleRangeChange = (e: any):void => {
    setRangeVal(e.target.value)
    console.log(rangeVal)
  }

  return (
    <div className="wrapper">
      <div className="images">
        <div className="card" id="base"><img src="http://gdurl.com/gwRB" /></div>
        <WaterSpin value={rangeVal} />
        <div className="spin-cutout">
          <div className="spin-cutout" id="top"></div>
          <div className="spin-cutout" id="right"></div>
          <div className="spin-cutout" id="bottom"></div>
          <div className="spin-cutout" id="left"></div>
        </div>
        <div className="card"><img src="http://gdurl.com/gwRB" /></div>
        <div className="plume"><img src="http://gdurl.com/8Kpq" /></div>
        <TopPlume value={rangeVal}><img src="http://gdurl.com/3iwU" /></TopPlume>
        <RightPlume value={rangeVal}><img src="http://gdurl.com/7oQ9" /></RightPlume>
      </div>
      <div className="rock"><img src="http://gdurl.com/WGGd" /></div> 
        
      <div className="yellowstone">
        <div className="range-slider">
            <input type='range'
                  className='input-range' 
                  step={.5} 
                  value={rangeVal} 
                  min={.5} 
                  max={10.5}
                  onChange={e => handleRangeChange(e)} 
            />
            <span className="range-value"></span>
        </div> 
        <h1>Yellowstone, 1938.</h1>
        <p>Native American have populated the Yellowstone region for 11,000 years.</p>
        <p>In 1872, President Ulysses S. Grant declared Yellowstone the first National Park.</p>
        <p>The park is 3,472 square miles and the site of an active volcano. One to three thousand earthquakes shake the grounds each year.</p>
      </div>
    </div>
  );
}

export default App;