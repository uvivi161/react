import { Box, TextField, IconButton, Typography, Button } from "@mui/material";
import { AddCircle as AddCircleIcon, RemoveCircle as RemoveCircleIcon } from "@mui/icons-material";
import { useFieldArray, Control, FieldErrors } from "react-hook-form";

interface IngredientsListProps {
  control: Control<any>;
  errors: FieldErrors<{ ingredients: { name: string }[] }>;
}

const IngredientsList = ({ control, errors }: IngredientsListProps) => {
  const { fields, append, remove } = useFieldArray({ control, name: "ingredients" });

  return (
    <Box>
      <Typography color="#000000">Ingredients List</Typography>
      {fields.map((item, index) => (
        <Box key={item.id} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <TextField
            label={`Ingredient ${index + 1}`}
            variant="outlined"
            {...control.register(`ingredients.${index}.name`)}
            error={!!errors.ingredients?.[index]?.name}
            helperText={errors.ingredients?.[index]?.name?.message}
          />
          <IconButton onClick={() => remove(index)} color="error">
            <RemoveCircleIcon />
          </IconButton>
        </Box>
      ))}
      <Button sx={{border:"1px, solid #373737" ,  color:"#373737"}} startIcon={<AddCircleIcon />} onClick={() => append({ name: "" })} variant="outlined">
        Add Ingredient
      </Button>
    </Box>
  );
};

export default IngredientsList;
