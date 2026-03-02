import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CardOutline from "@/components/ui/CardOutline";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  title: string;
  description: string;
  viewLabel: string;
}

export default function ProjectCard({ project, title, description, viewLabel }: ProjectCardProps) {
  return (
    <CardOutline className="overflow-hidden group">
      {project.image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-end/80 to-transparent" />
          <h3 className="absolute bottom-4 left-4 text-lg font-bold tracking-wider">
            {title}
          </h3>
        </div>
      )}
      {!project.image && (
        <div className="p-6">
          <h3 className="text-lg font-bold tracking-wider mb-2">{title}</h3>
          <p className="text-sm text-text-secondary tracking-wide">{description}</p>
        </div>
      )}
      <div className="p-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-accent-dim text-accent rounded-full tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            <ArrowRight size={18} className="border border-accent rounded p-0.5" />
            {viewLabel}
          </a>
        )}
      </div>
    </CardOutline>
  );
}
