"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import styles from "./stepimage.module.scss";

export default function StepImages({
  next,
  prev,
  formData = {},
  setFormData
}: any) {

  const [images, setImages] = useState<any[]>(
    formData?.images || []
  );

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // upload images
  const handleFiles = async (e: any) => {

    const files = Array.from(
      e.target.files || []
    );

    if (!files.length) return;

    setLoading(true);
    setError("");

    try {

      const uploadedImages = await Promise.all(

        files.map(async (file: any) => {

          // only image files
          if (!file.type.startsWith("image/")) {
            return null;
          }

          // local preview
          const preview =
            URL.createObjectURL(file);

          // upload form
          const form = new FormData();

          form.append("image", file);

          // upload to backend
          const res = await fetch(
            "http://localhost:5000/upload",
            {
              method: "POST",
              body: form
            }
          );

          const data = await res.json();

          console.log(data);

          return {

            image_url:
              data.path ||
              data.url ||
              data.filename,

            preview,

            name: file.name,

            caption: ""
          };
        })
      );

      const validImages =
        uploadedImages.filter(Boolean);

      setImages((prev) => [
        ...prev,
        ...validImages
      ]);

    } catch (err) {

      console.log(err);

      setError("Upload failed");
    }

    setLoading(false);
  };

  // remove image
  const removeImage = (
    index: number
  ) => {

    setImages((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  // update caption
  const updateCaption = (
    index: number,
    value: string
  ) => {

    setImages((prev) => {

      const updated = [...prev];

      updated[index].caption = value;

      return updated;
    });
  };

  // next
  const handleNext = () => {

    setFormData({
      ...formData,

      images: images.map((img) => ({
        image_url: img.image_url,
        caption: img.caption
      }))
    });

    next();
  };

  return (
    <div className={styles.container}>

      <div className={styles.card}>

        {/* LEFT */}
        <div className={styles.left}>

          <h1>Add Hero</h1>

          <p>Step 4 of 7</p>

          <p>Gallery Images</p>

        </div>

        {/* RIGHT */}
        <div className={styles.right}>

          {/* UPLOAD */}
          <label
            className={styles.uploadBox}
          >

            <Upload size={35} />

            <p>
              Upload Gallery Images
            </p>

            <span>
              PNG, JPG, WEBP
            </span>

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFiles}
              hidden
            />

          </label>

          {/* LOADING */}
          {loading && (
            <p className={styles.loading}>
              Uploading...
            </p>
          )}

          {/* ERROR */}
          {error && (
            <p className={styles.error}>
              {error}
            </p>
          )}

          {/* IMAGE GRID */}
          <div className={styles.grid}>

            {images.map((img, index) => (

              <div
                key={index}
                className={styles.imageCard}
              >

                {/* IMAGE */}
                <img
                  src={img.preview}
                  alt="preview"
                />

                {/* FILE NAME */}
                <p className={styles.fileName}>
                  {img.name}
                </p>

                {/* CAPTION */}
                <input
                  type="text"
                  placeholder="Caption..."
                  value={img.caption}
                  onChange={(e) =>
                    updateCaption(
                      index,
                      e.target.value
                    )
                  }
                />

                {/* REMOVE */}
                <button
                  onClick={() =>
                    removeImage(index)
                  }
                >
                  Remove
                </button>

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
              onClick={handleNext}
              className={styles.submit}
            >
              Next →
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}