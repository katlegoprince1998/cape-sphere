import React, { useEffect, useState } from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';
import axios from 'axios';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Grades = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  const [grade, setGrade] = useState([]);
  useEffect(() => {
    loadGrade();
  }, []);

  const loadGrade = async () => {
    try {
      const result = await axios.get("http://localhost:5454/api/grade/get/grades/1");
      setGrade(result.data);
      console.log(result.data);
    } catch (error) {
      console.error('Error fetching grade data:', error);
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Grades" />
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
            <th>Course</th>
            <th>Course Level</th>
            <th>Cand Score %</th>
            <th>Total %</th>
            <th>Date</th>
           
          </tr>
        </thead>
        <tbody>
          {grade.map((grd, index) => (
            <tr key={index}>
              <td>{grd.subject.name}</td>
              <td>{grd.subject.level}</td>
              <td>{grd.score}</td>
              <td>{grd.total}</td>
              <td>{grd.dayGraded}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Grades;
