import { formatDate } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { DataLoader } from "./data";

describe('data loader', () => {
  describe('getGigs', () => {
    it('should filter gigs', () => {
      const today = new Date();
      const loader = new DataLoader({
        get: jest.fn(() => of([
          {
            description: '1',
            date: today,
          },
          {
            description: '2',
            date: new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()),
          },
          {
            description: '3',
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
          },
          {
            description: '4',
            date: new Date(today.getFullYear() - 1, today.getMonth() - 1, today.getDate()),
          },
          {
            description: '5',
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1),
          },
          {
            description: '6',
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
          },
          {
            description: '7',
            date: new Date(today.getFullYear() + 1, today.getMonth(), today.getDate()),
          },
          {
            description: '8',
            date:
              new Date(today.getFullYear() - 1, today.getMonth() + 8 < 11 ? 11 : today.getMonth() + 8, today.getDate() + 20 > 28 ? 28 : today.getDate() + 20),
          },
        ]))
      } as HttpClient);

      const result = loader.getGigs();
      console.log(result.map((g) => g.date));
      expect(result.length).toBe(4);
    });

    it('should sort gigs', () => {
      const today = new Date();
      const testGigs = [
        {
          description: '3',
          date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
        },
        {
          description: '1',
          date: today,
        },
        {
          description: '4',
          date: new Date(today.getFullYear() + 1, today.getMonth(), today.getDate()),
        },
        {
          description: '2',
          date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
        },
      ];
      const loader = new DataLoader(testGigs);

      const result = loader.getGigs();
      expect(result.map((gig) => gig.description)).toEqual(['1', '2', '3', '4']);
    });
  });
});
