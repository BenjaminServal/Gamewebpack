const PageDetail = (argument) => {
  const preparePage = () => {
    var cleanedArgument = argument.replace(/\s+/g, "-");


    const fetchGame = (url, argument) => {
      let finalURL = url + argument;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          console.log("pagedetail reponse:", response);
          let {clip, name, released, description, background_image, rating, ratings_count, developers, platforms, publishers, tags, genres } = response;

          let developersAvailable = "";
          developers.forEach((article) => {
            developersAvailable += `${article.name} `
          });
          
          let publishersAvailable = "";
          publishers.forEach((game) => {
            publishersAvailable += `${game.name} `
          });
          
          let articleDOM = document.querySelector(".page-detail .article");

          articleDOM.querySelector("p.genres span").innerHTML = genres.map(genre => genre.name ).join(", ");
          articleDOM.querySelector("h1.title").innerHTML = name;
          articleDOM.querySelector("p.release-date span").innerHTML = released;
          articleDOM.querySelector("p.description").innerHTML = description;
          articleDOM.querySelector("p.developers span").innerHTML = developersAvailable;
          articleDOM.querySelector("div.jumbotron").style.backgroundImage= `url(${background_image})`;
          articleDOM.querySelector("p.platforms span").innerHTML = platforms.map( platform => `  <a href='#PageList/${platform.platform.id}'>${platform.platform.name}</a>`);

          
        });
    };

    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">



        <div class="article">
        <div class=" jumbotron "></div>
      <br>
          <h1 class="title"></h1>

          <p class="release-date">
          Release date : <span></span></p>

          <p class="description"></p>

          <p class="genres">
          Genre : <span></span></p>

          <p class="developers"> 
          Developer : <span></span></p>
        

        <p class="platforms"> 
          Platforms : <span></span></p>

          <p class="publishers"> 
          Publisher : <span></span> </p>


          </p>
        
            
          </p>

       </div>
      </section>
    `;

    preparePage();
  };

  render();
};

export {PageDetail};