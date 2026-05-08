export interface IdentityFont {
  id: string;
  display: string;
  body: string;
  mono: string;
  google_fonts_url: string;
  stack_display: string;
  stack_body: string;
  stack_mono: string;
}

export interface IdentityPalette {
  id: string;
  hue: number;
  neutral_family: string;
  accent: string;
  accent_dark: string;
  surface: string;
  surface_alt: string;
  fg: string;
  fg_muted: string;
  border: string;
  surface_dark: string;
  surface_alt_dark: string;
  fg_dark: string;
  fg_muted_dark: string;
  border_dark: string;
}

export interface IdentityLayout {
  id: "magazine" | "dashboard" | "feed" | "directory" | "longform" | "kiosk";
  component: string;
  component_path: string;
  density: "loose" | "normal" | "dense";
  brief: string;
}

export interface IdentityVoice {
  id: string;
  label_latest: string;
  label_recent: string;
  label_featured: string;
  label_more: string;
  nav_posts: string;
  nav_about: string;
  cta_subscribe: string;
  cta_subscribe_desc: string;
  cta_button: string;
  site_motto: string;
}

export interface Identity {
  font: IdentityFont;
  palette: IdentityPalette;
  layout: IdentityLayout;
  voice: IdentityVoice;
}

export const identity: Identity = {
  "font": {
    "id": "f01_serif_editorial_classic",
    "display": "Source Serif 4",
    "body": "Source Sans 3",
    "mono": "JetBrains Mono",
    "google_fonts_url": "https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600;700;900&family=Source+Sans+3:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
    "stack_display": "\"Source Serif 4\", \"Iowan Old Style\", Georgia, serif",
    "stack_body": "\"Source Sans 3\", \"Helvetica Neue\", system-ui, sans-serif",
    "stack_mono": "\"JetBrains Mono\", ui-monospace, SFMono-Regular, Menlo, monospace"
  },
  "palette": {
    "id": "p08_h23_slate",
    "hue": 23,
    "neutral_family": "slate",
    "accent": "219 106 36",
    "accent_dark": "238 140 79",
    "surface": "255 255 255",
    "surface_alt": "248 250 252",
    "fg": "15 23 42",
    "fg_muted": "71 85 105",
    "border": "226 232 240",
    "surface_dark": "15 23 42",
    "surface_alt_dark": "30 41 59",
    "fg_dark": "248 250 252",
    "fg_muted_dark": "148 163 184",
    "border_dark": "51 65 85"
  },
  "layout": {
    "id": "feed",
    "component": "HomeNewspaper",
    "component_path": "@components/clusters/HomeNewspaper.astro",
    "density": "dense",
    "brief": "Newspaper-style feed: dense single-column with sidebar digest."
  },
  "voice": {
    "id": "v07_telemetry",
    "label_latest": "Latest signal",
    "label_recent": "Trace",
    "label_featured": "Anomaly",
    "label_more": "Open trace",
    "nav_posts": "Signals",
    "nav_about": "Stack",
    "cta_subscribe": "Telemetry",
    "cta_subscribe_desc": "New signals delivered when they fire.",
    "cta_button": "Tap in",
    "site_motto": "Live telemetry from the AI/ML stack."
  }
} as const;
