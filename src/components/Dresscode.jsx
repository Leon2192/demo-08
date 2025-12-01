import { Box, Typography, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";

const Dresscode = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "40vh", // 🔹 un poco más alto
        py: 8,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        // 🖼 Fondo
        backgroundImage: 'url("/images/bg3.gif")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Fade in={inView} timeout={800}>
        <Box
          sx={{
            transform: inView ? "scale(1)" : "scale(0.95)",
            transition: "transform 0.6s ease-out",
          }}
        >
          {/* Imagen de dresscode en lugar del ícono */}
          <Box
            component="img"
            src="/images/dress.gif"
            alt="Dresscode"
            sx={{
              width: { xs: 80, md: 110 },
              height: "auto",
              mb: 1,
            }}
          />

          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Eyesome'",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#D096FF",
              fontWeight: 600,
              mb: 1,
            }}
          >
            Dresscode
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Catchy'",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#D096FF",
              fontWeight: 600,
            }}
          >
            Se solicita evitar vestimenta en tonos violeta y lila
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
};

export default Dresscode;
