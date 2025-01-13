const currentDate = new Date();
const currentYear = currentDate?.getFullYear();
export const commonSubjects = [
  "Physics",
  "Chemistry",
  "Mathematics",
  "Additional Mathematics",
  "English",
  "English Literature",
  "Biology",
  "History",
  "Geography",
  "Islamic Studies",
  "Computer Science",
  "Urdu",
];

export const programTitles = [
  "IBDP",
  "IBMYP",
  "IGCSE",
  "O-Level",
  "AS-Level",
  "A2-Level",
  "Matriculation (SSC)",
  "HSSC",
];
export const programs = [
  {
    title: "IBDP",
    subjects: [...commonSubjects],
    examDates: [
      `May ${currentYear}`,
      `November ${currentYear}`,
      `May ${currentYear + 1}`,
      `November ${currentYear + 1}`,
      `May ${currentYear + 2}`,
      `November ${currentYear + 2}`,
    ],
  },
  {
    title: "IBMYP",
    subjects: [...commonSubjects],
    examDates: ["MYP 1", "MYP 2", "MYP 3", "MYP 4", "MYP 5 (Final Year)"],
  },
  {
    title: "IGCSE",
    subjects: [...commonSubjects],
    examDates: [
      `May/June ${currentYear}`,
      `Oct/Nov ${currentYear}`,
      `May/June ${currentYear + 1}`,
      `Oct/Nov ${currentYear + 1}`,
      `May/June ${currentYear + 2}`,
      `Oct/Nov ${currentYear + 2}`,
    ],
  },
  {
    title: "O-Level",
    subjects: [...commonSubjects],
    examDates: [
      `May/June ${currentYear}`,
      `Oct/Nov ${currentYear}`,
      `May/June ${currentYear + 1}`,
      `Oct/Nov ${currentYear + 1}`,
      `May/June ${currentYear + 2}`,
      `Oct/Nov ${currentYear + 2}`,
    ],
  },
  {
    title: "AS-Level",
    subjects: [...commonSubjects],
    examDates: [
      `May/June ${currentYear}`,
      `Oct/Nov ${currentYear}`,
      `May/June ${currentYear + 1}`,
      `Oct/Nov ${currentYear + 1}`,
      `May/June ${currentYear + 2}`,
      `Oct/Nov ${currentYear + 2}`,
    ],
  },
  {
    title: "A2-Level",
    subjects: [...commonSubjects],
    examDates: [
      `May/June ${currentYear}`,
      `Oct/Nov ${currentYear}`,
      `May/June ${currentYear + 1}`,
      `Oct/Nov ${currentYear + 1}`,
      `May/June ${currentYear + 2}`,
      `Oct/Nov ${currentYear + 2}`,
    ],
  },
  {
    title: "Matriculation (SSC)",
    subjects: [...commonSubjects],
    examDates: [`SSC-I`, `SSC-II`],
  },
  {
    title: "HSSC",
    subjects: [...commonSubjects],
    examDates: [`HSSC-I`, `HSSC-II`],
  },
];
