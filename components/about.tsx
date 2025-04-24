import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function About() {
  const keyPoints = [
    "Community-centered approach to spina bifida support",
    "Focus on education and awareness programs",
    "Collaboration with healthcare providers and institutions",
    "Advocacy for inclusive policies and practices",
  ]

  // Helper function to get a valid image source
  const getValidImageSrc = (src: string | undefined | null): string => {
    if (!src || src === "") {
      return "/abstract-geometric-shapes.png"
    }
    return src
  }

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 mb-3 sm:mb-4 rounded-md bg-primary/10 border border-primary/20">
              <p className="text-primary text-xs sm:text-sm font-medium">About Us</p>
            </div>
            <h2 className="section-title">Who We Are</h2>
            <p className="fluid-text-base sm:fluid-text-lg leading-relaxed mb-4 sm:mb-6">
              Kore is a community-based organization committed to supporting individuals and families affected by spina
              bifida. By fostering collaboration, promoting awareness, and implementing impactful initiatives, Kore
              seeks to create a more inclusive society where individuals with spina bifida can thrive.
            </p>
            <p className="fluid-text-base sm:fluid-text-lg leading-relaxed mb-6 sm:mb-8">
              The organization emphasizes local engagement and sustainable solutions to improve healthcare access,
              reduce stigma, and enhance overall well-being. Our approach is rooted in community empowerment, ensuring
              that solutions are developed with and for the people we serve.
            </p>

            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <p className="fluid-text-sm sm:fluid-text-base">{point}</p>
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Our Impact</h3>
              <p className="fluid-text-sm sm:fluid-text-base">
                Since our founding, we have worked with numerous families, conducted community workshops, and partnered
                with healthcare facilities to improve care for individuals with spina bifida.
              </p>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-square rounded-2xl overflow-hidden border border-gray-100 bg-navy p-4">
              <Image
                src={getValidImageSrc("/spina-bifida-baby-womb.png") || "/placeholder.svg"}
                alt="Artistic illustration of a baby with spina bifida in the womb"
                width={600}
                height={600}
                className="object-contain h-full w-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[200px] sm:max-w-xs">
              <p className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Our Commitment</p>
              <p className="text-gray-600 text-sm sm:text-base">
                "We believe in the power of community to transform lives and create lasting change."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
