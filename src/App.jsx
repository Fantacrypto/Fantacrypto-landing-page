import React, { useState, useEffect } from "react";

// ─── TRADUZIONI ───────────────────────────────────────────────────────────────
const T = {
  it: {
    nav: { howItWorks: "Come funziona", vision: "Vision", partnership: "Partnership", play: "Gioca Ora" },
    hero: {
      line1: "IL MERCATO È", line2: "IL TUO CAMPO", line3: "DA GIOCO.",
      sub1: "Costruisci la tua squadra di crypto.",
      sub2: "Batti gli altri.", sub3: "Scala la classifica.",
      micro: "👉 Ogni scelta conta.",
      cta1: "Gioca Ora", cta2: "Vuoi diventare Partner?",
      stat1: "Giorni l'anno", stat2: "Leghe disponibili",
    },
    howItWorks: {
      label: "Come funziona", title: "PLAY.", titleHighlight: "LEARN.",
      steps: [
        { label: "COSTRUISCI", desc: "Seleziona le crypto migliori per la giornata." },
        { label: "OTTIMIZZA", desc: "Adatta la tua strategia al mercato reale." },
        { label: "VINCI", desc: "Guadagna punti e supera gli avversari." },
      ],
      closing1: "Non vince chi parte prima.",
      closing2: "Vince chi legge meglio il mercato.",
    },
    realMarket: {
      label: "Dati reali", title: "REAL MARKET.", titleHighlight: "REAL IMPACT.",
      desc: "Ogni risultato è basato su dati reali:",
      items: ["Prezzi di mercato", "Performance degli asset", "Dinamiche reali"],
      micro: "👉 Nessuna simulazione. Solo realtà.",
    },
    skill: {
      label: "Competizione", title: "SKILL", highlight: ">", title2: "FORTUNA",
      desc: "Qui contano:",
      items: [{ label: "Timing" }, { label: "Analisi" }, { label: "Gestione del rischio" }],
      micro: "👉 Se sai leggere il mercato, hai un vantaggio.",
    },
    modes: {
      label: "Modalità di gioco", title: "MODALITÀ", titleHighlight: "COMPETITIVE",
      items: [
        { title: "Leghe private", desc: "Sfida i tuoi amici in una lega personale." },
        { title: "Classifiche globali", desc: "Competi con una community più ampia." },
        { title: "Tornei a tempo", desc: "Ogni giornata è una nuova partita." },
      ],
      micro: "👉 Ogni giornata è una nuova partita.",
    },
    levelUp: {
      label: "Progressione", title: "PIÙ GIOCHI,", titleHighlight: "PIÙ MIGLIORI.",
      items: ["Capisci i trend", "Anticipi i movimenti", "Affini la strategia"],
      micro: "👉 Questo è allenamento reale.",
    },
    noMoney: {
      label: "Accessibilità", title: "NO MONEY.", titleHighlight: "REAL GAME.",
      desc: "Nessun capitale richiesto. Solo:",
      items: ["Skill", "Strategia", "Visione"],
    },
    vision: {
      label: "Vision", title: "VISION",
      desc: "Stiamo trasformando il modo in cui le persone entrano nel mondo crypto.",
      sub: "Non più solo trading.",
      micro: "👉 Esperienza.",
    },
    partnership: {
      label: "Partnership", title: "VUOI DIVENTARE", titleHighlight: "PARTNER?",
      desc: "Collaborazioni, sponsorizzazioni o integrazioni.\nFantacrypto è una piattaforma in crescita con una community verticale nel mondo crypto.",
      micro: "👉 Scrivici e vediamo cosa possiamo costruire insieme.",
    },
    form: {
      nameLabel: "Nome *", namePlaceholder: "Il tuo nome",
      emailLabel: "Email *", emailPlaceholder: "La tua email",
      companyLabel: "Progetto / Azienda", companyPlaceholder: "Nome progetto o azienda",
      messageLabel: "Messaggio", messagePlaceholder: "Che tipo di collaborazione hai in mente?",
      submit: "Invia richiesta", note: "Ti rispondiamo entro 24h",
      success: "Grazie! Ti rispondiamo entro 24h.",
      error: "Errore nell'invio. Scrivici a infofantacrypto@gmail.com",
    },
    cta: {
      title: "PENSI DI ESSERE", title2: "PIÙ BRAVO DEGLI ALTRI?",
      sub: "Dimostralo.", btn: "Entra in partita →",
    },
    footer: {
      desc: "Il fantasy game sulle criptovalute basato su dati reali di mercato.",
      links: "Link utili",
      linkItems: [
        { label: "Come funziona", href: "#come-funziona" },
        { label: "Vision", href: "#vision" },
        { label: "Partnership", href: "#partnership" },
        { label: "Contatti", href: "mailto:infofantacrypto@gmail.com" },
      ],
      social: "Social", contact: "Contatti",
      telegram: "Telegram ufficiale",
      copy: "© 2026 Fantacrypto. Tutti i diritti riservati.",
      tagline: "Built for players. Driven by the market.",
    },
    skip: "Salta al contenuto principale",
    close: "Chiudi menu", open: "Apri menu",
  },
  en: {
    nav: { howItWorks: "How it works", vision: "Vision", partnership: "Partnership", play: "Play Now" },
    hero: {
      line1: "THE MARKET IS", line2: "YOUR PLAYING", line3: "FIELD.",
      sub1: "Build your crypto team.",
      sub2: "Beat the others.", sub3: "Climb the leaderboard.",
      micro: "👉 Every choice matters.",
      cta1: "Play Now", cta2: "Become a Partner",
      stat1: "Days a year", stat2: "Available leagues",
    },
    howItWorks: {
      label: "How it works", title: "PLAY.", titleHighlight: "LEARN.",
      steps: [
        { label: "BUILD", desc: "Select the best crypto for the day." },
        { label: "OPTIMIZE", desc: "Adapt your strategy to the real market." },
        { label: "WIN", desc: "Earn points and outperform your rivals." },
      ],
      closing1: "It's not about who starts first.",
      closing2: "It's about who reads the market best.",
    },
    realMarket: {
      label: "Real data", title: "REAL MARKET.", titleHighlight: "REAL IMPACT.",
      desc: "Every result is based on real data:",
      items: ["Market prices", "Asset performance", "Real dynamics"],
      micro: "👉 No simulation. Pure reality.",
    },
    skill: {
      label: "Competition", title: "SKILL", highlight: ">", title2: "LUCK",
      desc: "What matters here:",
      items: [{ label: "Timing" }, { label: "Analysis" }, { label: "Risk management" }],
      micro: "👉 If you can read the market, you have an edge.",
    },
    modes: {
      label: "Game modes", title: "COMPETITIVE", titleHighlight: "MODES",
      items: [
        { title: "Private leagues", desc: "Challenge your friends in a personal league." },
        { title: "Global rankings", desc: "Compete against a wider community." },
        { title: "Timed tournaments", desc: "Every matchday is a brand new game." },
      ],
      micro: "👉 Every matchday is a brand new game.",
    },
    levelUp: {
      label: "Progression", title: "THE MORE YOU PLAY,", titleHighlight: "THE BETTER YOU GET.",
      items: ["You understand trends", "You anticipate moves", "You sharpen your strategy"],
      micro: "👉 This is real training.",
    },
    noMoney: {
      label: "Accessibility", title: "NO MONEY.", titleHighlight: "REAL GAME.",
      desc: "No capital required. Just:",
      items: ["Skill", "Strategy", "Vision"],
    },
    vision: {
      label: "Vision", title: "VISION",
      desc: "We are transforming the way people enter the crypto world.",
      sub: "Not just trading anymore.",
      micro: "👉 Experience.",
    },
    partnership: {
      label: "Partnership", title: "WANT TO BECOME", titleHighlight: "A PARTNER?",
      desc: "Collaborations, sponsorships or integrations.\nFantacrypto is a growing platform with a vertical community in the crypto world.",
      micro: "👉 Write to us and let's see what we can build together.",
    },
    form: {
      nameLabel: "Name *", namePlaceholder: "Your name",
      emailLabel: "Email *", emailPlaceholder: "Your email",
      companyLabel: "Project / Company", companyPlaceholder: "Project or company name",
      messageLabel: "Message", messagePlaceholder: "What kind of collaboration do you have in mind?",
      submit: "Send request", note: "We reply within 24h",
      success: "Thanks! We'll get back to you within 24h.",
      error: "Sending failed. Reach us at infofantacrypto@gmail.com",
    },
    cta: {
      title: "THINK YOU'RE BETTER", title2: "THAN THE OTHERS?",
      sub: "Prove it.", btn: "Enter the game →",
    },
    footer: {
      desc: "The fantasy game on crypto based on real market data.",
      links: "Useful links",
      linkItems: [
        { label: "How it works", href: "#come-funziona" },
        { label: "Vision", href: "#vision" },
        { label: "Partnership", href: "#partnership" },
        { label: "Contact", href: "mailto:infofantacrypto@gmail.com" },
      ],
      social: "Social", contact: "Contact",
      telegram: "Official Telegram",
      copy: "© 2026 Fantacrypto. All rights reserved.",
      tagline: "Built for players. Driven by the market.",
    },
    skip: "Skip to main content",
    close: "Close menu", open: "Open menu",
  },
};

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/fantacrypto.io?igsh=MWNlc2Z0ZHNmeXBnZw==", svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
  { label: "X", href: "https://x.com/FCrypto52502", svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: "TikTok", href: "https://www.tiktok.com/@fantacrypto.io?_r=1&_t=ZN-952DMsuTnhG", svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z"/></svg> },
  { label: "Telegram", href: "https://t.me/fantacrypto", svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg> },
];

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

