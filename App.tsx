import React from 'react';
import {AuthProvider} from './src/context/AuthContext';
import {Navigation} from './src/navigation';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

export default App;
