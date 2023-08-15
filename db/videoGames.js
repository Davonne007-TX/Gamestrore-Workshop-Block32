const client = require('./client');
const util = require('util');

const query = `
    SELECT * FROM videoGames
    `;

// GET - /api/video-games - get all video games    
async function getAllVideoGames() {
    try {
        const { rows } = await client.query(query);
        return rows;
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

// POST - /api/video-games - create a new video game    ////////need help
  //try catch
  //learn how to create, add to a database
  //return something 
async function createVideoGame(body) {
    const {name, description, price, inStock, isPopular, imgUrl } = body;
    try {
        const { rows: [videoGames]} = await client.query(`
            INSERT INTO videoGames(name, description, price, "inStock", "isPopular", "imgUrl") 
            VALUES($1, $2, $3, $4, $5, $6)
            SELECT * FROM videoGames;
        `, [name, description, price, inStock, isPopular, imgUrl])
        
    } catch (error) {
        throw error
    }
}


// PUT - /api/video-games/:id - update a single video game by id
//a try catch
async function updateVideoGame(id, fields = {}) {
   try {

   } catch {
     throw(error)
   }
}

// DELETE - /api/video-games/:id - delete a single video game by id
//a try catch
//follow logic from getVideoFromId
//learn how to delete in postgres
// return videoGame
//catch error
async function deleteVideoGame(id) {
    try {
        const { rows: [videoGame] } = await client.query( `
            DELETE FROM videoGames
            WHERE id = $1;
        `, [id])
        
        return videoGame
    } catch (error) {
        throw(error)
    }
}

module.exports = {
    getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame
}