import React from "react"
import "./Footer.css"
import Logo from "./logo_icon.png"
import WhatsApp from "./whatsapp_icon.png"
import Facebook from "./facebook_icon.png"
import Instagram from "./instagram_icon.png"
import Email from "./contato_icon.png"
import Telefone from "./telefone.jpg"
import Endereco from "./location.jpg"
// import Endereco from "./location.png"

function Footer(){
    return(
        <div className="body">
            <div className="Smart_Gym_footer">
                <div className="icon_smart_gym_footer">
                <img src={Logo}/>

                </div>
                <div className="titulo_smart_gym_footer">
                <p>SmartGym</p>
                </div>
            </div>


            <div className="redes_sociais_footer">
                <div className="icone_whatsapp_footer">
                <img src={WhatsApp}/>

                </div>
                <div className="icone_facebook_footer">
                <img src={Facebook}/>

                </div>
                <div className="icone_instagram_footer">
                <img src={Instagram}/>
                </div>
            </div>


            <div className="inf_de_contato_footer">
                <div className="contato_gmail">
                    <div className="contato_icon_footer">
                    <img src={Email}/>
                    </div>
                    <div className="contato_texto_footer">
                        <p>
                        contatoSmartGym@gmail.com
                        </p>
                    </div>
                </div>


                <div className="contato_endereco">
                    <div className="endereco_icon_footer">
                    <img src={Endereco}/>
                    </div>
                    <div className="endereco_texto_footer">
                        <p>Avenida Dos Andradas 1005 Santa Efigênia -</p>
                        <p>Belo Horizonte - Minas Gerais 30150 Brasil</p>
                        <p>- Centro, Belo Horizonte - MG, 3013-110</p>
                    </div>
                </div>


                <div className="contato_telefone">

                    <div className="telefone_icon_footer">
                    <img src={Telefone}/>
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