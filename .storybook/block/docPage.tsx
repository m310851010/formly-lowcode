import React from 'react';
import { PRIMARY_STORY, ArgsTable, Title, Subtitle, Primary, Description, Stories } from '@storybook/addon-docs';
import { H2 } from '@storybook/components';
import { ImportInfo } from './ImportInfo';

export const page = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <ImportInfo />
    <Primary />
    <H2>参数定义</H2>
    <ArgsTable story={PRIMARY_STORY} />
    <Stories title="所有示例" includePrimary={false} />
  </>
);
