
export default function ScholarshipInfo(props){
    return (
        <>
            <h1>{props.sname}</h1>
            <p>{props.description}</p>
            <p>{props.date}</p>
            <p>{props.link}</p>
            <p>{props.category}</p>
            <p>{props.money}</p>
        </>
    )
}