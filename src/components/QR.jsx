import { Box, Typography, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";

const Qr = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "30vh",
        py: 8,
        px: 2,
        backgroundColor: "#9A887B",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={800}>
        <Box
          sx={{
            transform: inView ? "scale(1)" : "scale(0.95)",
            transition: "transform 0.6s ease-out",
          }}
        >
          {/* Imagen centrada */}
          <Box display="flex" justifyContent="center" mb={2}>
            <Box
              component="img"
              src="/images/004/qr.png"
              alt="Código QR"
              sx={{
                width: 200,
                height: 200,
                objectFit: "contain",
              }}
            />
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Eyesome'",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#ffffff",
              mb: 1,
            }}
          >
            Escaneá este QR
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Quicksand'",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#ffffff",
              mb: 2,
            }}
          >
            ¡Compartí las fotos del evento con los anfitriones!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Quicksand'",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#ffffff",
              mb: 1,
            }}
          >
            O podés presionar aquí
          </Typography>

          {/* Botón personalizado */}
          <Box mt={2}>
            <Box
              component="a"
              href="https://photos.google.com/share/AF1QipMF4Niy7oe5VTaE9V4WC7LanXP3kaQVgsRL9nHsI6i5FX5jOpjJKcJxK8JW9Ar8eg?key=V2ZJMWMyZ0hpcHNnbVhmYno1LUpBLTd4bTdYV1pn"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-block",
                px: 4,
                py: 1.2,
                borderRadius: "50px",
                backgroundColor: "#ffffff",
                color: "#000000",
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: "bold",
                fontSize: "1rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              Ir al Álbum
            </Box>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default Qr;