const DEFAULT_TICKER_ITEMS = ["BTC +2.4%", "ETH +1.8%", "BNB -0.3%", "SOL +5.1%", "ADA +0.9%", "DOGE +3.2%", "XRP +1.1%", "AVAX +4.7%", "MATIC +2.0%", "LINK +1.5%"];
const COINGECKO_ASSETS = [
  { symbol: "BTC", id: "bitcoin" },
  { symbol: "ETH", id: "ethereum" },
  { symbol: "BNB", id: "binancecoin" },
  { symbol: "SOL", id: "solana" },
  { symbol: "ADA", id: "cardano" },
  { symbol: "DOGE", id: "dogecoin" },
  { symbol: "XRP", id: "ripple" },
  { symbol: "AVAX", id: "avalanche-2" },
  { symbol: "MATIC", id: "matic-network" },
  { symbol: "LINK", id: "chainlink" },
];
const TICKER_HEIGHT = 34;
const NAV_HEIGHT = 64;
const HEADER_HEIGHT = TICKER_HEIGHT + NAV_HEIGHT;

function Ticker() {
  const [tickerItems, setTickerItems] = useState(DEFAULT_TICKER_ITEMS);

  useEffect(() => {
    let isMounted = true;
    const ids = COINGECKO_ASSETS.map((asset) => asset.id).join(",");

    const loadTicker = async () => {
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`);
        if (!res.ok) return;
        const data = await res.json();
        const nextItems = COINGECKO_ASSETS.map(({ symbol, id }) => {
          const rawChange = data?.[id]?.usd_24h_change;
          if (typeof rawChange !== "number") return null;
          const rounded = Math.abs(rawChange).toFixed(1);
          const sign = rawChange >= 0 ? "+" : "-";
          return `${symbol} ${sign}${rounded}%`;
        }).filter(Boolean);
        if (isMounted && nextItems.length > 0) setTickerItems(nextItems);
      } catch { }
    };

    loadTicker();
    const interval = setInterval(loadTicker, 60000);
    return () => { isMounted = false; clearInterval(interval); };
  }, []);

  return (
    <div style={{ background: "#0a2e2a", borderBottom: "1px solid #1DB89A22", overflow: "hidden", height: TICKER_HEIGHT, display: "flex", alignItems: "center", fontSize: "12px", fontFamily: "'Space Mono', monospace", color: "#1DB89A", letterSpacing: "0.05em" }}>
      <div style={{ display: "flex", gap: "48px", animation: "tickerScroll 30s linear infinite", whiteSpace: "nowrap" }}>
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span key={i} style={{ opacity: item.includes("-") ? 0.6 : 1, color: item.includes("-") ? "#ff6b6b" : "#1DB89A" }}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function LangToggle({ lang, setLang }) {
  return (
    <button
      onClick={() => setLang(lang === "it" ? "en" : "it")}
      style={{ background: "transparent", border: "1px solid #1DB89A55", borderRadius: 6, padding: "6px 12px", cursor: "pointer", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", color: "#1DB89A", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 6 }}
      onMouseEnter={e => { e.currentTarget.style.background = "#1DB89A22"; e.currentTarget.style.borderColor = "#1DB89A"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#1DB89A55"; }}
      aria-label={lang === "it" ? "Switch to English" : "Passa all'italiano"}
    >
      {lang === "it" ? "🇬🇧 EN" : "🇮🇹 IT"}
    </button>
  );
}

function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = T[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.howItWorks, href: "#come-funziona" },
    { label: t.vision, href: "#vision" },
    { label: t.partnership, href: "#partnership" },
  ];

  return (
    <header role="banner" style={{ background: scrolled ? "rgba(8,28,25,0.96)" : "rgba(4,20,16,0.85)", backdropFilter: "blur(16px)", borderBottom: scrolled ? "1px solid #1DB89A22" : "none", transition: "all 0.3s ease", padding: "0 24px" }}>
      <nav role="navigation" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: NAV_HEIGHT }}>
        <a href="#hero" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/FantacryptoWhite.svg" alt="Fantacrypto" style={{ height: 44, width: "auto", display: "block" }} onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} />
          <div style={{ display: "none", alignItems: "center", gap: 10 }}>
            <CoinLogo size={40} />
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 18, color: "#fff", letterSpacing: "0.08em", lineHeight: 1.1 }}>FANTACRYPTO</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, color: "#1DB89A", letterSpacing: "0.12em" }}>LEAGUE.IO</div>
            </div>
          </div>
        </a>

        <ul role="list" style={{ display: "flex", gap: 28, listStyle: "none", margin: 0, padding: 0, alignItems: "center" }} className="desktop-nav">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} style={{ color: "#a0c8c2", textDecoration: "none", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: 15, letterSpacing: "0.06em", textTransform: "uppercase", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#1DB89A"} onMouseLeave={e => e.target.style.color = "#a0c8c2"}>
                {link.label}
              </a>
            </li>
          ))}
          <li><LangToggle lang={lang} setLang={setLang} /></li>
          <li>
            <a href="https://www.fantacryptoleague.io/" style={{ background: "#1DB89A", color: "#041410", padding: "10px 24px", borderRadius: 6, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s", display: "inline-block" }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 24px #1DB89A44"; }} onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}>
              {t.play}
            </a>
          </li>
        </ul>

        <div style={{ display: "none", alignItems: "center", gap: 12 }} className="hamburger">
          <LangToggle lang={lang} setLang={setLang} />
          <button aria-label={menuOpen ? T[lang].close : T[lang].open} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", fontSize: 28 }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{ background: "rgba(8,28,25,0.98)", padding: "16px 24px 24px", borderTop: "1px solid #1DB89A22" }}>
          <ul role="list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)} style={{ color: "#a0c8c2", textDecoration: "none", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="https://www.fantacryptoleague.io/" onClick={() => setMenuOpen(false)} style={{ background: "#1DB89A", color: "#041410", padding: "12px 28px", borderRadius: 6, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 16, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", marginTop: 8 }}>
                {t.play}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero({ lang }) {
  const t = T[lang].hero;
  return (
    <section id="hero" style={{ minHeight: "100vh", background: "linear-gradient(135deg, #041410 0%, #0a2e2a 40%, #0D4F4A 75%, #1DB89A 100%)", display: "flex", alignItems: "center", padding: "60px 24px 80px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "linear-gradient(#1DB89A 1px, transparent 1px), linear-gradient(90deg, #1DB89A 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} aria-hidden="true" />
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, #1DB89A22 0%, transparent 70%)", right: -100, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} aria-hidden="true" />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: 64, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 480px", minWidth: 0 }}>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(52px, 9vw, 104px)", color: "#fff", lineHeight: 0.95, letterSpacing: "-0.02em", margin: "0 0 32px", textTransform: "uppercase" }}>
            {t.line1}<br /><span style={{ color: "#1DB89A" }}>{t.line2}</span><br />{t.line3}
          </h1>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#a0c8c2", letterSpacing: "0.04em", marginBottom: 12, textTransform: "uppercase", lineHeight: 1.4 }}>
            {t.sub1}<br />{t.sub2}<br />{t.sub3}
          </p>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#1DB89A", marginBottom: 48, letterSpacing: "0.05em" }}>{t.micro}</p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="https://www.fantacryptoleague.io/" style={{ background: "#1DB89A", color: "#041410", padding: "16px 36px", borderRadius: 6, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(16px, 1.5vw, 18px)", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s", display: "inline-block" }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 24px #1DB89A44"; }} onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}>
              {t.cta1}
            </a>
            <button onClick={() => document.getElementById("partner-form").scrollIntoView({ behavior: "smooth", block: "start" })}
              style={{ border: "1px solid #1DB89A55", color: "#1DB89A", padding: "16px 36px", borderRadius: 6, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(16px, 1.5vw, 18px)", letterSpacing: "0.1em", textTransform: "uppercase", background: "transparent", cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={e => { e.target.style.background = "#1DB89A11"; e.target.style.borderColor = "#1DB89A"; }} onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.borderColor = "#1DB89A55"; }}>
              {t.cta2}
            </button>
          </div>

          <div style={{ display: "flex", gap: 40, marginTop: 56, flexWrap: "wrap" }}>
            {[{ num: "365", label: t.stat1 }, { num: "∞", label: t.stat2 }].map(stat => (
              <div key={stat.label}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(32px, 3vw, 44px)", color: "#1DB89A", lineHeight: 1 }}>{stat.num}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#5a8a85", marginTop: 4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: "1 1 340px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ animation: "coinFloat 4s ease-in-out infinite", filter: "drop-shadow(0 30px 60px #1DB89A55)" }}>
            <svg style={{ width: "clamp(280px, 40vw, 420px)", height: "clamp(280px, 40vw, 420px)" }} viewBox="0 0 200 200" fill="none">
              <defs>
                <radialGradient id="coinGrad" cx="40%" cy="35%"><stop offset="0%" stopColor="#2ecfae" /><stop offset="60%" stopColor="#1DB89A" /><stop offset="100%" stopColor="#0D8070" /></radialGradient>
                <radialGradient id="coinInner" cx="45%" cy="40%"><stop offset="0%" stopColor="#25c9a3" /><stop offset="100%" stopColor="#129078" /></radialGradient>
                <clipPath id="coinClip"><circle cx="100" cy="95" r="54" /></clipPath>
              </defs>
              <ellipse cx="100" cy="165" rx="60" ry="16" fill="#0a2e2a" opacity="0.8" />
              <circle cx="100" cy="98" r="78" fill="#082820" />
              <circle cx="100" cy="95" r="78" fill="url(#coinGrad)" />
              <circle cx="100" cy="95" r="66" fill="url(#coinInner)" />
              <circle cx="100" cy="95" r="58" fill="none" stroke="#0D4F4A" strokeWidth="4" />
              <image href="/fc-symbol.png" x="38" y="33" width="124" height="124" clipPath="url(#coinClip)" preserveAspectRatio="xMidYMid meet" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComeFunziona({ lang }) {
  const t = T[lang].howItWorks;
  const stepVisuals = [
    { src: "/play.png", name: lang === "it" ? "Selezione Asset" : "Asset Selection" },
    { src: "/win.png", name: lang === "it" ? "Strategia Dinamica" : "Dynamic Strategy" },
    { src: "/better.png", name: lang === "it" ? "Podio Finale" : "Final Podium" },
  ];
  return (
    <section id="come-funziona" style={{ padding: "120px 24px", background: "#041410", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #1DB89A, transparent)" }} aria-hidden="true" />
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#1DB89A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>{t.label}</div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(36px, 5vw, 60px)", color: "#fff", textTransform: "uppercase", margin: 0, lineHeight: 1.05 }}>
            {t.title} <span style={{ color: "#1DB89A" }}>{t.titleHighlight}</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 2 }}>
          {t.steps.map((step, i) => (
            <article key={i} style={{ background: i === 1 ? "linear-gradient(180deg, #1DB89A11, #1DB89A08)" : "transparent", border: "1px solid #1DB89A22", borderRadius: 12, padding: "48px 36px", position: "relative", overflow: "hidden", transition: "background 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.background = "linear-gradient(180deg, #1DB89A15, #1DB89A05)"}
              onMouseLeave={e => e.currentTarget.style.background = i === 1 ? "linear-gradient(180deg, #1DB89A11, #1DB89A08)" : "transparent"}>
              <div style={{ position: "absolute", top: 16, right: 20, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 80, color: "#1DB89A08", lineHeight: 1, userSelect: "none" }} aria-hidden="true">0{i + 1}</div>
              <div style={{ width: 200, height: 200, border: "none", borderRadius: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#06231e", marginBottom: 20, overflow: "hidden" }}>
                <img src={stepVisuals[i].src} alt={stepVisuals[i].name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => e.target.style.display = "none"} />
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#5fa69d", marginBottom: 12 }}>{stepVisuals[i].name}</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#1DB89A", letterSpacing: "0.2em", marginBottom: 12 }}>{step.label}</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.7, color: "#7ab0aa", margin: 0 }}>{step.desc}</p>
            </article>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 64 }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(20px, 2.5vw, 28px)", color: "#fff", textTransform: "uppercase", lineHeight: 1.4, margin: 0 }}>
            {t.closing1}<br /><span style={{ color: "#1DB89A" }}>{t.closing2}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function PlexusCanvas() {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const NUM = 60;
    const MAX_DIST = 140;
    const nodes = Array.from({ length: NUM }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2 + 1.5,
    }));

    const draw = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Aggiorna posizioni
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      // Disegna linee
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.5;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(29, 184, 154, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Disegna punti
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(29, 184, 154, 0.8)";
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
      aria-hidden="true"
    />
  );
}

function RealMarket({ lang }) {
  const t = T[lang].realMarket;
  return (
    <section id="real-market" style={{ padding: "120px 24px", background: "#041410", position: "relative", overflow: "hidden", minHeight: 480 }}>

      {/* Plexus canvas */}
      <PlexusCanvas />

      {/* Glow centrale */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(ellipse 60% 50% at 50% 60%, #1DB89A08 0%, transparent 70%)", pointerEvents: "none" }} aria-hidden="true" />

      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#1DB89A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>{t.label}</div>
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(36px, 5vw, 64px)", color: "#fff", textTransform: "uppercase", margin: "0 0 40px", lineHeight: 1.05 }}>
          {t.title}<br /><span style={{ color: "#1DB89A" }}>{t.titleHighlight}</span>
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: "#7ab0aa", marginBottom: 56, lineHeight: 1.7 }}>{t.desc}</p>

        {/* Card fluttuanti sopra il plexus */}
        <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", marginBottom: 56 }}>
          {t.items.map((item, i) => (
            <div key={i} style={{
              background: "rgba(4, 20, 16, 0.7)",
              backdropFilter: "blur(16px)",
              border: "1px solid #1DB89A55",
              borderRadius: 16,
              padding: "24px 36px",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700, fontSize: 18,
              color: "#1DB89A", letterSpacing: "0.08em", textTransform: "uppercase",
              boxShadow: "0 8px 32px #00000066, 0 0 20px #1DB89A11",
              animation: `floatCard${i} ${3.5 + i * 0.7}s ease-in-out infinite`,
              transition: "border-color 0.3s, box-shadow 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#1DB89A99"; e.currentTarget.style.boxShadow = "0 12px 40px #1DB89A33"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1DB89A55"; e.currentTarget.style.boxShadow = "0 8px 32px #00000066, 0 0 20px #1DB89A11"; }}
            >
              {item}
            </div>
          ))}
        </div>

        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#1DB89A", letterSpacing: "0.05em" }}>{t.micro}</p>
      </div>

      <style>{`
        @keyframes floatCard0 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes floatCard1 { 0%, 100% { transform: translateY(-6px); } 50% { transform: translateY(8px); } }
        @keyframes floatCard2 { 0%, 100% { transform: translateY(4px); } 50% { transform: translateY(-12px); } }
      `}</style>
    </section>
  );
}
function Skill({ lang }) {
  const t = T[lang].skill;

  const icons = [
    // Timer - Timing
    <svg width="40" height="40" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M128 72V128L168 152" stroke="#1DB89A" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M104 24H152" stroke="#1DB89A" strokeWidth="16" strokeLinecap="round"/>
      <circle cx="128" cy="136" r="88" stroke="#1DB89A" strokeWidth="16"/>
    </svg>,
    // ChartLine - Analysis
    <svg width="40" height="40" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 200L96 136L136 176L224 72" stroke="#1DB89A" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M176 72H224V120" stroke="#1DB89A" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // ShieldWarning - Risk management
    <svg width="40" height="40" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 114.79V56L128 24L216 56V114.79C216 163.36 178.11 208.7 128 224C77.89 208.7 40 163.36 40 114.79Z" stroke="#1DB89A" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M128 104V136" stroke="#1DB89A" strokeWidth="16" strokeLinecap="round"/>
      <circle cx="128" cy="164" r="10" fill="#1DB89A"/>
    </svg>,
  ];

  return (
    <section id="skill" style={{ padding: "120px 24px", background: "#041410" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#1DB89A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>{t.label}</div>
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(36px, 5vw, 72px)", color: "#fff", textTransform: "uppercase", margin: "0 0 40px", lineHeight: 1.05 }}>
          {t.title} <span style={{ color: "#1DB89A" }}>{t.highlight}</span> {t.title2}
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: "#7ab0aa", marginBottom: 40, lineHeight: 1.7 }}>{t.desc}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginBottom: 48 }}>
          {t.items.map((item, i) => (
            <div key={i} style={{ background: "linear-gradient(135deg, #0d2e2a, #0a2220)", border: "1px solid #1DB89A22", borderRadius: 12, padding: "28px 32px", textAlign: "center", minWidth: 140, transition: "border-color 0.3s, transform 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#1DB89A66"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1DB89A22"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ marginBottom: 14 }}>{icons[i]}</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 16, color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#1DB89A", letterSpacing: "0.05em" }}>{t.micro}</p>
      </div>
    </section>
  );
}

function Modalita({ lang }) {
  const t = T[lang].modes;

  const icons = [
    // Lock - Private leagues
    <svg width="44" height="44" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="112" width="176" height="128" rx="8" stroke="#1DB89A" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M88 112V80C88 53.49 106.05 32 128 32C149.95 32 168 53.49 168 80V112" stroke="#1DB89A" strokeWidth="16" strokeLinecap="round"/>
      <circle cx="128" cy="168" r="12" fill="#1DB89A"/>
      <path d="M128 180V200" stroke="#1DB89A" strokeWidth="16" strokeLinecap="round"/>
    </svg>,
    // Trophy - Global rankings
    <svg width="44" height="44" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M56 40H200V136C200 172.93 167.67 203.2 128 203.2C88.33 203.2 56 172.93 56 136V40Z" stroke="#1DB89A" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M56 80H24C24 80 24 136 56 136" stroke="#1DB89A" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M200 80H232C232 80 232 136 200 136" stroke="#1DB89A" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M96 224H160" stroke="#1DB89A" strokeWidth="16" strokeLinecap="round"/>
      <path d="M128 203.2V224" stroke="#1DB89A" strokeWidth="16" strokeLinecap="round"/>
    </svg>,
    // Lightning - Timed tournaments
    <svg width="44" height="44" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M144 24L32 144H128L112 232L224 112H128L144 24Z" stroke="#1DB89A" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
  ];

  return (
    <section id="modalita" style={{ padding: "120px 24px", background: "#061c18" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#1DB89A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>{t.label}</div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", textTransform: "uppercase", margin: 0, lineHeight: 1.05 }}>
            {t.title} <span style={{ color: "#1DB89A" }}>{t.titleHighlight}</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 56 }}>
          {t.items.map((m, i) => (
            <article key={i} style={{ background: "linear-gradient(135deg, #0d2e2a, #0a2220)", border: "1px solid #1DB89A22", borderRadius: 12, padding: "32px 28px", transition: "border-color 0.3s, transform 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#1DB89A66"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1DB89A22"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ marginBottom: 16 }}>{icons[i]}</div>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 20, color: "#1DB89A", textTransform: "uppercase", margin: "0 0 12px" }}>{m.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: "#6a9e98", margin: 0 }}>{m.desc}</p>
            </article>
          ))}
        </div>
        <p style={{ textAlign: "center", fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#1DB89A", letterSpacing: "0.05em" }}>{t.micro}</p>
      </div>
    </section>
  );
}

function LevelUp({ lang }) {
  const t = T[lang].levelUp;
  return (
    <section id="level-up" style={{ padding: "120px 24px", background: "#041410" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#1DB89A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>{t.label}</div>
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(36px, 5vw, 64px)", color: "#fff", textTransform: "uppercase", margin: "0 0 40px", lineHeight: 1.05 }}>
          {t.title}<br /><span style={{ color: "#1DB89A" }}>{t.titleHighlight}</span>
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 480, margin: "0 auto 48px", textAlign: "left" }}>
          {t.items.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, background: "#0a1f1c", border: "1px solid #1DB89A22", borderRadius: 8, padding: "16px 20px" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1DB89A", flexShrink: 0 }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#7ab0aa" }}>{item}</span>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#1DB89A", letterSpacing: "0.05em" }}>{t.micro}</p>
      </div>
    </section>
  );
}

function NoMoney({ lang }) {
  const t = T[lang].noMoney;
  return (
    <section id="no-money" style={{ padding: "120px 24px", background: "linear-gradient(135deg, #061c18, #0a2e2a)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#1DB89A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>{t.label}</div>
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(36px, 5vw, 72px)", color: "#fff", textTransform: "uppercase", margin: "0 0 40px", lineHeight: 1.05 }}>
          {t.title}<br /><span style={{ color: "#1DB89A" }}>{t.titleHighlight}</span>
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: "#7ab0aa", marginBottom: 40, lineHeight: 1.7 }}>{t.desc}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
          {t.items.map((item, i) => (
            <div key={i} style={{ background: "#1DB89A", color: "#041410", borderRadius: 8, padding: "14px 32px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 20, letterSpacing: "0.1em", textTransform: "uppercase" }}>{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vision({ lang }) {
  const t = T[lang].vision;
  return (
    <section id="vision" style={{ padding: "120px 24px", background: "#041410" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#1DB89A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>{t.label}</div>
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(36px, 5vw, 64px)", color: "#fff", textTransform: "uppercase", margin: "0 0 40px", lineHeight: 1.05 }}>{t.title}</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 20, color: "#7ab0aa", lineHeight: 1.8, maxWidth: 640, margin: "0 auto 24px" }}>{t.desc}</p>
        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 24, color: "#fff", textTransform: "uppercase", marginBottom: 12 }}>{t.sub}</p>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 14, color: "#1DB89A", letterSpacing: "0.05em" }}>{t.micro}</p>
      </div>
    </section>
  );
}

function PartnerFormComponent({ lang }) {
  const t = T[lang].form;
  const [form, setForm] = useState({ nome: "", email: "", azienda: "", messaggio: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const inputStyle = { width: "100%", padding: "12px 16px", background: "#061c18", border: "1px solid #1DB89A33", borderRadius: 8, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: 15, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" };
  const labelStyle = { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, color: "#1DB89A", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 };

  const handleSubmit = async (e) => {
    e.preventDefault(); setError(false);
    try {
      const res = await fetch("https://formspree.io/f/xqegzqzr", { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) setSent(true); else setError(true);
    } catch { setError(true); }
  };

  if (sent) return <div style={{ textAlign: "center", padding: "32px 0" }}><div style={{ fontSize: 48, marginBottom: 16 }}>✅</div><p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 22, color: "#1DB89A" }}>{t.success}</p></div>;

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div><label style={labelStyle}>{t.nameLabel}</label><input type="text" required placeholder={t.namePlaceholder} value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} style={inputStyle} onFocus={e => e.target.style.borderColor = "#1DB89A"} onBlur={e => e.target.style.borderColor = "#1DB89A33"} /></div>
      <div><label style={labelStyle}>{t.emailLabel}</label><input type="email" required placeholder={t.emailPlaceholder} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle} onFocus={e => e.target.style.borderColor = "#1DB89A"} onBlur={e => e.target.style.borderColor = "#1DB89A33"} /></div>
      <div><label style={labelStyle}>{t.companyLabel}</label><input type="text" placeholder={t.companyPlaceholder} value={form.azienda} onChange={e => setForm({ ...form, azienda: e.target.value })} style={inputStyle} onFocus={e => e.target.style.borderColor = "#1DB89A"} onBlur={e => e.target.style.borderColor = "#1DB89A33"} /></div>
      <div><label style={labelStyle}>{t.messageLabel}</label><textarea rows={4} placeholder={t.messagePlaceholder} value={form.messaggio} onChange={e => setForm({ ...form, messaggio: e.target.value })} style={{ ...inputStyle, resize: "vertical", minHeight: 100 }} onFocus={e => e.target.style.borderColor = "#1DB89A"} onBlur={e => e.target.style.borderColor = "#1DB89A33"} /></div>
      {error && <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#ff6b6b", margin: 0 }}>{t.error}</p>}
      <div>
        <button type="submit" style={{ background: "#1DB89A", color: "#041410", padding: "14px 32px", borderRadius: 8, border: "none", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 16, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s" }}
          onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 24px #1DB89A44"; }} onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}>
          {t.submit}
        </button>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#5a8a85", marginTop: 10 }}>{t.note}</p>
      </div>
    </form>
  );
}

function Partnership({ lang }) {
  const t = T[lang].partnership;
  return (
    <section id="partnership" style={{ padding: "120px 24px", background: "#061c18" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#1DB89A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>{t.label}</div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", textTransform: "uppercase", margin: "0 0 24px", lineHeight: 1.05 }}>
            {t.title} <span style={{ color: "#1DB89A" }}>{t.titleHighlight}</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "#6a9e98", maxWidth: 600, margin: "0 auto", lineHeight: 1.8 }}>
            {t.desc.split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
          </p>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#1DB89A", marginTop: 16, letterSpacing: "0.05em" }}>{t.micro}</p>
        </div>
        <div id="partner-form" style={{ background: "#0a1f1c", border: "1px solid #1DB89A33", borderRadius: 16, padding: "48px 40px", maxWidth: 640, margin: "0 auto" }}>
          <PartnerFormComponent lang={lang} />
        </div>
      </div>
    </section>
  );
}

function CtaFinale({ lang }) {
  const t = T[lang].cta;
  return (
    <section style={{ padding: "120px 24px", background: "#041410" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", background: "linear-gradient(135deg, #1DB89A, #0D8070)", borderRadius: 20, padding: "80px 48px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.08, backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} aria-hidden="true" />
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(32px, 5vw, 60px)", color: "#041410", textTransform: "uppercase", margin: "0 0 16px", lineHeight: 1.05, position: "relative" }}>
          {t.title}<br />{t.title2}
        </h2>
        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 28, color: "#082820", marginBottom: 40, position: "relative", textTransform: "uppercase" }}>{t.sub}</p>
        <a href="https://www.fantacryptoleague.io/" style={{ background: "#041410", color: "#1DB89A", padding: "18px 48px", borderRadius: 8, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 20, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", position: "relative", transition: "transform 0.2s" }}
          onMouseEnter={e => e.target.style.transform = "scale(1.04)"} onMouseLeave={e => e.target.style.transform = "scale(1)"}>
          {t.btn}
        </a>
      </div>
    </section>
  );
}

function Footer({ lang }) {
  const t = T[lang].footer;
  return (
    <footer role="contentinfo" style={{ background: "#020d0b", borderTop: "1px solid #1DB89A22", padding: "64px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 48, marginBottom: 56 }}>
          <div style={{ maxWidth: 300 }}>
            <a href="#hero" style={{ display: "inline-block", marginBottom: 16, textDecoration: "none" }}>
              <img src="/FantacryptoWhite.svg" alt="Fantacrypto" style={{ height: 40, width: "auto" }} onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "block"; }} />
              <div style={{ display: "none" }}><div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 18, color: "#fff", letterSpacing: "0.08em" }}>FANTACRYPTO</div></div>
            </a>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#3d6e6a", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
          </div>
          <nav>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, color: "#1DB89A", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>{t.links}</div>
            <ul role="list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {t.linkItems.map(l => (
                <li key={l.href}><a href={l.href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#3d6e6a", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#1DB89A"} onMouseLeave={e => e.target.style.color = "#3d6e6a"}>{l.label}</a></li>
              ))}
            </ul>
          </nav>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, color: "#1DB89A", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>{t.social}</div>
            <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
              {SOCIAL_LINKS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ width: 44, height: 44, background: "#0d2e2a", border: "1px solid #1DB89A22", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#1DB89A", textDecoration: "none", transition: "border-color 0.2s, background 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#1DB89A"; e.currentTarget.style.background = "#1DB89A22"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "#1DB89A22"; e.currentTarget.style.background = "#0d2e2a"; }}>
                  {s.svg}
                </a>
              ))}
            </div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, color: "#1DB89A", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>{t.contact}</div>
            <a href="mailto:infofantacrypto@gmail.com" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#3d6e6a", textDecoration: "none", display: "block", marginBottom: 6, transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#1DB89A"} onMouseLeave={e => e.target.style.color = "#3d6e6a"}>infofantacrypto@gmail.com</a>
            <a href="https://t.me/fantacrypto" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#3d6e6a", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#1DB89A"} onMouseLeave={e => e.target.style.color = "#3d6e6a"}>{t.telegram}</a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1DB89A11", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#2a5550", margin: 0 }}>{t.copy}</p>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#1a4440", margin: 0 }}>{t.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState("it");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=DM+Sans:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #041410; }
        @keyframes tickerScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes coinFloat { 0%, 100% { transform: translateY(0) rotate(-4deg); } 50% { transform: translateY(-20px) rotate(4deg); } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .hamburger { display: flex !important; } }
        @media (min-width: 769px) { .hamburger { display: none !important; } }
        a:focus-visible { outline: 2px solid #1DB89A; outline-offset: 3px; border-radius: 4px; }
      `}</style>

      <a href="#main-content" style={{ position: "absolute", left: -9999, top: 0, background: "#1DB89A", color: "#041410", padding: "8px 16px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, zIndex: 9999, textDecoration: "none" }}
        onFocus={e => e.target.style.left = "0"} onBlur={e => e.target.style.left = "-9999px"}>
        {T[lang].skip}
      </a>

      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
        <Ticker />
        <Navbar lang={lang} setLang={setLang} />
      </div>

      <div style={{ height: HEADER_HEIGHT }} />

      <main id="main-content">
        <Hero lang={lang} />
        <ComeFunziona lang={lang} />
        <RealMarket lang={lang} />
        <Skill lang={lang} />
        <Modalita lang={lang} />
        <LevelUp lang={lang} />
        <NoMoney lang={lang} />
        <Vision lang={lang} />
        <Partnership lang={lang} />
        <CtaFinale lang={lang} />
      </main>

      <Footer lang={lang} />
    </>
  );
}
