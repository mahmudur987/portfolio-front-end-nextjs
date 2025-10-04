"use client";

import { useState } from "react";
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

  return (
    <>
      {/* LOGIN MODAL */}
      <LoginModal showLogin={showLogin} setShowLogin={setShowLogin} />

      {/* SIGNUP MODAL */}
      <RegisterModal showSignup={showSignup} setShowSignup={setShowSignup} />
    </>
  );
}
