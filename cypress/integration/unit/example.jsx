import React from "react";
import { LandingPage } from "../../../src/components/LandingPage/LandingPage";
import fixReactDomScope from "../../support/fixReactDomScope";

beforeEach(() => {
  fixReactDomScope(window);
});

describe("When using Cypress react unit testing plugin", () => {
  it("should be able to mount individual components for test", () => {
    cy.mount(<LandingPage />);
    cy.contains("Not Implemented Yet");
  });
});
