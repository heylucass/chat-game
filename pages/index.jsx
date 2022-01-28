import Tag from '../Components/TitleName/TitleName'
import { useState } from 'react';
import "../config.json";
import {useRouter} from 'next/router';
import GlobalStyles from '../Styles/generic/GlobalStyles'
function Home()
{
    const Router = useRouter();
    const [username, setUsername] = useState("");
    const nameHandler = (e) => {
        setUsername(e.target.value);
    };
    const loginHandler = (e) => {
        e.preventDefault();
        Router.push("/chat");
    }
    return (
    <div>
        <section>
            <Tag tag="h1">Chat Game</Tag> <br />
            <Tag tag="p">Olá {username},<br />  Seja Bem-Vindo(a)</Tag>
            <input className="NameInput" type="text" placeholder="Your Name" value={username} onChange={nameHandler} /> <br />
            <input className="SubInput" type="submit" name="Submit" onClick={loginHandler} />
        </section>
        <>    
            <div className="ImgDiv">
                <img src={`https://github.com/${username}.png`} alt="../img/altImg.png" />
                <Tag tag="p">{username}</Tag>
            </div>
        </> 
                
                <GlobalStyles />
                <style jsx>{`
                    div {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 55vw;
                        height: 45vh;
                        background-color: black;
                        border-radius: 8px;
                    }    
                    img {
                        width: 140px;
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
                    }
                    section{
                        margin-right: 20px;
                        width: 20vw;
                        height: 23vh;
                    }
                    .NameInput {
                        border: 1px solid #202211;
                        background-color: #202220;
                        border-radius: 5px;
                        padding: 5px;
                        color: whitesmoke;
                        margin-top: 5px;
                    }
                    .SubInput {
                        background-color: #BA1200;
                        margin-top: 5px;
                        font-family: tahoma;
                        padding: 12px;
                        border: none;
                        border-radius: 5px;
                        transition-duration: 0.4s;
                    }
                    .SubInput:hover {
                        opacity: 0.8;
                    }
                `}</style>
    </div>
        )
}
export default Home