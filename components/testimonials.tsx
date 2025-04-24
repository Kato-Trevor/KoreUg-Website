import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Kore has been a lifeline for our family. The support and resources they provide have made a tremendous difference in our journey with spina bifida.",
      author: "Sarah M.",
      role: "Parent",
    },
    {
      quote:
        "The community workshops organized by Kore have helped reduce stigma in our village. People are now more understanding and supportive.",
      author: "John K.",
      role: "Community Leader",
    },
    {
      quote:
        "Working with Kore has enhanced our ability to provide better care for spina bifida patients. Their approach to healthcare access is truly innovative.",
      author: "Dr. Emily L.",
      role: "Healthcare Provider",
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center mx-auto">Testimonials</h2>
        <p className="section-subtitle text-center mx-auto">Hear from the communities we serve</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md relative">
              <Quote className="absolute top-4 right-4 h-10 w-10 text-primary/20" />
              <p className="text-lg italic mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
