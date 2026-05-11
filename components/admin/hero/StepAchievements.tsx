"use client";

import { useState } from "react";
import styles from "./stepachieve.module.scss";

// ─── TYPES ─────────────────────────────────────────

type Achievement = {
  title: string;
  year: string;
  description: string;
};

type StepAchievementsProps = {
  next: () => void;
  prev: () => void;
  formData: {
    achievements?: Achievement[];
  };
  setFormData: (data: any) => void;
};

// ─── COMPONENT ─────────────────────────────────────

export default function StepAchievements({
  next,
  prev,
  formData = {},
  setFormData,
}: StepAchievementsProps) {
  const [achievements, setAchievements] = useState<Achievement[]>(
    formData?.achievements || []
  );

  const [error, setError] = useState<string>("");

  // add new achievement
  const addAchievement = () => {
    setAchievements((prev) => [
      ...prev,
      {
        title: "",
        year: "",
        description: "",
      },
    ]);
  };

  // update field (SAFE)
  const handleChange = (
    index: number,
    field: keyof Achievement,
    value: string
  ) => {
    setAchievements((prev) => {
      const updated = [...prev];

      updated[index] = {
        ...updated[index],
        [field]: value,
      };

      return updated;
    });
  };

  // remove achievement (SAFE)
  const removeAchievement = (index: number) => {
    setAchievements((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  // next step
  const handleNext = () => {
    if (achievements.length === 0) {
      setError("Add at least one achievement");
      return;
    }

    setFormData({
      ...formData,
      achievements,
    });

    next();
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* LEFT */}
        <div className={styles.left}>
          <h1>Add Hero</h1>
          <p>Step 5 of 7</p>
          <p>Achievements</p>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <button
            className={styles.addBtn}
            onClick={addAchievement}
          >
            + Add Achievement
          </button>

          {error && <p className={styles.error}>{error}</p>}

          {/* LIST */}
          <div className={styles.list}>
            {achievements.map((item, index) => (
              <div key={index} className={styles.cardItem}>
                <input
                  type="text"
                  placeholder="Title"
                  value={item.title}
                  onChange={(e) =>
                    handleChange(index, "title", e.target.value)
                  }
                />

                <input
                  type="number"
                  placeholder="Year"
                  value={item.year}
                  onChange={(e) =>
                    handleChange(index, "year", e.target.value)
                  }
                />

                <textarea
                  placeholder="Description"
                  value={item.description}
                  onChange={(e) =>
                    handleChange(index, "description", e.target.value)
                  }
                />

                <button
                  onClick={() => removeAchievement(index)}
                  className={styles.removeBtn}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* ACTIONS */}
          <div className={styles.actions}>
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
  );
}