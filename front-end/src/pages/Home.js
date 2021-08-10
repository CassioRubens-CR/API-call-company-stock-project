import React, { useState } from "react";
import axios from 'axios';
import '../styles/home.scss';
import ReportCompany from "../components/ReportCompany";

export default function Home() {
  const [repository, setRepository] = useState();
  const [error, setError] = useState();
  const [symbol, setSymbol] = useState();

  async function handleCompany() {
    document.getElementById('symbol').value = '';
    setRepository();
    setError();

    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/companystock/${symbol}`);

      const { data } = response;
      setRepository(data);
      setSymbol();

    } catch (error) {
      setError(error?.response?.data?.message);
    }
  }

  function handleInput() {
    const valueInput = document.getElementById('symbol');
    setSymbol(valueInput.value);
  }

  return (
    <div id="page-home">

      <header className="header">Realtime Stocks</header>

      <div className="inputAndButton">
        <input
          type="text"
          id="symbol"
          placeholder="Sigla da Empresa"
          onChange={handleInput}
        />
        <button onClick={handleCompany}>
          Buscar Empresa
        </button>
      </div>

      {!repository && (
        <div className="error">{error}</div>
      )}

      {repository && (
        <ReportCompany repository={repository}></ReportCompany>
      )}

    </div>
  );
}
