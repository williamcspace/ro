import React from 'react';
import BossTimerItem from './BossTimerItem';

function BossTimer(props){
  const mvps = props.data.filter((item) => item.type === 'mvp');
  const minis = props.data.filter((item) => item.type === 'mini');
  return (
    <div className="boss-timer">
      <div className="container">
        <h3 className="text-center">MVP</h3>
        <ul className="row list-unstyled">
          {mvps.map((item) => <BossTimerItem key={item.name} data={item}/>)}
        </ul>
        <h3 className="text-center">MINI</h3>
        <ul className="row list-unstyled">
          {minis.map((item) => <BossTimerItem key={item.name} data={item}/>)}
        </ul>
      </div>
    </div>
  );
}

export default BossTimer;
