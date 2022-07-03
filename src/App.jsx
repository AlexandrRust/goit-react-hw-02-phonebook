import { Component } from "react";
import { PhoneBookForm } from "components/PhoneBookForm";
import { Section } from "components/Section/Section.styled";
import { FhoneBookTitle } from "components/Title/Title";




export class App extends Component {
  
  state = {
    contacts: [],
    name: ''
  };
  
  
  render() {
    return (
      <Section>
        <FhoneBookTitle text={"Phonebook"}>Phonebook</FhoneBookTitle>
          <PhoneBookForm />
        <FhoneBookTitle text={"Contacts"}></FhoneBookTitle>
      </Section>
    )
    };
};
