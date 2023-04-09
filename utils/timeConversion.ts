import { PacketLapData } from "f1-22-udp";

interface MsTime {
  gapSign: string;
  ms: number;
  s: number;
  m: number;
}

interface SectorResponse {
  sector: string;
  gap: string;
}
export function convertMs(duration: number): MsTime {
  const gapSign = duration < 0 ? "-" : "+";
  const milliseconds = parseInt(String(duration % 1000)),
    seconds = parseInt(String((duration / 1000) % 60)),
    minutes = parseInt(String((duration / (1000 * 60)) % 60));
  return {
    gapSign: gapSign,
    ms: milliseconds,
    s: seconds,
    m: minutes,
  };
}

export function buildLapTimeString(time: MsTime): string {
  return `${time.m}:${time.s}.${time.ms} s`;
}

export function buildSectorTimeString(time: MsTime): string {
  return time.m > 0 ? buildLapTimeString(time) : `${time.s}.${time.ms} s`;
}

export function buildGapTimeString(time: MsTime): string {
  return `${time.gapSign} ${Math.abs(time.s)}.${Math.abs(time.ms)} s`;
}

export function sector1Calculation(data: PacketLapData): SectorResponse {
  return {
    sector: data.m_lapData[0].m_sector1TimeInMS
      ? buildSectorTimeString(convertMs(data.m_lapData[0].m_sector1TimeInMS))
      : buildSectorTimeString(
          convertMs(data.m_lapData[0].m_currentLapTimeInMS)
        ),
    gap:
      data.m_lapData[0].m_sector == 1
        ? buildGapTimeString(
            convertMs(
              data.m_lapData[0].m_sector1TimeInMS -
                data.m_lapData[1].m_sector1TimeInMS
            )
          )
        : "0.000 s",
  };
}
export function sector2Calculation(data: PacketLapData): SectorResponse {
  return {
    sector:
      data.m_lapData[0].m_sector2TimeInMS > 0
        ? buildSectorTimeString(convertMs(data.m_lapData[0].m_sector2TimeInMS))
        : data.m_lapData[0].m_sector1TimeInMS
        ? buildSectorTimeString(
            convertMs(
              data.m_lapData[0].m_currentLapTimeInMS -
                data.m_lapData[0].m_sector1TimeInMS
            )
          )
        : "0.000 s",
    gap:
      data.m_lapData[0].m_sector == 2
        ? buildGapTimeString(
            convertMs(
              data.m_lapData[0].m_sector2TimeInMS -
                data.m_lapData[1].m_sector2TimeInMS
            )
          )
        : "0.000 s",
  };
}
export function sector3Calculation(
  data: PacketLapData,
  currentLap: number
): SectorResponse {
  return {
    sector:
      data.m_lapData[0].m_sector === 2
        ? buildSectorTimeString(
            convertMs(
              data.m_lapData[0].m_currentLapTimeInMS -
                data.m_lapData[0].m_sector1TimeInMS -
                data.m_lapData[0].m_sector2TimeInMS
            )
          )
        : "0.000 s",
    gap:
      data.m_lapData[0].m_currentLapNum != currentLap
        ? buildGapTimeString(
            convertMs(
              data.m_lapData[0].m_currentLapTimeInMS -
                data.m_lapData[0].m_sector1TimeInMS -
                data.m_lapData[0].m_sector2TimeInMS -
                (data.m_lapData[1].m_currentLapTimeInMS -
                  data.m_lapData[1].m_sector1TimeInMS -
                  data.m_lapData[1].m_sector2TimeInMS)
            )
          )
        : "0.000 s",
  };
}
