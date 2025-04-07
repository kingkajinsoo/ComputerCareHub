import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Reviews from '../pages/Reviews';
import WriteReview from '../pages/WriteReview';
import Contact from '../pages/Contact';
import Location from '../pages/Location';
import Warranty from '../pages/Warranty';
import Social from '../pages/Social';

export const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/write-review" element={<WriteReview />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/location" element={<Location />} />
      <Route path="/warranty" element={<Warranty />} />
      <Route path="/social" element={<Social />} />
    </RouterRoutes>
  );
};