import parseDate from './parseDate';

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
      const date = new Date();
      const result = parseDate(date);
      expect(result).toEqual(date);
    });

    it('returns null for invalid Date instance', () => {
      const invalidDate = new Date('invalid');
      expect(parseDate(invalidDate)).toBeNull();
    });
  });

  describe('ISO string input', () => {
    it('returns a Date object for valid ISO string', () => {
      const iso = new Date().toISOString();
      const result = parseDate(iso);
      expect(result instanceof Date).toBe(true);
    });

    it('returns null for invalid ISO string', () => {
      const iso = 'not-a-date';
      expect(parseDate(iso)).toBeNull();
    });
  });

  describe('formatted string parsing', () => {
    it('returns a Date object for valid full-year format', () => {
      const result = parseDate('12/12/2024', 'dd/MM/yyyy');
      expect(result instanceof Date).toBe(true);
    });

    it('returns original string for short-year formats', () => {
      expect(parseDate('12/12/24', 'dd/MM/yy')).toBe('12/12/24');
      expect(parseDate('12/12/4', 'dd/MM/y')).toBe('12/12/4');
      expect(parseDate('12/12/024', 'dd/MM/yyy')).toBe('12/12/024');
    });

    it('returns null for invalid formatted date', () => {
      expect(parseDate('99/99/2024', 'dd/MM/yyyy')).toBeNull();
    });
  });

  describe('non-formatted string input', () => {
    it('returns a Date object for parsable string', () => {
      const result = parseDate('December 12, 2024');
      expect(result instanceof Date).toBe(true);
    });

    it('returns null for completely invalid string', () => {
      expect(parseDate('not-a-date')).toBeNull();
    });
  });
});
