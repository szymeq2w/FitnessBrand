export type PlanTier = {
  slug: "basic" | "standard" | "premium";
  tier: string;
  price: string;
  period: string;
  tagline: string;
  forWho: string;
  features: string[];
  highlight: boolean;
};

export const PLANS: PlanTier[] = [
  {
    slug: "basic",
    tier: "Basic",
    price: "[149]",
    period: "zł / okres",
    tagline: "Plan samodzielny, bez bieżącego kontaktu ze mną.",
    forWho: "Dla osób, które chcą sprawdzonego planu i same wiedzą, jak z nim pracować.",
    features: [
      "Gotowy plan treningowy (szablon dopasowany do celu)",
      "Podział na dni/cykle (np. Push/Pull/Legs)",
      "Dostęp do pełnej bazy ćwiczeń",
      "Bez korekt i kontaktu w trakcie",
    ],
    highlight: false,
  },
  {
    slug: "standard",
    tier: "Standard",
    price: "[349]",
    period: "zł / okres",
    tagline: "Spersonalizowany plan + comiesięczna korekta.",
    forWho: "Dla osób, które chcą planu uszytego pod siebie i regularnej opieki.",
    features: [
      "Plan treningowy ułożony indywidualnie przez trenera",
      "Korekta planu raz w miesiącu",
      "Szkielet diety (kalorie/makro) + biblioteka przepisów",
      "Śledzenie progresu siłowego, wagi i obwodów",
    ],
    highlight: true,
  },
  {
    slug: "premium",
    tier: "Premium",
    price: "[599]",
    period: "zł / okres",
    tagline: "Pełny coaching 1:1 z cotygodniowym wsparciem.",
    forWho: "Dla osób, które chcą maksymalnego zaangażowania trenera na bieżąco.",
    features: [
      "Wszystko z planu Standard",
      "Cotygodniowe sprawdzanie progresu",
      "Bieżące komentowanie Twoich logów i wpisów",
      "Priorytetowy kontakt ze mną",
    ],
    highlight: false,
  },
];

export type ComparisonRow = {
  label: string;
  basic: string | boolean;
  standard: string | boolean;
  premium: string | boolean;
};

export const COMPARISON: ComparisonRow[] = [
  {
    label: "Plan treningowy",
    basic: "Szablon",
    standard: "Indywidualny",
    premium: "Indywidualny",
  },
  {
    label: "Podział na dni/cykle",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    label: "Dostęp do bazy ćwiczeń",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    label: "Korekta planu",
    basic: "—",
    standard: "raz w miesiącu",
    premium: "co tydzień",
  },
  {
    label: "Szkielet diety + biblioteka przepisów",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    label: "Śledzenie progresu (waga, obwody, siła)",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    label: "Komentowanie logów przez trenera",
    basic: false,
    standard: false,
    premium: true,
  },
  {
    label: "Kontakt z trenerem",
    basic: "—",
    standard: "miesięczny",
    premium: "priorytetowy",
  },
];
