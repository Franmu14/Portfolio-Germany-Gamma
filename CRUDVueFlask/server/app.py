from flask import Flask, request, jsonify
import pymysql
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Database Connection
db = pymysql.connect(
    user="root",
    host="localhost",
    password="password",
    database="playerSystem"
)

# Endpoint to create a player
@app.route('/create', methods=['POST'])
def create_player():
    data = request.json
    name = data['name']
    age = data['age']
    country = data['country']
    height = data['height']
    weight = data['weight']
    foot = data['foot']

    cursor = db.cursor()
    cursor.execute(
        "INSERT INTO players (name, age, country, height, weight, foot) VALUES (%s, %s, %s, %s, %s, %s)",
        (name, age, country, height, weight, foot)
    )
    db.commit()
    cursor.close()
    return "Values Inserted"

# Endpoint to get all players
@app.route('/players', methods=['GET'])
def get_players():
    cursor = db.cursor(pymysql.cursors.DictCursor)
    cursor.execute("SELECT * FROM players")
    players = cursor.fetchall()
    cursor.close()
    return jsonify(players)

# Endpoint to update a player's foot by ID
@app.route('/update', methods=['PUT'])
def update_foot():
    data = request.json
    id = data['id']
    foot = data['foot']

    cursor = db.cursor()
    cursor.execute("UPDATE players SET foot = %s WHERE id = %s", (foot, id))
    db.commit()
    cursor.close()
    return "Player's foot updated"

# Endpoint to delete a player by ID
@app.route('/delete/<int:id>', methods=['DELETE'])
def delete_player(id):
    cursor = db.cursor()
    cursor.execute("DELETE FROM players WHERE id = %s", id)
    db.commit()
    cursor.close()
    return "Player deleted"

if __name__ == '__main__':
    app.run(port=3001)
