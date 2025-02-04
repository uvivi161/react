import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import RecipeStore from "../store/recipeStore";

const ShowRecipe = observer(() => {
  const navigate = useNavigate();

  return (
    <Box sx={{margin:"15px", marginTop:"50px", width: "300px", paddingLeft: 2 }}>
      <Typography variant="h5" sx={{marginLeft:"40px",width:"250px", marginBottom: 2, color: "#000000", backgroundColor:"#3d3d3d",borderRadius:"8px", boxShadow:"2px 2px 4px rgba(0,0,0,0.1"}}>
        רשימת מתכונים
      </Typography>
      <List>
        {RecipeStore.list.map((recipe) => (
          <ListItem key={recipe.id} sx={{marginLeft:"40px", width:"250px", marginBottom: 2, color: "#000000",backgroundColor:"#7c7c7c", borderRadius:"8px", boxShadow:"2px 2px 4px rgba(0,0,0,0.1"}}>
            <ListItemButton onClick={() => navigate(`/ShowRecipe/${recipe.id}`)}>
              <ListItemText primary={recipe.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
});

export default ShowRecipe;