import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

type NavItemProps = {
  to: string;
  textContent: string;
  src: string;
  alt: string;
  className?: string | any;
};

const NavItem: FunctionComponent<NavItemProps> = ({
  to,
  textContent,
  src,
  alt,
  className,
}) => {
  return (
    <NavLink
      to={to}
      className={className ? `nav__link ${className}` : 'nav__link'}
    >
      <Icon src={src} alt={alt} className={className ? className : ''} />
      <Text
        content={textContent}
        className="nav__link__text text--dark-2 text--inline"
      />
    </NavLink>
  );
};

export default NavItem;
