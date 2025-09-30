export default function toUtcMidnightInBrussels(year: number, month: number, day: number): string {
  const utcDate = new Date(Date.UTC(year, month, day, 0, 0, 0));
  const brusselsDate = new Date(utcDate.toLocaleString('en-US', { timeZone: 'Europe/Brussels' }));
  const utcBrusselsDate = new Date(brusselsDate.toLocaleString('en-US', { timeZone: 'UTC' }));
  const offset = utcDate.getTime() - utcBrusselsDate.getTime();

  const brusselsMidnight = new Date(utcDate.getTime() + offset);

  return brusselsMidnight.toISOString();
}
