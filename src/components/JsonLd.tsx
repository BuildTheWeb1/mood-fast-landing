export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Mood Fast",
    operatingSystem: "iOS",
    applicationCategory: "HealthApplication",
    description:
      "Track your mood in just 2 seconds, discover emotional patterns, and get personalized wellness activities. Free iOS app for mental health and emotional wellness.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "100",
    },
    featureList: [
      "Quick 2-second mood check-ins",
      "Visual mood trends & insights",
      "Personalized wellness activities",
      "AI-powered mood insights",
      "Daily gratitude journaling",
      "Progress tracking & achievements",
    ],
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mood Fast",
    url: "https://moodfast.pro",
    logo: "https://moodfast.pro/images/mood-fast_logo.png",
    sameAs: ["https://x.com/buildtheweb1"],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mood Fast",
    url: "https://moodfast.pro",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
        suppressHydrationWarning
      />
    </>
  );
}
