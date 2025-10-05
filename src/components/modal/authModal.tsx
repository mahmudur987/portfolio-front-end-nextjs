"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LoginModal } from "./LogInModal";
import { RegisterModal } from "./RegisterModal";

export default function AuthModals() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // useEffect(() => {
  //   if (showLogin) {
  //     setShowLogin(true);
  //     setShowSignup(false);
  //   } else {
  //     setShowLogin(false);
  //     setShowSignup(true);
  //   }
  // }, [setShowLogin, setShowSignup, showLogin, showSignup]);

  return (
    <>
      {/* LOGIN MODAL */}
      <LoginModal
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        setShowSignup={setShowSignup}
      />

      {/* SIGNUP MODAL */}
      {showSignup && (
        <RegisterModal
          showSignup={showSignup}
          setShowSignup={setShowSignup}
          setShowLogin={setShowLogin}
        />
      )}
    </>
  );
}
