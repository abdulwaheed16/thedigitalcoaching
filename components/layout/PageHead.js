import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>
          {headTitle ? headTitle : "TheDigitalCoaching - Learn Remotely"}
        </title>
      </Head>
    </>
  );
};

export default PageHead;
