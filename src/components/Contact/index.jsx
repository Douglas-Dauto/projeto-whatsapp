import ReactDOM from 'react-dom/client';
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
import HeaderSecChat from "../HeaderSecChat";
import ChatAreaMsg from '../ChatAreaMsg';

let headerSecChat, chatAreaMsg;

setTimeout(() => {
    headerSecChat = ReactDOM.createRoot(document.getElementById('header-sec-chat'));
    chatAreaMsg = ReactDOM.createRoot(document.getElementById('container-chat-area-msg-download-whatsapp'));
}, 10);

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
                    message: {
                        text: 'Tudo, e você?',
                        date: '04/02/2001'
                    },
                    receiveAndSend: [
                        {
                            msg: 'Olá, tudo bem?',
                            tag: 'receive',
                            hour: '11:14'
                        },
                        {
                            msg: 'Tudo, e você?',
                            tag: 'send',
                            hour: '12:01'
                        }
                    ]
                },
                {
                    id: 2,
                    img: profile2,
                    name: 'Helena Borges',
                    visualization: false,
                    message: {
                        text: 'Lorem ipsum dolor, sit amet consectetur?',
                        date: '07/07/2011'
                    },
                    receiveAndSend: [
                        {
                            msg: 'lorem1',
                            tag: 'receive',
                            hour: '14:11'
                        },
                        {
                            msg: 'lorem1',
                            tag: 'send',
                            hour: '15:59'
                        }
                    ]
                },
                {
                    id: 3,
                    img: profile3,
                    name: 'Alice Araújo',
                    visualization: false,
                    message: {
                        text: 'Lorem ipsum dolor, sit amet consectetur?',
                        date: '03/12/2021'
                    },
                    receiveAndSend: [
                        {
                            msg: 'lorem2',
                            tag: 'receive',
                            hour: '13:50'
                        },
                        {
                            msg: 'lorem2',
                            tag: 'send',
                            hour: '15:30'
                        }
                    ]
                },
                {
                    id: 4,
                    img: profile4,
                    name: 'Laura Alves',
                    visualization: false,
                    message: {
                        text: 'Lorem ipsum dolor, sit amet consectetur?',
                        date: '03/01/2010'
                    },
                    receiveAndSend: [
                        {
                            msg: 'lorem3',
                            tag: 'receive',
                            hour: '23:10'
                        },
                        {
                            msg: 'lorem3',
                            tag: 'send',
                            hour: '07:30'
                        }
                    ]
                },
                {
                    id: 5,
                    img: profile5,
                    name: 'Maria Alice',
                    visualization: false,
                    message: {
                        text: 'Lorem ipsum dolor, sit amet consectetur?',
                        date: '05/06/2015'
                    },
                    receiveAndSend: [
                        {
                            msg: 'lorem4',
                            tag: 'receive',
                            hour: '20:10'
                        },
                        {
                            msg: 'lorem4',
                            tag: 'send',
                            hour: '22:22'
                        }
                    ]
                },
                {
                    id: 6,
                    img: profile6,
                    name: 'Sophia Amélia',
                    visualization: false,
                    message: {
                        text: 'Lorem ipsum dolor, sit amet consectetur?',
                        date: '07/05/2009'
                    },
                    receiveAndSend: [
                        {
                            msg: 'lorem5',
                            tag: 'receive',
                            hour: '09:52'
                        },
                        {
                            msg: 'lorem5',
                            tag: 'send',
                            hour: '11:20'
                        }
                    ]
                },
                {
                    id: 7,
                    img: profile7,
                    name: 'Manuela Brito',
                    visualization: false,
                    message: {
                        text: 'Lorem ipsum dolor, sit amet consectetur?',
                        date: '06/02/2020'
                    },
                    receiveAndSend: [
                        {
                            msg: 'lorem7',
                            tag: 'receive',
                            hour: '16:50'
                        },
                        {
                            msg: 'lorem7',
                            tag: 'send',
                            hour: '17:27'
                        }
                    ]
                },
                {
                    id: 8,
                    img: profile8,
                    name: 'Cecília Betine',
                    visualization: false,
                    message: {
                        text: 'Lorem ipsum dolor, sit amet consectetur?',
                        date: '08/05/2011'
                    },
                    receiveAndSend: [
                        {
                            msg: 'lorem8',
                            tag: 'receive',
                            hour: '22;28'
                        },
                        {
                            msg: 'lorem8',
                            tag: 'send',
                            hour: '03:29'
                        }
                    ]
                },
                {
                    id: 9,
                    img: profile9,
                    name: 'Isabella Barreto',
                    visualization: false,
                    message: {
                        text: 'Lorem ipsum dolor, sit amet consectetur?',
                        date: '03/05/2010'
                    },
                    receiveAndSend: [
                        {
                            msg: 'lorem9',
                            tag: 'receive',
                            hour: '16:30'
                        },
                        {
                            msg: 'lorem9',
                            tag: 'send',
                            hour: '18:52'
                        }
                    ]
                },
                {
                    id: 10,
                    img: profile10,
                    name: 'Arthur Barbosa',
                    visualization: false,
                    message: {
                        text: 'Lorem ipsum dolor, sit amet consectetur?',
                        date: '09/09/2009'
                    },
                    receiveAndSend: [
                        {
                            msg: 'lorem10',
                            tag: 'receive',
                            hour: '16:20'
                        },
                        {
                            msg: 'lorem10',
                            tag: 'send',
                            hour: '17:32'
                        }
                    ]
                }
            ]
        }
    }

    contactsLenght = () => {
        return this.state.contacts.length;
    }

    handleShowContact = () => {
        const { contacts } = this.state;
        
        headerSecChat.render(
            <HeaderSecChat name={contacts[this.props.id].name} img={contacts[this.props.id].img} />
        );

        chatAreaMsg.render(
            <ChatAreaMsg lenghtChat={contacts[this.props.id].receiveAndSend.length} receiveAndSend={contacts[this.props.id].receiveAndSend} />
        );

        const containerContact = window.document.getElementsByClassName('contact');

        for(let i = 0; i < containerContact.length; i++) {
            containerContact[i].removeAttribute('style', 'background-color: var(--colorGray);');
        }

        containerContact[this.props.id].setAttribute('style', 'background-color: var(--colorGray);');

        const headerSectionChat = window.document.querySelector('header section:nth-child(2)');

        headerSectionChat.setAttribute('class', 'header-sec-chat-shadow');
    }

    render() {
        const { contacts } = this.state;

        return (
            <div className="contact" onClick={this.handleShowContact}>
                <img src={contacts[this.props.id].img} alt="Pessoa" />

                <div>
                    <div>
                        <h2>{contacts[this.props.id].name}</h2>
                        <p>{contacts[this.props.id].message.date}</p>
                    </div>

                    <div>
                        <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 18 18"><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
                        <p>{contacts[this.props.id].message.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

const contact = new Contact();

export let contactsLenght = contact.contactsLenght();
