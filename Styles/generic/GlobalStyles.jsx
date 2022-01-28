export default function GlobalStyles()
{
    return (
        <style global jsx>{`
            * {
                margin: 0;
                padding: 0;
                border-box: none;
            }

            body {
                background-color: white;
                width: auto;
                height: 100vh;
                font-family: sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}</style>
    )
}
