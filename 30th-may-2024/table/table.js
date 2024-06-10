let table = [];
for (i = 1; i <= 10; i++) {
  let tTable = [];
  for (j = 1; j <= 10; j++) {
    let res = `${i}*${j}=${i * j}`;
    tTable.push(res);
  }
  table.push(tTable);
}
console.log(table);
