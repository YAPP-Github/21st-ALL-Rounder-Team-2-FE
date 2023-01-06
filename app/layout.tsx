import QueryClientWrapper from "./QueryClientWrapper";
import StyledComponentsRegistry from "../libs/styled-components";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="backdrop" />
        <div id="overlay" />
        <StyledComponentsRegistry>
          <QueryClientWrapper>{children}</QueryClientWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
