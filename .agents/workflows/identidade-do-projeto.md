---
description: IDENTIDADE DO PROJETO  Este projeto é o desenvolvimento do site da:  Avivamento & Restauração SJM / IAR–SJM  O projeto representa a presença digital da igreja e será utilizado também como um projeto real de aprendizado em React.
---



O objetivo não é simplesmente reconstruir o site antigo.

O objetivo é utilizar a reconstrução para aprender React de maneira prática e estruturada.

SITE ATUAL

O site atual foi desenvolvido utilizando:

HTML;
CSS;
JavaScript.

O projeto atual está hospedado no GitHub Pages.

Repositório:

https://github.com/GilbertoAlbuquerque1/Avivamento-e-Restauracao-SJM

Site:

https://gilbertoalbuquerque1.github.io/Avivamento-e-Restauracao-SJM/

O site existente deve ser tratado como referência funcional e visual, não como código que deve ser convertido automaticamente.

NOVA VERSÃO

A nova versão será reconstruída utilizando:

React;
Vite;
JavaScript;
CSS.

A implementação deve começar de forma organizada e progressiva.

Não fazer uma migração automática de todo o HTML para JSX.

OBJETIVO DA MIGRAÇÃO

A migração deve ensinar a transformar:

HTML tradicional
↓
JSX
↓
componentes
↓
props
↓
state
↓
eventos
↓
dados
↓
arquitetura React

Cada transformação deve ser compreendida antes de avançar.

PRINCÍPIO FUNDAMENTAL

O site é simultaneamente:

um projeto real da igreja;
um projeto de portfólio;
um laboratório de aprendizagem React.

Por isso, o agente deve evitar implementar funcionalidades complexas apenas para "terminar o site".

A prioridade é:

aprender → construir corretamente → evoluir o projeto.

ESTRUTURA INICIAL

A nova aplicação deve começar com uma arquitetura simples.

Não criar dezenas de componentes sem necessidade.

A estrutura inicial deve evoluir conforme o projeto cresce.

Uma possível organização:

src/
├── assets/
├── components/
├── pages/
├── App.jsx
├── main.jsx
└── ...

Essa estrutura é uma referência inicial, não uma regra absoluta.

A arquitetura deve ser ajustada conforme surgirem necessidades reais.

PRIMEIRA FASE — REACT

A primeira fase deve concentrar-se nos fundamentos.

Prioridade:

criar projeto React com Vite;
entender main.jsx;
entender App.jsx;
entender JSX;
criar primeiro componente;
criar componentes reutilizáveis;
organizar componentes;
criar estrutura visual;
trabalhar com props;
trabalhar com eventos;
trabalhar com state;
trabalhar com listas;
trabalhar com formulários.

Não iniciar banco de dados nesta fase.

TRANSIÇÃO HTML → JSX

Essa é uma das etapas pedagógicas mais importantes.

Sempre que uma parte do site antigo for reconstruída, explique:

HTML original

O que existia.

JSX

Como fica no React.

Diferença

O que mudou.

Motivo

Por que mudou.

Componente

Como transformar essa estrutura em uma unidade reutilizável.

Exemplo conceitual:

HTML
<section>
    <h1>...</h1>
</section>

↓

JSX

↓

Componente React

O objetivo é que Gilberto compreenda a transformação, não apenas copie o resultado.

COMPONENTIZAÇÃO

Componentes devem representar partes reais da interface.

Possíveis componentes:

Header;
Navigation;
Hero;
Button;
Section;
Card;
EventCard;
Footer;
MobileMenu;
Form;
etc.

Não criar componentes excessivamente pequenos apenas para aumentar a quantidade de arquivos.

A pergunta deve ser:

"Esta parte possui responsabilidade própria ou pode ser reutilizada?"

HEADER

O header atual possui:

logo;
navegação;
comportamento responsivo;
menu mobile;
estado ativo da navegação.

Na versão React, o header deve ser utilizado para ensinar:

componentes;
eventos;
state;
renderização condicional;
props;
navegação.

Não implementar toda a lógica de uma vez.

Primeiro construir a estrutura.

Depois adicionar comportamento.

HERO

O Hero deve preservar a identidade visual do site, mas pode ser modernizado.

Deve permitir futuramente:

título;
subtítulo;
imagem;
CTA;
conteúdo configurável.

Usar o Hero para ensinar:

JSX;
props;
composição;
reutilização.
SEÇÕES E CARDS

O site possui diversas seções baseadas em cards.

Essas partes são excelentes oportunidades para ensinar:

arrays;
objetos;
map();
props;
componentes reutilizáveis.

Quando houver vários cards semelhantes, evitar duplicação manual.

Ensinar a diferença entre:

duplicar HTML

e

renderizar componentes a partir de dados
EVENTOS

O site possui funcionalidades relacionadas a:

Encontro com Deus;
células;
inscrições.

Inicialmente, os eventos podem utilizar dados locais.

Exemplo conceitual:

const eventos = [...]

Depois:

eventos
↓
map()
↓
EventCard
↓
props

Somente posteriormente considerar API/banco de dados.

FORMULÁRIOS

O site possui áreas de:

apoio espiritual;
apoio social;
outros pedidos.

Na primeira fase, os formulários podem funcionar apenas no frontend.

Usar essas funcionalidades para aprender:

inputs;
eventos;
state;
controlled components;
validação;
submit.

Backend e envio real devem ser implementados posteriormente.

WHATSAPP

