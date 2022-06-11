import { enableInfiniteScroll } from "./infiniteScroll.js";
import { fetchBooksData, fetchImagesData } from "./dataFetcher.js";
import { prepareData } from "./utils.js";
import { createBody } from "./bodyGenerate.js";

window.addEventListener("DOMContentLoaded", function () {
  console.log("hello");
  this.document.getElementById("loader").style.display = "none";
});

const booksData = await fetchBooksData();
const imagesData = await fetchImagesData();
const data = await prepareData(booksData.resources, imagesData.resources);
enableInfiniteScroll(data);
createBody(data, 0);
