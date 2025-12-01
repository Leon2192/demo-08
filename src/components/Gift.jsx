import {
  Box,
  Typography,
  Modal,
  Fade,
  Backdrop,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import ButtonLinks from "./ButtonLinks/ButtonLInks";

const Gift = () => {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: 'url("/images/bg3.gif")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Fade in={inView} timeout={1000}>
        <Box
          sx={{
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "transform 0.8s ease",
          }}
        >
          {/* Imagen de regalo en lugar del ícono */}
          <Box
            component="img"
            src="/images/regalo.gif"
            alt="Regalo"
            sx={{
              width: { xs: 80, md: 110 },
              height: "auto",
              mb: 1,
            }}
          />

          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Catchy'",
              fontSize: { xs: "1.2rem", md: "2rem" },
              color: "#D096FF",
                fontWeight: 600,
              maxWidth: 600,
              mb: 4,
            }}
          >
            Mi mejor regalo es tu asistencia
            <br />
            Pero si querés ayudarme con el regalito...
          </Typography>

          <ButtonLinks onClick={handleOpen} label="Ver datos Bancarios" newTab />
        </Box>
      </Fade>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#fdfaff",
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
              maxWidth: 600,
              width: "90%",
              textAlign: "center",
            }}
          >
            {/* Botón cerrar */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "#666",
                "&:hover": {
                  color: "#9a64ea",
                  backgroundColor: "transparent",
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Imagen de regalo también en el modal */}
            <Box
              component="img"
              src="/images/regalo.gif"
              alt="Regalo"
              sx={{
                width: { xs: 80, md: 110 },
                height: "auto",
                mb: 1,
              }}
            />

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontFamily: "'Eyesome'",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                color: "#D096FF",
                mb: 1,
              }}
            >
              Datos Bancarios
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontFamily: "'Catchy'",
                fontSize: { xs: "1.3rem", md: "1.5rem" },
                color: "#D096FF",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Alias: ludmila1914
              <br />
              Titular: Ludmila Viviana Rodriguez
              <br />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Gift;
