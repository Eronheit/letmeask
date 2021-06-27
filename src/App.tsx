import React from 'react';
import Routes from './routes';

import { AuthContextProvider } from './contexts/AuthContext';

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
};

export default App;
