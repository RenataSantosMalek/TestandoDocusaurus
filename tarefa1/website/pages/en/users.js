/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `${siteConfig.repoUrl}('/edit/master/website/index.js')`;
    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Quem está usando isso?</h1>
              <p>Esse projeto é usado por muitas pessoas</p>
            </div>
            <div className="logos">{showcase}</div>
            <p>Você está usando esse projeto?</p>
            <a href={editUrl} className="button">
              Adicione sua empresa
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
