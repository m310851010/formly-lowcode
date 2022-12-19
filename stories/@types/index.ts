declare module '*.mdx' {
  const mdxMeta: {
    parameters: {
      docs: {
        page: () => any;
      };
    };
    [key: string]: any;
  };
  export default mdxMeta;
}
