export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full md:max-w-[500px] mx-auto px-4 py-12">
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        {children}
      </article>
    </main>
  );
}

