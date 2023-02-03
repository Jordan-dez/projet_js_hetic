// 03 Exercice
// Soit le tableau data ci-dessous, compter dans un tableau results le nombre d'occurences de chaque entier du tableau data.

results = [];

datas = [
  1, 1, 2, 3, 4, 8, 8, 5, 6, 6, 9, 9, 10, 11, 12, 14, 48, 48, 51, 51, 1, 1, 1,
  51, 3, 3, 3, 51, 51, 51, 51, 51, 0,
];
const occurences=datas.reduce((acc,current)=>{
    acc[current] = (acc[current] || 0) + 1;
    console.log(acc[current])
    return acc;

},{})
 console.log(occurences);