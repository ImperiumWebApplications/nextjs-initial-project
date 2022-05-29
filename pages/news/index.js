// The page will be served for the url /news

import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>Detail Page</h1>
      <ul>
        <li>
          <Link href={"/news/nextjs-is-a-great-framework"}>
            Next JS is a great framework
          </Link>
        </li>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
