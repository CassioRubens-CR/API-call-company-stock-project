import React, { useState } from "react";
import axios from 'axios';
import '../styles/home.scss';

export default function Home() {
  const [repository, setRepository] = useState();
  const [error, setError] = useState();
  const [symbol, setSymbol] = useState();

  async function handleCompany() {
    document.getElementById('symbol').value = '';
    setRepository();
    setError();

    try {
      const response = await axios.get(`http://localhost:3001/companystock/${symbol}`);

      const { data } = response;
      setRepository(data);

    } catch (error) {
      console.log('console log error', error.response.data.message);
      setError(error?.response?.data?.message);
    }
  }

  console.log('console log repository', repository);

  function handleInput() {
    const valueInput = document.getElementById('symbol');
    console.log('value input', valueInput.value);
    setSymbol(valueInput.value);
  }

  return (
    <div id="page-home">
      <header className="hearder">Real Time Stocks</header>
      <div className="inputAndButton">
        <input
          type="text"
          id="symbol"
          placeholder="Symbol Company"
          onChange={handleInput}
        />
        <button onClick={handleCompany}>
          Search Company
        </button>
      </div>
      {/* <ul>
        {repository && Object.entries(repository).map(([key, value]) => {
          return (<li key={key}> {key + ' ' + value} </li>)
        })}
      </ul> */}
      {/* {repository?.latestPrice} */}
      <div className="formCompany">
        <div>{repository?.companyName}</div>
        <div>{repository?.symbol}</div>
        <div>{repository?.latestPrice}</div>
        <div>{repository?.latestUpdate}</div>
        <div>{repository?.currency}</div>
        <div>{repository?.employees}</div>
        <div>{repository?.description}</div>
        <div>{repository?.website}</div>
        <div>{repository?.phone}</div>
        <div>{repository?.address}</div>
        <div>{repository?.address2}</div>
        <div>{repository?.city}</div>
        <div>{repository?.state}</div>
        <div>{repository?.zip}</div>
        <div>{repository?.country}</div>
      </div>
      {error}
    </div>
  );

}

