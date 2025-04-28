import React from 'react';
import ClienteForm from './components/ClienteForm';
import ClienteList from './components/ClienteList';

function App() {
  return (
    <div className="container">
      <h1>CRUD Clientes</h1>
      <ClienteForm />
      <ClienteList />
    </div>
  );
}

export default App;

