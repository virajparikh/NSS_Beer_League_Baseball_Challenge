// BASEBALL SCRIPT ========================================================= -->
function Team(teamName, firstName, lastName, phoneNum, zipCode, sponsor, wins, loss) {
  this.teamName = teamName;
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNum = phoneNum;
  this.zipCode = zipCode;
  this.sponsor = sponsor;
  this.wins = wins;
  this.loss = loss;
};

var team1 = new Team("Cardinals","Bob","Smith",'917-666-7777','37215','Pepsi');
var team2 = new Team("Cubs","Mike","Edwards",'917-666-7777','37234','Coke');
var team3 = new Team("Yankees","Howard","Whitney",'917-666-7777','37234','Google');
var team4 = new Team("Dodgers","John","Gekko",'917-666-7777','37567','Facebook');
var team5 = new Team("Bears","Steve","Gorman",'917-666-7777','37766','Microsoft');
var team6 = new Team("Orioles","Scott","Dent",'917-666-7777','37347','Apple');
var team7 = new Team("Phillies","Harry","Stack",'917-666-7777','37123','Toyota');
var team8 = new Team("Angels","Eddy","Roberts",'917-666-7777','37987','Ford');

var league = newArray [
  ["Cardinals","Bob","Smith",'917-666-7777','37215','Pepsi'],
  ["Cubs","Mike","Edwards",'917-666-7777','37234','Coke'],
  ["Yankees","Howard","Whitney",'917-666-7777','37234','Google'],
  ["Dodgers","John","Gekko",'917-666-7777','37567','Facebook'],
  ["Bears","Steve","Gorman",'917-666-7777','37766','Microsoft'],
  ["Orioles","Scott","Dent",'917-666-7777','37347','Apple'],
  ["Phillies","Harry","Stack",'917-666-7777','37123','Toyota'],
  ["Angels","Eddy","Roberts",'917-666-7777','37987','Ford']
];

var sched4 = [ 
  [[league[0][0], league[3][0]], [league[1][0], league[2][0]]],
  [[league[0][0], league[2][0]], [league[1][0], league[3][0]]],
  [[league[0][0], league[1][0]], [league[2][0], league[3][0]]],
  ];

  /*var sched4 = [ 
  [ [1, 4], [2, 3] ],
  [ [1, 3], [2, 4] ],
  [ [1, 2], [3, 4] ]
  ]; */

var sched6 = [ 
  [[league[0][0], league[5][0]], [league[1][0], league[4][0]], [league[2][0], league[3][0]]],
  [[league[0][0], league[4][0]], [league[3][0], league[5][0]], [league[1][0], league[2][0]]],
  [[league[0][0], league[3][0]], [league[2][0], league[4][0]], [league[1][0], league[5][0]]],
  [[league[0][0], league[2][0]], [league[1][0], league[3][0]], [league[4][0], league[5][0]]],
  [[league[0][0], league[1][0]], [league[2][0], league[5][0]], [league[3][0], league[4][0]]]
  ];

   /*var sched6 = [ 
  [ [1, 6], [2, 5], [3, 4] ],
  [ [1, 5], [4, 6], [2, 3] ],
  [ [1, 4], [3, 5], [2, 6] ],
  [ [1, 3], [2, 4], [5, 6] ],
  [ [1, 2], [3, 6], [4, 5] ]
  ];*/

var sched8 = [ 
  [[league[0][0], league[7][0]], [league[1][0], league[6][0]], [league[2][0], league[5][0]], [league[3][0], league[4][0]]],
  [[league[0][0], league[6][0]], [league[5][0], league[7][0]], [league[1][0], league[4][0]], [league[2][0], league[3][0]]],
  [[league[0][0], league[5][0]], [league[4][0], league[6][0]], [league[3][0], league[7][0]], [league[1][0], league[2][0]]],
  [[league[0][0], league[4][0]], [league[3][0], league[5][0]], [league[2][0], league[6][0]], [league[1][0], league[7][0]]],
  [[league[0][0], league[3][0]], [league[2][0], league[4][0]], [league[1][0], league[5][0]], [league[6][0], league[7][0]]],
  [[league[0][0], league[2][0]], [league[1][0], league[3][0]], [league[4][0], league[7][0]], [league[5][0], league[6][0]]],
  [[league[0][0], league[1][0]], [league[2][0], league[7][0]], [league[3][0], league[6][0]], [league[4][0], league[5][0]]]
  ];  

/*var sched8 = [
  [ [1, 8], [2, 7], [3, 6], [4, 5] ],
  [ [1, 7], [6, 8], [2, 5], [3, 4] ],
  [ [1, 6], [5, 7], [4, 8], [2, 3] ],
  [ [1, 5], [4, 6], [3, 7], [2, 8] ],
  [ [1, 4], [3, 5], [2, 6], [7, 8] ],
  [ [1, 3], [2, 4], [5, 8], [6, 7] ],
  [ [1, 2], [3, 8], [4, 7], [5, 6] ]
]; */   
  

//function league() {
//  for (var i = 0; i < sched4.length; i++) {
//   sched[i][0];}