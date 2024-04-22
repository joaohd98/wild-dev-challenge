"use client";

import { type ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { fontNames } from "@/theme/fonts";
import { StyledComponentsRegistry } from "@/lib/registry";
import { theme } from "@/theme";
import { GlobalStyles } from "@/theme/global";
import { GSAPInitializer } from "@/components/GSAPInitializer";
import { CustomCursorProvider } from "@/contexts/custom-cursor";
import { LoaderProvider } from "@/contexts/loader";
import { PreLoading } from "@/components/PreLoading";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontNames}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <GSAPInitializer />
            <CustomCursorProvider>
              <LoaderProvider>
                <PreLoading />
                <main>{children}</main>
              </LoaderProvider>
            </CustomCursorProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
