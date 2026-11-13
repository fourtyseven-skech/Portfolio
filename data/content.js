/* =====================================================================
   CONTENU DU SITE : c'est le seul fichier à modifier.
   Chaque texte existe en version fr et en.

   CONFIDENTIALITÉ (règles appliquées ici) :
   - aucun code, aucune capture réelle de client, aucune donnée réelle ;
   - clients nommés (avec logo) : Hamoud Boualem, Kayali, Huda Beauty, Holcim, Lafarge, Renault, Motrio, outil Sunstice (ex-FuturMaster), à faire valider par eux ; pas de données client ;
   - les schémas de /assets sont redessinés avec des données fictives ;
   - chiffres issus de données clients : volontairement absents.
   À valider avec ton entreprise avant publication (voir README).
   ===================================================================== */

const L = "assets/logos/";
/* logos : affichés tels quels, sans carte (comme sur le site DFYA). h = hauteur en px ; ink = logo blanc passé en encre sur fond clair */
const LG = {
  renault: { src: L + "renault.png", name: "Renault", h: 62 },
  motrio: { src: L + "motrio.png", name: "Motrio", h: 30 },
  holcim: { src: L + "holcim.png", name: "Holcim", h: 32 },
  lafarge: { src: L + "lafarge.png", name: "Lafarge", h: 44 },
  hamoud: { src: L + "hamoud-boualem.svg", name: "Hamoud Boualem", h: 62 },
  kayali: { src: L + "kayali.png", name: "Kayali", h: 56 },
  huda: { src: L + "huda-beauty.svg", name: "Huda Beauty", h: 54, ink: true },
  sunstice: { src: L + "sunstice.svg", name: "Sunstice", h: 24 },
  futurmaster: { src: L + "futurmaster.png", name: "FuturMaster", h: 22, before: { fr: "anciennement", en: "formerly" } },
};
const TOOL = { label: { fr: "Outil · Advanced Planning Scheduling (APS)", en: "Tool · Advanced Planning Scheduling (APS)" }, items: [LG.sunstice, LG.futurmaster] };
const LOGOS_HAMOUD = [{ label: { fr: "Client", en: "Client" }, items: [LG.hamoud] }, TOOL];
const LOGOS_KAYALI = [{ label: { fr: "Clients", en: "Clients" }, items: [LG.kayali, LG.huda] }, TOOL];
const LOGOS_MOTRIO = [{ label: { fr: "Client", en: "Client" }, items: [LG.renault, LG.motrio] }];
const LOGOS_HOLCIM = [{ label: { fr: "Entreprise", en: "Company" }, items: [LG.holcim, LG.lafarge] }];
const CLIENTS = {
  groups: [
    { logos: [LG.renault, LG.motrio], what: { fr: "Architecture et prototypes de modules d'IA.", en: "Architecture and prototypes of AI modules." } },
    { logos: [LG.holcim, LG.lafarge], what: { fr: "Stage supply chain : outils de contrôle et de nettoyage de données.", en: "Supply-chain internship: data-checking and cleaning tools." } },
    { logos: [LG.hamoud], what: { fr: "Formation et conseil en planification de la demande et de l'approvisionnement.", en: "Training and consulting in demand and supply planning." } },
    { logos: [LG.kayali, LG.huda], what: { fr: "Conseil en planification de la demande.", en: "Demand-planning consulting." } },
    { reveal: true, logos: [LG.sunstice, LG.futurmaster], what: { fr: "Outil utilisé en mission : Advanced Planning Scheduling (APS).", en: "Tool used on engagements: Advanced Planning Scheduling (APS)." } },
  ],
  never: {
    fr: ["Aucun code, aucune donnée, aucun chiffre propre à un client.", "Aucun constat sur son activité, ses volumes, ses fournisseurs ou ses résultats.", "Aucun document, contrat ou nom de personne.", "Les écrans montrés sont des maquettes, des prototypes ou des outils lancés sur des données fictives."],
    en: ["No code, data or figures belonging to a client.", "No finding about their business, volumes, suppliers or results.", "No document, contract or person's name.", "The screens shown are mock-ups, prototypes or tools run on fictitious data."],
  },
};

