<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="assets/css/site.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Sans+3&display=swap" rel="stylesheet">

    <!--fonts -->
    <link href="https://fonts.cdnfonts.com/css/georgia-2" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/league-spartan" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/minion-pro" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/mustardo" rel="stylesheet">
    <!--fonts -->

    <link rel="stylesheet" href="assets/vendor/tingle/tingle.min.css">
    <link rel="stylesheet" href="assets/vendor/glide/glide.core.min.css">

</head>
<body>
<div class="container">
    <div class="gC">
        <div class="gX gMX">
            <div class="c s12 m12 l12 prodTitle">
                <h1 class="product-title">Mocheta Personalizata1</h1>
            </div>
        </div>
    </div>
    <div class="gC">
        <div class="gX gMX product-builder" id="productBuilder">
            <div class="c s12 m6 l6 prodImgs">
                <div class="images">
                    <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase-auto-personalizate-1.jpg?v=1719428359" alt="Image" id="firstImage" width="351" height="351">
                </div>
            </div>
            <div class="c s12 m6 l6 prodContent" id="productBuilderFields">
                <div class="gX gMX hBuildBox car-details">
                    <div class="c s12 m12 l12"><h3 class="pBuilderStep pBuilderStep1">Alege-ti masina</h3></div>
                    <div class="c s6 m6 l6">
                        <label>
                            <select name="carBrand" id="carBrand">
                                <option value="">Selecteaza marca</option>
                                <option value="51">Aiways</option>
                                <option value="52">Aixam</option>
                                <option value="1">Alfa Romeo</option>
                                <option value="2">Audi</option>
                                <option value="60">Bentley</option>
                                <option value="3">BMW</option>
                                <option value="4">Chevrolet</option>
                                <option value="64">Chery</option>
                                <option value="5">Chrysler</option>
                                <option value="6">Citroen</option>
                                <option value="63">Cupra</option>
                                <option value="7">Dacia</option>
                                <option value="53">Daf</option>
                                <option value="8">Daewoo</option>
                                <option value="9">Daihatsu</option>
                                <option value="10">Dodge</option>
                                <option value="71">Dongfeng</option>
                                <option value="48">DS</option>
                                <option value="11">Fiat</option>
                                <option value="12">Ford</option>
                                <option value="65">GMC</option>
                                <option value="13">Honda</option>
                                <option value="14">Hyundai</option>
                                <option value="47">Infiniti</option>
                                <option value="15">Isuzu</option>
                                <option value="16">Iveco</option>
                                <option value="17">Jaguar</option>
                                <option value="18">Jeep</option>
                                <option value="19">Kia</option>
                                <option value="20">Lada</option>
                                <option value="49">Lamborghini</option>
                                <option value="50">Lancia</option>
                                <option value="21">Land Rover</option>
                                <option value="22">Lexus</option>
                                <option value="66">Ligier</option>
                                <option value="54">Man</option>
                                <option value="57">Maxus</option>
                                <option value="23">Mazda</option>
                                <option value="62">McLaren</option>
                                <option value="24">Mercedes</option>
                                <option value="67">Microcar</option>
                                <option value="25">Mini</option>
                                <option value="58">Minauto</option>
                                <option value="26">Mitsubishi</option>
                                <option value="27">Nissan</option>
                                <option value="28">Opel</option>
                                <option value="29">Peugeot</option>
                                <option value="68">Polestar</option>
                                <option value="30">Porsche</option>
                                <option value="32">Renault</option>
                                <option value="33">Rover</option>
                                <option value="34">Saab</option>
                                <option value="55">Scania</option>
                                <option value="35">Seat</option>
                                <option value="70">Seres</option>
                                <option value="36">Skoda</option>
                                <option value="37">Smart</option>
                                <option value="38">Ssang Yong</option>
                                <option value="39">Subaru</option>
                                <option value="40">Suzuki</option>
                                <option value="59">Tatra</option>
                                <option value="56">Tesla</option>
                                <option value="41">Toyota</option>
                                <option value="42">Universale</option>
                                <option value="43">Volkswagen</option>
                                <option value="44">Volvo</option>
                            </select>
                            <span id="carBrandError" class="error"></span>
                        </label>
                    </div>
                    <div class="c s6 m6 l6">
                        <label>
                            <select name="carModel" id="carModel">
                                <option value="">Selecteaza model</option>
                            </select>
                            <span id="carModelError" class="error"></span>
                        </label>
                    </div>
                    <div class="c s6 m6 l6">
                        <label>
                            <select name="carSubmodel" id="carSubmodel">
                                <option value="">Selecteaza generatia</option>
                            </select>
                            <span id="carSubmodelError" class="error"></span>
                        </label>
                    </div>
                    <div class="c s6 m6 l6">
                        <label>
                            <select name="carSubmodelTrunk" id="carSubmodelTrunk">
                                <option value="">Selecteaza tip portbagaj</option>
                            </select>
                            <span id="carSubmodelTrunkError" class="error"></span>
                        </label>
                    </div>
                </div>
                <br/>
                <div class="gX gMX hBuildBox">
                    <div class="c s12 m12 l12">
                        <h3 class="pBuilderStep pBuilderStep2">Personalizeaza-ti mocheta</h3>
                        <div class="options">
                            <div class="option" id="baseColor">
                                <p class="option-title">Culoare mocheta: <span class="value">Negru</span></p>
                                <div class="option-values">
                                    <label class="option-value color black">
                                        <input type="radio" name="baseColor" value="black" checked>
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color graphite-grey" style="display:none;">
                                        <input type="radio" name="baseColor" value="graphite-grey">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color grey">
                                        <input type="radio" name="baseColor" value="grey">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color beige">
                                        <input type="radio" name="baseColor" value="beige">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color red" style="display:none">
                                        <input type="radio" name="baseColor" value="red">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                </div>
                            </div>
                            <div class="option" id="borderColor">
                                <p class="option-title">Culoare margine: <span class="value">Negru</span></p>
                                <div class="option-values">
                                    <label class="option-value color black">
                                        <input type="radio" name="borderColor" value="black" checked>
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color blue">
                                        <input type="radio" name="borderColor" value="blue">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color darkBlue">
                                        <input type="radio" name="borderColor" value="darkBlue">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color purple">
                                        <input type="radio" name="borderColor" value="purple">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color yellow">
                                        <input type="radio" name="borderColor" value="yellow">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color white">
                                        <input type="radio" name="borderColor" value="white">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color magenta">
                                        <input type="radio" name="borderColor" value="magenta">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color grey">
                                        <input type="radio" name="borderColor" value="grey">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color anthraciteGrey">
                                        <input type="radio" name="borderColor" value="anthraciteGrey">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color red">
                                        <input type="radio" name="borderColor" value="red">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color orange">
                                        <input type="radio" name="borderColor" value="orange">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color beige">
                                        <input type="radio" name="borderColor" value="beige">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                </div>
                            </div>
                            <div class="option" id="threadType">
                                <p class="option-title">Tip cusatura: <span class="value">simpla</span></p>
                                <div class="option-values">
                                    <label class="option-value box">
                                        <input type="radio" name="threadType" value="simple" checked>
                                        <span class="box-text">Simpla</span>
                                    </label>
                                    <label class="option-value box">
                                        <input type="radio" name="threadType" value="double">
                                        <span class="box-text">Dubla</span>
                                    </label>
                                </div>
                            </div>
                            <div class="option" id="threadColor">
                                <p class="option-title">Culoare ata: <span class="value">Negru</span></p>
                                <div class="option-values">
                                    <label class="option-value color black">
                                        <input type="radio" name="threadColor" value="black" checked>
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color blue">
                                        <input type="radio" name="threadColor" value="blue">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color purple">
                                        <input type="radio" name="threadColor" value="purple">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color yellow">
                                        <input type="radio" name="threadColor" value="yellow">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color white">
                                        <input type="radio" name="threadColor" value="white">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color magenta">
                                        <input type="radio" name="threadColor" value="magenta">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color grey">
                                        <input type="radio" name="threadColor" value="grey">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color red">
                                        <input type="radio" name="threadColor" value="red">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color orange">
                                        <input type="radio" name="threadColor" value="orange">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                    <label class="option-value color beige">
                                        <input type="radio" name="threadColor" value="beige">
                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="gX gMX ">
                            <div class="c s12 m12 l12">
                                <h4 id="productTitle"></h4>
                            </div>
                            <div class="c s6 m6 l6">
                                <p>COD: AP123456<br/>Brand: PTC-Auto</p>
                            </div>
                            <div class="c s6 m6 l6">
                                <p class="pBuilderShipping">Livrare maine<br><span class="product-price" id="price"><span>299</span> lei</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gX gMX hBuildBox">
                    <div class="c s12 m12 l12">
                        <h3 class="pBuilderStep pBuilderStep3">Broderie</h3>
                        <div class="options">
                            <div class="option" id="embroidery">
                                <p class="option-title">Adauga broderie: <span class="value">nu</span></p>
                                <div class="option-values">
                                    <label class="option-value box">
                                        <input type="radio" name="embroidery" value="no" checked>
                                        <span class="box-text">Nu</span>
                                    </label>
                                    <label class="option-value box">
                                        <input type="radio" name="embroidery" value="yes">
                                        <span class="box-text">Da</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div id="embroideryBuilder" style="display:none;">
                            <div id="controls">

                                <div id="embroideryEditModal" class="tingle-modal embroidery-add-element-modal" style="display: none;">
                                    <button type="button" class="tingle-modal__close">
                                        <span class="tingle-modal__closeIcon">
                                            <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M.3 9.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3L5 6.4l3.3 3.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L6.4 5l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L5 3.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L3.6 5 .3 8.3c-.4.4-.4 1 0 1.4z" fill="#000" fill-rule="nonzero"></path>
                                            </svg>
                                        </span>
                                        <span class="tingle-modal__closeLabel">Close</span>
                                    </button>
                                    <div class="tingle-modal-box">
                                        <div class="tingle-modal-box__content">
                                            <h2 class="title-wrapper" id="embroideryEditModalTitle">Adauga/editeaza broderia</h2>
                                            <div class="options">
                                                <div class="option" id="embroideryElementType">
                                                    <p class="option-title">Alege tip broderie:</p>
                                                    <div class="option-values">
                                                        <label class="option-value box">
                                                            <input type="radio" name="embroideryElementType" value="text" checked>
                                                            <span class="box-text">Text</span>
                                                        </label>
                                                        <label class="option-value box" style="display: none;">
                                                            <input type="radio" name="embroideryElementType" value="image">
                                                            <span class="box-text">Imagine</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="option" id="embroideryItem" style="display:none;">
                                                    <p class="option-title">Selecteaza covoras:</p>
                                                    <div class="option-values">
                                                        <label class="option-value box">
                                                            <input type="radio" name="item" value="item-1" checked>
                                                            <span class="box-text">Covoras sofer</span>
                                                        </label>
                                                        <label class="option-value box">
                                                            <input type="radio" name="item" value="item-2">
                                                            <span class="box-text">Covoras pasager</span>
                                                        </label>
                                                        <label class="option-value box">
                                                            <input type="radio" name="item" value="item-3">
                                                            <span class="box-text" >Covoras spate stanga</span>
                                                        </label>
                                                        <label class="option-value box">
                                                            <input type="radio" name="item" value="item-4">
                                                            <span class="box-text">Covoras spate dreapta</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="types-and-canvas">
                                                <div class="element-types">
                                                    <form action="#" id="embroideryTextForm">
                                                        <div class="options">
                                                            <label for="textInput">
                                                                <input type="text" id="embroideryTextInput" name="content" placeholder="Introdu textul aici"  maxlength="15" value="Text">
                                                            </label>
                                                            <div class="option" id="embroideryTextFont">
                                                                <p class="option-title">Selecteaza font:</p>
                                                                <div class="option-values">
                                                                    <label class="option-value box">
                                                                        <input type="radio" name="font" value="Georgia" checked>
                                                                        <span class="box-text" style="font-family: 'Georgia', sans-serif">Text</span>
                                                                    </label>
                                                                    <label class="option-value box">
                                                                        <input type="radio" name="font" value="League Spartan">
                                                                        <span class="box-text" style="font-family: 'League Spartans', sans-serif">Text</span>
                                                                    </label>
                                                                    <label class="option-value box">
                                                                        <input type="radio" name="font" value="Minion Pro">
                                                                        <span class="box-text" style="font-family: 'Minion Pro', sans-serif">Text</span>
                                                                    </label>
                                                                    <label class="option-value box">
                                                                        <input type="radio" name="font" value="Mustardo">
                                                                        <span class="box-text" style="font-family: 'Mustardo', sans-serif">Text</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="option" id="embroideryTextPosition">
                                                                <p class="option-title">Alege pozitia:</p>
                                                                <div class="option-values">
                                                                    <label class="option-value box">
                                                                        <input type="radio" name="position" value="center-bottom" checked>
                                                                        <span class="box-text">Jos</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="option" id="embroideryTextFlip">
                                                                <p class="option-title">Roteste textul:</p>
                                                                <div class="option-values">
                                                                    <label class="option-value box">
                                                                        <input type="radio" name="flip" value="no" checked>
                                                                        <span class="box-text">Nu</span>
                                                                    </label>
                                                                    <label class="option-value box">
                                                                        <input type="radio" name="flip" value="yes">
                                                                        <span class="box-text">Da</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="option" id="embroideryTextColor">
                                                                <p class="option-title">Culoare broderie:</p>
                                                                <div class="option-values">
                                                                    <label class="option-value color black">
                                                                        <input type="radio" name="color" value="black" checked>
                                                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                                                    </label>
                                                                    <label class="option-value color blue">
                                                                        <input type="radio" name="color" value="blue">
                                                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                                                    </label>
                                                                    <label class="option-value color purple">
                                                                        <input type="radio" name="color" value="purple">
                                                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                                                    </label>
                                                                    <label class="option-value color yellow">
                                                                        <input type="radio" name="color" value="yellow">
                                                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                                                    </label>
                                                                    <label class="option-value color white">
                                                                        <input type="radio" name="color" value="white">
                                                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                                                    </label>
                                                                    <label class="option-value color magenta">
                                                                        <input type="radio" name="color" value="magenta">
                                                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                                                    </label>
                                                                    <label class="option-value color grey">
                                                                        <input type="radio" name="color" value="grey">
                                                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                                                    </label>
                                                                    <label class="option-value color red">
                                                                        <input type="radio" name="color" value="red">
                                                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                                                    </label>
                                                                    <label class="option-value color orange">
                                                                        <input type="radio" name="color" value="orange">
                                                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                                                    </label>
                                                                    <label class="option-value color beige">
                                                                        <input type="radio" name="color" value="beige">
                                                                        <span class="circle-button-wrapper"><span class="circle-button"></span></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <input type="hidden" id="textItem" name="item" value="">
                                                        <div class="footer-btns">
                                                            <button type="button" class="btn delete" id="removeText" style="display: none">Sterge</button>
                                                            <button type="submit" class="btn save" data-type="save">Salveaza</button>
                                                            <button type="submit" class="btn save" data-type="save-close">Salveaza si inchide</button>
                                                        </div>
                                                    </form>
                                                    <form action="#" id="embroideryIconForm" style="display: none">
                                                        <h1>Adauga icon</h1>
                                                        <div class="options">
                                                            <div class="option" id="embroideryIcon">
                                                                <p class="option-title">Selecteaza icon:</p>
                                                                <div class="option-values">
                                                                    <label class="option-value image checked">
                                                                        <input type="radio" name="icon" value="embroidery_icon_0" checked>
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_0.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_1">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_1.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_2">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_2.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_3">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_3.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_4">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_4.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_5">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_5.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_6">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_6.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_7">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_7.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_8">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_8.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_9">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_9.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_10">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_10.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_11">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_11.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_12">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_12.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_13">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_13.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_14">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_14.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_15">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_15.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_16">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_16.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_17">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_17.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_18">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_18.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_19">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_19.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_20">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_20.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_21">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_21.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_22">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_22.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_23">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_23.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_24">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_24.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_25">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_25.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_26">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_26.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_27">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_27.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_28">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_28.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_29">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_29.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_30">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_30.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_31">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_31.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_32">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_32.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_33">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_33.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_34">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_34.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_35">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_35.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_36">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_36.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_37">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_37.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_38">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_38.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_39">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_39.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_40">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_40.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_41">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_41.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_42">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_42.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_43">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_43.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_44">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_44.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_45">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_45.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_46">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_46.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_47">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_47.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_48">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_48.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_49">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_49.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_50">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_50.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_51">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_51.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_52">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_52.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_53">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_53.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_54">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_54.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_55">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_55.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_56">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_56.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_57">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_57.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_58">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_58.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_59">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_59.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_60">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_60.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_61">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_61.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_62">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_62.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_63">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_63.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_64">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_64.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_65">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_65.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_66">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_66.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_67">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_67.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_68">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_68.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_69">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_69.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_70">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_70.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_71">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_71.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_72">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_72.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_73">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_73.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_74">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_74.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_75">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_75.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_76">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_76.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_77">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_77.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_78">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_78.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_79">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_79.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_80">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_80.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_81">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_81.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_82">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_82.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_83">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_83.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_84">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_84.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_85">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_85.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_86">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_86.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_87">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_87.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_88">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_88.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_89">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_89.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_90">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_90.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_91">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_91.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_92">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_92.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_93">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_93.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_94">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_94.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_95">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_95.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_96">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_96.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_97">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_97.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_98">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_98.png" alt="Icon">
                                                                    </label>
                                                                    <label class="option-value image">
                                                                        <input type="radio" name="icon" value="embroidery_icon_99">
                                                                        <img src="https://cdn.shopify.com/s/files/1/0324/8091/9684/files/embroidery_icon_99.png" alt="Icon">
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="rotate" >
                                                                <label for="embroideryRotateIcon">Roteste imaginea aleasa</label>
                                                                <input type="range" min="0" max="360" value="0"  name="rotate" id="embroideryRotateIcon">
                                                            </div>
                                                            <div class="option" id="embroideryIconPosition">
                                                                <p class="option-title">Alege pozitia:</p>
                                                                <div class="option-values">
                                                                    <label class="option-value box">
                                                                        <input type="radio" name="position" value="center-bottom" checked>
                                                                        <span class="box-text">Jos</span>
                                                                    </label>
                                                                    <label class="option-value box">
                                                                        <input type="radio" name="position" value="center-left">
                                                                        <span class="box-text">Stanga</span>
                                                                    </label>
                                                                    <label class="option-value box">
                                                                        <input type="radio" name="position" value="center-right">
                                                                        <span class="box-text">Dreapta</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <input type="hidden" id="iconItem" name="item" value="">
                                                        <div class="footer-btns">
                                                            <button type="button" class="btn delete" id="removeIcon" style="display: none">Sterge</button>
                                                            <button type="submit" class="btn save" data-type="save">Salveaza</button>
                                                            <button type="submit" class="btn save" data-type="save-close">Salveaza si inchide</button>
                                                        </div>
                                                    </form>

                                                </div>
                                                <div class="embroideryImages">
                                                    <div class="embroideryImage" id="embroideryModalImageItem5"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="glide" id="embroideryImages">
                                <div class="glide__track" data-glide-el="track">
                                    <ul class="glide__slides">
                                        <li class="glide__slide">
                                            <div class="embroideryImageWrapper">
                                                <div class="embroideryImage" id="embroideryImageItem5"></div>
                                                <button class="btn" onclick="PTCProductBuilder.embroideryBuilder.showEmbroideryEditModal('all')">Editeaza tavita portbagaj</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="glide__arrows" data-glide-el="controls">
                                    <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><</button>
                                    <button class="glide__arrow glide__arrow--right" data-glide-dir=">">></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <button type="submit" class="add-to-cart" id="submitProductBuilder">Adauga in cos</button>
                <div style="margin: 11px 0 0 0; color: #424242; background: #f1f1f1; padding: 10px 15px; border-radius: 6px;">
                    <span style="display: block; font-weight: bold;">Atenție, dragi clienți!</span>Pentru că mochetele cu broderie sunt personalizate 100%, le putem procesa doar prin plata in avans cu cardul. Vă mulțumim pentru înțelegere!
                </div>
                <br><br>
            </div>
        </div>

    </div>
    <script src="assets/vendor/konva/konva.min.js"></script>
    <script src="assets/vendor/tingle/tingle.js"></script>
    <script src="assets/vendor/glide/glide.min.js"></script>
    <script src="assets/js/script.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const config = {
                "apiURL": "https://api.ptc-auto.ro/apis/cauciuc_1.php",
                "fetchOptionURL": "https://api.ptc-auto.ro/apis/get-car-options.php",
                "embroiderySaveImageURL": "https://api.ptc-auto.ro/apis/save-image.php",
                "embroideryImagesURL": "https://media.ptc-auto.ro/img/comenzi-broderie/",
                "embroideryIconsURL": "https://cdn.shopify.com/s/files/1/0324/8091/9684/files/",
                "storageKey": "PTCProductBuilderTray",
                "prices": {
                    "basePrice": 299,
                    "borderColor": 24,
                    "standard": [
                        {
                            "baseColor": "black",
                            "borderColor": "black"
                        },
                        {
                            "baseColor": "grey",
                            "borderColor": "grey"
                        },
                        {
                            "baseColor": "beige",
                            "borderColor": "beige"
                        }
                    ],
                    "embroidery": {
                        "1": 50,
                        "2": 90,
                        "3": 130,
                        "4": 160,
                        "5": 223,
                        "6": 260,
                        "7": 302,
                        "8": 320
                    },
                    "threadColor": {
                        "simple": 14,
                        "double": 24
                    },
                },
                "activeCarSettings": {
                    'carBrand': true,
                    'carModel': true,
                    'carSubmodel': true,
                    'carSubmodelTrunk': true
                },
                "activeSettings": {
                    "baseColor": true,
                    "borderColor": true,
                    "threadType": false,
                    "threadColor": true,
                    "reinforcement": false,
                    "configuration": false,
                    "embroidery": true
                },
                "baseTitle": "Covorase auto",
                "embroideryItemKeys": [
                    "item-5"
                ]
            };
            PTCProductBuilder.init(config);
        });
    </script>
</div>
</body>
</html>