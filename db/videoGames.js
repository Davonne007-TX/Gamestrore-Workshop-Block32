const client = require('./client');
const util = require('util');

// GET - /api/video-games - get all video games    
async function getAllVideoGames() {
    try {
        const { rows } = await client.query('SELECT * FROM videoGames');
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
  //return something, return the videoGame
  //catch error
async function createVideoGame(body) {
    const {name, description, price, inStock, isPopular, imgUrl } = body;
    try {
        const { rows: [videoGame] } = await client.query(`
            INSERT INTO videoGames (name, description, price, "inStock", "isPopular", "imgUrl")
            VALUES($1, $2, $3, $4, $5, $6)
            RETURNING * 
        `, [name, description, price, inStock, isPopular, imgUrl])
        return videoGame
        
    } catch (error) {
        throw error
    }
}

// PUT - /api/video-games/:id - update a single video game by id
//a try catch
//look at update boardGame - watch lectures
//look up about how to update in SQL
//return videoGame
//catch error
async function updateVideoGame(id, fields = {}) {
    const setString = Object.keys(fields).map((key, index) => `"${key}"=$${index + 1}`).join(', ');
    if (setString.length === 0) {
        return;
    }
    try {
        const query = `
            UPDATE videoGames
            SET ${setString}
            WHERE id = $${Object.keys(fields).length + 1}
            RETURNING *;
        `;
        const values = [...Object.values(fields), id];

        const { rows: [videoGame] } = await client.query(query, values);
        return videoGame;
    } catch (error) {
        throw error;
    }
}


// DELETE - /api/video-games/:id - delete a single video game by id
//a try catch
//follow logic from getVideoFromId
//learn how to delete in postgres
// return videoGame
//catch error, throw error
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


