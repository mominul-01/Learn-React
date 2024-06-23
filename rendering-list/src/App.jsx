import "./App.css";
import Recipes from "./Recipes";
import { people } from "./assets/data";
import { getImageUrl } from "./assets/utils";

function ListSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul> 
    </>
  );
}

function App() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const everyoneElse = people.filter(
    (person) => person.profession !== "chemist"
  );

  // const listItems = people.map((person) => (
  //   <li key={person.id}>
  //     <img src={getImageUrl(person)} alt={person.name} />
  //     <p>
  //       <b>{person.name}</b>
  //       {" " + person.profession + " "}
  //       known for {person.accomplishment}
  //     </p>
  //   </li>
  // ));
  return (
    <>
      <div>
        <article>
          <h1>Scientists</h1>
          <ListSection title="Chemists" people={chemists} />
          <ListSection title="Everyone Else" people={everyoneElse} />
        </article>

        <div>THis is Recipes List </div>
        <Recipes/>
      </div>
    </>
  );
}

export default App;
