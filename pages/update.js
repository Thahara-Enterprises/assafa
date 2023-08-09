import React, { useState, useEffect } from 'react';

export default function UpdateValueComponent({
  preUpdatedValue,
  breakfast,
  dinner,
}) {
  const [updatedValue, setUpdatedValue] = useState('');

  const handleUpdate = async () => {
    const response = await fetch('/api/update', {
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
      {breakfast} - {dinner}
      <div>
        <p>Pre-updated Value: {preUpdatedValue}</p>
        <input
          type="text"
          value={updatedValue}
          onChange={(e) => setUpdatedValue(e.target.value)}
          placeholder="value you want to update"
        />
        <button onClick={handleUpdate}>Update Value</button>
      </div>
    </>
  );
}
export async function getStaticProps() {
    const response = await fetch(`${process.env.PUBLIC_URL || assafa.vercel.app}/api/update`);
    const jsonData = await response.json();

    const breakfast = jsonData.breakfast;
    const dinner = jsonData.dinner;

    return {
      props: {
        breakfast,
        dinner,
      },
    };

}
