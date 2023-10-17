export function isCourseSelected(course, selectedClasses) {
    return selectedClasses.some((selectedCourse) =>
      selectedCourse.number === course.number &&
      selectedCourse.meets === course.meets &&
      selectedCourse.term === course.term &&
      selectedCourse.title === course.title 
    );
  }
