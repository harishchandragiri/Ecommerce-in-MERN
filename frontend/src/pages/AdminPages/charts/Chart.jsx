import React, { useState } from 'react'
import Chart from 'chart.js/auto';
import {Bar, Doughnut, Line, Pie } from 'react-chartjs-2';


function Charts() {
    
    const [data1, setData1] = useState([300, 50, 100, 800])
    const [data2, setData2] = useState([300, 50, 1000, 500])
    const [data3, setData3] = useState([65, 59, 80, 81, 56, 55, 120])
    const [data4, setData4] = useState([35, 29, 10, 21, 86, 25, 10])

    // data of doughnut chart
    const Doughnutdata = {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
          label: 'My First Dataset',
          data: data1,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(0, 128, 0)'
          ],
          hoverOffset: 4
        }]
      };
      
    //   data of Pie chart
      // const Piedata = {
      //   labels: ['Red', 'Blue', 'Yellow', 'Green'],
      //   datasets: [{
      //     label: 'My First Dataset',
      //     data: data2,
      //     backgroundColor: [
      //       'rgb(255, 99, 132)',
      //       'rgb(54, 162, 235)',
      //       'rgb(255, 205, 86)',
      //       'rgb(0, 128, 0)'
      //     ],
      //     hoverOffset: 4
      //   }]
      // };

    //   data of bar chart
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const Bardata = {
                labels: labels,
                datasets: [{
                label: 'First Dataset',
                data: data3,
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            },
            {
                label: 'Second Dataset',
                data: data4,
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            }
            ]
          };
      
    //   configuration of doughnut
      const config1 = {
        type: 'doughnut',
        data: Doughnutdata,
      };

    //   configuration of Pie chart
      // const config2 = {
      //   type: 'pie',
      //   data: Piedata,
      // };

    //   configuration of bar
    const config3 = {
        type: 'bar',
        data: Bardata,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
    };

  return (
    <div className='w-full flex flex-wrap justify-evenly m-2'>
        <div className=' py-7 border p-3 m-3 h-[300px] w-[350px] sm:h-[350px] sm:w-[350px]'>
            <h2>Doughnut Chart Example</h2>
            <Doughnut data={config1.data} />
        </div>

        <div className='overflow-x-auto py-4 border p-3 m-3 h-[250px] w-[350px] sm:h-[350px] sm:w-[500px]'>
          <div className=' min-w-full'>
             <h2>Bar Chart Example</h2>
             <Bar  data={config3.data} options={config3.options} />
          </div>
        </div>
            
        {/* <div className='py-7 border p-3 m-3 min-h-[300px] min-w-[250px] max-h-[450px] max-w-[400px] grow'>
            <h2>Pie Chart Example</h2>
            <Pie  data={config1.data} />
        </div> */}
  </div>
  )
}

export default Charts