"use client";

import { useState } from "react";
import styles from "./stepbasic.module.scss";
import { Upload } from "lucide-react";

export default function StepBasicInfo({ next, formData = {}, setFormData }: any) {
  const [localData, setLocalData] = useState({
    name: formData?.name || "",
    birth_year: formData?.birth_year || "",
    death_year: formData?.death_year || "",
    era_id: formData?.era_id || "",
    nationality: formData?.nationality || "Ethiopian",
    hero_image: formData?.hero_image || ""
  });

  const [preview, setPreview] = useState(localData.hero_image || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // handle text inputs
  const handleChange = (e: any) => {
    setLocalData({
      ...localData,
      [e.target.name]: e.target.value
    });
  };

  // handle image upload
  const handleFile = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    // basic validation
    if (!file.type.startsWith("image/")) {
      setError("Only image files allowed");
      return;
    }

    setError("");
    setLoading(true);

    // preview instantly
    setPreview(URL.createObjectURL(file));

    const form = new FormData();
    form.append("image", file);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: form
      });

      const data = await res.json();

      setLocalData(prev => ({
        ...prev,
        hero_image: data.path // save path from backend
      }));
    } catch (err) {
      setError("Upload failed");
    }

    setLoading(false);
  };

  // validation before next
  const handleNext = () => {
    if (!localData.name || !localData.era_id) {
      setError("Name and Era are required");
      return;
    }

    if (
      localData.death_year &&
      localData.birth_year &&
      Number(localData.death_year) < Number(localData.birth_year)
    ) {
      setError("Death year must be after birth year");
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
            <h1>Add Hero</h1>
            <p>Step 1 of 7</p>
            <p>• Basic Information</p>
        </div>

        <div className={styles.right}>
          <div className={styles.all}>
            <div className={styles.grid}>
            <input
              name="name"
              placeholder="Name"
              value={localData.name}
              onChange={handleChange}
            />

            <input
              name="birth_year"
              type="number"
              placeholder="Birth Year"
              value={localData.birth_year}
              onChange={handleChange}
            />

            <input
              name="death_year"
              type="number"
              placeholder="Death Year"
              value={localData.death_year}
              onChange={handleChange}
            />
            <input
              name="nationality"
              placeholder="Nationality"
              value={localData.nationality}
              onChange={handleChange}
            />
            </div>
            <div className={styles.select}>
            <select
              name="era_id"
              value={localData.era_id}
              onChange={handleChange}
            >
              <option value="">Select Era</option>
              <option value="1">Ancient</option>
              <option value="2">Medieval</option>
              <option value="3">Modern</option>
            </select>

            

            {/* IMAGE UPLOAD */}
            <div className={styles.uploadBox}>
                <Upload />
              <label>Upload Hero Image</label>
              <input type="file" accept="image/*" onChange={handleFile} />

              {loading && <p>Uploading...</p>}

              {preview && (
                <img
                  src={preview}
                  alt="preview"
                  className={styles.preview}
                />
              )}
                {error && <p className={styles.error}>{error}</p>}

            </div>

          </div>

          </div>
          <button
            className={styles.submit}
            onClick={handleNext}
            disabled={loading}
          >
            Next →
          </button>

        </div>
      </div>
    </div>
  );
}