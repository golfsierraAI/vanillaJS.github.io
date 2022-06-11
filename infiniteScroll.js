import { createBody } from "./bodyGenerate.js";

let start = 0;
export const enableInfiniteScroll = (data) => {
  document.getElementById("root").addEventListener("scroll", () => {
    let { scrollHeight, scrollTop, clientHeight } =
      document.getElementById("root");
    if (scrollTop + clientHeight > scrollHeight - 5) {
      document.getElementById("loader").style.display = "flex";
      document.getElementById("root").style.display = "none";
      setTimeout(() => {
        createBody(data, ++start);
        document.getElementById("loader").style.display = "none";
        document.getElementById("root").style.display = "block";
      }, 2000);
    }
  });
};
