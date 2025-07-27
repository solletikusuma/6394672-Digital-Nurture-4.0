import React from "react";
import CohortDetails from "./CohortDetails";
const cohorts = [
  {
    name: "Maven",
    status: "ongoing",
    coach: "Honey",
    trainee: "Danny",
    startDate: "2025-04-15"
  },
  {
    name: "Spring Boot",
    status: "completed",
    coach: "Javier",
    trainee: "Sophie",
    startDate: "2025-10-05"
  },
];
function App() {
  return (
    <div>
      {cohorts.map((cohort) => (
        <CohortDetails cohort={cohort} key={cohort.name} />
      ))}
    </div>
  );
}

export default App;
