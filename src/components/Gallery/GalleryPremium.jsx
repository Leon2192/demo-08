import {
  Box,
  Typography,
  IconButton,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const images = ["/images/gal1.jpeg", "/images/gal2.jpeg"];

const CARD_RATIO = "4 / 3";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <Box
      ref={ref}
      id="galeria"
      sx={{
        py: 8,
        px: 2,
        minHeight: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // 🖼 Fondo igual que el countdown
        backgroundImage: 'url("/images/bg3.gif")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
  
      }}
    >
      <Fade in={inView} timeout={1000}>
        <Box
          sx={{
            width: "100%",
            maxWidth: 800,
            mx: "auto",
          }}
        >
          {/* Título centrado, blanco */}
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              textAlign: "center",
              fontFamily: "'Eyesome'",
              fontWeight: 600,
              color: "#AD61EB",
            
            }}
          >
            Galería
          </Typography>

          {/* Imágenes una debajo de la otra (mobile first) */}
          {images.map((src, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: CARD_RATIO,
                borderRadius: 2,
                overflow: "hidden",
                mb: 3,
                bgcolor: "rgba(255,255,255,0.1)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
                },
              }}
              onClick={() => handleOpen(index)}
            >
              <Box
                component="img"
                src={src}
                alt={`Imagen ${index + 1}`}
                loading="lazy"
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </Box>
          ))}
        </Box>
      </Fade>

      {/* MODAL (lightbox simple, sin Swiper) */}
      {open && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.95)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: { xs: 1, sm: 2 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: { xs: "100%", sm: "90%", md: "1000px" },
              mx: "auto",
            }}
          >
            {/* Cerrar */}
            <CloseIcon
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: { xs: 8, sm: 16 },
                right: { xs: 8, sm: 16 },
                fontSize: { xs: 24, sm: 30 },
                color: "#fff",
                cursor: "pointer",
                zIndex: 10000,
                "&:hover": { color: "#d1c4e9" },
              }}
            />

            {/* Flecha anterior */}
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: { xs: 8, sm: 16 },
                top: "50%",
                transform: "translateY(-50%)",
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.1)",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                zIndex: 10000,
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            {/* Flecha siguiente */}
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: { xs: 8, sm: 16 },
                top: "50%",
                transform: "translateY(-50%)",
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.1)",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                zIndex: 10000,
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>

            {/* Imagen central */}
            <Fade in={open} timeout={400}>
              <Box
                component="img"
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                sx={{
                  width: "100%",
                  maxWidth: { xs: "100%", sm: "90vw" },
                  maxHeight: { xs: "80vh", sm: "90vh" },
                  objectFit: "contain",
                  objectPosition: "center",
                  borderRadius: 2,
                  display: "block",
                  mx: "auto",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
                }}
              />
            </Fade>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Gallery;
