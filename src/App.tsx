import { useRef } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import NavItem from './components/NavItem/NavItem';
import Text from './components/Text/Text';
import userAvatar from './images/user-avatar.png';
import generalIcon from './images/icon-general.svg';
import passwordIcon from './images/icon-password.svg';
import invitationIcon from './images/icon-invitations.svg';
import billingIcon from './images/icon-billing.svg';
import appsIcon from './images/icon-apps.svg';
import logoutIcon from './images/icon-logout.svg';
import TableHeading from './components/TableHeading/TableHeading';
import Icon from './components/Icon/Icon';
import menuIcon from './images/icon-menu.svg';
// import closeIcon from './images/icon-close.svg';
import TableRow from './components/TableRow/TableRow';
import PaymentMethod from './components/PaymentMethod/PaymentMethod';
import visaLogo from './images/logo-visa.svg';
import Button from './components/Button/Button';

function App() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);

  const toggleNavbar = (): void => {
    sidebarRef.current?.classList.toggle('sidebar__full__height');
    navbarRef.current?.classList.toggle('show__navbar');
    sidebarRef.current?.parentElement?.parentElement?.classList.toggle(
      'disable-vertical-scroll'
    );
  };

  const removePaymentMethod = (): void => {
    // handle payment method removal
  };

  const loadMoreHistory = (): void => {
    // load more history from database
  };

  return (
    <BrowserRouter>
      <div className="sidebar" ref={sidebarRef}>
        <div className="sidebar__header">
          <Link to="#" className="user__info__link">
            {''}
            <img src={userAvatar} alt="user avatar" className="user__avatar" />
            <div className="user__info">
              <Text
                content="Jane Doe"
                className="user__name text--dark-1 bold"
              />
              <Text content="@janedoe" className="text--dark-2 user__handle" />
            </div>
          </Link>

          <Icon
            src={menuIcon}
            alt="menu"
            className="menu__button"
            onClick={toggleNavbar}
          />
        </div>

        <nav className="navbar" ref={navbarRef}>
          <NavItem
            to="/general"
            src={generalIcon}
            textContent="General"
            alt="general"
          />

          <NavItem
            to="/password"
            src={passwordIcon}
            textContent="Password"
            alt="password"
          />

          <NavItem
            to="/invitations"
            src={invitationIcon}
            textContent="Invitations"
            alt="invitations"
          />

          <NavItem
            to="/billing"
            src={billingIcon}
            textContent="Billing"
            alt="billing"
          />

          <NavItem to="/apps" src={appsIcon} textContent="Apps" alt="apps" />

          <NavItem
            to="/"
            src={logoutIcon}
            textContent="Log out"
            alt="logout"
            className="logout"
          />
        </nav>
      </div>

      <main className="main__section">
        <div className="billing__information">
          <h1 className="text-dark-1 billing__heading">Billing</h1>

          <div className="order__history__section">
            <Text
              content="Order History"
              className="text-2 bold text--dark-1 order__history__heading"
            />

            <Text
              content="Manage billing information and view receipts."
              className="text-1 text--dark-2 order__history__description"
            />

            <div className="order__history__table__container">
              <table className="order__history__table">
                <thead className="order__history__table__heading">
                  <tr className="order__history__table__header">
                    <TableHeading data="Date" />
                    <TableHeading data="Type" />
                    <TableHeading data="Receipt" />
                  </tr>
                </thead>
                <tbody>
                  <TableRow
                    orderDate="Oct 21, 2021"
                    orderType="Pro Annual"
                    receiptUrl="./data/order-information.pdf"
                    receiptFilename="order-information.pdf"
                  />

                  <TableRow
                    orderDate="Aug 21, 2021"
                    orderType="Pro Portfolio"
                    receiptUrl="./data/order-information.pdf"
                    receiptFilename="order-information.pdf"
                  />

                  <TableRow
                    orderDate="July 21, 2021"
                    orderType="Sponsored Post"
                    receiptUrl="./data/order-information.pdf"
                    receiptFilename="order-information.pdf"
                  />

                  <TableRow
                    orderDate="Jun 21, 2021"
                    orderType="Pro Sponsored Post"
                    receiptUrl="./data/order-information.pdf"
                    receiptFilename="order-information.pdf"
                  />
                </tbody>
              </table>
            </div>

            <Button onClick={loadMoreHistory} className="history__load-more">
              Load more
            </Button>
          </div>

          <div className="payment__method__section">
            <Text
              content="Payment Method"
              className="text-2 bold text--dark-1 payment__method__heading"
            />

            <Text
              content="Manage billing information and view receipts"
              className="text text--dark-2 payment__method__description"
            />

            <div className="payment__methods">
              <PaymentMethod
                logoSrc={visaLogo}
                type="Visa"
                endingIn={2255}
                removePaymentMethod={removePaymentMethod}
              />
            </div>
          </div>
        </div>

        <div className="payment__plan">
          <Text
            content="Your plan"
            className="text-2 text--white payment__plan__description"
          />

          <Text
            content="Pro Annual"
            className="text--white bold payment__plan__name"
          />

          <Text
            content="Renews on Nov 2, 2021"
            className="text-1 text--white payment__plan__renews__on"
          />

          <Link
            to="/cancel_subscription"
            className="text-2 text--white cancel__sub"
          >
            Cancel Subscription
          </Link>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
