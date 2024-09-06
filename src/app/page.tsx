"use client"

import Image from "next/image";

import {useState , ChangeEvent} from "react";

export default function Home() {
  const [num1, setNum1] = useState<string>("");
const [num2, setNum2] = useState<string>("");
const [result, setResult] = useState<string>("");

const handleNum1Change = (e: ChangeEvent<HTMLInputElement>): void => {
  setNum1(e.target.value);
};

const handleNum2Change = (e: ChangeEvent<HTMLInputElement>): void => {
  setNum2(e.target.value);
};

const add = (): void => {
  setResult((parseFloat(num1) + parseFloat(num2)).toString());
};

const subtract = (): void => {
  setResult((parseFloat(num1) - parseFloat(num2)).toString());
};
const multiply = (): void => {
  setResult((parseFloat(num1) * parseFloat(num2)).toString());
};
const divide = (): void => {
  if (parseFloat(num2) !== 0) {
    setResult((parseFloat(num1) / parseFloat(num2)).toString());
  } else {
    setResult("Error: Division by zero");
  }
};
const clear = (): void => {
  setNum1("");
  setNum2("");
  setResult("");
};


  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="border text-card-foreground w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">

          <div className="m-3 p-3 flex items-center justify-center font-bold text-2xl ">
            <h1 > Simple Calculator </h1>
          </div>

          <div className="flex flex-cols m-3 space-x-4">
            <label htmlFor="">Number 1
              <input id="num1" type="number" value={num1} className="block text-black rounded-md"  placeholder=" Enter a number" onChange={handleNum1Change} />
            </label>
            <label htmlFor="">Number 2
              <input id="num2" type="number" value={num2} className="block text-black rounded-md" placeholder=" Enter a number"  onChange={handleNum2Change}/>
            </label>
          </div>
          <div>
            <button 
            className="border border-blue-50 m-2 text-black font-bold h-11 w-20  rounded-md bg-slate-300 hover:bg-white"
            onClick={add}
            >+
            </button>
            <button
             className="border border-blue-50 m-2 text-black font-bold h-11 w-20 rounded-md bg-slate-300 hover:bg-white"
            onClick={subtract}
            >-
            </button>
            <button 
            onClick={multiply}
            className="border border-blue-50 m-2 text-black font-bold h-11 w-20 rounded-md bg-slate-300 hover:bg-white">*</button>
            <button 
            className="border border-blue-50 m-2 text-black font-bold h-11 w-20 rounded-md bg-slate-300 hover:bg-white" 
            onClick={divide}
            > /
            </button>
          </div>
          <div>
            <label htmlFor="result" className="m-3 ">  Result 
              <input type="text"
              id="result"
               placeholder=" Result" 
               value={result}
               className="m-2 text-black rounded-md" />
            </label>
          </div>
          <button className="flex flex-cols items-center justify-center m-2 p-3 w-full max-w-md text-black font-bold rounded-md  bg-slate-300 hover:bg-white "onClick={clear} >cleans</button>
        </div>
      </div>  
    </>
  );
}
