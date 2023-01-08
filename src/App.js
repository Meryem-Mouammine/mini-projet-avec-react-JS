import './App.css'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
// import Container from './components/Container/Container' 
// import {Header, Footer ,Container,.....} from './components/index'

import {Container} from './components/index'
import {Header,Footer} from './sections/index'
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import {Home,Profile } from './Pages/index'
const App =() =>{
    return(
        <>
 <Router>
        <Header  />
        <Container>
             <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/profile' element={<Profile/>}/>
             </Routes>
        </Container>
         <Footer /> 
  </Router>
        </>
    )
}
export default App;