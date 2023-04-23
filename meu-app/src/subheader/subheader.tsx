import React from 'react';
import './subheader.css'
import { Link } from 'react-router-dom';


const Subheader = () => {
 
    return(
        <div className='subheader'>
            <Link to='/' style={{textDecoration: 'none', color: 'black', fontWeight: 'bolder'}}>
            <p className='p'>Perfil</p></Link>
            <Link to='/publicacoes' style={{textDecoration: 'none', color: 'black', fontWeight: 'bolder'}}><p className='p'>Publicações</p></Link>
            <Link to='/noticias' style={{textDecoration: 'none', color: 'black', fontWeight: 'bolder'}}><p className='p'>Noticias</p></Link>
        </div>
    );

}

export default Subheader;