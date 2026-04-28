"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./login.module.scss";
import logo from "@/public/assets/fasil.jpg";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ================= LOGIN =================
  const handleLogin = async () => {
    if (!email || !password) return;

    setLoading(true);

    try {
      const res = await fetch(
        "https://ethio-heroes.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        }
      );

      let data;
      try {
        data = await res.json();
      } catch {
        data = { message: "Server error" };
      }

      if (res.ok) {
        router.push("/");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  // ================= GOOGLE =================
  const handleGoogle = () => {
    window.location.href =
      "https://ethio-heroes.onrender.com/login/google";
  };

  // ================= GITHUB =================
  const handleGithub = () => {
    window.location.href =
      "https://ethio-heroes.onrender.com/login/github";
  };

  return (
    <div className={styles.container}>
      <div className={styles.cards}>

        {/* LEFT */}
        <div className={styles.welcomeBack}>
          <div className={styles.logoWrapper}>
            <Image
              src={logo}
              alt="logo"
              fill
              className={styles.logo}
              placeholder="blur"
              sizes="80px"
            />
          </div>

          <h2>Welcome Back</h2>
          <p>Build the future with your account</p>
        </div>

        {/* RIGHT */}
        <div className={styles.form}>
          <h1>Login</h1>

          {/* SOCIAL */}
          <div className={styles.socials}>
            <button
              className={styles.socialBtn}
              onClick={handleGoogle}
            >
              <FcGoogle size={20} />
              <span>Google</span>
            </button>

            <button
              className={styles.socialBtn}
              onClick={handleGithub}
            >
              <FaGithub size={20} color="white" />
              <span>GitHub</span>
            </button>
          </div>

          {/* DIVIDER */}
          <div className={styles.divider}>
            <span>or continue</span>
          </div>

          {/* INPUT */}
          <div className={styles.inputBox}>
            <label>Email</label>
            <input
              type="email"
              placeholder="gps@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputBox}>
            <label>Password</label>
            <input
              type="password"
              placeholder="•••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* BUTTON */}
          <button
            className={styles.submit}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Continue"}
          </button>

          {/* SWITCH */}
          <p className={styles.switch}>
            Don’t have an account?{" "}
            <a href="/signup">Sign Up</a>
          </p>
        </div>

      </div>
    </div>
  );
}