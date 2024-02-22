import React from 'react';
import Link from 'next/link';

// With the anchor tag, it does a full page refresh. The Link component prevents that and is more performant.
const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcone</h1>
      <a href="properties">Show Properties</a>
      {/* <Link href="properties">Show Properties</Link> */}
    </div>
  );
};

export default HomePage;
