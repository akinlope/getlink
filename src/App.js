import Navbar from "./components/Navbar/Navbar";
import ContactPage from "./pages/ContactPage";
import LandingPage from "./pages/LandingPage";



function App() {
  return (
    <div className=" bg-dark">
      <Navbar />
      {/* <LandingPage /> */}
      <ContactPage />
    </div>
  );
}

export default App;
