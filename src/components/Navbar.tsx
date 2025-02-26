import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ModeToggle from "./ModeToggle";

export function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="mx-auto max-w-[1400px] px-6 flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/horse-head.svg"
              alt="GIF Horse Logo"
              width={24}
              height={24}
              className="dark:invert"
              priority
            />
            <span className="font-bold">GIF Horse</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <ModeToggle />
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Create
            </Link>
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Edit
            </Link>
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Login
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}
