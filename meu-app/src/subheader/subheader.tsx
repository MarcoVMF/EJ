import React from 'react';
import './subheader.css'
import { Link } from 'react-router-dom';


function Subheader(){
 
    return(
        <div class='subheader'>
            <Link to='/'>Noticias</Link>
            <Link to='publicacoes'>Publicações</Link>
            <Link to='perfil'>Perfil</Link>
        </div>
    );

}

export default Subheader;