"use client";

import { type ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { fontNames } from "@/theme/fonts";
import { StyledComponentsRegistry } from "@/lib/registry";
import { theme } from "@/theme";
import { GlobalStyles } from "@/theme/global";
import { GSAPInitializer } from "@/components/GSAPInitializer";
import { CustomCursorProvider } from "@/contexts/custom-cursor";

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
              <main>{children}</main>
            </CustomCursorProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
