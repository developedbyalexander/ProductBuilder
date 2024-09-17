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
                    <div class="c s12 m12 l12">
                        <label>
                            <select name="carSubmodel" id="carSubmodel">
                                <option value="">Selecteaza generatia</option>
                            </select>
                            <span id="carSubmodelError" class="error"></span>
                        </label>
                    </div>
                </div>
                <br/>
                <div class="gX gMX hBuildBox">
                    <div class="c s12 m12 l12">
                        <h3 class="pBuilderStep pBuilderStep2">Personalizeaza-ti mocheta</h3>
                        <div class="options">
                            <div class="option" id="baseColor">
                                <p class="option-title">Culoare cauciuc: <span class="value">Negru</span></p>
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
                "storageKey": "PTCProductBuilderRubber",
                "prices": {
                    "basePrice": 299,
                    "borderColor": 24,
                    "standard": [
                        {"baseColor": "black", "borderColor": "black"},
                        {"baseColor": "grey", "borderColor": "grey"},
                        {"baseColor": "beige", "borderColor": "beige"}
                    ]
                },
                "activeSettings": {
                    "baseColor": true,
                    "borderColor": true,
                    "threadType": false,
                    "threadColor": false,
                    "reinforcement": false,
                    "configuration": false,
                    "embroidery": false
                },
                "baseTitle": "Covorase auto"
            };
            PTCProductBuilder.init(config);
        });
    </script>
</div>
</body>
</html>