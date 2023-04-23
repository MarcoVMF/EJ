import React from 'react';
import './header.css';
import Imagem from '/workspace/EJ/meu-app/src/img/one.png';
function Header(){
    return(
        <div className='flex'>
            <div>
                <img className='img' src ={Imagem} alt='OnePiece'/>
            </div>
            <div>
                <h1 className='h1'>Caveirabook</h1>
            </div>
        </div>
    );
}

export default Header;