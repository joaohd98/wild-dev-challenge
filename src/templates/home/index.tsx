"use client";

import { PreLoading } from "@/components/PreLoading";

export const HomeTemplate = () => {
  return (
    <PreLoading onFinishLoading={() => null}>
      <div />
    </PreLoading>
  );
};
