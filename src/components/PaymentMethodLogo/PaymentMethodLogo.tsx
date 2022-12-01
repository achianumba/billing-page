import { FunctionComponent } from 'react';
import './PaymentMethodLogo.css';

type PaymentMethodLogoProps = {
  src: string;
  alt: string | null;
  className?: string | null;
};

const PaymentMethodLogo: FunctionComponent<PaymentMethodLogoProps> = ({
  src,
  alt,
  className,
}) => {
  return (
    <img
      src={src}
      alt={alt ? `${alt} logo` : 'logo'}
      className={
        className
          ? `payment__method__logo button--bordered ${className}`
          : 'payment__method__logo button--bordered'
      }
    />
  );
};

export default PaymentMethodLogo;
