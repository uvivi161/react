import { Box, Typography } from "@mui/material";
import FlatwareIcon from '@mui/icons-material/Flatware';

const HomePage = () => {

  return (<>
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        padding: 4,
        borderRadius: 2,
      }}
    >
      <Typography color="#1f2151" variant="h2" gutterBottom>
        ברוכים הבאים לאתר המתכונים שלנו!
      </Typography>
      <Typography color="#1f2151" variant="h5"><FlatwareIcon></FlatwareIcon> גלו מתכונים טעימים וחדשניים בכל קליק <FlatwareIcon></FlatwareIcon></Typography>
    </Box>
  </>)
}

export default HomePage
