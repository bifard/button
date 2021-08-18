import React from 'react';
import { useState } from 'react';
import './App.css';
import { Button } from './Button';

export interface IButton {
  isOpen: boolean;
  value: number;
}

export function App() {
  const nStateButton:IButton = {
    isOpen: false,
    value: 1,
  }
  const [button, setButton] = useState<IButton>(nStateButton);

  return (
    <div className='conteiner'>
      {!button.isOpen && 
      <Button button={button} setButton ={setButton}valueButton={button.value}/>
      }
      {button.isOpen && 
      <div>
        <Button button={button} setButton ={setButton} valueButton={1}/>
        <Button button={button} setButton ={setButton} valueButton={2}/>
        <Button button={button} setButton ={setButton} valueButton={3}/>
      </div>
      }
    </div>
  );
}


