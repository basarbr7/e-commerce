import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from './layer/Container';

const Breadcrumb = () => {
  const location = useLocation();
  let pathnames = location.pathname.split('/').filter(x => x);

  // যদি প্রথম দুইটি অংশ 'productdetails' এবং id হয়, তাহলে ঐ দুইটাকে একসাথে ধরে রাখো
  if (pathnames.length > 1 && pathnames[0] === 'productdetails') {
    const combined = pathnames.slice(0, 2).join('/'); // "productdetails/1"
    pathnames = [combined, ...pathnames.slice(2)];
  }

  return (
    <Container>
        <nav className=" text-sm text-gray-600 my-4" aria-label="breadcrumb">
        <ol className="list-reset flex items-center">
            <li>
            <Link to="/" className="text-blue-500 hover:underline">Home</Link>
            </li>
            {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            // display name set করা
            let displayName;
            if (name === "productdetails" || name.startsWith("productdetails/")) {
                displayName = "Product Details";
            } else if (isNaN(name)) {
                displayName = name.charAt(0).toUpperCase() + name.slice(1);
            } else {
                displayName = name; // number হলে যেমন আছে তেমনই রাখবে
            }

            return (
                <li key={index} className="flex items-center">
                <span className="mx-2">{'>'}</span>
                {isLast ? (
                    <span className="text-gray-500 capitalize">{displayName}</span>
                ) : (
                    <Link to={routeTo} className="text-blue-500 hover:underline capitalize">
                    {displayName}
                    </Link>
                )}
                </li>
            );
            })}
        </ol>
        </nav>
    </Container>
  );
};

export default Breadcrumb;
