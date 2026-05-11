"use client";

import styles from "./stepreview.module.scss";

export default function StepReview({
  next,
  prev,
  formData = {},
  setFormData
}: any) {

  const handleSubmit = async () => {
    try {

      const res = await fetch("http://localhost:5000/api/heroes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error("Failed to save hero");
      }

      const data = await res.json();

      alert("Hero created successfully!");

      console.log("Saved:", data);

      next(); // optional redirect or reset

    } catch (err) {
      alert("Error saving hero");
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>

      <div className={styles.card}>

        {/* LEFT */}
        <div className={styles.left}>
          <h1>Review Hero</h1>
          <p>Step 7 of 7</p>
          <p>Final Confirmation</p>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>

          {/* BASIC INFO */}
          <div className={styles.section}>
            <h3>Basic Info</h3>
            <p><b>Name:</b> {formData.name}</p>
            <p><b>Birth:</b> {formData.birth_year}</p>
            <p><b>Death:</b> {formData.death_year}</p>
            <p><b>Era:</b> {formData.era_id}</p>
            <p><b>Nationality:</b> {formData.nationality}</p>

            {formData.hero_image && (
              <img
                src={formData.hero_image}
                className={styles.image}
              />
            )}
          </div>

          {/* DESCRIPTION */}
          <div className={styles.section}>
            <h3>Description</h3>
            <p>{formData.short_description}</p>
            <p>{formData.full_biography}</p>
            <p>{formData.full_history}</p>
          </div>

          {/* CATEGORIES */}
          <div className={styles.section}>
            <h3>Categories</h3>
            {formData.categories?.map((c: any, i: number) => (
              <span key={i} className={styles.tag}>
                Category ID: {c}
              </span>
            ))}
          </div>

          {/* IMAGES */}
          <div className={styles.section}>
            <h3>Gallery</h3>

            <div className={styles.grid}>
              {formData.images?.map((img: any, i: number) => (
                <div key={i}>
                  <img
                    src={img.image_url}
                    className={styles.thumb}
                  />
                  <p>{img.caption}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className={styles.section}>
            <h3>Achievements</h3>

            {formData.achievements?.map((a: any, i: number) => (
              <div key={i}>
                <p>
                  <b>{a.title}</b> ({a.year})
                </p>
                <p>{a.description}</p>
              </div>
            ))}
          </div>

          {/* SOURCES */}
          <div className={styles.section}>
            <h3>Sources</h3>

            {formData.sources?.map((s: any, i: number) => (
              <div key={i}>
                <p>{s.source_title}</p>
                <a href={s.source_link} target="_blank">
                  {s.source_link}
                </a>
              </div>
            ))}
          </div>

          {/* ACTIONS */}
          <div className={styles.actions}>

            <button
              onClick={prev}
              className={styles.back}
            >
              ← Back
            </button>

            <button
              onClick={handleSubmit}
              className={styles.submit}
            >
              Save Hero 🚀
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}