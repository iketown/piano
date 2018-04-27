// TODO turn this into an object {octaves: etc}

export const octavesChapter = [
  {
    title: "OCTAVES",
    information: `There are many keys on a piano (up to 88!)
          but really, there are only 12. after that they repeat.  \n
          Notice how the black keys are a repeating pattern of 2 - 3 - 2 - 3 etc?`,
    cta: `I'll select a note and you choose the matching one`,
    tests: [
      {
        questionNotes: [{ note: "F#1" }],
        correctAnswer: ["F#2"]
      },
      {
        questionNotes: [{ note: "A2" }],
        correctAnswer: ["A1"]
      },
      {
        questionNotes: [{ note: "D2" }],
        correctAnswer: ["D1"]
      },
      {
        questionNotes: [{ note: "E1" }],
        correctAnswer: ["E2"]
      }
    ]
  }
];
