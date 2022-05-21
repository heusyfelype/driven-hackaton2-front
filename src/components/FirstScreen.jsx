import styled from 'styled-components';
import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";


export default function FirstScreen() {
    
    const navigate = useNavigate();
    const perguntas = [
        {id: 1, pergunta: "Inglês"},
        {id: 2, pergunta: "Culinária"},
        {id: 3, pergunta: "Matemática"}
    ];
    useEffect(()=>{
        console.log("teste");
    },[]);

    function responder(tema, dificuldade) {
        navigate("/question", {state: {tema, dificuldade}});
    }

    return (
        <PrimeiraTela>
            <h1>Education</h1>
            <p>Olá,</p><br></br><br></br> <p>o que você irá aprender hoje?</p>
            <ul>
            {perguntas.map(tema =>
                (<li className='tema' key={tema.id}>
                    <h3>{tema.pergunta}</h3>
                    <div className='botoes'>
                        <button onClick={()=>{responder(tema.pergunta, "begginer");}}>Básico</button>
                        <button onClick={()=>{responder(tema.pergunta, "intermediate");}}>Médio</button>
                        <button onClick={()=>{responder(tema.pergunta, "advanced");}}>Difícil</button>
                    </div>
                </li>)
            )}
            </ul>
        </PrimeiraTela>
    );
}

const PrimeiraTela = styled.main`
    background-color: #f7f8fc;
    padding: 10%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h1 {
        font-size: 30px;
        color: #a69dff;
        margin-bottom: 15px;
    }

    h3 {
        color:#333333;
        margin-left: 15px;
    }

    p {
        text-align: start;
        max-width: 400px;
        width: 100%;
        color:#333333;
    }

    ul {
        margin-top: 20px;
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .tema {
        border-radius: 20px;
        background-color: #f9f9f9;
        //background-color: red;
        box-shadow: 0px 30px 50px -30px rgba(0, 0, 0, 0.15);
        //max-width: 400px;
        //width: 100%;
        min-height: 90px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .botoes {

            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 5%;

            button {
                border-radius: 7px;
                border: none;
                background-color: #a66aff;
                color: #f9f9f9;
                width: 100%;
                padding: 3px;
            }
        }

    }
`;