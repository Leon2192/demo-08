import { Box, Typography, Grid, Slide, Fade } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// 🕒 Nueva fecha del evento: 20/12/2025 a las 20:30 hs
const targetDate = new Date("2025-12-20T20:30:00");

const getTimeLeft = () => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  const totalSeconds = Math.max(0, Math.floor(difference / 1000));
  const dias = Math.floor(totalSeconds / (3600 * 24));
  const horas = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutos = Math.floor((totalSeconds % 3600) / 60);
  const segundos = totalSeconds % 60;

  return { dias, horas, minutos, segundos };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const unidades = Object.entries(timeLeft);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      id="info"
      sx={{
        minHeight: "45vh",
        py: 8,
        px: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: 'url("/images/fondo4.gif")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
       
      }}
    >
      <Slide in={inView} direction="up" timeout={800}>
        <Box>
          <AccessTimeIcon
            sx={{
              fontSize: { xs: 40, md: 56 },
              color: "#000000",
              mb: 1,
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "3.2rem", md: "4rem" },
              fontFamily: "'Eyesome'",
              fontWeight: 500,
              mb: 1,
              color: "#000000",
            }}
          >
            Faltan...
          </Typography>
        </Box>
      </Slide>

      <Fade in={inView} timeout={1200}>
        <Grid container spacing={4} justifyContent="center">
          {unidades.map(([unit, value]) => (
            <Grid item key={unit}>
              <Box textAlign="center">
                <Typography
                  sx={{
                    fontSize: { xs: "2rem", md: "4rem" },
                    fontWeight: "bold",
                    color: "#000000",
                    fontFamily: "'Quicksand'",
                  }}
                >
                  {String(value).padStart(2, "0")}
                </Typography>
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    fontFamily: "'Quicksand'",
                    color: "#000000",
                  }}
                >
                  {unit}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Fade>
    </Box>
  );
};

export default Countdown;
