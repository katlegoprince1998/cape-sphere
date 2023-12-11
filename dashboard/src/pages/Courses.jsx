import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, Progress, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Courses = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
      
        <div className="flex m-3 flex-wrap justify-center gap-3.5 items-center ">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-96 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-72  p-4 pt-9 rounded-2xl border border-gray-500">
              
          
            <div className="my-0">
            <Button
              color="white"
              bgColor={currentColor}
              text="Enroll"
              borderRadius="10px"
            />
          </div>
              <p className="mt-3 max-h-fit">
                <span className="text-lg font-semibold">{item.name}</span>
                {/* <span className="text-lg font-semibold">Intro To Java</span> */}
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.level}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.desc}</p>
              {/* <p className="text-sm text-gray-400  mt-1">Learn the basics of java</p> */}
            </div>
          ))}
        </div>
        
       
      </div>

     


      
    </div>
  );
};

export default Courses;
