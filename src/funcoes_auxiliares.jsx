export function selecionar_modalidade(nova_categoria, setCategoria, setModalidade){
  setCategoria(nova_categoria);

  if (nova_categoria === "Modalidades Coletivas") {
    setModalidade("Futsal");
  } else if (nova_categoria === "Modalidades Individuais") {
    setModalidade("Tênis de Mesa Feminino");
  } else {
    setModalidade("");
  }
}

export function obter_titulo_modalidade(categoria, modalidade) {
  if (categoria === "Programação") return "Cronograma das Atividades";
  if (categoria === "Classificação Geral") return "Ranking Geral das Turmas";
  if (categoria === "Gincana") return "Resultado das Provas da Gincana";
  if (categoria === "Modalidades Individuais") return `Desempenho na modalidade ${modalidade}`;
  if (categoria === "Modalidades Coletivas") return `Desempenho das equipes de ${modalidade}`;
  return "Resultados";
}

export function obter_titulo_tabela_chaveamento(modalidade) {
  return `Chaveamento — ${modalidade}`;
}

export function obter_titulo_tabela_jogos(categoria, modalidade) {
  if (categoria === "Programação") return "Agenda de Atividades";
  if (categoria === "Classificação Geral") return "Pontuação Acumulada";
  if (categoria === "Gincana") return "Pontuação das Equipes na Gincana";
  if (categoria === "Modalidades Individuais") return `Resultados Individuais — ${modalidade}`;
  if (categoria === "Modalidades Coletivas") return `Resultados dos Confrontos — ${modalidade}`;
  return "Resultados dos Jogos";
}

export function obter_titulo_podio(modalidade) {
    return `Pódio da modalidade ${modalidade}`;
}

export function obter_descricao(categoria, modalidade) {
  if (categoria === "Programação") {
    return `Confira os horários e as atividades da SEMADEC 2026`;
  }
  if (categoria === "Classificação Geral") {
      return "Acompanhe a pontuação total e a posição de cada turma na competição.";
  }
  if (categoria === "Gincana") {
      return "Confira os resultados das provas e a pontuação das turmas.";
  }
  if (categoria === "Modalidades Individuais") {
      return `Confira os resultados e a classificação da modalidade ${modalidade}.`;
  }
  if (categoria === "Modalidades Coletivas") {
      return `Acompanhe os confrontos, os resultados e a classificação de ${modalidade}.`;
  }
  return "Confira os resultados da SEMADEC 2026.";
}

export function tabela_padrao({ modalidade, colunas = [], dados = [] }) {
  return (
    <div className="tabela-container">
      <table className="tabela-jogos">
        <thead>
          <tr>
            {colunas.map((coluna) => (
              <th key={coluna.chave}>{coluna.titulo}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {dados.length > 0 ? (
            dados.map((item, index) => (
              <tr key={item.id ?? index}>
                {colunas.map((coluna) => (
                  <td key={coluna.chave}>
                    {coluna.chave === "ganhador" ? (
                      <span className="ganhador">
                        {item[coluna.chave] || "A definir"}
                      </span>
                    ) : (
                      item[coluna.chave] ?? "-"
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={Math.max(colunas.length, 1)}
                className="sem-jogos"
              >
                Nenhum resultado cadastrado para {modalidade}.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export function tabela_grupos({ modalidade, colunas = [], grupos = [] }) {
  const exibirGrupo = grupos.some((grupo) =>
    Object.prototype.hasOwnProperty.call(grupo, "grupo")
  );

  return (
    <div className="tabela-container">
      <table className="tabela-jogos">
        <thead>
          <tr>
            {exibirGrupo && <th>Grupo</th>}

            {colunas.map((coluna) => (
              <th key={coluna.chave}>{coluna.titulo}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {grupos.length > 0 ? (
            grupos.map((grupo, grupoIndex) =>
              (grupo.turmas ?? []).map((turma, index) => (
                <tr key={`${grupo.grupo ?? grupoIndex}-${turma.codigo ?? turma.nome ?? index}`}>
                  {exibirGrupo && (
                    <td>{index === 0 ? grupo.grupo ?? "-" : ""}</td>
                  )}

                  {colunas.map((coluna) => (
                    <td key={coluna.chave}>
                      {turma[coluna.chave] ?? "-"}
                    </td>
                  ))}
                </tr>
              ))
            )
          ) : (
            <tr>
              <td
                colSpan={colunas.length + (exibirGrupo ? 1 : 0)}
                className="sem-jogos"
              >
                Nenhum resultado cadastrado para {modalidade}.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export function tabela_podio({ modalidade, podio_modalidades }) {
  const podio = podio_modalidades.filter(
    (item) => item.modalidade === modalidade
  );

  return (
    <div className="tabela-container">
      <table className="tabela-jogos">
        <thead>
          <tr>
            <th>🥇 1º Lugar</th>
            <th>🥈 2º Lugar</th>
            <th>🥉 3º Lugar</th>
          </tr>
        </thead>

        <tbody>
          {podio.length > 0 ? (
            podio.map((item, index) => (
              <tr key={`${item.modalidade}-${item.categoria}-${index}`}>
                <td>{item.primeiro || "A definir"}</td>
                <td>{item.segundo || "A definir"}</td>
                <td>{item.terceiro || "A definir"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="sem-jogos">
                Ainda não há pódio para esta modalidade.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

