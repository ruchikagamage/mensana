import React, {FC} from 'react';
import styled, {css} from 'styled-components/native';

const applyHeight = ({size = 1}): string => size + 'px';

const style = css`
  height: ${applyHeight};
`;

const C = styled.View`
  ${style};
`;
interface Props {
  size?: number;
}

const HorizontalBreak: FC<Props> = (props) => {
  const {children, size} = props;

  return <C size={size}>{children}</C>;
};

HorizontalBreak.defaultProps = {
  size: 1,
};

export {HorizontalBreak};
