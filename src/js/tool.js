import {PageList} from '../js/PageList';

const pictPlatforms = (platforms) => {
  let platformsAvailable = "";
  platforms.forEach(platform => {
    switch(platform.platform.name) {
      case "PC":
      platformsAvailable += `<img src="./src/images/pc.svg" alt="icon-pc">`;
      break;
      case "Xbox":
      platformsAvailable += `<img src="./src/images/xbox.svg" alt="icon-pc">`;
      break;
      case "PlayStation":
      platformsAvailable += `<img src="./src/images/playstation4.svg" alt="icon-pc">`;
      break;
      case "Nintendo":
      platformsAvailable += `<img src="./src/images/nintendo-switch.svg" alt="icon-pc">`;
      break;
          default: //leave blank
          break;
        }
      });
  return platformsAvailable;
}

export { pictPlatforms };