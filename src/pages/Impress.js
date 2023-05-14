import React from "react";

import Footer from "./pageComponent/Footer";

class Impress extends React.Component{
    render () {
        return (
            <div>
                <div class="center">
                    <h1>Legal notice</h1>

                    <div class="w3-center">
                        <h4>Christiane Schäfer</h4>
                        <h4>sfr@hems.de</h4>
                        <h4>Heinrich-Emanuel-Merck-Schule</h4>
                        <h4>Alsfelder Straße 23</h4>
                        <h4>64289 Darmstadt</h4>
                        <h4>Telefon: 06151 13489800</h4>
                        <h4>Internet: www.hems.de</h4>
                        <br/>
                        <h6>Legal notice: On May 12, 1998, the Regional Court of Hamburg
                            ruled that by adding a link, the contents of the linked page 
                            may be co-responsible. According to the regional court, this
                            can only be prevented by expressly distancing oneself from 
                            these contents. We have set links to other pages on the Internet on our site.
                            The Heinrich-Emanuel-Merck-School hereby distances itself from 
                            all contents of all linked pages on this Internet presentation.</h6>
                        <br/>
                        <h6>
                        Liability notice:
                        Despite careful control of the content, we assume no liability for
                        the content of external links. The operators of the linked pages 
                        are solely responsible for their content.
                        </h6>
                        <br/>
                        <h6>
                        Copyright: All texts, illustrations, figures, documents and other material
                        are the property of the Heinrich-Emanuel-Merck-Schule - unless they are documents 
                        of others that have been made available to us. As a general rule, the copyright for 
                        the reproduction of this information belongs to the respective author. In principle,
                        therefore, the Internet pages on https://erasmus-recipe.herokuapp.com/ may not be redistributed or reproduced in any form,
                        in whole or in part, without the express prior written permission of the Heinrich-Emanuel-Merck-Schule.
                        </h6>

                    </div>

                </div>
                

                <Footer></Footer>
            </div>
        );
    }
}

export default Impress;