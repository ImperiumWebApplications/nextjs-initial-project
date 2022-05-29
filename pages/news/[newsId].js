import { useRouter } from "next/router";
import { Fragment } from "react";

const DetailPage = () => {
  // Extract the newsID using the usrRouter() hook from the next/router
  const router = useRouter();
  const newsId = router.query.newsId;
  return (
    <Fragment>
      <h1>Detail Page</h1>
      <p>{newsId}</p>
    </Fragment>
  );
};

export default DetailPage;
