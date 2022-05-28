import React from "react"
import { Meta} from "@storybook/react"
import { Button } from "./Title"

// export default {
//   title: "Components/Title",
//   component: Title,
// } as Meta

// const Template: Story<TitleProps> = (args) => <Title {...args} />

// export const Basic = Template.bind();
// Basic.args = { text: '제목!' }


const meta:Meta = {
    title: 'Button',
    component: Button
}

export default meta;

export const Default = () => <Button variant="primary">CLICK ME</Button>
