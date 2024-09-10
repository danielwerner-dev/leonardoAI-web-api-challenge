"use client";

import { ArrowBackIcon } from "@chakra-ui/icons";
import { Container, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { redirect } from "next/navigation";
import { useContext } from "react";

import { LoggedInLayout } from "@/layouts/loggedIn";
import { CountryInfo } from "@/shared/countryInfo";
import { UserInfoContext } from "@/state/userInfoContext";
import { useMounted } from "@/utils/useMounted";

type Props = {
  params: { code: string };
};

  /**
   * Page that displays information about a single country.
   * The user must be logged in to access this page.
   * The page is rendered client-side, so that the user info is available.
   * The page is wrapped with a logged-in layout.
   * The page displays a back button to view all countries.
   * The page displays the country info.
   * @param {{params: {code: string}}} props
   * @returns {JSX.Element}
   */
export default function CountryPage({ params: { code } }: Props) {
  const { userInfo } = useContext(UserInfoContext);

  // Wait for the userInfo to be retrieved client-side
  const isMounted = useMounted();
  if (!isMounted) return null;

  if (userInfo === undefined) {
    redirect("/");
  }

  return (
    <LoggedInLayout>
      <Link as={NextLink} href="/" passHref ml={10} display="block">
        <ArrowBackIcon ml={1} />
        View all countries
      </Link>

      <Container maxW="1200px" display="flex" alignItems="center" padding={10}>
        <CountryInfo code={code} />
      </Container>
    </LoggedInLayout>
  );
}
