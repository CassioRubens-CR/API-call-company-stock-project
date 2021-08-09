import React from 'react';
import '../styles/home.scss';

function ReportCompany({ repository }) {

  return (
    <div className="reportCompany">
      <fieldset className="fieldset">
        <legend>Cotação</legend>
        <label>Preço cotação mais recente:</label><div>{repository?.latestPrice}</div>
        <label>Moeda:</label><div>{repository?.currency}</div>
        <label>Data última cotação:</label><div>{repository.latestUpdate}</div>
      </fieldset>

      <fieldset className="fieldset">
        <legend>Empresa</legend>
        <label>Sigla:</label><div>{repository?.symbol}</div>
        <label>Nome:</label><div>{repository?.companyName}</div>
        {repository?.employees && (<><label>Funcionários(as):</label><div>{repository?.employees}</div></>)}
        {repository?.description && (<><label>Descrição:</label><div>{repository?.description}</div></>)}
      </fieldset>

      <fieldset className="fieldset">
        <legend>Contato</legend>
        {repository?.website && (<><label>Website:</label><div>{repository.website}</div></>)}
        {repository?.phone && (<><label>Telefone:</label><div>{repository.phone}</div></>)}
        {repository?.address && (<><label>Endereço:</label><div>{repository.address}</div></>)}
        {repository?.address2 && (<><label>Complemento:</label><div>{repository.address2}</div></>)}
        {repository?.city && (<><label>Cidade:</label><div>{repository.city}</div></>)}
        {repository?.state && (<><label>Estado:</label><div>{repository.state}</div></>)}
        {repository?.country && (<><label>País:</label><div>{repository.country}</div></>)}
        {repository?.zip && (<><label>CEP:</label><div>{repository.zip}</div></>)}
      </fieldset>
    </div>
  );
}

export default ReportCompany;