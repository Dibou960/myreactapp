import React from 'react';
import swal from 'sweetalert2';

const AddEmployeeModal = ({ onAddEmployee }) => {

  return (
    <div>
      <button
        onClick={() => {
          swal.fire({
            title: 'Ajouter un Employé',
            html: `
              <form id="addEmployeeForm">
                <input id="name" type="text" class="swal2-input" placeholder="Nom" required>
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
              onAddEmployee({ name });
              swal.fire('Succès!', 'L\'employé a été ajouté.', 'success');
            }
          });
        }}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Ajouter Employé
      </button>
    </div>
  );
};

export default AddEmployeeModal;
