import { Box, Typography, Slide, Button } from "@mui/material";
import { useInView } from "react-intersection-observer";

const InfoEvent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const direccion =
    "Calle n 2219 entre 894 y 893 - San Francisco Solano (Centro Español)";

  const mapsUrl =
    "https://www.google.com/maps/place/C.+840+2219,+B1881+San+Francisco+Solano,+Provincia+de+Buenos+Aires/@-34.7757988,-58.3151841,17z/data=!3m1!4b1!4m6!3m5!1s0x95a32c4274618407:0xf2c3f23651bfa79b!8m2!3d-34.7757989!4d-58.3105707!16s%2Fg%2F11y826z4fd?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D";

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        width: "100%",
        // ➕ Divider sutil lila arriba
        borderTop: "2px solid #D096FF",
      }}
    >
      {/* Imagen de fondo más alta */}
      <Box
        component="img"
        src="/images/bg3.gif"
        alt="Fiesta"
        sx={{
          width: "100%",
          height: { xs: "65vh", md: "75vh" },
          display: "block",
          objectFit: "cover",
        }}
      />

      {/* Contenido centrado y a lo ancho */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          textAlign: "center",
          px: { xs: 3, md: 4 },
          width: "100%",
          maxWidth: { xs: "100%", md: "720px" },
        }}
      >
        <Slide in={inView} direction="up" timeout={800}>
          <Box>
            {/* Imagen de fiesta arriba del título */}
            <Box
              component="img"
              src="/images/fiesta.gif"
              alt="Icono fiesta"
              sx={{
                width: { xs: 80, md: 110 },
                height: "auto",
                mb: 1,
              }}
            />

            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "'Eyesome'",
                fontSize: { xs: "3.2rem", md: "4rem" },
                color: "#AD61EB",
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              Fiesta
            </Typography>

            <Typography
              sx={{
                mb: 1,
                fontFamily: "'Catchy', serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#D096FF",
                fontWeight: 600,
                lineHeight: 1.4,
              }}
            >
              Sábado 20 de diciembre de 2025
            </Typography>

            <Typography
              sx={{
                mb: 1,
                fontFamily: "'Catchy', serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#D096FF",
                fontWeight: 600,
                lineHeight: 1.4,
              }}
            >
              De 20:30 hs a 05:00 hs
            </Typography>

            <Typography
              sx={{
                mb: 3,
                fontFamily: "'Catchy', serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#D096FF",
                fontWeight: 600,
                lineHeight: 1.4,
                px: "2px",
              }}
            >
              {direccion}
            </Typography>

            <Button
              variant="contained"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: "#AD61EB",
                color: "#ffffff",
                borderRadius: "50px",
                px: 3,
                py: 1,
                fontFamily: "'Catchy', serif",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#333333",
                  color: "#ffffff",
                },
              }}
            >
              CÓMO LLEGAR
            </Button>
          </Box>
        </Slide>
      </Box>
    </Box>
  );
};

export default InfoEvent;
