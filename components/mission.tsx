import { Target, Heart } from "lucide-react"

export function Mission() {
  return (
    <section id="mission" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 mb-3 sm:mb-4 rounded-md bg-primary/10 border border-primary/20">
            <p className="text-primary text-xs sm:text-sm font-medium">Our Purpose</p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Mission & Vision</h2>
          <p className="fluid-text-base sm:fluid-text-lg text-gray-600 max-w-3xl mx-auto">
            Our mission and vision guide everything we do at Kore, from our daily operations to our long-term strategic
            planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 rounded-bl-full"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-primary/10 mb-4 sm:mb-6">
                <Target className="h-6 sm:h-8 w-6 sm:w-8 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Mission</h2>
              <p className="fluid-text-base sm:fluid-text-lg leading-relaxed mb-6 sm:mb-8">
                To empower communities with knowledge, resources, and innovative solutions that support individuals with
                spina bifida, fostering inclusivity and improving their quality of life.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary font-bold text-xs sm:text-sm">1</span>
                  </div>
                  <p className="fluid-text-sm sm:fluid-text-base">Provide resources and support to affected families</p>
                </div>
                <div className="flex items-start">
                  <div className="h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary font-bold text-xs sm:text-sm">2</span>
                  </div>
                  <p className="fluid-text-sm sm:fluid-text-base">Educate communities about spina bifida</p>
                </div>
                <div className="flex items-start">
                  <div className="h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary font-bold text-xs sm:text-sm">3</span>
                  </div>
                  <p className="fluid-text-sm sm:fluid-text-base">Advocate for better healthcare access and policies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 rounded-bl-full"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-primary/10 mb-4 sm:mb-6">
                <Heart className="h-6 sm:h-8 w-6 sm:w-8 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Vision</h2>
              <p className="fluid-text-base sm:fluid-text-lg leading-relaxed mb-6 sm:mb-8">
                A world where individuals with spina bifida live free from stigma, have equal opportunities, and are
                supported by resilient, informed communities.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary font-bold text-xs sm:text-sm">1</span>
                  </div>
                  <p className="fluid-text-sm sm:fluid-text-base">Eliminate stigma and discrimination</p>
                </div>
                <div className="flex items-start">
                  <div className="h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary font-bold text-xs sm:text-sm">2</span>
                  </div>
                  <p className="fluid-text-sm sm:fluid-text-base">Create inclusive communities and opportunities</p>
                </div>
                <div className="flex items-start">
                  <div className="h-5 sm:h-6 w-5 sm:w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary font-bold text-xs sm:text-sm">3</span>
                  </div>
                  <p className="fluid-text-sm sm:fluid-text-base">Build sustainable support systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
