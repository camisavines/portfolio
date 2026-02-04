# Portfolio Website Wireframes & Visual Mockups

This document provides detailed wireframes for each section of the portfolio website, showing layout, spacing, typography hierarchy, and visual elements.

---

## 📱 Responsive Breakpoints Reference

```
Mobile:     320px - 639px   (Single column)
Tablet:     640px - 1023px  (2 columns)
Desktop:    1024px+         (3-4 columns)
```

---

## 🎨 Color Palette Quick Reference

```
Backgrounds:  #FAF8F3 (cream), #E8E3D8 (sand)
Accents:      #E07A5F (terracotta), #81B29A (sage), #F2A154 (ochre)
Text:         #2D3142 (charcoal), #4F5D75 (slate)
```

---

## 1. Navigation Bar

### Desktop View (1024px+)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│  [CS Logo]                    Home  About  Skills  Projects  Contact     │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
    ↑                                    ↑
  Logo (32px)                    Nav Links (16px, 600 weight)
  Terracotta accent              Active: Terracotta underline
```

**Specifications:**
- Height: 80px
- Background: Cream (#FAF8F3) with subtle shadow when scrolled
- Logo: 32px, bold, clickable
- Nav links: 16px, semibold (600), 40px spacing between items
- Active state: 2px terracotta underline, smooth transition
- Hover state: Terracotta color, 250ms transition

### Mobile View (< 768px)

```
┌─────────────────────────────────────┐
│                                     │
│  [CS Logo]              [☰ Menu]   │
│                                     │
└─────────────────────────────────────┘

