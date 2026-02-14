"use client";

import Footer from "@/components/layout/Footer";
import Loading from "@/components/layout/loading";
import Navbar from "@/components/layout/Navbar";
import { ProjectContent } from "@/components/modules/project-content";
import Button from "@/components/ui/button";
import Separator from "@/components/ui/Separator";
import { useFetchUniqueProject } from "@/queries/projects/get";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { use } from "react";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const locale = useLocale();
  const router = useRouter();

  const { project: id } = use(params);
  const { isLoading, data } = useFetchUniqueProject(id);

  if (!id) {
    router.push("/");
    return;
  }

  if (isLoading) return <Loading />;

  return (
    <>
      <Navbar />
      <Separator />

      <main className="container mx-auto  w-full">
        {!data ? (
          <div className="flex flex-col flex-1 gap-4 h-[80dvh] w-full  items-center justify-center">
            <p className="text-gray-500 text-2xl font-semibold">
              Projeto não encontrado
            </p>

            <Button.Root action={() => router.push("/")}>
              <Button.Text>Voltar para a página inicial</Button.Text>
            </Button.Root>
          </div>
        ) : (
          <div className="min-h-screen items-center justify-center flex flex-col  py-12  px-8 border-x-zinc-200 border-x-2">
            <ProjectContent
              video={data?.videoUrl || ""}
              images={data?.imagesUrl || []}
            />

            <div className="mx-auto w-full max-w-7xl">
              <div className="flex mt-4 justify-between items-center">
                <h1 className="text-3xl font-semibold after:block after:absolute after:size-4 after:-ml-2 after:mt-[-1rem] after:z-[-1] after:bg-indigo-600  relative z-1">
                  {locale === "en" ? data?.name_en : data?.name}
                </h1>
              </div>

              <p className="text-zinc-800 max-w-2xl mb-4">
                {(locale === "en" ? data?.description_en : data?.description)
                  ?.split("\n")
                  .map((line, i, arr) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
              </p>

              <span className="mt-8 text-zinc-600 text-sm">
                {locale === "en" ? "Created at: " : "Criado em: "}
                {new Date(data?.createdAt).toLocaleDateString("pt-br")}
              </span>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
