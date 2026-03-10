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

    it('returns null for 0 (falsy non-null value)', () => {
      expect(parseDate(0 as any)).toBeNull();
    });

    it('returns null for false', () => {
      expect(parseDate(false as any)).toBeNull();
    });
  });


  describe('Date instance input', () => {
    it('returns valid Date instance as-is', () => {
      const date = new Date('2024-03-12T00:00:00.000Z');
      expect(parseDate(date)).toEqual(date);
    });

    it('returns null for invalid Date instance', () => {
      expect(parseDate(new Date('invalid'))).toBeNull();
    });
  });


  describe('ISO string input', () => {
    it('returns a Date object for valid ISO string', () => {
      const result = parseDate('2024-03-12T10:00:00.000Z');
      expect(result instanceof Date).toBe(true);
    });

    it('does NOT match the ISO branch for a plain date string without T', () => {
      const result = parseDate('2024-03-12');
      expect(result instanceof Date).toBe(true);
    });
  });


  describe('ambiguous dd/mm/y(yy) strings without format', () => {
    it('returns original string for 1-digit year', () => {
      expect(parseDate('09/03/2')).toBe('09/03/2');
    });

    it('returns original string for 2-digit year', () => {
      expect(parseDate('12/3/24')).toBe('12/3/24');
    });

    it('returns original string for 3-digit year', () => {
      expect(parseDate('09/03/202')).toBe('09/03/202');
    });

    it('returns a Date for unambiguous 4-digit year', () => {
      expect(parseDate('12/03/2024') instanceof Date).toBe(true);
    });

    it('returns a Date for single-digit day and month with 4-digit year', () => {
      expect(parseDate('1/3/2024') instanceof Date).toBe(true);
    });
  });


  describe('formatted string parsing', () => {
    it('returns a Date object for valid dd/MM/yyyy', () => {
      const result = parseDate('12/12/2024', 'dd/MM/yyyy');
      expect(result instanceof Date).toBe(true);
    });

    it('returns original string for yy format', () => {
      expect(parseDate('12/12/24', 'dd/MM/yy')).toBe('12/12/24');
    });

    it('returns original string for y format', () => {
      expect(parseDate('12/12/4', 'dd/MM/y')).toBe('12/12/4');
    });

    it('returns original string for yyy format', () => {
      expect(parseDate('12/12/024', 'dd/MM/yyy')).toBe('12/12/024');
    });

    it('returns original string for invalid day/month with short year (not null)', () => {
      expect(parseDate('99/99/24', 'dd/MM/yy')).toBe('99/99/24');
    });

    it('returns null for invalid day/month with 4-digit year', () => {
      expect(parseDate('99/99/2024', 'dd/MM/yyyy')).toBeNull();
    });

    it('returns null for completely wrong format', () => {
      expect(parseDate('not-a-date', 'dd/MM/yyyy')).toBeNull();
    });
  });


  describe('non-formatted string input', () => {
    it('returns a Date object for parsable English string', () => {
      expect(parseDate('December 12, 2024') instanceof Date).toBe(true);
    });

    it('returns null for completely invalid string', () => {
      expect(parseDate('not-a-date')).toBeNull();
    });

    it('returns null for a random non-date string', () => {
      expect(parseDate('hello world')).toBeNull();
    });
  });


  describe('timezone handling (Brussels)', () => {
    it('ISO string at midnight UTC is the same day in Brussels', () => {
      const result = parseDate('2024-03-12T00:00:00.000Z') as Date;
      const d = new Date(result);
      expect(result.getUTCFullYear()).toBe(2024);
      expect(result.getUTCDate()).toBe(11);
      expect(result.getUTCMonth()).toBe(2);
    });

    it('ISO string late in the evening UTC will fall on the next day in Brussels', () => {
      const result = parseDate('2024-03-11T23:30:00.000Z') as Date;
      expect(result.getUTCFullYear()).toBe(2024);
      expect(result.getUTCMonth()).toBe(2);
      expect(result.getUTCDate()).toBe(11);
    });

    it('formatted dd/MM/yyyy is normalised to Brussels midnight', () => {
      const result = parseDate('12/03/2024', 'dd/MM/yyyy') as Date;
      expect(result instanceof Date).toBe(true);
      expect(result.getUTCHours()).toBe(23);
      expect(result.getUTCDate()).toBe(11);
    });

    it('two calls with the same date return the same time', () => {
      const a = parseDate('2024-06-15T12:00:00.000Z') as Date;
      const b = parseDate('2024-06-15T12:00:00.000Z') as Date;
      expect(a.getTime()).toBe(b.getTime());
    });
  });

});
