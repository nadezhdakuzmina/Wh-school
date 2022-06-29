import type { DataArray } from './types';

let data: DataArray = [
  {
    "dt": "01-01-2021",
    "quantity": 100,
    "age": null,
    "temp": {
      "temperature": "100 degrees",
      "city": "Norway"
    }
  },
  {"dt": "02-01-2021",
    "quantity": 150,
    "age": 23,
    "temp": {
      "temperature": "103 degrees",
      "city": "Egypt"
    }
  },
  {"dt": "03-01-2021",
    "quantity": 150,
    "age": 22,
    "temp": {
      "temperature": "98 degrees",
      "city": "Kypris"
    }
  },
  {"dt": "03-01-2021",
    "quantity": 150,
    "age": 22,
    "temp": {
      "temperature": "98 degrees",
      "city": "Holland"
    }
  },
  {"dt": "03-01-2021",
    "quantity": 700,
    "age": 27,
    "temp": {
      "temperature": "50 degrees",
      "city": "Kursk",
      "optional": true
    }
  },
  {"dt": "03-01-2021",
    "quantity": 700,
    "age": 27,
    "temp": {
      "temperature": "50 degrees",
      "city": "Kursk",
      "optional": true
    }
  }
];

let set = new Set (data.map(element => {
  return element.dt;
}));

let map = new Map ();
data.forEach(element => {
  if (map.has(element.dt)) {
    let res = map.get(element.dt);
    console.log(res);
    return map.set(element.dt, [res, element])
  }
  else
  return map.set(element.dt, element)
});

console.log(set);
console.log(map);
