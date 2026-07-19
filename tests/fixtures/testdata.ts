export const FinalAssignmentVisualTargets = {
  NAVIGATION: {
    selector:
      ".elementor-element.elementor-element-1df79984.e-con-full.e-flex.no.e-con.e-parent.e-lazyloaded",
    snapshot: "Nav.png",
    index: 0,
  },
  LEADSPACE: {
    selector:
      ".elementor-element.elementor-element-33d23a8d.hero.backward__container.backward__fade.e-flex.e-con-boxed.con--mode--edit.backward-start-bottom.backward__mobile-no.no.e-con.e-parent.e-lazyloaded",
    snapshot: "Herobanner-home.png",
    index: 0,
  },
  OVERVIEW: {
    selector:
      ".elementor-element.elementor-element-7f19a6a1.e-con-full.layout--switched.e-flex.bg--color.bg_backdrop_false.curved_false.no.e-con.e-parent.e-lazyloaded.sc--initialized",
    snapshot: "Overview-home.png",
    index: 0,
  },
  SERVICES: {
    selector: ".pin-spacer.pin-spacer-677231e8",
    snapshot: "Services-home.png",
    index: 0,
  },
  ABOUT: {
    selector: ".pin-spacer.pin-spacer-backward_6e9377fe",
    snapshot: "Our-Story-home.png",
    index: 0,
  },
  SUCCESS: {
    selector:
      ".elementor-element.elementor-element-1e48697.e-con-full.layout--switched.e-flex.bg--color.bg_backdrop_false.curved_false.no.e-con.e-parent.sc--initialized.e-lazyloaded",
    snapshot: "Success-stories-home.png",
    index: 0,
  },
  VIDEO: {
    selector:
      ".elementor-element.elementor-element-3c1d13f0.e-con-full.layout--switched.e-flex.bg--color.bg_backdrop_false.curved_false.no.e-con.e-parent.sc--initialized.e-lazyloaded",
    snapshot: "Featured-Videos-home.png",
    index: 0,
  },
  CONTACT: {
    selector:
      ".elementor-element.elementor-element-1624bbb7.e-con-full.e-flex.bg--color.bg_backdrop_false.curved_false.no.e-con.e-parent.sc--initialized.e-lazyloaded",
    snapshot: "Contact-footer.png",
    index: 0,
  },
  ABOUTUS: {
    selector:
      ".elementor-element.elementor-element-29abfb5a.e-con-full.layout--switched.e-flex.no.e-con.e-parent.e-lazyloaded.sc--initialized",
    snapshot: "About-Hero.png",
    index: 0,
  },
  POLAROID: {
    selector: ".pin-spacer.pin-spacer-7a80972f",
    snapshot: "Module_Values.png",
    index: 0,
  },
  TEAM: {
    selector:
      ".elementor-element.elementor-element-68f34b54.e-con-full.layout--switched.bg-light.e-flex.bg--color.bg_backdrop_false.curved_false.no.e-con.e-parent.sc--initialized.e-lazyloaded",
    snapshot: "Team.png",
    index: 0,
  },

  // Add more modules here following the same pattern:
  // MODULE_NAME: { selector: ".css-class", snapshot: "FigmaExport.png", index: 0 },
} as const;

export type FinalAssignmentVisualTargetKey =
  keyof typeof FinalAssignmentVisualTargets;
