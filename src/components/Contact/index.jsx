import { Component } from "react";
import './styles.css';
import my from '../../../src/assets/img/eu.jpg';
import profile2 from '../../../src/assets/img/profile-2.jpeg';
import profile3 from '../../../src/assets/img/profile-3.jpeg';
import profile4 from '../../../src/assets/img/profile-4.jpg';
import profile5 from '../../../src/assets/img/profile-5.jpg';
import profile6 from '../../../src/assets/img/profile-6.jpg';
import profile7 from '../../../src/assets/img/profile-7.jpeg';
import profile8 from '../../../src/assets/img/profile-8.jpg';
import profile9 from '../../../src/assets/img/profile-9.jpg';
import profile10 from '../../../src/assets/img/profile-10.jpg';
export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: [
                {
                    id: 1,
                    img: my,
                    name: 'Douglas Bastos',
                    visualization: false,
                    message: 'Oi, tudo bem com você?'
                },
                {
                    id: 2,
                    img: profile2,
                    name: 'Helena Borges',
                    visualization: false,
                    message: 'Lorem ipsum dolor, sit amet consectetur?'
                },
                {
                    id: 3,
                    img: profile3,
                    name: 'Alice Araújo',
                    visualization: false,
                    message: 'Lorem ipsum dolor, sit amet consectetur?'
                },
                {
                    id: 4,
                    img: profile4,
                    name: 'Laura Alves',
                    visualization: false,
                    message: 'Lorem ipsum dolor, sit amet consectetur?'
                },
                {
                    id: 5,
                    img: profile5,
                    name: 'Maria Alice',
                    visualization: false,
                    message: 'Lorem ipsum dolor, sit amet consectetur?'
                },
                {
                    id: 6,
                    img: profile6,
                    name: 'Sophia Amélia',
                    visualization: false,
                    message: 'Lorem ipsum dolor, sit amet consectetur?'
                },
                {
                    id: 7,
                    img: profile7,
                    name: 'Manuela Brito',
                    visualization: false,
                    message: 'Lorem ipsum dolor, sit amet consectetur?'
                },
                {
                    id: 8,
                    img: profile8,
                    name: 'Cecília Betine',
                    visualization: false,
                    message: 'Lorem ipsum dolor, sit amet consectetur?'
                },
                {
                    id: 9,
                    img: profile9,
                    name: 'Isabella Barreto',
                    visualization: false,
                    message: 'Lorem ipsum dolor, sit amet consectetur?'
                },
                {
                    id: 10,
                    img: profile10,
                    name: 'Arthur Barbosa',
                    visualization: false,
                    message: 'Lorem ipsum dolor, sit amet consectetur?'
                }
            ]
        }
    }

    contactsLenght = () => {
        return this.state.contacts.length;
    }

    render() {
        const { contacts } = this.state;

        return (
            <div className="contact">
                <img src={contacts[this.props.id].img} alt="Pessoa" />

                <div>
                    <div>
                        <h2>{contacts[this.props.id].name}</h2>
                        <p>04/02/2001</p>
                    </div>

                    <div>
                        <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 18 18"><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                        <p>{contacts[this.props.id].message}</p>
                    </div>
                </div>
            </div>
        );
    }
}

const contact = new Contact();

export let contactsLenght = contact.contactsLenght();
