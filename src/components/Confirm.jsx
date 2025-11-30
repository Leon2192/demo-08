import { Box, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ButtonLinks from "./ButtonLinks/ButtonLInks";

const Confirm = () => {
  return (
    <Box
      sx={{
        minHeight: "40vh",
        py: 8,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        // 🖼 Fondo igual que el resto
        backgroundImage: 'url("/images/fondo4.gif")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      
      }}
    >
      {/* Contenedor interno */}
      <Box>
        {/* Ícono de check en lugar del gif */}
        <CheckCircleOutlineIcon
          sx={{
            fontSize: { xs: 80, md: 100 },
            color: "#000000",
            mb: 1,
          }}
        />

        {/* Título principal cursiva */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Eyesome'",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            color: "#000000",
            fontWeight: "semibold",
            mb: 2,
          }}
        >
          Confirmación de asistencia
        </Typography>

        {/* Subtítulo más pequeño */}
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Quicksand'",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            color: "#000000",
            mb: 4,
          }}
        >
          Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu
          asistencia!
        </Typography>

        {/* Botón */}
        <ButtonLinks
          label="Confirmar Asistencia"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfzWWtsXv4jwQXCokesQEvX6puazcebLnedTtP3Tv9E8a_7IA/viewform"
          newTab
        />
      </Box>
    </Box>
  );
};

export default Confirm;
