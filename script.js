const teamNames = ["Big Fudge", "Badger (as in: to badger, not the animal)", "Rhythm", "Slyders", "Supermen", "Batmen", "Spidermen", "Wondermen", "Arsenalitos", "Firebirds", "Fightin' Buddy Holly's", "United. Yeah, we know it sucks. What are you gonna do about it? Not show up to the ga-hey wait where are you going?", "Rogues", "Mystiques", "Showboys", "Definitely not another name for pee, not going to make that mistake again.", "Sting (like the verb, but the logo is the singer)", "Stab", "Scorps", "Dragons", "Kicks", "Soccerers", "Ball", "Goal", "Cleats", "Boots", "Nets", "Zeppelins", "Spyderz", "Kill", "Madonnas", "Humpty Dances", "Shaqs", "Moonwalkers", "Lenos", "SCUDs", "Punch", "Bite", "Rebellion", "Insurrection", "Bang", "Punters", "Thwack", "Thwoop", "Ka-pow", "[insert onomatopoeia here]", "SWAT", "3-Pacs", "Matrix", "Fight Clubs", "Mufasas", "Scissorhands", "T-Rex's", "Punts", "Dribbles", "Shots", "Soccerballs", "Idk just put \“Real\” in front of the city…..wait", "Laundry Ghosts", "Soccer Televisions (abbreviated as STV's. Like MTV. But soccer.)", "Painters", "Die Hards", "Electric Tornados", "'Pokes", "Water Quakes", "Gangsterz", "World Wide Webs", "Gore", "Mutilation", "Dismember", "Punish", "Discipline", "Maltreat", "Wound", "Impair", "Maim", "Excite", "Exhilarate", "Exhilarate", "Arouse", "Blockbusters", "Furbies", "That foldable fortune teller thing I don't know the name", "In Sync's", "Runmen (sponsored by Walkman)", "Slime", "Double-Dares", "Friends", "Fresh Princes", "Seinfelds", "SNL was better in the 80's's", "Power", "Dominate", "Intense", "Vigor", "Boink", "Fly", "Home Skillets", "Vanilla Ice's", "Oust", "Put \“Legia\" in front of the first name. Like the team from Warsaw. Because, I dunno, Warsaw is in Europe right?"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
`${teamNames[getRandomNumber(teamNames.length)]}`;

const setRandomName = () => {
  document.getElementById('random-name').innerText = document.getElementById('city').value + " " + getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);

