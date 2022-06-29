type Data = [string, string, string, string][];

interface IFilter {
  square?: string;
  street?: string;
};

type Filters = IFilter[];

const data: Data = [
  ["36", "не приватизирован", "4 собственника", "Парковая"],
  ["45", "приватизирован", "3 собственника", "Луговая"],
  ["56", "не приватизирован", "1 собственник", "Луговая"],
  ["56", "приватизирован", "5 собственников", "Ленина"],
  ["25", "не приватизирован", "2 собственника", "Ленина"]
];

const filters: Filters = [
  { square: '40', street: 'Ленина' },
  { square: '56' },
];

const filter = (data: Data, filters: Filters) => {
  return data.map((item) => {
    return filters.some((filter) => {
      const { square, street } = filter;

      let result = true;

      if (square && item[0] != square) {
        result = false;
      }

      if (street && item[3] != street) {
        result = false;
      }

      return result;
    });
  });
}

console.log(filter( data, filters));
