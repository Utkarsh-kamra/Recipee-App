import React from "react"
import IngredientsList from "./IngredientsList"
import Recipe from "./Recipe"
import { getRecipeFromMistral } from "../ai.js"

export default function Main(){

    const [ingredients,setIngredients] = React.useState([]);

    const [recipe, setRecipe] = React.useState("")
    const recipeSection= React.useRef(null)

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            // recipeSection.current.scrollIntoView({behavior: "smooth"})
            const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
            window.scroll({
                top: yCoord,
                behavior: "smooth"
            })
        }
    }, [recipe])


    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
        // display responce of API
    }
    
     function addIngredient(formData){
            const newIngredient = formData.get("ingredient"); 
            setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }
    

    return(
        <main>
            <form action={addIngredient}   >
                <input 
                    type="text" 
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    />
                <button>Add ingredient</button>
            </form>
            {ingredients.length>0 && 
             <IngredientsList 
                ref={recipeSection}
                handleClick ={getRecipe}
                ingredients = {ingredients}
                />}
            
            {recipe && <Recipe recipe={recipe}/>}
        </main>
    )
}