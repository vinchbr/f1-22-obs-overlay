import { PacketLapData } from "f1-22-udp";

export const emptyLapData: PacketLapData = {
  m_header: {
    m_packetFormat: 0,
    m_gameMajorVersion: 0,
    m_gameMinorVersion: 0,
    m_packetVersion: 0,
    m_packetId: 0,
    m_sessionUID: 0,
    m_sessionTime: 0,
    m_frameIdentifier: 0,
    m_playerCarIndex: 0,
    m_secondaryPlayerCarIndex: 0,
  },
  m_lapData: [
    {
      m_lastLapTimeInMS: 100000,
      m_currentLapTimeInMS: 90000,
      m_sector1TimeInMS: 45000,
      m_sector2TimeInMS: 1,
      m_lapDistance: 0,
      m_totalDistance: 0,
      m_safetyCarDelta: 0,
      m_carPosition: 0,
      m_currentLapNum: 2,
      m_pitStatus: 0,
      m_numPitStops: 0,
      m_sector: 0,
      m_currentLapInvalid: 0,
      m_penalties: 0,
      m_warnings: 0,
      m_numUnservedDriveThroughPens: 0,
      m_numUnservedStopGoPens: 0,
      m_gridPosition: 0,
      m_driverStatus: 0,
      m_resultStatus: 0,
      m_pitLaneTimerActive: 0,
      m_pitLaneTimeInLaneInMS: 0,
      m_pitStopTimerInMS: 0,
      m_pitStopShouldServePen: 0,
    },
    {
      m_lastLapTimeInMS: 100000,
      m_currentLapTimeInMS: 90000,
      m_sector1TimeInMS: 50000,
      m_sector2TimeInMS: 36000,
      m_lapDistance: 0,
      m_totalDistance: 0,
      m_safetyCarDelta: 0,
      m_carPosition: 0,
      m_currentLapNum: 1,
      m_pitStatus: 0,
      m_numPitStops: 0,
      m_sector: 0,
      m_currentLapInvalid: 0,
      m_penalties: 0,
      m_warnings: 0,
      m_numUnservedDriveThroughPens: 0,
      m_numUnservedStopGoPens: 0,
      m_gridPosition: 0,
      m_driverStatus: 0,
      m_resultStatus: 0,
      m_pitLaneTimerActive: 0,
      m_pitLaneTimeInLaneInMS: 0,
      m_pitStopTimerInMS: 0,
      m_pitStopShouldServePen: 0,
    },
    {
      m_lastLapTimeInMS: 0,
      m_currentLapTimeInMS: 0,
      m_sector1TimeInMS: 0,
      m_sector2TimeInMS: 0,
      m_lapDistance: 0,
      m_totalDistance: 0,
      m_safetyCarDelta: 0,
      m_carPosition: 0,
      m_currentLapNum: 0,
      m_pitStatus: 0,
      m_numPitStops: 0,
      m_sector: 0,
      m_currentLapInvalid: 0,
      m_penalties: 0,
      m_warnings: 0,
      m_numUnservedDriveThroughPens: 0,
      m_numUnservedStopGoPens: 0,
      m_gridPosition: 0,
      m_driverStatus: 0,
      m_resultStatus: 0,
      m_pitLaneTimerActive: 0,
      m_pitLaneTimeInLaneInMS: 0,
      m_pitStopTimerInMS: 0,
      m_pitStopShouldServePen: 0,
    },
  ],
  m_timeTrialPBCarIdx: 0,
  m_timeTrialRivalCarIdx: 0,
};