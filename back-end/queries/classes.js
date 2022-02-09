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
        fullClass['learning_objectives'] = await db.any('SELECT objective_text FROM learning_objectives WHERE class_id=$1', [id]);
        fullClass['video_recording'] = await db.any('SELECT video_url FROM video_recording WHERE class_id=$1', [id]);
        fullClass['source_code'] = await db.any('SELECT code_url FROM source_code WHERE class_id=$1', [id]);
        fullClass['outline'] = await db.any('SELECT outline_url FROM outline WHERE class_id=$1', [id]);
        fullClass['linked_lessons'] = await db.any('SELECT link_text, link_url FROM linked_lessons WHERE class_id=$1', [id]);
        return fullClass
    } catch (error) {
        return error
    }
}

// POST
const createClass = async (singleClass) => {
    console.log(singleClass)
    try {
        let singleNewClass = await db.one('INSERT INTO classes(title) VALUES($1) RETURNING *', [singleClass.title]);
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
  const cs = new pgp.helpers.ColumnSet(["class_id", "link_text", "link_url"], {
    table: "linked_lessons",
  });
  const values = linkedLessons.links.map((obj) => {
    return { class_id: classId[0].id, link_text: obj.link_text, link_url: obj.link_url};
  });
  const query = pgp.helpers.insert(values, cs);
  await db.none(query);
};

// PUT


// DELETE
const deleteClass = async (title) => {
    try {
        const deletedClass = await db.one("DELETE FROM classes WHERE title=$1 RETURNING *", [title])
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
    deleteClass
};
