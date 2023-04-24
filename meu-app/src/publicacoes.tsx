import React from 'react';
import './header/header';
import Header from './header/header';
import Subheader from './subheader/subheader';
import Fino from './fino/fino';
import Publicacoes2 from './publicacoes2/publicacoes2';
import Input from './publicacoes2/input'


function Publicacoes() {
  return(
    <div className='background'>
      <Header/>
      <Fino/>
      <Subheader/>
      <Fino/>
      <h1 style={{textAlign:"center", marginTop:"20px"}}>Publicações</h1>
      <Input/>
      <Publicacoes2/>
      <Publicacoes2/>
      <Publicacoes2/>
    </div>
  );
}

export default Publicacoes;
