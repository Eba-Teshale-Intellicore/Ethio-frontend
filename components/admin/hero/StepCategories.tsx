"use client";

import { useState } from "react";
import styles from "./stepcateg.module.scss";

const categoriesList = [
  { id: 1, name: "Athlete" },
  { id: 2, name: "Scientist" },
  { id: 3, name: "Doctor" },
  { id: 4, name: "Leader" },
  { id: 5, name: "Artist" },
  { id: 6, name: "Activist" },
  { id: 7, name: "Engineer" },
  { id: 8, name: "Freedom Fighter" },
  { id: 9, name: "Educator" },
  { id: 10, name: "Inventor" }
];

export default function StepCategories({
  next,
  prev,
  formData = {},
  setFormData
}: any) {
  const [selected, setSelected] = useState<number[]>(
    formData?.categories || []
  );

  const [error, setError] = useState("");

  const toggleCategory = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(c => c !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleNext = () => {
    if (selected.length === 0) {
      setError("Select at least one category");
      return;
    }

    setError("");

    setFormData({
      ...formData,
      categories: selected
    });

    next();
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>

        {/* LEFT */}
        <div className={styles.left}>
          <p>Add Hero</p>
          <p>Step 3 of 7</p>
          <p>Categories</p>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.cate}>

            <p className={styles.title}>Choose categories</p>

            <div className={styles.grid}>
              {categoriesList.map(cat => (
                <div key={cat.id}>
                  <input
                    id={`cat-${cat.id}`}
                    type="checkbox"
                    checked={selected.includes(cat.id)}
                    onChange={() => toggleCategory(cat.id)}
                    hidden
                  />

                  <label
                    htmlFor={`cat-${cat.id}`}
                    className={`${styles.checkbox} ${
                      selected.includes(cat.id) ? styles.active : ""
                    }`}
                  >
                    {cat.name}
                  </label>
                </div>
              ))}
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.actions}>
              <button onClick={prev} className={styles.back}>
                ← Back
              </button>

              <button
                onClick={handleNext}
                className={styles.submit}
                disabled={selected.length === 0}
              >
                Next →
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}