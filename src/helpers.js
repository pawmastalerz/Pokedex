function shuffle4(arr) {
  const arrCopy = [...arr];
  const selected = [];

  for (let i = 0; i < 4; i++) {
    const selectedIndex = Math.floor(Math.random() * arrCopy.length);
    selected.push(arrCopy[selectedIndex]);
    arrCopy.splice(selectedIndex, 1);
  }
  return { selected: selected, rest: arrCopy };
}

function fillZeros(num, expectedLength) {
  let numStr = num.toString();
  while (numStr.length < expectedLength) {
    numStr = numStr.replace(/^/, "0");
  }
  return numStr;
}

function assessWinner(num1, num2) {
  if (num1 === num2) return { message: "Tie!", className: "Pokedex-tie" };
  else if (num1 > num2)
    return { message: "Winning Hand", className: "Pokedex-win" };
  else return { message: "Losing Hand", className: "Pokedex-lose" };
}

function getPokemonImageUrl(id) {
  let imageUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
  imageUrl += fillZeros(id, 3);
  imageUrl += ".png";
  return imageUrl;
}

function calculateHandStrength(arr) {
  let sum = 0;
  for (const card of arr) {
    sum += card.base_experience;
  }
  return sum;
}

export { shuffle4, getPokemonImageUrl, assessWinner, calculateHandStrength };
