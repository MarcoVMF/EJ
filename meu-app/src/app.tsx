import React from 'react';
import Header from './header/header';
import Subheader from './subheader/subheader';
import Fino from './fino/fino';

function App() {
  return(
    <div className='background'>
        <Header/>
        <Fino/>
        <Subheader/>
        <Fino/>
        <h1 style={{textAlign:"center", marginTop:"50px", marginLeft:"100px", marginRight:"100px"}}>Essa é a home, uma apliacação bem básica para provar meus conhecimentos e tentar evoluir, ta simples, mas pra mim deu um trabalho. Entre nas subpaginas.</h1>
    </div>
  );
}

export default App;
