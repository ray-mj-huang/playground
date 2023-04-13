import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Menu from './Menu';
import CubicMobile from './components/CubicMobile';
import { Dashboard } from './components/Dashboard';
import StarRating from './components/xxx/StarRating';



const containerStyle = {
  position: 'absolute',
  right: 0,
  width: 'calc(100% - 230px)'
}

function PageTemplate({ children }) {
  return (
    <>
      <Menu />
      <div style={containerStyle}>
        {children}
      </div>
    </>
  )
}

export function Home() {
  return (
    <PageTemplate>
      <div>
        <h1>[Home]</h1>
      </div>
    </PageTemplate>
  );
}

export function About() {
  return (
    <PageTemplate>
      <div>
        <h1>[About]</h1>
        <Outlet />
      </div>
    </PageTemplate>
  );
}

export function Events() {
  return (
    <PageTemplate>
      <div>
        <h1>[Events]</h1>
      </div>
    </PageTemplate>
  );
}

export function Products() {
  return (
    <PageTemplate>
      <div>
        <h1>[Products]</h1>
      </div>
    </PageTemplate>
  );
}

export function Contact() {
  return (
    <PageTemplate>
      <div>
        <h1>[Contact]</h1>
      </div>
    </PageTemplate>
  );
}

export function Whoops404() {
  let location = useLocation();
  return (
    <PageTemplate>
      <div>
        <h1>Resource not found at {location.pathname}</h1>
      </div>
    </PageTemplate>
  );
}

export function History() {
  return (
    <section>
      <div>
        <h1>History Page</h1>
        <p>asadoj oijoi ioejowij oiej oijew oijew oije oeij oiej owiej oewij oewij oewi joewij</p>
      </div>
    </section>
  );
}

export function CubicMobilePage() {
  return (
    <PageTemplate>
      <CubicMobile />
    </PageTemplate>
  );
}

export function DashboardPage() {
  return (
    <Dashboard />
  );
}

export function StarRatingPage() {
  return (
    <PageTemplate>
      <StarRating />
    </PageTemplate>
  );
}