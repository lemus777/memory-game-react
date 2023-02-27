import { images } from './images';

function arrCardRand(numCards) {
  const halfCards = numCards / 2;
  const arr = [];
  let i=0, j=0;
  while ( i < numCards ) {
    if( j === halfCards ) j = 0;
    let random = Math.floor(Math.random() * numCards);

    if( !arr.some(item => item.id === random )){
      arr.push(
        {
          id: random,
          image: images[j],
          bind: j,
          rotate: false,
          validating: 0,
          set: 0
        }
      )
      i++;
      j++;
    }
  }
  return arr;
}

export { arrCardRand };
