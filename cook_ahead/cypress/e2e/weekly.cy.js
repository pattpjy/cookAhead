const recipesFixture = require("../fixtures/recipes.json");

describe("Weekly meal plan page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.intercept(
      {
        method: "GET",
        url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=4",
      },
      { fixture: "recipes" }
    );
    cy.get(".get-ideas").click();
    cy.get(".add-btn").click();
    cy.get(".view-weekly").click();
  });
  describe("When weekly page render correctly", () => {
    it("should have nav bar and main title", () => {
      cy.get(".header-nav").should("contain", "My Meal Plan");
      cy.get(".fa-duotone").should("be.visible");
      cy.contains("h2", "Weekly Meal Plan");
    });
    it("should render recipe card correctly", () => {
      cy.get(".weekly-card")
        .should("be.visible")
        .contains("h3", recipesFixture.recipes[0].title);

      cy.get(".weekly-card").contains(
        "p",
        recipesFixture.recipes[0].instructions
      );

      cy.get(".weekly-card")
        .find("img")
        .should("have.attr", "src")
        .should("include", recipesFixture.recipes[0].image);
    });
  });
});
