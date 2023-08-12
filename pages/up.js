import React, { useState, useEffect } from 'react';
import Container from '../components/container';
import { apiUrl } from '../config';

const baseUrl = `${apiUrl}`;
function UpdateMenu() {
  const [menuData, setMenuData] = useState('');

  useEffect(() => {
    // Load data from data.json
    fetch(`/data.json`)
      .then((response) => response.json())
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  const updateMenuData = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ menuData }),
      });

      if (response.ok) {
        console.log('Menu data updated successfully');
      } else {
        console.error('Failed to update menu data');
      }
    } catch (error) {
      console.error('Error updating menu data:', error);
    }
  };

  return (
    <div>
      <Container className={`flex w-full flex-col mt-4 max-w-2xl`}>
        <form
          onSubmit={updateMenuData}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            <label
              htmlFor="dinner"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Dinner:
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="dinner"
              name="dinner"
              placeholder="Enter dinner menu"
              value={menuData.dinner}
              onChange={(e) => setMenuData(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Dinner
          </button>
        </form>
      </Container>
    </div>
  );
}

export default UpdateMenu;
