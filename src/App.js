import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Workplace from './components/layout/Workplace'

function App() {
  return (
    <BrowserRouter> 
      <Navbar />
      <Workplace/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
