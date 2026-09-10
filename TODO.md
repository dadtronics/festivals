# TODO

- [ ] Lost Lands 2026: allow configurable overlap tolerance in the scheduler.
      Currently `optimizeDay`/`findConflictClusters` treat any time overlap
      as a hard conflict. Add a setting (e.g. minutes of allowed overlap) so
      a user can leave one set early to catch the start of another back-to-back
      pick, instead of the scheduler always treating them as mutually exclusive.
