"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./signup.module.scss";
import logo from "@/public/assets/fasil.jpg";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Signup() {
  const router = useRouter();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    country: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "https://ethio-heroes.onrender.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (res.ok) {
        router.push("/");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    window.location.href =
      "https://ethio-heroes.onrender.com/login/google";
  };

  const handleGithub = () => {
    window.location.href =
      "https://ethio-heroes.onrender.com/login/github";
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.logoWrapper}>
            <Image src={logo} alt="logo" fill className={styles.logo} />
          </div>

          <h2>Create Account</h2>
          <p>Join Ethio Heroes and start your journey</p>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <h1>Sign Up</h1>

          {/* SOCIAL */}
          <div className={styles.socials}>
            <button onClick={handleGoogle}>
              <FcGoogle size={20} />
              Google
            </button>

            <button onClick={handleGithub}>
              <FaGithub size={20} />
              GitHub
            </button>
          </div>

          <div className={styles.divider}>or continue</div>

          {/* INPUTS */}
          <div className={styles.grid}>
            <input
              name="full_name"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              name="country"
              placeholder="Country"
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <input
              name="confirm_password"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>

          <button
            className={styles.submit}
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

          <p className={styles.switch}>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>

      </div>
    </div>
  );
}