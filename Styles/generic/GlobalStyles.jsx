export default function GlobalStyles(props)
{
    const imgUrl = props.url;
    return (
        <style global jsx>{`
            * {
                margin: 0;
                padding: 0;
                border-box: none;
            }
            #__next {
            }

            body {
                font-family: 'Press Start 2P', cursive;;
                background-color: white;
                background-image: url('${imgUrl}');
                background-size: 100% 100%;
                width: auto;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}</style>
    )
}
