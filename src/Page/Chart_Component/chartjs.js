import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import loading from '../../Img/loading.gif'

function LineChart(probs){
  /****************variable */
  /****1. null handler */
  if(probs.data === null)//รอก่อนน้า
  {
    console.log("probs.value = null")
    return <img src={loading} alt="Logo" />;
  }
  /****               */
  /*****1.2 undefine handler */
  if(probs.data === undefined)//รอก่อนน้า
  {
    console.log("probs.value = undefine")
    return <p>The market maybe close <a href="http://localhost:3000/Forexweb" style={{color: "red"}}>Visit History!</a></p>;
  }
  /***                       */
  /**Define probs */
  let value = probs.data;
  let name = probs.name;
  let length = probs.length
  //console.log("Value? = "+value)
  /**            */
  let when_bidAsk_happen = Object.keys(value);//ex ; "2021-11-05 17:03:47.554462"
  let bidAsk_happen_onlyTime = when_bidAsk_happen.map(x => x.slice(10,22))
  let bidAsk_itselfe = Object.values(value);// ex ; "0: (2) [1.15363, 1.15379]"
  let bid = bidAsk_itselfe.map(x => x[0]);//take only bid 
  let ask = bidAsk_itselfe.map(x => x[1]);//take only ask 
  //console.log(bid)
  /********* take only 5 digit */
  //
  /****2. less than 5 handler */
  //console.log("Nothing to do here")
  /****               */
  /****3. equal and more than 15 handler */
  if(bidAsk_happen_onlyTime.length > length)
  {
    //console.log("cut the damn array")
    let n = bidAsk_happen_onlyTime.length - length
    bidAsk_happen_onlyTime = bidAsk_happen_onlyTime.slice(n)
    bid = bid.slice(n)
    ask = ask.slice(n)
  }
  /****               */

  /***************Chart confiq */
  let data = {
    labels: bidAsk_happen_onlyTime, //horizon
    datasets: [
      {
        label: 'BID',
        data: bid,//bid goes here by the red color
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.4)',    
      },
      {
        label: 'ASK',
        data: ask,//ask goes here by the blue color
        fill: false,
        backgroundColor: 'rgb(0,191,255)',
        borderColor: 'rgb(0,191,255,0.4)',    
      }
    ],
  };
    
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: true,
    plugins: {
      legend: {
          display: true,
      },
      title: {
        display: true,
        text: 'Live BID/ASK',
      }
    },
    elements: {
      point:{
          radius: 0, //show dor or not at all
          pointHitRadius: 0 //hover area of the dor
      }
    }
  };
  /************************* */
  return <><Line redraw={false} data={data} options={options} /></>
}


export default LineChart;