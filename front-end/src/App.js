import React, { useState } from "react";

export default function App() {
  const [repository, setRepository] = useState([]);

  async function handleCompany() {
    try {
      const response = await fetch('http://localhost:3001/companystock/GOOG')
      // console.log('console log response', response);
      const data = await response.json();
      // console.log('console log data', data);
      setRepository(data);

    } catch (error) {
      console.log(error);
    }
  }
  console.log('console log repository', repository);

  return (
    <div>
      <button onClick={handleCompany}>
        Buscar Empresa
      </button>
    </div>
  );

}

