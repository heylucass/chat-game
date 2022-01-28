import GlobalStyles from '../Styles/generic/GlobalStyles';
import DisplayBox from '../Components/DisplayBox/DisplayBox';
import { useState } from 'react';

export default function ChatGame()
{
    const [message, setMessage] = useState("");
    const [listMsm, setListMsm] = useState([]);
    const msmHandler = (e) => {
        setMessage(e.target.value);
    };
    function sendMsm(newMsm) {
        const msmBox = {
            id: listMsm.length + 1,
            de: 'Lucas',
            texto: newMsm,
        };
        console.log(newMsm);
        setListMsm([
            ...listMsm,
            msmBox
        ]);
        setMessage("")

    };

    return (<>
        <div>
            <div className="chatContainer">
                <DisplayBox list={listMsm}/>
                <input placeholder="Digite sua mensagem!" className="chatInput" type="text" value={message}
                onChange={msmHandler} onKeyPress={(e) => {
                    if(e.key === 'Enter'){
                        e.preventDefault();
                        sendMsm(message);
                    }
                }}/>
            </div>
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
    </>)
}