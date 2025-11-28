
import './App.css'
import SignIn from './pages/Accounts/SignIn'
import ForgotPassword from './pages/Accounts/ForgotPassword'
import ResetPasswordPage from './pages/Accounts/ResetPasswordPage';
import ResetPassword from './components/Accounts/ResetPasswordModal';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateOrganization from './pages/Accounts/CreateOrganization';
// import OrganizationDetails from './pages/Accounts/OrganizationDetails';
import EditOrganizationDetails from './pages/Accounts/EditOrganizationDetails';
import MyAccounts from './pages/Accounts/MyAccounts';
import Overview from './pages/Accounts/Overview';
import AccountsDashboard from './pages/Accounts/AccountsDashboard';
import MenuDashboard from './pages/MenuDashboard';
import OpportunitiesDashboard from './pages/Opportunities/OpportunitiesDashboard/OpportunitiesDashboard';
import OrganizationDetails from './pages/Accounts/OrganizationDetails';
import SignUp from './pages/Accounts/SignUp';


function App() {

  return (
   <BrowserRouter>
      <Routes>

           {/* DEFAULT ROUTE */}
        <Route path="/" element={<SignIn />} />



                   {/* ACCOUNT ROUTES */}

         <Route path="/SignIn" element={<SignIn />} />
         <Route path="/SignUp" element={<SignUp />} />
         <Route path="/forgot-password" element={<ForgotPassword />} />
         <Route path="/reset-password" element={<ResetPasswordPage />} />
         <Route path='/CreateOrganization' element={<CreateOrganization/>}/>
         <Route path='/OrganizationDetails' element={<OrganizationDetails/>}/>
         <Route path='/EditOrganizationDetails' element={<EditOrganizationDetails/>}/>
       </Routes>
     </BrowserRouter>
  
  
  )
}

export default App;
