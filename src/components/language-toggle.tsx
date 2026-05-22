"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, locales } from "@/lib/i18n";

type LanguageToggleProps = {
  currentLocale: Locale;
  labels: {
    title: string;
    locales: Record<Locale, string>;
  };
};

function swapLocale(pathname: string, targetLocale: Locale) {
  const segments = pathname.split("/");

  if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
    segments[1] = targetLocale;
    return segments.join("/") || `/${targetLocale}`;
  }

  return `/${targetLocale}`;
}

export function LanguageToggle({
  currentLocale,
  labels,
}: LanguageToggleProps) {
  const pathname = usePathname();

  return (
    <div
      className="inline-flex items-center rounded-full border border-white/80 bg-white/72 p-1"
      aria-label={labels.title}
      role="group"
    >
      {locales.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={swapLocale(pathname, locale)}
            onClick={() => {
              document.cookie = `hlchs-locale=${locale}; path=/; max-age=31536000; SameSite=Lax`;
            }}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              isActive
                ? "bg-brand text-white shadow-soft"
                : "text-brand hover:bg-white"
            }`}
            locale={false}
            aria-current={isActive ? "true" : undefined}
          >
            {labels.locales[locale]}
          </Link>
        );
      })}
    </div>
  );
}
