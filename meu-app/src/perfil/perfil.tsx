import './perfil.css'
import {useState} from 'react';
import {useRef} from 'react';

function Perfil(){
    const[image, setImage] = useState(null);
    const elementoRef = useRef(null);
    const conteudoRef = useRef(null);

    const addConteudo = () =>{
        const elemento = elementoRef.current;
        const conteudo = conteudoRef.current.value;
        elemento.innerHTML = conteudo.replace(/\n/g, '<br>');
    }

    const ImageUpload = (files) => {
        setImage(URL.createObjectURL(files[0]));
    }
    const [text, setText] = useState('');

    if(image == null){
        return(
            <div style={{display: 'flex', marginTop: '10px'}}>
                <div style={{marginLeft: '10px'}}>
                    <div className='borda' ></div>
                    <div><input type='file' onChange={(e) => ImageUpload(e.target.files)}/></div>
                </div>
                <div style={{textAlign: 'center', margin: '0 auto'}}>
                    <h1>Sobre mim</h1>
                    <div>
                        <div ref={elementoRef}></div>
                        <textarea ref={conteudoRef} rows='10' cols='50'/>
                        <button type="submit" onClick={addConteudo}>Enviar</button>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div style={{display: 'flex', marginTop: '10px', marginLeft: '10px'}}>
            <div className='borda'>
                {image && <img src={image} style={{height: '150px', width: '150px'}}/>}
            </div>
                <div style={{textAlign: 'center', margin: '0 auto'}}>
                    <h1>Sobre mim</h1>
                <div>
                    <div ref={elementoRef}></div>
                        <textarea ref={conteudoRef} rows='10' cols='50'/>
                        <button type="submit" onClick={addConteudo}>Enviar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Perfil;