import Breadcrumb from "@/components/layout/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Pricing from "@/components/Pricing";
import React from "react";

const pricing = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Pricing ">
        <section className="section-py-120">
          <Pricing />;
        </section>
      </Layout>
    </>
  );
};

export default pricing;
