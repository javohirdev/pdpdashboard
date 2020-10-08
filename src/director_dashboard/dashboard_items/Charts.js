import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import calendar from '../svg/calendar.svg';

const Charts = () => {
  const [chartData, setChartData] = useState({})

  const chart = () => {
    setChartData({
      labels: ['dushanba', 'seshanba', 'chorshanba', 'payshanba', 'juma', 'shanba'],
      datasets: [
        {
          label: 'Tushumlar boyicha statistika',
          data: [97,40,53,10,80,97],
          backgroundColor: [
            'rgba(75, 192, 192, 0.5)'
          ],
          borderWith: 4
        }
      ]
    })
  }

  useEffect(() => {
    chart()
  }, [] )

  return (
    <div className="DashboardCharts">
      {/*First line chart*/}
      <div className="main">
        <div className="chartsHead">
          <p>
            Tushumlar bo'yicha kategoriyalar
          </p>
          <div className="realMoney">
            <div className="greenDot"></div>
            <b>Real pul</b>
            <span>Payme, Yandex</span>
          </div>
          <div className="realMoney">
            <div className="yellowDot"></div>
            <b>No Real pul</b>
            <span>Vaucher, Cashback</span>
          </div>
          <div className="date">
            Sentabr.2020
            <img src={calendar} className="calendarIcon ml-3" />
          </div>
        </div>
        <div className="chartsBody">
            <Line data={chartData} options={{
              responsive: true,
              title: {text: 'Tushumlar boyicha', display: true},
              scales: {
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                      beginAtZero: true
                    },
                    gridLines: {
                      display: false
                    }
                  }
                ]
              }
            }}/>
        </div>
      </div>
      {/*Second line chart*/}
      <div className="main">
        <div className="chartsHead">
          <p>
            Tushumlar bo'yicha kategoriyalar
          </p>
          <div className="realMoney">
            <div className="greenDot"></div>
            <b>Real pul</b>
            <span>Payme, Yandex</span>
          </div>
          <div className="realMoney">
            <div className="yellowDot"></div>
            <b>No Real pul</b>
            <span>Vaucher, Cashback</span>
          </div>
          <div className="date">
            Sentabr.2020
            <img src={calendar} className="calendarIcon ml-3" />
          </div>
        </div>
        <div className="chartsBody">
            <Line data={chartData} options={{
              responsive: true,
              title: {text: 'Tushumlar boyicha', display: true},
              scales: {
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                      beginAtZero: true
                    },
                    gridLines: {
                      display: false
                    }
                  }
                ]
              }
            }}/>
        </div>
      </div>
    </div>
  )
}

export default Charts;