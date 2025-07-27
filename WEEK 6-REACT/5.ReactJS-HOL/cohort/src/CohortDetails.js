import React from "react";
import styles from "./CohortDetails.module.css";
export default function CohortDetails({ cohort }) {
  const statusClass =
    cohort.status.toLowerCase() === "ongoing"
      ? styles.statusOngoing
      : styles.statusCompleted;
  return (
    <div className={styles.box}>
      <h3 className={statusClass}>{cohort.name}</h3>
      <dl>
        <dt>Status:</dt>
            <dd>{cohort.status}</dd>
            <dt>Coach:</dt>
            <dd>{cohort.coach}</dd>
            <dt>Trainee:</dt>
            <dd>{cohort.trainee}</dd>
            <dt>Started On:</dt>
            <dd>{cohort.startDate}</dd>
      </dl>
    </div>
  );
}
