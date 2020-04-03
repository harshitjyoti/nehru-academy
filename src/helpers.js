export const getColor = (pop) => {
    const population = parseInt(pop);

    if (population > 200000000) return '#fa541c';
    else if (population > 100000000)
        return 'red';
    else if (population > 10000000)
        return 'magenta';
    else if (population > 1000000)
        return 'purple';
    else if (population > 100000)
        return 'geekblue';
    else if (population > 10000)
        return 'cyan';
    else if (population > 1000)
        return 'green';
    else if (population > 100)
        return 'lime';
    else
        return 'gold';
}