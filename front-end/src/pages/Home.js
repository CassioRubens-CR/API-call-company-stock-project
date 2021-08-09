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
      setError(error?.response?.data?.message);
    }
  }

  function handleInput() {
    const valueInput = document.getElementById('symbol');
    setSymbol(valueInput.value);
  }

  return (
    <div id="page-home">
      <header className="hearder">Real Time Stocks</header>

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
        <div className="reportCompany">
          <fieldset className="fieldset">
            <legend>Empresa</legend>
            <label>Nome:</label><div>{repository?.companyName}</div>
            <label>Sigla:</label><div>{repository?.symbol}</div>
            <label>Preço cotação mais recente:</label><div className="latestPrice">{repository?.latestPrice}</div>
            <label>Moeda:</label><div>{repository?.currency}</div>
            <label>Data última cotação:</label><div>{repository?.latestUpdate}</div>
            <label>Funcionários(as):</label><div>{repository?.employees}</div>
            <label>Website:</label><div>{repository?.website}</div>
            <label>Telefone:</label><div>{repository?.phone}</div>
            <label>Endereço:</label><div>{repository?.address}</div>
            <label>Complemento:</label><div>{repository?.address2}</div>
            <label>Cidade:</label><div>{repository?.city}</div>
            <label>Estado:</label><div>{repository?.state}</div>
            <label>CEP:</label><div>{repository?.zip}</div>
            <label>País:</label><div>{repository?.country}</div>
            <label>Descrição:</label><div>{repository?.description}</div>
          </fieldset>
        </div>
      )}
    </div>
  );
}
