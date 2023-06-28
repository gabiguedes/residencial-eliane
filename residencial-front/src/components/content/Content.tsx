import styles from './Content.module.css'

export function Content() {

    function handlerSubmit(event: any) {
        console.log("entrei no form e submit")
        event.preventDefault();
    }

    return (
        <main>
            <div className={styles.content}>
                <div className={styles.card}>
                    <form onSubmit={handlerSubmit} className={styles.form}>
                        <label>
                        CPF do inquilino
                        <input type="number" name="cpf" />
                        </label>
                        <input type="submit" value="ENTRAR" />
                    </form>
                </div>
            </div>
        </main>
    )
}   