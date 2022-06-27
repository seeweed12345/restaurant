import pizza from "./pizza.jpeg";
function createSkeleton() {
  const element = document.getElementById("content");
  const pizzaimg = document.createElement("img");
  pizzaimg.src = pizza;
  const headline = document.createElement("h1");
  headline.textContent = "the best pizza in the world";
  const article = document.createElement("div");
  article.textContent = "It really does not get better than this shit";
  element.appendChild(pizzaimg);
  element.appendChild(headline);
  element.appendChild(article);
}
export { createSkeleton };
