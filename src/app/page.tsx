import Link from "next/link";

export default function RootPage() {
  return (
    <main className="page-shell flex min-h-screen items-center justify-center px-4 py-12 sm:px-6">
      <div className="surface-panel w-full max-w-2xl rounded-[34px] px-6 py-8 text-center sm:px-10 sm:py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
          HLCHS
        </p>
        <h1 className="display-text mt-4 text-4xl font-semibold sm:text-5xl">
          Choose your language
        </h1>
        <p className="text-muted mt-4 text-base leading-8 sm:text-lg">
          Continue to the HLCHS website in the language that feels most
          comfortable for you.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            href="/en"
            className="bg-brand inline-flex min-h-14 items-center justify-center rounded-full px-6 text-base font-semibold text-white shadow-soft hover:-translate-y-0.5"
          >
            English
          </Link>
          <Link
            href="/hi"
            className="inline-flex min-h-14 items-center justify-center rounded-full border border-[rgba(15,107,99,0.18)] bg-white/72 px-6 text-base font-semibold text-brand hover:-translate-y-0.5"
          >
            हिंदी
          </Link>
        </div>
      </div>
    </main>
  );
}
