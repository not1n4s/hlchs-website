import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-screen items-center justify-center px-4">
      <div className="surface-panel max-w-xl rounded-[32px] px-8 py-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
          404
        </p>
        <h1 className="display-text mt-3 text-3xl font-semibold">
          This page could not be found.
        </h1>
        <p className="text-muted mt-4 text-base leading-7">
          The page may have moved, or the language path may be incorrect.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/en"
            className="bg-brand inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-semibold text-white"
          >
            English Home
          </Link>
          <Link
            href="/hi"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(15,107,99,0.18)] bg-white/70 px-5 text-sm font-semibold text-brand"
          >
            हिंदी होम
          </Link>
        </div>
      </div>
    </main>
  );
}
