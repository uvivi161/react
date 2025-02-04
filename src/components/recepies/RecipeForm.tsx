import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, Box, Alert, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import recipeStore from "../store/recipeStore";
import IngredientsList from "./IngredientsList";
import axios from "axios";
import { UserContext } from "../login/UserReducer";


const recipeSchema = yup.object().shape({
  title: yup.string().required("Recipe title is required"),
  description: yup.string().required("Description is required"),
  cookTime: yup
    .number()
    .typeError("Cook time must be a number")
    .positive("Cook time must be positive")
    .integer("Cook time must be an integer")
    .required("Cook time is required"),
  ingredients: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Ingredient name is required"),
    })
  ),
});

const RecipeForm = observer(() => {

  const [message, setMessage] = useState("");
  const [user] = useContext(UserContext)

  const {register,control,handleSubmit,reset,formState: { errors }} = useForm({
    resolver: yupResolver(recipeSchema),
    defaultValues: {title: "",description: "",ingredients: [{ name: "" }],},
  });

  const onSubmit =async(data: any) => {    
    const formattedIngredients = data.ingredients.map((ingredient: any) => ingredient.name);
    
    const newRecipe = {...data , ingredients: formattedIngredients};
    try {
      const response = await axios.post('http://localhost:3000/api/recipes/',newRecipe,{headers:{'Content-Type': 'application/json',"user-id":user.id}})    
      recipeStore.addRecipe(response.data.recipe.id ,response.data.recipe.title, response.data.recipe.cookTime,response.data.recipe.ingredients ,response.data.recipe.description,response.data.recipe.authorId);  
    }
    catch (error) {

    }
    setMessage("Recipe added successfully!");
    reset();
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{margin:"30px", maxWidth: 400, mx: "auto", p: 2, display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography color="#000000" variant="h5">Add a New Recipe</Typography>
      <TextField
        label="Recipe Title"
        variant="outlined"
        {...register("title")}
        error={!!errors.title}
        helperText={errors.title?.message}
      />
      <TextField
        label="Description"
        variant="outlined"
        multiline
        rows={3}
        {...register("description")}
        error={!!errors.description}
        helperText={errors.description?.message}
      />
      <TextField
        label="Cook Time (minutes)"
        variant="outlined"
        type="number"
        {...register("cookTime")}
        error={!!errors.cookTime}
        helperText={errors.cookTime?.message}
      />
      <IngredientsList control={control} errors={errors} />
      <Button sx={{backgroundColor:"#373737"}} type="submit" variant="contained" color="primary">
        Add Recipe
      </Button>
      {message !== "" && <Alert severity="success">{message}</Alert>}
    </Box>
  );
});

export default RecipeForm;



