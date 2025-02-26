export const helpers = {
  getTypeColor: (type: string) => {
    let hexCode: string;
    switch (type.toLowerCase()) {
      case "normal":
        hexCode = "#A8A878";
        break;
      case "fire":
        hexCode = "#F08030";
        break;
      case "water":
        hexCode = "#6890F0";
        break;
      case "grass":
        hexCode = "#78C850";
        break;
      case "electric":
        hexCode = "#F8D030";
        break;
      case "ice":
        hexCode = "#98D8D8";
        break;
      case "fighting":
        hexCode = "#C03028";
        break;
      case "poison":
        hexCode = "#A040A0";
        break;
      case "ground":
        hexCode = "#E0C068";
        break;
      case "flying":
        hexCode = "#A890F0";
        break;
      case "psychic":
        hexCode = "#F85888";
        break;
      case "bug":
        hexCode = "#A8B820";
        break;
      case "rock":
        hexCode = "#B8A038";
        break;
      case "ghost":
        hexCode = "#705898";
        break;
      case "dragon":
        hexCode = "#7038F8";
        break;
      case "dark":
        hexCode = "#705848";
        break;
      case "steel":
        hexCode = "#B8B8D0";
        break;
      case "fairy":
        hexCode = "#EE99AC";
        break;
      default:
        hexCode = "#000000"; // Default to black for unknown types
        break;
    }return hexCode;
  }
}
