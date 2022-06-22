import "./styles/app.css";
import Nav from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

import { ExternalLink } from "react-external-link";

import Anime1 from "./img/anime-r.png";
// import Anime2 from "./img/anime-2.png";
// import Icon1 from "./img/video_icon.png";
// import Icon2 from "./img/exercicios_icon.png";
// import Icon3 from "./img/artigo_icon.png";
// import Icon4 from "./img/r_icon.png";

function Linguagem() {
  return (
    <>
      <Nav />
      <div className="box">
        <div className="container">
          <div className="container-box">
            <div className="left">
              <h1>Linguagem R</h1>
            </div>
            <div className="right">
              <img src={Anime1} alt="Banner" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container-box">
          <h2>O que é linguagem R?</h2>
          <p>
            R é uma linguagem de programação estatística e gráfica que vem se
            especializando na manipulação, análise e visualização de dados,
            sendo atualmente considerada uma das melhores ferramentas para isso.
            Seu diferencial é a facilidade no aprendizado, mesmo para aqueles
            que nunca tiveram contato anterior com programação. É do tipo
            multi-paradigma orientada a objetos, programação funcional,
            dinâmica, fracamente tipada, voltada à manipulação, análise e
            visualização de dados. O código fonte do R está disponível sob a
            licença GNU GPL e as versões binárias pré-compiladas são fornecidas
            para Windows, Macintosh, e muitos sistemas operacionais Unix/Linux.
            Um conjunto básico de pacotes vem embutido na instalação do R, com
            muito outros disponíveis na rede de distribuição do R (em inglês
            CRAN). A linguagem R é largamente usada entre estatísticos e
            analistas de dados para desenvolver software de estatística e
            análise de dados. Pesquisas e levantamentos com profissionais da
            área mostram que a popularidade do R aumentou substancialmente nos
            últimos anos.
          </p>
          <br />
          <h2>História</h2>
          <p>
            R foi criado por Ross Ihaka e Robert Gentleman, estatísticos da
            Universidade de Auckland, Nova Zelândia, com a finalidade de obter
            um melhor ambiente de software para laboratórios de estatística, e
            atualmente é desenvolvido pela equipe de Desenvolvimento do R, da
            qual John Chambers é um membro. O código fonte para o ambiente de
            software R é escrito principalmente em C, Fortran e R. R está
            disponível gratuitamente sob a licença GNU General Public e em
            vários sistemas operacionais como MAC, Windows e Linux. R usa uma
            interface de linha de comando, mas há também vários front-ends
            gráficos para ele, como RStudio. É uma implementação da linguagem de
            programação S combinada com a semântica de escopo léxico e Schemas.
            S foi criado por John Chambers, na Bell Labs. Existem algumas
            diferenças importantes, mas a maior parte do código escrito para S
            funciona inalterado.
          </p>
          <br />
          <h2>Características</h2>
          <p>
            • Fornece acesso completo aos algoritmos e sua implementação <br />
            • Fornece um fórum permitindo aos pesquisadores explorar e expandir
            os métodos utilizados para analisar dados. <br />
            • É o produto de trabalho de mais de 1000 especialistas nas áreas de
            estatística e análise de dados. <br />
            • Permite que Cientistas de todo o mundo – e não apenas os dos
            países ricos – possam ter acesso as ferramentas de software
            necessárias para realizar pesquisas. <br />• Promove a investigação
            reprodutível (código criados como funções, podem ser reproduzidos),
            fornecendo ferramentas abertas e acessíveis <br />• As funções do R
            são escritas em … R! Isto permite verificar facilmente o que as
            funções realmente fazem.
          </p>
          <br />
          <h2>Por que aprender?</h2>
          <p>
            R está se tornando a língua padrão para a ciência de dados. Isso não
            quer dizer que é a única linguagem ou que é a melhor ferramenta para
            cada trabalho. É, no entanto, a mais amplamente utilizada e está
            aumentando em popularidade. A O’Reilly Media realizou uma pesquisa
            em 2014 para entender as ferramentas que os cientistas de dados
            estão usando atualmente. Eles descobriram que R é a linguagem de
            programação mais popular (se você excluir SQL como linguagem de
            programação). Olhando de forma mais ampla, existem outros rankings
            que olham para a popularidade das linguagens de programação em geral
            (não apenas entre os cientistas de dados). Por exemplo, Redmonk mede
            a popularidade de linguagens de programação através da análise de
            fóruns de discussão (Stack Overflow) e uso (no GitHub). Em seus
            últimos rankings, R está colocado em 13°, o mais alto de qualquer
            linguagem de programação estatística. O Redmonk também observou que
            R tem aumentado significativamente em popularidade ao longo do
            tempo. A linguagem pode ser executada em diferentes sistemas
            operacionais, como Windows, Mac OS e Linux e possui código aberto, o
            que permite sua utilização para visualização, modificação e
            distribuição de graça por qualquer pessoa ou empresa, com qualquer
            finalidade. Essas características contribuem de maneira
            significativa para seu desenvolvimento, levando a uma comunidade
            ativa de colaboradores espalhados pelo mundo, onde qualquer
            desenvolvedor pode contribuir para melhoria do sistema. Esta longa e
            confiável história do R, somada à sua grande e sólida comunidade de
            apoio, coloca-o como excelente opção para análise de dados e machine
            learning.
          </p>
          <br />
          <h2>Vantagens</h2>
          <p>
            • Rápido e gratuito <br />
            • Pesquisadores de Estatística fornecem os seus métodos em pacotes
            de R <br />
            • Nos gráficos perde apenas para o Matlab
            <br />
            • Comunidade de usuários ativos <br />
            • Excelente para a simulação, programação, análises intensivas de
            computador, etc. <br />• Interfaces com software de armazenamento de
            banco de dados (SQL)
          </p>
          <br />
          <h2>Desvantagens</h2>
          <p>
            • Curva de aprendizagem significativa <br />
            • Não há suporte comercial <br />• Trabalhando com grandes conjuntos
            de dados é limitada pela RAM <br />
            • Fácil cometer erros se não conhecer bem a linguagem <br />•
            Preparação e limpeza de dados pode ser mais confusa e mais propenso
            erro em R que em soluções proprietárias como SPSS ou SAS <br />
            • Descobrir que métodos utilizar ou como usar uma função pode ser
            frustrante. <br />
          </p>
          <br />
          <h2>Recursos estatísticos </h2>
          <p>
            A R disponibiliza uma ampla variedade de técnicas estatísticas e
            gráficas, incluindo modelação linear e não linear, testes
            estatísticos clássicos, análise de séries temporais (time-series
            analysis), classificação, agrupamento e outras. A R é facilmente
            extensível através de funções e extensões, sua comunidade é
            reconhecida pelos seus contributos ativos em termos de pacotes.
            Muitas das funções padrão do R são escritas no próprio R, o que
            torna fácil para os usuários seguir as escolhas algorítmicas feitas.
            Para tarefas computacionais intensivas, os códigos C, C++, e Fortran
            podem ser ligados e chamados durante a execução. Usuários
            experientes podem escrever código C ou Java para manipular
            diretamente objetos R. <br />
            O R é fortemente extensível através do uso de pacotes enviados pelo
            utilizador para funções específicas ou áreas específicas de estudo.
            Possui fortes recursos de programação orientada por objetos, mais
            que a maioria das linguagens de computação estatística. Ampliar o R
            também é facilitado pelas suas regras de contexto lexical. <br />
            Outra força do R são os gráficos estáticos, que podem produzir
            imagens com qualidade para publicação, incluindo símbolos
            matemáticos. Gráficos dinâmicos e interativos estão disponíveis
            através de pacotes adicionais. <br />
            O R tem a sua própria documentação em formato LaTeX, a qual é usada
            para fornecer documentação de fácil compreensão, simultaneamente
            on-line em diversos formatos e em papel. <br />
          </p>
          <br />
          <h2>Recursos de Programação </h2>
          <p>
            A R é uma linguagem interpretada tipicamente utilizada através de um
            Interpretador de comandos. Se um usuário escreve "2+2" no comando de
            inserção e pressiona enter, o computador responde com "4", conforme
            se mostra abaixo: <br />
            &gt; 2+2[1] 4 <br />
            Como muitas outras linguagens, a R suporta matrizes aritméticas. A
            estrutura de dados da R inclui escalares, vetores, matrizes, quadros
            de dados (similares a tabelas numa base de dados relacional) e
            listas. O sistema de objetos da R é extensível e inclui objectos
            para, entre outros, modelos de regressão, séries temporais e
            coordenadas geoespaciais. <br />
            A R suporta programação processual com funções e, para algumas
            funções, programação orientada a objetos com funções genéricas. Uma
            função genérica atua de forma diferente dependendo do tipo de
            argumentos que é passado. Por outras palavras a função genérica
            determina (dispatches) a função (método) específica para aquele tipo
            de objeto. Por exemplo, a R tem uma função genérica print() que pode
            imprimir quase qualquer tipo de objeto em R com uma simples sintaxe
            "print(nomedoobjeto)". <br />
            Enquanto a R é maioritariamente usada por estatísticos e outros
            utilizadores que requerem um ambiente para computação estatística e
            desenvolvimento de software, pode ser igualmente usada como uma
            caixa de ferramentas para cálculo matricial geral com benchmarks de
            desempenho comparáveis ao GNU Octave ou ao MATLAB. <br />
          </p>
          <br />
          <h2>Pacotes </h2>
          <p>
            As capacidades da R são estendidas através de pacotes criados pelo
            usuário, que permitem técnicas estatísticas especializadas,
            dispositivos gráficos, capacidades de importação/exportação,
            ferramentas de relatórios, etc. Estes pacotes são primeiro
            desenvolvidos em R, e por vezes em Java, C e Fortran. Um conjunto
            básico de pacotes são incluídos com a instalação do R, com 5300
            pacotes adicionais (a partir de abril 2012) disponíveis em
            Comprehensive R Archive Network (CRAN), Bioconductor, e outros
            repositórios. <br />
            A página "Task Views" (lista de assuntos) no website da CRAN lista a
            vasta gama de aplicações (Finança, genética, aprendizagem de
            máquinas, imagiologia médica, ciências sociais e estatísticas
            espaciais) nos quais R tem sido aplicada e para que pacotes está
            disponível. <br />
            Outros recursos do pacote R incluem Crantastic, um site comunitário
            para avaliação e revisão de todos os pacotes CRAN, e também R-Forge,
            uma plataforma central para o desenvolvimento colaborativo de
            pacotes R, software relacionado com R, e projetos. Tem muitos
            documentos não publicados, pacotes beta e versões de desenvolvimento
            de pacotes CRAN. <br />
            O projeto Bioconductor disponibiliza pacotes R para a análise de
            dados genómicos, tais como Affymetrix e cDNA de análise e
            manipulação de dados orientadas a objetos, e começou disponibilizar
            ferramentas para a análise de dados da próxima geração de métodos de
            alto rendimento de sequenciação. <br />
            A pesquisa reprodutível e geração automática de relatórios pode ser
            realizada com pacotes que suportam a execução de código R
            incorporado em LaTeX, OpenDocument format e outros marcadores
            (markups). <br />
          </p>
          <br />
          <h2>Versões </h2>
          <p>
            A lista completa de alterações é mantida no arquivo "R News" no site
            CRAN. Alguns destaques para algumas das principais versões estão
            listados abaixo.
            <br />
          </p>
          <br />
          <div className="table">
            <table
              style={{
                width: "90%",
                border: "3px solid #1A1E5C",
                borderRadius: "8px",
                textAlign: "justify",
              }}
            >
              <tr>
                <td>
                  <b>Versão</b>
                </td>
                <td>
                  <b>Data</b>
                </td>
                <td>
                  <b>Descrição</b>
                </td>
              </tr>
              <tr>
                <td>0.16</td>
                <td>01/04/1997</td>
                <td>
                  Essa foi a última versão alpha desenvolvida primariamente por
                  Ihaka e Gentleman. Muitas das funcionalidades descritas no
                  "Livro Branco" (Modelos Estatísticos em S) foram
                  implementadas. A lista de emails começou em 1 de Abril de
                  1997.
                </td>
              </tr>
              <tr>
                <td>0.49</td>
                <td>23/04/1997</td>
                <td>
                  Esse é o código fonte mais antigo disponível no CRAN.O próprio
                  CRAN foi lançado nessa data, com 3 mirrors hospedando
                  inicialmente 12 pacotes. Versões Alpha do R para Microsoft
                  Windows e Mac OS foram disponibilizadas logo depois dessa
                  versão.
                </td>
              </tr>
              <tr>
                <td>0.60</td>
                <td>05/12/1997</td>
                <td>
                  R se torna parte do Projeto GNU. O código passa a ser
                  hospedado e mantido usando CVS.
                </td>
              </tr>
              <tr>
                <td>0.65.1</td>
                <td>07/10/1999</td>
                <td>
                  Primeiras versões das funções update.packages e
                  install.packages para download e instalação de pacotes do
                  CRAN.
                </td>
              </tr>
              <tr>
                <td>1.0</td>
                <td>29/02/2000</td>
                <td>
                  Considerada pelos desenvolvedores como estável para uso em
                  produção.
                </td>
              </tr>
              <tr>
                <td>1.4</td>
                <td>19/12/2001</td>
                <td>
                  Métodos S4 foram introduzidos e a primeira versão para Mac OS
                  X foi lançada pouco depois.
                </td>
              </tr>
              <tr>
                <td>2.0</td>
                <td>04/10/2004</td>
                <td>
                  Introduzido lazy loading, que permite carregamento mais rápido
                  de dados e gasto de memória reduzido.
                </td>
              </tr>
              <tr>
                <td>2.1</td>
                <td>18/04/2005</td>
                <td>
                  Suporte para UTF-8 e esforços iniciais para localização e
                  internacionalização para outros idiomas.
                </td>
              </tr>
              <tr>
                <td>2.11</td>
                <td>22/04/2010</td>
                <td>Suporte para sistemas Windows de 64 bits.</td>
              </tr>
              <tr>
                <td>2.13</td>
                <td>14/04/2011</td>
                <td>
                  Adicionada uma nova função ao compilador que permite acelerar
                  a execução das instruções traduzindo-as para byte-code.
                </td>
              </tr>
              <tr>
                <td>2.14</td>
                <td>31/10/2011</td>
                <td>
                  Adicionados namespaces mandatórios para os pacotes. Adicionado
                  um novo pacote parallel.
                </td>
              </tr>
              <tr>
                <td>2.15</td>
                <td>30/03/2012</td>
                <td>
                  Novas funções de balanceamento de carga. Velocidade de
                  serialização melhorada para vetores longos.
                </td>
              </tr>
              <tr>
                <td>3.0</td>
                <td>03/04/2013</td>
                <td>
                  Suporte para indexadores numéricos de valor 231 e maiores em
                  sistemas de 64 bits.
                </td>
              </tr>
            </table>
          </div>
          <br />
          <h2>Suporte comercial para o R </h2>
          <p>
            Em 2007, a empresa Revolution Analytics foi fundada para
            disponibilizar suporte comercial para a Revolution R, a sua
            distribuição do R, que também inclui componentes desenvolvidos pela
            companhia. Os principais componentes adicionais incluem: ParallelR,
            o ambiente de produtividade IDE para o R, ScaleR (para análise de
            grandes dados), DeployR, quadro de serviços web, e a capacidade para
            ler e escrever dados no formato de arquivos do SAS.Em Abril de 2015
            a empresa foi adquirida pela Microsoft e seus produtos estão sendo
            gradativamente integrados a serviços do Microsoft Azure, a
            plataforma de cloud computing da Microsoft. <br />
            Em outubro de 2011, a Oracle Corporation anunciou o Big Data
            Appliance, que integra o R, o Apache Hadoop, o Oracle Enterprise
            Linux, e uma base de dados NoSQL com o hardware Exadata. O Oracle R
            Enterprise é agora um dos dois componentes do "Oracle Advanced
            Analytics Option"(o outro componente é o Oracle Data Mining). <br />
            TIBCO, o atual proprietário da linguagem S-Plus, está a permitir que
            alguns dos seus empregados apoiem ativamente o R participando na sua
            lista de discussão R-Help (anteriormente mencionada), e pelo
            patrocínio da série useR das reuniões de grupos de usuários. A
            Google é um grande utilizador interno do R e publica um guia de
            estilo. Patrocina os projetos R nos seus trabalhos Summer-of-Code, e
            também suporta financeiramente as séries de reuniões useR. <br />
            RStudio oferece software, educação e serviços para a comunidade R.{" "}
            <br />
          </p>
          <br />
          <h2>Bibliografia </h2>
          <p>
            <ExternalLink href="https://pt.wikipedia.org/wiki/R_(linguagem_de_programa%C3%A7%C3%A3o)">
              <span>Wikipedia</span>
            </ExternalLink>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Linguagem;
