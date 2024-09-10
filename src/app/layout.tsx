import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ApolloWrapper } from "@/providers/apollo";
import { ChakraWrapper } from "@/providers/chakra";
import { UserInfoWrapper } from "@/providers/userInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leonardo.Ai - Countries List",
  description: "Daniel Werner",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <ChakraWrapper>
            <UserInfoWrapper>
              {children}
              {modal}
            </UserInfoWrapper>
          </ChakraWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
