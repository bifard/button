import React from "react";
import { IButton } from "./App";


interface IButtonProps{
  valueButton: number;
  setButton: (a:IButton)=> void;
  button: IButton;
}
export function Button({valueButton, setButton, button}:IButtonProps){
  return(
    <button onClick={()=>setButton({...button, isOpen: !button.isOpen, value: valueButton})}>{valueButton}</button>
  );
}