import styled from 'styled-components';
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SecondScreen() {
    const location = useLocation();
    const navigate = useNavigate();

    const [question, setQuestion] = useState();
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [showVideo, setShowVideo] = useState(false);

    const video = useRef();

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function isAnswerCorrect(selected) {
        return selected === question?.answer;
    }

    const tema = location.state?.tema;
    const dificuldade = location.state?.dificuldade;
    const temaPT = location.state?.pergunta;
    const dificuldadePT = location.state?.dificuldadePT;
    useEffect(() => {
        console.log(tema, dificuldade)
        const URL = "https://driven-hackaton2.herokuapp.com";
        const promise = axios.get(URL + `/questions?topic=${tema}&level=${dificuldade}`);
        promise.then(response => {
            console.log(response.data);
            const index = randomNumber(0, response.data.length - 1);
            setQuestion(response.data[index]);
        });
    }, []);

    return (
        <$Main>

            <$Content>
                <$Header>
                    Education
                </$Header>

                <$Card>
                    <h6> Pergunta: </h6>
                    <p>
                        {question?.question}

                    </p>

                    <section>
                        <button
                            onClick={() => { setSelectedQuestion("a"); setShowVideo(true) }}
                            className={selectedQuestion === "a" && isAnswerCorrect("a") ? "correct" : selectedQuestion === "a" && !isAnswerCorrect("a") ? "incorrect" : ""}
                            disabled={selectedQuestion}> A: {question?.alternatives[0].a}
                        </button>

                        <button
                            onClick={() => {setSelectedQuestion("b"); setShowVideo(true)}}
                            className={selectedQuestion === "b" && isAnswerCorrect("b") ? "correct" : selectedQuestion === "b" && !isAnswerCorrect("b") ? "incorrect" : ""}
                            disabled={selectedQuestion}> B: {question?.alternatives[1].b}
                        </button>

                        <button
                            onClick={() => {setSelectedQuestion("c"); setShowVideo(true)}}
                            className={selectedQuestion === "c" && isAnswerCorrect("c") ? "correct" : selectedQuestion === "c" && !isAnswerCorrect("c") ? "incorrect" : ""}
                            disabled={selectedQuestion}> C: {question?.alternatives[2].c}
                        </button>
                    </section>

                </$Card>


                <$NeedHelp onClick={() => { setShowVideo(!showVideo) }}>
                    <p>
                        Precisa de ajuda com este
                        assunto?
                        Veja o conteúdo
                        que selecionamos!
                    </p>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </$NeedHelp>

                {showVideo ?
                    <$Video>
                        <iframe ref={video} src={question?.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </$Video> :
                    <></>
                }
            </$Content>



            <$Footer>
                <div>
                    <ion-icon name="chevron-back-outline" onClick={() => { navigate("/") }}></ion-icon>
                    <h5>
                        {temaPT}
                    </h5>
                    <h6>
                        {dificuldadePT}
                    </h6>
                </div>
            </$Footer>
        </$Main>
    )
}

const $Main = styled.main`
    width: 100vw;
    min-height: 100vh;
    background-color: #f7f8fc;
    padding: 10vh 10% 30vh 10%;
`

const $Content = styled.div`
    width: 100%;
    height: 100vh;
    margin-bottom: 30vh;
    
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

        &.correct{
            background-color: #008000;
        }
        &.incorrect{
            background-color: #800000;
        }
    }

    button:hover{
        filter: brightness(90%);
    }
`

const $Footer = styled.footer`
    width: 100%;
    height: 15vh;
    background-color: #a69dff;
    position: fixed;
    left: 0px;
    bottom: 0px;
    padding: 30px;
    border-radius: 20px 20px 0px 0px;

    div{
        margin: 0 auto;
        width: 100%;
        max-width: 400px;
        display: grid;
        grid-template-columns: 1fr 4fr;
               
    }

    ion-icon[name="chevron-back-outline"] {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;
        font-size: 50px;
        color: #f9f9f9;

    }

    h5{
        font-size: 24px;
        text-align: end;
        color: #f9f9f9;

    }

    h6{
        font-size: 18px;
        text-align: end;
        color: #f9f9f9;

    }

`

const $NeedHelp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 400px;
    margin: 0px auto;

    padding: 15px;
    gap: 15px;

    border: 2px solid  #a69dff;
    border-radius: 20px;
    background-color: #f9f9f9;
    box-shadow: 0px 20px 100px -30px rgba(0, 0, 0, 0.3);


    p{
        text-align: center;
    }
    
    ion-icon{
        font-size: 40px;
        color: #333333;
    }

`

const $Video = styled.div`
    width: 100%;
    max-width: 400px;
    height: fit-content;
    margin: 50px auto;
    
    iframe{
        width: 100%;
        min-height: 300px;
    }
`