import React, { useEffect, useState } from 'react';
import { Header } from '../components';
import axios from 'axios';

const Evaluation = () => {
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
      <Header category="Page" title="Evaluation" />
      <style>
        {`
          .table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px; /* Adjust as needed */
          }

          .table th, .table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }

          .table th {
            background-color: #f2f2f2;
          }

          /* Add more styles as needed */
        `}
      </style>
      <table className="table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Risk</th>
            <th>Placement Ready</th>
            <th>Overall Tech Score</th>
            <th>Recommendation</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {evaluation.map((eva, index) => (
            <tr key={index}>
              <td>{eva.status}</td>
              <td>{eva.risk}</td>
              <td>{eva.placement_ready}</td>
              <td>{eva.overallTechScore}</td>
              <td>{eva.recommendation}</td>
              <td>{eva.lastUpdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Evaluation;
