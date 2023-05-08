import Logo from './images/logoheader.png'
import Seta from './images/seta.png'
import styles from './Header.module.css'

function Header(){
    return(
        <div className={styles.containerheader}>
            <header>
                <div className={styles.containerlogo}>
                    <img className={styles.logo} src={Logo} alt="Imagem"/>
                </div>
                <nav>
                    <ul>
                        <li>O Guru<img className={styles.seta} src={Seta} alt="seta do header"></img></li>
                        <li>Para você<img className={styles.seta} src={Seta} alt="seta do header"></img></li>
                        <li>Empresas<img className={styles.seta} src={Seta} alt="seta do header"></img></li>
                        <li>Perguntas<img className={styles.seta} src={Seta} alt="seta do header"></img></li>
                    </ul>
                </nav>
                <div className={styles.containerbuttons}>
                    <button className={styles.acessar}>Acessar</button>
                    <button className={styles.abrirconta}>Abra sua conta</button>
                </div>  
            </header>
        </div>
    );
}

export default Header;