import { Button } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

export const LanguageButton: React.FC = () => {
  return (
    <Button
      variant="text"
      startIcon={<LanguageIcon />}
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
      ESP
    </Button>
  );
};
