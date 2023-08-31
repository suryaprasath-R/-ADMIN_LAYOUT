import React from "react";
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
// import { PieChart, Pie, Legend,Cell,Tooltip, ResponsiveContainer} from "recharts";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement
);





export function Charts() {

 
  
  return (
    <div className="container-fluid">
<div>
      <div>
      <h1 className="h3 mb-2 text-gray-800 dashboard">Charts</h1>
      </div>

      <p className="mb-4 mt- text-gray ms-3">
        Chart.js is a third party plugin that is used to generate the charts in
        this theme. The charts below have been customized - for further
        customization options, please visit the{" "}
         <a  className="text-decoration-none" target="_blank" href="https://www.chartjs.org/docs/latest/">
          official Chart.js documentation
        </a> 
        
      </p>
      </div>
    <div className="row">
       <div className="col-lg-8 col-md-6 col-sm-12">
       <div className="card shadow mb-4">
          <div className="card-header incard py-3">
              <h6 className="m-0 font-weight-bold text-primary">
               Area Chart
              </h6>
            </div>
            <div className="card-body incard-body ">
            <Areachart/>
            </div>
            <div className="card-footer">Styling for the area chart can be found in the <code>/js/demo/chart-area-demo.js</code>file.</div>
          </div>
    </div>
       <div className="col-lg-4 col-md-6 col-sm-12">
       <div className="card shadow mb-4">
          <div className="card-header incard py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Donut Chart
              </h6>
            </div>
            <div class="card-body incard-body ">
            <Piechart/> 
            </div>

            <div className="card-footer">Styling for the Donut can be found in the <code>/js/demo/chart-pie-demo.js</code>file.</div>
          </div>
      
      </div>  

    </div>
      
     

    </div>
  );
}



export function Piechart(){

  const data = {
    labels: ['Social','Referral','Direct'],
    datasets: [
      {
        label: '# of Votes',
        data: [15,55,30],
        backgroundColor: [
          '#1cc98a', 
          '#4e73de', 
          '#36b9cd',
        ],
         borderColor: [
         
          '#1cc98a', 
          '#4e73de', 
          '#36b9cd',
        ],
        borderWidth: 1,
        radius : 100,
        outerRadius : 150,
      },
    ],
  };
  
  
  return(
    <div>
    
    <Doughnut data={data} width={300} height={300} />
    </div>
  )
 }







export function Areachart() {
   const options = {
    responsive: true,
    plugins: {
     
    }
  };
  
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov"
  ];
  
   const data = {
    labels,
    datasets: [
      {
        label: "Earnings",
        data: [
          0,
          10000,
          5000,
          20000,
          15000,
          30000,
          25000,
          40000,
          35000,
          50000,
          45000,
          60000
        ],
        borderColor: "#4e73de",
        backgroundColor: "#f7f8fd",
        pointBackgroundColor: "#4e73de",
        tension: 0.3
      }
    ]
  };


  return <Line options={options} data={data} />;
}









// data: [4215, 5312, 6251, 7841, 9821, 14984],

// labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],





// // import React from "react";
// import ReactDOM from "react-dom";
// import { BarChart } from "@carbon/charts-react";

// import "./styles.css";

// const colors = [
//   "#3c6df0",
//   "#3c6df0",
//   "#3c6df0",
//   "#3c6df0",
//   "#3c6df0",
//   "#3c6df0"
// ];

// const simpleBarData = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       label: "Dataset 1",
//       backgroundColors: colors,
//       data: [4215, 5312, 6251, 7841, 9821, 14984]
//     }
//   ]
// };

// const simpleBarOptions = {
//   accessibility: false,
//   scales: {
//     x: {
//       title: "Bar Chart"
//     },
//     y: {
//       formatter: (axisValue) => `$${axisValue / 1}`,
//       yMaxAdjuster: (yMaxValue) => yMaxValue * 1.1,
//       stacked: false
//     }
//   },
//   legendClickable: true,
//   containerResizable: true
// };

// function App() {
//   return (
//     <div className="App">
//       {/* <h2>Carbon Charts - React</h2> */}
//       <div>
//         <BarChart data={simpleBarData} options={simpleBarOptions} />
//       </div>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);




//....
