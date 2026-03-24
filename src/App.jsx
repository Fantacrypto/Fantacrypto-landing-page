import React, { useState, useEffect, useRef } from "react";

// ─── SEO HEAD (inject via Helmet or index.html in production) ───────────────
// Title: Fantacrypto League | Il Fantasy Game sulle Criptovalute
// Description: Fantacrypto League è il primo fantasy game su crypto e strumenti
//              finanziari. Scegli, gioca e crea le tue leghe. Impara il mercato
//              crypto divertendoti, 365 giorni l'anno.
// OG tags, canonical, structured data → see comments at bottom of file

const NAV_LINKS = [
  { label: "Chi siamo", href: "#chi-siamo" },
  { label: "Come funziona", href: "#come-funziona" },
  { label: "Visione", href: "#visione" },
  { label: "Monetizzazione", href: "#monetizzazione" },
  { label: "Partnership", href: "#partnership" },
];

const FEATURES = [
  {
    icon: "🏆",
    title: "Collaudato e Amato",
    desc: "Il modello Fantacalcio ha dimostrato il potenziale virale di un gioco ben strutturato, capace di catturare milioni di utenti per stagioni intere.",
  },
  {
    icon: "₿",
    title: "Adattamento Cripto",
    desc: "Trasportiamo questo modello vincente nel dinamico mondo delle criptovalute, creando un'esperienza di gioco continua, senza limiti stagionali.",
  },
  {
    icon: "🎓",
    title: "Gioca e Impara",
    desc: "Non è solo un gioco di abilità: è una piattaforma interattiva per imparare le dinamiche del mercato cripto in tempo reale.",
  },
];

const HOW_STEPS = [
  {
    step: "01",
    keyword: "PLAY",
    title: "Scegli le tue crypto",
    desc: "Costruisci il tuo portfolio virtuale scegliendo tra le principali criptovalute e strumenti finanziari. Nessuna competenza avanzata richiesta.",
  },
  {
    step: "02",
    keyword: "LEARN",
    title: "Impara giocando",
    desc: "Ogni sfida è un'occasione per crescere e affinare le tue strategie. Dati in tempo reale da CoinMarketCap per decisioni sempre aggiornate.",
  },
  {
    step: "03",
    keyword: "WIN",
    title: "Crea le tue leghe",
    desc: "Dalla community globale alle leghe private con amici: un ambiente divertente, competitivo e stimolante 365 giorni l'anno.",
  },
];

const GLOBAL_PILLARS = [
  {
    icon: "🌐",
    title: "Interfaccia Multilingua",
    desc: "Progettato per essere accessibile globalmente, con un'interfaccia intuitiva disponibile in più lingue per un'esperienza inclusiva.",
  },
  {
    icon: "🎮",
    title: "Gamification Universale",
    desc: "Oltre il calcio: crypto, basket, rugby e altri strumenti finanziari per una vera esperienza di gamification senza confini.",
  },
  {
    icon: "🔓",
    title: "Accessibilità Totale",
    desc: "Nessun limite geografico. Fantacrypto è accessibile da qualsiasi paese, un vero linguaggio globale basato sulla blockchain, senza barriere.",
  },
];

const TECH_PILLARS = [
  {
    title: "Tecnologia Robusta",
    desc: "Base solida con componenti personalizzati per un'esperienza utente fluida e reattiva, scalabile su milioni di giocatori.",
  },
  {
    title: "Dati in Tempo Reale",
    desc: "Integrazione API con CoinMarketCap: i valori delle criptovalute sono sempre aggiornati, fornendo ai giocatori informazioni precise e tempestive.",
  },
  {
    title: "Design Centrato sull'Utente",
    desc: "Un'architettura semplice ma efficace si traduce in un'esperienza potente, accessibile e coinvolgente per giocatori di ogni livello.",
  },
];

const MONETIZATION = [
  { icon: "📢", title: "Pubblicità Interna", desc: "Spazi pubblicitari mirati per sbloccare dati extra e funzionalità avanzate." },
  { icon: "⭐", title: "Abbonamenti Premium", desc: "Esperienza senza pubblicità e accesso esclusivo a statistiche avanzate per gli utenti più fedeli." },
  { icon: "🤝", title: "Sponsorizzazioni", desc: "Posizionamento privilegiato per brand e progetti cripto che vogliono raggiungere una community coinvolta." },
  { icon: "💰", title: "Revenue Sharing", desc: "Accordi di partnership vantaggiosi per una crescita reciproca e sostenibile con l'ecosistema cripto." },
];

