import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Programs() {
  const programs = [
    {
      title: "Community Education",
      description:
        "Workshops and training sessions for communities to understand spina bifida and support affected individuals.",
      image: "/diverse-learning-together.png",
    },
    {
      title: "Family Support Network",
      description: "Connecting families affected by spina bifida to share experiences and resources.",
      image: "/community-support.png",
    },
    {
      title: "Healthcare Access Initiative",
      description: "Working with healthcare providers to improve access to specialized care for spina bifida patients.",
      image: "/collaborative-care-discussion.png",
    },
  ]

  return (
    <section id="programs" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mx-auto">Our Programs</h2>
        <p className="section-subtitle text-center mx-auto">
          Initiatives designed to create lasting impact in communities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Button variant="link" className="text-primary p-0 font-medium">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
