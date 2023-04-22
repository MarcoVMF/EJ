import React from 'react';
import './header/header';
import Header from './header/header';
import Subheader from './subheader/subheader';
import Fino from './fino/fino';

function Publicacoes() {
  return(
    <div class='background'>
      <Fino/>
      <Subheader/>
      <Fino/>
    </div>
  );
}

export default Publicacoes;
