import { Box, Typography, Fade } from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";
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
        // 🖼 Fondo unificado
        backgroundImage: 'url("/images/fondo4.gif")',
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
          {/* Ícono de dresscode */}
          <CheckroomIcon
            sx={{
              fontSize: { xs: 80, md: 100 },
              color: "#000000",
              mb: 1,
            }}
          />

          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Eyesome'",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#000000",
              fontWeight: "semibold",
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
              color: "#000000",
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
