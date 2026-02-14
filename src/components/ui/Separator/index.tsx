import { cn } from "@/lib/utils";
import React from "react";
import { ClassNameValue } from "tailwind-merge";

const baseClasses = "h-px w-full bg-zinc-200";

const Separator = ({ className }: { className?: ClassNameValue }) => {
  return <div className={cn(baseClasses, className)} />;
};

export default Separator;