When menu open:
┌─────────────────────────────────────┐
│                                     │
│  [CS Logo]              [✕ Close]  │
│                                     │
├─────────────────────────────────────┤
│                                     │
│           Home                      │
│           About                     │
│           Skills                    │
│           Projects                  │
│           Contact                   │
│                                     │
└─────────────────────────────────────┘
```

**Mobile Menu Specifications:**
- Slide in from right (300ms ease)
- Full-height overlay
- Background: Cream with 95% opacity
- Links: 24px, centered, 32px vertical spacing
- Backdrop blur effect

---

## 2. Hero Section

### Desktop View (1024px+)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│                                                                           │
│                                                                           │
│                        Hey there, I'm Cami 👋                            │
│                          (20px, slate color)                             │
│                                                                           │
│                                                                           │
│              I build digital experiences                                 │
│                   that feel like home                                    │
│                  (76px, black weight, tight leading)                     │
│                                                                           │
│                                                                           │
│        Front-stack engineer & digital builder helping people             │
│         and small businesses create confident, modern presences          │
│                    with craftsmanship and care.                          │
│                     (20px, slate, relaxed leading)                       │
│                                                                           │
│                                                                           │
│           ┌──────────────────┐    ┌──────────────────┐                  │
│           │   See my work    │    │   Let's chat     │                  │
│           └──────────────────┘    └──────────────────┘                  │
│              (Primary button)        (Secondary button)                  │
│                                                                           │
│                                                                           │
│                                                                           │
│                              ↓                                            │
│                        (Scroll indicator)                                │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 100vh (full viewport)
- Background: Gradient from cream to sand (top to bottom)
- Content: Centered, max-width 900px
- Greeting: 20px, medium weight, slate color
- Headline: Fluid 48-76px, black weight (900), -0.02em letter-spacing
- Subheadline: 20px, slate, max-width 700px, 1.625 line-height
- Buttons: 48px spacing between, 16px font, 24px padding vertical
- Scroll indicator: Animated bounce, 40px from bottom

**Animation Sequence:**
1. Greeting fades in (0ms delay)
2. Headline slides up (100ms delay)
3. Subheadline slides up (200ms delay)
4. Buttons fade in (300ms delay)
5. Scroll indicator appears (1000ms delay)

### Mobile View (< 768px)

```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│      Hey there, I'm Cami 👋        │
│                                     │
│                                     │
│     I build digital                 │
│     experiences that                │
│     feel like home                  │
│                                     │
│                                     │
│  Front-stack engineer helping       │
│  people create confident,           │
│  modern digital presences.          │
│                                     │
│                                     │
│  ┌───────────────────────────────┐ │
│  │      See my work              │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │      Let's chat               │ │
│  └───────────────────────────────┘ │
│                                     │
│                                     │
│               ↓                     │
│                                     │
└─────────────────────────────────────┘
```

**Mobile Adjustments:**
- Headline: 39-48px (smaller scale)
- Buttons: Full width, stacked vertically
- Reduced vertical spacing

---

## 3. About Section

### Desktop View (1024px+)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│  ┌─────────────────────┐  ┌─────────────────────────────────────────┐  │
│  │                     │  │                                           │  │
│  │                     │  │  Building with purpose,                   │  │
│  │   [Profile Image    │  │  designing with heart                     │  │
│  │    or Visual        │  │  (48px heading, bold)                     │  │
│  │    Element]         │  │                                           │  │
│  │                     │  │  I believe the web should feel            │  │
│  │    400x400px        │  │  welcoming, not intimidating. Every       │  │
│  │    Rounded          │  │  project I take on is an opportunity...   │  │
│  │                     │  │  (18px body, relaxed leading)             │  │
│  │                     │  │                                           │  │
│  │                     │  │  With a background in [your background],  │  │
│  │                     │  │  I bring both technical expertise...      │  │
│  │                     │  │                                           │  │
│  └─────────────────────┘  │  When I'm not coding, you'll find me...  │  │
│                            │                                           │  │
│                            └─────────────────────────────────────────┘  │
│                                                                           │
│                                                                           │
│                          How I work                                      │
│                       (32px heading, semibold)                           │
│                                                                           │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐     │
│  │                  │  │                  │  │                  │     │
│  │       🎯         │  │       🤝         │  │       ✨         │     │
│  │   (48px icon)    │  │   (48px icon)    │  │   (48px icon)    │     │
│  │                  │  │                  │  │                  │     │
│  │  Purpose-driven  │  │  Collaborative   │  │ Detail-obsessed  │     │
│  │  (20px, bold)    │  │  (20px, bold)    │  │  (20px, bold)    │     │
│  │                  │  │                  │  │                  │     │
│  │  Every design    │  │  Your vision,    │  │  Sweating the    │     │
│  │  decision serves │  │  my expertise—   │  │  small stuff so  │     │
│  │  your goals      │  │  together        │  │  you don't have  │     │
│  │  (16px, slate)   │  │  (16px, slate)   │  │  to (16px)       │     │
│  │                  │  │                  │  │                  │     │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘     │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: Cream (#FAF8F3)
- Padding: 160px vertical (desktop)
- Two-column grid: 40% image, 60% text (with gap)
- Image: Rounded corners (24px), subtle shadow
- Heading: 48px, bold, charcoal
- Body text: 18px, slate, 1.625 line-height, max-width 600px
- Principle cards: 3 columns, equal width
- Card padding: 32px
- Card background: Sand (#E8E3D8)
- Card border-radius: 16px
- Card hover: Lift 8px, increase shadow

### Mobile View (< 768px)

```
┌─────────────────────────────────────┐
│                                     │
│  ┌───────────────────────────────┐ │
│  │                               │ │
│  │      [Profile Image]          │ │
│  │       300x300px               │ │
│  │                               │ │
│  └───────────────────────────────┘ │
│                                     │
│  Building with purpose,             │
│  designing with heart               │
│  (32px heading)                     │
│                                     │
│  I believe the web should feel      │
│  welcoming, not intimidating...     │
│  (16px body)                        │
│                                     │
│  [More paragraphs...]               │
│                                     │
│                                     │
│  How I work                         │
│  (24px heading)                     │
│                                     │
│  ┌───────────────────────────────┐ │
│  │          🎯                   │ │
│  │    Purpose-driven             │ │
│  │    Every design decision...   │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │          🤝                   │ │
│  │    Collaborative              │ │
│  │    Your vision, my...         │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │          ✨                   │ │
│  │    Detail-obsessed            │ │
│  │    Sweating the small...      │ │
│  └───────────────────────────────┘ │
│                                     │
└─────────────────────────────────────┘
```

---

## 4. Skills Section

### Desktop View (1024px+)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│                      What I bring to the table                           │
│                       (48px heading, centered)                           │
│                                                                           │
│                                                                           │
│  ┌──────────────────────┐  ┌──────────────────────┐  ┌────────────────┐│
│  │                      │  │                      │  │                ││
│  │         💻           │  │         🎨           │  │       🛠️       ││
│  │    (64px icon)       │  │    (64px icon)       │  │   (64px icon)  ││
│  │                      │  │                      │  │                ││
│  │  Frontend            │  │  Design & UX         │  │  Tools &       ││
│  │  Development         │  │                      │  │  Workflow      ││
│  │  (24px, bold)        │  │  (24px, bold)        │  │  (24px, bold)  ││
│  │                      │  │                      │  │                ││
│  │  ┌────────────────┐  │  │  ┌────────────────┐  │  │  ┌──────────┐ ││
│  │  │ React & Next.js│  │  │  │ Figma          │  │  │  │ Git      │ ││
│  │  │ ████████████   │  │  │  │ ██████████     │  │  │  │ ████████ │ ││
│  │  │ Expert         │  │  │  │ Advanced       │  │  │  │ Expert   │ ││
│  │  └────────────────┘  │  │  └────────────────┘  │  │  └──────────┘ ││
│  │                      │  │                      │  │                ││
│  │  ┌────────────────┐  │  │  ┌────────────────┐  │  │  ┌──────────┐ ││
│  │  │ TypeScript     │  │  │  │ Responsive     │  │  │  │ Vite     │ ││
│  │  │ ██████████     │  │  │  │ ████████████   │  │  │  │ ████████ │ ││
│  │  │ Advanced       │  │  │  │ Expert         │  │  │  │ Advanced │ ││
│  │  └────────────────┘  │  │  └────────────────┘  │  │  └──────────┘ ││
│  │                      │  │                      │  │                ││
│  │  [More skills...]    │  │  [More skills...]    │  │  [More...]     ││
│  │                      │  │                      │  │                ││
│  └──────────────────────┘  └──────────────────────┘  └────────────────┘│
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: Sand (#E8E3D8)
- Padding: 160px vertical
- Heading: 48px, bold, centered, charcoal
- Grid: 3 columns, equal width, 48px gap
- Card background: Cream (#FAF8F3)
- Card padding: 40px
- Card border-radius: 16px
- Card shadow: Medium
- Icon: 64px, centered
- Category title: 24px, bold, 24px margin-top
- Skill items: 16px, 16px vertical spacing
- Progress bar: 4px height, terracotta fill, sand background
- Hover: Card lifts 8px, shadow increases

**Skill Level Indicators:**
- Expert: 100% fill
- Advanced: 80% fill
- Intermediate: 60% fill

### Mobile View (< 768px)

```
┌─────────────────────────────────────┐
│                                     │
│  What I bring to the table          │
│  (32px heading)                     │
│                                     │
│  ┌───────────────────────────────┐ │
│  │          💻                   │ │
│  │   Frontend Development        │ │
│  │                               │ │
│  │   React & Next.js             │ │
│  │   ████████████ Expert         │ │
│  │                               │ │
│  │   TypeScript                  │ │
│  │   ██████████ Advanced         │ │
│  │                               │ │
│  │   [More skills...]            │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │          🎨                   │ │
│  │   Design & UX                 │ │
│  │   [Skills...]                 │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │          🛠️                   │ │
│  │   Tools & Workflow            │ │
│  │   [Skills...]                 │ │
│  └───────────────────────────────┘ │
│                                     │
└─────────────────────────────────────┘
```

---

## 5. Projects Section

### Desktop View (1024px+)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│                          Selected Work                                   │
│                       (48px heading, centered)                           │
│                                                                           │
│                                                                           │
│     [All]  [Web Apps]  [Websites]  [Tools]                              │
│   (Filter buttons - 16px, pill-shaped, terracotta when active)          │
│                                                                           │
│                                                                           │
│  ┌─────────────────────────────┐  ┌─────────────────────────────┐      │
│  │                             │  │                             │      │
│  │    [Project Thumbnail]      │  │    [Project Thumbnail]      │      │
│  │         600x400px           │  │         600x400px           │      │
│  │                             │  │                             │      │
│  │  ┌───────────────────────┐  │  │  ┌───────────────────────┐  │      │
│  │  │ Project Name          │  │  │  │ Project Name          │  │      │
│  │  │ (24px, bold)          │  │  │  │ (24px, bold)          │  │      │
│  │  │                       │  │  │  │                       │  │      │
│  │  │ One-line description  │  │  │  │ One-line description  │  │      │
│  │  │ of the project...     │  │  │  │ of the project...     │  │      │
│  │  │ (16px, slate)         │  │  │  │ (16px, slate)         │  │      │
│  │  │                       │  │  │  │                       │  │      │
│  │  │ [React] [Node] [SQL]  │  │  │  │ [React] [Figma]       │  │      │
│  │  │ (Tech tags)           │  │  │  │ (Tech tags)           │  │      │
│  │  └───────────────────────┘  │  │  └───────────────────────┘  │      │
│  └─────────────────────────────┘  └─────────────────────────────┘      │
│                                                                           │
│  ┌─────────────────────────────┐  ┌─────────────────────────────┐      │
│  │    [Project Thumbnail]      │  │    [Project Thumbnail]      │      │
│  │         600x400px           │  │         600x400px           │      │
│  │                             │  │                             │      │
│  │  ┌───────────────────────┐  │  │  ┌───────────────────────┐  │      │
│  │  │ Project Name          │  │  │  │ Project Name          │  │      │
│  │  │ [Content...]          │  │  │  │ [Content...]          │  │      │
│  │  └───────────────────────┘  │  │  └───────────────────────┘  │      │
│  └─────────────────────────────┘  └─────────────────────────────┘      │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: Cream (#FAF8F3)
- Padding: 160px vertical
- Heading: 48px, bold, centered
- Filter buttons: 16px, 12px padding, pill-shaped (9999px radius)
- Active filter: Terracotta background, white text
- Grid: 2 columns, 48px gap
- Card background: White
- Card border-radius: 16px
- Card shadow: Medium
- Image: Cover fit, 16px border-radius top
- Content padding: 32px
- Project title: 24px, bold
- Description: 16px, slate, 1.5 line-height
- Tech tags: 14px, sand background, 8px padding, 8px radius
- Hover: Image scales 1.05x, card lifts 8px

### Project Modal (When card is clicked)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                     [✕]  │
│                                                                           │
│                     [Large Project Image]                                │
│                          1200x600px                                      │
│                                                                           │
│                                                                           │
│  Project Name                                                            │
│  (48px heading, bold)                                                    │
│                                                                           │
│  [React] [Node.js] [PostgreSQL] [Figma]                                 │
│  (Technology tags)                                                       │
│                                                                           │
│                                                                           │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │ Full project description explaining what it is and why it       │   │
│  │ matters. This section provides comprehensive context about      │   │
│  │ the project's purpose and impact...                             │   │
│  │ (18px body text, relaxed leading)                               │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                           │
│                                                                           │
│  The Challenge                                                           │
│  (24px subheading)                                                       │
│  What problem did this solve? Detailed explanation...                   │
│                                                                           │
│  The Solution                                                            │
│  (24px subheading)                                                       │
│  How did you solve it? Technical approach and decisions...              │
│                                                                           │
│  The Results                                                             │
│  (24px subheading)                                                       │
│  What was the impact? Metrics and outcomes...                           │
│                                                                           │
│                                                                           │
│  ┌──────────────────┐  ┌──────────────────┐                            │
│  │  View Live Site  │  │  View on GitHub  │                            │
│  └──────────────────┘  └──────────────────┘                            │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
```

