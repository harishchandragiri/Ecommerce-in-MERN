import { useEffect, useState } from "react";
import AdminSideBar from '../../components/AdminComponents/AdminSideBar'

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+";

function Coupon() {

  const [size, setSize] = useState(8);
  const [prefix, setPrefix] = useState("");
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [coupon, setCoupon] = useState("");

  const copyText = async (coupon) => {
    await window.navigator.clipboard.writeText(coupon);
    setIsCopied(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!includeNumbers && !includeCharacters && !includeSymbols)
      return alert("Please Select One At Least");

    let result = prefix || "";
    const loopLength = size - result.length;

    for (let i = 0; i < loopLength; i++) {
      let entireString = "";
      if (includeCharacters) entireString += allLetters;
      if (includeNumbers) entireString += allNumbers;
      if (includeSymbols) entireString += allSymbols;
      const randomNum = Math.floor(Math.random() * entireString.length);
      result += entireString[randomNum];
    }
    setCoupon(result);
  };

  useEffect(() => {
    setIsCopied(false);
  }, [coupon]);


  return (
    <div className='relative flex h-[89.6vh] overflow-x-hidden'>
       <AdminSideBar />
      <div  className='absolute left-0 sm:left-64 w-full sm:pr-64'>
      <h1 className="text-2xl text-left font-bold py-3  px-3 mb-2 bg-gray-50">Coupon</h1>
      <div className="flex flex-col items-center justify-center h-[400px] ">
      <form
        className="bg-white shadow-md rounded px-8 pt-2 pb-2 my-4 w-90"
        onSubmit={submitHandler}
      >
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Text to include
          </label>
          <input
            type="text"
            placeholder="Text to include"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            maxLength={size}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Coupon Length
          </label>
          <input
            type="number"
            placeholder="Coupon Length"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            min={8}
            max={25}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <fieldset className="mb-4">
          <legend className="text-gray-700 text-sm font-bold mb-2">Include</legend>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers((prev) => !prev)}
              className="mx-1"
            />
            <span  className="mx-1">Numbers</span>

            <input
              type="checkbox"
              checked={includeCharacters}
              onChange={() => setIncludeCharacters((prev) => !prev)}
              className="mx-1"
            />
            <span  className="mx-1">Characters</span>

            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols((prev) => !prev)}
              className="mx-1"
            />
            <span  className="mx-1">Symbols</span>
          </div>
        </fieldset>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Generate
        </button>
      </form>
      {coupon && (
        <div className="mt-2 text-center">
          <code className="bg-gray-100 text-gray-700 p-2 rounded">
            {coupon}{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => copyText(coupon)}
            >
              {isCopied ? "Copied" : "Copy"}
            </span>
          </code>
        </div>
      )}
    </div>
   </div>
  </div>
  )
}

export default Coupon