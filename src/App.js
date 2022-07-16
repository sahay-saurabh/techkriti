import './App.css'
import Navbar from './Componenets/Navbar'
import Footer from './Componenets/Footer'
import Card from './Componenets/Card'
import Header from './Componenets/Header'
function App() {
  const styel={
    // backgroundImage:"url('bg.jpeg')"
  }
  return (
    <div style={styel} className="App">
     <Navbar/>
     <Header/>
     <Card/>
     <Footer/>
    </div>
  );
}

export default App;
