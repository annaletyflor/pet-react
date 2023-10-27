import React from "react";
import style from "./Sobre.module.css";
import doguinho from "../../assets/doguinho.jpg";
import gato from "../../assets/gato.jpg";
import banho from "../../assets/banho.jpg";
import passarinho from "../../assets/passarinho.jpg";

const Sobre = () => {
  return (
    <div className={style.sobre}>
      <h1>SOBRE NÓS</h1>
      <p>
        Uma empresa localizada no interior paulista, a Little Petshop é uma pet
        shop dedicada a atender e suprir as necessidades dos nossos amados pets.
        Acreditamos que assim como nós, nossos companheiros peludos merecem o
        melhor em cuidados e atenção. Por isso, oferecemos uma ampla gama de
        serviços e produtos para garantir o bem-estar e a felicidade dos animais
        de estimação. Valorizamos cada cliente de quatro patas que entra em
        nossa loja. Nossa equipe é composta por profissionais dedicados e
        apaixonados por animais, prontos para oferecer um atendimento
        especializado e carinhoso. Estamos empenhados em proporcionar um
        ambiente acolhedor e seguro, onde os pets se sintam confortáveis e
        amados.
      </p>
      <div className={style.servicos}>
        <img src={banho} alt="Cachorrinho no Banho" />
        <h3>BANHO E TOSA</h3>
        <p>
          Nosso petshop oferece banho e tosa de qualidade com profissionais
          qualificados para essa área, utilizando-se dos melhores produtos para
          o bem-estar do seu animalzinho.
        </p>

        <img src={doguinho} alt="Cachorrinho" />
        <h3>BRINQUEDOS E ALIMENTOS</h3>
        <p>
          Para o lazer e bem-estar de nossos bichinhos, Little Petshop tem
          disponível brinquedos e alimentos de altíssima qualidade, tudo isso
          para preservar a saúde e felicidade dos seus pets.
        </p>
        <img src={gato} alt="Gato" />
        <h3>VACINAÇÃO</h3>
        <p>
          Nossa empresa possui atendimentos especiais para a atualização da
          carteirinha de vacinação do seu animalzinho, proporcionando comodidade
          e qualidade no serviço.
        </p>

        <img src={passarinho} alt="Passarinho" />
        <h3>ATENDIMENTO GERAL</h3>
        <p>
          Nossa empresa possui atendimentos especiais para a atualização da
          carteirinha de vacinação do seu animalzinho, proporcionando comodidade
          e qualidade no serviço.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
