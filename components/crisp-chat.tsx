"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("9466f199-b83c-4b86-85b3-84e41a2bed3b");
  }, []);

  return null;
};
