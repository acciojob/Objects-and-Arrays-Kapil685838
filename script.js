const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

const team = players;

const team1 = [];
for(let i = 0; i < players.length; i++){
	team1.push(players[i]);
}

const cap1 = {};
let keys = Object.keys(person);
keys.foreach((key) => {
	cap1.key = person.key;
});
// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
