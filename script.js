"use strict";

window.addEventListener("load", start);

async function start() {
  const characters = await getCharacters(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );

  characters.forEach(showCharacter);
}

function showCharacter(character) {
  const html = /* html */ `
    <div class="grid-item">
      <h2>${character.name}</h2>
      <image src="${character.image}"/>
      <p><span>Age:</span> ${character.age}</p>
      <p><span>Gender:</span> ${character.gender}</p>
      <p><span>Voiced by:</span> ${character.voicedBy}</p>
    </div>
  `;
  document.querySelector("#characters").insertAdjacentHTML("beforeend", html);
  document
    .querySelector("#characters div:last-child")
    .addEventListener("click", characterClicked);

  function characterClicked() {
    console.log(character);
    const dialogHtml = /* html */ `
    <table>
      <tr>
        <td class="dialog-image">
          <h2>${character.name}</h2>
          <p><span>Nickname:</span> ${character.nickname}</p>
          <image src="${character.image}" />
        </td>
        <td  class = "dialog-info">
          <p>${character.name} is a 
          ${character.gender.toLowerCase()} at 
          ${character.age} years old and is voiced by 
          ${character.voicedBy}</p>
          <p><span>Occupation:</span> ${character.occupation}</p>
          <p><span>Age:</span> ${character.age}</p>
          <p><span>Voiced by:</span> ${character.voicedBy}</p>
          <p><span>Gender:</span> ${character.gender}</p>
          <p><span>Religion:</span> ${character.religion}</p>
          <p><span>Catchphrase:</span> ${character.catchPhrase}</p>
          <p><span>Hair color:</span> ${character.hairColor}</p>
          <p><span>School grade:</span> ${character.schoolGrade}</p>
          <p><span>Episodes:</span> ${character.episodes}</p>
          <p><span>Appearances:</span> ${character.appearances}</p>
          <p><span>First appearance:</span> ${character.firstAppearance}</p>
        </td>
      </tr>
    </table>
    <form method="dialog">
		  <button>Close</button>
    </form>
    `;
    const dialog = document.querySelector("dialog");
    dialog.classList.add("zoom_in_2");
    dialog.innerHTML = "";
    dialog.insertAdjacentHTML("beforeend", dialogHtml);
    dialog.showModal();
  }
}

async function getCharacters(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}
