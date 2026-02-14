"use client";

import React, { ReactNode } from "react";
import { useLocale } from "next-intl";
import { AbstractIntlMessages } from "next-intl";

interface ClientLayoutWrapperProps {
  children: ReactNode;
  messages?: AbstractIntlMessages;
}

export default function ClientLayoutWrapper({
  children,
}: ClientLayoutWrapperProps) {
  const locale = useLocale();

  return (
    <div className="client-wrapper" data-locale={locale}>
      {children}
    </div>
  );
}
