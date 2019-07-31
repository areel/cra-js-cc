describe("When using Cypress", () => {
  it("should be able to run basic e2e test", () => {
    cy.visit("/");
    cy.get("[data-testid='landing-page']").should("be.visible");
  });
});
