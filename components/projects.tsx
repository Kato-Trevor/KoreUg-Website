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


const projects = [
  {
    title: "Community Education",
    description:
      "Workshops and training sessions for communities to understand spina bifida and support affected individuals.",
    image: "./diverse-learning-together.png",
    longDescription:
      "Our Community Education project focuses on raising awareness about spina bifida through comprehensive workshops and training sessions. We work directly with communities to provide accurate information, dispel myths, and create supportive environments for individuals and families affected by spina bifida.",
    objectives: [
      "Educate communities about spina bifida causes and prevention",
      "Reduce stigma and discrimination",
      "Train community health workers",
      "Establish support groups in local communities",
    ],
    impact: "Over 500 community members educated across 15 districts",
    timeline: "Ongoing project since 2023",
  },
  {
    title: "Family Support Network",
    description:
      "Connecting families affected by spina bifida to share experiences and resources.",
    image: "./community-support.png",
    longDescription:
      "The Family Support Network creates connections between families affected by spina bifida, providing a platform for sharing experiences, resources, and emotional support. This network helps families navigate challenges and celebrate milestones together.",
    objectives: [
      "Connect families across Uganda",
      "Facilitate experience sharing sessions",
      "Provide emotional and practical support",
      "Create resource sharing platforms",
    ],
    impact: "120+ families connected through our network",
    timeline: "Launched in 2024, expanding rapidly",
  },
  {
    title: "Healthcare Access Initiative",
    description:
      "Working with healthcare providers to improve access to specialized care for spina bifida patients.",
    image: "./collaborative-care-discussion.png",
    longDescription:
      "Our Healthcare Access Initiative partners with medical facilities and healthcare providers to improve access to specialized care for individuals with spina bifida. We work to bridge gaps in healthcare delivery and ensure quality care is accessible to all.",
    objectives: [
      "Partner with healthcare facilities",
      "Train medical professionals",
      "Improve referral systems",
      "Advocate for inclusive healthcare policies",
    ],
    impact: "Partnership with 8 healthcare facilities established",
    timeline: "Multi-year initiative starting 2024",
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
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "./placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="h-full w-full md:max-w-2xl md:max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-primary">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-lg">
            <Image
              src={project.image || "./placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Long Description */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-2">About This Project</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{project.longDescription}</p>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3">Key Objectives</h3>
            <ul className="space-y-2">
              {project.objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 text-sm md:text-base">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2 text-sm md:text-base">Impact</h4>
              <p className="text-gray-700 text-xs md:text-sm">{project.impact}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2 text-sm md:text-base">Timeline</h4>
              <p className="text-gray-700 text-xs md:text-sm">{project.timeline}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
