import { PencilSimpleLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import {Avatar} from "./Avatar.jsx";
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500" />
            <div className={styles.profile}>
                <Avatar src="http://github.com/daya-diaz.png" />
                <strong>Dayane Melo</strong>
                <span>FullStack Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} weight="bold" />
                    Editar seu perfil</a>
            </footer>

        </aside>
    )
}