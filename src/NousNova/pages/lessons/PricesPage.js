import "../../styles/privateLessons.css";
import { Link } from "react-router-dom";
import PriceCalculator from "../../PriceCalculator"
import { useState } from 'react';
import criarWhatsappLink from "../../WhatsappTextCreator";

const price_default_Math = 50;
const price_default_Music = 35;
const price_default_Physics = 80;

function PricesPage() {
  // Array para armazenar os textos selecionados
  const [textArray, setTextArray] = useState([]);
  const [planoSelecionado, setPlanoSelecionado] = useState(null);
  const whatsappLink = criarWhatsappLink(textArray);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    // Detecta o plano atual a partir do valor
    const planoAtual = value.split("|")[1];

    // Se o plano atual for diferente do selecionado, troca o plano
    if (planoSelecionado !== planoAtual) {
      setPlanoSelecionado(planoAtual);
      setTextArray(checked ? [value] : []);
      desmarcarCheckboxesDeOutrosPlanos(planoAtual);
    } else {
      // Se ainda estiver no mesmo plano
      if (checked) {
        setTextArray((prev) => [...prev, value]);
      } else {
        setTextArray((prev) => prev.filter((item) => item !== value));
      }
    }
  };

const desmarcarCheckboxesDeOutrosPlanos = (planoAtual) => {
  const checkboxes = document.querySelectorAll("#subscriptions input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    if (!checkbox.value.includes(planoAtual)) {
      checkbox.checked = false;
    }
  });
};

  return(
    <div className="HomePageGlobalDiv">
      <div className="NousNovaLessons">
        <section id="title">
          <h1>Consultar Valores</h1>
          <h3>Escolha suas disciplinas e descubra como podemos ajudar você a dominar o conhecimento.</h3>
        </section>

        <section>
          <div>
            <h2>Totalmente Personalizado</h2>
              <p>Personalize seus estudos mesclando entre disciplinas</p>
              <div className="prices">
                <div >
                  <h2>Matemática</h2>
                    <ul>
                      <li>Aula Avulsa: {PriceCalculator(price_default_Math,0)} hora</li>
                      <li>Aula Experimental: {PriceCalculator(price_default_Math,25)} hora</li>
                      <div id="individualsSolicitation"><a href="https://wa.me/5518996181770?text=Eu+gostaria+de+agendar+uma+aula+de+matemática" taget="blank" id="individualsSolicitation"><div className="planet-button" id="button">Agendar</div></a></div>                       
                    </ul>
                </div>
                <div>
                  <h2>Música</h2>
                    <ul>
                      <li>Aula Experimental: {PriceCalculator(price_default_Music,0)} hora</li>
                      <div id="individualsSolicitation"><a href="https://api.whatsapp.com/send/?phone=5518997954628&text=Ol%C3%A1%21+Eu+gostaria+de+agendar+uma+aula+de+música.&type=phone_number&app_absent=0" taget="blank" id="individualsSolicitation"><div className="planet-button" id="button">Agendar</div></a></div>  
                    </ul>
                </div>
                <div>
                  <h2>Física</h2>
                    <ul>
                      <li>Aula Avulsa: {PriceCalculator(price_default_Physics,0)} hora</li>
                      <li>Aula Experimental: {PriceCalculator(price_default_Physics,25)} hora</li>
                      <div id="individualsSolicitation"><a href="https://wa.me/5518996181770?text=Eu+gostaria+de+agendar+uma+aula+de+física" taget="blank" id="individualsSolicitation"><div className="planet-button" id="button">Agendar</div></a></div>  
                    </ul>
                </div>
                <div>
                  <h2>Planos</h2>
                  <p>Selecione as disciplinas que gostaria de fazer</p>
                </div>
                <div id="subscriptions">
                  <div className="prices">
                    <p>Plano 4 aulas mensais</p>
                    <label>
                      <li><input type="checkbox" value={"Matemática|plano4"} onChange={handleCheckboxChange} className="checkbox"/>Matemática: {PriceCalculator(price_default_Math,30)} hora</li>
                    </label>
                    <label>
                      <li><input type="checkbox" value={"Física|plano4"} onChange={handleCheckboxChange}/>Física: {PriceCalculator(price_default_Physics,30)} hora</li>
                    </label>
                    <a href={textArray.some((text) => text.includes("plano4")) ? whatsappLink : "#"} target="_blank" className="card" id="planSelection1"
                      onClick={(e) => {
                        const hasPlano4 = textArray.some((text) => text.includes("plano4"));
                        if (!hasPlano4) {
                          e.preventDefault();
                          const el = document.getElementById("planSelection1");
                          if (el) {
                            el.classList.add("flash-error");
                            setTimeout(() => {
                              el.classList.remove("flash-error");
                            }, 600);
                          }
                        }
                      }}
                    >
                      Contratar
                    </a>
                  </div>
                  <div className="prices">
                    <p>Plano 8 aulas mensais</p>
                    <label>
                      <li><input type="checkbox" value={"Matemática|plano8"} onChange={handleCheckboxChange}/>Matemática: {PriceCalculator(price_default_Math,45)} hora</li>
                    </label>
                    <label>
                      <li><input type="checkbox" value={"Física|plano8"} onChange={handleCheckboxChange}/>Física: {PriceCalculator(price_default_Physics,45)} hora</li>
                    </label>
                    <a href={textArray.some((text) => text.includes("plano8")) ? whatsappLink : "#"} target="_blank" className="card" id="planSelection2"
                      onClick={(e) => {
                        const hasPlano4 = textArray.some((text) => text.includes("plano8"));
                        if (!hasPlano4) {
                          e.preventDefault();
                          const el = document.getElementById("planSelection2");
                          if (el) {
                            el.classList.add("flash-error");
                            setTimeout(() => {
                              el.classList.remove("flash-error");
                            }, 600);
                          }
                        }
                      }}
                    >
                      Contratar
                    </a>
                  </div>
                  <div className="prices">
                    <p>Plano 12 aulas mensais</p>
                    <label>
                      <li><input type="checkbox" value={"Matemática|plano12"} onChange={handleCheckboxChange}/>Matemática: {PriceCalculator(price_default_Math,50)} hora</li>
                    </label>
                    <label>
                      <li><input type="checkbox" value={"Física|plano12"} onChange={handleCheckboxChange}/>Física: {PriceCalculator(price_default_Physics,50)} hora</li>
                    </label>
                    <a href={textArray.some((text) => text.includes("plano12")) ? whatsappLink : "#"} target="_blank" className="card" id="planSelection3"
                      onClick={(e) => {
                        const hasPlano4 = textArray.some((text) => text.includes("plano12"));
                        if (!hasPlano4) {
                          e.preventDefault();
                          const el = document.getElementById("planSelection3");
                          if (el) {
                            el.classList.add("flash-error");
                            setTimeout(() => {
                              el.classList.remove("flash-error");
                            }, 600);
                          }
                        }
                      }}
                    >
                      Contratar
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PricesPage;