**Modal Specifications:**
- Backdrop: Charcoal with 80% opacity, blur effect
- Modal: White background, 90% viewport width (max 1200px)
- Padding: 64px
- Border-radius: 24px
- Close button: Top-right, 32px, terracotta on hover
- Slide up animation (400ms)
- Scrollable content

### Mobile View (< 768px)

```
┌─────────────────────────────────────┐
│                                     │
│  Selected Work                      │
│  (32px heading)                     │
│                                     │
│  [All] [Apps] [Sites] [Tools]      │
│  (Horizontal scroll filters)       │
│                                     │
│  ┌───────────────────────────────┐ │
│  │                               │ │
│  │   [Project Thumbnail]         │ │
│  │      Full width               │ │
│  │                               │ │
│  │  Project Name                 │ │
│  │  Description...               │ │
│  │  [React] [Node]               │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │   [Project Thumbnail]         │ │
│  │   [Content...]                │ │
│  └───────────────────────────────┘ │
│                                     │
│  [More projects...]                 │
│                                     │
└─────────────────────────────────────┘
```

---

## 6. Contact Section

### Desktop View (1024px+)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│                   Let's build something together                         │
│                       (48px heading, centered)                           │
│                                                                           │
│              Have a project in mind? Just want to chat?                  │
│                     I'd love to hear from you.                           │
│                    (20px subheading, slate, centered)                    │
│                                                                           │
│                                                                           │
│  ┌─────────────────────────────┐  ┌─────────────────────────────┐      │
│  │                             │  │                             │      │
│  │  Your name                  │  │  Or reach out directly:     │      │
│  │  ┌───────────────────────┐  │  │                             │      │
│  │  │                       │  │  │  📧 your@email.com          │      │
│  │  └───────────────────────┘  │  │  (18px, clickable)          │      │
│  │                             │  │                             │      │
│  │  Email address              │  │                             │      │
│  │  ┌───────────────────────┐  │  │  Let's connect:             │      │
│  │  │                       │  │  │                             │      │
│  │  └───────────────────────┘  │  │  [GitHub] [LinkedIn]        │      │
│  │                             │  │  [Twitter]                  │      │
│  │  Tell me about your project │  │  (Social icons, 32px)       │      │
│  │  ┌───────────────────────┐  │  │                             │      │
│  │  │                       │  │  │                             │      │
│  │  │                       │  │  │                             │      │
│  │  │                       │  │  │                             │      │
│  │  │                       │  │  │                             │      │
│  │  └───────────────────────┘  │  │                             │      │
│  │                             │  │                             │      │
│  │  ┌───────────────────────┐  │  │                             │      │
│  │  │   Send message        │  │  │                             │      │
│  │  └───────────────────────┘  │  │                             │      │
│  │                             │  │                             │      │
│  └─────────────────────────────┘  └─────────────────────────────┘      │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: Sand (#E8E3D8)
- Padding: 160px vertical
- Heading: 48px, bold, centered
- Subheading: 20px, slate, centered, max-width 600px
- Two-column layout: 60% form, 40% info
- Form background: Cream (#FAF8F3)
- Form padding: 48px
- Form border-radius: 16px
- Input fields:
  - Height: 56px (text), 160px (textarea)
  - Border: 2px clay, focus: terracotta
  - Border-radius: 8px
  - Padding: 16px
  - Font-size: 16px
  - Margin-bottom: 24px
- Labels: 14px, semibold, 8px margin-bottom
- Submit button: Full width, primary style
- Contact info: 18px, 24px line-height
- Social icons: 32px, terracotta on hover

### Form States

**Default:**
```
┌─────────────────────────────────┐
│ Your name                       │
│ ┌─────────────────────────────┐ │
│ │                             │ │
│ └─────────────────────────────┘ │
```

**Focus:**
```
┌─────────────────────────────────┐
│ Your name                       │
│ ┌─────────────────────────────┐ │
│ │ |                           │ │ ← Terracotta border
│ └─────────────────────────────┘ │
```

**Error:**
```
┌─────────────────────────────────┐
│ Your name                       │
│ ┌─────────────────────────────┐ │
│ │                             │ │ ← Red border
│ └─────────────────────────────┘ │
│ ⚠ This field is required        │
```

**Success (After submission):**
```
┌─────────────────────────────────┐
│                                 │
│          ✨                     │
│                                 │
│  Thanks! I'll get back to       │
│  you soon.                      │
│                                 │
│  (Confetti animation)           │
│                                 │
└─────────────────────────────────┘
```

### Mobile View (< 768px)

```
┌─────────────────────────────────────┐
│                                     │
│  Let's build something together     │
│  (32px heading)                     │
│                                     │
│  Have a project in mind?            │
│  I'd love to hear from you.         │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ Your name                     │ │
│  │ [Input field]                 │ │
│  │                               │ │
│  │ Email address                 │ │
│  │ [Input field]                 │ │
│  │                               │ │
│  │ Tell me about your project    │ │
│  │ [Textarea]                    │ │
│  │                               │ │
│  │ [Send message button]         │ │
│  └───────────────────────────────┘ │
│                                     │
│  Or reach out directly:             │
│  📧 your@email.com                  │
│                                     │
│  [GitHub] [LinkedIn] [Twitter]      │
│                                     │
└─────────────────────────────────────┘
```

---

## 7. Footer

### Desktop View

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│                                                                           │
│                              [CS Logo]                                   │
│                           (32px, centered)                               │
│                                                                           │
│                    Built with ❤️, ☕, and React                          │
│                         (14px, slate, centered)                          │
│                                                                           │
│                  [GitHub]  [LinkedIn]  [Twitter]                         │
│                      (Social icons, 24px)                                │
│                                                                           │
│                      © 2026 Camisa Vines                                 │
│                         (14px, slate)                                    │
│                                                                           │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: Charcoal (#2D3142)
- Text color: Mist (#BFC0C0)
- Padding: 64px vertical
- All content centered
- Social icons: 24px, sage color on hover
- Links: Underline on hover

---

## 🎨 Visual Design Details

### Typography Hierarchy Example

```
Hero Headline (76px, 900 weight)
    ↓
Section Heading (48px, 700 weight)
    ↓
Subsection Heading (32px, 600 weight)
    ↓
Card Title (24px, 600 weight)
    ↓
Body Large (20px, 400 weight)
    ↓
Body Base (16px, 400 weight)
    ↓
Body Small (14px, 400 weight)
```

### Spacing System Visual

```
Section Padding:
│←─── 160px ───→│ Content │←─── 160px ───→│

Element Spacing:
Heading
│←─ 48px ─→│
Subheading
│←─ 32px ─→│
Body text
│←─ 24px ─→│
Next element
```

### Color Usage Guide

```
Primary Actions:     Terracotta (#E07A5F)
Secondary Actions:   Sage (#81B29A)
Highlights:          Ochre (#F2A154)
Backgrounds:         Cream (#FAF8F3), Sand (#E8E3D8)
Text:                Charcoal (#2D3142), Slate (#4F5D75)
Borders/Dividers:    Clay (#D4C5B0)
```

### Shadow Elevation System

```
Level 1 (Cards):     0 4px 6px rgba(45, 49, 66, 0.1)
Level 2 (Hover):     0 10px 15px rgba(45, 49, 66, 0.1)
Level 3 (Modal):     0 20px 25px rgba(45, 49, 66, 0.1)
```

---

## 🎭 Animation & Interaction Notes

### Scroll Animations
- Elements fade in and slide up 60px when entering viewport
- Stagger delay: 100ms between elements
- Duration: 600ms with custom easing

### Hover States
- Cards: Lift 8px, increase shadow
- Buttons: Lift 2px, scale 1.02
- Links: Underline slides in from left
- Images: Scale 1.05x

### Transitions
- Color changes: 250ms
- Transform changes: 300ms
- Shadow changes: 300ms
- All use ease-in-out timing

---

This wireframe document provides a complete visual blueprint for implementing the portfolio website. Each section includes precise measurements, spacing, typography, and interaction details.