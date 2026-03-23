# Fantacrypto League — Landing Page

Sito React + Vite, deploy automatico su GitHub Pages con dominio custom `fantacrypto.io`.

---

## 🚀 Setup iniziale (una volta sola)

### 1. Crea il repo su GitHub

```bash
# Nella cartella del progetto
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Fantacrypto/fantacrypto-landing.git
git push -u origin main
```

### 2. Abilita GitHub Pages

1. Vai su **github.com/Fantacrypto/fantacrypto-landing**
2. **Settings** → **Pages**
3. Source: **GitHub Actions** (non "Deploy from a branch")
4. Salva

La prima Action partirà automaticamente. Attendi ~2 minuti.

### 3. Configura il dominio custom

Nelle impostazioni di **Pages** → **Custom domain** → inserisci `fantacrypto.io` → Save.

GitHub genererà automaticamente il certificato HTTPS.

---

## 🌐 Configurazione DNS (cPanel / registrar)

Aggiungi questi record DNS nel pannello del tuo dominio:

| Tipo | Nome | Valore |
|------|------|--------|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `fantacrypto.github.io` |

> ⚠️ La propagazione DNS richiede da 10 minuti a 48 ore.
> Puoi verificare su [dnschecker.org](https://dnschecker.org)

---

## 💻 Sviluppo locale

```bash
npm install
npm run dev
# → http://localhost:5173
```

## 🏗️ Build manuale

```bash
npm run build
# Output in /dist
```

---

## 📦 Struttura progetto

```
fantacrypto-landing/
├── .github/
│   └── workflows/
│       └── deploy.yml      ← GitHub Action (build + deploy automatico)
├── public/
│   └── CNAME               ← dominio custom per GitHub Pages
├── src/
│   ├── main.jsx            ← entry point React
│   └── App.jsx             ← landing page completa
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

---

## 🔄 Workflow aggiornamenti

```bash
# Modifica i file in src/App.jsx
git add .
git commit -m "descrizione modifica"
git push
# → GitHub Action fa il build e pubblica in automatico (~2 min)
```

---

## 📋 Checklist go-live

- [ ] Repo creato su GitHub
- [ ] GitHub Pages abilitato (source: GitHub Actions)
- [ ] Prima Action completata con successo ✅
- [ ] Record DNS A e CNAME configurati
- [ ] Dominio custom inserito in Pages settings
- [ ] HTTPS attivo (GitHub lo genera in automatico)
- [ ] Testato su mobile e desktop
