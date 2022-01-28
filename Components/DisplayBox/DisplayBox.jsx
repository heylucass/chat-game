import MsmBox from "../MsmBox/MsmBox"
export default function DisplayBox(props) {
    const array = props.list;
    
    return (<>
        <div id="display" className="display">{array.map((msmUpdated) => {
            return (
                <MsmBox updated={msmUpdated}/>
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
                }`}</style>
    </>)
}