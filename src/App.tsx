import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import Home from "./pages/Home";
import Welcome from "@/pages/Welcome";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </ThemeProvider>
  );
}
