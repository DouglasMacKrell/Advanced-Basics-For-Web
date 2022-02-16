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
        res.status(404).json({error: "Not found!"})
    }
});

// create a new class instance
router.post("/single_class", async (req, res) => {
    try {
        const singleClass = await classesQueries.createClass(req.body)
        res.json(singleClass)
    } catch (error) {
        res.status(400).json({ error: error })
    }
})

router.post("/learning_objectives", async (req, res) => {
    try {
        const learningObjectives = await classesQueries.createLearningObjectives(req.body)
        res.json(learningObjectives)
    } catch (error) {
        res.status(400).json({ error: error })
    }
})

router.post("/video_recording", async (req, res) => {
    try {
        const videoRecording = await classesQueries.createVideoRecording(req.body)
        res.json(videoRecording)
    } catch (error) {
        res.status(400).json({ error: error })
    }
})

router.post("/source_code", async (req, res) => {
  try {
    const sourceCode = await classesQueries.createSourceCode(req.body);
    res.json(sourceCode);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

router.post("/outline", async (req, res) => {
  try {
    const outline = await classesQueries.createOutline(req.body);
    res.json(outline);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

router.post("/linked_lessons", async (req, res) => {
    try {
        const linkedLessons = await classesQueries.createLinkedLessons(req.body)
        res.json(linkedLessons)
    } catch (error) {
        res.status(400).json({ error: error })
    }
})

// update a class by class id
router.put("/:class_id", async (req, res) => {
    const classId = req.params.class_id
    try {
        const updatedClassTitle = await classesQueries.updateClassTitle(classId, req.body)
        res.status(200).json(updatedClassTitle)
    } catch (error) {
        res.status(400).json({ error: error })
    }
})

router.put("/learning_objective/:objective_id", async (req, res) => {
  const objectiveId = req.params.objective_id;
  try {
    const updatedLearningObjective = await classesQueries.updateLearningObjective(
      objectiveId,
      req.body
    );
    res.status(200).json(updatedLearningObjective);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

router.put("/video_recording/:video_id", async (req, res) => {
  const videoId = req.params.video_id;
  try {
    const updatedVideoRecording = await classesQueries.updateVideoRecording(
      videoId,
      req.body
    );
    res.status(200).json(updatedVideoRecording);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

router.put("/source_code/:code_id", async (req, res) => {
  const codeId = req.params.code_id;
  try {
    const updatedSourceCode = await classesQueries.updateSourceCode(
      codeId,
      req.body
    );
    res.status(200).json(updatedSourceCode);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// delete a class by class title
router.delete("/delete", async (req, res) => {
    const deletedClass = classesQueries.deleteClass(req.body)
    if (deletedClass) {
        res.status(200).json(deletedClass)
    } else {
        res.status(404).json("Class not found")
    }
})

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
