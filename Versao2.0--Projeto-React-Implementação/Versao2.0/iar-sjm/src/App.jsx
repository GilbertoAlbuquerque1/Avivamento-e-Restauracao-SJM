import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

import About from './components/About/About';
import Events from './components/Events/Events';
import Sermons from './components/Sermons/Sermos';
import Help from './components/Help/Help';
import News from './components/News/News';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About/>
      <Events/>
      <Sermons/>
      <Help/>
      <News/>
      <Footer/>

    </div>
  )
}