// ─── COIN SVG LOGO ────────────────────────────────────────────────────────────
function CoinLogo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <ellipse cx="50" cy="55" rx="36" ry="10" fill="#0a3d38" opacity="0.6" />
      <circle cx="50" cy="48" r="38" fill="#0D4F4A" />
      <circle cx="50" cy="48" r="34" fill="#1DB89A" />
      <circle cx="50" cy="48" r="28" fill="none" stroke="#0D4F4A" strokeWidth="2.5" />
      <path d="M42 34 L58 34 L58 38 L52 38 L52 58 L58 58 L58 62 L42 62 L42 58 L46 58 L46 54 L38 54 L38 42 L46 42 L46 38 L42 38 Z" fill="white" />
      <path d="M46 42 L52 42 L54 44 L54 52 L52 54 L46 54 Z" fill="#1DB89A" />
    </svg>
  );
}

// ─── ANIMATED TICKER ─────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  "BTC +2.4%", "ETH +1.8%", "BNB -0.3%", "SOL +5.1%", "ADA +0.9%",
  "DOGE +3.2%", "XRP +1.1%", "AVAX +4.7%", "MATIC +2.0%", "LINK +1.5%",
];

// Altezze header: ticker 34px + navbar 64px = 98px totali
const TICKER_HEIGHT = 34;
const NAV_HEIGHT = 64;
const HEADER_HEIGHT = TICKER_HEIGHT + NAV_HEIGHT;

