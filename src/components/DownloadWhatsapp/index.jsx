import { Component } from "react";
import desktop from '../../assets/img/desktop.png';
import './styles.css';

export default class DownloadWhatsapp extends Component {
    render() {
        return (
            <div className="container-download-whatsapp">
                <div className="container-download-whatsapp__content-download-whatsapp">
                    <img src={desktop} alt="Desktop" className="container-download-whatsapp__desktop-image" />

                    <h1>Baixar o whatsapp</h1>
                    <p>Baixe o novo app para fazer chamadas, usar o compartilhamento de tela e ter uma experiência de uso mais rápida.</p>

                    <a href="https://apps.microsoft.com/detail/9NKSQGP7F2NH?hl=pt-br&gl=BR" target="_blank">Baixar o app</a>
                </div>
            </div>
        );
    }
}