window.SITE = {
  name: "Islam Mechoureb",
  photo: "assets/islam.webp",
  email: "islam.mechoureb@g.enp.edu.dz",
  links: {
    github: "", // ex: "https://github.com/ton-pseudo" (laisser vide pour masquer)
    linkedin: "", // ex: "https://www.linkedin.com/in/ton-profil"
  },

  title: {
    fr: "Élève ingénieur Data Science & IA · Architecte logiciel junior",
    en: "Data Science & AI engineering student · Junior software architect",
  },
  tagline: {
    fr: "Architecture, prototypes et documents de référence pour des équipes industrielles et leurs clients.",
    en: "Architecture, prototypes and reference documents for industrial teams and their customers.",
  },
  about: {
    fr: [
      "Élève ingénieur en 5ᵉ année à l'École Nationale Polytechnique d'Alger (génie industriel, option Data Science & IA), je travaille depuis février 2026 comme Chief Architect & Junior Product Manager chez Megasoft Office, où je conçois quatre logiciels destinés à des entreprises industrielles, en lien direct avec leurs clients.",
      "En parallèle, j'interviens comme consultant et formateur en planification de la demande et de l'approvisionnement sur Advanced Planning Scheduling (APS) de Sunstice, ancien FuturMaster, notamment pour Hamoud Boualem, Kayali et Huda Beauty : nettoyage de données, détection de valeurs aberrantes, choix de modèles de prévision et accompagnement des planificateurs.",
      "Les projets présentés ici ont été réalisés pour des entreprises. Le code et les données des clients sont confidentiels : je montre le contexte, l'architecture, ma démarche et les résultats, avec des maquettes, des prototypes et des outils lancés sur des données fictives.",
    ],
    en: [
      "I am a fifth-year engineering student at the École Nationale Polytechnique in Algiers (industrial engineering, Data Science & AI track). Since February 2026 I work as Chief Architect & Junior Product Manager at Megasoft Office, designing four software products for industrial companies in close contact with their customers.",
      "I also work as a consultant and trainer in demand and supply planning on Sunstice's Advanced Planning Scheduling (APS), formerly FuturMaster, notably for Hamoud Boualem, Kayali and Huda Beauty: data cleaning, outlier detection, forecasting model selection and coaching of planners.",
      "The projects below were delivered for companies. Code and client data are confidential: I show the context, architecture, approach and outcomes, with mock-ups, prototypes and tools run on fictitious data.",
    ],
  },
  facts: [
    { k: { fr: "Formation", en: "Education" }, v: { fr: "École Nationale Polytechnique d'Alger · 5ᵉ année, génie industriel, option Data Science & IA", en: "École Nationale Polytechnique, Algiers · 5th year, industrial engineering, Data Science & AI track" } },
    { k: { fr: "Poste actuel", en: "Current role" }, v: { fr: "Chief Architect & Junior Product Manager · Megasoft Office (depuis février 2026)", en: "Chief Architect & Junior Product Manager · Megasoft Office (since February 2026)" } },
    { k: { fr: "En parallèle", en: "On the side" }, v: { fr: "Consultant et formateur en planification de la demande et de l'approvisionnement · Advanced Planning Scheduling (Sunstice)", en: "Demand and supply planning consultant and trainer · Advanced Planning Scheduling (Sunstice)" } },
    { k: { fr: "Langues", en: "Languages" }, v: { fr: "Arabe (maternelle) · Français (pro) · Anglais (pro)", en: "Arabic (native) · French (professional) · English (professional)" } },
  ],
  clients: CLIENTS,
  /* filigranes de la partie académique : logos très pâles derrière la section (pos : r = haut droite, l = bas gauche) */
  academicMarks: [{ src: L + "enp.png", name: "École Nationale Polytechnique", pos: "r" }],
  confidentialNote: {
    fr: "Projets réalisés en entreprise. Aucun code ni donnée réelle de client n'est publié : les écrans présentés sont des maquettes, des prototypes ou des outils lancés sur des données fictives.",
    en: "Projects delivered for companies. No code, client name or real data is published: the screens shown are mock-ups, prototypes or tools run on fictitious data.",
  },

  skills: [
    { group: { fr: "Données & IA", en: "Data & AI" }, items: ["Python", "SQL", "Prévision / forecasting", "Machine learning", "Détection d'anomalies", "LLM & RAG", "Recherche (Elasticsearch)"] },
    { group: { fr: "Architecture & back-end", en: "Architecture & back-end" }, items: ["NestJS", "TypeScript", "PostgreSQL", "TimescaleDB", "MQTT", "Docker", "Traitement par lots / flux"] },
    { group: { fr: "Sécurité IA", en: "AI security" }, items: ["Anti prompt-injection", "Défense en profondeur", "Audit & traçabilité", "Multi-tenant"] },
    { group: { fr: "Outils data", en: "Data tools" }, items: ["pandas", "rapidfuzz", "PyQt6", "matplotlib", "Excel avancé"] },
    { group: { fr: "Produit & méthode", en: "Product & method" }, items: ["BRD & user stories", "Études de marché / benchmark", "Rédaction technique", "Formation"] },
    { group: { fr: "Langues", en: "Languages" }, items: ["Arabe (maternelle)", "Français (pro)", "Anglais (pro)"] },
  ],

  /* ordre d'affichage des projets */
  projectOrder: ["mega-assistant", "mega-mes", "mega-tms", "aps-stockout", "smart-search", "chatbot-doc", "aps-formation", "forecast-analysis", "cement-internship", "holcim-nettoyage", "megasoft-site", "club-cap"],

  /* ---------------- PROJETS ---------------- */
  projects: [
    {
      id: "mega-assistant",
      year: "2026",
      status: { fr: "Conception détaillée", en: "Detailed design" },
      title: { fr: "Assistant IA conversationnel pour un ERP", en: "Conversational AI assistant for an ERP" },
      context: {
        fr: "Permettre aux utilisateurs d'interroger leurs données métier en langage naturel, sans que rien ne quitte le serveur de l'entreprise.",
        en: "Let users query their business data in natural language, with nothing leaving the company's servers.",
      },
      role: {
        fr: "Architecte : note de cadrage pour la direction, architecture, modèle de menaces, spécifications fonctionnelles (BRD, user stories) et plan de mise en œuvre en 4 phases.",
        en: "Architect: management briefing, architecture, threat model, functional specifications (BRD, user stories) and a 4-phase delivery plan.",
      },
      outcome: {
        fr: "Une architecture où le modèle n'est qu'un traducteur : la base reste la seule source de vérité, et chaque couche de sécurité tient même si une autre cède.",
        en: "An architecture where the model is only a translator: the database remains the single source of truth, and each security layer holds even if another fails.",
      },
      highlights: {
        fr: [
          "Modèle open source hébergé en local : aucune donnée envoyée à un fournisseur cloud.",
          "Détection des messages suspects avec un score de risque ; liste fermée d'actions autorisées, contrôles avant toute action.",
          "Cinq couches de sécurité : authentification, filtrage, validation des requêtes, compte base en lecture seule, cloisonnement par client.",
          "Vérification des chiffres de la réponse contre les données sources (valeurs recalculables par une liste fermée d'opérations).",
          "Assainissement des documents ingérés en 5 étages, avec décision à 3 voies (indexé, marqué non fiable, mis en quarantaine).",
          "Journal d'audit complet et retour utilisateur pour l'amélioration continue.",
        ],
        en: [
          "Open-source model hosted locally: no data sent to a cloud provider.",
          "Suspicious message detection with a risk score; closed list of allowed actions, checks before any action.",
          "Five security layers: authentication, filtering, query validation, read-only database account, per-customer isolation.",
          "Numbers in the answer are checked against source data (values recomputable through a closed list of operations).",
          "Ingested documents are sanitised in 5 stages, with a 3-way decision (indexed, flagged untrusted, quarantined).",
          "Full audit log and user feedback for continuous improvement.",
        ],
      },
      stack: ["LLM local", "Text-to-SQL", "RAG hybride", "PostgreSQL", "NestJS", "Redis", "Sécurité IA"],
      images: [
        { src: "assets/assistant-answer.png", kind: "figure", caption: { fr: "Réponse chiffrée avec badge « chiffres vérifiés » et preuve consultable.", en: "Figure answer with a “verified numbers” badge and viewable proof." } },
        { src: "assets/assistant-citation.png", kind: "figure", caption: { fr: "Citation vérifiée : le passage exact du contrat est surligné dans le panneau source.", en: "Verified citation: the exact contract passage is highlighted in the source panel." } },
        { src: "assets/assistant-navigation.png", kind: "figure", caption: { fr: "Carte de navigation : destination et filtres visibles avant tout déplacement.", en: "Navigation card: destination and filters visible before any move." } },
        { src: "assets/assistant-confirm.png", kind: "figure", caption: { fr: "Action irréversible : confirmation par appui maintenu, détail complet.", en: "Irreversible action: press-and-hold confirmation, full detail." } },
        { src: "assets/assistant-trust.png", kind: "figure", caption: { fr: "Le fil de confiance : l'attente montre le travail, la preuve reste consultable.", en: "The trust thread: waiting shows the work, the proof stays viewable." } },
        { src: "assets/assistant-arabic.png", kind: "figure", caption: { fr: "Interface arabe de droite à gauche, avec miroir complet de la mise en page.", en: "Right-to-left Arabic interface with a fully mirrored layout." } },
      ],
    },
    {
      id: "mega-mes",
      year: "2026",
      status: { fr: "Prototype validé", en: "Validated prototype" },
      title: { fr: "MES pour ligne d'embouteillage", en: "MES for a bottling line" },
      context: {
        fr: "Collecter les données des machines d'une ligne d'embouteillage, les transformer en indicateurs de production et repérer les incohérences avec les données réelles du client avant le développement.",
        en: "Collect machine data from a bottling line, turn it into production indicators, and spot inconsistencies with the customer's real data before development.",
      },
      role: {
        fr: "Architecte et chef de produit junior : conception de l'architecture, modèle de données, indicateurs, interface, puis prototype présenté et validé par le directeur technique.",
        en: "Architect and junior product manager: architecture, data model, indicators, UI, then a prototype presented and validated by the CTO.",
      },
      outcome: {
        fr: "Un POC complet fonctionnant de bout en bout sur des machines simulées, rejouable en démonstration.",
        en: "A complete end-to-end POC running on simulated machines, replayable as a demo.",
      },
      highlights: {
        fr: [
          "Chaîne temps réel : automates simulés, passerelle, broker de messages, microservices, base de séries temporelles, interface web.",
          "Indicateurs de performance (TRS, TRG, TRE) avec disponibilité, performance et qualité.",
          "Qualification des arrêts en trois étapes (famille, cause, commentaire) et analyse des arrêts.",
          "Panneau opérateur sur tablette : ordre de fabrication, rejets, correction de comptage, cahier de poste.",
          "Import de fichiers ERP, rattrapage des données manquantes, alertes, gestion des droits.",
          "Base de données versionnée : 37 migrations, c'est-à-dire 37 scripts SQL numérotés qui construisent la base pas à pas, dans l'ordre, et permettent de la recréer à l'identique sur n'importe quel poste ; des tests SQL vérifient les calculs d'indicateurs.",
        ],
        en: [
          "Real-time chain: simulated PLCs, gateway, message broker, microservices, time-series database, web UI.",
          "Performance indicators (OEE-type TRS, TRG, TRE) with availability, performance and quality.",
          "Three-step downtime qualification (family, cause, comment) and downtime analysis.",
          "Operator tablet panel: work order, rejects, count correction, shift log.",
          "ERP file import, catch-up of missing data, alerts, access rights.",
          "Versioned database: 37 migrations, i.e. 37 numbered SQL scripts that build the database step by step, in order, and let it be recreated identically on any machine; SQL tests check the indicator calculations.",
        ],
      },
      metrics: [{ value: "37", label: { fr: "migrations de base (scripts SQL numérotés)", en: "DB migrations (numbered SQL scripts)" } }, { value: "3", label: { fr: "indicateurs TRS/TRG/TRE", en: "OEE-type indicators" } }],
      stack: ["NestJS", "TimescaleDB", "MQTT", "WebSocket", "Vite", "Docker", "Import CSV"],
      images: [
        { src: "assets/mes-overview.png", kind: "app", caption: { fr: "Vue d'ensemble de l'outil final en fonctionnement : synoptique de la ligne en temps réel, TRE / TRG / TRS, disponibilité, performance, qualité et OF actif (machines simulées ; les taux sont bas car la disponibilité est calculée sur le poste entier alors que la simulation tourne depuis quelques minutes).", en: "Overview of the final tool running: real-time line synoptic, OEE-type indicators, availability, performance, quality and active work order (simulated machines; rates are low because availability is computed over the whole shift while the simulation has run for only a few minutes)." } },
        { src: "assets/mes-demarrer-of.png", kind: "app", caption: { fr: "Démarrage d'un ordre de fabrication choisi parmi ceux importés de l'ERP, pour toute la ligne ou une machine.", en: "Starting a work order picked from those imported from the ERP, for the whole line or one machine." } },
        { src: "assets/mes-operator.png", kind: "app", caption: { fr: "Panneau opérateur : OF actif, frise d'état du poste par machine, nomenclature théorique, compteurs en direct, notes d'équipe et incidents.", en: "Operator panel: active work order, per-machine shift state timeline, theoretical bill of materials, live counters, team notes and incidents." } },
        { src: "assets/mes-stops.png", kind: "app", caption: { fr: "Analyse des arrêts : Pareto par cause, MTTR, MTBF, micro-arrêts et cascade du TRS, obtenus avec le scénario d'arrêts fréquents du POC.", en: "Downtime analysis: Pareto by cause, MTTR, MTBF, micro-stops and TRS waterfall, from the POC's frequent-stops scenario." } },
        { src: "assets/mes-process.png", kind: "app", caption: { fr: "Paramètres process en temps réel : 49 mesures, position dans la plage, état stable / en dérive / hors seuil et règle d'alerte.", en: "Real-time process parameters: 49 measurements, position within range, stable / drifting / out-of-range status and alert rule." } },
        { src: "assets/mes-planning.png", kind: "app", caption: { fr: "Planification : ordres de fabrication importés des fichiers de l'ERP (données d'exemple), avec leur nomenclature.", en: "Planning: work orders imported from ERP files (sample data), with their bill of materials." } },
      ],
    },
    {
      id: "aps-stockout",
      year: "2026",
      status: { fr: "Conception + prototype d'interface", en: "Design + UI prototype" },
      title: { fr: "Prévision de rupture de stock (pièces de rechange)", en: "Stock-out forecasting (spare parts)" },
      context: {
        fr: "Conception d'un module d'IA pour anticiper les ruptures de pièces de rechange dans un portail agent.",
        en: "Design of an AI module to anticipate spare-part stock-outs inside an agent portal.",
      },
      role: {
        fr: "Conception complète : architecture, décisions techniques, plan par tranches, questionnaire de cadrage, analyse des risques, volet planification de la demande.",
        en: "Full design: architecture, technical decisions, phased plan, scoping questionnaire, risk analysis, demand-planning part.",
      },
      outcome: {
        fr: "Un plan en 9 tranches livrables, avec des critères de fin clairs et des mesures de performance.",
        en: "A 9-slice delivery plan with clear done-criteria and performance measurements.",
      },
      highlights: {
        fr: [
          "Prévision à un seul niveau, puis répartition top-down vers les niveaux fins (plusieurs méthodes comparées par backtest).",
          "Choix du meilleur modèle une fois, puis figé ; nouvelle sélection seulement sur déclencheur (date, dérive, volume).",
          "Calculs lancés par bouton avec estimation, file d'attente et verrou par périmètre.",
          "Cycle brouillon, aperçu, calcul, comparaison, publication : les alertes n'utilisent que la version publiée.",
          "Alertes avec date de rupture, quantité proposée, niveaux de confiance, hystérésis et retour utilisateur pour limiter les fausses alertes.",
          "Démarrage prévu sur données synthétiques et jeux publics.",
          "Prototype d'interface (MegaAPS) pour illustrer la démarche : détection des creux et des pics, corrections, nettoyage en masse, comparaison des scénarios. Ici sur des données fictives de pièces de rechange.",
        ],
        en: [
          "Single-level forecast, then top-down split to fine levels (several methods compared by backtesting).",
          "Best model chosen once then frozen; re-selection only on a trigger (date, drift, volume).",
          "Computations launched by button with estimate, queue and lock per scope.",
          "Draft, preview, compute, compare, publish cycle: alerts only use the published version.",
          "Alerts with stock-out date, suggested quantity, confidence levels, hysteresis and user feedback to limit false alarms.",
          "Planned to start on synthetic and public datasets.",
          "UI prototype (MegaAPS) to illustrate the approach: dip and spike detection, corrections, mass cleaning, scenario comparison. Shown here on fictitious spare-part data.",
        ],
      },
      stack: ["Python", "statsforecast", "LightGBM", "PostgreSQL", "NestJS", "React", "pg-boss"],
      logos: LOGOS_MOTRIO,
      images: [
        { src: "assets/stockout-carte.png", kind: "app", caption: { fr: "Carte de planification d'une série : historique brut, historique nettoyé, modèle, prévision avec zone de confiance, semaines Ramadan / Aïd. En bas : les corrections appliquées, et les épisodes détectés qui proposent chacun un bouton « Corriger ».", en: "Planning card for one series: raw history, cleaned history, model, forecast with confidence band, Ramadan / Eid weeks. Below: the applied corrections, and the detected episodes that each offer a “Correct” button." } },
        { src: "assets/stockout-correction.png", kind: "app", caption: { fr: "Un clic sur une semaine ouvre le menu de correction : événement exceptionnel ou facteur proportionnel.", en: "Clicking a week opens the correction menu: exceptional event or proportional factor." } },
        { src: "assets/stockout-formulaire.png", kind: "app", caption: { fr: "Correction d'une rupture : le système propose le niveau habituel, l'utilisateur valide et nomme la cause.", en: "Correcting a stock-out: the system proposes the usual level, the user validates and names the cause." } },
        { src: "assets/stockout-passe.png", kind: "app", caption: { fr: "Nettoyage en masse : les 63 séries sur 3 ans (rouge : creux, orange : pic, vert : Ramadan / Aïd). Chaque passe propose une même correction à toutes les séries touchées en même temps.", en: "Mass cleaning: the 63 series over 3 years (red: dip, orange: spike, green: Ramadan / Eid). Each pass proposes one correction for all series hit at the same time." } },
        { src: "assets/stockout-comparer.png", kind: "app", caption: { fr: "Comparer les nettoyages : quel niveau d'effort améliore le plus la prévision. La lecture résume l'idée : les passes de masse puis les corrections individuelles les plus grosses.", en: "Comparing cleanings: which level of effort improves the forecast most. The reading sums up the idea: mass passes, then the biggest individual corrections." } },
        { src: "assets/stockout-layers.png", kind: "figure", caption: { fr: "Les 7 couches du module, de l'intégration des données à l'exposition des résultats.", en: "The module's 7 layers, from data integration to exposing results." } },
      ],
    },
    {
      id: "smart-search",
      year: "2026",
      status: { fr: "Démonstration fonctionnelle + mesures", en: "Working demo + measurements" },
      title: { fr: "Recherche intelligente de pièces (smart search)", en: "Smart spare-part search" },
      context: {
        fr: "Retrouver une pièce même avec une faute de frappe, une référence partielle ou une ancienne référence, depuis le portail des agents.",
        en: "Find a part even with a typo, a partial reference or a superseded reference, from the agent portal.",
      },
      role: {
        fr: "Conception de l'architecture, de la requête de recherche et du protocole de mesure ; réalisation d'une démonstration et de sa documentation.",
        en: "Architecture design, search query design and measurement protocol; built a demo and its documentation.",
      },
      outcome: {
        fr: "Une recherche floue avec autocomplétion, sans modèle d'IA lourd, mesurée sur un catalogue inventé.",
        en: "Fuzzy search with autocomplete, with no heavy AI model, measured on an invented catalogue.",
      },
      highlights: {
        fr: [
          "Requête à plusieurs clauses : saisies mal formatées, zéros oubliés, une faute, début de référence, désignation avec faute.",
          "Filtre de compatibilité véhicule et prise en compte des substitutions.",
          "Indexation dans un index neuf puis bascule d'alias, sans coupure.",
          "Réordonnancement selon l'historique de l'utilisateur ; journal de recherche.",
          "Démonstration exécutée sur Elasticsearch 8 avec un catalogue inventé de 200 000 pièces, accompagnée d'un assistant à règles (sans modèle de langage) qui répond à partir de la même requête.",
          "Recherche par photo, résultat final : la bonne famille de pièce est trouvée dans 95 % des cas sur 100 photos de catalogue et 83 % sur 100 photos prises en situation (pièce en main, en carton, montée sur un véhicule), toutes absentes de l'index.",
          "Modèles choisis : DINOv2 petit (Meta, 22 millions de paramètres, appris sans étiquettes sur 142 millions d'images) pour comparer des images, CLIP ViT-B/32 (OpenAI, appris sur 400 millions de paires image-texte) pour comparer une image à une description en mots, et RapidOCR (PP-OCR) pour lire un numéro gravé.",
          "Entraînement : aucun. Les modèles sont préentraînés et utilisés tels quels, jamais réentraînés sur nos photos. Ce qui évolue, c'est l'index : chaque photo est transformée en vecteur (384 valeurs pour DINOv2, 512 pour CLIP), rangée dans Elasticsearch, et une nouvelle photo est classée par ses plus proches voisins.",
          "Progression : le point de départ, DINOv2 seul avec un index de photos de catalogue, donnait 97 % sur le catalogue mais seulement 53 % en situation. Trois pistes comparées : enrichir l'index de 300 photos en situation (83 %), détourer la pièce (63 %, et perte sur le catalogue : écarté) et CLIP qui décrit la pièce en mots (77 % sans aucune photo en index). La méthode retenue additionne, par famille, le score de description CLIP et les scores des 5 plus proches voisins de CLIP et de DINOv2.",
          "Points faibles mesurés en situation : les plaquettes de frein (4 photos sur 10, confondues avec des disques) et les roulements de roue (7 sur 10). Chaque famille repose sur 10 photos de test, donc ces chiffres sont des ordres de grandeur. Ajuster (fine-tuning) un modèle sur de vraies photos de pièces est la suite logique, non faite.",
          "Limite : la photo seule donne la famille de la pièce, pas la pièce exacte ; c'est le numéro gravé qui la donne, testé sur 1 000 pièces dessinées par programme (92 % sur photo normale, 24 % sur photo difficile). Les photos affichées sont des photos de produits trouvées sur le web, droits réservés à leurs auteurs, utilisées pour la démonstration.",
        ],
        en: [
          "Multi-clause query: badly formatted input, forgotten zeros, one typo, partial reference, designation with typos.",
          "Vehicle compatibility filter and supersession handling.",
          "Indexing into a new index then alias switch, with no downtime.",
          "Re-ranking from user history; search log.",
          "Demo run on Elasticsearch 8 with an invented 200,000-part catalogue, plus a rule-based assistant (no language model) answering from the same query.",
          "Photo search, final result: the right part family is found in 95% of cases on 100 catalogue photos and 83% on 100 photos taken in situ (part held in hand, in a box, mounted on a vehicle), none of them in the index.",
          "Chosen models: DINOv2 small (Meta, 22 million parameters, trained without labels on 142 million images) to compare images, CLIP ViT-B/32 (OpenAI, trained on 400 million image-text pairs) to compare an image with a description in words, and RapidOCR (PP-OCR) to read an engraved number.",
          "Training: none. The models are pretrained and used as-is, never retrained on our photos. What evolves is the index: each photo becomes a vector (384 values for DINOv2, 512 for CLIP), stored in Elasticsearch, and a new photo is classified by its nearest neighbours.",
          "Progression: the starting point, DINOv2 alone with a catalogue-photo index, gave 97% on catalogue but only 53% in situ. Three tracks compared: enriching the index with 300 in-situ photos (83%), cutting out the part (63%, and a loss on catalogue: dropped) and CLIP describing the part in words (77% with no photo in the index). The chosen method adds up, per family, the CLIP description score and the scores of the 5 nearest neighbours from CLIP and DINOv2.",
          "Weak spots measured in situ: brake pads (4 photos out of 10, confused with discs) and wheel bearings (7 out of 10). Each family rests on 10 test photos, so these figures are orders of magnitude. Fine-tuning a model on real part photos is the logical next step, not done.",
          "Limit: the photo alone gives the part family, not the exact part; the engraved number gives it, tested on 1,000 parts drawn by program (92% on a normal photo, 24% on a hard one). The photos shown are product photos found on the web, rights reserved to their authors, used for the demonstration.",
        ],
      },
      metrics: [{ value: "83 %", label: { fr: "bonne famille sur 100 photos en situation (combinaison)", en: "right family on 100 in-situ photos (combination)" } }, { value: "95 %", label: { fr: "bonne famille sur 100 photos de catalogue (méthode combinée)", en: "right family on 100 catalogue photos (combined method)" } }, { value: "≈ 2 ms", label: { fr: "latence médiane (catalogue fictif)", en: "median latency (fictitious catalogue)" } }, { value: "1 381", label: { fr: "requêtes/s à 8 utilisateurs", en: "requests/s at 8 users" } }],
      stack: ["Elasticsearch 8", "dense_vector (kNN)", "DINOv2 small", "CLIP", "RapidOCR", "Python", "PostgreSQL", "Benchmarks"],
      logos: LOGOS_MOTRIO,
      images: [
        { src: "assets/photo-combi-disque-monte.png", kind: "app", caption: { fr: "Méthode combinée sur une vraie photo : un disque monté sur un véhicule. Le disque est retrouvé, mais seul DINOv2 avait raison et la confiance reste faible (39 %), ce qui est affiché.", en: "Combined method on a real photo: a disc mounted on a vehicle. The disc is found, but only DINOv2 was right and confidence stays low (39%), which is displayed." } },
        { src: "assets/photo-methode.png", kind: "figure", caption: { fr: "Modèles et méthode : trois modèles préentraînés, un index vectoriel Elasticsearch, un vote combiné. Aucun entraînement.", en: "Models and method: three pretrained models, an Elasticsearch vector index, a combined vote. No training." } },
        { src: "assets/photo-combi-filtre.png", kind: "app", caption: { fr: "Photo réelle d'un filtre à huile usagé tenu en main : les trois méthodes s'accordent sur la bonne famille.", en: "Real photo of a used oil filter held in hand: all three methods agree on the right family." } },
        { src: "assets/photo-combi-moyeu.png", kind: "app", caption: { fr: "Photo réelle prise en atelier (moyeu et roulement) : bonne famille, confiance combinée de 71 %.", en: "Real workshop photo (hub and bearing): right family, combined confidence 71%." } },
        { src: "assets/photo-combi-disque-carton.png", kind: "app", caption: { fr: "Photo réelle d'un disque de frein dans son carton, sans lecture de la marque : bonne famille.", en: "Real photo of a brake disc in its box: right family." } },
        { src: "assets/photo-reel.png", kind: "figure", caption: { fr: "Point de départ : DINOv2 petit seul, index de photos de catalogue, 100 photos de catalogue en test : bonne famille au 1er résultat dans 96 % des cas (la méthode combinée donne 95 %).", en: "Starting point: DINOv2 small alone, catalogue-photo index, 100 catalogue test photos: right family first in 96% of cases (the combined method gives 95%)." } },
        { src: "assets/search-faute-assistant.png", kind: "app", caption: { fr: "Recherche tolérante à la faute (deux chiffres inversés) : la bonne pièce arrive en tête, et l'assistant donne la même réponse depuis la même requête.", en: "Typo-tolerant search (two digits swapped): the right part comes first, and the assistant answers from the same query." } },
        { src: "assets/search-ancienne-ref.png", kind: "app", caption: { fr: "Ancienne référence : la pièce qui la remplace est retrouvée, avec le motif du résultat affiché.", en: "Superseded reference: the replacing part is found, with the match reason shown." } },
        { src: "assets/search-designation.png", kind: "app", caption: { fr: "Désignation avec faute (« plaquete frein clio ») et filtre de compatibilité véhicule.", en: "Designation with a typo and vehicle compatibility filter." } },
        { src: "assets/search-compatibilite.png", kind: "app", caption: { fr: "Début de référence en autocomplétion, puis question de compatibilité posée à l'assistant.", en: "Partial reference autocomplete, then a compatibility question to the assistant." } },
        { src: "assets/photo-pistes.png", kind: "figure", caption: { fr: "Trois pistes comparées sur photos de catalogue, photos en situation et 4 photos de l'utilisateur : enrichir l'index et combiner CLIP + DINOv2 donnent les meilleurs résultats ; le détourage dégrade le catalogue.", en: "Three tracks compared on catalogue photos, in-situ photos and the user's 4 photos: enriching the index and combining CLIP + DINOv2 give the best results; cutting out the part hurts the catalogue." } },
        { src: "assets/search-clauses.png", kind: "figure", caption: { fr: "Les six clauses de la requête : la référence exacte pèse toujours plus que la tolérance de faute.", en: "The six query clauses: an exact reference always outweighs typo tolerance." } },
        { src: "assets/search-quality.png", kind: "figure", caption: { fr: "Cas couverts, mesurés sur 1 500 requêtes par test (catalogue inventé de 200 000 pièces).", en: "Covered cases, measured on 1,500 queries per test (invented 200,000-part catalogue)." } },
        { src: "assets/search-latency.png", kind: "figure", caption: { fr: "Temps de réponse au 95ᵉ centile, très en dessous de l'objectif de 300 ms.", en: "95th-percentile response time, far below the 300 ms target." } },
      ],
    },
    {
      id: "chatbot-doc",
      year: "2026",
      status: { fr: "Conception faite", en: "Design done" },
      title: { fr: "Chatbot documentaire en arabe et en français", en: "Arabic and French documentation chatbot" },
      context: {
        fr: "Répondre aux questions des agents à partir des documents du client, dans les deux langues, avec un modèle hébergé localement.",
        en: "Answer agents' questions from the customer's documents, in both languages, with a locally hosted model.",
      },
      role: {
        fr: "Conception de l'architecture, des gardes de sécurité et des plafonds d'usage.",
        en: "Architecture, security guards and usage caps design.",
      },
      outcome: {
        fr: "Les droits sont appliqués par le serveur, dans la requête de recherche et avant le modèle : le chatbot ne peut pas voir ce que l'utilisateur n'a pas le droit de lire.",
        en: "Permissions are enforced by the server, inside the search query and before the model: the chatbot cannot see what the user is not allowed to read.",
      },
      highlights: {
        fr: [
          "Passerelle, compteur de coûts avec plafonds, base de connaissance filtrée par les droits.",
          "Garde de sortie : citations vérifiées, refus si la question sort du périmètre.",
          "Alimentation documentaire : découpage, indexation, mise à jour.",
        ],
        en: [
          "Gateway, cost counter with caps, permission-filtered knowledge base.",
          "Output guard: verified citations, refusal when a question is out of scope.",
          "Document ingestion: chunking, indexing, updates.",
        ],
      },
      stack: ["LLM local", "RAG", "Embeddings FR/AR", "PostgreSQL", "Keycloak"],
      logos: LOGOS_MOTRIO,
      images: [
        { src: "assets/chatbot-architecture.png", kind: "figure", caption: { fr: "Architecture : la passerelle applique identité, droits et plafonds avant tout traitement.", en: "Architecture: the gateway enforces identity, rights and caps before any processing." } },
        { src: "assets/chatbot-routing.png", kind: "figure", caption: { fr: "Aiguillage : un refus s'accompagne toujours d'une orientation vers un humain.", en: "Routing: a refusal always comes with a pointer to a human." } },
        { src: "assets/chatbot-rag.png", kind: "figure", caption: { fr: "Le filtre par droits est appliqué dans la recherche, avant que le modèle voie le moindre passage.", en: "The rights filter is applied in the search, before the model sees any passage." } },
      ],
    },
    {
      id: "mega-tms",
      year: "2026",
      status: { fr: "POC en préparation", en: "POC in preparation" },
      title: { fr: "TMS : gestion du transport pour un groupe multi-filiales", en: "TMS: transport management for a multi-subsidiary group" },
      context: {
        fr: "Premier devis pour un groupe algérien : planifier, tarifier et suivre le transport avec des transporteurs externes et une flotte interne, jusqu'à la pré-facture.",
        en: "First quote for an Algerian group: plan, price and track transport with external carriers and an in-house fleet, up to pre-invoicing.",
      },
      role: {
        fr: "Architecte et chef de produit : étude comparative de solutions de référence du marché, périmètre fonctionnel, décisions d'architecture, dossier d'implémentation complet et critères d'acceptation.",
        en: "Architect and product manager: benchmark of leading market solutions, functional scope, architecture decisions, full implementation file and acceptance criteria.",
      },
      outcome: {
        fr: "Un dossier prêt à être confié à une équipe de développement : décisions d'architecture, modèle de données, modules, plan de réalisation, tests et données de démonstration.",
        en: "A file ready to hand to a development team: architecture decisions, data model, modules, delivery plan, tests and demo data.",
      },
      highlights: {
        fr: [
          "Monolithe modulaire (un module par domaine) : choix justifié par l'échelle réelle estimée.",
          "Application chauffeur hors-ligne : actions synchronisées une seule fois au retour du réseau.",
          "Chaque suggestion est expliquée et modifiable ; chaque écart demande une cause.",
          "Flotte interne : 16 blocs fonctionnels, 72 fonctionnalités ; routage open source pour distances et tournées.",
          "Étude comparative en 13 axes avec matrice des manques par rapport aux solutions de référence.",
          "Multi-entités dès le premier jour, préparé pour une offre SaaS plus tard.",
        ],
        en: [
          "Modular monolith (one module per domain): choice justified by the estimated real scale.",
          "Offline driver app: actions synced exactly once when the network returns.",
          "Every suggestion is explained and editable; every deviation requires a cause.",
          "In-house fleet: 16 functional blocks, 72 features; open-source routing for distances and tours.",
          "13-axis benchmark with a gap matrix against reference solutions.",
          "Multi-entity from day one, prepared for a later SaaS offer.",
        ],
      },
      metrics: [{ value: "13", label: { fr: "axes d'étude comparative", en: "benchmark axes" } }, { value: "72", label: { fr: "fonctionnalités flotte interne", en: "in-house fleet features" } }],
      stack: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "PWA hors-ligne", "OpenAPI", "Docker"],
      images: [
        { src: "assets/tms-today.png", kind: "app", caption: { fr: "Cockpit du répartiteur : ce qui demande de l'attention aujourd'hui.", en: "Dispatcher cockpit: what needs attention today." } },
        { src: "assets/tms-dispatch.png", kind: "app", caption: { fr: "Répartition des ordres de transport.", en: "Transport order dispatching." } },
        { src: "assets/tms-gps.png", kind: "app", caption: { fr: "Suivi GPS des camions en route.", en: "GPS tracking of trucks on the road." } },
        { src: "assets/tms-client.png", kind: "app", caption: { fr: "Portail client : suivi des livraisons et confirmation de réception.", en: "Customer portal: delivery tracking and receipt confirmation." } },
        { src: "assets/tms-driver.png", kind: "phone", caption: { fr: "Application chauffeur : sa journée, sa mission en cours.", en: "Driver app: their day, their current mission." } },
      ],
    },
    {
      id: "aps-formation",
      year: "2026",
      status: { fr: "Mission en cours", en: "Ongoing engagement" },
      title: { fr: "Formation et conseil en planification de la demande et de l'approvisionnement", en: "Demand and supply planning training and consulting" },
      context: {
        fr: "Accompagner Hamoud Boualem dans la prise en main d'Advanced Planning Scheduling (APS) de Sunstice, logiciel de planification de la demande et de l'approvisionnement : formation des équipes et accompagnement des planificateurs.",
        en: "Help Hamoud Boualem adopt Sunstice's Advanced Planning Scheduling (APS), a demand and supply planning software: team training and coaching of planners.",
      },
      role: {
        fr: "Consultant et formateur : conception du support de formation et accompagnement des planificateurs sur le nettoyage de données, la détection de valeurs aberrantes et le choix du modèle de prévision.",
        en: "Consultant and trainer: designed the training material and coached planners on data cleaning, outlier detection and forecasting model choice.",
      },
      outcome: {
        fr: "Des équipes capables de suivre le cycle complet de prévision.",
        en: "Teams able to run the full forecasting cycle.",
      },
      highlights: {
        fr: [
          "Support complet : processus de prévision, données de référence, nœuds détaillés et agrégés, cycle de vie produit, nettoyage de l'historique, prévisions statistiques, enrichissements, consensus.",
          "Suivi de la qualité : indicateurs de précision, archives de prévision, bonnes pratiques.",
          "Détection de valeurs aberrantes et facteurs proportionnels, outils Python de contrôle des données.",
        ],
        en: [
          "Complete material: forecasting process, master data, detailed and aggregated nodes, product lifecycle, history cleaning, statistical forecasts, enrichments, consensus.",
          "Quality tracking: accuracy indicators, forecast archives, best practices.",
          "Outlier detection and proportional factors, Python data-checking tools.",
        ],
      },
      stack: ["Advanced Planning Scheduling (Sunstice)", "Planification de la demande", "Python", "Pédagogie", "Qualité des données"],
      logos: LOGOS_HAMOUD,
      images: [{ src: "assets/dp-formation.svg", kind: "figure", caption: { fr: "Cycle enseigné (aucun contenu client).", en: "Taught cycle (no client content)." } }],
    },
    {
      id: "forecast-analysis",
      year: "2026",
      status: { fr: "Livré", en: "Delivered" },
      title: { fr: "Analyse de prévisibilité et playbooks pour Kayali", en: "Predictability analysis and playbooks for Kayali" },
      context: {
        fr: "Mission de conseil pour Kayali : évaluer la prévisibilité d'un historique de ventes et proposer une méthode et des playbooks aux planificateurs.",
        en: "Consulting engagement for Kayali: assess the predictability of a sales history and propose a method and playbooks for planners.",
      },
      role: {
        fr: "Analyse de prévisibilité, comparaison de modèles, rédaction d'une présentation de synthèse et de playbooks pour les planificateurs.",
        en: "Predictability analysis, model comparison, a summary presentation and playbooks for planners.",
      },
      outcome: {
        fr: "Une méthode claire pour classer les produits, prévoir par trimestre puis par mois, et savoir quand intervenir.",
        en: "A clear method to classify products, forecast by quarter then by month, and know when to intervene.",
      },
      highlights: {
        fr: [
          "Classification des produits par type, chacun avec sa règle de traitement.",
          "Méthode : prévoir le trimestre d'abord, puis répartir en mois ; comparaison à des modèles de base (moyenne mobile, etc.) avant de juger les autres.",
          "Indicateur MASE ajouté pour savoir si la prévision apporte plus que le modèle le plus simple.",
          "Scénarios « et si une part de l'écart était expliquée par les informations commerciales » pour montrer la valeur des enrichissements.",
          "Playbooks : routine avant chaque trimestre, règles par événement, traitement des lancements, liste de ce qu'il ne faut jamais faire, questions à poser à chaque interlocuteur.",
        ],
        en: [
          "Products classified by type, each with its own handling rule.",
          "Method: forecast the quarter first, then split into months; compared with baseline models (moving average, etc.) before judging the others.",
          "MASE indicator added to tell whether the forecast adds value over the simplest model.",
          "“What if part of the gap were explained” scenarios to show the value of commercial inputs.",
          "Playbooks: routine before each quarter, rules per event, launch handling, a never-do list, questions to ask each stakeholder.",
        ],
      },
      stack: ["Python", "Analyse de séries", "Moyenne mobile", "MASE", "Collecte de données publiques", "PowerPoint"],
      logos: LOGOS_KAYALI,
      images: [{ src: "assets/analyse-previsibilite.svg", kind: "figure", caption: { fr: "Illustration sur données fictives : commandes mensuelles et base simple.", en: "Illustration on fictitious data: monthly orders and a simple baseline." } }],
    },
    {
      id: "cement-internship",
      year: "2025",
      status: { fr: "Stage, juil. – sept. 2025", en: "Internship, Jul – Sep 2025" },
      title: { fr: "Stage Holcim × Lafarge, partie 1 : pilotage des coûts de transport", en: "Holcim × Lafarge internship, part 1: transport cost control" },
      context: {
        fr: "Créer des outils de contrôle de données de transport : regrouper des noms de transporteurs écrits différemment et comparer les coûts.",
        en: "Build data-checking tools for transport data: group carrier names written in different ways and compare costs.",
      },
      role: {
        fr: "Stagiaire supply chain : j'ai conçu et développé deux outils Python.",
        en: "Supply-chain intern: I designed and built two Python tools.",
      },
      outcome: {
        fr: "Des outils qui repèrent les transporteurs dont les coûts sont anormalement élevés, et les doublons d'une base, avec validation par l'utilisateur.",
        en: "Tools that spot carriers with abnormally high costs, and duplicates in a database, with user validation.",
      },
      highlights: {
        fr: [
          "Regroupement des noms proches (comparaison floue, seuil de similarité) puis choix du nom le plus fréquent comme référence.",
          "Enrichissement : région, tranche de distance ; coût pondéré par quantité, par route.",
          "Application de bureau avec graphiques et export Excel standardisé.",
          "Gestion robuste des erreurs, journal d'erreurs et packaging en application autonome.",
        ],
        en: [
          "Grouping of similar names (fuzzy matching, similarity threshold) then choosing the most frequent name as reference.",
          "Enrichment: region, distance band; cost weighted by quantity, per route.",
          "Desktop application with charts and standardised Excel export.",
          "Robust error handling, error log and packaging as a standalone application.",
        ],
      },
      stack: ["Python", "pandas", "rapidfuzz", "PyQt6", "matplotlib", "Excel"],
      logos: LOGOS_HOLCIM,
      images: [
        { src: "assets/app-transport-main.png", kind: "desktop", caption: { fr: "L'application de bureau : import du fichier, traitement, ouverture du résultat (données fictives).", en: "The desktop app: file import, processing, opening the result (fictitious data)." } },
        { src: "assets/app-transport-graph.png", kind: "desktop", caption: { fr: "Analyse interactive : coût par tranche de distance, les points isolés sont les coûts anormaux (données fictives).", en: "Interactive analysis: cost per distance band, isolated points are abnormal costs (fictitious data)." } },
      ],
    },
    {
      id: "holcim-nettoyage",
      year: "2025",
      status: { fr: "Stage, partie 2", en: "Internship, part 2" },
      title: { fr: "Stage Holcim × Lafarge, partie 2 : nettoyage des données chauffeurs et véhicules", en: "Holcim × Lafarge internship, part 2: driver and vehicle data cleaning" },
      context: {
        fr: "Créer un outil de nettoyage de listes Excel de chauffeurs et de véhicules : repérer les doublons et les chauffeurs inactifs.",
        en: "Build a cleaning tool for Excel lists of drivers and vehicles: spot duplicates and inactive drivers.",
      },
      role: {
        fr: "Conception et développement d'une application de bureau qui détecte les doublons, vérifie l'inactivité et laisse l'utilisateur trancher, livrée en exécutable autonome.",
        en: "Designed and built a desktop application that detects duplicates, checks inactivity and lets the user decide, delivered as a standalone executable.",
      },
      outcome: {
        fr: "Sur un jeu fictif de 78 lignes avec 8 doublons glissés exprès, l'outil retrouve les 8 groupes et présélectionne une ligne à garder dans chacun ; l'utilisateur valide ou change son choix avant l'export.",
        en: "On a fictitious 78-row set with 8 deliberately planted duplicates, the tool finds all 8 groups and pre-selects one row to keep in each; the user confirms or changes the choice before export.",
      },
      highlights: {
        fr: [
          "Deux traitements, chauffeurs et véhicules ; choix de la feuille Excel et de la ligne d'en-têtes.",
          "Vérification de l'inactivité d'un chauffeur à une date de référence, à partir de sa dernière rotation.",
          "Doublons exacts, puis doublons approximatifs avec un seuil qui s'ajuste en analysant les commentaires.",
          "Déduplication automatique selon des règles de priorité, puis sélection manuelle : une case « Garder ? » par ligne dans chaque groupe.",
          "Fichier d'analyse Excel et export final de la sélection.",
          "Journal d'exécution lisible et application aux couleurs de l'entreprise.",
        ],
        en: [
          "Two treatments, drivers and vehicles; choice of the Excel sheet and header row.",
          "Driver inactivity check at a reference date, based on the last rotation.",
          "Exact duplicates, then approximate duplicates with a threshold adjusted by analysing the comments.",
          "Automatic deduplication using priority rules, then manual selection: a “Keep?” checkbox per row in each group.",
          "Excel analysis file and final export of the selection.",
          "Readable run log and the company's visual identity.",
        ],
      },
      metrics: [{ value: "8 / 8", label: { fr: "groupes de doublons retrouvés (jeu fictif)", en: "duplicate groups found (fictitious set)" } }],
      stack: ["Python", "PyQt6", "pandas", "rapidfuzz", "openpyxl", "Exécutable autonome"],
      logos: LOGOS_HOLCIM,
      images: [
        { src: "assets/nettoyage-app.png", kind: "desktop", caption: { fr: "L'application après un traitement : fichier, feuille, ligne d'en-têtes, vérification de l'inactivité, journal (données fictives).", en: "The application after a run: file, sheet, header row, inactivity check, log (fictitious data)." } },
        { src: "assets/nettoyage-doublons.png", kind: "desktop", caption: { fr: "Sélection manuelle : chaque groupe de doublons, avec la ligne conservée par défaut (données fictives).", en: "Manual selection: each duplicate group, with the row kept by default (fictitious data)." } },
      ],
    },
    {
      id: "megasoft-site",
      year: "2026",
      status: { fr: "En ligne", en: "Live" },
      title: { fr: "Site web de l'éditeur Megasoft Office", en: "Website of the software publisher Megasoft Office" },
      context: {
        fr: "L'entreprise avait besoin d'un site vitrine moderne pour présenter ses trois pôles (Office, Digital, Services), ses solutions et son équipe, et recevoir les demandes de démonstration.",
        en: "The company needed a modern showcase site to present its three divisions (Office, Digital, Services), its solutions and its team, and to receive demo requests.",
      },
      role: {
        fr: "Réalisation du site megasoft-office.com.",
        en: "Built the megasoft-office.com website.",
      },
      outcome: {
        fr: "Un site public, rapide et animé, qui présente l'éditeur et ses solutions et oriente les visiteurs vers une demande de démonstration.",
        en: "A public, fast and animated site presenting the publisher and its solutions and guiding visitors to a demo request.",
      },
      highlights: {
        fr: [
          "Page d'accueil avec un carrousel des trois pôles et un appel à l'action « Demander une démo ».",
          "Sections : qui sommes-nous, solutions par pôle, pourquoi nous, partenaires, références, contact et blog.",
          "Bandeau de consentement aux cookies (tout refuser, tout accepter, personnaliser).",
          "Titres et descriptions pour le référencement et le partage sur les réseaux.",
        ],
        en: [
          "Home page with a carousel of the three divisions and a “Request a demo” call to action.",
          "Sections: who we are, solutions per division, why us, partners, references, contact and blog.",
          "Cookie consent banner (refuse all, accept all, customise).",
          "Titles and descriptions for search engines and social sharing.",
        ],
      },
      stack: ["Web", "React", "TypeScript", "Animations", "SEO", "Design"],
      link: { url: "https://megasoft-office.com", label: "megasoft-office.com" },
      images: [
        { src: "assets/mso-hero.png", kind: "app", caption: { fr: "Accueil : message d'accroche, trois pôles et appel à l'action (capture du site public).", en: "Home: headline, three divisions and call to action (public site screenshot)." } },
        { src: "assets/mso-qui.png", kind: "app", caption: { fr: "Section « Qui sommes-nous ».", en: "“Who we are” section." } },
        { src: "assets/mso-poles.png", kind: "app", caption: { fr: "Section « Nos pôles » : un onglet par pôle et ses solutions.", en: "“Our divisions” section: one tab per division and its solutions." } },
        { src: "assets/mso-pourquoi.png", kind: "app", caption: { fr: "Section « Pourquoi nous ».", en: "“Why us” section." } },
      ],
    },
    {
      id: "club-cap",
      year: "2025",
      status: { fr: "En ligne", en: "Live" },
      title: { fr: "Site web du Club d'Activités Polytechniciennes (CAP)", en: "Website of the Polytechnic Activities Club (CAP)" },
      context: {
        fr: "Le club associatif de l'ENP dont je suis responsable de projets (comité 2025, ancien responsable RH) avait besoin d'une vitrine : projets, pôles, valeurs, contact.",
        en: "The ENP student club where I am project lead (2025 board, former HR lead) needed a showcase: projects, sections, values, contact.",
      },
      role: {
        fr: "Réalisation du site cap-enp.com.",
        en: "Built the cap-enp.com website.",
      },
      outcome: {
        fr: "Un site public, vivant et animé, qui présente les activités scientifiques, culturelles et caritatives du club.",
        en: "A public, animated site presenting the club's scientific, cultural and charity activities.",
      },
      stack: ["Web", "Animations", "Design"],
      link: { url: "https://cap-enp.com", label: "cap-enp.com" },
      images: [
        { src: "assets/cap-hero.png", kind: "app", caption: { fr: "Page d'accueil de cap-enp.com : bandeau d'accroche et navigation (capture du site public).", en: "cap-enp.com home page: hero banner and navigation (public site screenshot)." } },
        { src: "assets/cap-3.png", kind: "app", caption: { fr: "Section « Nos pôles ».", en: "“Our sections” section." } },
      ],
    },
  ],

  /* ---------------- FORMATION ---------------- */
  courses: [
    { group: { fr: "IA & données", en: "AI & data" }, items: ["Introduction à l'IA", "Apprentissage automatique", "Traitement du langage naturel", "Traitement d'images", "Analyse de données multivariées", "Big data & data mining", "Business intelligence", "Deep learning (en cours)"] },
    { group: { fr: "Systèmes & sécurité", en: "Systems & security" }, items: ["Cryptographie", "Systèmes distribués", "Réseaux et protocoles", "Sécurité des systèmes et réseaux", "Informatique graphique & réalité virtuelle", "Visualisation de données (en cours)"] },
    { group: { fr: "Fondamentaux", en: "Foundations" }, items: ["Probabilités & statistiques", "Recherche opérationnelle", "Bases de données", "Programmation avancée", "Théorie de l'information", "Traitement du signal"] },
    { group: { fr: "Ingénierie", en: "Engineering" }, items: ["Robotique industrielle", "Automatique", "Interface homme-machine", "Gestion de projet", "Entrepreneuriat"] },
  ],

  /* ---------------- PARCOURS ---------------- */
  timeline: [
    {
      period: "2026 – ",
      title: { fr: "Chief Architect & Junior Product Manager — Megasoft Office", en: "Chief Architect & Junior Product Manager — Megasoft Office" },
      text: { fr: "Conception de quatre logiciels industriels (assistant IA, MES, planification avancée, gestion du transport) en lien avec les clients.", en: "Design of four industrial software products (AI assistant, MES, advanced planning, transport management) in contact with customers." },
    },
    {
      period: "2026 – ",
      title: { fr: "Consultant et formateur en planification de la demande", en: "Demand-planning consultant and trainer" },
      text: { fr: "Formation et conseil en planification pour Hamoud Boualem, Kayali et Huda Beauty, sur Advanced Planning Scheduling (Sunstice).", en: "Training and planning consulting for Hamoud Boualem, Kayali and Huda Beauty, on Advanced Planning Scheduling (Sunstice)." },
    },
    {
      period: "Juil. – Sept. 2025",
      title: { fr: "Stagiaire supply chain — Holcim × Lafarge", en: "Supply-chain intern — Holcim × Lafarge" },
      text: { fr: "Deux outils Python : détection des coûts de transport anormaux et des doublons.", en: "Two Python tools: abnormal transport cost detection and duplicate detection." },
    },
    {
      period: "2024 – ",
      title: { fr: "Ingénieur d'État, génie industriel, option Data Science & IA — ENP, Alger", en: "State engineering degree, industrial engineering, Data Science & AI — ENP, Algiers" },
      text: { fr: "5ᵉ année en cours. Semestre 5 : deep learning et techniques avancées en data science.", en: "Currently in 5th year. Semester 5: deep learning and advanced data science techniques." },
    },
    {
      period: "2022 – 2024",
      title: { fr: "Classes préparatoires en sciences et technologies — ENP", en: "Preparatory classes in science and technology — ENP" },
      text: { fr: "Classé 58ᵉ.", en: "Ranked 58th." },
    },
    {
      period: "2019 – 2022",
      title: { fr: "Baccalauréat mathématiques, mention Très Bien — Lycée d'excellence de Mathématiques, Kouba", en: "Mathematics baccalaureate, with highest honours — Excellence Mathematics High School, Kouba" },
      text: { fr: "", en: "" },
    },
  ],

  ui: {
    about: { fr: "À propos", en: "About" },
    skills: { fr: "Compétences", en: "Skills" },
    projects: { fr: "Projets", en: "Projects" },
    clients: { fr: "Clients", en: "Clients" },
    keyPoints: { fr: "Points clés", en: "Key points" },
    stripLead: { fr: "Confidentialité.", en: "Confidentiality." },
    stripText: { fr: "Aucun code ni donnée client publiés : je montre la démarche, l'architecture et les résultats.", en: "No code or client data published: I show the approach, architecture and outcomes." },
    exIdentity: { fr: "ex-identité", en: "ex-identity" },
    clientsTitle1: { fr: "Pour qui j'ai travaillé,", en: "Who I worked for," },
    clientsTitle2: { fr: "sans rien dévoiler d'eux.", en: "without revealing anything about them." },
    clientsIntro: { fr: "Je cite les entreprises pour lesquelles j'ai travaillé et la nature de la mission, rien de plus.", en: "I name the companies I worked for and the kind of engagement, nothing more." },
    clientsNever: { fr: "Ce que je ne publie pas", en: "What I do not publish" },
    education: { fr: "Cours suivis", en: "Coursework" },
    timeline: { fr: "Parcours", en: "Background" },
    contact: { fr: "Contact", en: "Contact" },
    contactText: { fr: "Discutons de votre projet ou d'une opportunité.", en: "Let's talk about your project or an opportunity." },
    stack: { fr: "Stack", en: "Stack" },
    role: { fr: "Mon rôle", en: "My role" },
    outcome: { fr: "Résultat", en: "Outcome" },
    context: { fr: "Contexte", en: "Context" },
    highlights: { fr: "Points clés", en: "Highlights" },
    visit: { fr: "Voir le site", en: "Visit the site" },
    cta: { fr: "Voir mes projets", en: "View my projects" },
    cta2: { fr: "Me contacter", en: "Get in touch" },
    profile: { fr: "Profil", en: "Profile" },
    project: { fr: "Projet", en: "Project" },
    zoom: { fr: "Cliquer pour agrandir", en: "Click to enlarge" },
    heroLine1: { fr: "Je conçois des logiciels industriels", en: "I design industrial software" },
    heroLine2: { fr: "et des systèmes de prévision.", en: "and forecasting systems." },
    aboutTitle1: { fr: "Un profil data et architecture,", en: "A data and architecture profile," },
    aboutTitle2: { fr: "au service de l'industrie.", en: "serving industry." },
    skillsTitle1: { fr: "Des compétences", en: "Skills" },
    skillsTitle2: { fr: "du modèle à la mise en production.", en: "from model to production." },
    projectsTitle1: { fr: "Douze projets réalisés,", en: "Twelve projects delivered," },
    projectsTitle2: { fr: "montrés sans une ligne de code.", en: "shown without a line of code." },
    educationTitle1: { fr: "Une formation d'ingénieur", en: "An engineering education" },
    educationTitle2: { fr: "orientée données et IA.", en: "focused on data and AI." },
    timelineTitle1: { fr: "Un parcours", en: "A path" },
    timelineTitle2: { fr: "de la prépa à l'architecture logicielle.", en: "from prep school to software architecture." },
    contactTitle1: { fr: "Parlons de", en: "Let's talk about" },
    contactTitle2: { fr: "votre projet.", en: "your project." },
    stat1: { fr: "logiciels industriels conçus", en: "industrial software products designed" },
    stat2: { fr: "projets présentés", en: "projects presented" },
    stat3: { fr: "langues de travail", en: "working languages" },
    close: { fr: "Fermer", en: "Close" },
  },
};
