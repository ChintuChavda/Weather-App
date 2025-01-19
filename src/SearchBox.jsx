import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  // API configuration
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "f5004ed45813ade76ea32ef8d2856b26";

  const getWeatherInfo = async () => {
    try {
      let res = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let data = await res.json();
      console.log(data)

      if (data.cod !== 200) {
        throw new Error("City not found");
      }

      const result = {
        city: city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description,
      };

      return result;
    } catch (err) {
      setError(true);
      console.error("Error fetching weather data:", err);
      throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    setCity("");

    try {
      const info = await getWeatherInfo();
      updateInfo(info);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: "2rem", md: "2rem" },
        // borderRadius: 3,
        // boxShadow: 6,
        // backgroundColor: "rgba(255, 255, 255, 0.85)", // Transparent background
        // backdropFilter: "blur(10px)", // Blurred background
        width: { xs: "80%", sm: "70%", md: "60%" },
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row", // Ensure both elements are always on the same line
          alignItems: "center",
          width: "100%",
          // marginBottom: 3,
          gap: 2, // Space between input and button
        }}
      >
        <TextField
          id="city"
          label="Enter Location"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
          InputLabelProps={{
            style: { color: city.length > 0 ? "black" : "black" }, // Hide label when there's a value
          }}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "120px",
            flexGrow: 1,
            input: {
              color: "black", // Change input text color to black
            },
            "& .MuiInputLabel-root": {
              color: "rgba(0, 0, 0, 1)", // Change label text color to black
            },
            "& .MuiInputBase-root": {
              borderRadius: "120px",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(0, 0, 0, 0.7)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(0, 0, 0, 0.7)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "black", // Set the border color when focused to black
              },
            },
          }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Transparent black
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 1)", // Slightly darker transparent black on hover
            },

            borderRadius: "120px",
            padding: "1rem 1.5rem",
            textTransform: "none",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
            // minWidth: "120px", // Make the button wider for clarity
            minwidth: { xs: "90px", md: "120px" },
          }}
        >
          Search
        </Button>
      </Box>
      {error && (
        <Typography
        variant="body2"
        color="error"
        sx={{
          marginTop: 2,
          padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 24px' }, // Responsive padding
          backgroundColor: 'rgba(255, 0, 0, 0.4)', // Light red background
          borderRadius: 10, // Rounded corners
          color: 'white',
          textAlign: 'center', // Center-align text
          fontWeight: 'bold', // Bold text
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Slight shadow for depth
          fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' }, // Responsive font size
        }}
      >
        Oops! We couldn't find that location. Please check the name and try again.
      </Typography>
      )}
    </Box>
  );
}
