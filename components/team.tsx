"use client"

import { useState } from "react"
import Image from "next/image"
import { Users } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  level: number
  department?: string
  reportsTo?: string
}

export function Team() {
  const [activeTeamMember, setActiveTeamMember] = useState<string | null>(null)

  const teamMembers: TeamMember[] = [
    {
      id: "luba",
      name: "Luba Pauline",
      role: "Founder",
      image: "./team/luba-pauline.png",
      level: 1,
    },
    {
      id: "danita",
      name: "Danita Turiho",
      role: "Co-founder",
      image: "./team/danita-turiho.png",
      level: 1,
    },
    {
      id: "vanessa",
      name: "Vanessa Namukwaya",
      role: "Media",
      image: "./team/vanessa-namukwaya.png",
      level: 2,
      department: "Communications",
      reportsTo: "luba",
    },
    {
      id: "frank",
      name: "Frank Ogwang",
      role: "Head of Legal",
      image: "./team/frank-ogwang.png",
      level: 2,
      department: "Legal",
      reportsTo: "danita",
    },
    {
      id: "immelda",
      name: "Dr. Immelda Alikaya",
      role: "Medical Head",
      image: "./team/dr-immelda-alikaya.png",
      level: 2,
      department: "Medical",
      reportsTo: "luba",
    },
    {
      id: "golder",
      name: "Golder Alikaya",
      role: "IT",
      image: "./team/golder-alikaya.png",
      level: 2,
      department: "Technology",
      reportsTo: "danita",
    },
    {
      id: "adrian",
      name: "Adrian Masolo",
      role: "Legal Aid",
      image: "./team/adrian-masolo.png",
      level: 2,
      department: "Legal",
      reportsTo: "frank",
    },
  ]

  // Helper function to get a valid image source
  const getValidImageSrc = (src: string | undefined | null): string => {
    if (!src || src === "") {
      return "./diverse-group-city.png"
    }
    return src
  }

  return (
    <section id="team" className="section-padding bg-navy text-white">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block px-3 py-1 mb-3 sm:mb-4 rounded-md bg-primary/20 border border-primary/30">
            <p className="text-primary text-xs sm:text-sm font-medium">
              Our People
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Meet Our Team
          </h2>
          <p className="fluid-text-base sm:fluid-text-lg text-gray-300 max-w-3xl mx-auto">
            Dedicated professionals committed to supporting individuals and
            families affected by spina bifida.
          </p>
        </div>

        {/* Organogram */}
        <div className="organogram relative mx-auto max-w-5xl">
          {/* Level 1: Leadership */}
          <div className="level-1 flex justify-center gap-24 mb-20">
            {teamMembers
              .filter((member) => member.level === 1)
              .map((member) => (
                <div
                  key={member.id}
                  className="team-member flex flex-col items-center relative"
                  onMouseEnter={() => setActiveTeamMember(member.id)}
                  onMouseLeave={() => setActiveTeamMember(null)}
                >
                  <div className="relative w-28 h-28 mb-4 overflow-hidden rounded-full border-4 border-primary">
                    <Image
                      src={
                        getValidImageSrc(member.image) || "./placeholder.svg"
                      }
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-navy/80 backdrop-blur-sm p-3 rounded-lg border border-primary/30 text-center">
                    <h4 className="text-xl font-bold text-primary">
                      {member.name}
                    </h4>
                    <p className="text-gray-300">{member.role}</p>
                  </div>

                  {/* Connection line */}
                  <div className="absolute -bottom-20 left-1/2 w-px h-20 bg-primary transform -translate-x-1/2"></div>
                </div>
              ))}
          </div>

          {/* Horizontal connector for level 2 */}
          <div className="horizontal-connector relative h-px bg-primary w-4/5 mx-auto -mt-20 mb-20"></div>

          {/* Level 2: All Team Members */}
          <div className="level-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-4 justify-items-center">
            {teamMembers
              .filter((member) => member.level === 2)
              .map((member) => (
                <div
                  key={member.id}
                  className="team-member flex flex-col items-center relative mb-8 w-full max-w-[160px]"
                  onMouseEnter={() => setActiveTeamMember(member.id)}
                  onMouseLeave={() => setActiveTeamMember(null)}
                >
                  {/* Vertical connector to horizontal line */}
                  <div className="absolute -top-20 left-1/2 w-px h-20 bg-primary/70 transform -translate-x-1/2"></div>

                  <div className="relative w-24 h-24 mb-4 overflow-hidden rounded-full border-3 border-primary/70">
                    <Image
                      src={
                        getValidImageSrc(member.image) || "./placeholder.svg"
                      }
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-navy/80 backdrop-blur-sm p-2 rounded-lg border border-primary/30 text-center w-full">
                    <h4 className="text-lg font-bold text-primary">
                      {member.name}
                    </h4>
                    <p className="text-gray-300">{member.role}</p>
                    <p className="text-xs text-gray-400">{member.department}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 rounded-lg bg-navy/30 backdrop-blur-sm">
            <Users className="h-5 w-5 text-primary" />
            <p className="text-primary">
              <span className="font-bold">Our Strength:</span> Collaboration,
              Expertise, Compassion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
