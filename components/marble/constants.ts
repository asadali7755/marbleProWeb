export const PHONE_DISPLAY = "054 556 77 99";
export const PHONE_TEL = "+971545567799";
export const EMAIL = "marbleprodxb@gmail.com";
export const WA_LINK = `https://wa.me/${PHONE_TEL.replace("+", "")}`;

export interface Emirate {
  slug: string;
  name: string;
  tagline: string;
  ar: string;
}

export const EMIRATES: Emirate[] = [
  { slug: "dubai",          name: "Dubai",          tagline: "Marble Polishing Dubai",      ar: "دبي" },
  { slug: "abu-dhabi",      name: "Abu Dhabi",      tagline: "Capital-grade stone care",    ar: "أبوظبي" },
  { slug: "sharjah",        name: "Sharjah",        tagline: "Heritage marble experts",     ar: "الشارقة" },
  { slug: "ajman",          name: "Ajman",          tagline: "Coastal villas & retail",     ar: "عجمان" },
  { slug: "ras-al-khaimah", name: "Ras Al Khaimah", tagline: "Mountain-villa restoration",  ar: "رأس الخيمة" },
  { slug: "umm-al-quwain",  name: "Umm Al Quwain",  tagline: "Lagoon-side service",         ar: "أم القيوين" },
  { slug: "fujairah",       name: "Fujairah",       tagline: "East-coast marble polishing", ar: "الفجيرة" },
];

export const CITY_IMG: Record<string, string> = {
  "dubai":           "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=70",
  "abu-dhabi":       "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1400&q=70",
  "sharjah":         "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=70",
  "ajman":           "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=70",
  "ras-al-khaimah":  "https://images.unsplash.com/photo-1542317854-86dabacde36b?auto=format&fit=crop&w=1400&q=70",
  "umm-al-quwain":   "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1400&q=70",
  "fujairah":        "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1400&q=70",
};

export const CITY_GRAD: Record<string, string> = {
  "dubai":           "linear-gradient(135deg, #1c2c4b 0%, #3a4a6b 50%, #5b6c8e 100%)",
  "abu-dhabi":       "linear-gradient(135deg, #2d2a3a 0%, #4a4658 50%, #6e6779 100%)",
  "sharjah":         "linear-gradient(135deg, #4a2c1c 0%, #6b4a3a 50%, #8e6c5b 100%)",
  "ajman":           "linear-gradient(135deg, #1c4b4a 0%, #3a6b6a 50%, #5b8e8c 100%)",
  "ras-al-khaimah":  "linear-gradient(135deg, #4b3a1c 0%, #6b553a 50%, #8e745b 100%)",
  "umm-al-quwain":   "linear-gradient(135deg, #1c3a4b 0%, #3a556b 50%, #5b768e 100%)",
  "fujairah":        "linear-gradient(135deg, #3a1c1c 0%, #553a3a 50%, #745b5b 100%)",
};

export interface Service {
  num: string;
  slug: string;
  name: string;
  short: string;
}

export const SERVICES: Service[] = [
  { num: "01", slug: "marble-polishing-dubai",      name: "Marble Polishing",          short: "Diamond polishing for honed, etched & dull marble — restores deep gloss." },
  { num: "02", slug: "marble-floor-restoration",    name: "Floor Restoration",         short: "Lippage removal, crack & chip repair, full grind-down & re-polish." },
  { num: "03", slug: "marble-countertop-polishing", name: "Countertop Polishing",      short: "Kitchen & bathroom marble, granite & quartz countertops." },
  { num: "04", slug: "terrazzo-polishing-dubai",    name: "Terrazzo Polishing",        short: "Vintage terrazzo restored to mirror finish using diamond pads." },
  { num: "05", slug: "granite-polishing",           name: "Granite Polishing",         short: "Slip-safe granite gloss for villas, hotels & retail floors." },
  { num: "06", slug: "quartz-polishing",            name: "Quartz Polishing",          short: "Engineered quartz buff & sealant — no etching, food-safe finishes." },
  { num: "07", slug: "corian-countertop-polishing", name: "Corian Countertop Care",    short: "Hand-polished Corian seam repair, scratch removal & matte/gloss buff." },
  { num: "08", slug: "yellow-stain-removing",       name: "Yellow Stain Removing",     short: "Deep-set yellowing, rust, watermarks & efflorescence — chemically lifted." },
  { num: "09", slug: "kitchen-top-polishing",       name: "Kitchen Top Polishing",     short: "Sealing & polishing for daily-use kitchen surfaces. Oil-resistant." },
  { num: "10", slug: "crystallization-sealing",     name: "Crystallization & Sealing", short: "Permanent shine via crystallizers — extends life of the stone." },
];
