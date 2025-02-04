import axios from "axios"
import {makeAutoObservable} from "mobx"

export type RecipeType = {
    id: number,
    title: string,
    cookTime: number,
    ingredients: string[],
    description: string,
    authorId: number
}

class RecipeStore {
    list: RecipeType[] = []
    recipeCounter = 4

    constructor() {
        makeAutoObservable(this)
        this.fetchRecipes();
    }

    async fetchRecipes() {
        try {
            const response = await axios.get('http://localhost:3000/api/recipes/');
            this.list = response.data;        
        } catch (error) {
        }
    }
    // 
    addRecipe(id: number, title: string, cookTime: number, ingredients: string[], description: string, authorId: number) {       
        this.list.push({
            id: id,
            title:title,
            cookTime:cookTime,
            ingredients:ingredients,
            description: description,
            authorId: authorId
        })
    }

    getAllRecipes() {
        return this.list
    }
}

export default new RecipeStore()
