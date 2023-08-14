const client = require('./client');
const util = require('util');

const query = `
    SELECT * FROM videoGames
    `;

// GET - /api/video-games - get all video games    --//this is done 
async function getAllVideoGames() {
    try {
        const { rows: videoGames } = await client.query(query);
        return videoGames;
    } catch (error) {
        throw new Error("Make sure you have replaced the REPLACE_ME placeholder.")
    }
}

// GET - /api/video-games/:id - get a single video game by id
async function getVideoGameById(id) {
    try {
        const { rows: [videoGame] } = await client.query(`
            SELECT * FROM videoGames
            WHERE id = $1;
        `, [id]);
        return videoGame;
    } catch (error) {
        throw error
    }
}

// POST - /api/video-games - create a new video game
  //try catch
  //learn how to create, add to a database
  //return something 
  //catch error
async function createVideoGame(body) {
   try {
        const { rows: [videoGame] } = await client.query(`
            INSERT INTO videoGames (name, description, price, isPopular, imgUrl)
            VALUES ('Cobra Kai', 'karate martial arts', 60, true, "https://i.postimg.cc/rskdPVVL/thao-lee-Xl-il-WBKJNk-unsplash.jpg")
        
        `, [body])
        return videoGame;
   } catch (error) {
    throw error
   }
}

// PUT - /api/video-games/:id - update a single video game by id
async function updateVideoGame(id, fields = {}) {
    // LOGIC GOES HERE
}

// DELETE - /api/video-games/:id - delete a single video game by id
async function deleteVideoGame(id) {
    // LOGIC GOES HERE
}

module.exports = {
    getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame
}