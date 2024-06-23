import React from "react";
import { recipes } from "./assets/data";

const Recipes = () => {
  return (
    <div className="container m-auto ">
      <h1 className="text-3xl pt-10 ">Recipes</h1>

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2 className="p-5 text-center text-4xl">{recipe.name}</h2>
          <div className="flex  mt-5 bg-red-200  justify-evenly">
            <div>
              <img
                className="w-[500px] h-[500px] "
                src={recipe.imageSource}
                alt={recipe.name}
              />
            </div>
            <div >
              {" "}
              <ul className="list-disc p-10 ">
                {recipe.ingredients.map((ingredient) => (
                  <li className='text-3xl  capitalize ' key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
