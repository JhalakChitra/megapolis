
import './App.css'
import SignIn from './pages/Accounts/SignIn'
import ForgotPassword from './pages/Accounts/ForgotPassword'
import ResetPassword from './components/Accounts/ResetPassword';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateOrganization from './pages/Accounts/CreateOrganization';
// import OrganizationDetails from './pages/Accounts/OrganizationDetails';
import EditOrganizationDetails from './pages/Accounts/EditOrganizationDetails';
import MyAccounts from './pages/Accounts/MyAccounts';
import Overview from './pages/Accounts/Overview';
import AccountsDashboard from './pages/Accounts/AccountsDashboard';
import MenuDashboard from './pages/MenuDashboard';
import OpportunitiesDashboard from './pages/Opportunities/OpportunitiesDashboard/OpportunitiesDashboard';


function App() {

  return (
  //  <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<SignIn />} />
  //       <Route path="/forgot-password" element={<ForgotPassword />} />
  //       <Route path='/reset-Password' element={<ResetPassword/>}/>
  //     </Routes>
  //   </BrowserRouter>
  <MyAccounts/>
  // <CreateOrganization/>
  // <EditOrganizationDetails/>
  // <ForgotPassword/>

  )
}

export default App;
