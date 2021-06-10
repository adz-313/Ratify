const colors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#009688',
    '#8bc34a',
    '#cddc39',
    '#ffd600',
    '#ff9800',
    '#ff5722',
    '#795548'
]

export let randomColor = () => colors[Math.floor(Math.random()*colors.length)];