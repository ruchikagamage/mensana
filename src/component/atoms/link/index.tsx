import React, {FC} from 'react';
import styled, {css} from 'styled-components/native';

const style = css`
  margin-left: 3px;
  margin-right: 3px;
`;

const C = styled.TouchableOpacity`
  ${style};
`;
// letter-spacing: 2;
interface Props {
  onPress?: Function;
}

export const Link: FC<Props> = (props) => {
  const {children, onPress} = props;

  return <C onPress={onPress}>{children}</C>;
};
