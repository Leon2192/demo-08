import { Box, Typography, Button, Fade } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { useInView } from "react-intersection-observer";

const SuggestSong = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "40vh",
        py: 8,
        px: 2,
        display: "flex",
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
      <Fade in={inView} timeout={1000}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Ícono musical en lugar del GIF */}
          <MusicNoteIcon
            sx={{
              fontSize: { xs: 80, md: 100 },
              color: "#000000",
              mb: 1,
              animation: "pulse 1.8s infinite",
              "@keyframes pulse": {
                "0%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.08)" },
                "100%": { transform: "scale(1)" },
              },
            }}
          />

          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Prata'",
              fontSize: { xs: "1.4rem", md: "1.8rem" },
              color: "#000000",
              mb: 1,
            }}
          >
            ¿Qué canciones no pueden faltar?
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Prata'",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#000000",
              mb: 4,
            }}
          >
            ¡Ayudame sugiriendo las canciones que pensás que no pueden faltar
            en la fiesta!
          </Typography>

          <Button
            component="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSe8-iERRrOue2RTyYGUvI_jpdpW6bbl7GossYDsRTsXH5fg9w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              borderRadius: 999,
              px: 4,
              backgroundColor: "#000000",
              fontFamily: "'Prata'",
              color: "#ffffff",
              boxShadow: "none",
              animation: "bounceBtn 2s infinite",
              transition: "all 0.3s ease",
              "@keyframes bounceBtn": {
                "0%, 20%, 50%, 80%, 100%": {
                  transform: "translateY(0)",
                },
                "40%": {
                  transform: "translateY(-6px)",
                },
                "60%": {
                  transform: "translateY(-3px)",
                },
              },
              "&:hover": {
                backgroundColor: "#fff",
                color: "#000000",
                transform: "scale(1.05)",
              },
            }}
          >
            Sugerir canción
          </Button>
        </Box>
      </Fade>
    </Box>
  );
};

export default SuggestSong;
