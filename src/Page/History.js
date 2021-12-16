import React from 'react';
import { Line } from 'react-chartjs-2';

import axios from 'axios';
import { useState, useEffect } from 'react'

const baseURL = "/pyzmq_hist_test";



const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

function HistChart(){
    useEffect(()=>{
        const timer = setInterval(() => {
        axios.get(baseURL).then(response => {
            console.log(response.data)
        })
        //console.log("hello in timer "+AUDCAD);
        }, 300);
        return () => {
            clearInterval(timer)
            //console.log("useeffect clear")
        }
    }, []);
    return(
    <div style={{"height" : "450px", "width" : "75%"}} >
        <Line data={data} options={options} />
    </div>
    )
}

export default HistChart;