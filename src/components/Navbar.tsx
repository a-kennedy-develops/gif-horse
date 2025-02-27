"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ModeToggle from "./ModeToggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/shadcn/sheet";
import { useResponsiveMenu } from "@/hooks/useResponsiveMenu";

export const NavBrand = () => (
  <Link href="/" className="flex items-center space-x-2">
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
);

const NavItems = () => (
  <>
    <Link
      href="/"
      className="text-sm font-medium transition-colors hover:text-primary relative group"
    >
      Create
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 transition-transform group-hover:scale-x-100" />
    </Link>
    <Link
      href="/"
      className="text-sm font-medium transition-colors hover:text-primary relative group"
    >
      Edit
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 transition-transform group-hover:scale-x-100" />
    </Link>
    <Link
      href="/"
      className="text-sm font-medium transition-colors hover:text-primary relative group"
    >
      Login
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 transition-transform group-hover:scale-x-100" />
    </Link>
  </>
);

export function Navbar({ className }: { className?: string }) {
  const { open, setOpen } = useResponsiveMenu();

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50",
          className
        )}
      >
        <div className="mx-auto max-w-[1250px] px-6 flex h-14 items-center">
          <NavBrand />

          <div className="flex-1 flex justify-end items-center">
            <div className="flex items-center space-x-4">
              <ModeToggle />

              {/* Mobile Menu */}
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger className="md:hidden">
                  <Image
                    src="/hamburger-menu.svg"
                    alt="Menu"
                    width={24}
                    height={24}
                    className="dark:invert"
                  />
                </SheetTrigger>
                <SheetContent
                  side="top"
                  className="h-min w-full border-l-0 sm:max-w-none p-0 backdrop-blur-lg bg-background/95"
                  titleContent={<NavBrand />}
                >
                  <SheetTitle className="sr-only">
                    GIF Horse Navigation Menu
                  </SheetTitle>
                  <div className="flex flex-col space-y-6 items-center pt-4 pb-8">
                    <NavItems />
                    <div className="w-12 h-[1px] bg-border" />
                    <p className="text-xs text-muted-foreground">
                      GIF Horse &copy; {new Date().getFullYear()}
                    </p>
                  </div>
                </SheetContent>
              </Sheet>

              <div className="hidden md:flex items-center space-x-6 mr-4">
                <NavItems />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
