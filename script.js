"use strict";

window.addEventListener("load", start);

async function start() {
  const lincoln = await getCharacter(
    "https://raw.githubusercontent.com/Loxiuz/Data_Aflevering/main/data/lincoln.json"
  );
  const aguilera = await getCharacter(
    "https://raw.githubusercontent.com/Maltemork/south-park-app/main/data/christinaAguilera.json"
  );
  const black = await getCharacter(
    "https://raw.githubusercontent.com/Abdiox/South-park1/main/Data/southPark.json"
  );
  const dewgong = await getCharacter(
    "https://raw.githubusercontent.com/AishaBulalle/3-aflevering/main/dewgong.json"
  );
  const obama = await getCharacter(
    "https://raw.githubusercontent.com/AliHMohammad/Data-Ali/main/obamaChar.json"
  );
  const leopold = await getCharacter(
    "https://raw.githubusercontent.com/Asbjoernemil/data-assignment/main/data/characters.json"
  );
  const jimmy = await getCharacter(
    "https://raw.githubusercontent.com/Forkeh/South-Park-App/main/data/jimmy.json"
  );
  const eric = await getCharacter(
    "https://raw.githubusercontent.com/Bindholt/Data-Projekt/main/data/cartman.json"
  );
  const tuong = await getCharacter(
    "https://raw.githubusercontent.com/TheDanishMexican/object-south-park/main/data/app.json"
  );
  const fosse = await getCharacter(
    "https://raw.githubusercontent.com/frva0001/data/main/data/fosseMcDonald.json"
  );
  const randy = await getCharacter(
    "https://raw.githubusercontent.com/MadsFolkmann/Data-app-kode/main/data/randy.json"
  );
  const mackey = await getCharacter(
    "https://raw.githubusercontent.com/MaxusTheOne/data_project/main/data/mrMackey.json"
  );
  const kenneth = await getCharacter(
    "https://raw.githubusercontent.com/Mart0808DK/Data-fetch-projekt/main/kenny.json"
  );
  const watortle = await getCharacter(
    "https://raw.githubusercontent.com/naja0001/DATA.projekt/main/Data/pokemon.JSON"
  );
  const wendy = await getCharacter(
    "https://raw.githubusercontent.com/osman-butt/data-app/main/wendy.json"
  );
  const john = await getCharacter(
    "https://raw.githubusercontent.com/rarogbennu/SP/master/data/jfk.json"
  );
  const tom = await getCharacter(
    "https://raw.githubusercontent.com/svdf18/SPobjects/main/data/tomcruise.json"
  );
  const jack = await getCharacter(
    "https://raw.githubusercontent.com/YawHB/South_Park_Project/main/data/jack.json"
  );
  const paris = await getCharacter(
    "https://raw.githubusercontent.com/Tunafan/southpark_db/main/South%20Park%20db/data/paris.json"
  );

  showCharacter(aguilera);
  showCharacter(lincoln);
  showCharacter(black);
  showCharacter(dewgong);
  showCharacter(obama);
  showCharacter(leopold);
  showCharacter(jimmy);
  showCharacter(eric);
  showCharacter(tuong);
  showCharacter(fosse);
  showCharacter(randy);
  showCharacter(mackey);
  showCharacter(kenneth);
  showCharacter(watortle);
  showCharacter(wendy);
  showCharacter(john);
  showCharacter(tom);
  showCharacter(jack);
  showCharacter(paris);
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
      <h2>${character.name}</h2>
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

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}
