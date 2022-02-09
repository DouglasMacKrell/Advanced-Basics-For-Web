var express = require("express");
var router = express.Router();
var classesQueries = require("../queries/classes");

//all ids and titles of active classes
router.get("/all", async (req, res) => {
    const allClasses = await classesQueries.getAllClasses();
    if(allClasses) {
        res.status(200).json(allClasses)
    } else {
        res.status(500).json({error: "Server error"})
    }
});

// all data connected to a specific class
router.get("/:class_id", async (req, res, next) => {
    const classId = req.params.class_id;
    const singleClass = await classesQueries.getClassById(classId);
    if (singleClass) {
        res.status(200).json(singleClass)
    } else {
        res.status(500).json({error: "Oops, all server errors!"})
    }
});

// create a new class with available data

// update a class by id

// delete a class by id

// router.get("/season/:season_id", async (req, res, next) => {
//   try {
//     const seasonId = req.params.season_id;
//     const allEpisodesBySeason = await episodesQueries.getAllEpisodesBySeasonId(
//       seasonId
//     );
//     res.json({
//       status: "success",
//       message: `All episodes of season ${seasonId} retrieved!`,
//       payload: allEpisodesBySeason,
//     });
//   } catch (err) {
//     res.json({
//       status: "failure",
//       error: error,
//       message: "Oops! All Errors!",
//       payload: null,
//     });
//     throw error;
//   }
// });

module.exports = router;
