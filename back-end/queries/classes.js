// DATABASE CONNECTION
const db = require("../database/db");

//GET
const getAllClasses = async () => {
    return await db.any("SELECT * FROM classes")
}

const getClassById = async (id) => {
    let fullClass = {}
    fullClass['class'] = await db.any('SELECT * FROM classes WHERE id=$1', [id])
    fullClass['learning-objectives'] = await db.any('SELECT objective_text FROM learning_objectives WHERE class_id=$1', [id])
    fullClass['video-recording'] = await db.any('SELECT video_url FROM video_recording WHERE class_id=$1', [id])
    fullClass['source-code'] = await db.any('SELECT code_url FROM source_code WHERE class_id=$1', [id])
    fullClass['outline'] = await db.any('SELECT outline_url FROM outline WHERE class_id=$1', [id])
    fullClass['linked-lessons'] = await db.any('SELECT link_text, link_url FROM linked_lessons WHERE class_id=$1', [id])
    // return await db.any(
    //   "SELECT classes.id, title, objective_text, video_url, code_url, outline_url, link_text, link_url FROM classes FULL JOIN learning_objectives ON classes.id = learning_objectives.class_id FULL JOIN video_recording ON classes.id = video_recording.class_id FULL JOIN source_code ON classes.id = source_code.class_id FULL JOIN outline ON classes.id = outline.class_id FULL JOIN linked_lessons ON classes.id = linked_lessons.class_id WHERE classes.id = $1",
    //   [id]
    // );
    return fullClass
}

// POST
const createClass = async () => {
    
}

// PATCH

// EXPORT
module.exports = {
    getAllClasses,
    getClassById
};
