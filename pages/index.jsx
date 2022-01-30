import Tag from '../Components/TitleName/TitleName'
import { useState } from 'react';
import "../config.json";
import { useRouter } from 'next/router';
import GlobalStyles from '../Styles/generic/GlobalStyles';
import BackgroundImg from '../Components/BackgroundImg/BackgroundImg'
function Home() {
    const imgBorder = 'https://ia801605.us.archive.org/14/items/RetroArchOverLays/gba.png'

    const Router = useRouter();
    const [username, setUsername] = useState("");
    const nameHandler = (e) => {
        setUsername(e.target.value);
    };
    const loginHandler = (e) => {
        e.preventDefault();
        Router.push(`/chat?user=${username}`);
        
    }
    return (
        <>
            <div>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
                <section>
                    <Tag tag="h1">Chat Game</Tag> <br />
                    <Tag tag="p">Olá {username},<br />  Seja Bem-Vindo(a)</Tag>
                    <input className="NameInput" type="text" placeholder="Your Name" value={username} onChange={nameHandler} /> <br />
                    <input className="SubInput" type="submit" name="Submit" onClick={loginHandler} />
                </section>
                <>
                    <div className="ImgDiv">
                        <img src={`https://github.com/${username}.png`} alt='fotu' />
                        <Tag tag="p">{username}</Tag>
                    </div>
                </>
            </div>
            <GlobalStyles url={imgBorder} />
                <style jsx>{`
                    div {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 54vw;
                        height: 65vh;
                        background-color: grey;
                        border-radius: 8px;
                        font-family: 'Press Start 2P', cursive;
                    }    
                    img {
                        width: 130px;
                        height: 140px;
                        border-radius: 15px;
                        border: none;
                    }
                    .ImgDiv {
                        width: 15vw;
                        height: 25vh; 
                        background-color: #202220;
                        border: 1px solid black;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        font-family: courier new;
                    }
                    section{
                        margin-right: 20px;
                        width: 20vw;
                        height: 23vh;
                        font-family: 'Press Start 2P', cursive;
                    }
                    .NameInput {
                        border: 1px solid #202211;
                        background-color: #202220;
                        border-radius: 5px;
                        padding: 5px;
                        color: whitesmoke;
                        margin-top: 5px;
                        font-family: 'Press Start 2P', cursive;
                        margin-right: 5px;
                        max-width: 250px;
                    }
                    .SubInput {
                        background-color: #BA1200;
                        margin-top: 5px;
                        font-family: 'Press Start 2P', cursive;
                        padding: 12px;
                        border: none;
                        border-radius: 5px;
                        transition-duration: 0.4s;
                    }
                    .SubInput:hover {
                        opacity: 0.8;
                    }
                `}</style>
    </>            
    )
}
export default Home;
export { username } from './chat.jsx'