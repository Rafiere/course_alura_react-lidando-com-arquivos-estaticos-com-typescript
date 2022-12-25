import React from "react";
import filtros from "./filtros.json";

import styles from "./Filtros.module.scss";

import classNames from "classnames";

interface Opcao {
  id: number;
  label: string;
}

interface FiltrosProps {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

const Filtros = ({ filtro, setFiltro }: FiltrosProps) => {
  const selecionarFiltro = (opcao: Opcao) => {
    if (filtro === opcao.id) {
      return setFiltro(opcao.id);
    }

    return setFiltro(opcao.id);
  };

  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => {
        return (
          <button
            className={classNames({
              [styles.filtros__filtro]: true,
              [styles["filtros__filtro--ativo"]]: filtro === opcao.id,
            })}
            key={opcao.id}
            onClick={() => selecionarFiltro(opcao)}
          >
            {opcao.label}
          </button>
        );
      })}
    </div>
  );
};

export default Filtros;
