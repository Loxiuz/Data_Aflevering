"use strict";

const lincoln = {
  name: "Abraham Lincoln",
  nickname: null,
  image: "", //"Images/Abraham-lincoln.png", //Burde være en kilde fra internettet?
  occupation: "16th President of the United States",
  age: 56,
  voicedBy: "Trey Parker",
  gender: "Male",
  religion: null,
  catchphrase: null,
  hairColor: "Grey",
  schoolGrade: null,
  episodes: "S11 E14",
  appearances: 1,
  firstAppearance: "S11 E14",
};

console.log(lincoln);

function showCharacter(character) {
  document.querySelector("#name").textContent = character.name;
  document.querySelector("#image").src = character.image;
  document.querySelector("#occupation").textContent = character.occupation;
  document.querySelector("#age").textContent = character.age;
  document.querySelector("#voicedBy").textContent = character.voicedBy;
  document.querySelector("#gender").textContent = character.gender;
  document.querySelector("#religion").textContent = character.religion;
  document.querySelector("#catchphrase").textContent = character.catchphrase;
  document.querySelector("#hairColor").textContent = character.hairColor;
  document.querySelector("#schoolGrade").textContent = character.schoolGrade;
  document.querySelector("#episodes").textContent = character.episodes;
  document.querySelector("#appearances").textContent = character.appearances;
  document.querySelector("#firstAppearance").textContent =
    character.firstAppearance;
}

showCharacter(lincoln);
