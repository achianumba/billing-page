import { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick: MouseEventHandler;
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={className ? `button ${className}` : 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
