import { Component } from "react";
import './styles.css';
import SearchContacts from "../SearchContacts";
import Contact from "../Contact";
import my from '../../../src/assets/img/eu.jpg';

export default class MenuContacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                img: my,
                name: 'Douglas Bastos',
                visualization: false,
                message: 'Oi, tudo bem com você?'
            }
        ]
    }

    render() {
        const { contacts } = this.state;

        return (
            <div className="sec-menu">
                <section>
                    <SearchContacts />
                </section>

                <section>
                    {contacts.map((contact, index) => <Contact key={contact.id} img={contacts[index].img} name={contacts[index].name} visualization={contacts[index].visualization} message={contacts[index].message} />)}
                </section>
            </div>
        );
    }
}