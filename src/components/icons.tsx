export type IconName =
  | "exchange" | "gift" | "plane" | "wallet" | "signal" | "tv"
  | "shield" | "globe" | "sparkle" | "cursor" | "check" | "clock"
  | "sun" | "moon" | "phone" | "mail" | "location";

const paths: Record<IconName, React.ReactNode> = {
  exchange: <><path d="M7 7h11m0 0-3-3m3 3-3 3M17 17H6m0 0 3 3m-3-3 3-3" /></>,
  gift: <><path d="M4 10h16v10H4zM3 7h18v3H3zM12 7v13M12 7H8.5A2.5 2.5 0 1 1 11 4.5ZM12 7h3.5A2.5 2.5 0 1 0 13 4.5Z" /></>,
  plane: <><path d="m3 11 18-7-7 18-3-8-8-3Z" /><path d="m11 14 4-4" /></>,
  wallet: <><path d="M4 6.5h14a2 2 0 0 1 2 2V18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12" /><path d="M16 11h5v4h-5a2 2 0 1 1 0-4Z" /></>,
  signal: <><path d="M5 20v-3M10 20v-7M15 20V9M20 20V4" /></>,
  tv: <><rect x="3" y="5" width="18" height="13" rx="2" /><path d="m9 22 3-4 3 4M8 11h.01M12 11h4" /></>,
  shield: <><path d="M12 3 5 6v5c0 4.5 2.7 8.1 7 10 4.3-1.9 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" /></>,
  sparkle: <><path d="m12 3 1.4 4.1L17 9l-3.6 1.9L12 15l-1.4-4.1L7 9l3.6-1.9L12 3Z" /><path d="m18.5 15 .7 2.1L21 18l-1.8.9-.7 2.1-.7-2.1L16 18l1.8-.9.7-2.1Z" /></>,
  cursor: <><path d="m5 3 14 9-6 1-3 6-5-16Z" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" /></>,
  moon: <><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" /></>,
  phone: <><path d="M8.4 3.5 10.2 8 7.8 9.5a15.8 15.8 0 0 0 6.7 6.7l1.5-2.4 4.5 1.8v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3.4 5.7a2 2 0 0 1 2-2.2Z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
};

export function Icon({ name }: { name: IconName }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export function ArrowUpRight() {
  return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" /></svg>;
}
