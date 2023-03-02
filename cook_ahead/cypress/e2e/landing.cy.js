describe("Landing Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  describe("When landing page render correctly", () => {
    it("should have two buttons and nav bar", () => {
      cy.get("#root > main > div > div > button:nth-child(1)").should(
        "contain",
        "Get Meal Ideas"
      );
      cy.get(".view-weekly").should("contain", "See My Weekly Meals");
    });
    it("should render recipes card correctly when the generate button was clicked", () => {
      // cy.intercept(
      //   {
      //     method: "GET",
      //     url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=4",
      //   },
      //   { fixture: "recipes" }
      // );
      //add fixture
      //title of recipes,
      cy.get("#root > main > div > div > button:nth-child(1)").click();
      cy.get(".display-random > :nth-child(1)")
        .should("be.visible")
        .contains("h3", "Ramen Chicken Noodle");
      //image
      cy.get(".display-random > :nth-child(1) > button").should("be.visible");

      //button for add to planner
    });
    it("should have correct link in the weekly meal plan button", () => {
      cy.get(".view-weekly").click();
      cy.url().should("include", "/weekly-plan");
    });
  });
});
