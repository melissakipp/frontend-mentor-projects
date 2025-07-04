'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';

interface MDXContentProps {
  code: string;
}

export default function MDXContent({ code }: MDXContentProps) {
  const MDX = useMDXComponent(code);
  return <MDX />;
}