import ContactPage from "@/components/Contact";
import StudentContactForm from "@/mock/MultistepForm";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact With Us">
        <ContactPage />
      </Layout>
    </>
  );
}
