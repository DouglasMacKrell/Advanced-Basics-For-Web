import React, { useEffect, useState } from "react";
import './ClassCard.scss'

function ClassCard(singleClass) {
    const [fullClass, setFullClass] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/api/classes/${singleClass.classInfo.id}`)
        .then((response) => response.json())
        .then((data) => {
            setFullClass(data)
        })
    }, [])

    console.log("fullClass", fullClass)

  return (
    <div className="classCard">
      <div className="classCard__wrapper">
        {fullClass.class && fullClass.class.length > 0 && (
          <div className="classCard__title">
            <h2>{fullClass.class[0].title}</h2>
          </div>
        )}
        {fullClass.learning_objectives &&
          fullClass.learning_objectives.length > 0 && (
            <div className="classCard__objectives">
              <p>Learning Objectives:</p>
              <ol>
                {fullClass.learning_objectives
                  .sort((a, b) => a.order_id - b.order_id)
                  .map((obj) => {
                    return <li key={obj.id}>{obj.objective_text}</li>;
                  })}
              </ol>
            </div>
          )}
        {fullClass.video_recording && fullClass.video_recording.length > 0 && (
          <div className="classCard__video">
            <a href={fullClass.video_recording[0].video_url}>Video Recording</a>
          </div>
        )}
        {fullClass.source_code && fullClass.source_code.length > 0 && (
          <div className="classCard__code">
            <a href={fullClass.source_code[0].code_url}>Source Code</a>
          </div>
        )}
        {fullClass.outline && fullClass.outline.length > 0 && (
          <div className="classCard__outline">
            <a href={fullClass.outline[0].outline_url}>Outline</a>
          </div>
        )}
        {fullClass.linked_lessons && fullClass.linked_lessons.length > 0 && (
          <div className="classCard__lessons">
            <ul>
              {fullClass.linked_lessons
                .sort((a, b) => a.order_id - b.order_id)
                .map((obj) => {
                  return (
                    <li key={obj.id}>
                      <a href={obj.link_url}>{obj.link_text}</a>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClassCard