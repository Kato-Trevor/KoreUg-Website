"use client"

import { useState } from "react"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

export function Objectives() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const objectives = [
    {
      title: "Community Advocacy",
      description:
        "Raise awareness and understanding of spina bifida within local communities to promote acceptance and inclusion.",
      details:
        "We organize community forums, awareness campaigns, and educational events to help reduce stigma and misconceptions about spina bifida. By engaging community leaders, educators, and the general public, we create a more supportive environment for affected individuals and families.",
    },
    {
      title: "Support Systems",
      description:
        "Develop community networks to provide emotional, educational, and material support to families and individuals managing spina bifida.",
      details:
        "Our support networks connect families facing similar challenges, creating spaces for sharing experiences and resources. We facilitate peer support groups, family mentoring programs, and resource sharing initiatives to ensure no family faces these challenges alone.",
    },
    {
      title: "Capacity Building",
      description:
        "Equip caregivers, community health workers, and families with knowledge and skills to manage spina bifida effectively.",
      details:
        "Through targeted training programs, workshops, and educational materials, we build the capacity of caregivers and health workers to provide better care. Our approach emphasizes practical skills, evidence-based practices, and sustainable knowledge transfer.",
    },
    {
      title: "Health Innovations",
      description:
        "Partner with communities and stakeholders to implement sustainable healthcare solutions for mothers and children with spina bifida.",
      details:
        "We collaborate with healthcare providers, researchers, and technology partners to develop and implement innovative approaches to spina bifida care. This includes improving access to specialized services, developing low-cost interventions, and promoting preventive measures.",
    },
    {
      title: "Empowerment and Education",
      description:
        "Conduct workshops, campaigns, and outreach programs to educate the public on spina bifida prevention, early detection, and care.",
      details:
        "Knowledge is power. Our educational initiatives focus on prevention through folic acid awareness, the importance of prenatal care, and early intervention. We develop culturally appropriate materials and use various communication channels to reach diverse audiences.",
    },
    {
      title: "Collaboration",
      description:
        "Work closely with healthcare providers, educational institutions, and community leaders to bridge gaps in services and resources.",
      details:
        "No single organization can address all the challenges of spina bifida. We actively build partnerships with healthcare facilities, schools, government agencies, and other NGOs to create comprehensive support systems and maximize our collective impact.",
    },
    {
      title: "Inclusion",
      description:
        "Advocate for policies and practices that ensure individuals with spina bifida have access to education, employment, and social opportunities.",
      details:
        "We advocate for inclusive policies at local and national levels, work with schools to improve accessibility and accommodation, and partner with employers to create opportunities for individuals with spina bifida. Our goal is to remove barriers and create pathways to full participation in society.",
    },
  ]

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="objectives" className="section-padding bg-gradient-to-b from-navy to-[#1a1f4d] text-white">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 mb-3 sm:mb-4 rounded-md bg-primary/20 border border-primary/30">
            <p className="text-primary text-xs sm:text-sm font-medium">Our Focus Areas</p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Strategic Objectives
          </h2>
          <p className="fluid-text-base sm:fluid-text-lg text-gray-300 max-w-3xl mx-auto">
            These key objectives guide our work and help us create meaningful impact in the lives of individuals and
            families affected by spina bifida.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 mt-8 sm:mt-12">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="bg-navy/50 backdrop-blur-sm rounded-lg border border-primary/30 hover:border-primary transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full p-4 sm:p-6 flex items-start justify-between text-left focus:outline-none"
              >
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 sm:mr-4 mt-1">
                    <Check className="h-3 sm:h-4 w-3 sm:w-4 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary">{objective.title}</h3>
                    <p className="fluid-text-sm sm:fluid-text-base text-gray-300 mt-1 sm:mt-2">
                      {objective.description}
                    </p>
                  </div>
                </div>
                <div className="ml-3 sm:ml-4 flex-shrink-0">
                  {expandedIndex === index ? (
                    <ChevronUp className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
                  )}
                </div>
              </button>
              {expandedIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 sm:pt-2 border-t border-primary/10">
                  <p className="fluid-text-sm sm:fluid-text-base text-gray-300">{objective.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 border border-primary/30 rounded-lg bg-navy/30 backdrop-blur-sm">
            <p className="text-primary fluid-text-sm sm:fluid-text-base">
              <span className="font-bold">Our Approach:</span> Community-centered, Sustainable, Inclusive
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
