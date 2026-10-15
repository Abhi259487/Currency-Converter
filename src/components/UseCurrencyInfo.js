import { useEffect, useState } from "react";

function UseCurrencyInfo(from, to, amount) {
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    async function convertCurrency() {
      if (amount === 0 || amount === "") {
        setConvertedAmount(0);
        return;
      }
      try {
        const res = await fetch(
          `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`,
        );
        if (!res.ok) {
          throw new Error(`${res.status}`);
        }
        const data = await res.json();

        let converted = amount * data.rates[to];

        let limit = converted.toFixed(2);
        setConvertedAmount(limit);
      } catch (error) {
        console.log(error);
      }
    }
    convertCurrency();
  }, [from, to, amount]);

  return convertedAmount;
}

export default UseCurrencyInfo;
