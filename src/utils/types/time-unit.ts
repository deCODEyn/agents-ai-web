export type timeUnitsType = Array<{
  ts: number;
  unit: Intl.RelativeTimeFormatUnit;
  divisor: number;
  now?: string;
}>;
