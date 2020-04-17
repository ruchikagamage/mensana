import React from 'react';
import {TextBlock, Link} from '../../atoms';

const TermsAndPolicy = () => {
  return (
    <>
      <TextBlock size={1.8} weight="400" colorNumber={1} letterSpace={0}>
        Greg’s
      </TextBlock>
      <Link>
        <TextBlock size={1.8} weight="400" colorNumber={2} letterSpace={0}>
          Privacy Policy
        </TextBlock>
      </Link>
      <TextBlock size={1.8} weight="400" colorNumber={1} letterSpace={0}>
        and
      </TextBlock>
      <Link>
        <TextBlock size={1.8} weight="400" colorNumber={2} letterSpace={0}>
          Terms
        </TextBlock>
      </Link>
    </>
  );
};

export default TermsAndPolicy;
