"use client";
import { type ReactNode } from "react";

export interface PreLoadingProps {
  children: ReactNode;
  onFinishLoading: () => void;
}
