const records = [
  {
    id: 1,
    first: 'First 1',
    last: 'Last 1',
  },
  {
    id: 2,
    first: 'First 2',
    last: 'Last 2',
  },
  {
    id: 3,
    first: 'First 3',
    last: 'Last 3',
  },
  {
    id: 4,
    first: 'First 4',
    last: 'Last 4',
  },
  {
    id: 5,
    first: 'First 5',
    last: 'Last 5',
  },
  {
    id: 6,
    first: 'First 6',
    last: 'Last 6',
  },
  {
    id: 7,
    first: 'First 7',
    last: 'Last 7',
  },
  {
    id: 8,
    first: 'First 8',
    last: 'Last 8',
  },
  {
    id: 9,
    first: 'First 9',
    last: 'Last 9',
  },
  {
    id: 10,
    first: 'First 10',
    last: 'Last 10',
  },
];
const x = records.reduce((acc, curr) => {
if(curr.id % 2 === 0){
acc[0].push({id: curr.id, name: `${curr.first} ${curr.last}`})
} else {
acc[1].push({id: curr.id, name: `${curr.first} ${curr.last}`})
}
return acc
}, [[], []])

console.log(x)
