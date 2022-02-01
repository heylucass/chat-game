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

function RealTimeMsmListener(addMsmRT) {
    sbClient.from('MessageList').on('*', (resRT) => {
        console.log('Database foi atualizado', resRT.new );
        addMsmRT(resRT.new);
    }).subscribe();
};

export default function ChatGame()
{
    const [message, setMessage] = useState("");
    const [listMsm, setListMsm] = useState([]);
    const Router = useRouter();
    const userLogged = Router.query.user;

    const msmHandler = (e) => {
        setMessage(e.target.value);
    };

    const routerHome = (e) => {
        e.preventDefault;
        Router.push('/');
    };

     useEffect(() => {
         sbClient.from('MessageList').select('*').order('id',{ ascending: true }).then(({data}) => {
             // console.log('fecth enviado, Recebido:', data)
             setListMsm(data);
             RealTimeMsmListener((newMsm) => {
                setListMsm((valueUpdatedList) => {
                    return [
                        ...valueUpdatedList,
                        newMsm
                    ]
                });
             });
         })
     }, [])

    function sendMsm(newMsm) {
        const msmBox = {
            // id: listMsm.length + 1,
            de: userLogged,
            texto: newMsm,
        };
        sbClient.from('MessageList').insert([ msmBox ]).then(({data}) => {
            console.log('Foi inserido um novo dado:', data);
        })
        setMessage("")

    };
    // function deleteMsm(proto) {
    //     //console.log('mensagem deletada', proto);
    //     sbClient.from('MessageList').delete().match({id: proto}).then(({data}) => {
    //         console.log('fetch enviado', data)
    //     })
    // }

    return (<>
        <div>
            <div className="chatContainer">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
                <button onClick={routerHome}>Sair</button>
                <DisplayBox onDelete={(msmUpdated) => {
                    //console.log('proto recebida', msmUpdated.id)
                    //deleteMsm(msmUpdated.id)
                }}  list={listMsm}/>
                <div className="divController">
                    <input placeholder=" Digite sua mensagem!" className="chatInput" type="text" value={message}
                    onChange={msmHandler} onKeyPress={(e) => {
                        if(e.key === 'Enter'){
                            e.preventDefault();
                            sendMsm(message);
                        }
                    }}/>
                    <ButtonSendSticker onStickerClick={(sticker) => {
                        console.log('sticker enviado' + sticker)
                        sendMsm(':stick: ' + sticker);
                    }}/>
                </div>
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
        .divController {
            display: flex;
            flex-direction: row;
            width: 90%;
            height: 20%;
        }
        button {
            font-size: 1.1rem;
            background-color:#6F68D1;
            font-family: 'Press Start 2P', cursive;
            color: whitesmoke;
            padding: 5px;
            border: none;
            border-radius: 8px;
            margin-top: 2px;
            transition-duration: 0.5s;
        }
        button:hover {
            background-color:#8D86C9 ;
            opacity: 0.7;
        }
        .chatContainer {
            width: 55vw;
            height: 70vh;
            background-color: #9067C6;
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
            width: 90%;
            height: 50%;
            margin-right: 8px;
            background-color:#242038;
            border-radius: 5px;
            border: none;
            font-size: 1.2rem;
            font-family: 'Press Start 2P', cursive;
            color: white;
        }
        `}</style>
    </>)
}