Existe a ideia de encaminhar determinadas solicitações para WhatsApp.

Não implementar automaticamente.

Primeiro construir:

formulário → state → validação → submit

Depois estudar a melhor forma de integração.

PÁGINAS

O site possui páginas/conteúdos como:

Home;
Sobre Nós;
Precisa de Ajuda;
Eventos.

A navegação deve inicialmente ser compreendida antes de adicionar soluções complexas.

Quando chegar o momento, estudar React Router.

IDENTIDADE VISUAL

A identidade visual atual utiliza principalmente:

azul;
preto;
branco;
tons neutros.

Variáveis anteriormente utilizadas incluem:

--cor1: #e6e3e3;
--cor2: #F1F5F9;
--cor3: #0EA5E9;
--cor4: #1E3A5F;
--cor5: #1F2937;
--cor6: #0F172A;

Fontes utilizadas anteriormente:

Montserrat;
Inter;
Roboto Condensed.

A identidade pode evoluir durante a reconstrução.

Não é necessário copiar o CSS antigo literalmente.

RESPONSIVIDADE

O site deve continuar sendo responsivo.

Priorizar:

mobile;
tablet;
desktop.

O comportamento responsivo deve ser construído de forma consciente.

Não simplesmente copiar todas as media queries do projeto antigo.

FUTURO DO PROJETO

Depois da primeira versão React estar consolidada, o projeto poderá evoluir para:

banco de dados;
autenticação;
cadastro;
inscrição em eventos;
área de membros;
acesso a conteúdos;
vídeos;
área de líderes;
funcionalidades administrativas;
integração com serviços externos;
eventual aplicação mobile.

Essas funcionalidades são FUTURAS.

Não antecipar sua implementação sem que os fundamentos necessários estejam dominados.

BANCO DE DADOS

O banco de dados não deve ser implementado apenas porque existe interesse futuro.

Antes disso, Gilberto deve compreender:

React;
state;
formulários;
APIs;
HTTP;
frontend/backend;
persistência de dados;
autenticação.

Quando chegar o momento, escolher a arquitetura com base na necessidade real.

REGRA DE IMPLEMENTAÇÃO

Sempre que adicionarmos uma funcionalidade:

1. Entender o problema
2. Definir o comportamento
3. Pensar na estrutura
4. Identificar componentes
5. Identificar dados
6. Implementar
7. Testar
8. Refatorar
9. Registrar o que foi aprendido
NÃO FAZER

Evitar:

copiar código sem entender;
transformar todo o site antigo em um único componente;
criar componentes desnecessários;
introduzir bibliotecas sem necessidade;
instalar dependências apenas porque são populares;
adicionar backend prematuramente;
criar banco de dados antes da necessidade;
complicar a arquitetura;
esconder conceitos importantes atrás de abstrações.
DEBUGGING DO PROJETO

Quando houver um problema, identificar primeiro a categoria:

HTML/JSX

CSS

JavaScript

React

Vite

npm/Node

dependência

ambiente

arquitetura

Não assumir automaticamente que todo erro é um problema do React.

GIT E GITHUB

O projeto deve ser desenvolvido utilizando Git.

Quando apropriado, ensinar:

commits;
branches;
histórico;
alterações;
pull;
push;
README;
organização do repositório.

Os commits devem representar mudanças compreensíveis.

Evitar commits genéricos quando for possível utilizar mensagens mais descritivas.

PORTFÓLIO

Este projeto poderá ser utilizado como projeto de portfólio.

Por isso, valorizar:

código organizado;
commits compreensíveis;
README;
responsividade;
acessibilidade;
boas práticas;
evolução registrada;
decisões técnicas documentadas.

Não inventar funcionalidades apenas para tornar o projeto mais impressionante.

MÉTODO DE TRABALHO

O agente deve trabalhar com Gilberto em pequenas etapas.

Exemplo:

Sprint

"Hoje vamos construir o Header."

Depois:

explicar;
planejar;
Gilberto implementa;
agente revisa;
corrigir;
testar;
consolidar aprendizado.

Somente então avançar.

QUANDO GILBERTO PEDIR CÓDIGO

Primeiro determine se ele está:

aprendendo;
corrigindo;
implementando;
pedindo explicitamente solução pronta.

Se estiver aprendendo:

prefira ensinar.

Se estiver corrigindo:

analise o código existente.

Se estiver implementando:

construa em etapas.

Se pedir explicitamente a solução completa:

forneça, mas explique.

REGRA ESPECIAL DO PROJETO

Não trate o site como um exercício descartável.

Ele representa uma igreja real.

Portanto, decisões de:

conteúdo;
acessibilidade;
navegação;
segurança;
formulários;
privacidade;
dados;
autenticação;

devem ser tratadas com cuidado.

Quando uma funcionalidade envolver dados reais de pessoas, considerar segurança e privacidade antes de implementá-la.

OBJETIVO FINAL

A versão final deverá ser uma aplicação React moderna, organizada, responsiva e preparada para futuras integrações.

Mas o maior resultado esperado não é apenas o site.

É que Gilberto consiga olhar para a aplicação e explicar:

"Eu sei por que essa estrutura existe."

"Eu sei por que esse componente existe."

"Eu sei de onde esses dados vêm."

"Eu sei como o estado funciona."

"Eu sei como encontrar um erro."

"Eu consigo continuar desenvolvendo sozinho."

Esse é o verdadeiro objetivo deste projeto.