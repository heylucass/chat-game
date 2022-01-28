import Background from "../Components/BackgroundImg/BackgroundImg";
import { useState, useEffect } from "react";
import DisplayBox from "../Components/DisplayBox/DisplayBox";
import GlobalStyles from "../Styles/generic/GlobalStyles";
import { createClient } from '@supabase/supabase-js';


export default function ChatGame() {
    const [message, setMessage] = useState("");
    const [listMsm, setListMsm] = useState([]);
    // useEffect(() => {
    //     sbClient.from('MessageList').select('*').then(({ data }) => {
    //         console.log(data);
    //         setListMsm(data);
    //     })    
    // }, [])

    const messageHandler = (e) => {
        setMessage(e.target.value);
    };

    const sendMsm = (e) => {
        if (e.key == "Enter") {
            const msmBox = {
                //id: listMsm.length + 1,
                de: "Lucas",
                texto: message,
            };
            // sbClient.from('MessageList').insert([ message]).then(({ data }) => {
            //     console.log(data)
            //     setListMsm([
            //             ...listMsm,
            //              data[0]
            //          ]);
            // })
            e.preventDefault();
            setListMsm(message);
            setMessage("")
        }
    };
    return (
        <>
            <div>
                <div className="chatContainer">
                    <DisplayBox list={listMsm} />
                    <input type="text" placeholder="Digite sua mensagem!" value={message} className="chatInput" onChange={messageHandler} onKeyPress={sendMsm} />
                </div>
                <GlobalStyles />
                <style jsx>{`
                div {
                    justify-content: center;
                    align-items: end;
                    display: flex;
                    width: 100vw;
                    height: 100vh;
                }
                .chatContainer {
                    width: 70vw;
                    height: 45vh;
                    background-color: black;
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-family: sans-serif;
                    font-size: 1.1rem;
                    margin-bottom: 5px;
                }
                .chatInput {
                    width: 95%;
                    height: 10%;
                    background-color: #202220;
                    border-radius: 5px;
                    border: none;
                    font-size: 1.2rem;
                    font-family: sans-serif;
                    color: white;
                }
            `}</style>
            </div>
        </>
    )
}