function Ticker() {
  return (
    <div style={{
      background: "#0a2e2a",
      borderBottom: "1px solid #1DB89A22",
      overflow: "hidden",
      height: TICKER_HEIGHT,
      display: "flex",
      alignItems: "center",
      fontSize: "12px",
      fontFamily: "'Space Mono', monospace",
      color: "#1DB89A",
      letterSpacing: "0.05em",
    }}>
      <div style={{
        display: "flex",
        gap: "48px",
        animation: "tickerScroll 30s linear infinite",
        whiteSpace: "nowrap",
      }}>
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} style={{ opacity: item.includes("-") ? 0.6 : 1, color: item.includes("-") ? "#ff6b6b" : "#1DB89A" }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header role="banner" style={{
      background: scrolled ? "rgba(8,28,25,0.96)" : "rgba(4,20,16,0.85)",
      backdropFilter: "blur(16px)",
      borderBottom: scrolled ? "1px solid #1DB89A22" : "none",
      transition: "all 0.3s ease",
      padding: "0 24px",
    }}>
      <nav role="navigation" aria-label="Navigazione principale" style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: NAV_HEIGHT,
      }}>
        {/* Logo — usa FantacryptoWhite.svg se presente, altrimenti testo */}
        <a href="#hero" aria-label="Fantacrypto League - Home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src="/FantacryptoWhite.svg"
            alt="Fantacrypto League"
            height="44"
            style={{ height: 44, width: "auto", display: "block" }}
            onError={e => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          {/* Fallback testo se SVG non trovato */}
          <div style={{ display: "none", alignItems: "center", gap: 10 }}>
            <CoinLogo size={40} />
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 18, color: "#fff", letterSpacing: "0.08em", lineHeight: 1.1 }}>
                FANTACRYPTO
              </div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, color: "#1DB89A", letterSpacing: "0.12em" }}>
                LEAGUE.IO
              </div>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul role="list" style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0, alignItems: "center" }}
          className="desktop-nav">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} style={{
                color: "#a0c8c2", textDecoration: "none",
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600,
                fontSize: 15, letterSpacing: "0.06em", textTransform: "uppercase",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => e.target.style.color = "#1DB89A"}
                onMouseLeave={e => e.target.style.color = "#a0c8c2"}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#cta" style={{
              background: "#1DB89A", color: "#041410",
              padding: "10px 24px", borderRadius: 6,
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
              fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s",
              display: "inline-block",
            }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 24px #1DB89A44"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
            >
              Gioca Ora
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", fontSize: 28, display: "none" }}
          className="hamburger"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(8,28,25,0.98)", padding: "16px 24px 24px",
          borderTop: "1px solid #1DB89A22",
        }}>
          <ul role="list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)} style={{
                  color: "#a0c8c2", textDecoration: "none",
                  fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                  fontSize: 20, letterSpacing: "0.06em", textTransform: "uppercase",
                }}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#cta" onClick={() => setMenuOpen(false)} style={{
                background: "#1DB89A", color: "#041410",
                padding: "12px 28px", borderRadius: 6,
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
                fontSize: 16, letterSpacing: "0.1em", textTransform: "uppercase",
                textDecoration: "none", display: "inline-block", marginTop: 8,
              }}>
                Gioca Ora
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" aria-label="Fantacrypto League - Il fantasy game sulle criptovalute"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #041410 0%, #0a2e2a 40%, #0D4F4A 75%, #1DB89A 100%)",
        display: "flex", alignItems: "center",
        padding: "60px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}>

      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.06,
        backgroundImage: "linear-gradient(#1DB89A 1px, transparent 1px), linear-gradient(90deg, #1DB89A 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} aria-hidden="true" />

      {/* Glow */}
      <div style={{
        position: "absolute", width: 600, height: 600,
        borderRadius: "50%", background: "radial-gradient(circle, #1DB89A22 0%, transparent 70%)",
        right: -100, top: "50%", transform: "translateY(-50%)",
        pointerEvents: "none",
      }} aria-hidden="true" />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: 64, flexWrap: "wrap" }}>

        {/* Text */}
        <div style={{ flex: "1 1 480px" }}>
          <div style={{
            display: "inline-block",
            background: "#1DB89A22", border: "1px solid #1DB89A44",
            borderRadius: 4, padding: "6px 14px", marginBottom: 24,
            fontFamily: "'Space Mono', monospace", fontSize: 11,
            color: "#1DB89A", letterSpacing: "0.15em", textTransform: "uppercase",
          }}>
            🚀 Il primo fantasy game sulle crypto
          </div>

          <h1 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, fontSize: "clamp(48px, 8vw, 88px)",
            color: "#fff", lineHeight: 0.95,
            letterSpacing: "-0.02em", margin: "0 0 8px",
            textTransform: "uppercase",
          }}>
            RISCRIVI<br />
            <span style={{ color: "#1DB89A" }}>LE REGOLE</span><br />
            DEL GIOCO
          </h1>
          <div style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700, fontSize: "clamp(20px, 3vw, 28px)",
            color: "#a0c8c2", letterSpacing: "0.06em", marginBottom: 32,
            textTransform: "uppercase",
          }}>
            CRIPTO
          </div>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 18, lineHeight: 1.7,
            color: "#8bbfb8", maxWidth: 520, marginBottom: 48,
          }}>
            Fantacrypto League è il primo Fantasy Game su Crypto e strumenti finanziari,
            in stile Fantasanremo. Non servono competenze avanzate:{" "}
            <strong style={{ color: "#fff" }}>scegli, gioca e crea le tue leghe</strong>{" "}
            per divertirti con una community in continua crescita.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              onClick={() => window.open("https://fantacryptoleague.io", "_blank", "noopener,noreferrer")}
              style={{
                background: "#1DB89A", color: "#041410",
                padding: "16px 36px", borderRadius: 6,
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
                fontSize: 18, letterSpacing: "0.1em", textTransform: "uppercase",
                border: "none", transition: "all 0.3s",
                boxShadow: "0 4px 24px #1DB89A44", cursor: "pointer",
              }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = "0 12px 32px #1DB89A55"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 24px #1DB89A44"; }}
            >
              Entra in Leghe Fantacrypto
            </button>
            <button
              onClick={() => document.getElementById("partner-form").scrollIntoView({ behavior: "smooth", block: "start" })}
              style={{
                border: "1px solid #1DB89A55", color: "#1DB89A",
                padding: "16px 36px", borderRadius: 6,
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: 18, letterSpacing: "0.1em", textTransform: "uppercase",
                textDecoration: "none", transition: "all 0.3s",
                background: "transparent", cursor: "pointer",
              }}
              onMouseEnter={e => { e.target.style.background = "#1DB89A11"; e.target.style.borderColor = "#1DB89A"; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.borderColor = "#1DB89A55"; }}
            >
              Vuoi diventare Partner?
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 40, marginTop: 56, flexWrap: "wrap" }}>
            {[
              { num: "365", label: "Giorni l'anno" },
              { num: "∞", label: "Leghe disponibili" },
              { num: "100+", label: "Crypto nel gioco" },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 36, color: "#1DB89A", lineHeight: 1 }}>{stat.num}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#5a8a85", marginTop: 4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Coin visual */}
        <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ animation: "coinFloat 4s ease-in-out infinite", filter: "drop-shadow(0 30px 60px #1DB89A44)" }}>
            <svg width="320" height="320" viewBox="0 0 200 200" fill="none" aria-label="Fantacrypto coin">
              <defs>
                <radialGradient id="coinGrad" cx="40%" cy="35%">
                  <stop offset="0%" stopColor="#2ecfae" />
                  <stop offset="60%" stopColor="#1DB89A" />
                  <stop offset="100%" stopColor="#0D8070" />
                </radialGradient>
                <radialGradient id="coinInner" cx="45%" cy="40%">
                  <stop offset="0%" stopColor="#25c9a3" />
                  <stop offset="100%" stopColor="#129078" />
                </radialGradient>
                <clipPath id="coinClip">
                  <circle cx="100" cy="95" r="54" />
                </clipPath>
              </defs>
              <ellipse cx="100" cy="165" rx="60" ry="16" fill="#0a2e2a" opacity="0.8" />
              <circle cx="100" cy="98" r="78" fill="#082820" />
              <circle cx="100" cy="95" r="78" fill="url(#coinGrad)" />
              <circle cx="100" cy="95" r="66" fill="url(#coinInner)" />
              <circle cx="100" cy="95" r="58" fill="none" stroke="#0D4F4A" strokeWidth="4" />
              {/* Simbolo brand — usa PNG caricato in /public */}
              <image
                href="/fc-symbol.png"
                x="38" y="33"
                width="124" height="124"
                clipPath="url(#coinClip)"
                preserveAspectRatio="xMidYMid meet"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", animation: "bounce 2s infinite" }}>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, #1DB89A, transparent)", margin: "0 auto" }} />
      </div>
    </section>
  );
}

