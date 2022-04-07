import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from "./pages/Register"
import Header1 from "./components/Header_level1"
import Profile from './pages/Profile';
import MyNavBar from './components/MyNavBar';
import ErrorPage from './pages/ErrorPage';
function App() {
  return (
    <>
      
        <Routes>
        
        <Route exact path="/" element={<Home/>} />
        <Route exact path='/login' element={<LogIn/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/profile' element={<Profile/>}/> 
        <Route path="*" element={<ErrorPage/>}/>

        {/* <Route exact path="/addStory" component={addStory} />
        <Route exact path="/addTask" component={AddTask} /> */}
       </Routes>
     
    </>
  );
}

export default App;
