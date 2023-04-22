import React from 'react';
import Header from './header/header';
import Subheader from './subheader/subheader';
import Fino from './fino/fino';
import {Routes, Route} from 'react-router-dom';
import Noticias from './noticias';
import Publicacoes from './publicacoes';

function App() {
  return(
    <div class='background'>
        <Header/>
        <Fino/>
        <Subheader/>
        <Routes>
            <Route path='/' element={<Noticias/>}/>
            <Route path='publicacoes' element={<Publicacoes/>}/>
        </Routes>
        <Fino/>
    </div>
  );
}

export default App;
