import { generateData } from "./utils.js";

const body = document.getElementById("root");

export const createBody = (data, start) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  let infiniteScrollData = generateData(data, start);

  for (const [genre, entries] of Object.entries(infiniteScrollData)) {
    const genreDiv = document.createElement("div");
    const heading = document.createElement("h1");

    heading.innerText = genre;
    wrapper.append(genreDiv);
    genreDiv.append(heading);

    entries.forEach((element) => {
      const name = document.createElement("p");
      const image = document.createElement("img");
      image.src = element.imageUrl;
      image.classList.add("bookCover");
      name.innerText = element.name;

      genreDiv.appendChild(name);
      genreDiv.append(image);
      genreDiv.classList.add("genreDiv");
    });
    body.append(wrapper);
  }
};
