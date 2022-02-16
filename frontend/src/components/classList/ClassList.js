import React, { useEffect, useState } from "react";
import LoadingView from "../loadingView/LoadingView";
import ClassCard from "../classCard/ClassCard";


function ClassList() {

    const [classesOverview, setClassesOverview] = useState([]);
    const [fullClasses, setFullClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/api/classes/all")
        .then(response => response.json())
        .then(data => {
                console.log(data)
                let sortedClasses = data.sort((a, b) => a.order_id - b.order_id)
                setLoading(false);
                setClassesOverview(sortedClasses);
            });
    },[]);
    
    // useEffect(() => {
    //     let capturedClasses = []
    //     classesOverview.map((singleClass) => {
    //         console.log(singleClass)
    //         return (
    //             fetch(`http://localhost:3001/api/classes/${singleClass.id}`)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 capturedClasses.push(data)
    //             })
    //         )
    //     })
    //     setLoading(false)
    //     setFullClasses(capturedClasses)
    // }, [classesOverview])

    console.log(loading, classesOverview)
  return (
    <div className="classList">
        {loading && <LoadingView />}

        {!loading && classesOverview.length > 0 &&
            classesOverview.map((singleClass, index) => {
                console.log(singleClass)
                return (
                    <div>
                        <ClassCard
                            key={index}
                            classInfo={singleClass}
                        />
                    </div>
                )
            })
        
        }
    </div>
  );
}

export default ClassList;
