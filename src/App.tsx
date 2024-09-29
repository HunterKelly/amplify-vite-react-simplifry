import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import Login from "./Login";
import PreLoginNav from "./Navigation/PreLoginNav.jsx";
import WeatherDisplay from "./Weather/weather";
import WinterMix from "./Mixes/WinterMix.jsx";
import SummerMix from "./Mixes/SummerMix.jsx";
import CustomMix from "./Mixes/CustomMix.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/wintermix" element={<WinterMix />} />
        <Route path="/summermix" element={<SummerMix />} />
        <Route path="/custommix" element={<CustomMix />} />
      </Routes>
    </Router>
  );
}

function HomeScreen() {
  return (
    <>
      <div>
        <PreLoginNav />
      </div>
      <div>
        <h1>Welcome to Simplifry!</h1>
      </div>
      <div>
        <h3>Check the weather before you go!</h3>
        <WeatherDisplay />
      </div>
    </>
  );
}

export default App;
