import React, { useEffect, useState } from 'react';
import { Header } from '../../components';
import axios from 'axios';

const Bar = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  const [evaluation, setEvaluation] = useState([]);

  useEffect(() => {
    loadEvaluation();
  }, []);

  const loadEvaluation = async () => {
    try {
      const result = await axios.get("http://localhost:5454/api/evaluation/get/1");
      setEvaluation(result.data);
      console.log(result.data);
    } catch (error) {
      console.error('Error fetching evaluation data:', error);
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Overall Tech Score" />
      <style>
        {`
          .progress-bar-container {
            width: 100%;
            height: 30px; /* Increased height to accommodate text */
            background-color: #f2f2f2;
            border-radius: 4px;
            overflow: hidden;
            position: relative;
          }

          .progress-bar {
            height: 100%;
            background-color: #4caf50; /* Green color */
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #fff;
            padding: 0 10px;
            width: 100%;
            box-sizing: border-box;
          }
        `}
      </style>
      <div className="progress-bar-container">
        {evaluation.map((eva, index) => (
          <div
            key={index}
            className="progress-bar"
            style={{ width: `${eva.overallTechScore}%` }}
          >
            <span>{eva.overallTechScore}%</span>
            <span>Total: {100}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bar;
