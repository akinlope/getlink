import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage";



function App() {
  return (
    <div className=" bg-dark">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
