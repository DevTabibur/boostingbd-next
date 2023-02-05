import React from "react";
import { Container, Row } from "reactstrap";
import CommonLayout from "../../containers/common/common-layout";
import DetailSecion from "../../containers/blog/card/detail-wrapper";
import { useRouter } from "next/router";

const DetailNoSidebar = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log('slug', slug)
  return (
    <>
      <CommonLayout
        pathList={slug}
        pathTitle={slug}
      >
        <section className="agency blog-sec blog-sidebar single_blog_item">
          <Container>
            <Row>
              <DetailSecion slug={slug} className="col-12" />
            </Row>
          </Container>
        </section>
      </CommonLayout>
    </>
  );
};

export default DetailNoSidebar;
