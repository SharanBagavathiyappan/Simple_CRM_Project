
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import "./barChart.css"

export default function StackedBarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        const dataValues = [5, 5, 2, 4, 2, 6, 4, 8, 4, 5, 4, 6];
        const maxIndex = dataValues.indexOf(Math.max(...dataValues));

        const backgroundColors = dataValues.map((value, index) =>
          index === maxIndex
            ? documentStyle.getPropertyValue('--unique-color') // Use a unique color for the bar with the highest value
            : documentStyle.getPropertyValue('--blue-500') // Use the default color for other bars
        );

        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Dataset 1',
            
                    backgroundColor: backgroundColors,
                    data: dataValues,
                    borderRadius:10
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio:1,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    display:false,
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        zeroLineColor:'transparent',
                        color: surfaceBorder
                    }
                },
                y: {display:false,
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        display:false,
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="barCard">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}