import { useEffect, useState } from "react";

import React from 'react'

function useCurrnecyInfo() {
 const [date, setDate] = useState({})

 useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
    .then((res) => res.json())
    .then((res) => setDate(res[currency]))
    console.log(date);
 }, [currency])
 console.log(date);
 return date;
}

export default useCurrnecyInfo
