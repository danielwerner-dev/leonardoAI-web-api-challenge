import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { CountryListItem } from "@/models/country";

type Props = {
  country: CountryListItem;
};

/**
 * A card component that displays information about a country.
 * @param {{ country: CountryListItem }} props
 * @returns {JSX.Element}
 */
export const CountryCard = ({ country }: Props) => {
  return (
    <Card variant="outline">
      <CardHeader>
        <Heading size="md">
          {country.emoji}&nbsp;&nbsp;{country.name}
        </Heading>
        <Text size="sm">{country.native}</Text>
      </CardHeader>
      <CardBody paddingTop={0}>
        <Link as={NextLink} href={`/country/${country.code}`} passHref>
          More info
          <ArrowForwardIcon ml={1} />
        </Link>
      </CardBody>
    </Card>
  );
};
