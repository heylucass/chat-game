//import MsmBox from "../MsmBox/MsmBox"
export default function DisplayBox(props) {
    const array = props.list;
    
    return (<>
        <div id="display" className="display">{array.map((msmUpdated) => {
            return (
                <div key={msmUpdated.id} className="msm-Container">
                <span>
                    <img src={`https://github.com/${msmUpdated.de}.png`} alt="fotu" />
                    <p className="msm-Owner">{msmUpdated.de}</p>
                    <p className="msm-Date">{(new Date().toLocaleDateString())}</p>
                </span><br />
                <h5 className="msm-Content">{msmUpdated.texto}</h5><br />
            </div>
            )
        })}
        </div>
        <style jsx>{`.display {
                    width: 95%;
                    height: 78%;
                    background-color: #202220;
                    border-radius: 8px;
                    margin-bottom: 12px;
                    color: whitesmoke;
                    overflow: auto;
                }    
                .display::-webkit-scrollbar-track {
                    box-shadow: inset 0 0 5px grey;
                    border-radius: 10px;
                }
                .display::-webkit-scrollbar-thumb {
                    background: red;
                    border-radius: 10px;
                }
                .msm-Container {
                    width: 98%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    margin-left: 4px;
                    transition-duration: 0.5s;
                    margin-bottom: 5px;
                    justify-content: center ;
                    align-items: start;  
                }
                .msm-Container:hover {
                    background-color: black;
                    border-radius: 5px;
                }
                span {
                    display: flex;
                    flex-direction: row;
                    height: 1px;
                    margin-left: 4px;
                }
                img {
                    border-radius: 50%;
                    width: 25px;
                    height: 25px;
                    margin-right: 5px;
                }
                .msm-Owner {
                  margin-right: 15px;
                  height: 12px;
                  margin-top: 2px;
                }
                .msm-Date {
                  font-size: 0.7rem;
                  color: grey;
                  margin-top: 7px;
                  margin-bottom: 10px;
                }
                .msm-Content {
                    height: 12px;
                    margin-left: 4px;
                    margin-top: 5px;
                }
                    `}</style>
    </>)
}