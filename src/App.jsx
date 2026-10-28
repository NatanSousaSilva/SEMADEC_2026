import {useState} from "react";

import "./App.css";

import {podio_modalidades, gincanas, classificacao_geral, dados_modalidades, grupos_futsal, grupos_queimada, dados_grupos, competidores_tenis_mesa_dupla} from "./dados";
import {colunas_modalidades, coletivas, individuais, categorias, programacao, colunas_grupos} from "./dados_estaticos";
import {selecionar_modalidade, obter_descricao, obter_titulo_modalidade, obter_titulo_tabela_jogos, obter_titulo_podio, tabela_podio, tabela_padrao, tabela_grupos} from "./funcoes_auxiliares"

export default function App() {
  const [categoria, setCategoria] = useState("Programação");
  const [modalidade, setModalidade] = useState("");

  const modalidades = categoria === "Modalidades Coletivas" ? coletivas : categoria === "Modalidades Individuais" ? individuais : [];


  return (
    <div className="app">
      <header className="topbar">
        <h1 className="logo">SEMADEC 2026</h1>
        <div className="acoes">
          <div className="menu-container">
          </div>
        </div>
      </header>

      <nav className="abas-tipo">
        {categorias.map((item) => (
          <button key={item} className={categoria === item ? "ativo" : ""} onClick={() => selecionar_modalidade(item, setCategoria, setModalidade)}>{item}</button>
        ))}
      </nav>

      {modalidades.length > 0 && (
        <nav className="abas-modalidades">
          {modalidades.map((item) => (
            <button key={item} className={modalidade === item ? "selecionada" : ""} onClick={() => setModalidade(item)}>{item}</button>
          ))}
        </nav>
      )}

      <section className="titulo">
        <h2>{obter_titulo_modalidade(categoria, modalidade)}</h2>
        <p className="descricao">{obter_descricao(categoria, modalidade)}</p>
      </section>

      <main className="conteudo">
        <h3>{obter_titulo_tabela_jogos(categoria, modalidade)}</h3>
        <div className="tabela-container">
          
          {categoria === "Classificação Geral" ? (
            <table className="tabela-jogos">
              <thead>
                <tr>
                  <th>Posição</th>
                  <th>Turma</th>
                  <th>Pontos Modalidades Coletivas</th>
                  <th>Pontos Modalidades Individuais</th>
                  <th>Pontos Gincanas</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {classificacao_geral.length > 0 ? (
                  classificacao_geral.map((item) => (
                    <tr key={item.posicao}>
                      <td>{item.posicao}º</td>
                      <td>{item.turma}</td>
                      <td>{item.pontos_coletivas}</td>
                      <td>{item.pontos_individuais}</td>
                      <td>{item.pontos_gincana}</td>
                      <td>{item.pontos_coletivas + item.pontos_individuais + item.pontos_gincana}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="sem-jogos">Nenhuma pontuação cadastrada.</td>
                  </tr>
                )}
              </tbody>
            </table>
            
          ) : categoria === "Gincana" ? (
            <table className="tabela-jogos">
              <thead>
                <tr>
                  <th>Gincana</th>
                  <th>Data</th>
                  <th>Horário</th>
                  <th>Vencedor</th>
                </tr>
              </thead>
              <tbody>
                {gincanas.length > 0 ? (
                  gincanas.map((gincana) => (
                    <tr key={gincana.id}>
                      <td>{gincana.nome}</td>
                      <td>{gincana.data}</td>
                      <td>{gincana.horario}</td>
                      <td>
                        <span className="ganhador">
                          {gincana.vencedor || "A definir"}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="sem-jogos">
                      Nenhuma gincana cadastrada.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

          ) : categoria === "Programação" ? (
            <div className="programacao-container">
              {programacao.map((dia) => (
                <table className="tabela-programacao" key={dia.dia}>
                  <thead>
                    <tr>
                      <th colSpan={3} className="titulo-dia">
                        {dia.dia}
                      </th>
                    </tr>

                    <tr>
                      <th>Horário</th>
                      <th>Atividades</th>
                      <th>Local</th>
                    </tr>
                  </thead>

                  <tbody>
                    {dia.atividades.map((item, index) => (
                      <tr
                        key={index}
                        className={item.intervalo ? "linha-almoco" : ""}
                      >
                        <td className={item.cor ? `cor-${item.cor}` : ""}>
                          {item.horario}
                        </td>

                        <td className={item.cor ? `cor-${item.cor}` : ""}>
                          {item.intervalo ? "Almoço" : item.nome}
                        </td>

                        <td className={item.cor ? `cor-${item.cor}` : ""}>
                          {item.intervalo ? "-" : item.local}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
            </div>

          ):(
            <>
              {categoria === "Modalidades Coletivas" ? (
              <>
                {modalidade === "Futsal" ? (
                  <>
                    {tabela_padrao({
                      modalidade,
                      colunas: colunas_modalidades["Futsal"] || [],
                      dados: dados_modalidades[modalidade] || []
                    })}
                    
                    {tabela_grupos({
                      modalidade,
                      grupos: grupos_futsal,
                      colunas: colunas_grupos.Futsal || []
                    })}
                  </>
                ) : modalidade === "Queimada" ? (
                  <>
                    {tabela_padrao({
                      modalidade,
                      colunas: colunas_modalidades["Coletivas"] || [],
                      dados: dados_modalidades[modalidade] || []
                    })}

                    {tabela_grupos({
                      modalidade,
                      grupos: grupos_queimada,
                      colunas: colunas_grupos.Queimada || []
                    })}
                  </>
                ) : modalidade === "Tênis de Mesa Dupla" ? (
                  <>
                    {tabela_padrao({
                      modalidade,
                      colunas: colunas_modalidades["Coletivas"] || [],
                      dados: dados_modalidades[modalidade] || []
                    })}

                    {tabela_grupos({
                      modalidade,
                      grupos: competidores_tenis_mesa_dupla,
                      colunas: colunas_grupos.Tenis_mesa_dupla || []
                    })}
                  </>
                ) : (
                  tabela_padrao({
                    modalidade,
                    colunas: colunas_modalidades["Coletivas"] || [],
                    dados: dados_modalidades[modalidade] || []
                  })
                )}

                {tabela_podio({ modalidade, podio_modalidades })}
              </>

              ) : categoria === "Modalidades Individuais" ? (
                <>
                  {modalidade === "Jiu-Jitsu" ? (
                    tabela_grupos({
                      modalidade,
                      grupos: dados_grupos[modalidade],
                      colunas: colunas_grupos.jiu_jitsu || []
                    })
                  ) : modalidade === "Tênis de Mesa Masculino" ? (
                    <>
                      {tabela_padrao({
                        modalidade,
                        colunas: colunas_modalidades["Tenis_mesa_individual"] || [],
                        dados: dados_modalidades[modalidade] || []
                      })}

                      {tabela_grupos({
                        modalidade,
                        grupos: dados_grupos[modalidade],
                        colunas: colunas_grupos.Individual || []
                      })}
                    </>
                  ) : modalidade === "Tênis de Mesa Feminino" ? (
                    <>
                    {tabela_padrao({
                        modalidade,
                        colunas: colunas_modalidades["Tenis_mesa_individual"] || [],
                        dados: dados_modalidades[modalidade] || []
                      })}
                    {tabela_grupos({
                      modalidade,
                      grupos: dados_grupos[modalidade],
                      colunas: colunas_grupos.Individual || []
                    })}
                    </>
                  ) : (
                    tabela_grupos({
                      modalidade,
                      grupos: dados_grupos[modalidade],
                      colunas: colunas_grupos.Individual || []
                    })
                  )}

                  {tabela_podio({ modalidade, podio_modalidades })}
                </>
              ) : (
                tabela_padrao({
                  modalidade,
                  colunas: colunas_modalidades[modalidade] || [],
                  dados: dados_modalidades[modalidade] || []
                })
              )}
            </>
          )}

        </div>
      </main>
    </div>
  );
}