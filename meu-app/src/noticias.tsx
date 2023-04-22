import React from 'react';
import './header/header';
import Header from './header/header';
import Subheader from './subheader/subheader';
import Fino from './fino/fino';

function Noticias() {
  return(
    <div class='background'>
      <Header/>
      <Fino/>
      <Subheader/>
      <Fino/>
    </div>
  );
}

export default Noticias;
