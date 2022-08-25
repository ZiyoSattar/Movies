let elInner = document.querySelector(".hero__inner");

movies.forEach((movie) => {
  let elWrapper = document.createElement("li");
  let elImg = document.createElement("img");
  let elSub = document.createElement("div");
  let elTittle = document.createElement("h5");
  let elText = document.createElement("p");
  let elSummary = document.createElement("p");
  let elLink = document.createElement("a");

  elWrapper.setAttribute("class", "card w-25 mx-5 my-5");
  elImg.setAttribute("class", "card-img-top");
  elSub.setAttribute("class", "card-body");
  elTittle.setAttribute("class", "card-title");
  elText.setAttribute("class", "card-text");
  elLink.setAttribute("class", "hero__btn btn btn-primary");

  elInner.appendChild(elWrapper);
  elWrapper.appendChild(elImg);
  elWrapper.appendChild(elSub);
  elSub.appendChild(elTittle);
  elSub.appendChild(elText);
  elSub.appendChild(elSummary);
  elSub.appendChild(elLink);

  elImg.setAttribute(
    "src",
    `https://i3.ytimg.com/vi/${movie.ytid}/maxresdefault.jpg`
  );
  elTittle.textContent = movie.Title;
  elText.textContent = movie.fulltitle;
  elSummary.textContent = movie.summary.split(" ").slice(0, 15).join(" ");
  elLink.textContent = "Youtube";
  elLink.setAttribute("href", `https://www.youtube.com/watch?v=${movie.ytid}`);
});
