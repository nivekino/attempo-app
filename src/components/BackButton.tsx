import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="text"
      startIcon={<ArrowBackIcon />}
      onClick={() => navigate(-1)}
      sx={{
        fontFamily: "Inter, sans-serif",
        fontSize: { xs: "14px", sm: "16px" },
        fontWeight: 400,
        color: "#18243E",
        textTransform: "none",
        justifyContent: { xs: "start", md: "center" },
        px: { xs: "10px", sm: "20px", md: "30px" },
        minWidth: "auto",
      }}
    >
      Regresar
    </Button>
  );
};
