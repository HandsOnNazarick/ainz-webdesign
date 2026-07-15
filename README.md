# Ainz Web Design

Site vitrine commercial pour la prospection freelance (sites web pour commerces locaux, Suisse romande).

> Vitrine d'entrée vers l'offre commerciale. Tout le matériel à partager avec un prospect (one-pager PDF, brief, CGV, FAQ, email templates) est dans [`HandsOnNazarick/site-services/commercial/`](https://github.com/HandsOnNazarick/site-services/tree/main/commercial).
> La démo live est [`demo-restaurant-maison-verte`](https://github.com/HandsOnNazarick/demo-restaurant-maison-verte) → https://bewu3p5nrpcq.space.minimax.io

## Stack
- HTML / CSS / JS purs (aucune dépendance, aucune build)
- Police : Inter (Google Fonts)
- Hébergement : GitHub Pages

## Structure
```
ainz-web-design/
├── index.html      # Page unique (hero, services, démo, processus, à propos, contact, footer)
├── style.css       # Thème sombre premium (noir + or)
├── script.js       # Nav scroll, menu mobile, fade-in on scroll, smooth scroll
└── README.md
```

## Sections du site
1. **Hero** — titre + CTA téléphone (076 579 85 30) + bouton devis, mention "à partir de 300 CHF"
2. **Services** — 2 cartes : Option A (statique pur, je gère tout) / Option B (avec CMS, le client gère)
3. **Démo** — encart "Voir la démo live" → Maison Verte sur `bewu3p5nrpcq.space.minimax.io`
4. **Processus** — 4 étapes (appel → maquette → réalisation → livraison)
5. **À propos** — voix "sans bullshit, sans SaaS", contact réel
6. **Contact** — téléphone + WhatsApp + email + liens footer vers le matériel commercial

## Positionnement tarifaire
À partir de **300 CHF** (point d'entrée), 3 niveaux selon la complexité :
- **300 CHF** — site 1 page, présence de base
- **500–700 CHF** — site multi-pages, SEO local, design personnalisé
- **800–1200 CHF** — multi-pages avancé, réservation en ligne, multilingue

## Contact
- Téléphone : 076 579 85 30
- Email : nazarick963@gmail.com
- WhatsApp : https://wa.me/41765798530
- Démo : https://bewu3p5nrpcq.space.minimax.io

## Déploiement

Le site est déjà en ligne sur GitHub Pages : https://handsonnazarick.github.io/ainz-webdesign/

Pour mettre à jour après un commit :
```bash
cd "/c/Users/alaza/projects/ainz-web-design"
git add .
git commit -m "Update"
git push
```

GitHub Pages redéploie automatiquement en ~30 secondes.

## Domaine custom (optionnel, ~15 CHF/an)
Acheter `ainz-webdesign.ch` ou `.com` (Infomaniak / Namecheap).
DNS : CNAME pointant vers `handsonnazarick.github.io`
Ajouter un fichier `CNAME` à la racine avec le domaine.

## Écosystème

| Repo | Rôle |
|---|---|
| **ainz-webdesign** (ce repo) | Vitrine d'entrée, déployée sur GitHub Pages |
| [site-services](https://github.com/HandsOnNazarick/site-services) | Matériel commercial (one-pager, brief, CGV, FAQ, email templates) |
| [demo-restaurant-maison-verte](https://github.com/HandsOnNazarick/demo-restaurant-maison-verte) | Démo live d'un site client (template réutilisable) |
| [lead-gen](https://github.com/HandsOnNazarick/lead-gen) | Pipeline prospection |