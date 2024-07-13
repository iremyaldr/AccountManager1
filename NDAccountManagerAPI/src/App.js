import React from 'react';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, MsalProvider } from '@azure/msal-react';
import { loginRequest } from './authConfig';
import HomePage from './HomePage';
import AccountManagementPage from './AccountManagementPage';
import SettingsPage from './SettingsPage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'; // Make sure to import your CSS file
import {store } from "./actions/store";
import {Provider} from "react-redux";
import accountInfo from './components/accountInfo';
import {Container} from "@mui/icons-material";


const WrappedView = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const handleRedirect = () => {
    instance
      .loginRedirect({
        ...loginRequest,
        prompt: 'select_account',
      })
      .catch((error) => console.log(error));
  };

  if (!activeAccount) {
    return (
      <UnauthenticatedTemplate>
        <div className="login-container">
          <h1>ND Account Manager</h1>
          <p className="description">
            Hesaplarınızı yönetmeye hemen başlayın. Kişisel ve paylaşılan hesap bilgilerini görüntüleyebilir, düzenleyebilir ve paylaşabilirsiniz.
          </p>
          <button className="login-button" onClick={handleRedirect}>
            Sign in with Microsoft
          </button>
        </div>
      </UnauthenticatedTemplate>
    );
  }

  return (
    <AuthenticatedTemplate>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/account-management" element={<AccountManagementPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </AuthenticatedTemplate>
  );
};

const App = ({ instance }) => {
  return (
    <MsalProvider instance={instance}>
      <WrappedView />
    </MsalProvider>
  );
};

export default App;
