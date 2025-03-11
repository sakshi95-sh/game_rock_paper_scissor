let score = JSON.parse(localStorage.getItem('Save'));
if(!score){
    score={
      Wins:0,
      Losses: 0,
      Ties:0,
    };
  }
  updateScore();
  /*
  if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
  */
    //console.log(JSON.parse(localStorage.getItem('Save')));

  function playGame(playerMove){
    const computerMove=pickComputerMove();
    //console.log(localStorage.getItem('Save'));
    let result= '';
        if(playerMove==='Rock'){
              if (computerMove === 'Rock')
              {
                result = 'Ties';
              }else if (computerMove === 'Paper')
              {
                result ='You Lose';
              }else if (computerMove === 'Scissors')
              {
                result = 'You Wins';
            } 
          }
        
    else if(playerMove=== 'Paper'){
        if (computerMove === 'Rock')
        {
          result = 'You Wins';
        }else if (computerMove === 'Paper')
        {
          result ='Ties';
        }else if (computerMove === 'Scissors')
        {
          result = 'You Loose';
        }
      //console.log(`You picked ${yourPick}. Computer picked ${computerMove}. ${result}.`)
  }
  else if (playerMove === 'Scissors'){
    if (computerMove === 'Rock')
      {
        result = 'You Lose';
      }else if (computerMove === 'Paper')
      {
        result ='You Wins';
      }else if (computerMove === 'Scissors')
      {
        result = 'Ties';
      }
//console.log(`You picked ${yourPick}. Computer picked ${computerMove}. ${result}.`)
  }
  if (result === 'You Wins')
  {
    score.Wins=score.Wins+1;
    
  }
  else if (result === 'You Lose')
  {
    score.Losses=score.Losses+1 ;
   
  }
 else if (result === 'Ties')
  {
    score.Ties=score.Ties+1;
   
  }
  //console.log(localStorage);
  //localStorage.setItem('Score', JSON.stringify(score));
 //localStorage.setItem('score', JSON.stringify(score));
 // alert(`You picked ${playerMove}. Computer picked ${computerMove}.${result}.
  //Wins: ${score.Wins}. Lossse: ${score.Losses}. Ties:${score.Ties}.`);


  localStorage.setItem('Score', JSON.stringify(score));

  updateScore();

  document.querySelector('.js-result')
  .innerHTML=`${result}`;

  document.querySelector('.js-moves')
    .innerHTML =`
  <span class="move-text"> Your Move </span>
  <img src="Image/${playerMove}-emoji.png" class="move-icon" >
  <img src="Image/${computerMove}-emoji.png" class="move-icon"> 
  <span class="move-text"> Computer Move </span>`;
    

  console.log(localStorage.setItem('Save',JSON.stringify(score)));
  //localStorage.setItem('Save',JSON.stringify(score));
  //console.log(localStorage.getItem('Save'));
} 

function updateScore(){
  document.querySelector('.js-score')
    .innerHTML=`Wins: ${score.Wins}. Lossse: ${score.Losses}. Ties:${score.Ties}.`;
  }
  

function pickComputerMove(){
let computerMove ='';
const randomNumber= Math.random();
if(randomNumber >= 0 && randomNumber < 1/3)
    {
      computerMove='Rock';
        
    } else if (randomNumber >= 1/3 && randomNumber < 2/3)
    {
      computerMove='Paper';
        
    }else if (randomNumber >= 2/3 && randomNumber < 1){
      computerMove= 'Scissors';
        
    }
    return computerMove;
   } 