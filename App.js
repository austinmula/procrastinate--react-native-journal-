import React from 'react';

import {AuthProvider} from './src/context/AuthContext';
import AppNavigation from './AppNavigation';

function App() {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}

export default App;
