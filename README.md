# Portfolio — projets réalisés en entreprise / Company projects portfolio

Site statique bilingue (FR/EN) présentant mon profil et mes projets, **sans aucun code source** (confidentialité de l'entreprise).
Bilingual static site presenting my profile and projects, **with no source code** (company confidentiality).

## Modifier le contenu

Tout le contenu est dans **`data/content.js`** : nom, liens, à propos, compétences, projets, parcours. Aucun outil de build.
Les images sont dans `assets/` et référencées par le champ `images` de chaque projet (`kind` : `app`, `desktop`, `figure` ou `phone` pour le cadre).

## Tester en local

Ouvre `index.html` dans le navigateur (double-clic).

## Publier sur GitHub Pages

1. Crée un repo sur GitHub (ex. `portfolio`, ou `ton-pseudo.github.io` pour avoir l'URL racine).
2. Dans ce dossier :
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/ton-pseudo/portfolio.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Source : Deploy from a branch → `main` / `(root)`**.
4. Le site sera en ligne sur `https://ton-pseudo.github.io/portfolio/`.

## Checklist confidentialité

- [ ] Noms et logos de clients (Hamoud Boualem, Kayali, Huda Beauty, Holcim, Lafarge, Renault, Motrio) et de l'outil (Sunstice, FuturMaster) : accord écrit de chacun avant publication ; aucun nom de collègue
- [ ] Aucun code, extrait de config, requête SQL ou URL interne
- [ ] Toutes les captures montrent des maquettes ou des données fictives ; vérifier aussi les métadonnées (EXIF) et les onglets visibles
- [ ] Chiffres validés par l'entreprise
- [ ] Accord de ton employeur / école si ton contrat l'exige
