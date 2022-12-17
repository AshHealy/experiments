import React, { useState, useEffect } from 'react';

const Floyd = () => {
  const [health, setHealth] = useState(100);
  const [mood, setMood] = useState(100);
  const [poop, setPoop] = useState(0);
  const [isAlive, setIsAlive] = useState(true);

  useEffect(() => {
    if (mood <= 0 || health <= 0) {
      setIsAlive(false);
    }
  }, [mood, health]);

  const eatBurger = () => {
    if (isAlive) {
      setHealth(health + 10);
      setMood(mood + 5);
      setPoop(poop + 5);
    }
  }

  const play = () => {
    if (isAlive) {
      setMood(mood + 10);
      setHealth(health + 5);
      setPoop(poop + 5);
    }
  }

  const sleep = () => {
    if (isAlive) {
      setHealth(health + 15);
      setMood(mood + 10);
    }
  }

  const poop = () => {
    if (isAlive) {
      setPoop(poop + 10);
      setMood(mood - 5);
    }
  }

  const cleanPoop = () => {
    if (isAlive) {
      setPoop(0);
      setMood(mood + 10);
    }
  }

  return (
    <>
      <h1>Floyd</h1>
      <div>
        Health: {health}
      </div>
      <div>
        Mood: {mood}
      </div>
      <div>
        Poop: {poop}
      </div>
      <div>
        Status: {isAlive ? 'Alive' : 'Dead'}
      </div>
      <div>
        <button onClick={eatBurger}>Eat Burger</button>
        <button onClick={play}>Play</button>
        <button onClick={sleep}>Sleep</button>
        <button onClick={poop}>Poop</button>
        <button onClick={cleanPoop}>Clean Poop</button>
      </div>
    </>
  );
};

export default Floyd;