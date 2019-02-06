var choice;
var number;

function getrandom(max)
{
  number = Math.floor(Math.random()* Math.floor(5));
  return number;
}
function getMessage()
{
  if (number == 0)
  {choice = 'Waiting, 1,2,3...';}
  else if (number == 1)
  { choice = 'Wowza. Still loading';}
  else if (number == 2)
  { choice = 'Eventually it will get through this...';}
  else if (number == 3)
  { choice = 'Patience is a virtue!';}
  else if (number == 4)
  { choice = 'Go make some snacks?';}

return choice;

}

module.exports = {
getrandom : getrandom,
getMessage : getMessage
};
