describe("Weekly meal plan page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/weekly-plan");
  });
  describe("", () => {
    it("passes", () => {
      cy.visit("/weekly-plan");
    });
  });
});
