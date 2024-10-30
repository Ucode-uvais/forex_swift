import { ArrowLeftRight, ArrowUpDown } from "lucide-react";
import SelectCurrency from "./SelectCurrency";
import { useEffect, useState } from "react";

const ConverterForm = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("gbp");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Track screen size
  const [isResetting, setIsResetting] = useState(false);
  const API_KEY = import.meta.env.VITE_API_KEY;

  //Handle Swap
  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Track window width to adjust icon
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch exchange rate and calculate the result
  const getExchangeRate = async (inputAmount = amount) => {
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("Error fetching the exchange rate");

      const data = await response.json();
      const rate = (data.conversion_rate * inputAmount).toFixed(3);
      setResult(
        `${inputAmount} ${fromCurrency.toUpperCase()} = ${rate} ${toCurrency.toUpperCase()}`
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Update result on amount change
  useEffect(() => {
    getExchangeRate(amount);
  }, [amount, fromCurrency, toCurrency]);

  //Handle Focus
  const handleFocus = (event) => {
    if (event.target.value === "0") {
      setAmount("");
    }
  };

  // Handle Reset
  const handleReset = () => {
    setIsResetting(true); // show "Resetting" message
    setAmount(0);
    setTimeout(() => {
      setResult(""); // clear the result text
      setIsResetting(false); // hide "Resetting" message after a brief delay
    }, 50); // adjust this delay if needed
  };

  return (
    <form className="space-y-6">
      <div className="flex flex-col mb-4">
        <label className="text-white font-medium mb-2 text-lg">
          Enter Amount
        </label>
        <input
          type="number"
          className="outline-none text-lg px-4 py-2 text-white font-medium min-h-[48px] rounded-lg bg-opacity-20 bg-white placeholder-white placeholder-opacity-70 transition-all duration-300"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          onFocus={handleFocus}
          placeholder="Enter the Amount"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
        <div className="flex flex-col w-full sm:w-5/12">
          <label className="text-white font-medium mb-2 text-lg">
            You Have
          </label>
          <SelectCurrency
            selectedCurrency={fromCurrency}
            handleCurrency={(event) => setFromCurrency(event.target.value)}
          />
        </div>

        <div
          className="h-12 w-12 mt-4 cursor-pointer flex items-center justify-center rounded-full bg-white bg-opacity-20 border border-white border-opacity-50 transition-transform transform duration-200 ease-in-out hover:scale-110"
          onClick={handleSwapCurrencies}
        >
          {isMobile ? (
            <ArrowUpDown className="text-white" />
          ) : (
            <ArrowLeftRight className="text-white" />
          )}
        </div>

        <div className="flex flex-col w-full sm:w-5/12">
          <label className="text-white font-medium mb-2 text-lg">You Get</label>
          <SelectCurrency
            selectedCurrency={toCurrency}
            handleCurrency={(event) => setToCurrency(event.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 items-center">
        <button
          type="button"
          onClick={handleReset}
          className="w-full text-white text-lg font-semibold py-3 rounded-lg bg-green-400 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-700 transition duration-300"
        >
          Reset
        </button>
        <p className="text-white text-lg font-semibold text-center mt-4 rounded-lg tracking-wide bg-opacity-20 bg-white p-3">
          {isLoading ? "Converting..." : isResetting ? "Resetting..." : result}
        </p>
      </div>
    </form>
  );
};

export default ConverterForm;
