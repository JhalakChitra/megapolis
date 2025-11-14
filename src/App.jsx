
import './App.css'
import SignIn from './pages/SignIn'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './components/ResetPassword';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateOrganization from './pages/CreateOrganization';
import OrganizationDetails from './pages/OrganizationDetails';
import EditOrganizationDetails from './pages/EditOrganizationDetails';
// import MyAccounts from './pages/Accounts/MyAccounts';
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
  // <OrganizationDetails/>
  // <CreateOrganization/>
  // <EditOrganizationDetails/>
  <MenuDashboard/>

  )
}

export default App;
