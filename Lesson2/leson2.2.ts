type Data = [string, string, string, string][];
type Filter = string | null; // для случая поиска по названию улицы

const filter = (square?: Filter, street?: Filter) => {
  const data: Data = [
    ["36", "не приватизирован", "4 собственника", "Парковая"],
    ["45", "приватизирован", "3 собственника", "Луговая"],
    ["56", "не приватизирован", "1 собственник", "Луговая"],
    ["56", "приватизирован", "5 собственников", "Ленина"],
    ["25", "не приватизирован", "2 собственника", "Ленина"]
  ];

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

console.log(filter( '40', 'Ленина' ));
console.log(filter( '56' ));
