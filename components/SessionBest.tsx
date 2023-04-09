import { Badge, HStack, Text } from "@chakra-ui/react";
import * as React from "react";

export const SessionBest = () => {
  return (
    <HStack>
      <Text fontSize={10} color={"white"} mr={"5px"}>
        Session Best
      </Text>
      <Badge fontFamily={"Titillium Web"}>1.35.000</Badge>
      <Text fontSize={10} color={"white"}>
        S1
      </Text>
      <Badge fontFamily={"Titillium Web"}>35.000</Badge>
      <Text fontSize={10} color={"white"}>
        S2
      </Text>
      <Badge fontFamily={"Titillium Web"}>35.000</Badge>
      <Text fontSize={10} color={"white"}>
        S3
      </Text>
      <Badge fontFamily={"Titillium Web"}>35.000</Badge>
    </HStack>
  );
};
