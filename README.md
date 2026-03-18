# Portfolio Lucas Marciniak

Portfolio professionnel pour Lucas Marciniak, etudiant en informatique specialise en Data, IA et developpement.

## Technologies

- **Framework** : Next.js 16 (App Router)
- **Styling** : Tailwind CSS v4
- **UI Components** : shadcn/ui
- **Animations** : Embla Carousel
- **Typographie** : Inter, Space Grotesk (Google Fonts)

## Prerequisites

- Node.js 18.17 ou superieur
- pnpm (recommande) ou npm

## Installation

1. **Cloner le repository**

```bash
git clone https://github.com/lucasmarciniak/portfolio.git
cd portfolio
```

2. **Installer les dependances**

```bash
pnpm install
```

3. **Lancer le serveur de developpement**

```bash
pnpm dev
```

4. **Ouvrir dans le navigateur**

Rendez-vous sur [http://localhost:3000](http://localhost:3000)

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `pnpm dev` | Lance le serveur de developpement |
| `pnpm build` | Build de production |
| `pnpm start` | Lance le serveur de production |
| `pnpm lint` | Verifie le code avec ESLint |

## Structure du projet

```
portfolio/
├── app/
│   ├── globals.css       # Styles globaux et tokens de design
│   ├── layout.tsx        # Layout principal avec fonts
│   ├── page.tsx          # Page d'accueil
│   └── projets/
│       └── [id]/
│           └── page.tsx  # Pages de details des projets
├── components/
│   ├── header.tsx        # Navigation avec indicateur de section
│   ├── footer.tsx        # Pied de page
│   ├── paper-background.tsx  # Texture de fond papier
│   ├── ui/               # Composants shadcn/ui
│   └── sections/
│       ├── hero.tsx      # Section hero
│       ├── about.tsx     # A propos
│       ├── skills.tsx    # Competences
│       ├── projects.tsx  # Projets (carousel)
│       ├── journey.tsx   # Parcours
│       ├── testimonials.tsx  # Temoignages
│       └── contact.tsx   # Formulaire de contact
├── lib/
│   ├── projects.ts       # Donnees des projets
│   └── utils.ts          # Utilitaires
└── public/
    └── images/
        └── paper-texture.png  # Texture de fond
```

## Configuration du formulaire de contact

Le formulaire de contact est actuellement en mode demo. Pour activer l'envoi reel des emails :

### Option 1 : Resend (recommande)

1. Creer un compte sur [Resend](https://resend.com)
2. Obtenir une cle API
3. Ajouter la variable d'environnement :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

4. Creer la route API `/app/api/contact/route.ts`

### Option 2 : EmailJS

1. Creer un compte sur [EmailJS](https://www.emailjs.com)
2. Configurer un service et un template
3. Ajouter les variables d'environnement :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxx
```

## Deploiement

### Vercel (recommande)

1. Push le code sur GitHub
2. Connecter le repository a [Vercel](https://vercel.com)
3. Le deploiement se fait automatiquement

### Autre hebergeur

```bash
pnpm build
pnpm start
```

## Personnalisation

### Modifier les informations personnelles

- **Hero** : `components/sections/hero.tsx`
- **A propos** : `components/sections/about.tsx`
- **Competences** : `components/sections/skills.tsx`
- **Projets** : `lib/projects.ts`
- **Parcours** : `components/sections/journey.tsx`
- **Contact** : `components/sections/contact.tsx`

### Modifier les couleurs

Les tokens de design sont definis dans `app/globals.css` :

```css
:root {
  --primary: oklch(0.45 0.31 264);  /* Bleu electrique */
  --background: oklch(0.98 0.002 90);
  /* ... */
}
```

## Licence

MIT
