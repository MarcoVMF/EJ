import React from 'react';
import './header/header';
import Header from './header/header';
import Subheader from './subheader/subheader';
import Fino from './fino/fino';
import Publicacoes2 from './publicacoes2/publicacoes2';



function Publicacoes() {
  return(
    <div className='background'>
      <Header/>
      <Fino/>
      <Subheader/>
      <Fino/>
      <h1>Publicações</h1>
      <Publicacoes2/>
      <Publicacoes2/>
      <Publicacoes2/>
    </div>
  );
}

export default Publicacoes;
