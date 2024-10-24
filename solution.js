
const airports = [
  { start: 'ISB', end: 'LHR', cost: 1000 },
  { start: 'LHR', end: 'NYC', cost: 750 },
  { start: 'CBS', end: 'NYC', cost: 775 },
  { start: 'ISB', end: 'CBS', cost: 575 },
  { start: 'CBS', end: 'GRC', cost: 731 },
  { start: 'NYC', end: 'GRC', cost: 459 }
];

const result = getLowestCostPath(airports, 'ISB', 'GRC');
console.log(`Cheapest path is: ${result.path}, Cost: ${result.cost}`);

function getLowestCostPath(airports, start, end) {
  const options = [{ airport: start, cost: 0, path: [start] }];
  const minCostToReachAirport = {};

  while (true) {
    // Sorting and retrieveing entry which has the smallest cost path first
    options.sort((a, b) => a.cost - b.cost);
    const { airport, cost, path } = options.shift();

    if (minCostToReachAirport[airport] !== undefined && minCostToReachAirport[airport] <= cost) continue;

    minCostToReachAirport[airport] = cost;

    if (airport === end) {
      return { path, cost };
    }

    airports.forEach(route => {
      if (route.start === airport) {
        options.push({
          airport: route.end,
          cost: cost + route.cost,
          path: [...path, route.end]
        });
      }
    });
  }
}
