import React from 'react';

export default function CourseList({courseList}) {
  return (
    <div>
        {courseList.map(x=> 
        <p>{x.term} CS {x.number}: {x.title}</p>
        )}
    </div>
  );
}
