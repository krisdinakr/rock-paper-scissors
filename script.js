const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];

const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 60) + 1;
  if (randomNumber <= 20) return CHOICES[0];
  if (randomNumber > 20 && randomNumber <= 40) return CHOICES[1];
  if (randomNumber > 40) return CHOICES[2];
}

const computerSelection = computerPlay();

const playRound = (playerChoice, compChoice) => {
  console.log('player', playerChoice);
  console.log('comp', compChoice);

  let result = {};

  switch (playerChoice + compChoice) {
    case CHOICES[0] + CHOICES[2]:
    case CHOICES[1] + CHOICES[0]:
    case CHOICES[2] + CHOICES[1]:
      result.isWin = true;
      result.message = `You Win! ${playerChoice} beats ${compChoice}`;
      break;
    case CHOICES[0] + CHOICES[1]:
    case CHOICES[1] + CHOICES[2]:
    case CHOICES[2] + CHOICES[0]:
      result.isLose = true;
      result.message = `You Lose! ${compChoice} beats ${playerChoice}`;
      break;
    default:
      result.isDrawn = true;
      result.message = `Drawn!`;
      break;
  }

  return result;
}

const game = () => {
  let score = 0;
  for (i = 0; i < 5; i ++) {
    const playerSelection = prompt('Choose your weapon between "Rock", "Paper", or "Scissors"').toUpperCase();
    const result = playRound(playerSelection, computerSelection);
    console.log(result)
    if (result.isWin) {
      score += 1;
    }
  }

  console.log('score', score)
  if (score < 3) console.log('You Lose!')
  if (score === 3) console.log(`It's a Drawn!`)
  if (score > 3) console.log('You Win!')
}

game()