import React from "react";
import SocialLinksComponent from "../modules/SocialLinks";
import { useTranslations } from "next-intl";

const BudgetSection = () => {
  const messages = useTranslations("BudgetSection");
  return (
    <section
      id="budget"
      className="mx-auto container  px-8 py-12 border-x-1 border-zinc-200 text-center"
    >
      <div className="flex justify-center gap-2 items-center h-[20dvh] flex-col">
        <h1 className="text-3xl sm:text-5xl font-semibold">
          {messages("whatAreYouWaitingFor")}
        </h1>
        <p className="text-lg ">
          {messages("makeABudgetWithoutCommitmentTotallyFree")}
        </p>

        <SocialLinksComponent />
      </div>
    </section>
  );
};

export default BudgetSection;
