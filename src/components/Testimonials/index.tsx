import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import TestimonialDecorations from "./TestimonialDecorations";
import { testimonialData } from "./testimonialData";

const Testimonials = () => {
  return (
    <section id="testimonials" className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Clients Say"
          paragraph="Hear from businesses across Malaysia who trust Lumicade Solutions to deliver their technology projects."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <TestimonialDecorations />
    </section>
  );
};

export default Testimonials;
