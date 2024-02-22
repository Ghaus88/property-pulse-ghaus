import React from 'react';
import '@/assets/styles/globals.css';

//Any file declared in the app folder, a page is essentially a React Component rendered on the server.
// We can add such metadata for better SEO.
// We can add such metadata on different pages.

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals,find properties',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
