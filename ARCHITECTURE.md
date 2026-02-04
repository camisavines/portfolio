# Portfolio Website Architecture

## Component Hierarchy

```
App
├── Navigation
│   ├── Logo
│   ├── NavLinks
│   └── MobileMenu
├── ScrollProgress
├── Hero
│   ├── AnimatedText
│   ├── CTAButtons
│   └── ScrollIndicator
├── About
│   ├── ProfileImage
│   ├── StoryText
│   └── PrincipleCards
│       └── PrincipleCard (x3)
├── Skills
│   ├── CategoryGrid
│   └── SkillCard (multiple)
│       ├── CategoryIcon
│       └── SkillList
├── Projects
│   ├── FilterButtons
│   ├── ProjectGrid
│   │   └── ProjectCard (x4-6)
│   └── ProjectModal
│       ├── ImageGallery
│       ├── ProjectDetails
│       └── ActionButtons
├── Contact
│   ├── ContactForm
│   │   ├── FormField (x3)
│   │   └── SubmitButton
│   └── ContactInfo
│       └── SocialLinks
├── Footer
└── EasterEggs
    ├── KonamiCode
    ├── CursorTrail
    └── ClickCounter
```

## Data Flow

```mermaid
graph TD
    A[constants.js] -->|Site Content| B[App.jsx]
    B --> C[Hero Section]
    B --> D[About Section]
    B --> E[Skills Section]
    B --> F[Projects Section]
    B --> G[Contact Section]
    
    H[useScrollSpy Hook] -->|Active Section| I[Navigation]
    J[useSmoothScroll Hook] --> I
    
    F -->|Selected Project| K[ProjectModal]
    G -->|Form Data| L[Form Handler]
    
    M[Framer Motion] -->|Animations| C
    M -->|Animations| D
    M -->|Animations| E
    M -->|Animations| F
    
    N[Intersection Observer] -->|Visibility| C
    N -->|Visibility| D
    N -->|Visibility| E
    N -->|Visibility| F
```

## State Management

```mermaid
graph LR
    A[App State] --> B[activeSection]
    A --> C[selectedProject]
    A --> D[isMenuOpen]
    A --> E[formStatus]
    A --> F[easterEggState]
    
    B --> G[Navigation Highlight]
    C --> H[Project Modal]
    D --> I[Mobile Menu]
    E --> J[Contact Form]
    F --> K[Easter Egg Components]
```

## File Organization

```
src/
├── components/
│   ├── common/              # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Grid.jsx
│   │   └── Section.jsx
│   ├── layout/              # Layout components
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollProgress.jsx
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   └── easter-eggs/         # Fun interactive elements
│       ├── KonamiCode.jsx
│       ├── CursorTrail.jsx
│       └── ClickCounter.jsx
├── hooks/                   # Custom React hooks
│   ├── useScrollSpy.js
│   ├── useSmoothScroll.js
│   ├── useMediaQuery.js
│   └── useKonamiCode.js
├── utils/                   # Utility functions
│   ├── animations.js        # Framer Motion variants
│   └── constants.js         # Site content & config
├── styles/                  # Global styles
│   ├── design-system.css    # CSS variables
│   ├── typography.css       # Font styles
│   └── utilities.css        # Utility classes
├── App.jsx                  # Main app component
├── main.jsx                 # Entry point
└── index.css                # Global base styles
```

## Technology Stack

```mermaid
graph TB
    A[React 19] --> B[Component Library]
    C[Vite 7] --> D[Build Tool]
    E[Framer Motion] --> F[Animations]
    G[Intersection Observer API] --> H[Scroll Detection]
    I[CSS Variables] --> J[Design System]
    K[GitHub Pages] --> L[Hosting]
    M[GitHub Actions] --> N[CI/CD]
```

## Performance Strategy

```mermaid
graph LR
    A[Initial Load] --> B[Critical CSS]
    A --> C[Hero Section]
    A --> D[Navigation]
    
    E[Lazy Load] --> F[Projects Section]
    E --> G[Contact Section]
    E --> H[Easter Eggs]
    
    I[Code Splitting] --> F
    I --> G
    
    J[Image Optimization] --> K[WebP Format]
    J --> L[Lazy Loading]
    J --> M[Responsive Images]
```

## Responsive Breakpoints

```
Mobile:     320px - 639px   (1 column)
Tablet:     640px - 1023px  (2 columns)
Desktop:    1024px - 1279px (3 columns)
Large:      1280px+         (4 columns)
```

## Animation Timeline

```mermaid
gantt
    title Page Load Animation Sequence
    dateFormat X
    axisFormat %Ls
    
    section Hero
    Fade in background    :0, 300
    Slide in heading      :200, 600
    Slide in subheading   :400, 800
    Fade in CTA buttons   :600, 1000
    
    section Navigation
    Fade in nav           :0, 400
    
    section Scroll Trigger
    About section reveal  :crit, 1500, 2100
    Skills cards stagger  :crit, 2000, 2800
    Projects grid reveal  :crit, 2500, 3300
```

