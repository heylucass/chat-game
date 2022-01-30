import GlobalStyles from '../Styles/generic/GlobalStyles';
import DisplayBox from '../Components/DisplayBox/DisplayBox';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { ButtonSendSticker } from '../Components/ButtonSticker/ButtonSticker'
const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const sbANNON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const sbClient = createClient(sbUrl, sbANNON_KEY);
const imgBack = 'https://ia801605.us.archive.org/14/items/RetroArchOverLays/gba.png';

export default function ChatGame()
{
    const [message, setMessage] = useState("");
    const [listMsm, setListMsm] = useState([
        {
            id: 1,
            de: 'oijesi',
            texto: ':stick: https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_1.png'
        }
    ]);
    const Router = useRouter();
    const userLogged = Router.query.user;
    //console.log(userLogged)

    const msmHandler = (e) => {
        setMessage(e.target.value);
    };

    const routerHome = (e) => {
        e.preventDefault;
        Router.push('/');
    };

     useEffect(() => {
         sbClient.from('MessageList').select('*').order('id',{ ascending: true }).then(({data}) => {
             console.log('fecth enviado, Recebido:', data)
             //setListMsm(data);
         })
     }, [])

    function sendMsm(newMsm) {
        const msmBox = {
            //id: listMsm.length + 1,
            de: userLogged,
            texto: newMsm,
        };
        sbClient.from('MessageList').insert([ msmBox ]).then(({data}) => {
            console.log('Foi inserido um novo dado:', data);
            //  setListMsm([
            //     ...listMsm,
            //     data[0]
            // ]);
        })
        setMessage("")

    };

    return (<>
        <div>
            <div className="chatContainer">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
                <button onClick={routerHome}>Sair</button>
                <DisplayBox list={listMsm}/>
                <input placeholder="Digite sua mensagem!" className="chatInput" type="text" value={message}
                onChange={msmHandler} onKeyPress={(e) => {
                    if(e.key === 'Enter'){
                        e.preventDefault();
                        sendMsm(message);
                    }
                }}/>
                <ButtonSendSticker />
            </div>
        </div>
        <GlobalStyles url={imgBack} />
        <style jsx>{`
        div {
            justify-content: center;
            align-items: center;
            display: flex;
            width: 100vw;
            height: 100vh;
        }
        button {
            font-size: 1.1rem;
            background-color: black;
            font-family: 'Press Start 2P', cursive;
            color: whitesmoke;
            padding: 5px;
            border: none;
            border-radius: 8px;
            margin-top: 2px;
        }
        .chatContainer {
            width: 55vw;
            height: 70vh;
            background-color: grey;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: 'Press Start 2P', cursive;
            font-size: 1.2rem;
            margin-bottom: 5px;
        }
        .chatInput {
            width: 95%;
            height: 10%;
            background-color: #202220;
            border-radius: 5px;
            border: none;
            font-size: 1.2rem;
            font-family: 'Press Start 2P', cursive;
            color: white;
            margin-top: 5px;
        }
        `}</style>
    </>)
}