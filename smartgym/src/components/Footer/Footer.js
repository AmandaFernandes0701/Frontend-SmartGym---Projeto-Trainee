import React from "react"
import "./Footer.css"

function Footer(){
    return(
        <div className="body_footer">
            <div className="Smart_Gym_footer_icon_e_titulo">
                <div className="icon_smart_gym_footer">
                <img src="/images/logo_icon.png" alt="logo_icon_imagem" className="imagem_logo_footer"/>

                </div>
                <div className="titulo_smart_gym_footer">
                <p className="titulo_smart_gym_footer_SMART">Smart</p>
                <p className="titulo_smart_gym_footer_GYM">Gym</p>
                </div>
            </div>


            <div className="redes_sociais_footer">

                <div className="icone_whts_footer">
                <img src="/images/whatsapp_icon.png" alt="icone_whatsapp_footer" className="icon_whatsapp_footer"/>
                </div>

                <div className="facebook_footer">
                <img src="/images/facebook_icon.png" alt="icone_facebook_footer" className="icon_facebook_footer"/>
                </div>

                <div className="icone_instagram_footer">
                <img src="/images/instagram_icon.png" alt="icone_ig_footer" className="icon_ig_footer"/>
                </div>

            </div>


            <div className="inf_de_contato_footer">
                <div className="contato_gmail">
                    <img src="/images/contato_icon.png" alt="icone_contact_footer" className="icon_contact_footer"/>
                    <div className="contato_texto_footer">
                        <p>
                        contatoSmartGym@gmail.com
                        </p>
                    </div>
                </div>


                <div className="contato_endereco">
                    <img src="/images/location.jpg" alt="icone_location_footer" className="icon_location_footer"/>
                    <div className="endereco_texto_footer">
                        <p>Avenida Dos Andradas 1005 Santa Efigênia <div/>Belo Horizonte Minas Gerais 30150 Brasil<div/>Centro, Belo Horizonte MG, 3013-110</p>
                    </div>
                </div>


                <div className="contato_telefone">

                    <img src="/images/telefone.jpg" alt="icone_phone_footer" className="icon_phone_footer"/>
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