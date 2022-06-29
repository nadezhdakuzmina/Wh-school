let map = new Map<number, null>();

for (let i = 0; i <= 100; i++ ) {
  map.set(i, null);
}

// вторая часть задания

for (let i of map.keys()) {
  if (!i) {
    continue;
  }

  const isDivided3 = i % 3 == 0;
  const isDivided5 = i % 5 == 0;

  if (isDivided3 && isDivided5) {
    console.log("I can believe in that!", i);
  } else if (isDivided3) {
    console.log("Devided by tree", i);
  } else if (isDivided5) {
    console.log("Oops, here is 5", i);
  }
}
