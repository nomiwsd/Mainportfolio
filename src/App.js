import { Navbar } from "./Components";
import { About, Footer, Header, Skills, Testimonials, Work } from "./Containers";
import './App.scss'
// import Brands from "./Containers/Brands/Brands";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      {/* <Brands/> */}
      <Footer />
    </div>
  );
}

export default App;
