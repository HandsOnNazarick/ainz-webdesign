# Ainz Web Design

Site vitrine commercial pour la prospection freelance (web design pour commerces locaux à Fribourg).

## Stack
- HTML / CSS / JS purs (aucune dépendance, aucune build)
- Police : Inter (Google Fonts)
- Hébergement cible : GitHub Pages

## Structure
```
ainz-web-design/
├── index.html      # Page unique (4 sections : hero, services, pricing, examples, process, contact)
├── style.css       # Thème sombre premium (noir + or)
├── script.js       # Nav scroll, menu mobile, fade-in on scroll, smooth scroll
└── README.md
```

## Sections du site
1. **Hero** — titre + CTA téléphone (076 579 85 30) + devis
2. **Services** — 6 cartes (coiffeurs, restaurants, artisans, esthétique, médical, commerces)
3. **Tarifs** — 3 formules (300 / 500-700 / 800-900 CHF)
4. **Exemples** — 3 mockups avant/après (coiffeur, restaurant, artisan)
5. **Processus** — 4 étapes (appel → maquette → réalisation → livraison)
6. **Contact** — téléphone + WhatsApp + email

## Déployer sur GitHub Pages

### Étape 1 — Créer le repo
```bash
cd "/c/Users/alaza/projects/ainz-web-design"
git init
git add .
git commit -m "Initial site Ainz Web Design"
gh repo create ainz-web-design --public --source=. --remote=origin --push
```

### Étape 2 — Activer GitHub Pages
- Repo → Settings → Pages
- Source : `Deploy from a branch`
- Branch : `main` / `(root)`
- URL : `https://<ton-user>.github.io/ainz-web-design/`

### Étape 3 — Domaine custom (optionnel, ~15 CHF/an)
Acheter `ainz-webdesign.ch` ou `.com` (Infomaniak / Namecheap).
DNS : CNAME pointant vers `<ton-user>.github.io`
Ajouter un fichier `CNAME` à la racine avec le domaine.

## À faire avant de prospecter

- [ ] Vérifier le rendu sur mobile (Chrome DevTools)
- [ ] Ajouter un vrai screenshot d'exemple par secteur (pas des mockups)
- [ ] Configurer un vrai email `contact@ainz-webdesign.ch`
- [ ] (Optionnel) Ajouter Google Analytics / Plausible
- [ ] Remplacer les liens `wa.me/41765798530` si le numéro WhatsApp est différent

## Modifications courantes

### Changer le numéro de téléphone
Chercher `+41765798530` dans `index.html` (4 occurrences) et remplacer globalement.

### Changer les prix
Section `id="pricing"` dans `index.html`. Modifier les `.pricing-price`.

### Ajouter une section
Copier une `<section>` existante comme template. Le CSS est componentisé par nom de classe.

## Contact démo (à remplacer)
- Téléphone : 076 579 85 30
- Email : contact@ainz-webdesign.ch (placeholder — à configurer)
- WhatsApp : wa.me/41765798530