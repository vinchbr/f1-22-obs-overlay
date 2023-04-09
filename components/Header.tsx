import { Box, HStack, Text } from "@chakra-ui/react";
import { Tyre } from "./Tyre";
import * as React from "react";
import { teamIds } from "@/components/Appendix";

interface IProps {
  driverName: string;
  driverNumber: string;
  driverColor: string;
  tyreCompound: number;
}
export const Header = () => {
  return (
    <HStack
      h={"2.5rem"}
      borderBottom={"2px"}
      borderColor={"white"}
      bg={"#020717"}
    >
      <Text color={"white"} align={"center"} marginLeft={"0.625rem"}>
        44
      </Text>
      <Box bg={teamIds[8].color} p={1} h={"2rem"} />
      <Text w={"16rem"} color={"white"}>
        Lewis Hamilton
      </Text>
      <Box w={"2rem"} h={"2rem"}>
        <Tyre />
      </Box>
    </HStack>
  );
};
