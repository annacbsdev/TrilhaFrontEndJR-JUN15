import './styles.css'
import videogame from '../../assets/videogame.png'
import desenhos from '../../assets/desenhos.png'
import musica from '../../assets/musica.png'
import collaboration from '../../assets/collaboration.png'

function Description({ mode }) {
    return (
        <div className="description">
            {mode === 'about' && (
                <>
                    <p>
                        👩‍💻 Engenheira Front-End formada pela EBAC – Escola Britânica de Artes Criativas e Tecnologia, com graduação em Tecnologia de Jogos Digitais. Sou uma profissional criativa com excelente raciocínio lógico e uma capacidade de aprendizagem rápida. Tenho experiência em gerenciamento de redes sociais e criação de designs digitais.
                    </p>
                    <p>
                        💡 Minhas áreas de atuação incluem desenvolvimento web (front e back-end integrados a APIs), design digital para Social Media, projetos freelance de design, desenvolvimento de jogos digitais e ilustração.
                    </p>
                    <p>
                        🌟 Habilidades Técnicas:
                        <br />
                        - Desenvolvimento Web: HTML, CSS, JavaScript, Sass, Bootstrap, Parcel, Gulp, Grunt, Less, jQuery, React, Ajax, Vue, Angular e TypeScript. <br />
                        - Controle de Versão: Git/Github. <br />
                        - Backend: Node.js. <br />
                        - Design e Prototipagem: Noções de Figma. <br />
                        - Outros: Python e Cypress. <br />
                    </p>
                </>
            )}
            {mode === 'personalInterests' && (
                <>
                    <div className="personal-interests">
                        <div class="interest">
                            <img src={videogame} alt='Videogame'/>
                            <div>
                                <h4>videogames</h4>
                                <br />
                                <p>
                                Sou apaixonada pelo mundo dos games, costumo me divertir muito jogando um bom jogo sozinha ou com meus amigos. 
                                </p>
                            </div>
                        </div>
                        <div class="interest">
                            <img src={desenhos} alt='Desenhos'/>
                            <div>
                                <h4>desenhos</h4>
                                <br />
                                <p>
                                    Outro hobby que tenho é desenhar, gosto muito de buscar inspiração online e rabiscar alguma coisa.
                                </p>
                            </div>
                        </div>
                        <div class="interest">
                            <img src={musica} alt='musica'/>
                            <div>
                                <h4>música</h4>
                                <br />
                                <p>
                                    A música está sempre presente, seja nos momentos de relaxamento, ou até mesmo na hora de programar. Sou bem eclética e ouço quase todos os tipos de música.
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {mode === 'motivations' && (
                <>

                <p> 
                    Gostaria muito de participar do grupo de voluntários da Código Certo, pois acredito minha paixão pelo desenvolvimento web possa ser de muita utilidade, e aprender com uma comunidade comprometida com causas sociais importantes me deixaria realizada profissionalmente e pessoalmente. 
                </p>    
                <img  src={collaboration} alt='ilustração de duas pessoas colaborando em um projeto' className='collaboration'/>
                <p>   
                    Acredito que através do meu conhecimento em tecnologias front-end, posso ajudar no que for necessário para o projeto. Além disso, me conectar com profissionais que buscam ajudar ao próximo me deixaria extremamente satisfeita.
                </p> 
                </>
            )}
        </div>
    );
}

export default Description;