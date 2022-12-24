/* A primeira letra sempre deve ser maiúscula, pois, dessa forma, o React consegue diferenciar um webcomponent de um componente React. */

import styles from "./Cardapio.module.scss";

/* O pacote "SVGR" converte uma imagem ".svg" em um componente React. */
import { ReactComponent as Logo } from "assets/logo.svg";

const Cardapio = () => {
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
    </main>
  );
};

export default Cardapio;
