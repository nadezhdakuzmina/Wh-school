type Data = [string, string, string, string][];
interface IFilters {
  square?: string;
  street?: string;
};

const data: Data = [
  ["36", "не приватизирован", "4 собственника", "Парковая"],
  ["45", "приватизирован", "3 собственника", "Луговая"],
  ["56", "не приватизирован", "1 собственник", "Луговая"],
  ["56", "приватизирован", "5 собственников", "Ленина"],
  ["25", "не приватизирован", "2 собственника", "Ленина"]
];

const filter = (data: Data, filters: IFilters) => {
  const { square, street } = filters;
  
  return data.map((item) => {
    let result = true;

    if (square && item[0] != square) {
      result = false;
    }

    if (street && item[3] != street) {
      result = false;
    }
    return result;
  });
}

console.log(filter( data, { square: '40', street: 'Ленина' } ));
console.log(filter( data, { square: '56' } ));
