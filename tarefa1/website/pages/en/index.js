/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="secion promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/iconeLogo.jpg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('doc1.html')}>Entendendo a ferramenta</Button>
            <Button href={docUrl('doc2.html')}>Doc Tarefa 2</Button>
            <Button href={docUrl('doc3.html')}>Doc Tarefa 3</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Eficiencia</h2>
        <MarkdownBlock>Podemos dividir nossa pagina em diversos blocos, com informações diferentes, 
          para atender as necessidades do nosso time. Com uma pagina colaborativa é 
          possível ganhar otimização. </MarkdownBlock>
      </div>
      
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'Podemos modificar a visualização da nossa pagina, inserir botões e links, ou deixar super simples apenas ' +
              'para visualizar documentos, como preferirem! ' +
              ' [**link para pagina**](https://undraw.co/) Aqui fica um exemplo de link ',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'right',
            title: 'Customizações',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content: 'A ferramenta é útil em diversas situações, como por exemplo: manter o controle de informações e ' +
            'documentos de uma equipe; ser usada como plataforma de divulgação de dados, ou funcionar ' + 
            'como blog pessoal. Tem possibilidade de criar espaço para receber comentários diretamente na página ' +
            '(link com o Facebook). É uma boa escolha na hora de manter documentação guardada com segurança e ainda ' +
            'manter controle de versões com o GitHub.',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'left',
            title: 'Ferramenta Colaborativa',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'É possível distribuir as informações, criar páginas para tratar de assuntos específicos, montar espaços etc.' ,
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'left',
            title: 'Diversas possibilidades',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Podemos ter diversos recursos agregados à nossa plataforma',
            image: `${baseUrl}img/lupa.png`,
            imageAlign: 'top',
            title: 'Explorando recursos',
          },
          {
            content: 'Diversas formas de inovar, deixando nossa plataforma maneira',
            image: `${baseUrl}img/lupa.png`,
            imageAlign: 'top',
            title: 'Tudo bem simples',
          },
          {
            content: 'Podemos incluir ou remover muita coisa',
            image: `${baseUrl}img/lupa.png`,
            imageAlign: 'top',
            title: 'Do nosso jeito',
          },

        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Quem está usando isso?</h2>
          <p>Esse projeto é usado por muitas pessoas</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
