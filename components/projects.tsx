"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image?: string;
  longDescription: string;
  objectives?: string[];
  tagline?: string;
  timeline?: string;
  impact?: string;
}

const projects: Project[] = [
  {
    title: "Kore Nova Program",
    description:
      "Free and high-quality healthcare delivery for individuals living with Spina Bifida in partnership with Ruby Hospital.",
    image: "./images/nova-project.jpg",
    longDescription:
      "The Kore Nova Program is a groundbreaking initiative by Kore in partnership with Ruby Hospital, aimed at delivering free and high-quality healthcare to individuals living with Spina Bifida in Uganda. This program is fully sponsored by Kore and is expertly delivered by our trusted medical partners at Ruby Hospital.",
    objectives: [
      "Free surgical and rehabilitative care",
      "Specialized medical consultations",
      "Ongoing treatment support",
      "Establish sustainable healthcare delivery systems",
    ],
    tagline: "Health Equity for Spina Bifida",
    timeline: "Ongoing project since July 2025",
  },
];

export function Projects() {
   const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
     null
   );
   const [isDialogOpen, setIsDialogOpen] = useState(false);

   const handleLearnMore = (projectIndex: number) => {
     setSelectedProjectId(projectIndex);
     setIsDialogOpen(true);
   };

   const handleCloseDialog = () => {
     setIsDialogOpen(false);
     setSelectedProjectId(null);
   };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mx-auto">Our Programs</h2>
        <p className="section-subtitle text-center mx-auto">
          Initiatives designed to create lasting impact in communities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={project.image || "./placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button
                  variant="link"
                  className="text-primary p-0 font-medium"
                  onClick={() => handleLearnMore(index)}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectDetailsDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        projectId={selectedProjectId}
      />
    </section>
  );
}

interface ProjectDetailsDialogProps {
  isOpen: boolean
  onClose: () => void
  projectId: number | null
}

function ProjectDetailsDialog({ isOpen, onClose, projectId }: ProjectDetailsDialogProps) {
  const project = projectId !== null ? projects[projectId] : null

  if (!project) return null
  
  const {title, description, longDescription, image, objectives, impact, tagline, timeline} = project;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="h-full w-full md:max-w-2xl md:max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-primary">
            {title}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Image */}
          {/* <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-lg">
            <Image
              src={image || "./placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div> */}

          {/* Long Description */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-2">About This Project</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{longDescription}</p>
          </div>

          {/* Objectives */}
          {
            objectives && objectives.length > 0 && 
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3">Key Objectives</h3>
              <ul className="space-y-2">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700 text-sm md:text-base">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          }

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
              impact && 
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2 text-sm md:text-base">Impact</h4>
                <p className="text-gray-700 text-xs md:text-sm">{impact}</p>
              </div>
            }
            {
              tagline && 
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2 text-sm md:text-base">Tagline</h4>
                <p className="text-gray-700 text-xs md:text-sm">{tagline}</p>
              </div>
            }
            {
              timeline && 
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2 text-sm md:text-base">Timeline</h4>
                <p className="text-gray-700 text-xs md:text-sm">{timeline}</p>
              </div>
            }
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
