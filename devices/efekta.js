"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zigbee_herdsman_1 = require("zigbee-herdsman");
const modernExtend_1 = require("../lib/modernExtend");
const defaultReporting = { min: 0, max: 300, change: 0 };
const normalReporting = { min: 0, max: 3600, change: 0 };
const rareReporting = { min: 0, max: 21600, change: 0 };
const rarestReporting = { min: 0, max: 64800, change: 0 };
const definitions = [
    {
        zigbeeModel: ['EFEKTA_iAQ3'],
        model: 'EFEKTA_iAQ3',
        vendor: 'EFEKTA',
        description: 'CO2 Monitor with IPS TFT Display, outdoor temperature and humidity, date and time',
        extend: [
            (0, modernExtend_1.deviceEndpoints)({ endpoints: { '1': 1, '2': 2 } }),
            (0, modernExtend_1.co2)({ reporting: defaultReporting }),
            (0, modernExtend_1.temperature)({
                endpointNames: ['1'],
                description: 'Measured value of the built-in temperature sensor',
                reporting: defaultReporting,
            }),
            (0, modernExtend_1.temperature)({
                endpointNames: ['2'],
                description: 'Measured value of the external temperature sensor',
                reporting: defaultReporting,
            }),
            (0, modernExtend_1.humidity)({
                endpointNames: ['1'],
                description: 'Measured value of the built-in humidity sensor',
                reporting: defaultReporting,
            }),
            (0, modernExtend_1.humidity)({
                endpointNames: ['2'],
                description: 'Measured value of the external humidity sensor',
                reporting: defaultReporting,
            }),
            (0, modernExtend_1.numeric)({
                name: 'voc_index',
                unit: 'VOC Index points',
                cluster: 'genAnalogInput',
                attribute: 'presentValue',
                description: 'VOC index',
                access: 'STATE',
                reporting: defaultReporting,
            }),
            (0, modernExtend_1.numeric)({
                name: 'voc_raw_data',
                unit: 'ticks',
                cluster: 'genAnalogInput',
                attribute: { ID: 0x0065, type: zigbee_herdsman_1.Zcl.DataType.SINGLE_PREC },
                description: 'SRAW_VOC, digital raw value',
                access: 'STATE',
            }),
            (0, modernExtend_1.illuminance)({
                access: 'STATE',
                reporting: defaultReporting,
            }),
            (0, modernExtend_1.binary)({
                name: 'auto_brightness',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0203, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Enable or Disable Auto Brightness of the Display',
            }),
            (0, modernExtend_1.binary)({
                name: 'night_onoff_backlight',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0401, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Complete shutdown of the backlight at night mode',
            }),
            (0, modernExtend_1.numeric)({
                name: 'night_on_backlight',
                unit: 'Hr',
                valueMin: 0,
                valueMax: 23,
                cluster: 'msCO2',
                attribute: { ID: 0x0405, type: zigbee_herdsman_1.Zcl.DataType.UINT8 },
                description: 'Night mode activation time',
            }),
            (0, modernExtend_1.numeric)({
                name: 'night_off_backlight',
                unit: 'Hr',
                valueMin: 0,
                valueMax: 23,
                cluster: 'msCO2',
                attribute: { ID: 0x0406, type: zigbee_herdsman_1.Zcl.DataType.UINT8 },
                description: 'Night mode deactivation time',
            }),
            (0, modernExtend_1.enumLookup)({
                name: 'rotate',
                lookup: { '0': 0, '90': 90, '180': 180, '270': 270 },
                cluster: 'msCO2',
                attribute: { ID: 0x0285, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Display rotation angle',
            }),
            (0, modernExtend_1.binary)({
                name: 'long_chart_period',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0204, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'The period of plotting the CO2 level(OFF - 1H | ON - 24H)',
            }),
            (0, modernExtend_1.binary)({
                name: 'long_chart_period2',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0404, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'The period of plotting the VOC Index points(OFF - 1H | ON - 24H)',
            }),
            (0, modernExtend_1.numeric)({
                name: 'set_altitude',
                unit: 'meters',
                valueMin: 0,
                valueMax: 3000,
                cluster: 'msCO2',
                attribute: { ID: 0x0205, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Setting the altitude above sea level (for high accuracy of the CO2 sensor)',
            }),
            (0, modernExtend_1.numeric)({
                name: 'temperature_offset',
                unit: '°C',
                valueMin: -50,
                valueMax: 50,
                valueStep: 0.1,
                scale: 10,
                cluster: 'msTemperatureMeasurement',
                attribute: { ID: 0x0210, type: zigbee_herdsman_1.Zcl.DataType.INT16 },
                description: 'Adjust temperature',
            }),
            (0, modernExtend_1.numeric)({
                name: 'humidity_offset',
                unit: '%',
                valueMin: -50,
                valueMax: 50,
                valueStep: 1,
                cluster: 'msRelativeHumidity',
                attribute: { ID: 0x0210, type: zigbee_herdsman_1.Zcl.DataType.INT16 },
                description: 'Adjust humidity',
            }),
            (0, modernExtend_1.binary)({
                name: 'internal_or_external',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0288, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Display data from internal or external TH sensor',
            }),
            (0, modernExtend_1.binary)({
                name: 'automatic_scal',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0402, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Automatic self calibration',
            }),
            (0, modernExtend_1.binary)({
                name: 'forced_recalibration',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0202, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Start FRC (Perform Forced Recalibration of the CO2 Sensor)',
            }),
            (0, modernExtend_1.binary)({
                name: 'factory_reset_co2',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0206, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Factory Reset CO2 sensor',
            }),
            (0, modernExtend_1.numeric)({
                name: 'manual_forced_recalibration',
                unit: 'ppm',
                valueMin: 0,
                valueMax: 5000,
                cluster: 'msCO2',
                attribute: { ID: 0x0207, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Start Manual FRC (Perform Forced Recalibration of the CO2 Sensor)',
            }),
            (0, modernExtend_1.binary)({
                name: 'enable_gas',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0220, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Enable CO2 Gas Control',
            }),
            (0, modernExtend_1.binary)({
                name: 'invert_logic_gas',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0225, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Enable invert logic CO2 Gas Control',
            }),
            (0, modernExtend_1.numeric)({
                name: 'high_gas',
                unit: 'ppm',
                valueMin: 400,
                valueMax: 5000,
                cluster: 'msCO2',
                attribute: { ID: 0x0221, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Setting High CO2 Gas Border',
            }),
            (0, modernExtend_1.numeric)({
                name: 'low_gas',
                unit: 'ppm',
                valueMin: 400,
                valueMax: 5000,
                cluster: 'msCO2',
                attribute: { ID: 0x0222, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Setting Low CO2 Gas Border',
            }),
        ],
    },
    {
        zigbeeModel: ['EFEKTA_PWS'],
        model: 'EFEKTA_PWS',
        vendor: 'EFEKTA',
        description: '[Plant Wattering Sensor, CR2450, CR2477 batteries, temperature ]',
        extend: [
            (0, modernExtend_1.soilMoisture)({ reporting: rareReporting }),
            (0, modernExtend_1.battery)({
                voltage: true,
                voltageReportingConfig: rareReporting,
                percentageReportingConfig: rareReporting,
            }),
            (0, modernExtend_1.temperature)({ reporting: rareReporting }),
            (0, modernExtend_1.numeric)({
                name: 'report_delay',
                unit: 'min',
                valueMin: 1,
                valueMax: 240,
                cluster: 'genPowerCfg',
                attribute: { ID: 0x0201, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Adjust Report Delay. Setting the time in minutes, by default 15 minutes',
            }),
        ],
    },
    {
        zigbeeModel: ['EFEKTA_THP_LR'],
        model: 'EFEKTA_THP_LR',
        vendor: 'EFEKTA',
        description: 'DIY outdoor long-range sensor for temperature, humidity and atmospheric pressure',
        extend: [
            (0, modernExtend_1.battery)({
                voltage: true,
                voltageReportingConfig: rarestReporting,
                percentageReportingConfig: rarestReporting,
            }),
            (0, modernExtend_1.temperature)({ reporting: rarestReporting }),
            (0, modernExtend_1.humidity)({ reporting: rarestReporting }),
            (0, modernExtend_1.pressure)({ reporting: rarestReporting }),
        ],
    },
    {
        zigbeeModel: ['EFEKTA_ePWS'],
        model: 'EFEKTA_ePWS',
        vendor: 'EFEKTA',
        description: 'Plant wattering sensor with e-ink display',
        extend: [
            (0, modernExtend_1.battery)({
                voltage: true,
                voltageReportingConfig: rareReporting,
                percentageReportingConfig: rareReporting,
            }),
            (0, modernExtend_1.soilMoisture)({ reporting: rareReporting }),
            (0, modernExtend_1.temperature)({ reporting: rareReporting }),
        ],
    },
    {
        zigbeeModel: ['EFEKTA_eON213z'],
        model: 'EFEKTA_eON213z',
        vendor: 'EFEKTA',
        description: 'Temperature and humidity sensor with e-ink2.13',
        extend: [
            (0, modernExtend_1.battery)({
                voltage: true,
                voltageReportingConfig: rareReporting,
                percentageReportingConfig: rareReporting,
            }),
            (0, modernExtend_1.temperature)({ reporting: rareReporting }),
            (0, modernExtend_1.humidity)({ reporting: rareReporting }),
        ],
    },
    {
        zigbeeModel: ['EFEKTA_miniPWS'],
        model: 'EFEKTA_miniPWS',
        vendor: 'EFEKTA',
        description: 'Mini plant wattering sensor',
        extend: [
            (0, modernExtend_1.soilMoisture)({ reporting: rareReporting }),
            (0, modernExtend_1.battery)({
                voltage: true,
                voltageReportingConfig: rareReporting,
                percentageReportingConfig: rareReporting,
            }),
            (0, modernExtend_1.numeric)({
                name: 'report_delay',
                unit: 'min',
                valueMin: 1,
                valueMax: 180,
                cluster: 'genPowerCfg',
                attribute: { ID: 0x0201, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Adjust Report Delay, by default 60 minutes',
            }),
        ],
    },
    {
        zigbeeModel: ['EFEKTA_eON213wz'],
        model: 'EFEKTA_eON213wz',
        vendor: 'EFEKTA',
        description: 'Mini weather station, digital barometer, forecast, charts, temperature, humidity',
        extend: [
            (0, modernExtend_1.battery)({
                voltage: true,
                voltageReportingConfig: rareReporting,
                percentageReportingConfig: rareReporting,
            }),
            (0, modernExtend_1.temperature)({ reporting: rareReporting }),
            (0, modernExtend_1.humidity)({ reporting: rareReporting }),
            (0, modernExtend_1.pressure)({ reporting: rareReporting }),
        ],
    },
    {
        zigbeeModel: ['EFEKTA_THP'],
        model: 'EFEKTA_THP',
        vendor: 'EFEKTA',
        description: 'DIY temperature, humidity and atmospheric pressure sensor, long battery life',
        extend: [
            (0, modernExtend_1.battery)({
                voltage: true,
                voltageReportingConfig: rareReporting,
                percentageReportingConfig: rareReporting,
            }),
            (0, modernExtend_1.temperature)({ reporting: rareReporting }),
            (0, modernExtend_1.humidity)({ reporting: rareReporting }),
            (0, modernExtend_1.pressure)({ reporting: rareReporting }),
        ],
    },
    {
        zigbeeModel: ['EFEKTA_PWS_Max'],
        model: 'EFEKTA_PWS_Max',
        vendor: 'EFEKTA',
        description: 'Plant watering sensor EFEKTA PWS max',
        extend: [
            (0, modernExtend_1.soilMoisture)({ reporting: rareReporting }),
            (0, modernExtend_1.battery)({
                voltage: true,
                voltageReportingConfig: rareReporting,
                percentageReportingConfig: rareReporting,
            }),
            (0, modernExtend_1.illuminance)({ reporting: rareReporting }),
            (0, modernExtend_1.temperature)({ reporting: rareReporting }),
            (0, modernExtend_1.humidity)({ reporting: rareReporting }),
        ],
    },
    {
        zigbeeModel: ['EFEKTA_PWS_MaxPro'],
        model: 'EFEKTA_PWS_MaxPro',
        vendor: 'EFEKTA',
        description: 'Plant watering sensor EFEKTA PWS Max Pro,  long battery life',
        extend: [
            (0, modernExtend_1.soilMoisture)({ reporting: rareReporting }),
            (0, modernExtend_1.battery)({
                voltage: true,
                voltageReportingConfig: rareReporting,
                percentageReportingConfig: rareReporting,
            }),
            (0, modernExtend_1.illuminance)({ reporting: rareReporting }),
            (0, modernExtend_1.temperature)({ reporting: rareReporting }),
            (0, modernExtend_1.humidity)({ reporting: rareReporting }),
        ],
    },
    {
        zigbeeModel: ['EFEKTA_eON29wz'],
        model: 'EFEKTA_eON29wz',
        vendor: 'EFEKTA',
        description: 'Mini weather station, barometer, forecast, charts, temperature, humidity, light',
        extend: [
            (0, modernExtend_1.battery)({
                voltage: true,
                voltageReportingConfig: rareReporting,
                percentageReportingConfig: rareReporting,
            }),
            (0, modernExtend_1.illuminance)({ reporting: rareReporting }),
            (0, modernExtend_1.temperature)({ reporting: rareReporting }),
            (0, modernExtend_1.humidity)({ reporting: rareReporting }),
            (0, modernExtend_1.pressure)({ reporting: rareReporting }),
        ],
    },
    {
        zigbeeModel: ['EFEKTA_eFlower_Pro'],
        model: 'EFEKTA_eFlower_Pro',
        vendor: 'EFEKTA',
        description: 'Plant Wattering Sensor with e-ink display 2.13',
        extend: [
            (0, modernExtend_1.soilMoisture)({ reporting: rareReporting }),
            (0, modernExtend_1.battery)({
                voltage: true,
                voltageReportingConfig: rareReporting,
                percentageReportingConfig: rareReporting,
            }),
            (0, modernExtend_1.illuminance)({ reporting: rareReporting }),
            (0, modernExtend_1.temperature)({ reporting: rareReporting }),
            (0, modernExtend_1.humidity)({ reporting: rareReporting }),
        ],
    },
    {
        zigbeeModel: ['EFEKTA_eTH102'],
        model: 'EFEKTA_eTH102',
        vendor: 'EFEKTA',
        description: 'Mini digital thermometer & hygrometer with e-ink1.02',
        extend: [
            (0, modernExtend_1.battery)({
                voltage: true,
                voltageReportingConfig: rareReporting,
                percentageReportingConfig: rareReporting,
            }),
            (0, modernExtend_1.temperature)({ reporting: rareReporting }),
            (0, modernExtend_1.humidity)({ reporting: rareReporting }),
        ],
    },
    {
        zigbeeModel: ['EFEKTA_iAQ'],
        model: 'EFEKTA_iAQ',
        vendor: 'EFEKTA',
        description: 'CO2 Monitor with IPS TFT Display, outdoor temperature and humidity, date and time',
        extend: [
            (0, modernExtend_1.co2)({ reporting: normalReporting }),
            (0, modernExtend_1.temperature)({ reporting: normalReporting }),
            (0, modernExtend_1.humidity)({ reporting: normalReporting }),
            (0, modernExtend_1.illuminance)({ reporting: normalReporting }),
            (0, modernExtend_1.binary)({
                name: 'auto_brightness',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0203, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Enable or Disable Auto Brightness of the Display',
            }),
            (0, modernExtend_1.binary)({
                name: 'long_chart_period',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0204, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'The period of plotting the CO2 level(OFF - 1H | ON - 24H)',
            }),
            (0, modernExtend_1.numeric)({
                name: 'set_altitude',
                unit: 'meters',
                valueMin: 0,
                valueMax: 3000,
                cluster: 'msCO2',
                attribute: { ID: 0x0205, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Setting the altitude above sea level (for high accuracy of the CO2 sensor)',
            }),
            (0, modernExtend_1.numeric)({
                name: 'temperature_offset',
                unit: '°C',
                valueMin: -50,
                valueMax: 50,
                valueStep: 0.1,
                scale: 10,
                cluster: 'msTemperatureMeasurement',
                attribute: { ID: 0x0210, type: zigbee_herdsman_1.Zcl.DataType.INT16 },
                description: 'Adjust temperature',
            }),
            (0, modernExtend_1.numeric)({
                name: 'humidity_offset',
                unit: '%',
                valueMin: -50,
                valueMax: 50,
                valueStep: 1,
                cluster: 'msRelativeHumidity',
                attribute: { ID: 0x0210, type: zigbee_herdsman_1.Zcl.DataType.INT16 },
                description: 'Adjust humidity',
            }),
            (0, modernExtend_1.binary)({
                name: 'forced_recalibration',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0202, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Start FRC (Perform Forced Recalibration of the CO2 Sensor)',
            }),
            (0, modernExtend_1.binary)({
                name: 'factory_reset_co2',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0206, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Factory Reset CO2 sensor',
            }),
            (0, modernExtend_1.numeric)({
                name: 'manual_forced_recalibration',
                unit: 'ppm',
                valueMin: 0,
                valueMax: 5000,
                cluster: 'msCO2',
                attribute: { ID: 0x0207, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Start Manual FRC (Perform Forced Recalibration of the CO2 Sensor)',
            }),
        ],
    },
    {
        zigbeeModel: ['EFEKTA_CO2_Smart_Monitor'],
        model: 'EFEKTA_CO2_Smart_Monitor',
        vendor: 'EFEKTA',
        description: 'EFEKTA CO2 Smart Monitor, ws2812b indicator, can control the relay, binding',
        extend: [
            (0, modernExtend_1.co2)({ reporting: normalReporting }),
            (0, modernExtend_1.temperature)({ reporting: normalReporting }),
            (0, modernExtend_1.humidity)({ reporting: normalReporting }),
            (0, modernExtend_1.binary)({
                name: 'light_indicator',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0211, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Enable or Disable light indicator',
            }),
            (0, modernExtend_1.numeric)({
                name: 'light_indicator_level',
                unit: '%',
                valueMin: 0,
                valueMax: 100,
                cluster: 'msCO2',
                attribute: { ID: 0x0209, type: zigbee_herdsman_1.Zcl.DataType.UINT8 },
                description: 'Light indicator level',
            }),
            (0, modernExtend_1.numeric)({
                name: 'set_altitude',
                unit: 'meters',
                valueMin: 0,
                valueMax: 3000,
                cluster: 'msCO2',
                attribute: { ID: 0x0205, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Setting the altitude above sea level (for high accuracy of the CO2 sensor)',
            }),
            (0, modernExtend_1.numeric)({
                name: 'temperature_offset',
                unit: '°C',
                valueMin: -50,
                valueMax: 50,
                valueStep: 0.1,
                scale: 10,
                cluster: 'msTemperatureMeasurement',
                attribute: { ID: 0x0210, type: zigbee_herdsman_1.Zcl.DataType.INT16 },
                description: 'Adjust temperature',
            }),
            (0, modernExtend_1.numeric)({
                name: 'humidity_offset',
                unit: '%',
                valueMin: -50,
                valueMax: 50,
                valueStep: 1,
                cluster: 'msRelativeHumidity',
                attribute: { ID: 0x0210, type: zigbee_herdsman_1.Zcl.DataType.INT16 },
                description: 'Adjust humidity',
            }),
            (0, modernExtend_1.binary)({
                name: 'forced_recalibration',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0202, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Start FRC (Perform Forced Recalibration of the CO2 Sensor)',
            }),
            (0, modernExtend_1.binary)({
                name: 'factory_reset_co2',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0206, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Factory Reset CO2 sensor',
            }),
            (0, modernExtend_1.numeric)({
                name: 'manual_forced_recalibration',
                unit: 'ppm',
                valueMin: 0,
                valueMax: 5000,
                cluster: 'msCO2',
                attribute: { ID: 0x0207, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Start Manual FRC (Perform Forced Recalibration of the CO2 Sensor)',
            }),
            (0, modernExtend_1.binary)({
                name: 'enable_gas',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msCO2',
                attribute: { ID: 0x0220, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Enable CO2 Gas Control',
            }),
            (0, modernExtend_1.numeric)({
                name: 'high_gas',
                unit: 'ppm',
                valueMin: 400,
                valueMax: 2000,
                cluster: 'msCO2',
                attribute: { ID: 0x0221, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Setting High CO2 Gas Border',
            }),
            (0, modernExtend_1.numeric)({
                name: 'low_gas',
                unit: 'ppm',
                valueMin: 400,
                valueMax: 2000,
                cluster: 'msCO2',
                attribute: { ID: 0x0222, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Setting Low CO2 Gas Border',
            }),
            (0, modernExtend_1.binary)({
                name: 'enable_temperature',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msTemperatureMeasurement',
                attribute: { ID: 0x0220, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Enable Temperature Control',
            }),
            (0, modernExtend_1.numeric)({
                name: 'high_temperature',
                unit: '°C',
                valueMin: -5,
                valueMax: 50,
                cluster: 'msTemperatureMeasurement',
                attribute: { ID: 0x0221, type: zigbee_herdsman_1.Zcl.DataType.INT16 },
                description: 'Setting High Temperature Border',
            }),
            (0, modernExtend_1.numeric)({
                name: 'low_temperature',
                unit: '°C',
                valueMin: -5,
                valueMax: 50,
                cluster: 'msTemperatureMeasurement',
                attribute: { ID: 0x0222, type: zigbee_herdsman_1.Zcl.DataType.INT16 },
                description: 'Setting Low Temperature Border',
            }),
            (0, modernExtend_1.binary)({
                name: 'enable_humidity',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msRelativeHumidity',
                attribute: { ID: 0x0220, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Enable Humidity Control',
            }),
            (0, modernExtend_1.numeric)({
                name: 'high_humidity',
                unit: '%',
                valueMin: 0,
                valueMax: 99,
                cluster: 'msRelativeHumidity',
                attribute: { ID: 0x0221, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Setting High Humidity Border',
            }),
            (0, modernExtend_1.numeric)({
                name: 'low_humidity',
                unit: '%',
                valueMin: 0,
                valueMax: 99,
                cluster: 'msRelativeHumidity',
                attribute: { ID: 0x0222, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Setting Low Humidity Border',
            }),
        ],
    },
    {
        zigbeeModel: ['SNZB-02_EFEKTA'],
        model: 'SNZB-02_EFEKTA',
        vendor: 'EFEKTA',
        description: 'Alternative firmware for the SONOFF SNZB-02 sensor from EfektaLab, DIY',
        extend: [
            (0, modernExtend_1.battery)({
                voltage: true,
                voltageReportingConfig: rareReporting,
                percentageReportingConfig: rareReporting,
            }),
            (0, modernExtend_1.temperature)({ reporting: rareReporting }),
            (0, modernExtend_1.humidity)({ reporting: rareReporting }),
            (0, modernExtend_1.numeric)({
                name: 'report_delay',
                unit: 'min',
                valueMin: 1,
                valueMax: 60,
                cluster: 'genPowerCfg',
                attribute: { ID: 0x0201, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Adjust Report Delay. Setting the time in minutes, by default 5 minutes',
            }),
            (0, modernExtend_1.binary)({
                name: 'enable_temperature',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msTemperatureMeasurement',
                attribute: { ID: 0x0220, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Enable Temperature Control',
            }),
            (0, modernExtend_1.numeric)({
                name: 'high_temperature',
                unit: '°C',
                valueMin: -5,
                valueMax: 50,
                cluster: 'msTemperatureMeasurement',
                attribute: { ID: 0x0221, type: zigbee_herdsman_1.Zcl.DataType.INT16 },
                description: 'Setting High Temperature Border',
            }),
            (0, modernExtend_1.numeric)({
                name: 'low_temperature',
                unit: '°C',
                valueMin: -5,
                valueMax: 50,
                cluster: 'msTemperatureMeasurement',
                attribute: { ID: 0x0222, type: zigbee_herdsman_1.Zcl.DataType.INT16 },
                description: 'Setting Low Temperature Border',
            }),
            (0, modernExtend_1.binary)({
                name: 'enable_humidity',
                valueOn: ['ON', 1],
                valueOff: ['OFF', 0],
                cluster: 'msRelativeHumidity',
                attribute: { ID: 0x0220, type: zigbee_herdsman_1.Zcl.DataType.BOOLEAN },
                description: 'Enable Humidity Control',
            }),
            (0, modernExtend_1.numeric)({
                name: 'high_humidity',
                unit: '%',
                valueMin: 0,
                valueMax: 99,
                cluster: 'msRelativeHumidity',
                attribute: { ID: 0x0221, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Setting High Humidity Border',
            }),
            (0, modernExtend_1.numeric)({
                name: 'low_humidity',
                unit: '%',
                valueMin: 0,
                valueMax: 99,
                cluster: 'msRelativeHumidity',
                attribute: { ID: 0x0222, type: zigbee_herdsman_1.Zcl.DataType.UINT16 },
                description: 'Setting Low Humidity Border',
            }),
        ],
    },
];
exports.default = definitions;
module.exports = definitions;
//# sourceMappingURL=efekta.js.map