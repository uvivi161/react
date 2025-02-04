import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import ShowRecipe from "../menuComponents/ShowRecipes";

const RecipeLayout = () => {
  return (
    <Box sx={{ display: "flex",flexDirection:"row",justifyContent:"flex-end", height: "100vh", padding: 2 , border:'1px red'}}>
      <Outlet /> 
      <ShowRecipe />
    </Box>
  );
}; 

export default RecipeLayout;
