import { images } from './images';

function arrCardRand(numCards, theme) {
  const halfCards = numCards / 2;
  const arr = [];
  let ajuste = 0;
  // filtrade de images dependiendo del tema
  switch(theme) {
    case 1:
      ajuste = 10;
      break;
    case 2:
      ajuste = 20;
      break;
    case 3:
      ajuste = 30;
      break;
    default:
      ajuste = 0;
  }

  let i=0, j=0;
  while ( i < numCards ) {
    if( j === halfCards ) j = 0;
    let random = Math.floor(Math.random() * numCards);

    if( !arr.some(item => item.id === random )){
      arr.push(
        {
          id: random,
          image: images[j + ajuste],
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
