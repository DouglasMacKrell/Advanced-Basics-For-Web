import React, { useEffect, useState } from "react";



function ClassList() {

    const [classesOverview, setClassesOverview] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/api/classes/all")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
              setClassesOverview(data);
            });
    }, []);
    
    useEffect(() => {
        let fullClasses = []
        classesOverview.map(singleClass => {
            fetch(`http://localhost:3001/api/classes/${singleClass.id}`)
            .then((response) => response.json())
            .then((data) => {
                fullClasses.push(data)
            })
        })
        console.log(fullClasses)
    }, [classesOverview])

  return (
    <div className="classList">
        ClassList
    </div>
  );
}

export default ClassList;
