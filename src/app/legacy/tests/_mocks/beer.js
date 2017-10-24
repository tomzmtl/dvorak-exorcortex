import { random } from 'lodash';
import brew from '../../game/factories/beer';


const types = [
  ['Pale Ale', 'yellow', 5, 30],
  ['IPA', 'orange', 5, 70],
  ['Stout', 'black', 5, 35],
  ['Amber Ale', 'red', 5, 45],
  ['White Beer', 'white', 5, 15],
];


const mockBeer = () => Object.assign({}, {
  type: 'BEER_TYPE_PALE_ALE',
  color: [221, 143, 28],
  strength: 5,
  ibu: 30,
});


const randomBeer = () => {
  const args = types[random(types.length - 1)];
  console.log(300, args);
  return { ...brew(...args) };
};


const mockBeerSet = (count) => {
  const set = [];
  for (let i = 0; i < count; i += 1) {
    set.push(mockBeer());
  }
  return set;
};

export {
  mockBeer,
  randomBeer,
  mockBeerSet,
};
