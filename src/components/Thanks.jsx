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
        // 🖼 Fondo
        backgroundImage: 'url("/images/bg3.gif")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      {/* Capa opcional (por ahora sin color extra) */}
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
            fontSize: { xs: "1.3rem", md: "1.7rem" },
            color: "#C57DFF",
            lineHeight: 1.5,
            fontWeight: "bold",
            // 🔥 Sombra más fuerte y notoria
            // textShadow:
            //   "0 0 4px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.8)",
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
