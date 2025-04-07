import React from 'react';
import { Routes } from './routes';
import MainLayout from './components/Layout/MainLayout';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Routes />
    </MainLayout>
  );
};

export default App;