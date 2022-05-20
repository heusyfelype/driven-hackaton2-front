import styled from 'styled-components';
import { useState, useEffect } from "react";

export default function SecondScreen() {
    return (
        <$Main>

            <$Header>
                Education
            </$Header>

            <$Card>
                <h6> Pergunta: </h6>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, making 
                    it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
                    College in Virginia, looked up one of the more obscure Latin words, consectetur, 
                    from a Lorem Ipsum passage, and going through the cites of the word in classical 
                    literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
                    by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular 
                    during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes 
                    from a line in section 1.10.32.

                </p>

                <section>
                    <button> A: Alternativa A</button>
                    <button> B: Alternativa B</button>
                    <button> C: Alternativa C</button>

                </section>

            </$Card>





            
        </$Main>
    )
}

const $Main = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #f7f8fc;
    padding: 10%;
`

const $Header = styled.header`
    font-size: 30px;
    font-weight: bold;
    color: #a69dff;
    margin: 0px auto;
    text-align: center;
`

const $Card = styled.div`
    margin: 50px auto;
    background-color: #f9f9f9;
    width: 100%;
    max-width: 400px;
    min-height: 400px;
    border-radius: 20px;
    box-shadow: 0px 20px 100px -30px rgba(0, 0, 0, 0.3);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h5{
        font-size: 14px;
        font-weight: bold;
        color: #333333;
    }

    p{
        margin: 20px 0px;
        color: #333333;
    }
    
    button{
        display: block;
        width: 100%;
        margin: 5px 0px;
        text-align: left;
        background-color: #a66aff;
        border: none;
        border-radius: 10px;
        min-height: 50px;
        padding: 0px 15px;
        color: #f9f9f9;
    }

    button:hover{
        background-color: #a69dff;
    }
`