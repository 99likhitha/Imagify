import React, { useContext } from 'react'
import {Routes,Route} from 'react-router-dom'
import  Home  from './pages/Home.jsx';
import  Result  from './pages/Result.jsx';
import  Buycredit  from './pages/Buycredit.jsx';
import  Navbar  from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import { Appcontext } from './context/AppContext.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const {showLogin}=useContext(Appcontext)

  return (
    <div className='px=4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
     {showLogin && <Login/> }
     { console.log("show login in APP",showLogin)}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='result' element={<Result/>}/>
        <Route path='buycredit' element={<Buycredit/>}/>
      </Routes>
      <Footer/>
      

    </div>
  )
}
export default App;