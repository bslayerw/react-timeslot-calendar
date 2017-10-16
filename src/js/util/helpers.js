import moment from 'moment';

let helpers = {};
export default helpers;

helpers.getMomentFromCalendarJSDateElement = (dayElement) => {
  return moment([
    dayElement.year,
    dayElement.month - 1,
    dayElement.date,
  ]);
};

helpers.timeslotsForDayOfWeek = (dayOfWeek, timeslots) => {
  // check if time slots is an array, if it is this falls back to
  // old behavior of specifying a single timeslot array for all days
  if (timeslots.length === 0) {
    return timeslots;
  }
  // if it's an array of array of arrays then we have one of each day of weel
  const firstElement = timeslots[0];
  if (Array.isArray(firstElement)) {
    if (firstElement.length > 0 && Array.isArray(firstElement[0])) {
    // make sure we have an element for this day or default to the last one specific
      if (dayOfWeek >= timeslots.length) {
      // out of bounds, return the last set of timeslots
        return timeslots[timeslots.length-1];
      }
      else {
        return timeslots[dayOfWeek];
      }
    }
    else {
      return timeslots;
    }

  }
  else {
    //default to old behavior
    return timeslots;
  }
};
