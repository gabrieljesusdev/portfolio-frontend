import { cn } from "@/lib/utils";
import React from "react";
import { ClassNameValue } from "tailwind-merge";

const baseClasses = {
  default:
    "cursor-pointer bg-[#0D0D1C] flex items-center justify-center px-4 py-2 gap-2 text-neutral-50 font-semibold",
  secundary:
    "cursor-pointer bg-zinc-100 flex items-center justify-center px-4 py-2 gap-2 text-zinc-800 font-semibold",
  accent:
    "cursor-pointer bg-[#0D0D1C] flex items-center justify-center px-4 py-2 gap-2 text-neutral-50 font-semibold",
};

const iconBaseClasses = "text-neutral-50";

const Component = ({
  className,
  children,
  action,
  variant = "default",
}: {
  className?: ClassNameValue;
  children: React.ReactNode;
  action?: () => void;
  variant?: "secundary" | "default" | "accent";
}) => (
  <button onClick={action} className={cn(baseClasses[variant], className)}>
    {children}
  </button>
);

const Text = ({
  className,
  children: text,
}: {
  className?: ClassNameValue;
  children: React.ReactNode;
}) => <span className={cn(baseClasses, className)}>{text}</span>;

const Icon = ({
  icon: Icon,
  className,
}: {
  className?: ClassNameValue;
  icon: React.ElementType;
}) => <Icon className={cn(iconBaseClasses, className)} />;

const Button = {
  Root: Component,
  Text: Text,
  Icon: Icon,
};

export default Button;
