import React, { useContext, useEffect, useState } from "react";
import paginate from './utils'


const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    //Nos States
    // State de chargement à true
  const [loading, setLoading] = useState(true);
  // State Input
  const [searchTerm, setSearchTerm] = useState("a");
  // State listes cocktail tableau vide
  const [cocktails, setCocktails] = useState([]);


  const fetchDrinks = async () => {
    try {
      setLoading(true);
      //Récupération de la liste cocktail à partir de l'url, SearchTerm pour rechercher un cocktail en particulier
      const response = await fetch(`${url}${searchTerm}`);
      // Données en JSON
      const data = await response.json();
      console.log(data); //output {drinks: Array(25)}
      //destructuring
      const { drinks } = data;
      console.log(drinks); // output (25) [{...}, {...}, ...]
        // si drinks
      if (drinks) {
          // on utilise la fonction .map pour un destructuring et retourner les valeurs dans la variable newCocktails
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        // on modifie le state cocktails en mettant notre variable newCocktails qui contient toute nos listes de cocktails
        setCocktails(paginate(newCocktails));
        console.log(paginate(newCocktails));
      } else {
          //sinon laisse notre state cocktail à vide
        setCocktails([]);
      }
      // on change la valeur de notre chargement à false si nous avons notre liste
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    //fonction fetchDrinks()
    fetchDrinks();
    // Modification de seatchTerm à chaque utilisation de l'input
  }, [searchTerm]);

  // Placement de nos states pour une utlisation dans toute l'application
  return (
    <AppContext.Provider value={{ loading, cocktails, setCocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// Exportation de useGlobalContext pour une utilisation dans l'application avec nos states à l'intérieur
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
