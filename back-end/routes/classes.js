var express = require("express");
var router = express.Router();
var classesQueries = require("../queries/classes");

router.get("/all", async (req, res, next) => {
  try {
    const classes = await classesQueries.getAllClasses();
    res.json({
      status: "success",
      message: `Classes retrieved!`,
      payload: classes,
    });
  } catch (error) {
    res.json({
      status: "failure",
      message: "Oops! All Errors!!",
      error: error,
      payload: null,
    });
    throw error;
  }
});

router.get("/:class_id", async (req, res, next) => {
  try {
      const classId = req.params.class_id;
    const singleClass = await classesQueries.getClassById(classId);
    res.json({
      status: "success",
      message: `Single Class retrieved!`,
      payload: singleClass,
    });
  } catch (error) {
    res.json({
      status: "failure",
      message: "Oops! All Errors!!",
      error: error,
      payload: null,
    });
    throw error;
  }
});

router.get("/learning_objectives/:class_id", async (req, res, next) => {
  try {
    const classId = req.params.class_id;
    const learningObjectives = await classesQueries.getLearningObjectivesByClassId(classId);
    res.json({
      status: "success",
      message: `Single Class Learning Objectives retrieved!`,
      payload: learningObjectives,
    });
  } catch (error) {
    res.json({
      status: "failure",
      message: "Oops! All Errors!!",
      error: error,
      payload: null,
    });
    throw error;
  }
});

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
