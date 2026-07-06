export const honorsData = {
  cards: [
    {
      id: "hon-usaco-intl",
      title: "USACO — 80th Internationally",
      sub: "U.S.A. Computing Olympiad",
      tags: [
        { label: "80th intl", type: "y" },
        { label: "Platinum", type: "p" },
        { label: "algorithms",      type: "p" },
      ],
      defaultOpen: true,
      body: [
        {
          type: "prose",
          text: "Ranked {yellow:80th internationally} and reached the USACO Platinum division. Problems require recognizing non-obvious reductions under time pressure.",
        },
        {
          type: "bullets",
          items: [
            "Lazy segment tree · centroid decomposition · convex hull trick",
            "Dinic's max flow · Tarjan's SCC · Gaussian elim on GF(2)",
            "Many Platinum competitors represent the US at IOI",
          ],
        },
      ],
    },
    {
      id: "hon-citadel",
      title: "Discover Citadel",
      sub: "Citadel",
      tags: [
        { label: "selected", type: "g" },
        { label: "markets", type: "p" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Selected for Discover Citadel, connecting quantitative problem solving with markets and engineering.",
        },
      ],
    },
    {
      id: "hon-phys",
      title: "PhysicsBowl — 18th Internationally",
      sub: "AAPT · 2nd in U.S. Northeast",
      tags: [
        { label: "18th / ~3000", type: "y" },
        { label: "physics",      type: "t" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Multiple-choice physics exam taken by ~3,000 students globally. Topics: mechanics, E&M, thermodynamics, modern physics, optics. {yellow:18th globally}.",
        },
      ],
    },
    {
      id: "hon-math",
      title: "Mathematics Awards",
      sub: "AMC 12 · ARML · Cambridge",
      tags: [
        { label: "AMC 12 1st", type: "y" },
        { label: "AIME",       type: "y" },
        { label: "Cambridge",  type: "p" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "bullets",
          items: [
            "{yellow:1st Place AMC 12} — top score nationally. AIME qualifier (unable to take due to scheduling).",
            "{yellow:Connecticut State Team} — American Regional Math League (ARML). Team relay + individual rounds.",
            "{purple:CCIR STEM Scholar} — Quantum Computing. Grover's, Shor's, QEC basics.",
          ],
        },
      ],
    },
    {
      id: "hon-teams",
      title: "TEAMS Engineering Competition",
      sub: "2nd Place in CT · Nationals Qualifier",
      tags: [
        { label: "2nd in CT",   type: "y" },
        { label: "engineering", type: "t" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "2nd Place in Connecticut, qualifying for the national TEAMS (Tests of Engineering Aptitude, Mathematics, and Science) competition.",
        },
      ],
    },
    {
      id: "hon-csef",
      title: "Connecticut Science and Engineering Fair",
      sub: "Finalist · Medalist",
      tags: [
        { label: "finalist",  type: "y" },
        { label: "medalist",  type: "g" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Finalist and medalist at the Connecticut Science and Engineering Fair.",
        },
      ],
    },
    {
      id: "hon-dept",
      title: "Departmental Honors — Loomis Chaffee",
      sub: "Math · Science · Social Science · English",
      tags: [
        { label: "math 3×",         type: "p" },
        { label: "science 2×",      type: "t" },
        { label: "social sci 2×",   type: "o" },
        { label: "english",         type: "y" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "bullets",
          items: [
            "{purple:3× Math Departmental Honors} — Loomis Chaffee School",
            "{teal:2× Science Departmental Honors} — Loomis Chaffee School. Includes Junior Science Departmental Award.",
            "{orange:2× Social Science Departmental Honors} — Loomis Chaffee School",
            "{yellow:English Departmental Honor} — Loomis Chaffee School",
            "{purple:Junior Math Departmental Award} — Loomis Chaffee School",
          ],
        },
      ],
    },
    {
      id: "hon-music",
      title: "Top 100 Kendrick Lamar Listener",
      sub: "Apple Music · 2024",
      tags: [
        { label: "top 100", type: "y" },
        { label: "2024",    type: "g" },
      ],
      defaultOpen: false,
      body: [
        {
          type: "prose",
          text: "Ranked in the top 100 Kendrick Lamar listeners globally on Apple Music in 2024.",
        },
      ],
    },
  ],
};
