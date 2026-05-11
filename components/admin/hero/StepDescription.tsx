"use client";

import { useState } from "react";
import styles from "./stepdescrip.module.scss";

export default function StepDescription({ next, prev, formData = {}, setFormData }: any) {
  const [localData, setLocalData] = useState({
    short_description: formData?.short_description || "",
    full_biography: formData?.full_biography || "",
    full_history: formData?.full_history || ""
  });

  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setLocalData({
      ...localData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (!localData.short_description) {
      setError("Short description is required");
      return;
    }

    setError("");

    setFormData({
      ...formData,
      ...localData
    });

    next();
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>

        <div className={styles.left}>
          <p>Add Hero</p>
          <p>Step 2 of 7</p>
          <p>Description</p>
        </div>

        <div className={styles.right}>
          <div className={styles.all}>

            <div className={styles.des}>
              <p>Short Description</p>
              <textarea
                name="short_description"
                className={styles.short}
                placeholder="Short summary of the hero"
                value={localData.short_description}
                onChange={handleChange}
              />
            </div>

            <div className={styles.des}>
              <p>Biography</p>
              <textarea
                name="full_biography"
                className={styles.bio}
                placeholder="Detailed biography..."
                value={localData.full_biography}
                onChange={handleChange}
              />
            </div>

            <div className={styles.des}>
              <p>Full History</p>
              <textarea
                name="full_history"
                className={styles.full}
                placeholder="Complete story and historical context..."
                value={localData.full_history}
                onChange={handleChange}
              />
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.action}>
              <button onClick={prev} className={styles.back}>
                ← Back
              </button>

              <button onClick={handleNext} className={styles.submit}>
                Next →
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}