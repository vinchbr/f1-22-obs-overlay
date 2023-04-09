import { GridItem, Text, VStack, HStack } from "@chakra-ui/react";
import * as React from "react";
import { PacketLapData } from "f1-22-udp";
import {
  sector1Calculation,
  sector2Calculation,
  sector3Calculation,
} from "@/utils/timeConversion";

interface IProps {
  data: PacketLapData;
  currentLap: number;
}
export const Lap: React.FC<IProps> = ({ data, currentLap }) => {
  return (
    <HStack maxH={"9.25rem"} borderTop={"2px"} borderColor={"white"}>
      <GridItem area={"sector1"} p={3}>
        <VStack>
          <Text fontSize={20} color={"white"}>
            Sector 1
          </Text>
          <Text fontSize={20} color={"white"}>
            {sector1Calculation(data).sector}
          </Text>
          <Text fontSize={15} color={"white"}>
            Gap
          </Text>
          <Text fontSize={15} color={"white"}>
            {sector1Calculation(data).gap}
          </Text>
        </VStack>
      </GridItem>
      <GridItem area={"sector2"} p={3}>
        <VStack>
          <Text fontSize={20} color={"white"}>
            Sector 2
          </Text>
          <Text fontSize={20} color={"white"}>
            {sector2Calculation(data).sector}
          </Text>
          <Text fontSize={15} color={"white"}>
            Gap
          </Text>
          <Text fontSize={15} color={"white"}>
            {sector2Calculation(data).gap}
          </Text>
        </VStack>
      </GridItem>
      <GridItem area={"sector3"} p={3}>
        <VStack>
          <Text fontSize={20} color={"white"}>
            Sector 3
          </Text>
          <Text fontSize={20} color={"white"}>
            {sector3Calculation(data, currentLap).sector}
          </Text>
          <Text fontSize={15} color={"white"}>
            Gap
          </Text>
          <Text fontSize={15} color={"white"}>
            {sector3Calculation(data, currentLap).gap}
          </Text>
        </VStack>
      </GridItem>
    </HStack>
  );
};
