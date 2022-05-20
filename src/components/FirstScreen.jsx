import styled from 'styled-components';
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";


export default function FirstScreen() {
    
    const [perguntas, setPerguntas] = useState([{id: 1, pergunta: "1ª pergunta"}]);
    useEffect(()=>{
        console.log("teste");
    },[]);

    function responder() {

    }

    return (
        <$PrimeiraTela>
            <h1>Education</h1>
            <p>Olá, o que você irá aprender hoje?</p>
            {perguntas.map(tema =>
                (<div className='tema' key={tema.id}>
                    <h3>{tema.pergunta}</h3>
                    <button onClick={responder}>Básico</button>
                    <button onClick={responder}>Médio</button>
                    <button onClick={responder}>Difícil</button>
                </div>)
            )}
        </$PrimeiraTela>
    );
}

const $PrimeiraTela = styled.main`
    h3 {
        background-color: green;
    }
`;