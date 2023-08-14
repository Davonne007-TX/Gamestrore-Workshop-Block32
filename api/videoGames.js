const express = require('express');
const router = express.Router();

// const REPLACE_ME = 'HELP REPLACE ME!!!!';

const { getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame } = require('../db/videoGames');

// GET - /api/video-games - get all video games   ----//this is done 
router.get('/', async (req, res, next) => {
    try {
        const videoGames = await getAllVideoGames();
        res.send(videoGames);
    } catch (error) {
        next(error);
    }
});

// GET - /api/video-games/:id - get a single video game by id
//replace me with the params because its an id
//req is not highlighted, need to highlight it 
router.get('/:id', async (req, res, next) => {
    try {
        const videoGame = await getVideoGameById(req.params.id);
        res.send(videoGame);
    } catch (error) {
        next(error);
    }
});

// POST - /api/video-games - create a new video game
// a try catch
//await the function
//res.send that variable 
//catch error
router.post('/', async (req, res, next) => {
    try {
        const newGame = await createVideoGame(req.body)
        res.send(newGame)

    } catch (error) {
        next(error)
    }
});


// PUT - /api/video-games/:id - update a single video game by id
// a try catch 
//set a variable and await the function, setting the req, params and id
//send that variable
//catch error
router.put('/:id', async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
});

// DELETE - /api/video-games/:id - delete a single video game by id
//a try catch block
//set a variable again to await the delete video game function, set the req.params.id
//catch error
router.delete('/:id', async (req, res, next) => {
   try {

   } catch (error) {
    next(error)
   }
});



module.exports = router;