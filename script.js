"use strict";

window.addEventListener("load", start);

function start() {
  const lincoln = {
    name: "Abraham Lincoln",
    nickname: null,
    image:
      "https://static.wikia.nocookie.net/southpark/images/1/10/Abraham-lincoln.png/", //Burde være en kilde fra internettet?
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

  showCharacter(lincoln);
}

function showCharacter(character) {
  const html = /* html */ `
    <div class="grid-item">
      <h2>${character.name}</h2>
      <image src="${character.image}" />
      <p>Age: ${character.age}</p>
      <p>Gender: ${character.gender}</p>
      <p>Voiced by: ${character.voicedBy}</p>
    </div>
  `;

  document.querySelector("#characters").insertAdjacentHTML("beforeend", html);
  document
    .querySelector("#characters div:last-child")
    .addEventListener("click", characterClicked);

  function characterClicked() {
    console.log(character);
    const dialogHtml = /* html */ `
      <p>Name: ${character.name}</p>
      <p>Nickname: ${character.nickname}</p>
      <image src="${character.image}" />
      <p>Occupation: ${character.occupation}</p>
      <p>Age: ${character.age}</p>
      <p>Voiced by: ${character.voicedBy}</p>
      <p>Gender: ${character.gender}</p>
      <p>Religion: ${character.religion}</p>
      <p>Catchphrase: ${character.catchphrase}</p>
      <p>Hair color: ${character.hairColor}</p>
      <p>School grade: ${character.schoolGrade}</p>
      <p>Episodes: ${character.episodes}</p>
      <p>Appearances: ${character.appearances}</p>
      <p>First appearance: ${character.firstAppearance}</p>
    `;
    const dialog = document.querySelector("dialog");
    dialog.innerHTML = "";
    dialog.insertAdjacentHTML("beforeend", dialogHtml);
    dialog.showModal();
  }
}
