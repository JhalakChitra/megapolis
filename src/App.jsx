
import './App.css'
import SignIn from './pages/SignIn'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './components/ResetPassword';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateOrganization from './pages/CreateOrganization';
import OrganizationDetails from './pages/OrganizationDetails';
import EditOrganizationDetails from './pages/EditOrganizationDetails';
// import MyAccounts from './pages/Accounts/MyAccounts';
import AccountOverview from './pages/Accounts/AccountsOverview';

function App() {

  return (
  //  <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<SignIn />} />
  //       <Route path="/forgot-password" element={<ForgotPassword />} />
  //       <Route path='/reset-Password' element={<ResetPassword/>}/>
  //     </Routes>
  //   </BrowserRouter>
  // <OrganizationDetails/>
  // <CreateOrganization/>
  // <EditOrganizationDetails/>
  <AccountOverview/>

  )
}

export default App;
