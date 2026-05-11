"use client";

import { useState } from "react";
import styles from "./stepsource.module.scss";

// ─── TYPES ─────────────────────────────────────────

type Source = {
  source_title: string;
  source_link: string;
};

type StepSourcesProps = {
  next: () => void;
  prev: () => void;
  formData: {
    sources?: Source[];
  };
  setFormData: (data: any) => void;
};

// ─── COMPONENT ─────────────────────────────────────

export default function StepSources({
  next,
  prev,
  formData = {},
  setFormData,
}: StepSourcesProps) {
  const [sources, setSources] = useState<Source[]>(
    formData?.sources || []
  );

  const [error, setError] = useState<string>("");

  // add new source
  const addSource = () => {
    setSources((prev) => [
      ...prev,
      {
        source_title: "",
        source_link: "",
      },
    ]);
  };

  // update field (SAFE)
  const handleChange = (
    index: number,
    field: keyof Source,
    value: string
  ) => {
    setSources((prev) => {
      const updated = [...prev];

      updated[index] = {
        ...updated[index],
        [field]: value,
      };

      return updated;
    });
  };

  // remove source (SAFE)
  const removeSource = (index: number) => {
    setSources((prev) => prev.filter((_, i) => i !== index));
  };

  // next step
  const handleNext = () => {
    if (sources.length === 0) {
      setError("Add at least one source");
      return;
    }

    setFormData({
      ...formData,
      sources,
    });

    next();
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* LEFT */}
        <div className={styles.left}>
          <h1>Add Hero</h1>
          <p>Step 6 of 7</p>
          <p>Sources / References</p>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <button className={styles.addBtn} onClick={addSource}>
            + Add Source
          </button>

          {error && <p className={styles.error}>{error}</p>}

          {/* LIST */}
          <div className={styles.list}>
            {sources.map((item, index) => (
              <div key={index} className={styles.cardItem}>
                <input
                  type="text"
                  placeholder="Source Title (Wikipedia, Book, etc.)"
                  value={item.source_title}
                  onChange={(e) =>
                    handleChange(index, "source_title", e.target.value)
                  }
                />

                <input
                  type="url"
                  placeholder="Source Link (https://...)"
                  value={item.source_link}
                  onChange={(e) =>
                    handleChange(index, "source_link", e.target.value)
                  }
                />

                <button
                  onClick={() => removeSource(index)}
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