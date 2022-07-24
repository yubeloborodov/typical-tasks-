const str1 = 'When you play the game of thrones, you win or you die';
const str2 = 'chicken chicken? chicken! chicken';

function makeCensored(str, words) {
  return str.split(' ').map((it) => {
    if (words.includes(it)) return '$#%!';
    return it;
  }).join(' ');
}

const sentence1 = makeCensored(str1, ['die', 'play']);
const sentence2 = makeCensored(str2, ['die', 'play']);
