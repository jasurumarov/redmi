import './App.css';
import Explore from './components/exploreSection/Explore';
import Footer from './components/footer/Footer';
import Hero from './components/heroSection/Hero';
import Navbar from './components/navbar/Navbar';
import Products from './components/productsSection/Products';
import Support from './components/supportSection/Support';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Products/>
      <Explore/>
      <Support/>
      <Footer/>
    </div>
  );
}

export default App;
