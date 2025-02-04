import { useParams } from "react-router-dom";
import { Paper, Typography } from "@mui/material";
import recipeStore from "../store/recipeStore";
import { observer } from "mobx-react-lite";

const RecipeDetails = observer( () => {
  const { id } = useParams();
  const recipe = recipeStore.list.find((r) => r.id.toString() === id);
  if (!recipe) {
    return <Typography variant="h5" color="error">לא נמצא מתכון</Typography>;
  }

  return (
    <Paper sx={{ borderRadius:"25px",margin:"50px" ,padding: 3,marginTop:"50px", boxShadow: 3, flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>{recipe.title}</Typography>
      <Typography variant="subtitle1" color=" #000000">
        זמן הכנה: {recipe.cookTime} דקות
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 2 }}>מרכיבים:</Typography>
      <ul>
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <Typography variant="h6" sx={{ marginTop: 2 }}>תיאור:</Typography>
      <Typography>{recipe.description}</Typography>
    </Paper>
  );
});

export default RecipeDetails;
