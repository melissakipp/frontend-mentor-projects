import { allDocs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import MDXContent from '@/app/components/MDXContent';

interface DocPageProps {
  params: {
    slug: string;
  };
}

export default function DocPage({ params }: DocPageProps) {
  const slug = params.slug;
  const doc = allDocs.find((doc) => doc.slug === slug);

  if (!doc) notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{doc.title}</h1>
      {doc.description && <p className="text-neutral-600 mb-6">{doc.description}</p>}
      <MDXContent code={doc.body.code} />
    </main>
  );
}

export async function generateStaticParams() {
  return allDocs.map((doc) => ({
    slug: doc.slug,
  }));
}
