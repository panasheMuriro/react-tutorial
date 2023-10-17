import { hasClash } from "./hasClash";

// Helper function to label courses in courseList that can clash with a boolean
export function labelClashingCourses(courseList, selectedCourses) {
    return courseList.map((course) => {
      const clashes = selectedCourses.some((selectedCourse) =>
        hasClash(course, selectedCourse)
      );
      return { ...course, clashes };
    });
  }