// ─── CHI SIAMO ────────────────────────────────────────────────────────────────
function ChiSiamo() {
  return (
    <section id="chi-siamo" aria-labelledby="chi-siamo-title"
      style={{ padding: "120px 24px", background: "#061c18" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ display: "flex", gap: 80, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 480px" }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#1DB89A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
              Chi siamo
            </div>
            <h2 id="chi-siamo-title" style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
              fontSize: "clamp(36px, 5vw, 60px)", color: "#fff",
              lineHeight: 1.05, textTransform: "uppercase", margin: "0 0 32px",
            }}>
              Il FANTASANREMO<br />
              <span style={{ color: "#1DB89A" }}>delle Crypto</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.8, color: "#7ab0aa", marginBottom: 24 }}>
              Fantacrypto League è il primo Fantasy Game su Crypto e strumenti finanziari.
              Abbiamo preso il modello vincente del Fantacalcio — collaudato, amato, virale —
              e l'abbiamo trasportato nel dinamico mondo delle criptovalute.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.8, color: "#7ab0aa" }}>
              Il nostro dominio e i canali social sono già attivi:{" "}
              <strong style={{ color: "#fff" }}>le basi sono pronte per il lancio e la scalata.</strong>{" "}
              Un campionato perpetuo, senza stagioni, accessibile a chiunque, 365 giorni l'anno.
            </p>
          </div>

          <div style={{ flex: "1 1 360px", display: "flex", flexDirection: "column", gap: 16 }}>
            {FEATURES.map((f, i) => (
              <article key={i} style={{
                background: "linear-gradient(135deg, #0d2e2a, #0a2220)",
                border: "1px solid #1DB89A22",
                borderRadius: 12, padding: "24px 28px",
                display: "flex", gap: 20, alignItems: "flex-start",
                transition: "border-color 0.3s, transform 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#1DB89A66"; e.currentTarget.style.transform = "translateX(6px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1DB89A22"; e.currentTarget.style.transform = "translateX(0)"; }}
              >
                <div style={{ fontSize: 28, flexShrink: 0, lineHeight: 1 }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 18, color: "#1DB89A", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 8px" }}>
                    {f.title}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: "#6a9e98", margin: 0 }}>
                    {f.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── COME FUNZIONA ────────────────────────────────────────────────────────────
function ComeFunziona() {
  return (
    <section id="come-funziona" aria-labelledby="come-funziona-title"
      style={{ padding: "120px 24px", background: "#041410", position: "relative", overflow: "hidden" }}>

      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: "linear-gradient(90deg, transparent, #1DB89A, transparent)",
      }} aria-hidden="true" />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#1DB89A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
            Come funziona
          </div>
          <h2 id="come-funziona-title" style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
            fontSize: "clamp(36px, 5vw, 60px)", color: "#fff",
            textTransform: "uppercase", margin: 0, lineHeight: 1.05,
          }}>
            PLAY. LEARN. <span style={{ color: "#1DB89A" }}>WIN.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 2 }}>
          {HOW_STEPS.map((step, i) => (
            <article key={i} style={{
              background: i === 1 ? "linear-gradient(180deg, #1DB89A11, #1DB89A08)" : "transparent",
              border: "1px solid #1DB89A22",
              borderRadius: 12, padding: "48px 36px",
              position: "relative", overflow: "hidden",
              transition: "background 0.3s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "linear-gradient(180deg, #1DB89A15, #1DB89A05)"}
              onMouseLeave={e => e.currentTarget.style.background = i === 1 ? "linear-gradient(180deg, #1DB89A11, #1DB89A08)" : "transparent"}
            >
              <div style={{
                position: "absolute", top: -20, right: -10,
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
                fontSize: 120, color: "#1DB89A08", lineHeight: 1,
                userSelect: "none", pointerEvents: "none",
              }} aria-hidden="true">
                {step.step}
              </div>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
                fontSize: 13, color: "#1DB89A", letterSpacing: "0.25em",
                textTransform: "uppercase", marginBottom: 16,
              }}>
                {step.keyword}
              </div>
              <h3 style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
                fontSize: 28, color: "#fff", textTransform: "uppercase",
                margin: "0 0 16px", lineHeight: 1.1,
              }}>
                {step.title}
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#6a9e98", margin: 0 }}>
                {step.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── VISIONE GLOBALE ──────────────────────────────────────────────────────────
function Visione() {
  return (
    <section id="visione" aria-labelledby="visione-title"
      style={{ padding: "120px 24px", background: "linear-gradient(180deg, #061c18 0%, #041410 100%)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#1DB89A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
            Visione Globale
          </div>
          <h2 id="visione-title" style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
            fontSize: "clamp(36px, 5vw, 60px)", color: "#fff",
            textTransform: "uppercase", margin: "0 0 24px", lineHeight: 1.05,
          }}>
            UN PROGETTO <span style={{ color: "#1DB89A" }}>SENZA CONFINI</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "#6a9e98", maxWidth: 600, margin: "0 auto", lineHeight: 1.8 }}>
            Fantacrypto non è solo un gioco, ma una piattaforma che parla la lingua universale
            dell'innovazione e della finanza decentralizzata.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {GLOBAL_PILLARS.map((p, i) => (
            <article key={i} style={{
              background: "#0d2e2a",
              border: "1px solid #1DB89A22",
              borderRadius: 16, padding: "40px 32px",
              textAlign: "center",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 24px 48px #1DB89A22"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ fontSize: 42, marginBottom: 20 }} role="img" aria-hidden="true">{p.icon}</div>
              <h3 style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
                fontSize: 20, color: "#1DB89A", textTransform: "uppercase",
                letterSpacing: "0.05em", margin: "0 0 16px",
              }}>
                {p.title}
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#6a9e98", margin: 0 }}>
                {p.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Tech pillars */}
        <div style={{ marginTop: 80 }}>
          <h3 style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
            fontSize: "clamp(28px, 4vw, 44px)", color: "#fff",
            textTransform: "uppercase", marginBottom: 40, textAlign: "center",
          }}>
            SVILUPPO SEMPLICE, <span style={{ color: "#1DB89A" }}>IMPATTO COLOSSALE</span>
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 2 }}>
            {TECH_PILLARS.map((t, i) => (
              <div key={i} style={{
                borderLeft: "2px solid #1DB89A44", padding: "24px 32px",
                transition: "border-color 0.3s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#1DB89A"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#1DB89A44"}
              >
                <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 20, color: "#fff", textTransform: "uppercase", margin: "0 0 12px" }}>
                  {t.title}
                </h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8, color: "#6a9e98", margin: 0 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── MONETIZZAZIONE ───────────────────────────────────────────────────────────
function Monetizzazione() {
  return (
    <section id="monetizzazione" aria-labelledby="monetizzazione-title"
      style={{ padding: "120px 24px", background: "#041410" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{
          background: "linear-gradient(135deg, #0d2e2a, #082220)",
          border: "1px solid #1DB89A22", borderRadius: 20,
          padding: "64px", overflow: "hidden", position: "relative",
        }}>
          <div style={{
            position: "absolute", top: -60, right: -60,
            width: 300, height: 300, borderRadius: "50%",
            background: "radial-gradient(circle, #1DB89A10, transparent 70%)",
            pointerEvents: "none",
          }} aria-hidden="true" />

          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#1DB89A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
            Monetizzazione
          </div>
          <h2 id="monetizzazione-title" style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
            fontSize: "clamp(32px, 4vw, 52px)", color: "#fff",
            textTransform: "uppercase", margin: "0 0 16px", lineHeight: 1.05,
          }}>
            OGNI GIOCATORE È UN<br />
            <span style={{ color: "#1DB89A" }}>INVESTITORE, STUDENTE E AMBASCIATORE</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#6a9e98", marginBottom: 48, maxWidth: 600, lineHeight: 1.8 }}>
            La nostra strategia di monetizzazione è diversificata e pensata per massimizzare
            i ritorni, beneficiando sia gli utenti che i partner.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {MONETIZATION.map((m, i) => (
              <article key={i} style={{
                background: "#0a1f1c", border: "1px solid #1DB89A1A",
                borderRadius: 12, padding: "28px 24px",
                transition: "border-color 0.3s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#1DB89A55"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#1DB89A1A"}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }} role="img" aria-hidden="true">{m.icon}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 18, color: "#fff", textTransform: "uppercase", margin: "0 0 10px" }}>
                  {m.title}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: "#5a8a85", margin: 0 }}>
                  {m.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PARTNER FORM ─────────────────────────────────────────────────────────────
function PartnerForm() {
  const [form, setForm] = React.useState({ nome: "", email: "", azienda: "", messaggio: "" });
  const [sent, setSent] = React.useState(false);

  const inputStyle = {
    width: "100%", padding: "12px 16px",
    background: "#061c18", border: "1px solid #1DB89A33",
    borderRadius: 8, color: "#fff",
    fontFamily: "'DM Sans', sans-serif", fontSize: 15,
    outline: "none", boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
    fontSize: 13, color: "#1DB89A", letterSpacing: "0.1em",
    textTransform: "uppercase", display: "block", marginBottom: 6,
  };

  const [error, setError] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/xqegzqzr", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          azienda: form.azienda,
          messaggio: form.messaggio,
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  if (sent) return (
    <div style={{ textAlign: "center", padding: "32px 0" }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
      <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color: "#1DB89A" }}>
        Grazie! Ti ricontattiamo presto.
      </p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div>
        <label style={labelStyle}>Nome *</label>
        <input
          type="text" required placeholder="Il tuo nome"
          value={form.nome}
          onChange={e => setForm({ ...form, nome: e.target.value })}
          style={inputStyle}
          onFocus={e => e.target.style.borderColor = "#1DB89A"}
          onBlur={e => e.target.style.borderColor = "#1DB89A33"}
        />
      </div>
      <div>
        <label style={labelStyle}>Email *</label>
        <input
          type="email" required placeholder="La tua email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          style={inputStyle}
          onFocus={e => e.target.style.borderColor = "#1DB89A"}
          onBlur={e => e.target.style.borderColor = "#1DB89A33"}
        />
      </div>
      <div>
        <label style={labelStyle}>Azienda</label>
        <input
          type="text" placeholder="Nome azienda o progetto"
          value={form.azienda}
          onChange={e => setForm({ ...form, azienda: e.target.value })}
          style={inputStyle}
          onFocus={e => e.target.style.borderColor = "#1DB89A"}
          onBlur={e => e.target.style.borderColor = "#1DB89A33"}
        />
      </div>
      <div>
        <label style={labelStyle}>Messaggio</label>
        <textarea
          rows={4} placeholder="Raccontaci la tua proposta..."
          value={form.messaggio}
          onChange={e => setForm({ ...form, messaggio: e.target.value })}
          style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
          onFocus={e => e.target.style.borderColor = "#1DB89A"}
          onBlur={e => e.target.style.borderColor = "#1DB89A33"}
        />
      </div>
      {error && (
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#ff6b6b", margin: "0 0 8px" }}>
          Errore nell'invio. Riprova o scrivici a info@fantacrypto.io
        </p>
      )}
      <button type="submit" style={{
        background: "#1DB89A", color: "#041410",
        padding: "14px 32px", borderRadius: 8, border: "none",
        fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
        fontSize: 16, letterSpacing: "0.1em", textTransform: "uppercase",
        cursor: "pointer", transition: "all 0.2s", alignSelf: "flex-start",
      }}
        onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 24px #1DB89A44"; }}
        onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
      >
        Invia Richiesta →
      </button>
    </form>
  );
}

// ─── PARTNERSHIP ──────────────────────────────────────────────────────────────
function Partnership() {
  return (
    <section id="partnership" aria-labelledby="partnership-title"
      style={{ padding: "120px 24px", background: "#061c18" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>

        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#1DB89A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
          Partnership Strategiche
        </div>
        <h2 id="partnership-title" style={{
          fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
          fontSize: "clamp(32px, 4vw, 52px)", color: "#fff",
          textTransform: "uppercase", margin: "0 0 24px", lineHeight: 1.05,
        }}>
          COLLABORAZIONI <span style={{ color: "#1DB89A" }}>VINCENTI</span>
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "#6a9e98", maxWidth: 640, margin: "0 auto 64px", lineHeight: 1.8 }}>
          Siamo più di un semplice gioco: siamo una{" "}
          <strong style={{ color: "#fff" }}>nuova piattaforma di comunicazione</strong>{" "}
          per il mondo cripto. Attraverso la visibilità diretta nel gioco, l'integrazione in tornei speciali
          e accordi di revenue sharing, creiamo un ecosistema in cui tutti vincono.
        </p>

        {/* Partner logos placeholder */}
        <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginBottom: 64 }}>
          {["DeFi", "Bitcoin", "Investment", "FinTech"].map((name, i) => (
            <div key={i} style={{
              width: 140, height: 80,
              background: "#0d2e2a",
              border: "1px solid #1DB89A22",
              borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              color: "#1DB89A", fontSize: 14, letterSpacing: "0.1em",
              transition: "border-color 0.3s, background 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#1DB89A"; e.currentTarget.style.background = "#1DB89A11"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1DB89A22"; e.currentTarget.style.background = "#0d2e2a"; }}
              role="img" aria-label={`Partner ${name}`}
            >
              {name}
            </div>
          ))}
        </div>

        {/* Form partner */}
        <div id="partner-form" style={{
          background: "#0a1f1c",
          border: "1px solid #1DB89A33",
          borderRadius: 16,
          padding: "48px 40px",
          maxWidth: 640,
          margin: "0 auto 64px",
          textAlign: "left",
        }}>
          <h3 style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
            fontSize: 28, color: "#fff", textTransform: "uppercase",
            margin: "0 0 8px", letterSpacing: "0.05em",
          }}>
            DIVENTA <span style={{ color: "#1DB89A" }}>PARTNER</span>
          </h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#5a8a85", marginBottom: 32 }}>
            Compila il form e ti ricontattiamo entro 48 ore.
          </p>
          <PartnerForm />
        </div>

        {/* CTA finale */}
        <div style={{
          background: "linear-gradient(135deg, #1DB89A, #0D8070)",
          borderRadius: 16, padding: "56px 48px",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0, opacity: 0.1,
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} aria-hidden="true" />
          <h3 style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
            fontSize: "clamp(28px, 4vw, 48px)", color: "#041410",
            textTransform: "uppercase", margin: "0 0 16px", position: "relative",
          }}>
            PRONTO A CAMBIARE LE REGOLE?
          </h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "#082820", marginBottom: 36, position: "relative" }}>
            Unisciti alla community. Il campionato è sempre aperto.
          </p>
          <a href="https://fantacryptoleague.io" rel="noopener"
            style={{
              background: "#041410", color: "#1DB89A",
              padding: "16px 40px", borderRadius: 8,
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
              fontSize: 18, letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none", display: "inline-block", position: "relative",
              transition: "transform 0.2s",
            }}
            onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
            onMouseLeave={e => e.target.style.transform = "scale(1)"}
          >
            Inizia Gratis →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer role="contentinfo" style={{
      background: "#020d0b",
      borderTop: "1px solid #1DB89A22",
      padding: "48px 24px 32px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32, marginBottom: 48 }}>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <CoinLogo size={36} />
              <div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 16, color: "#fff", letterSpacing: "0.08em" }}>FANTACRYPTO</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, color: "#1DB89A", letterSpacing: "0.12em" }}>LEAGUE.IO</div>
              </div>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#3d6e6a", maxWidth: 260, lineHeight: 1.7 }}>
              Il primo Fantasy Game su Crypto e strumenti finanziari. Gioca, impara, vinci.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, color: "#1DB89A", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Link</div>
            <ul role="list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <a href={l.href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#3d6e6a", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "#1DB89A"}
                    onMouseLeave={e => e.target.style.color = "#3d6e6a"}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, color: "#1DB89A", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Social</div>
            <div style={{ display: "flex", gap: 12 }}>
              {["Twitter/X", "Telegram", "Instagram"].map(s => (
                <a key={s} href="#" aria-label={s} style={{
                  width: 40, height: 40,
                  background: "#0d2e2a", border: "1px solid #1DB89A22",
                  borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#1DB89A", fontSize: 12, textDecoration: "none",
                  fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                  transition: "border-color 0.2s, background 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#1DB89A"; e.currentTarget.style.background = "#1DB89A22"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#1DB89A22"; e.currentTarget.style.background = "#0d2e2a"; }}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid #1DB89A11", paddingTop: 24,
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#2a5550", margin: 0 }}>
            © 2026 Fantacrypto League. Tutti i diritti riservati.
          </p>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#1a4440", margin: 0 }}>
            fantacryptoleague.io
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      {/* ── Global styles injected via style tag ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=DM+Sans:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #041410; }

        /* Ticker scroll */
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* Coin float */
        @keyframes coinFloat {
          0%, 100% { transform: translateY(0) rotate(-4deg); }
          50% { transform: translateY(-20px) rotate(4deg); }
        }

        /* Scroll bounce */
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
        }

        /* Focus styles for a11y */
        a:focus-visible {
          outline: 2px solid #1DB89A;
          outline-offset: 3px;
          border-radius: 4px;
        }
      `}</style>

      {/*
        ── SEO NOTE FOR DEPLOYMENT ──────────────────────────────────────────────
        In production (Vite/CRA/Next.js), add to <head> in index.html or via react-helmet:

        <title>Fantacrypto League | Il Fantasy Game sulle Criptovalute</title>
        <meta name="description" content="Fantacrypto League è il primo fantasy game su crypto e strumenti finanziari, in stile Fantasanremo. Scegli, gioca e crea le tue leghe crypto. 365 giorni l'anno." />
        <meta name="keywords" content="fantacrypto, fantasy game crypto, criptovalute gioco, fantacalcio crypto, bitcoin game, ethereum fantasy, crypto league" />
        <link rel="canonical" href="https://fantacryptoleague.io/" />

        <!-- Open Graph -->
        <meta property="og:title" content="Fantacrypto League | Il Fantasy Game sulle Criptovalute" />
        <meta property="og:description" content="Il primo fantasy game su crypto. Scegli, gioca e impara le dinamiche del mercato in tempo reale." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fantacryptoleague.io/" />
        <meta property="og:image" content="https://fantacryptoleague.io/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fantacrypto League" />
        <meta name="twitter:description" content="Il primo fantasy game su crypto e strumenti finanziari." />

        <!-- Structured Data (JSON-LD) -->
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Fantacrypto League",
          "url": "https://fantacryptoleague.io",
          "description": "Il primo Fantasy Game su Crypto e strumenti finanziari",
          "inLanguage": "it",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://fantacryptoleague.io/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
        </script>
        ────────────────────────────────────────────────────────────────────────
      */}

      <a href="#main-content" style={{
        position: "absolute", left: -9999, top: 0,
        background: "#1DB89A", color: "#041410", padding: "8px 16px",
        fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
        zIndex: 9999, textDecoration: "none",
      }}
        onFocus={e => e.target.style.left = "0"}
        onBlur={e => e.target.style.left = "-9999px"}
      >
        Salta al contenuto principale
      </a>

      {/* Header fisso: ticker + navbar in unico wrapper */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
        <Ticker />
        <Navbar />
      </div>

      {/* Spacer per compensare l'header fisso */}
      <div style={{ height: HEADER_HEIGHT }} />

      <main id="main-content">
        <Hero />
        <ChiSiamo />
        <ComeFunziona />
        <Visione />
        <Monetizzazione />
        <Partnership />
      </main>

      <Footer />
    </>
  );
}
