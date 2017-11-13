export const ADD_SCHEDULE = 'ADD_SCHEDULE'
export function addSchedule(schedule) {
  return {
    type: ADD_SCHEDULE,
    payload: schedule
  }
}
