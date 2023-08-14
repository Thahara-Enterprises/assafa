import React, { useState, useEffect } from 'react';
import Container from '../components/container';
import { apiUrl } from '../config';

const baseUrl = `${apiUrl}`;
export default function UpdateValueComponent() {
  const [updatedValue, setUpdatedValue] = useState('');

  const handleUpdate = async () => {
    const response = await fetch(`http://localhost.com/api/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ updatedValue }),
    });

    const dta = await response.json();
    if (dta.success) {
      console.log('updated successfully');
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={updatedValue}
          onChange={(e) => setUpdatedValue(e.target.value)}
          placeholder="value you want to update"
        />
        <button onClick={handleUpdate}>Update Value</button>
      </div>
      <Container className={`flex w-full flex-col mt-4 max-w-2xl`}>
        <form
          onSubmit={handleUpdate}
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
              value={updatedValue}
              onChange={(e) => setUpdatedValue(e.target.value)}
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
    </>
  );
}
