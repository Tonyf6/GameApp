

// REFACTORED
// undefined is absense of value   but null is an intentinal absense of value
//// we will move the GameQuery to store.ts
// export interface GameQuery {
//   genreId?: number;  // notice that adding ? means its allowed to be undefined
//   platformId: number;
//   sortOrder: string;
//   searchText: string;
// }

const App = () => {
  //  REFACTORED
  // const [selectedGenre, setSelectedGenre] = useState<Genre |null>(null)

  // // remember we put our state where the parent component is so app is the parent for this useState below
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  //// for global statemanagement we dont need useState anymore
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <>
      {/* create our responsive layout with Charkha UI Grid */}
      {/* Nav, aside, main ______ responsive for desktop and mobile */}
      {/* all of the Grid was moved to HomePage.tsx */}
    </>
  );
};

export default App;
