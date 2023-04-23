import React from 'react';
import Header from './header/header';
import Subheader from './subheader/subheader';
import Fino from './fino/fino';
import Perfil from './perfil/perfil';

function App() {
  return(
    <div className='background'>
        <Header/>
        <Fino/>
        <Subheader/>
        <Fino/>
        <Perfil/>
    </div>
  );
}

export default App;
