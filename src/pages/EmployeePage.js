import React, { useState } from 'react';
import AfficherEmploye from '../components/AfficherEmploye';

const EmployeePage = () => {
  const [employes] = useState([]);


  return (
    <div>
      <h1>Page des Employés</h1>
      <AfficherEmploye employes={employes} />
    </div>
  );
};

export default EmployeePage;
