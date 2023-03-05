describe("Landing Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  describe("When landing page render correctly", () => {
    it("should have two buttons and nav bar", () => {
      //add NAV bar testing
      cy.get(".header-nav").should("contain", "My Meal Plan");
      cy.get(".fa-duotone").should("be.visible");
      cy.get(".get-ideas").should("contain", "Get Meal Ideas");
      cy.get(".view-weekly").should("contain", "See My Weekly Meals");
    });
    it("should render recipes card correctly when the generate button was clicked", () => {
      cy.intercept(
        {
          method: "GET",
          url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=4",
        },
        { fixture: "recipes" }
      );
      cy.get(".get-ideas").click();
      cy.get(".display-random > :nth-child(1)")
        .should("be.visible")
        .contains(".card-title", "Ramen Chicken Noodle");
      //image
      cy.get(".display-random > :nth-child(1) > button").should("be.visible");

      //button for add to planner
    });
    it("should have correct link in the weekly meal plan button", () => {
      cy.get(".view-weekly").click().url().should("include", "/weekly-plan");
    });
  });
  describe("When API return an error", () => {
    it("Should show error message", () => {
      const errorAPI = {
        error: "Something wrong with server",
      };

      cy.visit("http://localhost:3000")
        .intercept(
          "get",
          "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=4",
          {
            statusCode: 404,
            body: errorAPI,
          }
        )
        .get(".get-ideas")
        .click();
      cy.get(".submitErrorMessage")
        .find("p")
        .should("contain", "Unable To Fetch Your Data. Try Later.");
    });
  });
});
