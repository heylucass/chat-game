import React from 'react';
//import { Box, Button, Text, Image } from '@skynexui/components';
import appConfig from '../../stickers.json';

export function ButtonSendSticker(props) {
  const [isOpen, setOpenState] = React.useState('');

  return (
    <div>
      <button onClick={() => setOpenState(!isOpen)}>😋</button> 

        {isOpen && ( 
            <div className="divinside" onClick={() => setOpenState(false)}>
                <p> Stickers </p>
                <ul>
                    {appConfig.stickers.map((sticker) => (
                    <li
                        onClick={() => {
                        // console.log('[DENTRO DO COMPONENTE] Clicou no sticker:', sticker);
                        if (Boolean(props.onStickerClick)) {
                            props.onStickerClick(sticker);
                        }
                        }}
                        key={sticker}>
                        <img src={sticker} />
                    </li>
                    ))}
                </ul>
            </div>
      )}
      <style jsx>{`
            div {
                position: relative;
                display: flex;
            }
            button {
                    border-radius: 25%;
                    border: none;
                    padding: 0 3px 0 0;
                    min-width: 50px;
                    min-height: 50px;
                    font-size: 20px;
                    margin-bottom: 8px;
                    line-height: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #BA1200;
                    transition-duration: 0.4s;
            }
            button:hover {
              opacity: 0.7;
              background-color: #6F68D1;
            }
            .divinside {
                    display: flex;
                    flex-direction: column;
                    border-radius: 5px;
                    position: absolute;
                    background-color: #181F25;
                    width: 210px;
                    height: 300px;
                    right: 30px;
                    bottom: 30px;
                    padding: 16px;
                    box-shadow: rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px;
            }
            p   {
                    color: #FFFFFF;
                    font-weight: bold;
            }
            ul {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    flex: 1,
                    padding-top: 16px;
                    overflow: scroll;
            }
            li {
                    width: 50%;
                    border-radius: 5px;
                    padding: 10px;
                    transition-duration: 0.5s;
                    justify-content: center;
                    align-items: center;
                                
            }
            li:hover {
              opacity: 0.6;
              background-color: grey;
            }
            img {
              width: 99%;
              height: 65%;
            }
      `}</style>
    </div>
  )
}