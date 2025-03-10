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
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./shadcn/button";
import { useUser } from "@clerk/nextjs";

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

export function Navbar({ className }: { className?: string }) {
  const { user, isLoaded } = useUser();
  const { open, setOpen } = useResponsiveMenu();

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
      {/* Show placeholder during loading, hide if not logged in */}
      {(!isLoaded || user) && (
        <Link
          href="/"
          className={cn(
            "text-sm font-medium transition-all duration-200 hover:text-primary relative group",
            !isLoaded && "opacity-50"
          )}
        >
          Settings
          <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 transition-transform group-hover:scale-x-100" />
        </Link>
      )}
    </>
  );

  const AuthPlaceholder = () => (
    <div className="w-9 h-9 rounded-full bg-muted animate-pulse" />
  );

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
            <div className="flex items-center xs:space-x-2 space-x-4">
              <div className="hidden md:flex items-center space-x-6">
                <NavItems />
              </div>

              <ModeToggle />
              <div className="min-w-[36px] flex justify-center">
                {!isLoaded ? (
                  <AuthPlaceholder />
                ) : (
                  <>
                    <SignedIn>
                      <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <SignedOut>
                      <SignInButton mode="modal">
                        <Button variant="default">Sign In</Button>
                      </SignInButton>
                    </SignedOut>
                  </>
                )}
              </div>

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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
