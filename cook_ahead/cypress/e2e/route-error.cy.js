describe("When route doesn't", () => {
    it("Should have error message", () => {
      cy.visit("http://localhost:3000/puff");
      cy.get("h2").should("contain", "Something went wrong...");
    });
  });