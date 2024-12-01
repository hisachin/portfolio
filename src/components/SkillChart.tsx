import React, { useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const skillLevels = {
  Frontend: 7,
  Backend: 8,
  DevOps: 6,
  Cloud: 7,
  Architecture: 7,
  Management: 6,
};

export function SkillChart() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const data = {
    labels: Object.keys(skillLevels),
    datasets: [
      {
        label: 'Expertise Level',
        data: Object.values(skillLevels),
        backgroundColor: 'rgba(0, 216, 255, 0.15)',
        borderColor: 'rgba(0, 216, 255, 0.8)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(0, 216, 255, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0, 216, 255, 1)',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 10,
        beginAtZero: true,
        angleLines: {
          color: 'rgba(0, 1, 1, 0.1)',
        },
        grid: {
          color: 'rgba(0, 1, 1, 0.1)',
        },
        pointLabels: {
          color: (context) => {
            const label = context.label || '';
            return hoveredSkill === label
              ? 'rgba(0, 216, 255, 1)'
              : 'rgba(0, 0, 1, 0.9)';
          },
          font: {
            size: 14,
            family: 'system-ui',
            weight: '600',
          },
        },
        ticks: {
          display: false,
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 16,
          weight: 'bold',
          family: 'system-ui',
        },
        bodyFont: {
          size: 14,
          family: 'system-ui',
        },
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: (context) => `Proficiency: ${context.raw}/10`,
        },
      },
    },
    elements: {
      line: {
        tension: 0.2,
      },
    },
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
    },
    onHover: (event, elements) => {
      if (elements && elements.length > 0) {
        const dataIndex = elements[0].index;
        setHoveredSkill(Object.keys(skillLevels)[dataIndex]);
      } else {
        setHoveredSkill(null);
      }
    },
  };

  return (
    <div className="relative w-full h-[500px] group">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-brand-secondary/5 to-brand-accent/5 rounded-3xl backdrop-blur-sm"></div>
      <div className="absolute inset-0 p-8 mt-8">
        <Radar data={data} options={options} />
      </div>
      <div className="absolute top-2 left-1/2 -translate-x-1/2 text-center">
        <h3 className="text-2xl font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
          {hoveredSkill || 'Expertise'}
        </h3>
        {hoveredSkill && (
          <p className="text-sky-600">
            Proficiency: {skillLevels[hoveredSkill]}/10
          </p>
        )}
      </div>
    </div>
  );
}