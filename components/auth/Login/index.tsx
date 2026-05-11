"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./login.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, ArrowRight, AlertCircle } from "lucide-react";
import logo from "@/public/assets/fasil.jpg";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

// ─── Main component ────────────────────────────────────────────────────────────

export default function Login() {
  const router = useRouter();

  const [email,       setEmail]       = useState("");
  const [password,    setPassword]    = useState("");
  const [showPass,    setShowPass]    = useState(false);
  const [loading,     setLoading]     = useState(false);
  const [error,       setError]       = useState<string | null>(null);
  const [emailFocus,  setEmailFocus]  = useState(false);
  const [passFocus,   setPassFocus]   = useState(false);

  // ── Handlers ────────────────────────────────────────────────────────────────

  const handleLogin = async () => {
    setError(null);
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://ethio-heroes.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      let data;
      try { data = await res.json(); }
      catch { data = { message: "Server error" }; }

      if (res.ok) {
        router.push("/");
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    window.location.href = "https://ethio-heroes.onrender.com/login/google";
  };

  const handleGithub = () => {
    window.location.href = "https://ethio-heroes.onrender.com/login/github";
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className={styles.container}>
      {/* Subtle background grain */}
      <div className={styles.grain} aria-hidden />

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >

        {/* ── Left panel ── */}
        <div className={styles.left}>
          {/* Corner accents */}
          <div className={styles.cornerTL} />
          <div className={styles.cornerBR} />

          {/* Logo */}
          <div className={styles.logoWrap}>
            <Image
              src={logo}
              alt="Ethio Heroes"
              fill
              placeholder="blur"
              sizes="72px"
              className={styles.logo}
            />
            <div className={styles.logoOverlay} />
          </div>

          <div className={styles.leftText}>
            <span className={styles.eyebrow}>Digital Archive</span>
            <h2 className={styles.welcomeTitle}>Welcome Back</h2>
            <p className={styles.welcomeSub}>
              Sign in to explore the heroes who shaped Ethiopia's story.
            </p>
          </div>

          {/* Decorative line */}
          <div className={styles.decorLine} />
        </div>

        {/* ── Right panel / form ── */}
        <div className={styles.right}>
          <div className={styles.formHeader}>
            <span className={styles.eyebrow}>Sign In</span>
            <h1 className={styles.formTitle}>Login</h1>
          </div>

          {/* Social buttons */}
          <div className={styles.socials}>
            <motion.button
              className={styles.socialBtn}
              onClick={handleGoogle}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <FcGoogle size={18} />
              <span>Google</span>
            </motion.button>

            <motion.button
              className={styles.socialBtn}
              onClick={handleGithub}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </motion.button>
          </div>

          {/* Divider */}
          <div className={styles.divider}>
            <span>or continue with email</span>
          </div>

          {/* Error message */}
          <AnimatePresence>
            {error && (
              <motion.div
                className={styles.errorBox}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <AlertCircle size={14} />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Email */}
          <div className={`${styles.inputBox} ${emailFocus ? styles.focused : ""}`}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              onKeyDown={handleKeyDown}
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div className={`${styles.inputBox} ${passFocus ? styles.focused : ""}`}>
            <label htmlFor="password">Password</label>
            <div className={styles.passwordWrap}>
              <input
                id="password"
                type={showPass ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPassFocus(true)}
                onBlur={() => setPassFocus(false)}
                onKeyDown={handleKeyDown}
                autoComplete="current-password"
              />
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPass((p) => !p)}
                aria-label={showPass ? "Hide password" : "Show password"}
              >
                {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <a href="/forgot-password" className={styles.forgot}>
            Forgot password?
          </a>

          {/* Submit */}
          <motion.button
            className={styles.submit}
            onClick={handleLogin}
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.97 }}
          >
            {loading ? (
              <span className={styles.spinner} />
            ) : (
              <>
                Continue <ArrowRight size={15} />
              </>
            )}
          </motion.button>

          {/* Switch */}
          <p className={styles.switchText}>
            Don't have an account?{" "}
            <a href="/signup">Sign Up</a>
          </p>
        </div>

      </motion.div>
    </div>
  );
}