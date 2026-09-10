# TODO

- [ ] Lost Lands 2026: allow configurable overlap tolerance in the scheduler.
      Currently `optimizeDay`/`findConflictClusters` treat any time overlap
      as a hard conflict. Add a setting (e.g. minutes of allowed overlap) so
      a user can leave one set early to catch the start of another back-to-back
      pick, instead of the scheduler always treating them as mutually exclusive.
      Example: Space Wizard (Wompy Woods) 1:10-2:05 AM vs. Craze B2B Dieselboy
      (Forest Stage) 2:00-3:00 AM only overlap by 5 minutes, but the app flags
      it as a full conflict — small gaps like this should be tolerable, not
      forced into an either/or pick.
