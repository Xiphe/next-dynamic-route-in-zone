import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

export default withRouter(function Dyn({ router: { query } }) {
  return (
    <ul>
      <li>
        <h1>This is buggy</h1>
        <pre>{JSON.stringify({ query })}</pre>
        <Link href="/" as="/zone">
          <a>Back</a>
        </Link>
      </li>
    </ul>
  );
});
