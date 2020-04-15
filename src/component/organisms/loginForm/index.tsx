import React from 'react';
import {TextBlock, Button, HorizontalBreak} from './../../atoms';
import FormInput from './../../molecules/formInput';

interface Props {
  navigation: any;
}

const LoginForm: React.FC<Props> = ({navigation}) => {
  return (
    <>
      <FormInput label="Email Address" error={false} />
      <FormInput label="Password" error={false} />
      <HorizontalBreak size={30} />
      <Button backgroundColor={0} size={7} onPress={(): void => navigation.navigate('Login')} rippleColor="#FF5400">
        <TextBlock size={2.5} weight="700" colorNumber={0} letterSpace={1}>
          LOG IN
        </TextBlock>
      </Button>
    </>
  );
};

export default LoginForm;
