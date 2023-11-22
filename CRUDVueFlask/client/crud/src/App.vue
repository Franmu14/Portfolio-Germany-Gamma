<template>
  <div class="App">
    <div class="information">
      <label>Name:</label>
      <input type="text" v-model="name" />
      <label>Age:</label>
      <input type="number" v-model.number="age" />
      <label>Country:</label>
      <input type="text" v-model="country" />
      <label>Weight:</label>
      <input type="number" v-model.number="weight" />
      <label>Height:</label>
      <input type="number" v-model.number="height" />
      <label>Foot:</label>
      <input type="text" v-model="foot" />
      <button @click="addPlayer">Add Player</button>
    </div>

    <div class="players">
      <button @click="getPlayers">Show Players</button>

      <div v-for="(player, index) in playerList" :key="index" class="player">
        <div>
          <h3>Name: {{ player.name }}</h3>
          <h3>Age: {{ player.age }}</h3>
          <h3>Country: {{ player.country }}</h3>
          <h3>Weight: {{ player.weight }}</h3>
          <h3>Height: {{ player.height }}</h3>
          <h3>Foot: {{ player.foot }}</h3>
        </div>
        <div>
          <input type="text" placeholder="2000..." v-model="newFoot" />
          <button @click="updatePlayerFoot(player.id)">Update</button>
          <button @click="deletePlayer(player.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      age: 0,
      country: '',
      weight: 0,
      height: 0,
      foot: '',
      newFoot: '',
      playerList: []
    };
  },
  methods: {
    addPlayer() {
      axios.post('http://localhost:3001/create', {
        nameBody: this.name,
        ageBody: this.age,
        countryBody: this.country,
        weightBody: this.weight,
        heightBody: this.height,
        footBody: this.foot
      }).then(() => {
        this.getPlayers();
      });
    },
    getPlayers() {
      axios.get('http://localhost:3001/players').then((response) => {
        this.playerList = response.data;
      });
    },
    updatePlayerFoot(id) {
      axios.put('http://localhost:3001/update', { foot: this.newFoot, id: id }).then(() => {
        this.playerList = this.playerList.map((val) => {
          return val.id === id ? { ...val, foot: this.newFoot } : val;
        });
      });
    },
    deletePlayer(id) {
      axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
        this.playerList = this.playerList.filter((val) => {
          return val.id !== id;
        });
      });
    }
  }
};
</script>

<style>
.App {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.information {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

}

input {
  width: 300px;
  height: 50px;
  font-size: 20px;
  padding-left: 10px;
  margin: 5px;

}

 button {
  width: 320px;
  height: 50px;
  margin-top: 15px;
} 

 button:hover {
  cursor: pointer;
}
</style>

