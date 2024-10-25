import Avatar from "@/components/Avatar";
import ProjectItem from "@/components/ProjectItem";
import { ThemeToggle } from "@/components/ThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Head from "next/head";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />

        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>

      <main className="mx-auto w-full max-w-2xl space-y-8 pt-10">
        <section className="space-y-6 px-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <div className="relative h-12 w-12">
                <Suspense fallback={<Avatar.Skeleton />}>
                  <Avatar />
                </Suspense>
              </div>

              <div className="flex flex-col">
                <span className="font-medium">Aaron Lim</span>
                <span className="text-sm text-muted-foreground">
                  Aspiring Product Engineer
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <Link
                target="_blank"
                href="https://github.com/aaronlimck"
                className={buttonVariants({ variant: "outline", size: "icon" })}
              >
                <GitHubLogoIcon className="h-5 w-5" />
              </Link>

              <Link
                target="_blank"
                href="https://www.linkedin.com/in/aaronlimchengkiat/"
                className={buttonVariants({ variant: "outline", size: "icon" })}
              >
                <LinkedInLogoIcon className="h-5 w-5" />
              </Link>

              <ThemeToggle />
            </div>
          </div>

          <p>
            Hi, I&apos;m Aaron, based in Singapore. My interests lie in
            designing, managing, and developing products that solve real-world
            problems. Let&apos;s bring those ideas to life!
          </p>
        </section>

        <section className="flex flex-col">
          <div className="mb-4 px-4 font-medium text-primary">Projects</div>

          <Suspense fallback={<ProjectItem.Skeleton />}>
            <ProjectItem
              title="Moolah"
              description="Track and manage your finances with ease."
              link="https://github.com/aaronlimck/moolah"
              isArchived={false}
            />
            <ProjectItem
              title="Appraisals Performance and Development System"
              description="Steamline peer-to-peer appraisals using automation and generative AI."
              link="https://github.com/aaronlimck/APADS"
              isArchived={true}
            />
          </Suspense>
        </section>
      </main>
    </>
  );
}
