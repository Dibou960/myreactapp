import React from 'react';
import swal from 'sweetalert2';

const EmployeeList = ({ employees, onDeleteEmployee, onUpdateEmployee }) => {
  const handleUpdateEmployee = (employee) => {
    swal.fire({
      title: 'Modifier Employé',
      html: `
        <form id="updateEmployeeForm">
          <input id="name" type="text" class="swal2-input" placeholder="Nom" value="${employee.name}" required>
        </form>
      `,
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById('name').value;
        return { name };
      }
    }).then(result => {
      if (result.isConfirmed) {
        const { name } = result.value;
        onUpdateEmployee(employee.id, name);
        swal.fire('Succès!', 'L\'employé a été modifié.', 'success');
      }
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Liste des Employés</h1>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            {/* <th className="border border-gray-200 px-4 py-2">ID</th> */}
            <th className="border border-gray-200 px-4 py-2">Nom</th>
            <th className="border border-gray-200 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              {/* <td className="border border-gray-200 px-4 py-2">{employee.id}</td> */}
              <td className="border border-gray-200 px-4 py-2">{employee.name}</td>
              <td className="border border-gray-200 px-4 py-2">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => onDeleteEmployee(employee.id)}
                >
                  Supprimer
                </button>

                <button
                  className="bg-yellow-500 ml-2 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleUpdateEmployee(employee)}
                >
                  Modifier
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
