import React, { ReactNode } from "react";
import { HTMLAttributes } from "react";
import {BtnWrap} from '../styled-components/Button';

// export interface TitleProps {
//   text?: string
// }

// function Title({ text }: TitleProps) {
//   return <div>{ text }</div>
// }

// export default Title;



interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;

    variant: 'primary' | 'secondary';
}

export const Button = ({children, ...props}: Props) => {
    return (
        <BtnWrap {...props}>
            {children}
        </BtnWrap>
    )
}