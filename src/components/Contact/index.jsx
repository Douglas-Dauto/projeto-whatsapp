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
import ChatAreaWrite from '../ChatAreaWrite';
import convertHour from '../../utils/convertHour';
import moveScrollMsg from '../../utils/moveScrollMsg';
import { chatAreaWriteObj } from '../ChatAreaWrite';

let headerSecChat, chatAreaMsg, chatAreaWrite;
let controlReactDomChatWrite = true, controlLenghtSvgPath = [], controlButtonSendAndAudio = true;

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
                        text: '',
                        date: ''
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
                        text: '',
                        date: ''
                    },
                    receiveAndSend: [
                        {
                            msg: 'Olá, como vai?',
                            tag: 'receive',
                            hour: '15:14'
                        },
                        {
                            msg: 'Vou bem, e você?',
                            tag: 'send',
                            hour: '18:01'
                        }
                    ]
                },
                {
                    id: 3,
                    img: profile3,
                    name: 'Alice Araújo',
                    visualization: false,
                    message: {
                        text: '',
                        date: ''
                    },
                    receiveAndSend: [
                        {
                            msg: 'Você pegou meu livro?',
                            tag: 'receive',
                            hour: '22:14'
                        },
                        {
                            msg: 'Sim, já devolvo.',
                            tag: 'send',
                            hour: '23:01'
                        }
                    ]
                },
                {
                    id: 4,
                    img: profile4,
                    name: 'Laura Alves',
                    visualization: false,
                    message: {
                        text: '',
                        date: ''
                    },
                    receiveAndSend: [
                        {
                            msg: 'Como você está primo?',
                            tag: 'receive',
                            hour: '12:54'
                        },
                        {
                            msg: 'Estou bem, e você?',
                            tag: 'send',
                            hour: '15:21'
                        }
                    ]
                },
                {
                    id: 5,
                    img: profile5,
                    name: 'Maria Alice',
                    visualization: false,
                    message: {
                        text: '',
                        date: ''
                    },
                    receiveAndSend: [
                        {
                            msg: 'Oi, você é da minha sala da faculdade?',
                            tag: 'receive',
                            hour: '08:22'
                        },
                        {
                            msg: 'Oi, acho que sou.',
                            tag: 'send',
                            hour: '10:40'
                        }
                    ]
                },
                {
                    id: 6,
                    img: profile6,
                    name: 'Sophia Amélia',
                    visualization: false,
                    message: {
                        text: '',
                        date: ''
                    },
                    receiveAndSend: [
                        {
                            msg: 'Olá, que perfil legal.',
                            tag: 'receive',
                            hour: '07:04'
                        },
                        {
                            msg: 'Obrigado, o seu também.',
                            tag: 'send',
                            hour: '07:11'
                        }
                    ]
                },
                {
                    id: 7,
                    img: profile7,
                    name: 'Manuela Brito',
                    visualization: false,
                    message: {
                        text: '',
                        date: ''
                    },
                    receiveAndSend: [
                        {
                            msg: 'Que horas é para estar lá?',
                            tag: 'receive',
                            hour: '09:34'
                        },
                        {
                            msg: 'Oi Manuela, duas horas.',
                            tag: 'send',
                            hour: '10:31'
                        }
                    ]
                },
                {
                    id: 8,
                    img: profile8,
                    name: 'Cecília Betine',
                    visualization: false,
                    message: {
                        text: '',
                        date: ''
                    },
                    receiveAndSend: [
                        {
                            msg: 'Douglas, tudo certo para o passeio?',
                            tag: 'receive',
                            hour: '12:34'
                        },
                        {
                            msg: 'Oi, tudo certo :).',
                            tag: 'send',
                            hour: '12:51'
                        }
                    ]
                },
                {
                    id: 9,
                    img: profile9,
                    name: 'Isabella Barreto',
                    visualization: false,
                    message: {
                        text: '',
                        date: ''
                    },
                    receiveAndSend: [
                        {
                            msg: 'Bom dia, vai ter evento hoje?',
                            tag: 'receive',
                            hour: '10:00'
                        },
                        {
                            msg: 'Bom dia, sim.',
                            tag: 'send',
                            hour: '11:35'
                        }
                    ]
                },
                {
                    id: 10,
                    img: profile10,
                    name: 'Arthur Barbosa',
                    visualization: false,
                    message: {
                        text: '',
                        date: ''
                    },
                    receiveAndSend: [
                        {
                            msg: 'Boa tarde, que horas é para estar ai?',
                            tag: 'receive',
                            hour: '14:40'
                        },
                        {
                            msg: 'Boa tarde, pode ser cinco horas.',
                            tag: 'send',
                            hour: '15:15'
                        }
                    ]
                }
            ]
        }
    }

    componentDidMount() {
        this.updateMessegeContacts();
    }

    updateMessegeContacts = () => {
        for(let i = 0; i < this.state.contacts.length; i++) {
            this.state.contacts[i].message.text = this.state.contacts[i].receiveAndSend[this.state.contacts[i].receiveAndSend.length -1].msg;
            this.state.contacts[i].message.date = this.state.contacts[i].receiveAndSend[this.state.contacts[i].receiveAndSend.length -1].hour;
        }

        this.setState({
            contacts: this.state.contacts
        });
    }

    contactsLenght = () => {
        return this.state.contacts.length;
    }

    handleInjectMsg = () => {
        const input = window.document.getElementById('area-input-text');
        const { contacts } = this.state;

        this.state.contacts[this.props.id].receiveAndSend.push({msg: input.value, tag: 'send', hour: `${convertHour(new Date().getHours())}:${convertHour(new Date().getMinutes())}`});

        chatAreaMsg.render(
            <ChatAreaMsg lenghtChat={contacts[this.props.id].receiveAndSend.length} receiveAndSend={contacts[this.props.id].receiveAndSend} />
        );

        moveScrollMsg();
        this.updateMessegeContacts();

        let valueInput = input.value;

        setTimeout(() => {
            this.vizualizationMessege();

            controlLenghtSvgPath[this.props.id] = true;

            setTimeout(() => {
                this.state.contacts[this.props.id].receiveAndSend.push({msg: valueInput, tag: 'receive', hour: `${convertHour(new Date().getHours())}:${convertHour(new Date().getMinutes())}`});

                chatAreaMsg.render(
                    <ChatAreaMsg lenghtChat={contacts[this.props.id].receiveAndSend.length} receiveAndSend={contacts[this.props.id].receiveAndSend} />
                );

                moveScrollMsg();
            }, 1500);
        }, 1500);

        input.value = '';
    }

    vizualizationMessege = () => {
        const svgConfirmation = window.document.querySelectorAll('.svg-confirmation path');

        for(let i = 0; i < svgConfirmation.length; i++) {
            svgConfirmation[i].setAttribute('style', 'fill: var(--colorLightBlueTwo);');
        }
    }

    handleShowContact = () => {
        const { contacts } = this.state;
        
        headerSecChat.render(
            <HeaderSecChat name={contacts[this.props.id].name} img={contacts[this.props.id].img} />
        );

        chatAreaMsg.render(
            <ChatAreaMsg lenghtChat={contacts[this.props.id].receiveAndSend.length} receiveAndSend={contacts[this.props.id].receiveAndSend} />
        );

        if(controlReactDomChatWrite) {
            chatAreaWrite = ReactDOM.createRoot(document.getElementById('chat-area-write'));
            
            controlReactDomChatWrite = false;
        }

        chatAreaWrite.render(
            <ChatAreaWrite injectMsg={this.handleInjectMsg} />
        );

        const containerContact = window.document.getElementsByClassName('contact');

        for(let i = 0; i < containerContact.length; i++) {
            containerContact[i].removeAttribute('style', 'background-color: var(--colorGray);');
        }

        containerContact[this.props.id].setAttribute('style', 'background-color: var(--colorGray);');

        const headerSectionChat = window.document.querySelector('header section:nth-child(2)');

        headerSectionChat.setAttribute('class', 'header-sec-chat-shadow');

        setTimeout(() => {
            const input = window.document.getElementById('area-input-text');
            
            input.focus();
            input.value = '';

            for(let i = 0; i < window.document.querySelectorAll('.svg-confirmation path').length; i++) {
                controlLenghtSvgPath.push(false);
            }
            
            if(controlLenghtSvgPath[this.props.id]) {
                this.vizualizationMessege();
            }

            if(controlButtonSendAndAudio) {
                chatAreaWriteObj.handleButtonSendAndAudio(false);
                controlButtonSendAndAudio = false;
            } else {
                chatAreaWriteObj.handleButtonSendAndAudio();
            }

        }, 10);
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
