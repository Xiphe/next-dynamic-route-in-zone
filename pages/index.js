import React from 'react';
import Link from 'next/link';

export default function Index() {
  return (
    <ul>
      <li>
        <Link href="foo" as="/zone/foo">
          <a>This works</a>
        </Link>
      </li>
      <li>
        <Link href="bar/$dyn" as="/zone/bar/baz">
          <a>This throws</a>
        </Link>
      </li>
    </ul>
  );
}
