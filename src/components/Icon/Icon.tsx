import { FunctionComponent, MouseEventHandler } from 'react';
import './Icon.css';

type IconProps = {
  src: string;
  alt: string;
  className: string | null;
  onClick?: MouseEventHandler;
};

const Icon: FunctionComponent<IconProps> = ({
  src,
  alt,
  className,
  onClick,
}) => {
  return onClick ? (
    <img
      src={src}
      alt={`${alt} icon`}
      className={className ? `icon ${className}` : 'icon'}
      role="button"
      onClick={onClick}
    />
  ) : (
    <img
      src={src}
      alt={`${alt} icon`}
      className={className ? `icon ${className}` : 'icon'}
    />
  );
};

export default Icon;
