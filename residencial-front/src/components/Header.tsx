import styles from './Header.module.css'

import residencialLogo from '../assets/residencial-eliane-logo.svg'

export function Header() {
    function handlerEntrar() {
        console.log('entrei na func de entrar');
    }

    return (
        <header className={styles.header}>
            <img src={residencialLogo} alt="Logo do Residencial Eliane" />
            <p>Residencial Eliane</p>

            <button onClick={handlerEntrar} title='Entrar'>ENTRAR</button>
        </header>
    )
}