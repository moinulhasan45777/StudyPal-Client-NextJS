import FeaturedCourses from "@/components/FeaturedCourses";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";

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
      </main>
    </div>
  );
}
