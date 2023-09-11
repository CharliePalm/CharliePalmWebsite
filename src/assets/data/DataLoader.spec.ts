import { formatDate } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { map, of, tap } from "rxjs";
import { DataLoader } from "./data";

describe('data loader', () => {
  describe('getGigs', () => {
    it('should filter gigs', () => {
      const today = new Date();
      const loader = new DataLoader({ get: () => of([]) } as unknown as HttpClient);

      const result = loader.getGigs();
      result.pipe(
        tap((gigs) => {
          console.log(gigs.map((g) => g.date));
          expect(gigs.length).toBe(4);
        }),
      );
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
      result.pipe(
        map((gigs) => gigs.map((g) => g.description))),
        tap((gigs) => expect(gigs).toEqual(['1', '2', '3', '4'])
      );
    });
  });
});
