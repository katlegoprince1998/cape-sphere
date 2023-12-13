import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../../components';


const Line = () => {
  const [mentor, setMentor] = useState([]);

  useEffect(() => {
    loadMentor();
  }, []);

  const loadMentor = async () => {
    try {
      const result = await axios.get("http://localhost:5454/api/grade/get/grades/1");
      setGrade(result.data);
      console.log(result.data);
    } catch (error) {
      console.error('Error fetching mentor data:', error);
    }
  };

  const getChartData = () => {
    const mentor = mentor.map((mnt) => grd.subject.name);
    const scores = grade.map((grd) => grd.score);

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
      <Header category="Page" title="Grades" />
      <div style={{ height: '400px', width: '80%', margin: 'auto' }}>
        <Bar
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
