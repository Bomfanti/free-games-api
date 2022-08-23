import * as React from 'react';
import ToggleColorMode from '../themes/toggleColorMode';
import Dashboard from '../components/Dashboard/Dashboard';


export default function App() {
  return (
    <ToggleColorMode>
      <Dashboard/>
    </ToggleColorMode>
  );
}