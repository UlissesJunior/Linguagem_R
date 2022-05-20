import "./styles/app.css";
import Nav from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

import Anime1 from "./img/anime-r.png";
import Anime2 from "./img/anime-2.png";
import Icon1 from "./img/video_icon.png";
import Icon2 from "./img/exercicios_icon.png";
import Icon3 from "./img/artigo_icon.png";
import Icon4 from "./img/r_icon.png";

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
          <h3>
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
          </h3>
          <br />
          <h2>História</h2>
          <h3>
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
          </h3>
          <br />
          <h2>Características</h2>
          <h3>
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
          </h3>
          <br />
          <h2>Por que aprender?</h2>
          <h3>
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
          </h3>
          <br />
          <h2>Vantagens</h2>
          <h3>
            • Rápido e gratuito <br />
            • Pesquisadores de Estatística fornecem os seus métodos em pacotes
            de R <br />
            • Nos gráficos perde apenas para o Matlab
            <br />
            • Comunidade de usuários ativos <br />
            • Excelente para a simulação, programação, análises intensivas de
            computador, etc. <br />• Interfaces com software de armazenamento de
            banco de dados (SQL)
          </h3>
          <br />
          <h2>Desvantagens</h2>
          <h3>
            • Curva de aprendizagem significativa <br />
            • Não há suporte comercial <br />
            • Trabalhando com grandes conjuntos de dados é limitada pela RAM <br />
            • Fácil cometer erros se não conhecer bem a linguagem <br />
            • Preparação e limpeza de dados pode ser mais confusa e mais propenso erro em R que em soluções proprietárias como SPSS ou SAS <br />
            • Descobrir que métodos utilizar ou como usar uma função pode ser frustrante. <br />
          </h3>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Linguagem;
