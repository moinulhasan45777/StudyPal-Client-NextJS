import FeaturedCourses from "@/components/FeaturedCourses";
import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "StudyPAL - Your Personal Instructor",
};

export default function Home() {
  return (
    <div className="">
      <header>
        <Header></Header>
      </header>
      <main>
        <section>
          <FeaturedCourses></FeaturedCourses>
        </section>
        <section>
          <Testimonials></Testimonials>
        </section>
        <section>
          <Newsletter></Newsletter>
        </section>
      </main>
    </div>
  );
}
