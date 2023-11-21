import './App.css';
import Navbar from './components/Nav.js';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Highlights from './components/Highlights.js';






function App() {
  return (
    <>
      <main>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <About/>
      <Footer/>
      </main>
      </>
  );
}

export default App;


// npm uninstall @chakra-ui/react
// npm install @chakra-ui/react



// npm i --save @fortawesome/fontawesome-svg-core

// # Free icons styles
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons

// npm i --save @fortawesome/react-fontawesome@latest

// npm install formik --save

// npm install --save yup