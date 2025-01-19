import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
// Icons
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import {
  WiThermometer,
  WiRaindrop,
  WiHumidity,
  WiSunset,
} from "react-icons/wi";
import Footer from "./Footer";

export default function InfoBox({ info }) {
  const hot_img = "hot.jpg";
  const cold_img = "cold.jpg";
  const rain_img = "rain.jpg";

  const hot_icon = <WbSunnyIcon fontSize="large" sx={{ color: "#FFA726" }} />;
  const cold_icon = <AcUnitIcon fontSize="large" sx={{ color: "#4FC3F7" }} />;
  const rain_icon = (
    <ThunderstormIcon fontSize="large" sx={{ color: "#29B6F6" }} />
  );

  const getWeatherImage = () => {
    if (info.humidity > 80) return rain_img;
    if (info.temp > 15) return hot_img;
    return cold_img;
  };

  const getWeatherIcon = () => {
    if (info.humidity > 80) return rain_icon;
    if (info.temp > 15) return hot_icon;
    return cold_icon;
  };

  return (
    <>
      <Box
        sx={{
          minHeight: { xs: "70vh", sm: "80vh", md: "70vh" },
          maxHeight: "90vh",
          width: { xs: "90%", sm: "80%", md: "1000px" },
          display: "flex",
          alignItems: "center", // Centers content vertically
          justifyContent: "center", // Centers content horizontally
          textAlign: "center",
          backgroundImage: `url(${getWeatherImage()})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          borderRadius: 10,
          margin: "0 auto", // Center the box horizontally
          padding: "0", // Optional padding adjustment
          border: "5px solid rgba(0, 0, 0, 0.5)", // Adds a light border (adjust color as needed)
          //   boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)", // Adds a shadow for depth
        }}
      >
        <Box
          sx={{
            maxWidth: "100%",
            width: { xs: "65%", sm: "70%", md: "60%" }, // Responsive width for different screen sizes
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Slightly darker transparent overlay for better readability
            padding: { xs: 3, sm: 4, md: 6 }, // Adjust padding for responsiveness
            borderRadius: 4, // Slightly larger border radius for a modern look
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Enhanced shadow for depth
            margin: "auto", // Center the content horizontally
            textAlign: "center", // Center-align the text
          }}
        >
          {/* <Typography variant="h3" fontWeight="bold" gutterBottom>
            {info.city}
          </Typography> */}
          <Typography
      variant="h3"
      fontWeight="bold"
      gutterBottom
      sx={{
        overflow: "hidden", // Prevent overflow of the city name
        textOverflow: "ellipsis", // Add ellipsis if the city name is too long
        whiteSpace: "nowrap", // Ensure city name stays on one line
        maxWidth: "100%", // Ensure city name doesn't stretch outside its container
        fontSize: { xs: "2.4rem", sm: "2rem", md: "3rem" }, // Responsive font size
      }}
    >
      {info.city}
    </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
            }}
          >
            {getWeatherIcon()}
          </Box>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
            {info.temp}&deg;C
          </Typography>

          <Grid container spacing={2}>
            {/* Temperature Min */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  mb: 1,
                }}
              >
                <WiThermometer style={{ marginRight: 8 }} />
                <strong>Min Temp:</strong>&nbsp;{ info.tempMin}&deg;C
              </Typography>
            </Grid>

            {/* Temperature Max */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  mb: 1,
                }}
              >
                <WiThermometer style={{ marginRight: 8 }} />
                <strong>Max Temp: </strong> &nbsp;{info.tempMax}&deg;C
              </Typography>
            </Grid>

            {/* Humidity */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  mb: 1,
                }}
              >
                <WiHumidity style={{ marginRight: 8 }} />
                <strong>Humidity:</strong> &nbsp;{info.humidity}%
              </Typography>
            </Grid>

            {/* Weather Description */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  mb: 1,
                }}
              >
                <WiRaindrop style={{ marginRight: 8 }} />
                <strong>Description:</strong>&nbsp; {info.weather}
              </Typography>
            </Grid>

            {/* Feels Like */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  mb: 1,
                }}
              >
                <WiSunset style={{ marginRight: 8 }} />
                <strong>Feels Like:</strong> &nbsp;{info.feelsLike}&deg;C
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
