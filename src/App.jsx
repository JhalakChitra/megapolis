
import './App.css'
import SignIn from './pages/SignIn'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './components/ResetPassword';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateOrganization from './pages/CreateOrganization';


function App() {

  return (
  //  <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<SignIn />} />
  //       <Route path="/forgot-password" element={<ForgotPassword />} />
  //       <Route path='/reset-Password' element={<ResetPassword/>}/>
  //     </Routes>
  //   </BrowserRouter>
  <CreateOrganization/>

  )
}

export default App
