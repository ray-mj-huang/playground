import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Products() {
  return (
    <div>
      <h1>[Products]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
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


