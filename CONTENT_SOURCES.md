# Scoped terminal portfolio correction

The user explicitly requested keeping the existing interface. The original
terminal UI from `0049f21ed3eae1749120eca063ffc0ea1f5d2f3c` is restored: layout,
ASCII portrait/name, tabs, command shell, themes, boot sequence and side panels.
The editorial redesign is superseded.

Changes relative to that original UI:
- Remove the company-focused references from metadata, boot, help and home.
- Restore pre-company about/home/experience/projects/contact data from `7344577`.
- Restore awards-focused homepage highlights; preserve USACO 80th internationally
  and PhysicsBowl 18th internationally from the original current `0049f21` data.
- Use school-level AMC 12 wording (supported by master `a81d4f5` awards data), not
  the old terminal's contradictory national-score claim.
- Keep the native pointer. Unmount the WebGL trail and custom JS cursor rather
  than making pointer movement depend on rendering work.
- Add reduced-motion and visible keyboard-focus styles without restyling the UI.

Degrees, contact information, publications and music recognition are all carried
from existing source versions; no new credentials are added.

# Verification / deployment

`npm test` builds production and SSR bundles and runs 6 regression checks for the
terminal structure, commands, company removal, pointer behavior, awards and
responsive styles. `npm run lint` checks the full repository.

Existing production is https://www.bryanchu.ng, deployed by Netlify from `terminal`.
The earlier authorized merge verified that existing integration automatically
deploys this branch. No hosting or permission settings were changed.
