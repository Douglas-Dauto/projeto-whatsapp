import { Component } from 'react';
import './Header.css';
import HeaderSecContacts from './HeaderSecContacts';

export default class Header extends Component {
    render() {
        if(true) {
            return (
                <header>
                    <section>
                        <HeaderSecContacts />
                    </section>
                </header>
            );
        }
    }
}
