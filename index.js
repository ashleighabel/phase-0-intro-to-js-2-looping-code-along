const card = [];

function writeCards(person, description) {
  for (let i = 0; i < person.length; i++) {
    card.push(`Thank you, ${person[i]}, for the wonderful ${description} gift!`);
   }
  return card;
}

function countDown(num) {
    let i=10;
    while (i >= 0) {
        console.log (i);
        i--
    }
    return num;
}