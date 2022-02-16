// DATABASE CONNECTION
const pgp = require("pg-promise")({
  /* initialization options */
  capSQL: true, // capitalize all generated SQL
});
const db = require("../database/db");

//GET
const getAllClasses = async () => {
    try {
        const classes = await db.any("SELECT * FROM classes")
        return classes
    } catch (error) {
        return error
    }
}

const getClassById = async (id) => {
    try {
        let fullClass = {}
        fullClass['class'] = await db.any('SELECT * FROM classes WHERE id=$1', [id]);
        fullClass['learning_objectives'] = await db.any('SELECT id, objective_text FROM learning_objectives WHERE class_id=$1', [id]);
        fullClass['video_recording'] = await db.any('SELECT id, video_url FROM video_recording WHERE class_id=$1', [id]);
        fullClass['source_code'] = await db.any('SELECT id, code_url FROM source_code WHERE class_id=$1', [id]);
        fullClass['outline'] = await db.any('SELECT id, outline_url FROM outline WHERE class_id=$1', [id]);
        fullClass['linked_lessons'] = await db.any('SELECT id, link_text, link_url FROM linked_lessons WHERE class_id=$1', [id]);
        return fullClass
    } catch (error) {
        return error
    }
}

// POST
const createClass = async (singleClass) => {
    console.log(singleClass)
    try {
        let singleNewClass = await db.one('INSERT INTO classes(order_id, title) VALUES($1, $2) RETURNING *', [singleClass.order_id, singleClass.title]);
        return singleNewClass;
    } catch (error) {
        return error;
    }
}

const createLearningObjectives = async (learningObjectives) => {
    let classId = await db.any('SELECT id FROM classes WHERE title=$1', [learningObjectives.title]);
    const cs = new pgp.helpers.ColumnSet(["class_id", "objective_text"], { table: "learning_objectives" });
    const values = learningObjectives.objective_texts.map((text) => {
        return { "class_id": classId[0].id, "objective_text": text}
    })
    const query = pgp.helpers.insert(values, cs);
    await db.none(query);
}

const createVideoRecording = async (videoRecording) => {
    let classId = await db.any("SELECT id FROM classes WHERE title=$1", [videoRecording.title,]);
    try {
        let newVideoRecording = await db.one('INSERT INTO video_recording(class_id, video_url) VALUES($1, $2) RETURNING *', [classId[0].id, videoRecording.video_url])
        return newVideoRecording
    } catch (error) {
        return error
    }
}

const createSourceCode = async (sourceCode) => {
  let classId = await db.any("SELECT id FROM classes WHERE title=$1", [
    sourceCode.title,
  ]);
  try {
    let newSourceCode = await db.one(
      "INSERT INTO source_code(class_id, code_url) VALUES($1, $2) RETURNING *",
      [classId[0].id, sourceCode.code_url]
    );
    return newSourceCode;
  } catch (error) {
    return error;
  }
};

const createOutline = async (outline) => {
  let classId = await db.any("SELECT id FROM classes WHERE title=$1", [
    outline.title,
  ]);
  try {
    let newOutline = await db.one(
      "INSERT INTO outline(class_id, outline_url) VALUES($1, $2) RETURNING *",
      [classId[0].id, outline.outline_url]
    );
    return newOutline;
  } catch (error) {
    return error;
  }
};

const createLinkedLessons = async (linkedLessons) => {
  let classId = await db.any("SELECT id FROM classes WHERE title=$1", [
    linkedLessons.title,
  ]);
  const cs = new pgp.helpers.ColumnSet(["class_id", "link_text", "link_url"], {table: "linked_lessons",});
  const values = linkedLessons.links.map((obj) => {
    return { class_id: classId[0].id, link_text: obj.link_text, link_url: obj.link_url};
  });
  const query = pgp.helpers.insert(values, cs);
  await db.none(query);
};

// PUT
const updateClassTitle = async (id, singleClass) => {
    try {
        const updatedClassTitle = await db.one("UPDATE classes SET order_id=$1, title=$2 WHERE id=$3 RETURNING *", [singleClass.order_id, singleClass.title, id])
        return updatedClassTitle
    } catch (error) {
        return error
    }
}

const updateLearningObjective = async (id, learningObjective) => {
  try {
    const updatedLearningObjective = await db.one("UPDATE learning_objectives SET objective_text=$1, class_id=$2 WHERE id=$3 RETURNING *", [learningObjective.objective_text, learningObjective.class_id, id])
    return updatedLearningObjective
  } catch (error) {
    return error
  }
}

const updateVideoRecording = async (id, videoRecording) => {
  try {
    const updatedVideoRecording = await db.one(
      "UPDATE video_recording SET video_url=$1, class_id=$2 WHERE id=$3 RETURNING *",
      [videoRecording.video_url, videoRecording.class_id, id]
    );
    return updatedVideoRecording;
  } catch (error) {
    return error;
  }
};

const updateSourceCode = async (id, sourceCode) => {
  try {
    const updatedSourceCode = await db.one(
      "UPDATE source_code SET code_url=$1, class_id=$2 WHERE id=$3 RETURNING *",
      [sourceCode.code_url, sourceCode.class_id, id]
    );
    return updatedSourceCode;
  } catch (error) {
    return error;
  }
};

const updateOutline = async (id, outline) => {
  try {
    const updatedOutline = await db.one(
      "UPDATE outline SET outline_url=$1, class_id=$2 WHERE id=$3 RETURNING *",
      [outline.outline_url, outline.class_id, id]
    );
    return updatedOutline;
  } catch (error) {
    return error;
  }
};


const updateLinkedLesson = async (id, linkedLesson) => {
  try {
    const updatedLinkedLesson = await db.one(
      "UPDATE linked_lessons SET link_text=$1, link_url=$2, class_id=$3 WHERE id=$4 RETURNING *",
      [linkedLesson.link_text, linkedLesson.link_url, linkedLesson.class_id, id]
    );
    return updatedLinkedLesson;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteClass = async (singleClass) => {
    try {
        const deletedClass = await db.one("DELETE FROM classes WHERE id=$1 RETURNING *", [singleClass.id])
        return deletedClass
    } catch (error) {
        return error
    }
}

// EXPORT
module.exports = {
    getAllClasses,
    getClassById,
    createClass,
    createLearningObjectives,
    createLinkedLessons,
    createVideoRecording,
    createSourceCode,
    createOutline,
    deleteClass,
    updateClassTitle,
    updateLearningObjective,
    updateVideoRecording,
    updateSourceCode,
    updateOutline,
    updateLinkedLesson
};
