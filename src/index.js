function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "10aa4a04dbbt55363b01c10f31ba8fof";
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br /> Seperate the french translation and english translation with a <br/> with basic HTML dont add the word html but add the words English Translation. Add an english translation too underline the wordS English Translation in HTML. Make sure to follow the user instructions. Do not include a title to the poem. ";
  let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${instructionsInput.value} ⌛</div>`;

  axios.get(apiURL).then(displayPoem);
}
 
 let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);