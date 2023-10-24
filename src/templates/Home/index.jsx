import { Component } from "react";
import Header from "../../components/Header";
import MenuContacts from "../../components/MenuContacts";
import './styles.css';

export default class Home extends Component {
    render() {
        return (
            <>
                <header>
                    <Header />
                </header>

                <main>
                    <section>
                        <MenuContacts />
                    </section>
                </main>
            </>
        );
    }
}