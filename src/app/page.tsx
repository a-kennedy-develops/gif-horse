import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center text-center max-w-3xl mx-auto">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Create and Share GIFs with Ease
          </h1>
          <p className="text-lg text-muted-foreground">
            GIF Horse is currently under development. Soon you&apos;ll be able
            to create, edit, and share GIFs directly in your browser.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/yourusername/gif-horse"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/horse-head.svg"
              alt="GIF Horse logo"
              width={20}
              height={20}
            />
            Follow Development
          </a>
          <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            disabled
          >
            Coming Soon
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="flex flex-col gap-2 p-4 rounded-lg border">
            <h2 className="font-semibold">Create</h2>
            <p className="text-sm text-muted-foreground">
              Upload images or video to create custom GIFs
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4 rounded-lg border">
            <h2 className="font-semibold">Edit</h2>
            <p className="text-sm text-muted-foreground">
              Adjust timing, add effects, and customize your GIFs
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4 rounded-lg border">
            <h2 className="font-semibold">Share</h2>
            <p className="text-sm text-muted-foreground">
              Download or get a shareable link to your GIF
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
