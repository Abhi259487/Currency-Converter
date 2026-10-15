import { useEffect, useState } from "react"


function UseCurrencyList() {
const [currencyList, setCurrencyList] = useState([]);

useEffect(() => {
    async function getCurrencyCode(){
        try{
            const res = await fetch("https://api.frankfurter.dev/v1/currencies");
            if(!res.ok){
                throw new Error(`${res.status}`);
            }
            const countryCodes = await res.json();
            setCurrencyList(Object.keys(countryCodes))
        }catch(error){
            console.log(error);
        }
    }
    getCurrencyCode();
}, [])
return currencyList;
}

export default UseCurrencyList
