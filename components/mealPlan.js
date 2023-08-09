import React from 'react';
import Container from './container';

export default function MealPlan({ id, breakfast, lunch, dinner }) {
  return (
    <Container className={`flex w-full flex-col mt-4 max-w-2xl`}>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Breakfast</th>
            <th className="border border-gray-300 p-2">Lunch</th>
            <th className="border border-gray-300 p-2">Dinner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">{id}</td>
            <td className="border border-gray-300 p-2">{breakfast}</td>
            <td className="border border-gray-300 p-2">{lunch}</td>
            <td className="border border-gray-300 p-2">{dinner}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
export async function getStaticProps() {
  try {
    const response = await fetch(`${process.env.PUBLIC_URL || assafa.vercel.app}/api/update`);
    const jsonData = await response.json();

    const id = jsonData.id;
    const breakfast = jsonData.breakfast;
    const dinner = jsonData.dinner;
    const lunch = jsonData.lunch;

    return {
      props: {
        id,
        breakfast,
        lunch,
        dinner,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        breakfast: '',
        dinner: '',
      },
    };
  }
}
