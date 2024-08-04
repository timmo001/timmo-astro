"use client";
import Link from "next/link";

import { TextFadeInUpGrab } from "~/components/animations/text";
import { Button } from "~/components/ui/button";

export default function Error() {
  return (
    <>
      <header className="h-[50vh] min-h-96 w-full bg-gradient-to-b from-violet-900 to-slate-950 p-4">
        <div
          className="max-w-screen flex h-full w-full flex-col items-start justify-end bg-contain bg-center bg-no-repeat p-16"
          style={{
            backgroundImage: "url('/logo-wide-nobackground.png')",
          }}
        >
          <div className="flex flex-wrap items-baseline justify-start text-start">
            <TextFadeInUpGrab>
              <span className="me-6 text-8xl font-bold leading-none tracking-tight text-white">
                There was an error loading this page.
              </span>
            </TextFadeInUpGrab>
          </div>
          <TextFadeInUpGrab>
            <Link href="/">
              <Button className="mt-10 rounded-2xl">Return Home</Button>
            </Link>
          </TextFadeInUpGrab>
        </div>
      </header>
    </>
  );
}
