(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{396:function(e,n,t){var content=t(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(58).default)("0d89a33e",content,!0,{sourceMap:!1})},444:function(e,n,t){"use strict";t(396)},445:function(e,n,t){var r=t(57)(!1);r.push([e.i,"\n#banner[data-v-31b4b57d] {\r\n    display: flex;\r\n    justify-content: center;\r\n    background-image: url('/images/banner-1.jpg');\r\n    background-position: center;\r\n    background-size: cover;\r\n    height: 550px;\n}\n.column[data-v-31b4b57d] {\r\n    flex-direction: column;\n}\n.banner_headline[data-v-31b4b57d] {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\n}\n.banner_headline h1[data-v-31b4b57d] {\r\n    color: #ffffff;\r\n    font-size: 70px;\r\n    text-shadow: 2px 2px 2px#444444;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    max-width: 350px;\n}\n.banner_headline h2[data-v-31b4b57d] {\r\n    color: #ffffff;\r\n    font-size: 25px;\r\n    text-shadow: 2px 2px 2px#444444;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    margin: 0px;\r\n    margin-top: 30px;\r\n    padding: 0px;\r\n    max-width: 350px;\n}\n.banner_option[data-v-31b4b57d] {\r\n    height: 210px;\r\n    display: flex;\n}\n.banner1[data-v-31b4b57d],\r\n.banner2[data-v-31b4b57d],\r\n.banner3[data-v-31b4b57d] {\r\n  flex: 1;  \r\n  color: white;\r\n  padding: 20px;\n}\n.banner1[data-v-31b4b57d] {\r\n    background-color:#A8DADC;\n}\n.banner2[data-v-31b4b57d] {\r\n    background-color:#457B9D;\n}\n.banner3[data-v-31b4b57d] {\r\n    background-color:#1D3557;\n}\n.banner_title[data-v-31b4b57d] {\r\n    font-size: 21;\n}\n.banner_desc[data-v-31b4b57d] {\r\n    font-size: 12px;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\n}\n.banner_option a[data-v-31b4b57d] {\r\n    display: inline-block;\r\n    border: 1px solid #ffffff;\r\n    padding: 5px;\r\n    color: white;\r\n    font-size: 12px;\r\n    text-decoration: none;\n}\n.dia1[data-v-31b4b57d],\r\n.dia2[data-v-31b4b57d],\r\n.dia3[data-v-31b4b57d]{\r\n    border-bottom: gray solid 1px;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    font-size: 13px;\r\n    display: flex;\r\n    justify-content: space-between;\n}\n#geral[data-v-31b4b57d] {\r\n    display: flex;\r\n    justify-content: center;\n}\n#geral section[data-v-31b4b57d] {\r\n    flex: 2;\n}\n#geral aside[data-v-31b4b57d] {\r\n    flex: 1;\n}\n.widget_title[data-v-31b4b57d] {\r\n    margin-top: 30px;\r\n    margin-bottom: 20px;\n}\n.widget_title_text[data-v-31b4b57d] {\r\n    color: #000000;\r\n    font-size: 21px; \r\n    font-weight: bold;\n}\n.widget_title_bar[data-v-31b4b57d] {\r\n    width: 70px;\r\n    height: 5px;\r\n    background-color: #A8DADC;\r\n    margin-top:10px ;\n}\narticle a[data-v-31b4b57d] {\r\n    text-decoration: none;\n}\n.flex[data-v-31b4b57d] {\r\n    display: flex;\r\n    flex-wrap: wrap;\n}\narticle[data-v-31b4b57d] {\r\n    flex: 1;\r\n    min-width: 300px;\r\n    margin-right: 20px;\n}\narticle .news_data[data-v-31b4b57d] {\r\n    display: flex;\n}\narticle .news_posted_at[data-v-31b4b57d] {\r\n    background-color: #457B9D;\r\n    color: #ffffff;\r\n    font-size: 12px;\r\n    padding: 10px;\r\n    margin-right:2px;\n}\narticle .news_comments[data-v-31b4b57d] {\r\n    background-color: #1D3557;\r\n    color: #ffffff;\r\n    font-size: 12px;\r\n    padding: 10px;\n}\narticle .news_thumbnail[data-v-31b4b57d] {\r\n    margin-top: 30px;\n}\narticle .news_thumbnail img[data-v-31b4b57d]{\r\n    width: 100%;\r\n    height: auto;\n}\narticle .news_title[data-v-31b4b57d] {\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n    color: black;\r\n    font-size: 28px;\n}\narticle .news_resume[data-v-31b4b57d] {\r\n     color: #5c5c5c;\r\n     font-size: 14px;\r\n     line-height: 22px;\r\n     margin-bottom: 30px;\n}\r\n\r\n",""]),e.exports=r},466:function(e,n,t){"use strict";t.r(n);var r={name:"home",layout:"default",data:function(){return{loginEmail:"empty"}},mounted:function(){null!=$nuxt.$fire.auth.currentUser&&(this.loginEmail=$nuxt.$fire.auth.currentUser.email)}},o=(t(444),t(46)),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var e=this,n=e._self._c;return n("div",[n("section",{attrs:{id:"banner"}},[n("div",{staticClass:"container column"},[n("div",{staticClass:"banner_headline"},[n("h1",[e._v("Projeto Salus")]),e._v(" "),n("h2",[e._v("Encontre a unidade mais próxima para realizar seu exame")])]),e._v(" "),n("div",{staticClass:"banner_option"},[n("div",{staticClass:"banner1"},[n("div",{staticClass:"baneer_title"},[e._v("Precisa de ajuda?")]),e._v(" "),n("div",{staticClass:"banner_desc"},[e._v("A Salus possui vários recursos disponíveis para \n                        sanar suas dúvidas e não te deixar desamparado\n                    ")]),e._v(" "),n("a",{attrs:{href:"informacoes.html"}},[e._v("Clique Aqui")])]),e._v(" "),n("div",{staticClass:"banner2"},[n("div",{staticClass:"baneer_title"},[e._v("Seja um apoiador do projeto")]),e._v(" "),n("div",{staticClass:"banner_desc"},[e._v("Fortaleça nossa comunidade e divulge nossos projetos")]),e._v(" "),n("a",{attrs:{href:"sobre.html"}},[e._v("Clique Aqui")])]),e._v(" "),n("div",{staticClass:"banner3"},[n("div",{staticClass:"banner_title"},[e._v("Unidades gratuitas para teste HIV")]),e._v(" "),n("div",{staticClass:"dia1"},[n("div",[e._v("\n                            UBS Reunidas\n                        ")]),e._v(" "),n("div",[e._v("\n                            8:00 - 17:00\n                        ")])]),e._v(" "),n("div",{staticClass:"dia2"},[n("div",[e._v("\n                           UBS Jardim das Laranjeiras\n                        ")]),e._v(" "),n("div",[e._v("\n                            9:00 - 17:00\n                        ")])]),e._v(" "),n("div",{staticClass:"dia3"},[n("div",[e._v("\n                            UBS Parque Arthur Alvim\n                        ")]),e._v(" "),n("div",[e._v("\n                            8:00 - 15:00\n                        ")])])])])])]),e._v(" "),n("section",{attrs:{id:"geral"}},[n("div",{staticClass:"container"},[n("section",[n("div",{staticClass:"widget"},[n("div",{staticClass:"widget_title"},[n("div",{staticClass:"widget_title_text"},[e._v("Notícias Recentes")]),e._v(" "),n("div",{staticClass:"widget_title_bar"})]),e._v(" "),n("div",{staticClass:"widget_body flex"},[n("article",[n("a",{attrs:{href:""}},[n("div",{staticClass:"news_data"},[n("div",{staticClass:"news_posted_at"},[e._v("02 junho")]),e._v(" "),n("div",{staticClass:"news_comments"},[e._v("22")])]),e._v(" "),n("div",{staticClass:"news_thumbnail"},[n("img",{attrs:{src:"/images/noticia-1.jpg"}})]),e._v(" "),n("div",{staticClass:"news_title"},[e._v("\n                                HIV pode reduzir expectativa de vida em quase 5 anos em homens, diz estudo\n                            ")]),e._v(" "),n("div",{staticClass:"news_resume"},[e._v("\n                                O vírus HIV pode acelerar o envelhecimento em pessoas infectadas, antecipando \n                                o desgaste biológico do organismo dois a três anos após o contágio. \n                                Essa é a conclusão de um estudo realizado por pesquisadores da Universidade \n                                da Califórnia em Los Angeles (UCLA), nos Estados Unidos\n                            ")])])]),e._v(" "),n("article",[n("a",{attrs:{href:""}},[n("div",{staticClass:"news_data"},[n("div",{staticClass:"news_posted_at"},[e._v("28 março")]),e._v(" "),n("div",{staticClass:"news_comments"},[e._v("22")])]),e._v(" "),n("div",{staticClass:"news_thumbnail"},[n("img",{attrs:{src:"/images/noticia-2.jpeg"}})]),e._v(" "),n("div",{staticClass:"news_title"},[e._v("\n                                Argentina aprova lei que garante direitos e protege pessoas com HIV de discriminação\n                               ")]),e._v(" "),n("div",{staticClass:"news_resume"},[e._v("\n                                O Senado argentino aprovou por 60 votos a favor e apenas um voto contra, de Humberto Schianovi, \n                                do Partido Republicano, a Lei de Resposta Integral ao HIV, as Hepatites Virais, \n                                as Infecções Sexualmente Transmissíveis (IST) e a Tuberculose na noite desta quinta-feira (30).\n                                A sessão foi acompanhada através de um telão por uma grande mobilização na Praça do Congresso \n                                desde as 12h, que reuniu organizações sociais que militaram pelo direito desde 2016,\n                                quando o projeto de lei foi apresentado pela primeira vez no Congresso Nacional.\n                               ")])])]),e._v(" "),n("article",[n("a",{attrs:{href:""}},[n("div",{staticClass:"news_data"},[n("div",{staticClass:"news_posted_at"},[e._v("05 Fevereiro")]),e._v(" "),n("div",{staticClass:"news_comments"},[e._v("22")])]),e._v(" "),n("div",{staticClass:"news_thumbnail"},[n("img",{attrs:{src:"/images/noticia-3.jpg"}})]),e._v(" "),n("div",{staticClass:"news_title"},[e._v("\n                                Londrina amplia testes rápidos de sífilis, HIV e hepatite B e C para gestantes\n                               ")]),e._v(" "),n("div",{staticClass:"news_resume"},[e._v("\n                                A Rede Municipal de Saúde de Londrina, no Norte do Paraná, \n                                ampliou a aplicação de testes rápidos de HIV, sífilis, hepatites B e C nas \n                                gestantes atendidas nas Unidades Básicas de Saúde (UBS). \n                                Agora, quase todas as unidades oferecem os testes rápidos. \n                                As que ainda não disponibilizam, passarão a oferecer em julho.\n                                Antes da ampliação, as gestantes tinham acesso aos testes de HIV, sífilis,\n                                 hepatites B e C a cada três meses. A grande maioria era colhida de forma venosa, \n                                 que demora alguns dias para obter o resultado.\n                               ")])])]),e._v(" "),n("article",[n("a",{attrs:{href:""}},[n("div",{staticClass:"news_data"},[n("div",{staticClass:"news_posted_at"},[e._v("07 janeiro")]),e._v(" "),n("div",{staticClass:"news_comments"},[e._v("22")])]),e._v(" "),n("div",{staticClass:"news_thumbnail"},[n("img",{attrs:{src:"/images/noticia-4.jpg"}})]),e._v(" "),n("div",{staticClass:"news_title"},[e._v("\n                                43% das brasileiras não tomaram vacina contra HPV; 17% sequer sabem o que é a infecção\n                               ")]),e._v(" "),n("div",{staticClass:"news_resume"},[e._v("\n                                Estudos mostram a baixa proteção das brasileiras contra o HPV, \n                                doença sexualmente transmissível que pode causar câncer de colo de útero\n                                O HPV, sigla em inglês para Papilomavírus Humano, é a infecção sexualmente transmissível \n                                mais comum no mundo. Contudo, 17% das brasileiras não sabem que a doença é transmitida pelo sexo, \n                                como apontou um estudo realizado pela Famivita. Em Rondônia, esse número sobe para 35% \n                                - ou 1 a cada 3 mulheres.Mesmo que muitas mulheres entendam a origem da infecção, \n                                é elevado o número de brasileiras que ainda não se vacinaram contra o HPV. \n                                De acordo com o Trocando Fraldas, braço da Famivita, esse total chega a 43%.\n                                O maior número está no grupo de mulheres entre 30 e 35 anos (54%). \n                               ")])])])])])]),e._v(" "),n("aside",[n("div",{staticClass:"widget"},[n("div",{staticClass:"widget_title"},[n("div",{staticClass:"widget_title_text"},[e._v("Faça exames regularmente")]),e._v(" "),n("div",{staticClass:"widget_title_bar"})]),e._v(" "),n("div",{staticClass:"widget_body"},[e._v("\n                        Consultas e exames preventivos são fundamentais para manter a sua saúde em dia,\n                        ajudando a detectar doenças e desequilíbrios no organismo, principalmente\n                        aqueles que não dão sinais logo no início.\n                    ")])]),e._v(" "),n("div",{staticClass:"widget"},[n("div",{staticClass:"widget_title"},[n("div",{staticClass:"widget_title_text"},[e._v("Use preservativos")]),e._v(" "),n("div",{staticClass:"widget_title_bar"})]),e._v(" "),n("div",{staticClass:"widget_body"},[e._v("\n                        O preservativo, ou camisinha, é o método mais conhecido, acessível e eficaz para se prevenir da infecção \n                        pelo HIV e outras infecções sexualmente transmissíveis (IST), como a sífilis, a gonorreia \n                        e também alguns tipos de hepatites. Além disso, ele evita uma gravidez não planejada.\n                    ")])])])])])])}],!1,null,"31b4b57d",null);n.default=component.exports}}]);