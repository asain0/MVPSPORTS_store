import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../img/logo-mvp.png'
import { AiOutlineMenu } from "react-icons/ai"

function Navbar(props){
    return (
        <nav className={styles.menuNav}>

                <Link to="/" className={styles.logo}>
                    <img className={styles.logo_mvp} src={logo} alt="logo MVP" />
                </Link>
                <input type="checkbox" className={styles.check} id="check"/>
                <label for="check" className={styles.checkbtn}>
                    <i className={styles.menu}>  < AiOutlineMenu /></i>
                </label>
                
                <ul className={styles.list}>
                    <li className={styles.secao_menu}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.secao_menu}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className={styles.secao_menu}>
                        <Link to="/cadastro">Cadastro</Link>
                    </li>
                    <li className={styles.secao_menu}>
                        <Link to="/catalogo">Catalogo</Link>
                    </li>
                    <li className={styles.secao_menu}>
                        <Link to="/carrinho">Carrinho</Link>
                    </li>
                </ul>

        </nav>
    )
   }
   
export default Navbar