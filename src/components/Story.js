const generateStory =

// DESTRUCTURED PARAMETERS
({person, place, situation, degrees, weight}) => {
  return `It was 94 ${degrees} outside, so ${person} went for a walk. When they got to ${place}, they stared in horror for a few moments, then ${situation}. Bob saw the whole thing, but was not surprised — ${person} weighs 300 ${weight}, and it was a hot day.`
}


export function Story({person, place, situation, degrees, weight}) {
  return `<p>${generateStory({person, place, situation, degrees, weight})}</p>`
}