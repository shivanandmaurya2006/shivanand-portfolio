"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Award, BookOpen,
  Check, Code2, Github, GraduationCap, Linkedin, Mail,
  MapPin, Menu, Moon, ShieldCheck, Sun, Terminal, X, Braces,
} from "lucide-react";

const skills = [
  { title: "Programming", items: ["C", "C++", "Java", "Python"], icon: Code2 },
  { title: "Web development", items: ["HTML", "CSS", "JavaScript", "React"], icon: Braces },
  { title: "AI / ML", items: ["Machine Learning", "AI fundamentals"], icon: Terminal },
  { title: "Computer science", items: ["Data Structures & Algorithms"], icon: BookOpen },
];

const profiles = [
  { label: "GitHub", handle: "shivanandmaurya2006", href: "https://github.com/shivanandmaurya2006", icon: Github },
  { label: "LinkedIn", handle: "Connect professionally", href: "https://www.linkedin.com/in/shivanand-maurya-792564359/", icon: Linkedin },
  { label: "LeetCode", handle: "cooderkaka", href: "https://leetcode.com/u/cooderkaka", icon: Code2 },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const closeMenu = () => setMenuOpen(false);

  async function handleContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("sending");
    setFormMessage("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (!response.ok) throw new Error("Form submission failed");
        setFormState("success");
        setFormMessage("Thanks — your message has been sent.");
        form.reset();
      } catch {
        setFormState("error");
        setFormMessage("We couldn't send your message. Please email me directly instead.");
      }
      return;
    }

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:25113CN040@glbitm.ac.in?subject=${subject}&body=${body}`;
    setFormState("success");
    setFormMessage("Your email app should open with the message prepared. If it doesn't, use the direct email link.");
  }

  return (
    <main className="site-shell" data-theme={theme}>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Shivanand Maurya home">
          <span className="wordmark-mark">S<span>.</span></span>
          <span className="wordmark-name">SHIVANAND MAURYA</span>
        </a>
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {[ ["About", "#about"], ["Education", "#education"], ["Skills", "#skills"], ["Credentials", "#credentials"], ["Contact", "#contact"] ].map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-button theme-toggle" type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title="Toggle theme">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={theme} initial={reduceMotion ? false : { rotate: -35, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={reduceMotion ? undefined : { rotate: 35, opacity: 0 }} transition={{ duration: 0.2 }}>
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <a className="header-cta" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
          <button className="icon-button mobile-menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span className="status-dot" /> B.TECH · ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
          </motion.div>
          <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            Curious mind.<br />
            <span className="gradient-text">Builder at heart.</span>
          </motion.h1>
          <motion.p className="hero-intro" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.28 }}>
            I’m <strong>Shivanand Maurya</strong>, an AIML student exploring programming, web development, and AI — one idea and one line of code at a time.
          </motion.p>
          <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.4 }}>
            <a className="button button-primary" href="#credentials">Explore my journey <ArrowDownRight size={17} /></a>
            <a className="button button-secondary" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
          </motion.div>
          <motion.div className="hero-meta" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.65 }}>
            <span><MapPin size={14} /> Greater Noida, India</span>
            <span className="meta-divider" />
            <span>Learning in public, growing every day.</span>
          </motion.div>
        </div>
        <motion.div className="hero-visual" initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
          <div className="portrait-orbit orbit-a" aria-hidden="true" />
          <div className="portrait-orbit orbit-b" aria-hidden="true" />
          <div className="portrait-card">
            <div className="portrait-topline"><span>PROFILE / 001</span><span className="portrait-live"><span /> AVAILABLE TO CONNECT</span></div>
            <div className="portrait-image-wrap">
              <Image src="/images/shivanand-maurya.jpeg" alt="Portrait of Shivanand Maurya wearing a navy suit and tie" fill priority sizes="(max-width: 700px) 75vw, 360px" className="portrait-image" />
              <div className="portrait-image-shade" />
              <div className="portrait-caption"><span>SHIVANAND</span><span>MAURYA<span className="blue-period">.</span></span></div>
            </div>
            <div className="portrait-bottomline"><span>AI / ML STUDENT</span><span>INDIA · 2026</span></div>
          </div>
          <div className="floating-chip chip-code"><Code2 size={16} /><span>Code with intent</span></div>
          <div className="floating-chip chip-ai"><span className="chip-spark">✳</span><span>Curiosity → creation</span></div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </section>

      <section className="intro-strip" id="about">
        <div className="section-wrap strip-inner">
          <Reveal><span className="section-index">01 / A LITTLE ABOUT ME</span></Reveal>
          <Reveal delay={0.08}><p className="strip-statement">I enjoy turning <span className="muted-highlight">ideas into practical solutions</span> through programming, web development, and AI — while steadily strengthening my problem-solving skills.</p></Reveal>
          <Reveal delay={0.14}><div className="strip-note"><span className="line-accent" /> Currently building my foundations in software engineering and intelligent systems.</div></Reveal>
        </div>
      </section>

      <section className="section-wrap content-section" id="education">
        <Reveal className="section-heading"><div><span className="section-index">02 / THE FOUNDATION</span><h2>Learning with <span className="gradient-text">purpose.</span></h2></div><p>Building a strong technical base today for the problems I want to solve tomorrow.</p></Reveal>
        <Reveal>
          <article className="education-card interactive-card">
            <div className="education-icon"><GraduationCap size={26} /></div>
            <div className="education-main"><span className="card-kicker">UNDERGRADUATE EDUCATION</span><h3>GL Bajaj Institute of Technology and Management</h3><p className="degree-line">B.Tech · Artificial Intelligence and Machine Learning</p><div className="education-tags"><span>2025 — 2029</span><span>2nd year</span><span>Greater Noida, India</span></div></div>
            <div className="cgpa-block"><span className="cgpa-label">CURRENT CGPA</span><strong>8.55</strong><span className="cgpa-scale">out of 10</span></div>
          </article>
        </Reveal>
      </section>

      <section className="section-wrap content-section skills-section" id="skills">
        <Reveal className="section-heading"><div><span className="section-index">03 / MY TOOLKIT</span><h2>Technologies I’m <span className="gradient-text">learning.</span></h2></div><p>A growing toolkit across programming, the web, and artificial intelligence.</p></Reveal>
        <div className="skills-grid">
          {skills.map((group, index) => {
            const Icon = group.icon;
            return <Reveal key={group.title} delay={index * 0.06}><article className="skill-card interactive-card"><div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-number">0{index + 1}</span></div><h3>{group.title}</h3><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div></article></Reveal>;
          })}
        </div>
      </section>

      <section className="section-wrap content-section credentials-section" id="credentials">
        <Reveal className="section-heading"><div><span className="section-index">04 / PROGRESS & CREDENTIALS</span><h2>Small milestones.<br /><span className="gradient-text">Steady progress.</span></h2></div><p>Learning by practicing, exploring, and earning credentials along the way.</p></Reveal>
        <div className="credential-grid">
          <Reveal><article className="achievement-card interactive-card"><div className="achievement-top"><span className="achievement-icon"><Award size={20} /></span><span className="achievement-label">CODING PRACTICE</span></div><div className="achievement-number">100<span>+</span></div><h3>LeetCode problems solved</h3><p>Practicing Data Structures and Algorithms while strengthening problem-solving skills.</p><a className="text-link" href="https://leetcode.com/u/cooderkaka" target="_blank" rel="noreferrer">View LeetCode profile <ArrowUpRight size={15} /></a></article></Reveal>
          <Reveal delay={0.1}><article className="certificate-card interactive-card"><div className="certificate-top"><span className="certificate-icon"><ShieldCheck size={20} /></span><span className="achievement-label">CERTIFICATE · JUN 2026</span></div><div className="certificate-issuer">CISCO NETWORKING ACADEMY PROGRAM</div><h3>Introduction to Cybersecurity</h3><p>Offered by G L Bajaj Institute of Technology and Management through the Cisco Networking Academy program.</p><div className="certificate-footer"><span><Check size={14} /> Completed 30 Jun 2026</span><a href="/certificates/introduction-to-cybersecurity.pdf" target="_blank" rel="noreferrer" aria-label="Open Introduction to Cybersecurity certificate">View certificate <ArrowUpRight size={15} /></a></div></article></Reveal>
        </div>
      </section>

      <section className="section-wrap content-section profiles-section" id="profiles">
        <Reveal className="section-heading"><div><span className="section-index">05 / FIND ME ONLINE</span><h2>Let’s connect <span className="gradient-text">and learn.</span></h2></div><p>Follow my learning journey and explore the platforms where I practice and share.</p></Reveal>
        <div className="profile-list">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return <Reveal key={profile.label} delay={index * 0.05}><a className="profile-row" href={profile.href} target="_blank" rel="noreferrer"><span className="profile-icon"><Icon size={20} /></span><span className="profile-details"><strong>{profile.label}</strong><span>{profile.handle}</span></span><ArrowUpRight className="profile-arrow" size={18} /></a></Reveal>;
          })}
        </div>
      </section>

      <section className="section-wrap contact-section" id="contact">
        <Reveal className="contact-heading"><span className="section-index">06 / SAY HELLO</span><h2>Have a good idea?<br /><span className="gradient-text">Let’s talk.</span></h2><p>Have a question, an opportunity, or just want to connect? Send me a message.</p><div className="contact-details"><a href="mailto:25113CN040@glbitm.ac.in"><Mail size={16} /> 25113CN040@glbitm.ac.in <ArrowUpRight size={14} /></a><span><MapPin size={16} /> Greater Noida, India</span><a href="tel:+919670581439">+91 96705 81439</a><span className="dob-detail">Date of birth: 23 June 2006</span></div></Reveal>
        <Reveal delay={0.1} className="contact-form-wrap"><form className="contact-form" onSubmit={handleContact}>
          <div className="form-heading"><span>CONTACT FORM</span><span className="form-secure"><span /> LET’S CONNECT</span></div>
          <label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" placeholder="How should I address you?" required maxLength={100} />
          <label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} />
          <label htmlFor="message">Your message</label><textarea id="message" name="message" placeholder="Tell me what’s on your mind..." rows={4} required maxLength={5000} />
          <button className="button button-primary form-submit" type="submit" disabled={formState === "sending"}>{formState === "sending" ? "Preparing…" : "Send message"} <ArrowRight size={17} /></button>
          <p className={`form-status ${formState}`} aria-live="polite">{formMessage || (process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ? "Your message will be delivered securely by the configured form service." : "Your email app will open with your message ready to send.")}</p>
          <p className="form-note">No backend is configured by default. Set <code>NEXT_PUBLIC_FORMSPREE_ENDPOINT</code> to enable direct form delivery.</p>
        </form></Reveal>
      </section>

      <footer className="site-footer section-wrap"><a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark">S<span>.</span></span><span className="wordmark-name">SHIVANAND MAURYA</span></a><span className="footer-note">Designed with curiosity. Built with care.</span><a className="back-top" href="#home">Back to top <ArrowUpRight size={14} /></a><span className="copyright">© {new Date().getFullYear()} Shivanand Maurya</span></footer>
    </main>
  );
}
