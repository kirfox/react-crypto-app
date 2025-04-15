import React from 'react';
import { CryptoContextProvider } from './context/crypto-context';
import AppLayout from './components/AppLayout';


export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout></AppLayout>
    </CryptoContextProvider>
    
  )
}
