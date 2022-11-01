import React from "react"
import "./Footer.css"

function Footer(){
    return(
        <div className="body">
            <div className="Smart_Gym_footer">
                <div className="icon_smart_gym_footer">
                <img src="/images/logo_icon.png"/>

                </div>
                <div className="titulo_smart_gym_footer">
                <h3>Smart Gym</h3>
                </div>
            </div>


            <div className="redes_sociais_footer">
                <div className="icone_whatsapp_footer">
                <img src="/images/whatsapp_icon.png"/>

                </div>
                <div className="icone_facebook_footer">
                <img src="/images/facebook_icon.png"/>

                </div>
                <div className="icone_instagram_footer">
                <img src="/images/instagram_icon.png"/>
                </div>
            </div>


            <div className="inf_de_contato_footer">
                <div className="contato_gmail">
                    <div className="contato_icon_footer">
                    <img src="/images/contato_icon.png"/>
                    </div>
                    <div className="contato_texto_footer">
                        <p>
                        contatoSmartGym@gmail.com
                        </p>
                    </div>
                </div>


                <div className="contato_endereco">
                    <div className="endereco_icon_footer">
                    <img src="/components/images/endereco_icon.png"/>
                    </div>
                    <div className="endereco_texto_footer">
                        <p>Avenida Dos Andradas 1005 Santa Efigênia -</p>
                        <p>Belo Horizonte - Minas Gerais 30150 Brasil</p>
                        <p>- Centro, Belo Horizonte - MG, 3013-110</p>
                    </div>
                </div>


                <div className="contato_telefone">

                    <div className="telefone_icon_footer">
                    <img src="/images/telefone_icon.png"/>
                    </div>
                    <div className="telefone_texto_footer">
                        <p>
                        +55 (31) 3578-9967
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;