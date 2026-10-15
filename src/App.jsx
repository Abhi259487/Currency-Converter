import { useState } from "react";
import bgImage from "./assets/bg_image.jpg";
import UseCurrencyInfo from "./components/UseCurrencyInfo";
import UseCurrencyList from "./components/UseCurrencyList";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const convertedAmount = UseCurrencyInfo(from, to, amount);
  const currencyList = UseCurrencyList();

  function swap(){
    setFrom(to);
    setTo(from);
  }
  return (
    <div className="flex justify-center items-center absolute inset-0">
      <img
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
        src={bgImage}
        alt="background-img"
      />

      <div
        className="w-full max-w-md mx-4 p-6 sm:p-8
                     rounded-2xl border border-white/20
                   bg-white/10 backdrop-blur-xl shadow-2xl
                     flex flex-col items-center gap-6"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Currency Converter
          </h1>
          <p className="text-sm text-white/70">Convert currencies in seconds</p>
        </div>
        <div className="w-full flex flex-col gap-3 rounded-xl border border-white/15 bg-black/20 p-4">
          <label className="text-sm font-medium text-white/80">From</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-white/95 px-4 py-3 text-xl font-semibold text-gray-900 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-white px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-400"
          >
            {currencyList.map((countryCode) => {
             return  <option key={countryCode} value={countryCode}>
                {countryCode}
              </option>;
            })}
          </select>
        </div>

        <button 
        onClick={swap}
        className="rounded-full border border-white/30 bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition duration-200 hover:bg-blue-500 active:scale-95">
          Swap
        </button>

        <div className="w-full flex flex-col gap-3 rounded-xl border border-white/15 bg-black/20 p-4">
          <label className="text-sm font-medium text-white/80">To</label>
          <input
            type="number"
            value={convertedAmount}
            disabled
            className="w-full rounded-lg border border-white/20 bg-white/95 px-4 py-3 text-xl font-semibold text-gray-900 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-white px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-400"
          >
            {currencyList.map((countryCode) => {
             return  <option key={countryCode} value={countryCode}>
                {countryCode}
              </option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
