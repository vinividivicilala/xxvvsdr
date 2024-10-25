import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

interface ProjectItemProps {
  title: string;
  link: string;
  description: string;
  isArchived: boolean;
}

export default function ProjectItem({
  title,
  link,
  description,
  isArchived = false,
}: ProjectItemProps) {
  return (
    <Link
      target="_blank"
      href={link}
      className="flex items-center justify-between p-4 hover:rounded-md hover:bg-accent"
    >
      <div className="mr-4 flex flex-row items-center space-x-4">
        <div className="flex flex-col space-y-1">
          <span className="flex items-center">
            <span className="line-clamp-1 text-primary/80">{title}</span>
            {isArchived && (
              <span className=" text-muted-background ml-2 h-fit rounded-lg bg-muted px-2 py-0.5 font-mono text-xs no-underline">
                Archived
              </span>
            )}
          </span>
          <span className="line-clamp-1 text-sm text-muted-foreground">
            {description}
          </span>
        </div>
      </div>

      <ArrowTopRightIcon className="h-5 w-5 text-muted-foreground" />
    </Link>
  );
}

ProjectItem.Skeleton = () => {
  return (
    // Show 6 skeleton rows
    Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className="mt-6 space-y-2 px-4">
        <Skeleton className="h-4 w-[260px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    ))
  );
};
