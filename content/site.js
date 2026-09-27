/* ==========================================================================
   content/site.js — SITE-WIDE CONTENT
   Edit your name, nav links, socials, bio, news and homepage highlights here.
   Everything is plain data; no layout code. Loaded on every page.
   ========================================================================== */

window.SITE = {

  name:  "Zach Park",
  brand: "Zach Park",          // shown in the top-left nav


  /* Top navigation — order = display order. Root-relative hrefs. */

  nav: [

    { label: "about", href: "/about.html" },

    {
      label: "current work",
      href: "/current-work.html",

      children: [

        {
          label: "Underbrush Locomotion",
          href: "/current-work/underbrush.html"
        },

        {
          label: "Terrain Modification",
          href: "/current-work/digging.html"
        },

        {
          label: "Deep-Mud Locomotion",
          href: "/current-work/deep-mud.html"
        },

        {
          label: "Quad-SDK",
          href: "/current-work/quad-sdk.html"
        },

      ]
    },

    {
      label: "research",
      href: "/research.html"
    },

    {
      label: "projects",
      href: "/projects.html"
    },

    {
      label: "experience",
      href: "/experience.html"
    },

    {
      label: "education & teaching",
      href: "/teaching.html"
    },

    {
      label: "outreach",
      href: "/outreach.html"
    },

    {
      label: "cv",
      href: "/cv.html"
    },

  ],


  /* Contact + social links.
     `icon` must match a key in ICONS (scripts/site.js):
     github · scholar · linkedin · email · file · external
  */

  email: "jhyeonpark01@gmail.com",

  cv_pdf: "/assets/pdf/Zach_Park_Resume.pdf",


  socials: [

    {
      label: "Email",
      icon: "email",
      href: "mailto:jhyeonpark01@gmail.com"
    },

    {
      label: "GitHub",
      icon: "github",
      href: "https://github.com/zpark01"
    },


    /*
    ================================================================
    GOOGLE SCHOLAR — HIDDEN FOR NOW

    When you create a Google Scholar profile later,
    replace the URL below and remove the comment markers.

    {
      label: "Google Scholar",
      icon: "scholar",
      href: "YOUR_GOOGLE_SCHOLAR_URL"
    },

    ================================================================
    */


    {
      label: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/jhyeon-park"
    },

  ],


  /* NOTE: the homepage hero (headline, bio, portrait) is written directly in
     index.html — it's the most important content, so it's kept as static HTML
     for search engines. Edit it there. Everything below is rendered by JS. */


  /* ---- Homepage "Featured projects" — custom cards shown FIRST ----------
     Use for non-coursework highlights (e.g. current research). These render
     ahead of the featured course projects (those set featured:true in
     content/projects.js). Each needs: title, meta, desc, thumb, href, tags. */


  featured: [

    /*
    -------------------------------------------------------------------------
    DAVID'S ORIGINAL CURRENT-WORK CARD — HIDDEN FOR NOW

    The current-work pages themselves have NOT been deleted or changed.
    This only prevents David's project from appearing on Zach's homepage.

    {
      title: "Learned Locomotion Through Underbrush",
      meta:  "Current work · Robomechanics Lab",
      desc:  "Learning locomotion and disentanglement policies for quadrupeds in dense, compliant vegetation.",
      thumb: "/assets/img/ongoing/underbrush_thumb.jpg",
      href:  "/current-work/underbrush.html",
      tags:  ["Reinforcement Learning", "Legged Locomotion", "Quad-SDK"],
    },

    -------------------------------------------------------------------------
    */

  ],


  /* ---- News / updates (newest first) ----------------------------------- */

  news: [

    {
      date: "Sep 2026",
      txt: "Joined the <strong>Safe AI Lab</strong> at Carnegie Mellon University."
    },

    {
      date: "Aug 2026",
      txt: "Started the M.S. Mechanical Engineering - Research program at <strong>Carnegie Mellon University</strong>."
    },

    {
      date: "May 2026",
      txt: "Graduated <strong>Summa Cum Laude</strong> from The Cooper Union with a B.E. in Mechanical Engineering and a minor in Bioengineering."
    },

  ],

};
