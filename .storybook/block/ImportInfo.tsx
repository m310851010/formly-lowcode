import React, { useContext } from 'react';
import { DocsContext } from '@storybook/addon-docs';
import { SyntaxHighlighter } from '@storybook/components';

export const ImportInfo = () => {
  const context = useContext(DocsContext);
  console.log(context);
  // @ts-ignore
  const componentName = context.component?.name;
  if (!componentName) {
    return null;
  }
  const moduleName = componentName.replace(/(Component|Directive|Service|Pipe)$/, 'Module');
  const importName = componentName
    .replace(/(^Nzx)|((Component|Directive|Service|Pipe)$)/g, '')
    .replace(/\w([A-Z])/g, '-$1')
    .toLowerCase();
  const importStatement = `import { ${moduleName} } from '@xmagic/nzx-antd/${importName}';`;
  return (
    <SyntaxHighlighter copyable bordered language="ts">
      {importStatement}
    </SyntaxHighlighter>
  );
};
