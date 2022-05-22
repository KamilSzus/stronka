import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Pages/Home";
import SignUp from "./components/Pages/SignUp";
import Items from "./components/Pages/Items";
import Footer from "./components/Footer";
import Registration from "./components/Pages/Registration";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path='/Items' element={<Items/>}/>
                    <Route path='/Account' element={<SignUp/>}/>
                    <Route path='/About'/>
                    <Route path='/Registration' element={<Registration/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
