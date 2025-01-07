import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import Banner1 from "@/components/sections/Banner1";
import Blog1 from "@/components/sections/Blog1";
import Brand1 from "@/components/sections/Brand1";
import Categories1 from "@/components/sections/Categories1";
import Course1 from "@/components/sections/Course1";
import Cta1 from "@/components/sections/Cta1";
import StudentOffer from "@/components/sections/Cta2";
import BecomeInstructor from "@/components/sections/Cta3";
import Instructor1 from "@/components/sections/Instructor1";
import Mentors1 from "@/components/sections/Mentors1";
import Newsletter1 from "@/components/sections/Newsletter1";
import Online1 from "@/components/sections/Online1";
import QuickAction1 from "@/components/sections/QuickAction1";
import Testimonial1 from "@/components/sections/Testimonial1";
import Testimonial2 from "@/components/sections/Testimonial2";

export default function Home1() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner1 />
        <QuickAction1 />
        {/* <Brand1 /> */}
        <About1 />
        {/* <Course1 /> */}
        <Categories1 />
        <Online1 />
        <StudentOffer />
        {/* <Testimonial1 /> */}
        <Mentors1 />
        <Cta1 />
        {/* <Instructor1 /> */}
        <Testimonial2 />
        {/* <BecomeInstructor /> */}

        {/* <Blog1 /> */}
        <Newsletter1 />
      </Layout>
    </>
  );
}
