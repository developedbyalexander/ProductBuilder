"use strict"

const PTCProductBuilder = {
    apiURL: null,
    fetchOptionURL: null,
    embroiderySaveImageURL: null,
    embroideryImagesURL: null,
    embroideryIconsURL: null,
    embroideryItemKeys: ['item-1', 'item-2', 'item-3', 'item-4'],
    storageKey: null,
    activeCarSettings: {
        'carBrand': true,
        'carModel': true,
        'carSubmodel': true,
        'carSubmodelTrunk': false
    },
    activeSettings: {
        'baseColor': true,
        'borderColor': true,
        'threadType': true,
        'threadColor': true,
        'reinforcement': true,
        'configuration': true,
        'embroidery': true
    },
    currentSettings: {
        'version': '1.2.0',
        'baseColor': 'black',
        'borderColor': 'black',
        'threadType': 'simple',
        'threadColor': 'black',
        'reinforcement': 'no',
        'configuration': 'full',
        'embroidery': 'no'
    },
    embroiderySettings: {
        itemActions: {},
        currentPositions: {}
    },
    colorHexMappings: {
        'black': '#000',
        'grey': '#a1a1a1',
        'beige': '#d5c0a9',
        'blue': '#0091f7',
        'purple': '#7925c7',
        'yellow': '#f7cd28',
        'white': '#fff',
        'magenta': '#ffb2ff',
        'red': '#ff0000',
        'orange': '#f7761c'
    },
    carSettings: {
        carBrand: null,
        carModel: null,
        carSubmodel: null,
        carSubmodelTrunk: null
    },
    mappings: {
        colors: {
            'black': 'Negru',
            'graphite-grey': 'Gri grafit',
            'grey': 'Gri',
            'beige': 'Bej',
            'blue': 'Albastru',
            'purple': 'Mov',
            'yellow': 'Galben',
            'white': 'Alb',
            'magenta': 'Ciclam',
            'red': 'Rosu',
            'orange': 'Portocaliu'
        },
        configurations: {
            'trunk': 'Portbagaj',
            'full-with-trunk': 'Fata, spate si portbagaj',
            'full': 'Fata si spate',
            'front': 'Fata'
        },
        threadTypes: {
            'simple': 'Simpla',
            'double': 'Dubla'
        },
        yesNo: {
            'no': 'Nu',
            'yes': 'Da'
        }
    },
    images: {},
    prices: {},
    baseTitle: '',
    optionTextValueMappings: {
        'baseColor': 'colors',
        'borderColor': 'colors',
        'configuration': 'configurations',
        'threadType': 'threadTypes',
        'threadColor': 'colors',
        'reinforcement': 'yesNo',
        'embroidery': 'yesNo'
    },
    odooMappings: {
        'baseColor': {
            id: 2,
            name: 'Culoare Mocheta',
            values: {
                'black': 'negru',
                'grey': 'gri',
                'beige': 'bej'
            }
        },
        'borderColor': {
            id: 4,
            name: 'Culoare margine PIELE',
            values: {
                'black': 'negru',
                'blue': 'albastru',
                'purple': 'ciclam',
                'yellow': 'galben',
                'white': 'alb',
                'magenta': 'mov',
                'grey': 'gri',
                'red': 'rosu',
                'orange': 'portocaliu',
                'beige': 'bej',
            }
        },
        'threadType': {
            id: 14,
            name: 'Tip ata',
            values: {
                'simple': 'simpla',
                'double': 'dubla'
            }
        },
        'threadColor': {
            id: 3,
            name: 'Culoare ata',
            values: {
                'black': 'negru',
                'blue': 'albastru',
                'purple': 'ciclam',
                'yellow': 'galben',
                'white': 'alb',
                'magenta': 'mov',
                'grey': 'gri',
                'red': 'rosu',
                'orange': 'portocaliu',
                'beige': 'bej',
            }
        },
        'reinforcement': {
            id: 15,
            name: 'Intaritura calcai sofer',
            values: {
                'no': 'nu',
                'yes': 'da'
            }
        },
    },
    init: async function (config) {
        this.applyConfig(config);
        this.addListeners();
        if (this.storage.hasSettings()) {
            this.currentSettings = this.storage.getSettings();
            await this.updateOptionsBySettings();
        }
        this.preloadImages();
        if (this.isActiveSetting('embroidery')) {
            this.embroideryBuilder.init();
        }
    },
    applyConfig: function (config) {
        const configKeys = [
            'apiURL',
            'fetchOptionURL',
            'embroiderySaveImageURL',
            'embroideryImagesURL',
            'embroideryIconsURL',
            'storageKey',
            'images',
            'prices',
            'activeCarSettings',
            'activeSettings',
            'baseTitle',
            'embroideryItemKeys'
        ];
        for (const key of configKeys) {
            if (config.hasOwnProperty(key)) {
                this[key] = config[key];
            }
        }
    },
    addListeners: function () {
        if (this.isActiveSetting('baseColor')) {
            document.querySelectorAll('input[name="baseColor"]').forEach(input => {
                input.addEventListener('input', this.changeOption);
            });
        }
        if (this.isActiveSetting('borderColor')) {
            document.querySelectorAll('input[name="borderColor"]').forEach(input => {
                input.addEventListener('input', this.changeOption);
            });
        }
        if (this.isActiveSetting('threadType')) {
            document.querySelectorAll('input[name="threadType"]').forEach(input => {
                input.addEventListener('input', this.changeOption);
            });
        }
        if (this.isActiveSetting('threadColor')) {
            document.querySelectorAll('input[name="threadColor"]').forEach(input => {
                input.addEventListener('input', this.changeOption);
            });
        }
        if (this.isActiveSetting('reinforcement')) {
            document.querySelectorAll('input[name="reinforcement"]').forEach(input => {
                input.addEventListener('input', this.changeOption);
            });
        }
        if (this.isActiveSetting('configuration')) {
            document.querySelectorAll('input[name="configuration"]').forEach(input => {
                input.addEventListener('input', this.changeOption);
            });
        }
        if (this.isActiveSetting('embroidery')) {
            document.querySelectorAll('input[name="embroidery"]').forEach(input => {
                input.addEventListener('input', this.changeOption);
                input.addEventListener('input', this.toggleEmbroideryBuilder);
            });
        }

        if (this.isActiveCarSetting('carBrand')) {
            document.getElementById('carBrand').addEventListener('change', this.changeBrand);
        }
        if (this.isActiveCarSetting('carModel')) {
            document.getElementById('carModel').addEventListener('change', this.changeModel);
        }
        if (this.isActiveCarSetting('carSubmodel')) {
            document.getElementById('carSubmodel').addEventListener('change', this.changeSubmodel);
        }
        if (this.isActiveCarSetting('carSubmodelTrunk')) {
            document.getElementById('carSubmodelTrunk').addEventListener('change', this.changeSubmodelTrunk);
        }

        document.getElementById('submitProductBuilder').addEventListener('click', this.submit);
    },
    changeOption: function () {
        PTCProductBuilder.updateSetting(this.name, this.value);
        PTCProductBuilder.setOptionTextValue(this.name, this.value);
    },
    toggleEmbroideryBuilder: function (value = null) {
        const embroideryBuilderEl = document.getElementById('embroideryBuilder');
        if (value === 'block' || value === 'none') {
            embroideryBuilderEl.style.display = value;
        } else {
            embroideryBuilderEl.style.display = this.value === 'yes' ? 'block' : 'none';
        }
        if (embroideryBuilderEl.style.display === 'block') {
            new Glide('#embroideryImages').mount()
        }
    },
    setOptionTextValue: function (optionKey, value) {
        if (['_odoo_attributes', 'version'].includes(optionKey)) return;
        const optionEl = document.getElementById(optionKey);
        const titleText = optionEl.querySelector('.value');
        if (titleText) {
            const key = this.optionTextValueMappings[optionKey];
            titleText.innerText = this.mappings[key]?.[value] ?? value;
        }
    },
    updateSetting: function (key, value) {
        this.currentSettings[key] = value;
        this.storage.saveSettings(this.currentSettings);
        this.updateImages();
        this.updatePrice();
        if (this.isActiveSetting('embroidery')) {
            this.embroideryBuilder.updateCanvasByCurrentSettings();
        }
    },
    updateCarSettings: function (name, value) {
        this.currentSettings[name] = value;
        this.storage.saveSettings(this.currentSettings);
    },
    updateOptionsBySettings: async function () {
        for (const setting in this.currentSettings) {
            if (!this.isActiveSetting(setting)) continue;
            const value = this.currentSettings[setting];
            if (setting === 'carBrand' || setting === 'carModel' || setting === 'carSubmodel') {
                this.carSettings[setting] = value;
                const el = document.querySelector(`#${setting} option[value='${value}']`);
                if (el) el.selected = true;
                await this.updateCarSelect(setting);
            } else {
                const el = document.querySelector(`input[name="${setting}"][value="${value}"]`);
                if (el) el.checked = true;
            }
            this.setOptionTextValue(setting, value);
        }
        if (this.isActiveSetting('embroidery')) {
            if (this.currentSettings.embroidery === 'yes') {
                this.toggleEmbroideryBuilder('block');
            } else {
                this.toggleEmbroideryBuilder('none');
            }
        }
        this.updateImages();
        this.updatePrice();
    },
    updateImages: function () {
        const settings = this.currentSettings;
        const images = this.images[`${settings.baseColor}-${settings.borderColor}`] ?? false;
        if (images) {
            document.getElementById('firstImage').src = this.resizeImage(images.firstImage, '_450x450_crop_center');
            document.getElementById('secondImage').src = this.resizeImage(images.secondImage, '_450x450_crop_center');
            document.getElementById('thirdImage').src = this.resizeImage(images.thirdImage, '_450x450_crop_center');
            document.getElementById('fourthImage').src = this.resizeImage(images.fourthImage, '_450x450_crop_center');
            document.getElementById('fifthImage').src = this.resizeImage(images.fifthImage, '_450x450_crop_center');
            if( images.sixthImage === false){
                document.getElementById('sixthImage').style.display = "none";
            }else{
                document.getElementById('sixthImage').style.display = "block";
                document.getElementById('sixthImage').src = this.resizeImage(images.sixthImage, '_450x450_crop_center');
            }
            if( images.seventhImage === false){
                document.getElementById('seventhImage').style.display = "none";
            }else{
                document.getElementById('seventhImage').style.display = "block";
                document.getElementById('seventhImage').src = this.resizeImage(images.seventhImage, '_450x450_crop_center');
            }

        }
    },
    updatePrice: function () {
        const price = this.getPriceByCurrentSettings();
        const priceEl = document.getElementById('price');
        const priceValue = priceEl.getElementsByTagName('span');
        priceValue[0].innerText = price;
    },
    getPriceByCurrentSettings: function () {
        let price;
        if (this.isStandardPrice()) {
            price = this.prices.basePrice;
        } else {
            const standardPriceDiff = this.getStandardPriceDiff();
            price = this.prices.basePrice
            for (const diff of standardPriceDiff) {
                if (diff === 'threadType' || diff === 'threadColor') {
                    price += this.prices.threadColor[this.currentSettings.threadType]
                } else {
                    price += this.prices[diff]
                }
            }
        }
        if (PTCProductBuilder.currentSettings.embroidery === 'yes') {
            price = price + this.getEmbroideryPriceBySettings()
        }
        return price;
    },
    getEmbroideryPriceBySettings: function () {
        const itemActions = this.embroiderySettings.itemActions;
        let embroideryElsCount = 0;
        for (const item in itemActions) {
            const itemEls = Object.keys(itemActions[item]['page']);
            embroideryElsCount = embroideryElsCount + itemEls.length;
        }
        return this.prices.embroidery[embroideryElsCount] ?? 0;
    },
    isStandardPrice: function () {
        return Boolean(this.prices.standard.find(obj => {
            for (const key in this.currentSettings) {
                if (['carBrand', 'carModel', 'carSubmodel', 'embroidery'].includes(key)) continue;
                if (!this.isActiveSetting(key)) continue;
                if (this.currentSettings.hasOwnProperty(key) && this.currentSettings[key] !== obj[key]) {
                    return false;
                }
            }
            return true;
        }));
    },
    getStandardPriceDiff: function () {
        let diff = [];
        for (const standardPrice of this.prices.standard) {
            if(this.currentSettings.baseColor !== standardPrice.baseColor) continue;
            const currentDiff = [];
            for (const key in this.currentSettings) {
                if (['carBrand', 'carModel', 'carSubmodel', 'embroidery', '_odoo_attributes', 'version'].includes(key)) continue;
                if (this.currentSettings.hasOwnProperty(key) && this.currentSettings[key] !== standardPrice[key]) {
                    if (!this.isActiveSetting(key)) continue;
                    currentDiff.push(key);
                }
            }
            if (diff.length === 0 || currentDiff.length < diff.length) {
                diff = currentDiff;
            }
        }
        return diff;
    },
    changeBrand: async function () {
        PTCProductBuilder.carSettings.carBrand = this.value;
        PTCProductBuilder.carSettings.carModel = null;
        PTCProductBuilder.carSettings.carSubmodel = null;
        PTCProductBuilder.carSettings.carSubmodelTrunk = null;
        await PTCProductBuilder.updateCarSelect('carBrand');
        PTCProductBuilder.updateCarSettings(this.name, this.value);
    },
    changeModel: async function () {
        PTCProductBuilder.carSettings.carModel = this.value;
        PTCProductBuilder.carSettings.carSubmodel = null;
        PTCProductBuilder.carSettings.carSubmodelTrunk = null;
        await PTCProductBuilder.updateCarSelect('carModel');
        PTCProductBuilder.updateCarSettings(this.name, this.value);
    },
    changeSubmodel: async function () {
        PTCProductBuilder.carSettings.carSubmodel = this.value;
        PTCProductBuilder.carSettings.carSubmodelTrunk = null;
        await PTCProductBuilder.updateCarSelect('carSubmodel');
        PTCProductBuilder.updateCarSettings(this.name, this.value);
    },
    changeSubmodelTrunk: async function () {
        PTCProductBuilder.carSettings.carSubmodelTrunk = this.value;
        await PTCProductBuilder.updateCarSelect('carSubmodelTrunk');
        PTCProductBuilder.updateCarSettings(this.name, this.value);
    },
    updateCarSelect: async function (type) {
        const modelSelect = document.getElementById('carModel');
        const submodelSelect = document.getElementById('carSubmodel');
        const submodelTrunkSelect = document.getElementById('carSubmodelTrunk');
        const titleEl = document.getElementById('productTitle');

        titleEl.innerText = '';

        if (type === 'carBrand') {
            modelSelect.innerHTML = '';
            submodelSelect.innerHTML = '';

            const modelBlankOption = document.createElement('option');
            modelBlankOption.textContent = 'Selecteaza model';
            modelSelect.appendChild(modelBlankOption);

            const submodelBlankOption = document.createElement('option');
            submodelBlankOption.textContent = 'Selecteaza submodel';
            submodelSelect.appendChild(submodelBlankOption);

            if (this.isActiveCarSetting('carSubmodelTrunk')) {
                submodelTrunkSelect.innerHTML = '';
                const submodelTrunkBlankOption = document.createElement('option');
                submodelTrunkBlankOption.textContent = 'Selecteaza tip portbagaj';
                submodelTrunkSelect.appendChild(submodelTrunkBlankOption);
            }
        }
        if (type === 'carModel') {
            submodelSelect.innerHTML = '';

            const submodelBlankOption = document.createElement('option');
            submodelBlankOption.textContent = 'Selecteaza submodel';
            submodelSelect.appendChild(submodelBlankOption);

            if (this.isActiveCarSetting('carSubmodelTrunk')) {
                submodelTrunkSelect.innerHTML = '';
                const submodelTrunkBlankOption = document.createElement('option');
                submodelTrunkBlankOption.textContent = 'Selecteaza tip portbagaj';
                submodelTrunkSelect.appendChild(submodelTrunkBlankOption);
            }
        }

        if (type === 'carSubmodel') {
            titleEl.innerText = this.getProcessedTitleByCurrentSettings();

            if (this.isActiveCarSetting('carSubmodelTrunk')) {
                submodelTrunkSelect.innerHTML = '';
                const submodelTrunkBlankOption = document.createElement('option');
                submodelTrunkBlankOption.textContent = 'Selecteaza tip portbagaj';
                submodelTrunkSelect.appendChild(submodelTrunkBlankOption);
            }
        }

        if (type === 'carBrand' || type === 'carModel' || type === 'carSubmodel') {
            const options = await PTCProductBuilder.getCarOptions();
            debugger

            options.forEach(item => {
                const option = document.createElement('option');
                option.value = item.id;
                option.textContent = item.name;
                switch (type) {
                    case "carBrand":
                        modelSelect.appendChild(option);
                        break;
                    case "carModel":
                        submodelSelect.appendChild(option);
                        break;
                    case "carSubmodel":
                        if (this.isActiveCarSetting('carSubmodelTrunk')) {
                            submodelTrunkSelect.appendChild(option);
                        }
                        break;
                }
            });
        }
    },
    getSelectedOption: function (id) {
        const selectElement = document.getElementById(id);
        const selectedIndex = selectElement.selectedIndex ?? null;
        return selectedIndex ? selectElement.options[selectedIndex].text : null;
    },
    getCheckedRadioValue: function getCheckedRadioValue(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return null;
        const radios = container.querySelectorAll('input[type="radio"]');
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                return radios[i].value;
            }
        }
        return null;
    },
    getCheckedRadioOptionText: function getCheckedRadioValue(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return null;
        const radios = container.querySelectorAll('input[type="radio"]');
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                return radios[i].parentElement.querySelector('.box-text').innerText
            }
        }
        return null;
    },
    getCarOptions: async function () {
        const urlParams = new URLSearchParams();
        for (const key in this.carSettings) {
            if (this.carSettings[key] !== null) {
                urlParams.append(key, this.carSettings[key]);
            }
        }
        const urlParamsStr = urlParams.toString();
        if (urlParamsStr.length === 0) return [];
        const url = `${this.fetchOptionURL}?${urlParamsStr}`;
        return await this.fetchData(url);
    },
    fetchData: async function (url) {
        try {
            const response = await fetch(url);
            if (!response.ok) return [];
            return await response.json();
        } catch (error) {
            console.error('Error get data:', error);
            return [];
        }
    },
    getProcessedTitleByCurrentSettings: function () {
        const baseTitle = this.baseTitle;
        const brand = this.getSelectedOption('carBrand');
        const submodel = this.getSelectedOption('carSubmodel');
        return `${baseTitle} ${brand} ${submodel}`;
    },
    preloadImages: async function () {
        const imagePromises = [];
        for (const category in this.images) {
            if (this.images.hasOwnProperty(category)) {
                const imageSet = this.images[category];
                for (const key in imageSet) {
                    if (imageSet.hasOwnProperty(key)) {
                        if (imageSet[key] === false) continue;
                        const imageUrl = this.resizeImage(imageSet[key], '_450x450_crop_center');
                        imagePromises.push(this.preloadImage(imageUrl));
                    }
                }
            }
        }
        try {
            await Promise.all(imagePromises);
        } catch (error) {
            console.error('Eroare la preîncărcarea imaginilor: ', error);
        }
    },
    preloadImage: function (imageUrl) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => {
                resolve(img);
            };
            img.onerror = () => {
                reject(imageUrl);
            };
        });
    },
    resizeImage: function (filename, string){
        const dotIndex = filename.lastIndexOf(".");
        if (dotIndex === -1) return filename + string;
        return filename.substring(0, dotIndex) + string + filename.substring(dotIndex);
    },
    submit: async function (e) {
        e.preventDefault()
        if (!PTCProductBuilder.validate()) {
            document.getElementById("productBuilderFields").scrollIntoView({ behavior: 'smooth' });
            return;
        }

        this.disabled = true;
        this.textContent = 'Se trimite...';
        const formData = new FormData();
        formData.append('title', PTCProductBuilder.getProcessedTitleByCurrentSettings());
        formData.append('price', PTCProductBuilder.getPriceByCurrentSettings());
        formData.append('properties', JSON.stringify(await PTCProductBuilder.getProperties()));

        const xhr = new XMLHttpRequest();
        xhr.open('POST', PTCProductBuilder.apiURL, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                if (response.hasOwnProperty('success') && response.success) {
                    if (response.hasOwnProperty('data') && response.data.hasOwnProperty('redirectURL')) {
                        window.location.href = response.data.redirectURL;
                    }
                } else {
                    console.log('error add to cart');
                }
                console.log(xhr.responseText);
            }
        };
        xhr.send(formData);
    },
    getProperties: async function () {
        const properties = this.getProcessedCurrentSettings(this.currentSettings);
        properties['_odoo_attributes'] = this.getOdooProperties();
        if (this.isActiveSetting('embroidery') && this.currentSettings.embroidery === 'yes') {
            const embroideryImages = await this.embroideryBuilder.saveImages();
            properties['_embroidery'] = embroideryImages;
            properties['_odoo_attributes'].push({
                id: null,
                name: 'Broderie',
                value: this.embroideryBuilder.getEmbroideryItemsElements(embroideryImages)
            });
        }
        return properties;
    },
    getProcessedCurrentSettings: function (currentSettings) {
        return Object.keys(currentSettings).reduce((acc, settingKey) => {
            if (this.isActiveSetting(settingKey)) {
                acc[settingKey] = currentSettings[settingKey];
            }
            return acc;
        }, {});
    },
    getOdooProperties: function () {
        const properties = this.currentSettings;
        const odooMappings = this.odooMappings;
        const odooProperties = [];
        for (const property in properties) {
            const value = properties[property];
            if (odooMappings.hasOwnProperty(property)) {
                const oddoMapping = odooMappings[property];
                if (oddoMapping.hasOwnProperty('values') && oddoMapping.values.hasOwnProperty(value)) {
                    odooProperties.push({
                        'id': oddoMapping.id,
                        'name': oddoMapping.name,
                        'value': odooMappings[property].values[value]
                    });
                }
            }
        }

        return odooProperties;
    },
    validate: function () {
        const errorEls = {
            'carBrand': document.getElementById('carBrandError'),
            'carModel': document.getElementById('carModelError'),
            'carSubmodel': document.getElementById('carSubmodelError'),
            'carSubmodelTrunk': document.getElementById('carSubmodelTrunkError'),
        }

        let hasError = false;
        for (const key in this.carSettings) {
            if (!this.isActiveCarSetting(key)) continue;
            if (this.carSettings[key] === null) {
                if (!hasError) hasError = true;
                errorEls[key].innerText = 'Selecteaza o optiune';
            } else {
                errorEls[key].innerText = '';
            }
        }
        return !hasError;
    },
    isActiveCarSetting: function (settingKey) {
        return Boolean(this.activeCarSettings[settingKey] ?? false);
    },
    isActiveSetting: function (settingKey) {
        return Boolean(this.activeSettings[settingKey] ?? false);
    },
    storage: {
        hasSettings: function () {
            const settings = localStorage.getItem(PTCProductBuilder.storageKey);
            if (settings === null) return false;
            const version = JSON.parse(settings).version ?? false;
            return Boolean(version === PTCProductBuilder.currentSettings.version);
        },
        getSettings: function () {
            const settings = localStorage.getItem(PTCProductBuilder.storageKey);
            return settings ? JSON.parse(settings) : false;
        },
        saveSettings: function (settings) {
            localStorage.setItem(PTCProductBuilder.storageKey, JSON.stringify(settings));
        },
        removeSettings: function () {
            localStorage.removeItem(PTCProductBuilder.storageKey);
        }
    },
    embroideryBuilder: {
        itemKeys: [],
        coordinatedAdjustments: {
            'item-1': {
                'text': {
                    'center-bottom': {
                        'x': 20,
                        'y': -55,
                        'rotation': {
                            'no': -8,
                            'yes': -188
                        }
                    },
                    'center-left': {
                        'x': 130,
                        'y': 80,
                        'rotation': {
                            'no': 84,
                            'yes': -98
                        }
                    },
                    'center-right': {
                        'x': 355,
                        'y': 10,
                        'rotation': {
                            'no': 80,
                            'yes': -98
                        }
                    }
                },
                'image': {
                    'center-bottom': {
                        'x': 20,
                        'y': 0,
                        'offsetX': 0,
                        'offsetY': 0
                    },
                    'center-left': {
                        'x': -70,
                        'y': 80,
                        'offsetX': 0,
                        'offsetY': 0
                    },
                    'center-right': {
                        'x': -80,
                        'y': 30,
                        'offsetX': 0,
                        'offsetY': 0
                    },

                }
            },
            'item-2': {
                'text': {
                    'center-bottom': {
                        'x': 20,
                        'y': -55,
                        'rotation': {
                            'no': -8,
                            'yes': -188
                        }
                    },
                    'center-left': {
                        'x': 130,
                        'y': 80,
                        'rotation': {
                            'no': 84,
                            'yes': -98
                        }
                    },
                    'center-right': {
                        'x': 355,
                        'y': 10,
                        'rotation': {
                            'no': 80,
                            'yes': -98
                        }
                    }
                },
                'image': {
                    'center-bottom': {
                        'x': 20,
                        'y': 0,
                        'offsetX': 0,
                        'offsetY': 0
                    },
                    'center-left': {
                        'x': -70,
                        'y': 80,
                        'offsetX': 0,
                        'offsetY': 0
                    },
                    'center-right': {
                        'x': -80,
                        'y': 30,
                        'offsetX': 0,
                        'offsetY': 0
                    },

                }
            },
            'item-3': {
                'text': {
                    'center-bottom': {
                        'x': 20,
                        'y': -55,
                        'rotation': {
                            'no': -8,
                            'yes': -188
                        }
                    },
                    'center-left': {
                        'x': 130,
                        'y': 80,
                        'rotation': {
                            'no': 84,
                            'yes': -98
                        }
                    },
                    'center-right': {
                        'x': 355,
                        'y': 10,
                        'rotation': {
                            'no': 80,
                            'yes': -98
                        }
                    }
                },
                'image': {
                    'center-bottom': {
                        'x': 20,
                        'y': 0,
                        'offsetX': 0,
                        'offsetY': 0
                    },
                    'center-left': {
                        'x': -70,
                        'y': 80,
                        'offsetX': 0,
                        'offsetY': 0
                    },
                    'center-right': {
                        'x': -80,
                        'y': 30,
                        'offsetX': 0,
                        'offsetY': 0
                    },

                }
            },
            'item-4': {
                'text': {
                    'center-bottom': {
                        'x': 20,
                        'y': -55,
                        'rotation': {
                            'no': -8,
                            'yes': -188
                        }
                    },
                    'center-left': {
                        'x': 130,
                        'y': 80,
                        'rotation': {
                            'no': 84,
                            'yes': -98
                        }
                    },
                    'center-right': {
                        'x': 355,
                        'y': 10,
                        'rotation': {
                            'no': 80,
                            'yes': -98
                        }
                    }
                },
                'image': {
                    'center-bottom': {
                        'x': 20,
                        'y': 0,
                        'offsetX': 0,
                        'offsetY': 0
                    },
                    'center-left': {
                        'x': -70,
                        'y': 80,
                        'offsetX': 0,
                        'offsetY': 0
                    },
                    'center-right': {
                        'x': -80,
                        'y': 30,
                        'offsetX': 0,
                        'offsetY': 0
                    },

                }
            },
            'item-5': {
                'text': {
                    'center-bottom': {
                        'x': 0,
                        'y': -100,
                        'rotation': {
                            'no': 0,
                            'yes': -180
                        }
                    },
                    'center-left': {
                        'x': 120,
                        'y': -50,
                        'rotation': {
                            'no': 90,
                            'yes': -90
                        }
                    },
                    'center-right': {
                        'x': 375,
                        'y': -50,
                        'rotation': {
                            'no': 90,
                            'yes': -90
                        }
                    }
                },
                'image': {
                    'center-bottom': {
                        'x': 20,
                        'y': 0,
                        'offsetX': 0,
                        'offsetY': 0
                    },
                    'center-left': {
                        'x': -70,
                        'y': 80,
                        'offsetX': 0,
                        'offsetY': 0
                    },
                    'center-right': {
                        'x': -80,
                        'y': 30,
                        'offsetX': 0,
                        'offsetY': 0
                    },

                }
            }
        },
        itemKeyMappings: {
            'item-1': {key: 'covoras_sofer', title: 'Covoras sofer'},
            'item-2': {key: 'covoras_pasager', title: 'Covoras pasager'},
            'item-3': {key: 'covoras_stanga_spate', title: 'Covoras stanga spate'},
            'item-4': {key: 'covoras_dreapta_spate', title: 'Covoras dreapta spate'},
            'item-5': {key: 'tavita_portbagaj', title: 'Tavita portbagaj'}
        },
        svgs: {
            'rug': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 2500">
          <defs>
            <style>
              #svgBaseColor, #svgBorderColor {
                fill: #ab9185;
              }        
              #svgBaseColor, #svgBorderColor, #svgFirstThreadColor, #svgSecondThreadColor {
                fill-rule: evenodd;
              }      
              #svgBorderColor {
                fill-opacity: 0;
                stroke: #f25c86;
                stroke-linejoin: round;
                stroke-width: 45px;
              }        
              #svgFirstThreadColor, #svgSecondThreadColor {
                fill: none;
                stroke-width: 3px;
                stroke-dasharray: 12 6;
                stroke: #fff;    
              }
            </style>
          </defs>
          <path id="svgBaseColor" d="M820,573c-16.792-91.417-26.458-203.333-23-280s2.792-107.083,125-132,207.17-35.334,296-50,263-43.207,317-50c46.24-5.816,158.17-42.208,176,87s20.42,150.042,21,179,7.92,69.3-44,115c-29.57,26.033-44.61,39.465-54,48-1.81,1.642-6.71,6.854-8.11,8.491C1611.4,515.529,1558.62,630.175,1718,630c39.83-.044,116.42-13.458,154-7,20.52,3.525,63.68,3.507,72,104,8.42,101.708,13.92,159.792,0,236s-32.83,165.29-26,239,28.29,215.62,56,300,40.62,133.62,84,203,97.62,132.29,118,197c16.19,51.43,18.96,164.62,18,218s-2.38,139.62-130,155-327.71,38.29-469,55-415.54,52.96-516,68-248.208,44.29-288,50-165.875,41.46-197-158-60.208-341.54-78-484-45.875-335.71-60-443-21.542-251.71-22-304-0.875-73.042,1-100S420.792,854.292,566,836C768.9,810.442,865.105,818.558,820,573Z"/>
          <path id="svgBorderColor" d="M834.714,587.455c-16.493-89.743-38.809-205.609-35.413-280.872S800.543,195.461,920.576,171s211.8-33.187,299.054-47.584S1480.95,78,1533.98,71.333c45.42-5.709,150.85-41.435,168.37,85.406s18.55,139.794,19.13,168.222,6.57,67.362-44.72,111.893c-55.26,47.977-67.6,72.981-74.76,97.146-12.81,43.231-12.93,109.546,110.22,109.411,39.13-.043,108.35-13.212,145.26-6.872,20.15,3.461,67.05,3.443,75.22,102.1,8.27,99.845,7.67,153.865-6,228.677s-28.78,162.269-22.07,234.619,31.71,211.68,58.93,294.51,34.4,131.18,77,199.28,98,140.37,118.01,203.89c15.91,50.49,33.37,161.61,32.43,214.01s-2.33,132.57-127.68,147.66-334.63,37.59-473.41,53.99-414.14,56.49-512.81,71.26-261.466,43.48-300.55,49.08-153.921,36.2-184.492-159.6-48.957-341.29-66.432-481.14-45.058-329.56-58.931-434.89c-39.78-302-95.331-503.992,99.719-528.549C765.7,806.34,879.015,828.515,834.714,587.455Z"/>
          <path id="svgFirstThreadColor" data-name="Ata 1" d="M830.06,584.662c-16.567-90.119-40.485-207.973-37.073-283.552s3.748-110.589,124.325-135.152,214.258-34.827,301.908-49.284,262.5-45.607,315.78-52.3c45.62-5.733,153.04-39.609,170.63,87.766s21.64,140.381,22.22,168.929,6.6,68.646-44.92,113.364c-55.51,48.178-67.41,71.288-74.6,95.554-12.87,43.413-17.99,108.007,105.72,107.871,39.3-.043,108.84-12.268,145.92-5.9,20.24,3.475,69.35,5.457,77.56,104.524,8.3,100.266,6.7,154.512-7.03,229.639s-27.91,162.944-21.17,235.614,31.86,212.56,59.2,295.74,35.56,131.73,78.35,200.12,96.44,140.96,116.54,204.75c15.98,50.7,33.53,162.29,32.58,214.9s-2.34,131.63-128.26,146.79-337.15,41.74-476.55,58.22-416.02,56.72-515.14,71.55-262.656,41.16-301.917,46.79-156.62,36.35-187.329-160.28-47.179-342.72-64.733-483.15-47.263-330.95-61.2-436.72c-39.96-303.27-93.764-508.115,102.172-532.776C763.23,802.468,874.563,826.737,830.06,584.662Z"/>
          <path id="svgSecondThreadColor" data-name="Ata 2" d="M841.6,591.692c-16.567-90.12-38.985-203.474-35.573-279.052s-7.793-111.59,112.784-136.153S1131.57,143.161,1219.22,128.7,1481.72,83.1,1535,76.4c45.62-5.733,143.5-41.609,161.1,85.765s19.64,137.382,20.21,165.929-4.44,67.646-55.97,112.364c-55.51,48.179-58.86,73.288-66.05,97.554-12.87,43.414-3.95,111.012,119.76,110.875,39.3-.043,108.84-12.267,145.92-5.9,20.24,3.475,59.32,2.457,67.52,101.524,8.31,100.265,4.7,153.508-9.03,228.635s-25.9,162.944-19.16,235.6,32.86,212.57,60.2,295.75,36.56,131.73,79.36,200.12,96.43,140.96,116.53,204.75c15.98,50.7,28.99,160.78,29.07,213.4,0.06,37.56,1.67,114.56-119.22,130.72-125.72,16.8-334.65,38.75-474.05,55.22s-416.02,58.73-515.14,73.56-262.656,41.66-301.917,47.29-143.57,34.34-175.284-145.22c-34.614-195.98-48.183-339.72-65.737-480.16s-44.263-330.94-58.2-436.71c-39.96-303.27-100.778-504.116,95.158-528.776C770.258,813.5,886.1,833.766,841.6,591.692Z"/>
        </svg>`,
            'tray': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 2500">
  <defs>
    <style>
      #svgBaseColor, .#svgBorderColor {
        fill: #ab9185;
      }

      #svgBaseColor {
        stroke: #000;
        stroke-width: 1px;
      }

      #svgBaseColor, #svgBorderColor, #svgFirstThreadColor, #svgSecondThreadColor {
        fill-rule: evenodd;
      }

      #svgBorderColor {
        fill-opacity: 0;
        stroke: #f25c86;
        stroke-linejoin: round;
        stroke-width: 45px;
      }

      #svgFirstThreadColor, #svgSecondThreadColor {
        fill: none;
        stroke: #fff;
        stroke-width: 3px;
        stroke-dasharray: 12 6;
      }
    </style>
  </defs>
  <path id="svgBaseColor"  d="M146,1459s29.329-46.08,65-92c25.483-32.81,51.954-54.03,87-70,33.838-15.42,49.285-44.51,53.94-76.09,12.489-84.73,10.112-112.56,40.06-168.91,29.618-55.725,59.557-131.182,72-196s27.475-132.2,12-262c-14.154-118.72-22.062-186.931-25-205-2.975-18.3-8.525-88.7,105-90s291.975-3.7,433-5,479.47-4.2,616,0,352.99,4.124,373,5c16.02,0.7,98.97,17.8,85,106-18.52,116.857-40.53,285.3-37,337s17.82,189.642,34,231,58.32,109.64,61,144,15.83,128.49,29,153c13.13,24.42,41.32,38.52,53,39s36.32,8.52,46,20,72.82,77.52,86,97,22.82,26.52,27,53,33.82,206.02,37,264,7.32,86.02,5,103-5.18,34.02-35,56-33.18,26.02-40,46-16.18,51.52-60,63c-42.13,11.04-32.82,3.75-44,5-13.32,1.48-40.68,11-85,11s-50.18-12-72-12-63.68,26.02-83,32-95.68,11.02-165,18-87.69,2.5-143,31c-55.25,28.47-117.3,70.51-187,87-81.3,19.23-150.69,23.9-221,25-72.2,1.13-147.63-5.32-250-27-79.8-16.9-100.135-26.48-136.226-45.15C801.76,2093.94,768.567,2081.01,713,2077c-56.353-4.07-150.181-11.48-185-15-20.119-2.03-39.681-13.48-65-28s-47.181-11.48-68-7-43.7,5.45-108-7c-85.319-16.52-107.989-14.78-126-71-12.819-40.02-19.181-32.48-34-47s-33.1-16.37-31-75C98.181,1765.98,129.5,1516.5,146,1459Z"/>
  <path id="svgBorderColor" d="M146,1459s29.329-46.08,65-92c25.483-32.81,51.954-54.03,87-70,33.838-15.42,49.285-44.51,53.94-76.09,12.489-84.73,10.112-112.56,40.06-168.91,29.618-55.725,59.557-131.182,72-196s27.475-132.2,12-262c-14.154-118.72-22.062-186.931-25-205-2.975-18.3-8.525-88.7,105-90s291.975-3.7,433-5,479.47-4.2,616,0,352.99,4.124,373,5c16.02,0.7,98.97,17.8,85,106-18.52,116.857-40.53,285.3-37,337s17.82,189.642,34,231,58.32,109.64,61,144,15.83,128.49,29,153c13.13,24.42,41.32,38.52,53,39s36.32,8.52,46,20,72.82,77.52,86,97,22.82,26.52,27,53,33.82,206.02,37,264,7.32,86.02,5,103-5.18,34.02-35,56-33.18,26.02-40,46-16.18,51.52-60,63c-42.13,11.04-32.82,3.75-44,5-13.32,1.48-40.68,11-85,11s-50.18-12-72-12-63.68,26.02-83,32-95.68,11.02-165,18-87.69,2.5-143,31c-55.25,28.47-117.3,70.51-187,87-81.3,19.23-150.69,23.9-221,25-72.2,1.13-147.63-5.32-250-27-79.8-16.9-100.135-26.48-136.226-45.15C801.76,2093.94,768.567,2081.01,713,2077c-56.353-4.07-150.181-11.48-185-15-20.119-2.03-39.681-13.48-65-28s-47.181-11.48-68-7-43.7,5.45-108-7c-85.319-16.52-107.989-14.78-126-71-12.819-40.02-19.181-32.48-34-47s-33.1-16.37-31-75C98.181,1765.98,129.5,1516.5,146,1459Z"/>
  <path id="svgFirstThreadColor" data-name="Ata 1" d="M151.521,1457.95s31.182-45.84,66.675-91.54c25.356-32.64,49.694-51.75,84.565-67.65,33.669-15.34,51.039-46.29,55.671-77.71,12.426-84.3,9.061-112,38.859-168.06,29.47-55.447,58.26-130.527,70.64-195.02s30.338-131.54,14.94-260.69c-14.083-118.126-21.952-186-24.875-203.975-2.96-18.208-15.482-86.758,97.475-88.05s294.515-5.183,434.835-6.475,477.074-4.18,612.924,0,351.22,7.6,371.13,8.475c15.95,0.7,94.98,11.21,81.08,98.97C2037.01,522.5,2017.61,693.1,2021.12,744.54s17.74,188.693,33.83,229.845,59.03,109.1,61.7,143.275,15.74,127.85,28.85,152.24c13.06,24.29,41.11,41.32,52.74,41.8s36.13,8.48,45.77,19.9,72.45,74.13,85.57,93.52,22.7,26.38,26.86,52.73,33.65,204.99,36.82,262.68,7.28,85.59,4.97,102.49-5.15,35.85-34.82,57.72-33.02,23.89-39.8,43.77-16.1,51.26-59.7,62.68c-41.93,10.99-32.66,3.74-43.78,4.98-13.26,1.48-40.48,8.94-84.58,8.94s-49.93-9.94-71.64-9.94-63.36,25.89-82.58,31.84-95.21,10.97-164.18,17.91-87.25,2.49-142.28,30.85c-54.98,28.32-116.72,70.16-186.07,86.56-80.89,19.14-149.94,23.79-219.89,24.88-71.85,1.12-146.89-5.29-248.75-26.87-79.4-16.81-99.638-26.35-135.549-44.92-80.609-41.69-113.635-54.56-168.925-58.56-56.071-4.04-149.43-11.42-184.075-14.92-20.019-2.02-39.483-13.42-64.675-27.86s-46.945-13.43-67.66-8.97-43.484,7.42-107.46-4.96c-84.892-16.43-107.449-14.7-125.37-70.65-12.755-39.81-19.085-32.32-33.83-46.76s-32.93-16.29-30.845-74.63C103.941,1763.4,135.1,1515.17,151.521,1457.95Z"/>
  <path id="svgSecondThreadColor" data-name="Ata 2" d="M138.479,1460.05s29.475-47.31,65.325-93.46c25.61-32.98,56.213-59.3,91.435-75.35,34.007-15.51,49.531-38.74,54.21-70.48,12.55-85.15,8.162-113.12,38.26-169.75,29.766-56,59.854-131.838,72.36-196.98s27.612-132.862,12.06-263.31C457.9,471.407,446.956,402.855,444,384.7c-2.99-18.39-5.568-89.145,108.525-90.45s293.434-3.72,435.165-5.025,481.876-4.222,619.076,0,352.76,6.145,372.87,7.025c16.1,0.7,101.47,15.888,87.42,104.53-18.6,117.442-38.72,286.725-35.18,338.685s16.91,190.59,33.17,232.155,59.61,110.195,62.3,144.725,15.91,128.13,29.15,152.76c13.19,24.54,39.52,34.71,51.26,35.2s36.5,11.55,46.23,23.1,73.19,76.9,86.43,96.48,22.94,25.65,27.14,52.27,33.99,211.04,37.18,269.32,7.36,86.44,5.03,103.51-5.21,34.19-35.18,56.28-34.34,26.15-41.2,46.23-15.26,51.77-59.3,63.32c-42.34,11.09-32.98,5.77-44.22,7.02-13.38,1.49-40.88,11.06-85.42,11.06s-56.43-10.06-78.36-10.06-58,22.14-77.42,28.16-96.16,11.07-165.82,18.09-88.13,2.51-143.72,31.15c-55.52,28.61-117.88,70.87-187.93,87.44-81.71,19.32-151.44,24.02-222.11,25.12-72.56,1.13-148.36-5.34-251.25-27.13-80.2-16.99-100.632-26.62-136.9-45.38-81.419-42.12-114.777-55.11-170.622-59.14-56.635-4.1-150.932-11.55-185.925-15.08-20.22-2.04-39.88-13.55-65.325-28.14s-47.417-9.54-68.34-5.03-43.922,3.47-108.54-9.04c-85.746-16.6-108.529-14.85-126.63-71.35-12.883-40.22-19.277-32.65-34.17-47.24s-33.261-16.45-31.155-75.37C92.421,1768.56,121.9,1517.83,138.479,1460.05Z"/>
</svg>`
        },
        svgsByItemKey: {},
        canvas: {
            'item-1': {
                'page': {
                    'containerId': 'embroideryImageItem1'
                },
                'modal': {
                    'containerId': 'embroideryModalImageItem1'
                }
            },
            'item-2': {
                'page': {
                    'containerId': 'embroideryImageItem2'
                },
                'modal': {
                    'containerId': 'embroideryModalImageItem2'
                }
            },
            'item-3': {
                'page': {
                    'containerId': 'embroideryImageItem3'
                },
                'modal': {
                    'containerId': 'embroideryModalImageItem3'
                }
            },
            'item-4': {
                'page': {
                    'containerId': 'embroideryImageItem4'
                },
                'modal': {
                    'containerId': 'embroideryModalImageItem4'
                }
            },
            'item-5': {
                'page': {
                    'containerId': 'embroideryImageItem5'
                },
                'modal': {
                    'containerId': 'embroideryModalImageItem5'
                }
            }
        },
        init: function () {
            this.itemKeys = PTCProductBuilder.embroideryItemKeys;
            this.initSvgByItemKey();
            this.loadStages();
            this.updateCanvasByCurrentSettings();
            this.addListeners();
            this.initModals();
        },
        addListeners: function () {
            const embroideryEditAllModalBtn = document.getElementById('embroideryEditAllModalBtn');
            if (embroideryEditAllModalBtn) {
                embroideryEditAllModalBtn.addEventListener('click', function () {
                    PTCProductBuilder.embroideryBuilder.showEmbroideryEditModal('all');
                });
            }
            const embroideryEditCustomModalBtn = document.getElementById('embroideryEditCustomModalBtn');
            if (embroideryEditCustomModalBtn) {
                document.getElementById('embroideryEditCustomModalBtn').addEventListener('click', function () {
                    PTCProductBuilder.embroideryBuilder.showEmbroideryEditModal('custom');
                });
            }
            document.getElementById('embroideryElementType').querySelectorAll('.option-value.box input[type="radio"]').forEach(checkbox => {
                checkbox.addEventListener('change', PTCProductBuilder.embroideryBuilder.changeElementType)
            });
            document.getElementById('embroideryItem').querySelectorAll('.option-value.box input[type="radio"]').forEach(checkbox => {
                checkbox.addEventListener('change', PTCProductBuilder.embroideryBuilder.changeItem)
            });

            document.getElementById('embroideryTextForm').addEventListener('submit', this.addElementByForm);
            document.getElementById('embroideryIconForm').addEventListener('submit', this.addElementByForm);

            document.getElementById('embroideryTextInput').addEventListener('input', this.updateAfterInputTextForm);
            document.getElementById('embroideryRotateIcon').addEventListener('input', this.rotateSelectedIcon);
            document.getElementById('embroideryIcon').querySelectorAll('.option-value.image input[type="radio"]').forEach(checkbox => {
                checkbox.addEventListener('change', PTCProductBuilder.embroideryBuilder.changeIcon)
            });

            document.getElementById('removeText').addEventListener('click', this.removeText.bind(this));
            document.getElementById('removeIcon').addEventListener('click', this.removeIcon.bind(this));

            document.getElementById('embroideryTextFlip').querySelectorAll('.option-value.box input[type="radio"]').forEach(checkbox => {
                checkbox.addEventListener('change', PTCProductBuilder.embroideryBuilder.flipText);
            });
            document.getElementById('embroideryTextPosition').querySelectorAll('.option-value.box input[type="radio"]').forEach(checkbox => {
                checkbox.addEventListener('change', PTCProductBuilder.embroideryBuilder.changeTextPosition)
            });
            document.getElementById('embroideryTextFont').querySelectorAll('.option-value.box input[type="radio"]').forEach(checkbox => {
                checkbox.addEventListener('change', PTCProductBuilder.embroideryBuilder.changeFont)
            });
        },
        initSvgByItemKey: function () {
            this.svgsByItemKey = {
                'item-1': this.svgs.rug,
                'item-2': this.svgs.rug,
                'item-3': this.svgs.rug,
                'item-4': this.svgs.rug,
                'item-5': this.svgs.tray
            }
        },
        loadStages: function () {
            for (const itemKey of this.itemKeys) {
                for (const location in this.canvas[itemKey]) {
                    this.loadStage(itemKey, location);
                }
            }
        },
        loadStage: function (itemKey, location) {
            const containerId = this.canvas[itemKey][location].containerId;
            this.canvas[itemKey][location].stage = new Konva.Stage({
                container: containerId ,
                width: 500,
                height: 500
            });
            this.canvas[itemKey][location].layer = new Konva.Layer();
            this.canvas[itemKey][location].stage.add(this.canvas[itemKey][location].layer);
        },
        updateCanvasByCurrentSettings: function () {
            const currentSettings = PTCProductBuilder.currentSettings;
            const colorHexMappings = PTCProductBuilder.colorHexMappings;
            const secondThreadKey = currentSettings.threadType === 'simple' ? 'borderColor' : 'threadColor';
            const settings = {
                baseColor: colorHexMappings[currentSettings.baseColor],
                borderColor: colorHexMappings[currentSettings.borderColor],
                firstThreadColor: colorHexMappings[currentSettings.threadColor],
                secondThreadColor: colorHexMappings[currentSettings[secondThreadKey]],
            };
            for (const itemKey of this.itemKeys) {
                for (const location in this.canvas[itemKey]) {
                    this.updateItemCanvasBySettings(itemKey, location, settings);
                }
            }
        },
        updateItemCanvasBySettings: function (itemKey, location, settings) {
            const svgStrings = this.getSVGBySettings(itemKey, settings);

            const svgBlob = new Blob([svgStrings], {type: 'image/svg+xml'});
            const url = URL.createObjectURL(svgBlob);

            const img = new Image();
            img.onload = function () {
                const background = new Konva.Image({
                    image: img,
                    x: 0,
                    y: 0,
                    width: 500,
                    height: 500
                });
                const layer = PTCProductBuilder.embroideryBuilder.canvas[itemKey][location].layer;
                layer.destroyChildren();
                layer.add(background);
                layer.draw();
                const itemActions = PTCProductBuilder.embroideryBuilder.settings.getItemActions(itemKey, location);
                PTCProductBuilder.embroideryBuilder.applyElementsToItemCanvasByItemActions(itemKey, location, itemActions);
                URL.revokeObjectURL(url);

            };
            img.src = url;
        },
        applyElementsToItemCanvasByItemActions: function (itemKey, location, itemActions) {
            for (const itemActionKey in itemActions) {
                const actionDetails = itemActions[itemActionKey];
                switch (actionDetails.type) {
                    case 'text':
                        this.saveText(itemKey, location, actionDetails, true);
                        break;
                    case 'icon':
                        this.saveIcon(itemKey, location, actionDetails, true);
                }
            }
        },
        getSVGBySettings: function (itemKey, settings) {
            const svg = this.svgsByItemKey[itemKey];
            const svgDocument = new DOMParser().parseFromString(svg, 'image/svg+xml');

            const svgBaseColorEl = svgDocument.getElementById('svgBaseColor');
            if (svgBaseColorEl) {
                svgBaseColorEl.style.fill = settings.baseColor;
            }

            const svgBorderColorEl = svgDocument.getElementById('svgBorderColor');
            if (svgBorderColorEl) {
                svgBorderColorEl.style.stroke = settings.borderColor;
            }

            const svgFirstThreadColorEl = svgDocument.getElementById('svgFirstThreadColor');
            if (svgFirstThreadColorEl) {
                svgFirstThreadColorEl.style.stroke = settings.firstThreadColor;
            }

            const svgSecondThreadColorEl = svgDocument.getElementById('svgSecondThreadColor');
            if (svgSecondThreadColorEl) {
                svgSecondThreadColorEl.style.stroke = settings.secondThreadColor;
            }

            return new XMLSerializer().serializeToString(svgDocument);
        },
        initModals: function () {
            this.editEmbroideryModal = new tingle.modal({
                contentId: 'embroideryEditModal',
                onClose: PTCProductBuilder.updatePrice.bind(PTCProductBuilder)
            });
        },
        showEmbroideryEditModal: function (type, specificItemKey = null) {
            PTCProductBuilder.embroideryBuilder.beforeOpenEmbroideryEditModal(type, specificItemKey);
            PTCProductBuilder.embroideryBuilder.editEmbroideryModal.open();
            PTCProductBuilder.embroideryBuilder.afterOpenEmbroideryEditModal(type, specificItemKey);
        },
        beforeOpenEmbroideryEditModal: function (type, specificItemKey) {
            if (type !== 'all' || specificItemKey) type = specificItemKey ?? this.itemKeys[0];
            document.getElementById('textItem').value = type;
            document.getElementById('iconItem').value = type;
            document.getElementById('embroideryItem').style.display = (type === 'all') ? 'none' : 'block';
            this.applyItemSettings(specificItemKey ?? this.itemKeys[0]);
            this.displayModalCanvasByItem(specificItemKey ?? this.itemKeys[0]);
            this.updateEmbroideryEditModal(type);
        },
        afterOpenEmbroideryEditModal: function (type, specificItemKey) {
            this.updateFontTextByPositionAndFlipByCurrentOptions();
        },
        changeElementType: function () {
            const displayText = this.value === 'text' ? 'block' : 'none';
            const displayImage = this.value === 'image' ? 'block' : 'none';
            document.getElementById('embroideryTextForm').style.display = displayText;
            document.getElementById('embroideryIconForm').style.display = displayImage;
        },
        getItemKeysByFormParams: function (formParams) {
            return formParams.item === 'all' ? this.itemKeys : [formParams.item];
        },
        addElementByForm: function (e) {
            e.preventDefault();

            const formId = e.target.id;
            if (!Boolean(['embroideryTextForm', 'embroideryIconForm'].includes(formId))) return;
            const formData = new FormData(this);
            const params = {};
            formData.forEach((value, key) => params[key] = value);

            const itemKeys = PTCProductBuilder.embroideryBuilder.getItemKeysByFormParams(params);
            for (const itemKey of itemKeys) {
                if (formId === 'embroideryTextForm') {
                    const itemCanvas = PTCProductBuilder.embroideryBuilder.canvas[itemKey];
                    for (const location in itemCanvas) {
                        PTCProductBuilder.embroideryBuilder.saveText(itemKey, location, params);
                    }
                }
                if (formId === 'embroideryIconForm') {
                    const itemCanvas = PTCProductBuilder.embroideryBuilder.canvas[itemKey];
                    for (const location in itemCanvas) {
                        PTCProductBuilder.embroideryBuilder.saveIcon(itemKey, location, params);
                    }
                }
            }
            PTCProductBuilder.embroideryBuilder.applyItemSettings(itemKeys[0]);
            if (document.activeElement.dataset.type === 'save-close') {
                PTCProductBuilder.embroideryBuilder.editEmbroideryModal.close();
            }
        },
        saveText: function (itemKey, location, params, reload = false) {
            let element = this.settings.getItemActionElement(itemKey, location, 'text');

            let beforePosition = element ? this.settings.getItemActionPosition(itemKey, location, 'text') : false;

            const action = {
                type: 'text',
                content: params.content,
                position: params.position,
                font: params.font,
                color: params.color,
                flip: params.flip
            };

            const stage = this.canvas[itemKey][location].stage;
            const layer = this.canvas[itemKey][location].layer;

            const coordinatedAdjustments = this.coordinatedAdjustments[itemKey]['text'];
            const positions = {
                'center-bottom': {
                    x: stage.width() / 2 + coordinatedAdjustments['center-bottom'].x,
                    y: stage.height() + coordinatedAdjustments['center-bottom'].y,
                    rotation: coordinatedAdjustments['center-bottom']['rotation'][params.flip],
                },
                'center-left': {
                    x: coordinatedAdjustments['center-left'].x,
                    y: stage.height() / 2 + coordinatedAdjustments['center-left'].y,
                    rotation: coordinatedAdjustments['center-left']['rotation'][params.flip],
                },
                'center-right': {
                    x: coordinatedAdjustments['center-right'].x,
                    y: stage.height() / 2 + coordinatedAdjustments['center-right'].y,
                    rotation: coordinatedAdjustments['center-right']['rotation'][params.flip],
                }
            };

            if (element && !reload) {
                const position = positions[params.position];
                element.text(params.content);
                element.fontFamily(params.font);
                element.fill(params.color);
                element.position({
                    x: position.x,
                    y: position.y,
                });
                element.rotation(position.rotation);

                switch (params.position) {
                    case 'center-bottom':
                        element.offsetY(element.height() / 2);
                        element.offsetX(element.width() / 2);
                        break;
                    case 'center-left':
                    case 'center-right':
                        element.offsetX(element.width() / 2);
                        element.offsetY(element.height() / 2);
                        break;
                }
                this.settings.replaceItemPosition(itemKey, 'text', beforePosition, params.position);
            } else {
                element = new Konva.Text({
                    text: params.content,
                    fontSize: params.size ? params.size : 30,
                    fontFamily: params.font ? params.font : 'Arial',
                    fill: params.color ? params.color : 'black',
                    offsetX: 0,
                    offsetY: 0,
                    align: 'center',
                    ...positions[params.position] ?? {}
                });

                switch (params.position) {
                    case 'center-bottom':
                        element.offsetY(element.height() / 2);
                        element.offsetX(element.width() / 2);
                        break;
                    case 'center-left':
                    case 'center-right':
                        element.offsetX(element.width() / 2);
                        element.offsetY(element.height() / 2);
                        break;
                }
                this.settings.setItemPosition(itemKey, 'text', params.position);
                layer.add(element);
            }

            action.element = element;
            this.settings.setItemAction(action, itemKey, location);
            document.getElementById('removeText').style.display = 'block';
            layer.draw();

            return element ? 'update' : 'new';
        },
        saveIcon: function (itemKey, location, params, reload = false) {
            let element = this.settings.getItemActionElement(itemKey, location, 'icon');

            let beforePosition = element ? this.settings.getItemActionPosition(itemKey, location, 'icon') : false;

            const action = {
                type: 'icon',
                icon: params.icon,
                position: params.position,
                rotate: params.rotate
            }
            this.settings.setItemAction(action, itemKey, location);

            const stage = this.canvas[itemKey][location].stage;
            const layer = this.canvas[itemKey][location].layer;

            const imageObj = new Image();
            imageObj.crossOrigin = 'Anonymous';
            imageObj.src = PTCProductBuilder.embroideryIconsURL + params.icon + '.png';

            const imgSize = {
                width: 150,
                height: 150
            };

            const coordinatedAdjustments = this.coordinatedAdjustments[itemKey]['image'];

            const positions = {
                'center-bottom': {
                    x: (stage.width() - imgSize.width) / 2 + coordinatedAdjustments['center-bottom'].x,
                    y: stage.height() - imgSize.height + coordinatedAdjustments['center-bottom'].y,
                    offsetX: imgSize.width / 2 + coordinatedAdjustments['center-bottom'].offsetX,
                    offsetY: imgSize.height / 2 + coordinatedAdjustments['center-bottom'].offsetY
                },
                'center-left': {
                    x: imgSize.height + coordinatedAdjustments['center-left'].x,
                    y: (stage.height() - imgSize.width) / 2 + coordinatedAdjustments['center-left'].y,
                    offsetX: imgSize.width / 2 + coordinatedAdjustments['center-left'].offsetX,
                    offsetY: imgSize.height / 2 + coordinatedAdjustments['center-left'].offsetY
                },
                'center-right': {
                    x: (stage.width() - imgSize.width) + coordinatedAdjustments['center-right'].x,
                    y: (stage.height() - imgSize.width) / 2 + coordinatedAdjustments['center-right'].y,
                    offsetX: imgSize.width / 2 + coordinatedAdjustments['center-right'].offsetX,
                    offsetY: imgSize.height / 2 + coordinatedAdjustments['center-right'].offsetY
                }
            };

            if (element && !reload) {
                element.image(imageObj);
                const position = positions[params.position];
                element.position({
                    x: position.x,
                    y: position.y,
                });

                element.rotation(params.rotate - 8);

                element.x(element.x() + element.offsetX());
                element.y(element.y() + element.offsetY());

                this.settings.replaceItemPosition(itemKey, 'icon', beforePosition, params.position);
            } else {
                element = new Konva.Image({
                    image: imageObj,
                    width: imgSize.width,
                    height: imgSize.height,
                    ...positions[params.position] ?? {}
                });

                element.rotation(params.rotate - 8);

                element.x(element.x() + element.offsetX());
                element.y(element.y() + element.offsetY());

                layer.add(element);

                this.settings.setItemPosition(itemKey, 'icon', params.position);

            }
            action.element = element;
            this.settings.setItemAction(action, itemKey, location);
            document.getElementById('removeIcon').style.display = 'block';
            layer.draw();

            return element ? 'update' : 'new';
        },
        removeText: function () {
            const itemKey = document.getElementById('textItem').value;
            this.removeElementsFromItems(itemKey, 'text');
            document.getElementById('removeText').style.display = 'none';
        },
        removeIcon: function () {
            const itemKey = document.getElementById('iconItem').value;
            this.removeElementsFromItems(itemKey, 'icon');
            document.getElementById('removeIcon').style.display = 'none';
        },
        removeElementsFromItems: function (item, type) {
            const itemKeys = item === 'all' ? this.itemKeys : [item];
            for (const itemKey of itemKeys) {
                const itemActions = this.settings.getItemActions(itemKey)
                for (const location in itemActions) {
                    this.removeElementsFromItem(itemKey, location, type);
                }
            }
            this.applyItemSettings(itemKeys[0]);
        },
        removeElementsFromItem: function (itemKey, location, type) {
            const itemAction = this.settings.getItemAction(itemKey, location, type);
            const element = itemAction.element;
            this.settings.unsetItemAction(itemKey, location, type);
            this.settings.unsetItemPosition(itemKey, itemAction.position);
            element.destroy();
            this.canvas[itemKey][location].layer.draw();
            this.resetForms(itemKey);
        },
        resetForms: function (formType = null) {
            if (formType) {
                const formKey = formType === 'text' ? 'embroideryTextForm' : 'embroideryIconForm'
                document.getElementById(formKey).reset();
            } else {
                document.getElementById('embroideryTextForm').reset();
                document.getElementById('embroideryIconForm').reset();
            }
        },
        changeItem: function () {
            const itemKey = this.value
            document.getElementById('textItem').value = itemKey;
            document.getElementById('iconItem').value = itemKey;
            PTCProductBuilder.embroideryBuilder.applyItemSettings(itemKey);
            PTCProductBuilder.embroideryBuilder.displayModalCanvasByItem(itemKey);
            PTCProductBuilder.embroideryBuilder.updateEmbroideryEditModal();
        },
        applyItemSettings: function (itemKey) {
            this.selectOption('embroideryItem', itemKey);
            this.resetForms();
            const settings = this.settings.getItemActions(itemKey);
            let hasText = false;
            let hasIcon = false;
            if (settings) {
                for (const location in settings) {
                    for (const itemType in settings[location]) {
                        this.applyItemSettingsToForm(itemKey, location, itemType);
                        if (itemType === 'text') hasText = true;
                        if (itemType === 'icon') hasIcon = true;
                    }
                }
            }
            this.updateRemoveBtns(hasText, hasIcon);
            this.updateAvailablePositions(itemKey === 'all' ? 'item-1' : itemKey);
            const textValue = document.getElementById('embroideryTextInput').value;
            this.updateFontOptionsByText(textValue);
            this.updateFontTextByPositionAndFlipByCurrentOptions();
            PTCProductBuilder.updatePrice();
        },
        applyItemSettingsToForm: function (itemKey, location, type) {
            const options = PTCProductBuilder.embroiderySettings.itemActions[itemKey][location][type];
            const element = this.settings.getItemActionElement(itemKey, location, type);

            if (type === 'text') {
                document.getElementById('embroideryTextInput').value = options.content;
                this.updateFontOptionsByText(options.content);
                this.selectOption('embroideryTextFont', options.font);
                this.selectOption('embroideryTextPosition', options.position);
                this.selectOption('embroideryTextColor', options.color);
                this.selectOption('embroideryTextFlip', options.flip);
            }

            if (type === 'icon') {
                this.selectOption('embroideryIcon', options.icon);
                this.selectOption('embroideryIconPosition', options.position);
                document.getElementById('embroideryRotateIcon').value = options.rotate;
                document.getElementById('removeIcon').style.display = element ? 'block' : 'none';
            }
        },
        updateEmbroideryEditModal: function (type) {
            const titleEl = document.getElementById('embroideryEditModalTitle');
            if (type === 'all') {
                titleEl.textContent = 'Toate covorasele';
            } else {
                titleEl.textContent = PTCProductBuilder.getCheckedRadioOptionText('embroideryItem');
            }
        },
        updateRemoveBtns: function (hasText = undefined, hasIcon = undefined) {
            const removeText = document.getElementById('removeText');
            const removeIcon = document.getElementById('removeIcon');

            if (removeText && hasText !== undefined) {
                removeText.style.display = hasText ? 'block' : 'none';
            }
            if (removeIcon && hasIcon !== undefined) {
                removeIcon.style.display = hasIcon ? 'block' : 'none';
            }
        },
        updateAfterInputTextForm: function (e) {
            const currentText = e.target.value;
            PTCProductBuilder.embroideryBuilder.updateFontOptionsByText(currentText);
        },
        updateFontOptionsByText: function (text) {
            const fontOptions = document.getElementById('embroideryTextFont');
            const fontOption = fontOptions.querySelectorAll('.box-text');
            fontOption.forEach(fontOption => {
                fontOption.textContent = text;
            });
            const position = PTCProductBuilder.getCheckedRadioValue('embroideryTextPosition');
            const flip = PTCProductBuilder.getCheckedRadioValue('embroideryTextFlip');
            PTCProductBuilder.embroideryBuilder.updateFontTextByPositionAndFlip(position, flip);
        },
        updateFontTextByPositionAndFlipByCurrentOptions: function () {
            const position = PTCProductBuilder.getCheckedRadioValue('embroideryTextPosition');
            const flip = PTCProductBuilder.getCheckedRadioValue('embroideryTextFlip');
            PTCProductBuilder.embroideryBuilder.updateFontTextByPositionAndFlip(position, flip);
        },
        flipText: function () {
            const position = PTCProductBuilder.getCheckedRadioValue('embroideryTextPosition');
            PTCProductBuilder.embroideryBuilder.updateFontTextByPositionAndFlip(position, this.value);
        },
        changeTextPosition: function () {
            const flip = PTCProductBuilder.getCheckedRadioValue('embroideryTextFlip');
            PTCProductBuilder.embroideryBuilder.updateFontTextByPositionAndFlip(this.value, flip);
        },
        changeFont: function () {
            document.getElementById('embroideryTextFont').querySelectorAll('.option-value.box input[type="radio"]').forEach(checkbox => {
                const parent = checkbox.closest('.option-value.box');
                if (checkbox.checked) {
                    parent.classList.add('checked');
                } else {
                    parent.classList.remove('checked');
                }
            });
        },
        updateFontTextByPositionAndFlip(position, flip) {
            let rotateValue;
            let isDefaultHeight = true;

            if (position === 'center-left' || position === 'center-right' ) {
                isDefaultHeight = false;
                rotateValue = flip === 'yes' ? -90 : 90;
            } else {
                rotateValue = flip === 'yes' ? 180 : 0;
            }

            const fontOptions = document.getElementById('embroideryTextFont');
            fontOptions.querySelectorAll('.box-text').forEach(fontOption => {
                fontOption.style.transform = `rotate(${rotateValue}deg)`;
                const parent = fontOption.closest('.option-value.box');
                if (isDefaultHeight) {
                    parent.style.height = 'auto';
                    parent.style.width = 'auto';
                } else {
                    parent.style.height = (fontOption.offsetWidth ?? 0) + 'px';
                    parent.style.width = (fontOption.offsetHeight + 20 ?? 0) + 'px';
                }
            });
        },
        changeIcon: function () {
            document.getElementById('embroideryIcon').querySelectorAll('.option-value.image input[type="radio"]').forEach(checkbox => {
                const parent = checkbox.closest('.option-value.image');
                if (checkbox.checked) {
                    parent.classList.add('checked');
                } else {
                    parent.classList.remove('checked');
                }
                parent.querySelector('img').style.transform = 'none';

            });
            document.getElementById('embroideryRotateIcon').value = 0;
        },
        updateAvailablePositions: function (itemKey) {
            const currentPositionsByType = {};
            const currentPositions = this.settings.getItemCurrentPositions(itemKey);
            if (currentPositions) {
                for (const currentPosition in currentPositions) {
                    const type = currentPositions[currentPosition];
                    currentPositionsByType[type] = currentPosition;
                }
            }
            for (const type of ['text', 'icon']) {
                const currentPosition = currentPositionsByType[type] ?? false;
                if (type === 'text') {
                    const embroideryIconPosition = document.getElementById('embroideryIconPosition');
                    const options = embroideryIconPosition.querySelectorAll('input');
                    const checkedPosition = PTCProductBuilder.getCheckedRadioValue('embroideryIconPosition');
                    let hasCheckedOption = !!(checkedPosition && checkedPosition !== currentPosition);
                    options.forEach(option => {
                        option.disabled = option.value === currentPosition;
                        if (option.disabled && !hasCheckedOption) {
                            option.checked = false;
                            hasCheckedOption = false;
                        }
                        if (!hasCheckedOption && option.value !== currentPosition) {
                            option.checked = true;
                            hasCheckedOption = true;
                        }
                    });
                }
                if (type === 'icon') {
                    const embroideryTextPosition = document.getElementById('embroideryTextPosition');
                    const options = embroideryTextPosition.querySelectorAll('input');
                    const checkedPosition = PTCProductBuilder.getCheckedRadioValue('embroideryTextPosition');
                    let hasCheckedOption = !!(checkedPosition && checkedPosition !== currentPosition);
                    options.forEach(option => {
                        option.disabled = option.value === currentPosition;
                        if (option.disabled && !hasCheckedOption) {
                            option.checked = false;
                            hasCheckedOption = false;
                        }
                        if (!hasCheckedOption && option.value !== currentPosition) {
                            option.checked = true;
                            hasCheckedOption = true;
                        }
                    });
                }
            }
        },
        rotateSelectedIcon: function () {
            const rotateValue = this.value;
            const embroideryIcons = document.getElementById('embroideryIcon');
            const icons = embroideryIcons.querySelectorAll('input');
            icons.forEach(icon => {
                if(icon.checked) {
                    icon.parentNode.querySelector('img').style.transform = `rotate(${rotateValue}deg)`;
                }
            });
        },
        displayModalCanvasByItem: function (itemKey) {
            for (const key of this.itemKeys) {
                const elementId = this.canvas[key].modal.containerId;
                document.getElementById(elementId).style.display = itemKey === key ? 'block' : 'none';
            }
        },
        selectOption: function (optionID, value) {
            const optionsContainer = document.getElementById(optionID);
            const radioButtons = optionsContainer.querySelectorAll('input');
            radioButtons.forEach(radioButton => {
                radioButton.checked = radioButton.value === value;
            });
        },
        saveImages: async function () {
            const images = {}
            for (const itemKey of this.itemKeys) {
                images[itemKey] = await this.saveImage(itemKey);
            }
            return images;
        },
        saveImage: async function (itemKey) {
            let imageUrl = '';
            const stage = this.canvas[itemKey].page.stage;
            const dataURL = stage.toDataURL();
            try {
                const response = await fetch(PTCProductBuilder.embroiderySaveImageURL, {
                    method: 'POST',
                    body: JSON.stringify({ image: dataURL }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.status) {
                    console.error('Error saving image');
                }

                const data = await response.json();
                imageUrl = PTCProductBuilder.embroideryImagesURL  + data.url;
            } catch (error) {
                console.error('Error saving image:', error);
            }
            return imageUrl;
        },
        getEmbroideryItemsElements: function (images = {}) {
            const itemsElements = {};
            const itemActions = PTCProductBuilder.embroiderySettings.itemActions;
            if (Object.keys(itemActions).length === 0) return itemsElements;
            for (const itemKey in itemActions) {
                const mapping = this.itemKeyMappings[itemKey] ?? false;
                const mappedItemKey = mapping.key ?? itemKey;
                if (itemActions[itemKey].hasOwnProperty('page')) {
                    itemsElements[mappedItemKey] = {
                        title: mapping.title ?? '',
                        image: images[itemKey] ?? ''
                    };
                    const elements = itemActions[itemKey].page;
                    for (const elementKey in elements) {
                        itemsElements[mappedItemKey][elementKey] = elements[elementKey];
                        delete itemsElements[mappedItemKey][elementKey]['element'];
                    }
                }
            }
            return itemsElements
        },
        settings: {
            getSettings: function () {
                return PTCProductBuilder.embroiderySettings;
            },
            getCurrentPositions: function () {
                const settings = this.getSettings();
                return settings.currentPositions;
            },
            getItemCurrentPositions: function (itemKey) {
                const currentPositions = this.getCurrentPositions();
                return currentPositions[itemKey] ?? false;
            },
            replaceItemPosition: function (itemKey, type, beforePosition, newPosition) {
                this.unsetItemPosition(itemKey, beforePosition);
                this.setItemPosition(itemKey, type, newPosition);
            },
            setItemPosition: function (itemKey, type, position) {
                let currentPositions = this.getCurrentPositions();
                if (!currentPositions[itemKey]) currentPositions[itemKey] = {};
                currentPositions[itemKey][position] = type
            },
            unsetItemPosition: function (itemKey, position) {
                const itemCurrentPositions = this.getItemCurrentPositions(itemKey);
                if (itemCurrentPositions) delete itemCurrentPositions[position];
            },
            getItemActions: function (itemKey, location = null) {
                const settings = this.getSettings();
                if (settings.itemActions.hasOwnProperty(itemKey)) {
                    if (location) {
                        return settings.itemActions[itemKey][location] ?? false;
                    }
                    return settings.itemActions[itemKey];
                }
                return false;
            },
            getItemAction: function (itemKey, location, type) {
                const settings = this.getItemActions(itemKey);
                if (settings && settings[location] && settings[location][type]) {
                    return settings[location][type];
                }
                return false;
            },
            unsetItemAction: function (itemKey, location, type) {
                const settings = this.getItemActions(itemKey);
                if (settings && settings[location] && settings[location][type]) {
                    delete settings[location][type];
                }
            },
            setItemAction: function (action, itemKey, location) {
                const settings = this.getSettings();
                const itemActions = settings.itemActions;
                itemActions[itemKey] = itemActions[itemKey] || {};
                itemActions[itemKey][location] = itemActions[itemKey][location] || {};
                itemActions[itemKey][location][action.type] = action;
            },
            getSpecificKeyFromItemAction: function (itemKey, location, type, key) {
                const itemActions = this.getItemActions(itemKey, location);
                if (!itemActions) return false;
                return itemActions[type] ? itemActions[type][key] : false;

            },
            getItemActionElement: function (itemKey, location, type) {
                return this.getSpecificKeyFromItemAction(itemKey, location, type, 'element');
            },
            getItemActionPosition: function (itemKey, location, type) {
                return this.getSpecificKeyFromItemAction(itemKey, location, type, 'position');
            }
        }
    }
}