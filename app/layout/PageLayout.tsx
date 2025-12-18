export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full md:max-w-[500px] mx-auto px-4 py-12">
      <article>
        {children}
      </article>
      <footer className="mt-12 pt-8 text-center text-sm text-zinc-500 dark:text-zinc-500">
        © 2025 @Raymond Chan
      </footer>
    </main>
  );
}

