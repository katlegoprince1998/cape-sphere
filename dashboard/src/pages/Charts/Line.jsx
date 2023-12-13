import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2'; // Import Line from react-chartjs-2

const Line = () => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    loadGrades();
  }, []);

  const loadGrades = async () => {
    try {
      const result = await axios.get('http://localhost:5454/api/grade/get/grades/1');
      setGrades(result.data);
      console.log(result.data);
    } catch (error) {
      console.error('Error fetching grades data:', error);
    }
  };

  const getChartData = () => {
    const subjectNames = grades.map((grade) => grade.subject.name);
    const scores = grades.map((grade) => grade.score);

    return {
      labels: subjectNames,
      datasets: [
        {
          label: 'Cand Score %',
          data: scores,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/* Render Header component */}
      <div style={{ height: '400px', width: '80%', margin: 'auto' }}>
        <Line
          data={getChartData()}
          options={{
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Subjects',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Cand Score %',
                },
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Line;
