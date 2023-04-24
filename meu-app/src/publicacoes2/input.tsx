import React, { useState } from 'react';

function Input() {
    const [user, setUser] = useState('');
    const [content, setContent] = useState('');
    const image = 'https://img.icons8.com/color/512/avatar.png'
    const [sair, setSair] = useState(0);

    function click(){
        setSair(sair + 1);
    }
    function handleSubmit(event) {
        event.preventDefault();
      }
    if(sair == 0){
        return (
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                        Usuário:
                        <input type="text" value={user} onChange={e => setUser(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                        Conteudo:
                        <textarea id="text" value={content} onChange={e => setContent(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <button type="submit" onClick={click}>Enviar</button>
                    </div>
                    </form>
                </div>
            </div>
      );
    }else{
        return(
            <div style={{display: "flex", marginLeft: "50px", marginRight: "50px", padding: "20px", border: "2px solid black", borderRadius: "50px", justifyContent: "flex-start", alignItems: "center", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"}}>
            <div style= {{justifyContent: "center", alignItems: "center"}}>
                <figure>
                    <img  style={{width: "100px", height: "100px", borderRadius: "100%", border: "2px solid black"}} src={image} alt="Foto de Perfil"  />
                    <figcaption style={{marginLeft: "30px"}}>{user}</figcaption>
                </figure>
            </div>
            <div> 
                <p style={{marginBottom: "5px", justifyContent: "center", alignItems: "center", marginLeft: "10px"}}>{content}</p>
            </div>
        </div>
        );
        
    }
    
}

export default Input;