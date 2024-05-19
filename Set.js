const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(22);
numberSet.add(28);
numberSet.add(4);

numberSet.delete(4);
console.log(numberSet);
