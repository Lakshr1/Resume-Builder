
import './App.css';
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen'
import ResumeEditScreen from './screens/ResumeEditScreen';







function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<LoginScreen/>} />
          <Route path="/" exact element={<HomeScreen/>} />
          <Route path='/resume' exact element={<ResumeEditScreen />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
