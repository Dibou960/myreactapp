import ENVIRONMENT from '../environments/environment.prod';

const BASE_URL = ENVIRONMENT.BASE_URL;

export const fetchEmployees = async () => {
  try {
    const response = await fetch(`${BASE_URL}/employees`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export default fetchEmployees;
