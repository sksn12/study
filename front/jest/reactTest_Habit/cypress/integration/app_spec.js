/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";

describe("Habit Tracker", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("renders", () => {
    cy.findByText("Habit Tracker").should("exist");
  });
  it("add test", () => {
    cy.findByPlaceholderText("Habit").type("New Habit");
    cy.findByText("Add").click();
    cy.findAllByTestId("habit-name").last().should("have.text", "New Habit");
    cy.findAllByTestId("habit-count").last().should("have.text", "0");
  });
  it("total count test", () => {
    cy.findAllByTitle("increase").first().click();
    cy.findAllByTestId("habit-count").first().should("have.text", "1");
    cy.findByTestId("total-count").should("have.text", "1");
  });
  it("reset to 0 when clicking reset all", () => {
    cy.findAllByTitle("increase").first().click();
    cy.findAllByTitle("increase").last().click();
    cy.findByText("Reset All").click();
    cy.findAllByTestId("habit-count").each((item) => {
      cy.wrap(item).should("have.text", "0");
    });
  });
});

// describe("Youtube",()=>{
//     beforeEach(()=>{
//         cy.intercept('GET',/(mostPopular)/g,{
//             fixture:'popular.json'
//         }).as('getMostPopular')
//         cy.visit("/")
//     })
//     it("renders",()=>{
//         cy.findByText('Youtube').should("exist")
//     })
//     it("display most popular videos first",()=>{
//         cy.findByText("Test Data:Escape Launch Trailer").should("exist");

//     })
// })
