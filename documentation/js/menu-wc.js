'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-6e6b30dfa28f170a8502d85673372955b43a137d4dc58d75e835f3013a142701f5ad7510a45ae61a352461e936bdfd7419968bb03e114ea913683b6c5fe83841"' : 'data-bs-target="#xs-controllers-links-module-AppModule-6e6b30dfa28f170a8502d85673372955b43a137d4dc58d75e835f3013a142701f5ad7510a45ae61a352461e936bdfd7419968bb03e114ea913683b6c5fe83841"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-6e6b30dfa28f170a8502d85673372955b43a137d4dc58d75e835f3013a142701f5ad7510a45ae61a352461e936bdfd7419968bb03e114ea913683b6c5fe83841"' :
                                            'id="xs-controllers-links-module-AppModule-6e6b30dfa28f170a8502d85673372955b43a137d4dc58d75e835f3013a142701f5ad7510a45ae61a352461e936bdfd7419968bb03e114ea913683b6c5fe83841"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-6e6b30dfa28f170a8502d85673372955b43a137d4dc58d75e835f3013a142701f5ad7510a45ae61a352461e936bdfd7419968bb03e114ea913683b6c5fe83841"' : 'data-bs-target="#xs-injectables-links-module-AppModule-6e6b30dfa28f170a8502d85673372955b43a137d4dc58d75e835f3013a142701f5ad7510a45ae61a352461e936bdfd7419968bb03e114ea913683b6c5fe83841"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-6e6b30dfa28f170a8502d85673372955b43a137d4dc58d75e835f3013a142701f5ad7510a45ae61a352461e936bdfd7419968bb03e114ea913683b6c5fe83841"' :
                                        'id="xs-injectables-links-module-AppModule-6e6b30dfa28f170a8502d85673372955b43a137d4dc58d75e835f3013a142701f5ad7510a45ae61a352461e936bdfd7419968bb03e114ea913683b6c5fe83841"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NftsModule.html" data-type="entity-link" >NftsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NftsModule-20977e81b5c3d87503fdba3c4768b2598bcb7d8e052b691a95cbbd282b5a2ea44ea83223ef203ac6a54f224f851de3a3ff3bacb907769fd53b212ea423f6c6c5"' : 'data-bs-target="#xs-controllers-links-module-NftsModule-20977e81b5c3d87503fdba3c4768b2598bcb7d8e052b691a95cbbd282b5a2ea44ea83223ef203ac6a54f224f851de3a3ff3bacb907769fd53b212ea423f6c6c5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NftsModule-20977e81b5c3d87503fdba3c4768b2598bcb7d8e052b691a95cbbd282b5a2ea44ea83223ef203ac6a54f224f851de3a3ff3bacb907769fd53b212ea423f6c6c5"' :
                                            'id="xs-controllers-links-module-NftsModule-20977e81b5c3d87503fdba3c4768b2598bcb7d8e052b691a95cbbd282b5a2ea44ea83223ef203ac6a54f224f851de3a3ff3bacb907769fd53b212ea423f6c6c5"' }>
                                            <li class="link">
                                                <a href="controllers/NftsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NftsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NftsModule-20977e81b5c3d87503fdba3c4768b2598bcb7d8e052b691a95cbbd282b5a2ea44ea83223ef203ac6a54f224f851de3a3ff3bacb907769fd53b212ea423f6c6c5"' : 'data-bs-target="#xs-injectables-links-module-NftsModule-20977e81b5c3d87503fdba3c4768b2598bcb7d8e052b691a95cbbd282b5a2ea44ea83223ef203ac6a54f224f851de3a3ff3bacb907769fd53b212ea423f6c6c5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NftsModule-20977e81b5c3d87503fdba3c4768b2598bcb7d8e052b691a95cbbd282b5a2ea44ea83223ef203ac6a54f224f851de3a3ff3bacb907769fd53b212ea423f6c6c5"' :
                                        'id="xs-injectables-links-module-NftsModule-20977e81b5c3d87503fdba3c4768b2598bcb7d8e052b691a95cbbd282b5a2ea44ea83223ef203ac6a54f224f851de3a3ff3bacb907769fd53b212ea423f6c6c5"' }>
                                        <li class="link">
                                            <a href="injectables/NftsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NftsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateNftDto.html" data-type="entity-link" >CreateNftDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Nft.html" data-type="entity-link" >Nft</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateNftDto.html" data-type="entity-link" >UpdateNftDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});