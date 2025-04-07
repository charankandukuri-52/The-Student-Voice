"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenu2 } from "@tabler/icons-react";
import { ThemeToggle } from "../theme-toggle";
import { 
  UserButton, 
  SignInButton, 
  SignUpButton, 
  useUser,
  SignIn,
  SignUp,
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut
} from "@clerk/nextjs";

const navigationItems = [
  {
    title: "Financial Aid",
    href: "/financial-aid",
    description: "Access educational resources and materials",
  },
  {
    title: "Academic Support",
    href: "/academic-support",
    description: "Get help with your studies",
  },
  {
    title: "Mental Health",
    href: "/mental-health",
    description: "Access mental health support services",
  },
  {
    title: "Community",
    href: "/community",
    description: "Connect with other students",
  },
  {
    title: "Career Guidance",
    href: "/career",
    description: "Explore career opportunities",
  },
];

export function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const { isSignedIn } = useUser();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container flex h-14 items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center space-x-2"
          aria-label="Return to homepage"
        >
          <span className="font-bold lg:px-12 px-4">The Student Voice</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-[30px] lg:ml-8">
          {navigationItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-foreground/80"
              aria-label={item.description}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-[30px]">
          <ThemeToggle />
          
          <ClerkLoading>
            <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
          </ClerkLoading>
          
          <ClerkLoaded>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            
            <SignedOut>
              <div className="flex items-center gap-2">
                <SignInButton mode="modal">
                  <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                    Sign in
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button size="sm" className="hidden sm:inline-flex">
                    Sign up
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </ClerkLoaded>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <IconMenu2 className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <SheetHeader className="mb-4">
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
                    aria-label={item.description}
                  >
                    {item.title}
                  </Link>
                ))}
                <hr className="my-2 border-t border-border" />
                <ClerkLoaded>
                  <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                  </SignedIn>
                  <SignedOut>
                    <div className="flex flex-col gap-2">
                      <SignInButton mode="modal">
                        <Button variant="outline" className="w-full">
                          Sign in
                        </Button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <Button className="w-full">
                          Sign up
                        </Button>
                      </SignUpButton>
                    </div>
                  </SignedOut>
                </ClerkLoaded>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
} 