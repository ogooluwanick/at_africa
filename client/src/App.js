import './App.scss';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import LandingPage from './pages/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
        <Router>
                <div className="App">
                        <NavBar/>

                        <main >
                                <Routes>
                                        <Route path='/' element={ <LandingPage/>} exact/> 
                                
                                        {/* <Route path='/products/:id' element={ <ProductPage/>}/> 

                                        <Route path='/page/:pageNumber' element={ <Home/>} /> 
                                        <Route path="*"  element={<ErrorPage/>}/> 
                                        */}
                                </Routes>
                        </main>

                        {/* <Footer/> */}
                </div>
        </Router>
  );
}

export default App;
