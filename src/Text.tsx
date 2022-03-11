import { VFC, ReactNode, HTMLAttributes } from "react";
import styled, { CSSProperties } from "styled-components";

type Props = {
  color: string;
  fontSize: string;
  children: ReactNode;
};

const Ccomp = styled.p<Props>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;

export const Text: VFC<Props> = (props) => {
  const { color, fontSize, children } = props;
  return (
    <Ccomp color={color} fontSize={fontSize}>
      {children}
    </Ccomp>
  );
};
