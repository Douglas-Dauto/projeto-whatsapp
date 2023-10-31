import { Component } from "react";
import './styles.css';
import ReactDOM from 'react-dom/client';
import ButtonAudioChatArea from "../ButtonAudioChatArea";
import ButtonSendChatArea from "../ButtonSendChatArea";

let containerButton, controlContainerButton = true;

export default class ChatAreaWrite extends Component {
    constructor(props) {
        super(props);
    }

    handleSendMsg = (e) => {
        if(e.keyCode === 13 && window.document.getElementById('area-input-text').value !== '') {
            this.props.injectMsg();
        }
    }

    handleButtonSendAndAudio = () => {
        if(window.document.getElementById('area-input-text').value !== '') {
            containerButton.render(
                <ButtonSendChatArea injectMsg={this.props.injectMsg} />
            );
        } else {
            containerButton.render(
                <ButtonAudioChatArea />
            );
        }
    }

    componentDidMount() {
        setTimeout(() => {
            if(controlContainerButton) {
                containerButton = ReactDOM.createRoot(document.getElementById('button-audio-send-chat-area-write'));
                controlContainerButton = false;
            }
        }, 10);
    }

    render() {
        return (
            <>
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="ekdr8vow dhq51u3o" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><path fill="currentColor" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path></svg>
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M20.5 13.2501L20.5 10.7501L13.25 10.7501L13.25 3.5L10.75 3.5L10.75 10.7501L3.5 10.7501L3.5 13.2501L10.75 13.2501L10.75 20.5L13.25 20.5L13.25 13.2501L20.5 13.2501Z" fill="currentColor"></path></svg>
                <input type="text" placeholder="Digite uma mensagem" onKeyDown={this.handleSendMsg} onChange={this.handleButtonSendAndAudio} id="area-input-text" />

                <div id="button-audio-send-chat-area-write">
                    <ButtonAudioChatArea />
                </div>
            </>
        );
    }
}
