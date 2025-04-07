"use client";

import { UserProfile } from "@clerk/nextjs";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <SignedIn>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
          <UserProfile
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "shadow-lg",
              },
            }}
          />
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
} 