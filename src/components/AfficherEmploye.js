import React, { useState, useEffect } from 'react';
import { fetchEmployees } from '../services/api';

const AfficherEmploye = () => {
  const [, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
        console.log(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des employés:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
    <h2 className="text-xl font-bold mb-4">Liste des Employés</h2>
  
    <div className="grid grid-cols-5 gap-4">
      <div className="font-bold">Nom</div>
      <div className="font-bold">Age</div>
      <div className="font-bold">Département</div>
      <div className="font-bold">Salaire</div>
      <div className="font-bold">Adresse</div>
{/*   
      {employees.map(employee => (
        <React.Fragment key={employee._id}>
          <div>{employee.name}</div>
          <div>{employee.age}</div>
          <div>{employee.department}</div>
          <div>{employee.salary}</div>
          <div>{employee.address.city}, {employee.address.country}</div>
        </React.Fragment>
      ))} */}
    </div>
  </div>
  
  );
};

export default AfficherEmploye;
