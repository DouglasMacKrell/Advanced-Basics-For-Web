// DATABASE CONNECTION
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
const createClass = async (req, res, next) => {
    try {
        let title = req.body.title;
        let singleClass = db.none('INSERT INTO classes(title) VALUES()')
        res.status(200).json({
            status: "success",
            message: "Made that Class for you, buddy!"
        })
    } catch (error) {
        next(error)
    }

}

// PATCH

// EXPORT
module.exports = {
    getAllClasses,
    getClassById
};
