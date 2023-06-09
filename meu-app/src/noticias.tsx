import React from 'react';
import './header/header';
import Header from './header/header';
import Subheader from './subheader/subheader';
import Fino from './fino/fino';
import Noticias2 from './noticias2/noticias2'

function Noticias() {
  return(
    <div className='background'>
      <Header/>
      <Fino/>
      <Subheader/>
      <Fino/>
      <h1 style={{textAlign:"center", marginTop:"20px"}}>Noticias</h1>
      <Noticias2/>
      <Noticias2/>
    </div>
  );
}

export default Noticias;
