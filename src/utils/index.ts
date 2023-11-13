function serialize(data: Array<number>): string {
  const obj: { [key: string]: number } = {};
  data.forEach((el) => {
    Object.hasOwn(obj, el) ? obj[el] += 1 : obj[el] = 1;
  });
  const res = Object.entries(obj).map(([key, value]) => `${key}=${value}`).join('&');
  return res; //value=amount&value1=amount1...
};

function deserialize(data: string): Array<number> {
  const entries = data.split('&').map((q) => q.split('='));
  const res: Array<number> = [];
  entries.forEach(([value, amount]) => {
    for (let i = 0; i < parseInt(amount); i += 1) {
      res.push(parseInt(value));
    }
  });
  return res;
};

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomNumberArray(amount: number): Array<number> {
  const res: Array<number> = [];
  for (let i = 0; i < amount; i += 1) {
    res.push(getRandomNumber(1, 300));
  }
  return res;
};

function getCompressionRate(data: Array<number>): number {
  const serialized = serialize(data);
  return serialized.length / data.toString().length;
};

function getFilledArray(min: number, max: number): Array<number> {
  const res: Array<number> = [];
  for (let i = min; i < max; i += 1) {
    res.push(i);
    res.push(i);
    res.push(i);
  }
  return res;
}

export { serialize, deserialize, getRandomNumberArray, getCompressionRate, getFilledArray };
