import { FunctionComponent, MouseEventHandler } from 'react';
import './PaymentMethod.css';
import PaymentMethodLogo from '../PaymentMethodLogo/PaymentMethodLogo';
import Text from '../Text/Text';
import Button from '../Button/Button';

type PaymentMethodProps = {
  logoSrc: string;
  type: string;
  endingIn: number;
  className?: string | null;
  removePaymentMethod: MouseEventHandler;
};

const PaymentMethod: FunctionComponent<PaymentMethodProps> = ({
  logoSrc,
  type,
  endingIn,
  className,
  removePaymentMethod,
}) => {
  return (
    <div
      className={className ? `payment__method ${className}` : 'payment__method'}
    >
      <PaymentMethodLogo src={logoSrc} alt={type} />

      <Text
        content={`${type} ending in ${endingIn}`}
        className="text--dark-1 payment__method__number"
      />

      <Button
        onClick={removePaymentMethod}
        className="bordered text--dark-1 button--bordered payment__method__remove"
      >
        Remove
      </Button>
    </div>
  );
};

export default PaymentMethod;
