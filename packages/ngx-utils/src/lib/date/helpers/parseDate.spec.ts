import parseDate from './parseDate';

const isValidDate = (value: unknown): value is Date =>
  value instanceof Date && !isNaN(value.getTime());


const expectLocalDate = (date: Date, y: number, m: number, d: number) => {
  expect(date.getFullYear()).toBe(y);
  expect(date.getMonth()).toBe(m); // JS months: 0-11
  expect(date.getDate()).toBe(d);
}

describe('parseDate', () => {
  describe('invalid inputs', () => {
    it('returns null for undefined', () => {
      expect(parseDate(undefined)).toBeNull();
    });

    it('returns null for null', () => {
      expect(parseDate(null)).toBeNull();
    });

    it('returns null for empty string', () => {
      expect(parseDate('')).toBeNull();
    });

    it('returns null for array input', () => {
      expect(parseDate([] as any)).toBeNull();
    });
  });

  describe('Date instance input', () => {
    it('returns valid Date instance as-is', () => {
      const date = new Date(2024, 11, 12);
      const result = parseDate(date);

      expect(result).toEqual(date);
    });

    it('returns null for invalid Date instance', () => {
      const invalidDate = new Date('invalid');
      expect(parseDate(invalidDate)).toBeNull();
    });
  });

  describe('ISO string input', () => {
    it('parses ISO string correctly', () => {
      const iso = '2024-12-12T10:00:00.000Z';
      const result = parseDate(iso);

      expect(isValidDate(result)).toBe(true);

      const date = result as Date;
      expectLocalDate(date, 2024, 11, 12);
    });

    it('returns null for invalid ISO string', () => {
      const iso = 'not-a-date';
      expect(parseDate(iso)).toBeNull();
    });
  });

  describe('formatted string parsing', () => {
    it('parses valid dd/MM/yyyy format', () => {
      const result = parseDate('12/12/2024', 'dd/MM/yyyy');

      expect(isValidDate(result)).toBe(true);

      const date = result as Date;
      expectLocalDate(date, 2024, 11, 12);
    });

    it('returns original string when using yy', () => {
      const result = parseDate('12/12/24', 'dd/MM/yy');
      expect(result).toBe('12/12/24');
    });

    it('returns original string when using y', () => {
      const result = parseDate('12/12/4', 'dd/MM/y');
      expect(result).toBe('12/12/4');
    });

    it('returns original string when using yyy', () => {
      const result = parseDate('12/12/024', 'dd/MM/yyy');
      expect(result).toBe('12/12/024');
    });

    it('returns null for invalid formatted date', () => {
      const result = parseDate('99/99/2024', 'dd/MM/yyyy');
      expect(result).toBeNull();
    });
  });

  describe('non-formatted string input', () => {
    it('parses Date.parse compatible string', () => {
      const result = parseDate('December 12, 2024');

      expect(isValidDate(result)).toBe(true);

      const date = result as Date;
      expect(date.getFullYear()).toBe(2024);
    });

    it('returns null for completely invalid string', () => {
      expect(parseDate('not-a-date')).toBeNull();
    });
  });

  describe('regression guard', () => {
    it('never silently converts short year into 19xx', () => {
      const result = parseDate('12/12/24', 'dd/MM/yy');

      expect(result instanceof Date).toBe(false);
      expect(result).toBe('12/12/24');
    });
  });
});
