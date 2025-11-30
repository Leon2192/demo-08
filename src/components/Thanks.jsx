import { Box, Typography } from "@mui/material";

const Thanks = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "50vh",
        m: 0,
        p: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        // 🖼 Fondo que pediste
        backgroundImage: 'url("/images/fondo4.gif")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      {/* Capa ligera para mejorar legibilidad del texto */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
         
          zIndex: 0,
        }}
      />

      {/* Contenido principal */}
      <Box
        sx={{
          px: 3,
          maxWidth: 700,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Catchy'",
            fontSize: { xs: "1.2rem", md: "1.6rem" },
            color: "#000000",
            lineHeight: 1.5,
            textShadow: "0 2px 6px rgba(0,0,0,0.7)",
          }}
        >
          Existen momentos en la vida que imaginamos, soñamos y esperamos.
          Uno de esos momentos ha llegado:
          <br />
          <br />
          <strong>Mis 15 años</strong>
          <br />
          <br />
          Y deseo compartirlo con las personas que han estado para mí y mis padres,
          <br />
          <strong>TÚ ERES UNA DE ELLAS...</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default Thanks;
