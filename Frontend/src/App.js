import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePages from './Components/HomePages';
import Developers from './Components/Developers';
import Scholarship from './Components/Scholarship';
import ContactUs from './Components/ContactUs';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm'
// import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />}> </Route>
        <Route path='/developers' element={<Developers />}></Route>
        <Route path="/scholarship" element={<Scholarship />}></Route>
        <Route path='/contact-us' element={<ContactUs />}></Route>
        <Route path='/login' element={<LoginForm></LoginForm>}></Route>
        <Route path='/register' element={<RegisterForm></RegisterForm>}></Route>
        <Route path='/user' element={<HomePages/>}></Route>
        {/* <PrivateRoute path='/login' element={<LoginForm></LoginForm>}></PrivateRoute> */}
      </Routes>
    </Router>
  );
}

export default App;




        // <Route path="/" element={<><Navbar /><HomePages /></>} />
        // <Route path='/developers' element={<><Navbar /><Developers /></>}></Route>
        // <Route path="/scholarship" element={<><Navbar /><Scholarship /></>}></Route>
        // <Route path='/contact-us' element={<><Navbar /><ContactUs /></>}></Route>
        // <Route path='/login' element={<LoginForm></LoginForm>}></Route>
        // <Route path='/register' element={<RegisterForm></RegisterForm>}></Route>