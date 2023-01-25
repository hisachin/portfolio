const skillsChart = document.getElementById('skillsChart');
const languageChart = document.getElementById('languageChart');
const frameworkChart = document.getElementById('frameworkChart');
const databaseChart = document.getElementById('databaseChart');
const devopsChart = document.getElementById('devopsChart');
const toolChart = document.getElementById('toolChart');

const radarChartOptions = {
    elements: {
        line: {
            borderWidth: 3
        }
    },
    scales: {
        r: {
            angleLines: {
                display: true
            },
            pointLabels: {
                color: '#111827'
            },
            ticks: {
                color: '#475569',
                backdropColor: 'transparent'
            },
            suggestedMin: 0,
            suggestedMax: 10
        }
    }
}

const skillsChartData = {
    labels: [
        'Frontend',
        'Backend',
        'Devops',
        'Management'
    ],
    datasets: [{
        label: 'Skills',
        data: [8, 7, 5,6],
        fill: true,
        backgroundColor: '#1e40afD4',
        borderColor: '#1e40af',
        pointBackgroundColor: '#1e40af',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#1e40af'
    }]
};

const languageChartData = {
    labels: [
        'Javascript',
        'PHP',
        'Python'
    ],
    datasets: [{
        label: 'Language',
        data: [8, 6, 4],
        fill: true,
        backgroundColor: '#fca5a5',
        borderColor: '#ef4444',
        pointBackgroundColor: '#ef4444',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#ef4444'
    }]
};

const frameworkChartData = {
    labels: [
        'React',
        'Angular',
        'Nextjs',
        'TailwindCss',
        'Bootstrap',
        'Express',
        'CodeIgniter'
    ],
    datasets: [{
        label: 'Framework',
        data: [7, 6, 5,7,8,9,6],
        fill: true,
        backgroundColor: '#fdba74',
        borderColor: '#f97316',
        pointBackgroundColor: '#f97316',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#f97316'
    }]
};

const databaseChartData = {
    labels: [
        'MySQL',
        'MongoDB',
        'Redis',
        'Elastic Search',
        'Oracle DB'
    ],
    datasets: [{
        label: 'Database',
        data: [6, 6, 5,5,4],
        fill: true,
        backgroundColor: '#bef264',
        borderColor: '#84cc16',
        pointBackgroundColor: '#84cc16',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#84cc16'
    }]
};

const devopsChartData = {
    labels: [
        'AWS',
        'Oracle OCI',
        'Terraform',
        'Docker',
        'Jenkins'
    ],
    datasets: [{
        label: 'DevOps',
        data: [6, 7, 2,5,3],
        fill: true,
        backgroundColor: '#5eead4',
        borderColor: '#14b8a6',
        pointBackgroundColor: '#14b8a6',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#14b8a6'
    }]
};

const toolChartData = {
    labels: [
        'Github',
        'Gitlab',
        'BitBucket',
        'JIRA',
        'Confluence',
        'Trello'
    ],
    datasets: [{
        label: 'Tools',
        data: [8, 6,8,7,6,7],
        fill: true,
        backgroundColor: '#f0abfc',
        borderColor: '#d946ef',
        pointBackgroundColor: '#d946ef',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#d946ef'
    }]
};

new Chart(skillsChart, {
    type: 'radar',
    data: skillsChartData,
    options: {...radarChartOptions,plugins: {
        legend: {
            display: false
        },
    }},
});
new Chart(languageChart, {
    type: 'radar',
    data: languageChartData,
    options: radarChartOptions,
});
new Chart(frameworkChart, {
    type: 'radar',
    data: frameworkChartData,
    options: radarChartOptions,
});
new Chart(databaseChart, {
    type: 'radar',
    data: databaseChartData,
    options: radarChartOptions,
});
new Chart(devopsChart, {
    type: 'radar',
    data: devopsChartData,
    options: radarChartOptions,
});
new Chart(toolChart, {
    type: 'radar',
    data: toolChartData,
    options: radarChartOptions,
});

