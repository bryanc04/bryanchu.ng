# Portfolio content provenance

This refresh restores an awards-first personal portfolio. It does not add new
credentials. Historical source versions remain available in git.

- `terminal` commit `0049f21`: USACO 80th internationally / Platinum, PhysicsBowl
  18th internationally / 2nd U.S. Northeast, Discover Citadel, CT State Team/ARML,
  CCIR, TEAMS, CSEF, departmental honors, publications, degree and contact links.
- `terminal` commit `7344577`: Non-Trivial Fellowship award and the same PhysicsBowl
  placement. The refresh uses the conservative “Award recipient” wording from
  `master` commit `a81d4f5`, rather than emphasizing a monetary amount.
- `master` commit `a81d4f5`, `src/components/awards/awards.tsx`: AMC 12 highest
  scorer at Loomis Chaffee. The old terminal copy said “top score nationally,”
  which conflicts with this more specific source; the refresh uses school-level
  wording and does not repeat the national claim.
- Older `master` commit `8249020` says PhysicsBowl 20th, while both terminal
  versions and newer master say 18th. This refresh preserves the current terminal
  figure, not the older conflicting one.
- Paper titles and DOI links: `master` research component at `a81d4f5` and terminal
  research data at `0049f21`. Descriptions are shortened without new claims.

The personal Apple Music recognition is intentionally separated from academic
awards. Founder/company-focused content, the resume-style experience sections,
and the simulated terminal have been removed from the published UI as requested.

# Deployment

Existing production is https://www.bryanchu.ng and returns Netlify Edge headers.
Its HTML matches this repository's `terminal` branch, not default `master`.
No checked-in Netlify configuration or GitHub Actions workflow exists. The latest
terminal commit has no GitHub status checks; automatic branch-to-site deployment
has not been independently verified. Do not change hosting or merge to production
without approval and confirmation of the existing Netlify branch configuration.
