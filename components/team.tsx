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

const teamMembers: TeamMember[] = [
  {
    id: "luba",
    name: "Luba Pauline",
    role: "Executive Director/Founder",
    image: "./team/luba-pauline.png",
    level: 1,
  },
  {
    id: "danita",
    name: "Danita Turiho",
    role: "Operations Director/Co-founder",
    image: "./team/danita-turiho.png",
    level: 1,
  },
  {
    id: "frank",
    name: "Frank Ogwang",
    role: "Vice Chairperson & Head of Legal",
    image: "./team/frank-ogwang.png",
    level: 1,
    department: "Legal",
  },
  {
    id: "immelda",
    name: "Dr. Immelda Alikaya",
    role: "Chief Medical Officer",
    image: "./team/dr-immelda-alikaya.png",
    level: 1,
    department: "Medical",
  },
  {
    id: "kelly",
    name: "Kelly Williams Kayanja",
    role: "Chief Innovations & Strategy Officer",
    image: "./team/kelly-williams.jpg",
    level: 1,
  },
  {
    id: "norris",
    name: "Norris Linda Nakimbugwe",
    role: "Chairperson & Programs Head",
    image: "./team/norris-linda.jpg",
    level: 2,
  },
  {
    id: "olga",
    name: "Olga Nabbimba",
    role: "Programs Secretary",
    image: "./team/olga-nabbimba.JPG",
    level: 2,
  },
  {
    id: "kato",
    name: "Kato Trevor Thomas",
    role: "Head of IT",
    image: "./team/kato-trevor.jpg",
    level: 2,
    department: "Technology",
  },
  {
    id: "vanessa",
    name: "Vanessa Namukwaya",
    role: "Head of Media",
    image: "./team/vanessa-namukwaya.png",
    level: 2,
    department: "Communications",
  },
  {
    id: "ahabwe",
    name: "Ahabwe Yonah",
    role: "Head of Communications & PR",
    image: "./team/ahabwe-yonah.jpg",
    level: 2,
    department: "Communications",
  },
  {
    id: "adrian",
    name: "Adrian Masolo",
    role: "Chairperson procurement & Legal aid",
    image: "./team/adrian-masolo.png",
    level: 3,
    department: "Legal",
  },
  {
    id: "drake",
    name: "Drake Douglas Onen",
    role: "Procurement Secretary",
    image: "./team/drake-douglas.jpg",
    level: 3,
  },
  {
    id: "tayebwa",
    name: "Tayebwa Ananda Daphine",
    role: "Logisics & Transport Officer",
    image: "./team/tayembwa-ananda.jpg",
    level: 3,
  },
  {
    id: "treasure",
    name: "Treasure Ewila",
    role: "Procurement Treasurer",
    image: "./team/treasure-ewila.jpg",
    level: 3,
  },
  {
    id: "golder",
    name: "Golder Alikaya",
    role: "Head of data and IT support",
    image: "./team/golder-alikaya.png",
    level: 3,
    department: "Technology",
  },
];

export function Team() {
  const [activeTeamMember, setActiveTeamMember] = useState<string | null>(null)

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
          {/* Level 1 */}
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

                </div>
              ))}
          </div>

          {/* Level 2 */}
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

                  <div className="relative w-24 h-24 mb-4 overflow-hidden rounded-full border-4 border-primary">
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

          {/* Level 3 */}
          <div className="level-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-4 justify-items-center">
            {teamMembers
              .filter((member) => member.level === 3)
              .map((member) => (
                <div
                  key={member.id}
                  className="team-member flex flex-col items-center relative mb-8 w-full max-w-[160px]"
                  onMouseEnter={() => setActiveTeamMember(member.id)}
                  onMouseLeave={() => setActiveTeamMember(null)}
                >
                  
                  <div className="relative w-24 h-24 mb-4 overflow-hidden rounded-full border-4 border-primary">
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
