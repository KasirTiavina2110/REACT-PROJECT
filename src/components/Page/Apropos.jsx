import '../../css/apropos.css';
import { useEffect } from 'react';
import $ from 'jquery';

// Import des images
import kasirImage from '../../assets/images/Kasir.jpg';
import reactImage from '../../assets/images/React.jpg';
import codeIgniterImage from '../../assets/images/code-igniter-web-development.png';
import javaImage from '../../assets/images/JAVA.jpeg';

function Apropos() {

    useEffect(() => {
        // Page cursors
        $(document).on('mousemove', function (n) {
            $('#cursor').css('left', n.clientX + 'px');
            $('#cursor').css('top', n.clientY + 'px');
            $('#cursor2').css('left', n.clientX + 'px');
            $('#cursor2').css('top', n.clientY + 'px');
            $('#cursor3').css('left', n.clientX + 'px');
            $('#cursor3').css('top', n.clientY + 'px');
        });

        $('.hover-target').hover(
            function () {
                $('#cursor2, #cursor3').addClass('hover');
            },
            function () {
                $('#cursor2, #cursor3').removeClass('hover');
            }
        );

        // About page
        $('.about-text').on('click', function () {
            $('body').addClass('about-on');
        });
        $('.about-close').on('click', function () {
            $('body').removeClass('about-on');
        });

        // Contact page
        $('.contact-text').on('click', function () {
            $('body').addClass('contact-on');
        });
        $('.contact-close').on('click', function () {
            $('body').removeClass('contact-on');
        });

        // Travel portfolio page
        $('.travel').on('click', function () {
            $('body').addClass('travel-on');
        });
        $('.travel-close').on('click', function () {
            $('body').removeClass('travel-on');
        });

        // Wildlife portfolio page
        $('.wildlife').on('click', function () {
            $('body').addClass('wildlife-on');
        });
        $('.wildlife-close').on('click', function () {
            $('body').removeClass('wildlife-on');
        });

        // Nature portfolio page
        $('.nature').on('click', function () {
            $('body').addClass('nature-on');
        });
        $('.nature-close').on('click', function () {
            $('body').removeClass('nature-on');
        });
    }, []); // Effect runs once after initial render

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1"></div>
                </div>
            </div>

            <div className="fullbody">
                <div className="hero-section">
                    <div className="about-text hover-target">A propos</div>
                    <div className="contact-text hover-target">Contact</div>
                    <div className="section-center">
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <h1>Tiavina Kasir</h1>
                                </div>
                                <div className="col-12 text-center mb-2">
                                    <div className="dancing">web developper</div>
                                </div>
                                <div className="col-12 text-center mt-4 mt-lg-5">
                                    <p>
                                        <span className="travel hover-target">
                                            <i className="fab fa-react"></i> React js
                                        </span>
                                        <span className="wildlife hover-target">
                                            <i className="fab fa-php"></i> Php codeigniter
                                        </span>
                                        <span className="nature hover-target">
                                            <i className="fab fa-java"></i> Java
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-section">
                    <div className="about-close hover-target"></div>
                    <div className="section-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <img src={kasirImage} alt="Kasir" />
                                </div>
                                <div className="col-lg-8 text-center mt-4">
                                    <p>
                                        Developpeur junior specialisé dans le developpement web (backend). Apprendre est une de mes passions, 
                                        c est pour cela que je me suis dirigé dans le secteur de l informatique 
                                    </p>
                                </div>
                                <div className="col-12 text-center">
                                    <p>
                                        <span>Tiavina Kasir</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-section">  
                    <div className="contact-close hover-target"></div>
                    <div className="section-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <a href="#" className="hover-target">tiavinakasir@gmail.com</a>
                                </div>
                                <div className="col-12 text-center social mt-4">
                                    <a href="#" className="hover-target">instagram</a>
                                    <a href="#" className="hover-target">flickr</a>
                                    <a href="#" className="hover-target">facebook</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="travel-section">  
                    <div className="travel-close hover-target"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <h3>React JS</h3>
                            </div>
                            <div className="col-12 mt-3 text-center">
                                <p><span>React Js c est quoi ?</span></p>
                            </div>
                            <div className="col-12 text-center">
                                <p>
                                    React JS est une bibliothèque JavaScript open-source développée par Facebook pour la construction d interfaces utilisateur interactives et dynamiques. Avec React, les développeurs peuvent créer des composants réutilisables qui facilitent le développement d applications web évolutives.
                                </p>
                            </div>
                            <div className="col-12 text-center">
                                <p>
                                    En utilisant la logique de composant, React permet de créer des applications web modernes et performantes tout en offrant une expérience utilisateur fluide et réactive.
                                </p>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <img src={reactImage} alt="React JS" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="wildlife-section">  
                    <div className="wildlife-close hover-target"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <h3>Codeigniter</h3>
                            </div>
                            <div className="col-12 mt-3 text-center">
                                <p><span>CodeIgniter c est quoi ?</span></p>
                            </div>
                            <div className="col-12 text-center">
                                <p>
                                    CodeIgniter est un framework de développement web PHP léger, rapide et flexible. Il offre des fonctionnalités puissantes pour le développement rapide d applications web.
                                </p>
                            </div>
                            <div className="col-12 text-center">
                                <p>
                                    Avec CodeIgniter, les développeurs peuvent créer des applications web dynamiques et interactives tout en maintenant une structure de code claire et organisée.
                                </p>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <img src={codeIgniterImage} alt="Codeigniter" />
                            </div>          
                        </div>
                    </div>
                </div>
                
                <div className="nature-section">  
                    <div className="nature-close hover-target"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <h3>Java</h3>
                            </div>
                            <div className="col-12 mt-3 text-center">
                                <p><span>Java c est quoi ?</span></p>
                            </div>
                            <div className="col-12 mt-3 text-center">
                                <p>
                                    Java est un langage de programmation polyvalent, populaire pour son utilisation dans le développement d applications web, mobiles et d entreprise. Il est connu pour sa portabilité, sa fiabilité et sa sécurité.
                                </p>
                            </div>
                            <div className="col-12 text-center">
                                <p>
                                    Java est également utilisé dans le développement d applications Android, de logiciels d entreprise et de systèmes embarqués.
                                </p>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <img src={javaImage} alt="Java" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cursor' id="cursor"></div>
                <div className='cursor2' id="cursor2"></div>
                <div className='cursor3' id="cursor3"></div>
            </div>
        </>
    );
}

export default Apropos;
