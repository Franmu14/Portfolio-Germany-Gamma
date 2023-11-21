import './App.css';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [foot, setFoot] = useState("");

  const [playerList, setPlayerList] = useState([]);

  //queries

  const addPlayer = () => {
    Axios.post("http://localhost:3001/create", {
      nameBody: name,
      ageBody: age,
      countryBody: country,
      weightBody: weight,
      heightBody: height,
      footBody: foot
    }).then(() => {
      setPlayerList([
        ...playerList,
        {
          nameBody: name,
          ageBody: age,
          countryBody: country,
          weightBody: weight,
          heightBody: height,
          footBody: foot
        },
      ]);
    });
  };

  const getPlayers = () => {
    Axios.get("http://localhost:3001/players").then((response) => {
      setPlayerList(response.data);
    });
  };

  const updatePlayerFoot = (id) => {
    Axios.put("http://localhost:3001/update", { foot: newFoot, id: id }).then(
      (response) => {
        setPlayersList(
          playerList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  nameBody: name,
                  ageBody: age,
                  countryBody: country,
                  weightBody: weight,
                  heightBody: height,
                  footBody: newFoot
                }
              : val;
          })
        );
      }
    );
  };

  const deletePlayer = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setPlayerList(
        playerList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };



  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
        <label>Age:</label>
        <input type="number" onChange={(event) => setAge(event.target.value)} value={age} />
        <label>Country:</label>
        <input type="text" onChange={(event) => setCountry(event.target.value)} value={country} />
        <label>Weight:</label>
        <input type="number" onChange={(event) => setWeight(event.target.value)} value={weight} />
        <label>Height:</label>
        <input type="number" onChange={(event) => setHeight(event.target.value)} value={height} />
        <label>Foot:</label>
        <input type="text" onChange={(event) => setFoot(event.target.value)} value={foot} />
        <button onClick={addPlayer}>Add Player</button>
      </div>

      <div className="players">
        <button onClick={getPlayers}>Show Players</button>

        {playerList.map((val, key) => {
          return (
            <div className="player" key={key}>
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Age: {val.age}</h3>
                <h3>Country: {val.country}</h3>
                <h3>Weight: {val.weight}</h3>
                <h3>Height: {val.height}</h3>
                <h3>Foot: {val.foot}</h3>
              </div>
              <div>
                <input
                  type="text" placeholder="2000..." onChange={(event) => {setNewFoot(event.target.value);}}
                />
                <button onClick={() => updatePlayerFoot(val.id)}>Update</button>
                <button onClick={() => deletePlayer(val.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
