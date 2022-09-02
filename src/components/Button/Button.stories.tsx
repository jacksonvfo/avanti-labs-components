// Button.stories.ts|tsx

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MdAddCircleOutline } from "react-icons/md";

import Button from "./";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Add = Template.bind({});
export const Default = Template.bind({});
export const Rounded = Template.bind({});

Add.args = {
  borderRadius: "none",
  buttonPadding: "medium",
  children: (
    <>
      <MdAddCircleOutline size={18}/> Add Item
    </>
  ),
  onClick: () => alert("Item added")
};


Default.args = {
  onClick: () => alert("Default Clicked")
};

Rounded.args = {
  borderRadius: "large",
  buttonPadding: "large",
  children: "Rounded button",
  onClick: () => alert("Rounded Clicked")
};