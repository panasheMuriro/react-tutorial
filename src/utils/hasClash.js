  // Function to check if the selected course clashes with existing selected courses
  export const hasClash = (existingCourse, selectedCourse) => {
    // Check if both courses have non-empty meets
    if (existingCourse.meets && selectedCourse.meets) {
      // Split the meet times into [days, time] e.g. ["MWF", "9:00-9:50"]
      const existingMeet = existingCourse.meets.split(" ");
      const selectedMeet = selectedCourse.meets.split(" ");
      const existingDays = existingMeet[0];
      const selectedDays = selectedMeet[0];

      // Check if there's a day in common
      for (const day of existingDays) {
        if (selectedDays.includes(day)) {
          // There's a day in common, check for time clash
          const existingTime = existingMeet[1].split("-");
          const selectedTime = selectedMeet[1].split("-");
          const existingStart = existingTime[0];
          const existingEnd = existingTime[1];
          const selectedStart = selectedTime[0];
          const selectedEnd = selectedTime[1];

          // Check if the time slots clash
          if (
            (existingStart >= selectedStart && existingStart <= selectedEnd) ||
            (existingEnd >= selectedStart && existingEnd <= selectedEnd)
          ) {
            return true; // Clash detected
          }
        }
      }
    }
    return false; // No clash
  };