describe("Visit login", () => {
  it("Visit home page", () => {
    cy.visit(Cypress.env("CYPRESS_BASE_URL"));

    cy.get('button[name="Connexion"]').click();
  });
});
