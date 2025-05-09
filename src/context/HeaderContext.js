// src/context/HeaderContext.js
import React, { createContext, lazy, Suspense } from 'react';

// Lazy loading του ProfileHeader
const ProfileHeader = lazy(() => import('../components/ProfileHeader'));

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  return (
    <HeaderContext.Provider
      value={
        <Suspense fallback={<div>Loading ProfileHeader...</div>}>
          <ProfileHeader />
        </Suspense>
      }
    >
      {children}
    </HeaderContext.Provider>
  );
};