import React from 'react';
import './subheader.css'
import { Link } from 'react-router-dom';


function Subheader(){
 
    return(
        <div className='subheader'>
            <Link to='/'><p className='p'>Perfil</p></Link>
            <Link to='/noticias'><p className='p'>Noticias</p></Link>
            <Link to='/publicacoes'><p className='p'>Publicações</p></Link>
        </div>
    );

}

export default Subheader;