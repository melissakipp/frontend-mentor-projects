import { defineDocumentType, makeSource } from 'contentlayer/source-files';

interface DocRaw {
  _raw: {
    flattenedPath: string;
  };
}

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    order: { type: 'number', required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc: DocRaw) =>
        doc._raw.flattenedPath.replace(/\.mdx$/, ''),
    },
  },
}));

export default makeSource({
  contentDirPath: 'docs',
  documentTypes: [Doc],
});