## User Interaction Flow

```mermaid
graph TD
    A[User Lands on Site] --> B{Device Type?}
    B -->|Mobile| C[See Mobile Nav]
    B -->|Desktop| D[See Full Nav]
    
    C --> E[Tap Menu Icon]
    E --> F[Slide-in Menu]
    
    D --> G[Click Nav Link]
    F --> G
    
    G --> H[Smooth Scroll to Section]
    H --> I[Section Animates In]
    
    I --> J{User Action?}
    J -->|View Project| K[Click Project Card]
    J -->|Contact| L[Scroll to Contact]
    J -->|Explore| M[Continue Scrolling]
    
    K --> N[Open Project Modal]
    N --> O[View Details]
    O --> P[Close Modal or Visit Live Site]
    
    L --> Q[Fill Contact Form]
    Q --> R[Submit Message]
    R --> S[Success Confirmation]
    
    M --> T[Discover Easter Eggs]
    T --> U[Delight & Engagement]
```

## Deployment Pipeline

```mermaid
graph LR
    A[Push to Main] --> B[GitHub Actions Triggered]
    B --> C[Install Dependencies]
    C --> D[Run Linter]
    D --> E[Build Project]
    E --> F[Run Lighthouse CI]
    F --> G{Tests Pass?}
    G -->|Yes| H[Deploy to GitHub Pages]
    G -->|No| I[Notify Developer]
    H --> J[Site Live]
```

## SEO & Metadata Structure

```
HTML Head
├── Title Tag
├── Meta Description
├── Meta Keywords
├── Open Graph Tags
│   ├── og:title
│   ├── og:description
│   ├── og:image
│   ├── og:url
│   └── og:type
├── Twitter Card Tags
│   ├── twitter:card
│   ├── twitter:title
│   ├── twitter:description
│   └── twitter:image
├── Canonical URL
├── Favicon
└── Theme Color
```

## Accessibility Features

```mermaid
graph TD
    A[Accessibility] --> B[Semantic HTML]
    A --> C[ARIA Labels]
    A --> D[Keyboard Navigation]
    A --> E[Screen Reader Support]
    A --> F[Color Contrast]
    A --> G[Focus Indicators]
    A --> H[Skip Links]
    
    B --> I[nav, main, section, article]
    C --> J[aria-label, aria-labelledby]
    D --> K[Tab Order, Focus Management]
    E --> L[Alt Text, ARIA Descriptions]
    F --> M[WCAG AA Compliance]
    G --> N[Visible Focus Rings]
    H --> O[Skip to Main Content]
```

## Easter Egg Triggers

```mermaid
graph TD
    A[Easter Eggs] --> B[Konami Code]
    A --> C[Logo Clicks]
    A --> D[Secret Typing]
    A --> E[Time-Based]
    
    B --> F[↑↑↓↓←→←→BA]
    F --> G[Confetti + Message]
    
    C --> H[10 Rapid Clicks]
    H --> I[Logo Spin + Fun Fact]
    
    D --> J[Type 'menu']
    J --> K[Developer Menu]
    
    E --> L[Time of Day]
    L --> M[Custom Greeting]
```

## Performance Budget

```
Target Metrics:
├── First Contentful Paint: < 1.5s
├── Largest Contentful Paint: < 2.5s
├── Time to Interactive: < 3.5s
├── Total Bundle Size: < 200KB (gzipped)
├── Image Size: < 200KB per image
└── Lighthouse Score: > 90
```

## Browser Support

```
Supported Browsers:
├── Chrome: Last 2 versions
├── Firefox: Last 2 versions
├── Safari: Last 2 versions
├── Edge: Last 2 versions
└── Mobile Safari: iOS 12+
```

## Development Workflow

```mermaid
graph LR
    A[Local Development] --> B[npm run dev]
    B --> C[Make Changes]
    C --> D[Hot Module Reload]
    D --> E[Test in Browser]
    E --> F{Satisfied?}
    F -->|No| C
    F -->|Yes| G[Commit Changes]
    G --> H[Push to GitHub]
    H --> I[Auto Deploy]
```

## Content Update Process

```mermaid
graph TD
    A[Update Content] --> B{What to Update?}
    B -->|Text| C[Edit constants.js]
    B -->|Images| D[Replace in public/]
    B -->|Projects| E[Add to constants.js]
    B -->|Styles| F[Edit CSS Variables]
    
    C --> G[Save File]
    D --> G
    E --> G
    F --> G
    
    G --> H[Test Locally]
    H --> I[Commit & Push]
    I --> J[Auto Deploy]
```

---

This architecture provides a clear blueprint for building your portfolio website with a focus on maintainability, performance, and user experience.