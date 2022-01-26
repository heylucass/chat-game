export default function TitleName(props) {
    const Tag = props.tag;
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                h1{
                    color: white;
                }
                p {
                    color: white;
                    font-family: courier new;
                    font-size: 1.1rem;
                }
            `}</style>
        </>

    )
}