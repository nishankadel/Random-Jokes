const jokeEl = document.getElementById("jokes");
const nextButton = document.getElementById("button");

const fetchJokes = async () => {
  const fetchData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const joke = await fetchData.json();
  jokeEl.innerText = `${joke.joke}`;
};

fetchJokes();
nextButton.addEventListener("click", fetchJokes);
