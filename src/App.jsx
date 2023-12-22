import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavTabs from './components/navTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/footer';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <NavTabs />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Contact' element={<Contact />} /> 
          <Route path='/Resume' element={<Resume />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
