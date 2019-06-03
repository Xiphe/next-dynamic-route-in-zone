import React from 'react';
import Link from 'next/link';

export default function Foo() {
  return (
    <ul>
      <li>
        <h1>This worked...</h1>
        <Link href="/" as="/zone">
          <a>Back</a>
        </Link>
      </li>
    </ul>
  );
}
