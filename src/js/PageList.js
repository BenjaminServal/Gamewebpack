import { pictPlatforms } from '../js/tool';


console.log("https://api.rawg.io/api/games")
const PageList = (argument = "") => {
  let articles = [];

  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let gamecard = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "?page_size=9&page=1&search=" + argument;
      }


      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          articles = [...articles, ...response.results] //1er appel API
          articles.forEach((article) => {
            gamecard += `
                  <div class="cardGame col-xs-12 col-sm-6 col-md-4" >
                    <div class="container text-center">
                    <div class="card mb-3 mt-3 text-center text-white bg-dark" style="width: 300px; height: 400px;" >
                    <img class="imgGame mb-3 padding: 20px" src=${article.background_image}>
                      <h5>${article.name}</h5>
                      <p>${article.released}</p>
                      <a class="mb-3 mt-3" href = "#pagedetail/${article.id}">En savoir plus</a>
                    <p class="card-platform">
                      ${pictPlatforms(article.parent_platforms)}
                    </p>
                    </div>
                 <div class="more-info">
                <p>&#128197; ${article.released}</p>
                <p>&#11088; ${article.rating} / 5</p>
                <p>&#128100; ${article.tags[0].name}</p> 
                <p>&#128126; ${article.genres[0].name} </p>
              </div> 
              </div>
              </div> `;
          });
          document.querySelector(".page-list .gamecard").innerHTML = gamecard;
          //mouseover to get more info
          const cards = document.querySelectorAll(".cardGame");
          
          cards.forEach((card) => {
            card.addEventListener('mouseover', () => {
              card.classList.add("cardGame--hovered");
            }); 
            card.addEventListener('mouseout', () => {
              card.classList.remove("cardGame--hovered");
            }); 
          });

        });
    };

    fetchList("https://api.rawg.io/api/games", cleanedArgument);

  };





  const render = (article) => {
    pageContent.innerHTML = `
      <section class="page-list ">
      <h1 class="my-3 mx-3">Welcome</h1>
      <p class="mb-5 mx-3"> The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,
          the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,
          brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,
          groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you
          with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure
        </p>
      <div class="gamecard row  mx-2 my-2">...loading</div>
      <button></button>
          <div class="articles">...loading</div>
      <button id="next">Show More</button>

      
      </section>
    `;

    preparePage();
  };

  render();
};


const submit = document.getElementById("search-addon")
submit.addEventListener('click', () => {
  PageList(document.getElementById("gameSearch").value);
});






export { PageList };