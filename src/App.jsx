
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
   <BrowserRouter>
      <Routes>
         <Route path="/SignIn" element={<SignIn />} />
         <Route path="/forgot-password" element={<ForgotPassword />} />
         <Route path='/reset-Password' element={<ResetPassword/>}/>
         <Route path='/CreateOrganization' element={<CreateOrganization/>}/>
         <Route path='/EditOrganizationDetails' element={<EditOrganizationDetails/>}/>
       </Routes>
     </BrowserRouter>
  
  
  )
}

export default App;
