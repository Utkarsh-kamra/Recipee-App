import ReactMarkDown from "react-markdown"

export default function Recipe(props){
    return(
        <section className="suggested-recipe-container" araia-live="polite">
            <h2>Chef Utkarsh Recommends:</h2>
            <ReactMarkDown>{props.recipe}</ReactMarkDown>
        </section>
    )
}