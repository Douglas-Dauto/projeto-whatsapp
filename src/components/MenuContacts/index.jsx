import { Component } from "react";
import './styles.css';
import SearchContacts from "../SearchContacts";
import Contact from "../Contact";

export default class MenuContacts extends Component {
    render() {
        const contacts = [];

        for(let i = 0; i < 20; i++) {
            contacts[i]= i;
        }

        return (
            <div className="sec-menu">
                <section>
                    <SearchContacts />
                </section>

                <section>
                    {contacts.map((number) => <Contact key={number} />)}
                </section>
            </div>
        );
    }
}