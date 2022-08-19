// Button.stories.ts|tsx

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './';
import styles from './button.module.css'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secundary = Template.bind({});

Primary.args = {
  buttonStyle: 'primary',
  children: 'Primary',
  className: `${styles.vanillaButton} ${styles.primaryButton}`
};

Secundary.args = {
  buttonStyle: 'secundary',
  children: 'Secundary',
  className: `${styles.vanillaButton} ${styles.secundaryButton}`
};