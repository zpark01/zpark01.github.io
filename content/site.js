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
   
     /*
     { 
       label: "current work", 
       href: "/current-work.html", 
       children: [
         // 기존 내용 전부 그대로
       ]
     },
     */
   
     /*
     { label: "research", href: "/research.html" },
     */
   
     { label: "experience", href: "/projects.html" },
   
     /*
     { label: "experience", href: "/experience.html" },
     { label: "education & teaching", href: "/teaching.html" },
     { label: "outreach", href: "/outreach.html" },
     */
   
     { label: "cv", href: "/cv.html" },
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
       date: "May 2026",
       txt: "Graduated <strong>Summa Cum Laude</strong> from The Cooper Union with a B.E. in Mechanical Engineering and a minor in Bioengineering."
     },
   
     {
       date: "Oct 2025",
       txt: "Won <a href=\"https://venturewell.org/debut-2025-winners/?utm_source=social&utm_medium=LinkedIn&utm_campaign=P_2025+DEBUT+Outreach+-+Confirmed+Registrants\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>2nd Place in the NIH NIBIB / VentureWell DEBUT Challenge</strong></a>, receiving a $15,000 award."
     },
   
     {
       date: "Sep 2025",
       txt: "Led a team to <a href=\"https://cooper.edu/engineering/news/cooper-team-wins-2nd-place-digital-hackathon\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>2nd Place in the Pfizer Digital Hackathon</strong></a>."
     },
   
     {
       date: "Sep 2024",
       txt: "Won <a href=\"https://cooper.edu/engineering/news/cooper-union-team-takes-second-place-pfizers-first-digital-hackathon\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>2nd Place in Pfizer's Inaugural Digital Hackathon</strong></a>."
     },
   
   ],

};
