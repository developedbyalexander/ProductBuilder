"use strict"

const PTCProductBuilder = {
    apiURL: null,
    fetchOptionURL: null,
    embroiderySaveImageURL: null,
    embroideryImagesURL: null,
    embroideryIconsURL: null,
    storageKey: null,
    currentSettings: {
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
        carSubmodel: null
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
    images: {
        'black-black': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_neagra_1.png?v=1716176820',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_neagra_2.jpg?v=1716176820',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_neagra_3.png?v=1716176820',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_neagra_4.jpg?v=1716176819',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_neagra_5.png?v=1716176820',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_neagra_6.jpg?v=1716176820',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_neagra_7.jpg?v=1716176820'
        },
        'black-blue': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_albastra_1.png?v=1716178093',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_albastra_2.jpg?v=1716178093',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_albastra_3.png?v=1716178098',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_albastra_4.jpg?v=1716178093',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_albastra_5.png?v=1716178094',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_albastra_6.jpg?v=1716178307',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_albastra_7.jpg?v=1716178307'
        },
        'black-grey': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_gri_1.png?v=1716179476',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_gri_2.jpg?v=1716179477',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_gri_3.png?v=1716179477',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_gri_4.jpg?v=1716179476',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_gri_5.png?v=1716179477',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_gri_6.jpg?v=1716179477',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_gri_7.jpg?v=1716179477'
        },
        'black-magenta': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_ciclam_1.png?v=1716178901',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_ciclam_2.jpg?v=1716178901',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_ciclam_3.png?v=1716178901',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_ciclam_4.jpg?v=1716178901',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_ciclam_5.png?v=1716178901',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_ciclam_6.jpg?v=1716178901',
            'seventhImage': false
        },
        'black-orange': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_portocalie_1.png?v=1716210016',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_portocalie_2.jpg?v=1716181275',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_portocalie_3.png?v=1716210016',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_portocalie_4.jpg?v=1716181275',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_portocalie_5.png?v=1716210017',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_portocalie_6.jpg?v=1716181275',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_portocalie_7.jpg?v=1716181275',
        },
        'black-purple': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_mov_1.png?v=1716179800',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_mov_2.jpg?v=1716179800',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_mov_3.png?v=1716179801',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_mov_4.jpg?v=1716179801',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_mov_5.png?v=1716179801',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_mov_6.jpg?v=1716179801',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_mov_7.jpg?v=1716179801'
        },
        'black-white': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_alba_1.png?v=1716177490',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_alba_2.jpg?v=1716177491',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_alba_3.png?v=1716177490',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_alba_4.jpg?v=1716177490',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_alba_5.png?v=1716177491',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_alba_6.jpg?v=1716177490',
            'seventhImage': false
        },
        'black-yellow': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_galbena_1.png?v=1716179212',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_galbena_2.jpg?v=1716179213',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_galbena_3.png?v=1716179213',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_galbena_4.jpg?v=1716179212',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_galbena_5.png?v=1716179213',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_galbena_6.jpg?v=1716179212',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_galbena_7.jpg?v=1716179212'
        },
        'black-red': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_rosie_1.png?v=1716187050',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_rosie_2.jpg?v=1716187050',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_rosie_3.png?v=1716187049',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_rosie_4.jpg?v=1716187048',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_rosie_5.png?v=1716187050',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_rosie_6.jpg?v=1716187049',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_mocheta_negre_margine_rosie_7.jpg?v=1716187049'
        },
        'beige-black': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_neagra_1.png?v=1716184820',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_neagra_2.jpg?v=1716184820',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_neagra_3.png?v=1716184821',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_neagra_4.jpg?v=1716184820',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_neagra_5.png?v=1716184821',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_neagra_6.jpg?v=1716184820',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_neagra_7.jpg?v=1716184821'
        },
        'beige-blue': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_albastra_1.png?v=1716181928',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_albastra_2.jpg?v=1716181928',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_albastra_3.png?v=1716181928',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_albastra_4.jpg?v=1716181928',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_albastra_5.png?v=1716181929',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_albastra_6.jpg?v=1716181928',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_albastra_7.jpg?v=1716181929'
        },
        'beige-grey': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_gri_1.png?v=1716183686',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_gri_2.jpg?v=1716183686',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_gri_3.png?v=1716183687',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_gri_4.jpg?v=1716183686',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_gri_5.png?v=1716183688',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_gri_6.jpg?v=1716183686',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_gri_7.jpg?v=1716183686'
        },
        'beige-magenta': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_ciclam_1.png?v=1716182629',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_ciclam_2.jpg?v=1716182630',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_ciclam_3.png?v=1716182629',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_ciclam_4.jpg?v=1716182629',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_ciclam_5.png?v=1716182630',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_ciclam_6.jpg?v=1716182629',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_ciclam_7.jpg?v=1716182629'
        },
        'beige-orange': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_portocalie_1.png?v=1716186112',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_portocalie_2.jpg?v=1716186112',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_portocalie_3.png?v=1716186112',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_portocalie_4.jpg?v=1716186112',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_portocalie_5.png?v=1716186112',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_portocalie_6.jpg?v=1716186111',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_portocalie_7.jpg?v=1716186112'
        },
        'beige-purple': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_mov_1.png?v=1716183950',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_mov_2.jpg?v=1716183950',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_mov_3.png?v=1716183951',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_mov_4.jpg?v=1716183949',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_mov_5.png?v=1716183950',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_mov_6.jpg?v=1716183950',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_mov_7.jpg?v=1716183950'
        },
        'beige-red': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_rosie_1.png?v=1716210128',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_rosie_2.jpg?v=1716186547',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_rosie_3.png?v=1716210130',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_rosie_4.jpg?v=1716186468',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_rosie_5.png?v=1716210130',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_rosie_6.jpg?v=1716186467',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_rosie_7.jpg?v=1716186467'
        },
        'beige-white': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_alba_1.png?v=1716181614',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_alba_2.jpg?v=1716181614',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_alba_3.png?v=1716181614',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_alba_4.jpg?v=1716181613',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_alba_5.png?v=1716181613',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_alba_6.jpg?v=1716181613',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_alba_7.jpg?v=1716181613'
        },
        'beige-yellow': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_galbena_1.png?v=1716183336',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_galbena_2.jpg?v=1716183336',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_galbena_3.png?v=1716183338',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_galbena_4.jpg?v=1716183335',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_galbena_5.png?v=1716183336',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_galbena_6.jpg?v=1716183336',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/covorase_auto_mocheta_bej_margine_galbena_7.jpg?v=1716183336'
        },
        'grey-black': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_neagra_1.png?v=1716212513',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_neagra_2.jpg?v=1716187533',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_neagra_3.png?v=1716212514',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_neagra_4.jpg?v=1716187532',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_neagra_5.png?v=1716212514',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_neagra_6.jpg?v=1716187533',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_neagra_7.jpg?v=1716187533'
        },
        'grey-blue': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_albastra_1.png?v=1716187770',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_albastra_2.jpg?v=1716187769',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_albastra_3.png?v=1716187771',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_albastra_4.jpg?v=1716187769',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_albastra_5.png?v=1716187771',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_albastra_6.jpg?v=1716187769',
            'seventhImage': false
        },
        'grey-grey': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_gri_1.png?v=1716187997',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_gri_2.jpg?v=1716187996',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_gri_3.png?v=1716187998',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_gri_4.jpg?v=1716187996',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_gri_5.png?v=1716187998',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_gri_6.jpg?v=1716187997',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_gri_7.jpg?v=1716187997'
        },
        'grey-magenta': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_ciclam_1.png?v=1716189006',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_ciclam_2.jpg?v=1716189005',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_ciclam_3.png?v=1716189006',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_ciclam_7.jpg?v=1716189443',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_ciclam_5.png?v=1716189006',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_ciclam_6.jpg?v=1716189006',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_ciclam_4.jpg?v=1716189005',
        },
        'grey-orange': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_portocalie_1.png?v=1716189307',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_portocalie_2.jpg?v=1716189307',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_portocalie_3.png?v=1716189307',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_portocalie_4.jpg?v=1716189306',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_portocalie_5.png?v=1716189308',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_portocalie_6.jpg?v=1716189307',
            'seventhImage': false
        },
        'grey-purple': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_mov_1.png?v=1716189645',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_mov_2.jpg?v=1716189645',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_mov_3.png?v=1716189646',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_mov_4.jpg?v=1716189644',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_mov_5.png?v=1716189646',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_mov_6.jpg?v=1716189645',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_mov_7.jpg?v=1716189645'
        },
        'grey-red': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_rosie_1.png?v=1716190052',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_rosie_2.jpg?v=1716190053',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_rosie_3.png?v=1716190053',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_rosie_4.jpg?v=1716190052',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_rosie_5.png?v=1716190053',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_rosie_6.jpg?v=1716190052',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_rosie_7.jpg?v=1716190052'
        },
        'grey-white': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_alba_1.png?v=1716213748',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_alba_2.jpg?v=1716190303',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_alba_3.png?v=1716213748',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_alba_4.jpg?v=1716190303',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_alba_7.jpg?v=1716190303',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_alba_6.jpg?v=1716190303',
            'seventhImage': false
        },
        'grey-yellow': {
            'firstImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_galbena_1.png?v=1716190574',
            'secondImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_galbena_2.jpg?v=1716190573',
            'thirdImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_galbena_3.png?v=1716190575',
            'fourthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_galbena_4.jpg?v=1716190573',
            'fifthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_galbena_5.png?v=1716190575',
            'sixthImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_galbena_6.jpg?v=1716190574',
            'seventhImage': 'https://cdn.shopify.com/s/files/1/0324/8091/9684/files/mocheta_auto_gri_margine_galbena_7.jpg?v=1716190574'
        }
    },
    prices: {
        basePrice: 198,
        borderColor: 24,
        embroidery: {
            1: 50,
            2: 90,
            3: 130,
            4: 160,
            6: 260,
            8: 320
        },
        threadColor: {
            'simple': 14,
            'double': 24
        },
        standard: [
            {'baseColor': 'black', 'borderColor': 'black', 'threadType': 'simple', 'threadColor': 'black', 'reinforcement': 'no', 'configuration': 'full'},
            {'baseColor': 'grey', 'borderColor': 'grey', 'threadType': 'simple', 'threadColor': 'grey', 'reinforcement': 'no', 'configuration': 'full'},
            {'baseColor': 'beige', 'borderColor': 'beige', 'threadType': 'simple', 'threadColor': 'beige', 'reinforcement': 'no', 'configuration': 'full'},
        ]
    },
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
    init: function (config) {
        this.applyConfig(config);
        this.addListeners();
        if (this.storage.hasSettings()) {
            this.currentSettings = this.storage.getSettings();
            this.updateOptionsBySettings();
        }
        this.preloadImages();
        this.embroideryBuilder.init();
    },
    applyConfig: function (config) {
        const configKeys = ['apiURL', 'fetchOptionURL', 'embroiderySaveImageURL', 'embroideryImagesURL', 'embroideryIconsURL', 'storageKey'];
        for (const key of configKeys) {
            if (config.hasOwnProperty(key)) {
                this[key] = config[key];
            }
        }
    },
    addListeners: function () {
        document.querySelectorAll('input[name="baseColor"]').forEach(input => {
            input.addEventListener('input', this.changeOption);
        });
        document.querySelectorAll('input[name="borderColor"]').forEach(input => {
            input.addEventListener('input', this.changeOption);
        });
        document.querySelectorAll('input[name="threadType"]').forEach(input => {
            input.addEventListener('input', this.changeOption);
        });
        document.querySelectorAll('input[name="threadColor"]').forEach(input => {
            input.addEventListener('input', this.changeOption);
        });
        document.querySelectorAll('input[name="reinforcement"]').forEach(input => {
            input.addEventListener('input', this.changeOption);
        });
        document.querySelectorAll('input[name="configuration"]').forEach(input => {
            input.addEventListener('input', this.changeOption);
        });
        document.querySelectorAll('input[name="embroidery"]').forEach(input => {
            input.addEventListener('input', this.changeOption);
            input.addEventListener('input', this.toggleEmbroideryBuilder);
        });
        document.getElementById('carBrand').addEventListener('change', this.changeBrand);
        document.getElementById('carModel').addEventListener('change', this.changeModel);
        document.getElementById('carSubmodel').addEventListener('change', this.changeSubmodel);

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
        if (optionKey === '_odoo_attributes') return;
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
        this.embroideryBuilder.updateCanvasByCurrentSettings();
    },
    updateCarSettings: function (name, value) {
        this.currentSettings[name] = value;
        this.storage.saveSettings(this.currentSettings);
    },
    updateOptionsBySettings: async function () {
        for (const setting in this.currentSettings) {
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
        if (this.currentSettings.embroidery === 'yes') {
            this.toggleEmbroideryBuilder('block');
        } else {
            this.toggleEmbroideryBuilder('none');
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
            document.getElementById('sixthImage').src = this.resizeImage(images.sixthImage, '_450x450_crop_center');
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
                if (['carBrand', 'carModel', 'carSubmodel', 'embroidery', '_odoo_attributes'].includes(key)) continue;
                if (this.currentSettings.hasOwnProperty(key) && this.currentSettings[key] !== standardPrice[key]) {
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
        await PTCProductBuilder.updateCarSelect('carBrand');
        PTCProductBuilder.updateCarSettings(this.name, this.value);
    },
    changeModel: async function () {
        PTCProductBuilder.carSettings.carModel = this.value;
        PTCProductBuilder.carSettings.carSubmodel = null;
        await PTCProductBuilder.updateCarSelect('carModel');
        PTCProductBuilder.updateCarSettings(this.name, this.value);
    },
    changeSubmodel: async function () {
        PTCProductBuilder.carSettings.carSubmodel = this.value;
        await PTCProductBuilder.updateCarSelect('carSubmodel');
        PTCProductBuilder.updateCarSettings(this.name, this.value);
    },
    updateCarSelect: async function (type) {
        const modelSelect = document.getElementById('carModel');
        const submodelSelect = document.getElementById('carSubmodel');
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
        }
        if (type === 'carModel') {
            submodelSelect.innerHTML = '';

            const submodelBlankOption = document.createElement('option');
            submodelBlankOption.textContent = 'Selecteaza submodel';
            submodelSelect.appendChild(submodelBlankOption);
        }

        if (type === 'carSubmodel') {
            titleEl.innerText = this.getProcessedTitleByCurrentSettings();
        }

        if (type === 'carBrand' || type === 'carModel') {
            const options = await PTCProductBuilder.getCarOptions();
            options.forEach(item => {
                const option = document.createElement('option');
                option.value = item.id;
                option.textContent = item.name;
                if (type === 'carBrand') {
                    modelSelect.appendChild(option);
                } else {
                    submodelSelect.appendChild(option);
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
        const brand = this.getSelectedOption('carBrand');
        const submodel = this.getSelectedOption('carSubmodel');
        return `Covorase auto mocheta ${brand} ${submodel}`;
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
        const properties = PTCProductBuilder.currentSettings;
        properties['_odoo_attributes'] = this.getOdooProperties();
        if (this.currentSettings.embroidery === 'yes') {
            properties['_embroidery'] = await PTCProductBuilder.embroideryBuilder.saveImage();
        }
        return properties;
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
        }

        let hasError = false;
        for (const key in this.carSettings) {
            if (this.carSettings[key] === null) {
                if (!hasError) hasError = true;
                errorEls[key].innerText = 'Selecteaza o optiune';
            } else {
                errorEls[key].innerText = '';
            }
        }
        return !hasError;
    },
    storage: {
        hasSettings: function () {
            return Boolean(localStorage.getItem(PTCProductBuilder.storageKey));
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
        itemKeys: ['item-1', 'item-2', 'item-3', 'item-4'],
        svgs: {
            'item-1': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 2500">
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
              }
              #svgFirstThreadColor {
                stroke: #fff;              
              }
              #svgSecondThreadColor {
                stroke: #fff;              
              }
            </style>
          </defs>
          <path id="svgBaseColor" d="M820,573c-16.792-91.417-26.458-203.333-23-280s2.792-107.083,125-132,207.17-35.334,296-50,263-43.207,317-50c46.24-5.816,158.17-42.208,176,87s20.42,150.042,21,179,7.92,69.3-44,115c-29.57,26.033-44.61,39.465-54,48-1.81,1.642-6.71,6.854-8.11,8.491C1611.4,515.529,1558.62,630.175,1718,630c39.83-.044,116.42-13.458,154-7,20.52,3.525,63.68,3.507,72,104,8.42,101.708,13.92,159.792,0,236s-32.83,165.29-26,239,28.29,215.62,56,300,40.62,133.62,84,203,97.62,132.29,118,197c16.19,51.43,18.96,164.62,18,218s-2.38,139.62-130,155-327.71,38.29-469,55-415.54,52.96-516,68-248.208,44.29-288,50-165.875,41.46-197-158-60.208-341.54-78-484-45.875-335.71-60-443-21.542-251.71-22-304-0.875-73.042,1-100S420.792,854.292,566,836C768.9,810.442,865.105,818.558,820,573Z"/>
          <path id="svgBorderColor" d="M834.714,587.455c-16.493-89.743-38.809-205.609-35.413-280.872S800.543,195.461,920.576,171s211.8-33.187,299.054-47.584S1480.95,78,1533.98,71.333c45.42-5.709,150.85-41.435,168.37,85.406s18.55,139.794,19.13,168.222,6.57,67.362-44.72,111.893c-55.26,47.977-67.6,72.981-74.76,97.146-12.81,43.231-12.93,109.546,110.22,109.411,39.13-.043,108.35-13.212,145.26-6.872,20.15,3.461,67.05,3.443,75.22,102.1,8.27,99.845,7.67,153.865-6,228.677s-28.78,162.269-22.07,234.619,31.71,211.68,58.93,294.51,34.4,131.18,77,199.28,98,140.37,118.01,203.89c15.91,50.49,33.37,161.61,32.43,214.01s-2.33,132.57-127.68,147.66-334.63,37.59-473.41,53.99-414.14,56.49-512.81,71.26-261.466,43.48-300.55,49.08-153.921,36.2-184.492-159.6-48.957-341.29-66.432-481.14-45.058-329.56-58.931-434.89c-39.78-302-95.331-503.992,99.719-528.549C765.7,806.34,879.015,828.515,834.714,587.455Z"/>
          <path id="svgFirstThreadColor" data-name="Ata 1" d="M830.06,584.662c-16.567-90.119-40.485-207.973-37.073-283.552s3.748-110.589,124.325-135.152,214.258-34.827,301.908-49.284,262.5-45.607,315.78-52.3c45.62-5.733,153.04-39.609,170.63,87.766s21.64,140.381,22.22,168.929,6.6,68.646-44.92,113.364c-55.51,48.178-67.41,71.288-74.6,95.554-12.87,43.413-17.99,108.007,105.72,107.871,39.3-.043,108.84-12.268,145.92-5.9,20.24,3.475,69.35,5.457,77.56,104.524,8.3,100.266,6.7,154.512-7.03,229.639s-27.91,162.944-21.17,235.614,31.86,212.56,59.2,295.74,35.56,131.73,78.35,200.12,96.44,140.96,116.54,204.75c15.98,50.7,33.53,162.29,32.58,214.9s-2.34,131.63-128.26,146.79-337.15,41.74-476.55,58.22-416.02,56.72-515.14,71.55-262.656,41.16-301.917,46.79-156.62,36.35-187.329-160.28-47.179-342.72-64.733-483.15-47.263-330.95-61.2-436.72c-39.96-303.27-93.764-508.115,102.172-532.776C763.23,802.468,874.563,826.737,830.06,584.662Z"/>
          <path id="svgSecondThreadColor" data-name="Ata 2" d="M841.6,591.692c-16.567-90.12-38.985-203.474-35.573-279.052s-7.793-111.59,112.784-136.153S1131.57,143.161,1219.22,128.7,1481.72,83.1,1535,76.4c45.62-5.733,143.5-41.609,161.1,85.765s19.64,137.382,20.21,165.929-4.44,67.646-55.97,112.364c-55.51,48.179-58.86,73.288-66.05,97.554-12.87,43.414-3.95,111.012,119.76,110.875,39.3-.043,108.84-12.267,145.92-5.9,20.24,3.475,59.32,2.457,67.52,101.524,8.31,100.265,4.7,153.508-9.03,228.635s-25.9,162.944-19.16,235.6,32.86,212.57,60.2,295.75,36.56,131.73,79.36,200.12,96.43,140.96,116.53,204.75c15.98,50.7,28.99,160.78,29.07,213.4,0.06,37.56,1.67,114.56-119.22,130.72-125.72,16.8-334.65,38.75-474.05,55.22s-416.02,58.73-515.14,73.56-262.656,41.66-301.917,47.29-143.57,34.34-175.284-145.22c-34.614-195.98-48.183-339.72-65.737-480.16s-44.263-330.94-58.2-436.71c-39.96-303.27-100.778-504.116,95.158-528.776C770.258,813.5,886.1,833.766,841.6,591.692Z"/>
        </svg>`,
            'item-2': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 2500">
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
              }
              #svgFirstThreadColor {
                stroke: #fff;              
              }
              #svgSecondThreadColor {
                stroke: #fff;              
              }
            </style>
          </defs>
          <path id="svgBaseColor" d="M820,573c-16.792-91.417-26.458-203.333-23-280s2.792-107.083,125-132,207.17-35.334,296-50,263-43.207,317-50c46.24-5.816,158.17-42.208,176,87s20.42,150.042,21,179,7.92,69.3-44,115c-29.57,26.033-44.61,39.465-54,48-1.81,1.642-6.71,6.854-8.11,8.491C1611.4,515.529,1558.62,630.175,1718,630c39.83-.044,116.42-13.458,154-7,20.52,3.525,63.68,3.507,72,104,8.42,101.708,13.92,159.792,0,236s-32.83,165.29-26,239,28.29,215.62,56,300,40.62,133.62,84,203,97.62,132.29,118,197c16.19,51.43,18.96,164.62,18,218s-2.38,139.62-130,155-327.71,38.29-469,55-415.54,52.96-516,68-248.208,44.29-288,50-165.875,41.46-197-158-60.208-341.54-78-484-45.875-335.71-60-443-21.542-251.71-22-304-0.875-73.042,1-100S420.792,854.292,566,836C768.9,810.442,865.105,818.558,820,573Z"/>
          <path id="svgBorderColor" d="M834.714,587.455c-16.493-89.743-38.809-205.609-35.413-280.872S800.543,195.461,920.576,171s211.8-33.187,299.054-47.584S1480.95,78,1533.98,71.333c45.42-5.709,150.85-41.435,168.37,85.406s18.55,139.794,19.13,168.222,6.57,67.362-44.72,111.893c-55.26,47.977-67.6,72.981-74.76,97.146-12.81,43.231-12.93,109.546,110.22,109.411,39.13-.043,108.35-13.212,145.26-6.872,20.15,3.461,67.05,3.443,75.22,102.1,8.27,99.845,7.67,153.865-6,228.677s-28.78,162.269-22.07,234.619,31.71,211.68,58.93,294.51,34.4,131.18,77,199.28,98,140.37,118.01,203.89c15.91,50.49,33.37,161.61,32.43,214.01s-2.33,132.57-127.68,147.66-334.63,37.59-473.41,53.99-414.14,56.49-512.81,71.26-261.466,43.48-300.55,49.08-153.921,36.2-184.492-159.6-48.957-341.29-66.432-481.14-45.058-329.56-58.931-434.89c-39.78-302-95.331-503.992,99.719-528.549C765.7,806.34,879.015,828.515,834.714,587.455Z"/>
          <path id="svgFirstThreadColor" data-name="Ata 1" d="M830.06,584.662c-16.567-90.119-40.485-207.973-37.073-283.552s3.748-110.589,124.325-135.152,214.258-34.827,301.908-49.284,262.5-45.607,315.78-52.3c45.62-5.733,153.04-39.609,170.63,87.766s21.64,140.381,22.22,168.929,6.6,68.646-44.92,113.364c-55.51,48.178-67.41,71.288-74.6,95.554-12.87,43.413-17.99,108.007,105.72,107.871,39.3-.043,108.84-12.268,145.92-5.9,20.24,3.475,69.35,5.457,77.56,104.524,8.3,100.266,6.7,154.512-7.03,229.639s-27.91,162.944-21.17,235.614,31.86,212.56,59.2,295.74,35.56,131.73,78.35,200.12,96.44,140.96,116.54,204.75c15.98,50.7,33.53,162.29,32.58,214.9s-2.34,131.63-128.26,146.79-337.15,41.74-476.55,58.22-416.02,56.72-515.14,71.55-262.656,41.16-301.917,46.79-156.62,36.35-187.329-160.28-47.179-342.72-64.733-483.15-47.263-330.95-61.2-436.72c-39.96-303.27-93.764-508.115,102.172-532.776C763.23,802.468,874.563,826.737,830.06,584.662Z"/>
          <path id="svgSecondThreadColor" data-name="Ata 2" d="M841.6,591.692c-16.567-90.12-38.985-203.474-35.573-279.052s-7.793-111.59,112.784-136.153S1131.57,143.161,1219.22,128.7,1481.72,83.1,1535,76.4c45.62-5.733,143.5-41.609,161.1,85.765s19.64,137.382,20.21,165.929-4.44,67.646-55.97,112.364c-55.51,48.179-58.86,73.288-66.05,97.554-12.87,43.414-3.95,111.012,119.76,110.875,39.3-.043,108.84-12.267,145.92-5.9,20.24,3.475,59.32,2.457,67.52,101.524,8.31,100.265,4.7,153.508-9.03,228.635s-25.9,162.944-19.16,235.6,32.86,212.57,60.2,295.75,36.56,131.73,79.36,200.12,96.43,140.96,116.53,204.75c15.98,50.7,28.99,160.78,29.07,213.4,0.06,37.56,1.67,114.56-119.22,130.72-125.72,16.8-334.65,38.75-474.05,55.22s-416.02,58.73-515.14,73.56-262.656,41.66-301.917,47.29-143.57,34.34-175.284-145.22c-34.614-195.98-48.183-339.72-65.737-480.16s-44.263-330.94-58.2-436.71c-39.96-303.27-100.778-504.116,95.158-528.776C770.258,813.5,886.1,833.766,841.6,591.692Z"/>
        </svg>`,
            'item-3': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 2500">
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
              }
              #svgFirstThreadColor {
                stroke: #fff;              
              }
              #svgSecondThreadColor {
                stroke: #fff;              
              }
            </style>
          </defs>
          <path id="svgBaseColor" d="M820,573c-16.792-91.417-26.458-203.333-23-280s2.792-107.083,125-132,207.17-35.334,296-50,263-43.207,317-50c46.24-5.816,158.17-42.208,176,87s20.42,150.042,21,179,7.92,69.3-44,115c-29.57,26.033-44.61,39.465-54,48-1.81,1.642-6.71,6.854-8.11,8.491C1611.4,515.529,1558.62,630.175,1718,630c39.83-.044,116.42-13.458,154-7,20.52,3.525,63.68,3.507,72,104,8.42,101.708,13.92,159.792,0,236s-32.83,165.29-26,239,28.29,215.62,56,300,40.62,133.62,84,203,97.62,132.29,118,197c16.19,51.43,18.96,164.62,18,218s-2.38,139.62-130,155-327.71,38.29-469,55-415.54,52.96-516,68-248.208,44.29-288,50-165.875,41.46-197-158-60.208-341.54-78-484-45.875-335.71-60-443-21.542-251.71-22-304-0.875-73.042,1-100S420.792,854.292,566,836C768.9,810.442,865.105,818.558,820,573Z"/>
          <path id="svgBorderColor" d="M834.714,587.455c-16.493-89.743-38.809-205.609-35.413-280.872S800.543,195.461,920.576,171s211.8-33.187,299.054-47.584S1480.95,78,1533.98,71.333c45.42-5.709,150.85-41.435,168.37,85.406s18.55,139.794,19.13,168.222,6.57,67.362-44.72,111.893c-55.26,47.977-67.6,72.981-74.76,97.146-12.81,43.231-12.93,109.546,110.22,109.411,39.13-.043,108.35-13.212,145.26-6.872,20.15,3.461,67.05,3.443,75.22,102.1,8.27,99.845,7.67,153.865-6,228.677s-28.78,162.269-22.07,234.619,31.71,211.68,58.93,294.51,34.4,131.18,77,199.28,98,140.37,118.01,203.89c15.91,50.49,33.37,161.61,32.43,214.01s-2.33,132.57-127.68,147.66-334.63,37.59-473.41,53.99-414.14,56.49-512.81,71.26-261.466,43.48-300.55,49.08-153.921,36.2-184.492-159.6-48.957-341.29-66.432-481.14-45.058-329.56-58.931-434.89c-39.78-302-95.331-503.992,99.719-528.549C765.7,806.34,879.015,828.515,834.714,587.455Z"/>
          <path id="svgFirstThreadColor" data-name="Ata 1" d="M830.06,584.662c-16.567-90.119-40.485-207.973-37.073-283.552s3.748-110.589,124.325-135.152,214.258-34.827,301.908-49.284,262.5-45.607,315.78-52.3c45.62-5.733,153.04-39.609,170.63,87.766s21.64,140.381,22.22,168.929,6.6,68.646-44.92,113.364c-55.51,48.178-67.41,71.288-74.6,95.554-12.87,43.413-17.99,108.007,105.72,107.871,39.3-.043,108.84-12.268,145.92-5.9,20.24,3.475,69.35,5.457,77.56,104.524,8.3,100.266,6.7,154.512-7.03,229.639s-27.91,162.944-21.17,235.614,31.86,212.56,59.2,295.74,35.56,131.73,78.35,200.12,96.44,140.96,116.54,204.75c15.98,50.7,33.53,162.29,32.58,214.9s-2.34,131.63-128.26,146.79-337.15,41.74-476.55,58.22-416.02,56.72-515.14,71.55-262.656,41.16-301.917,46.79-156.62,36.35-187.329-160.28-47.179-342.72-64.733-483.15-47.263-330.95-61.2-436.72c-39.96-303.27-93.764-508.115,102.172-532.776C763.23,802.468,874.563,826.737,830.06,584.662Z"/>
          <path id="svgSecondThreadColor" data-name="Ata 2" d="M841.6,591.692c-16.567-90.12-38.985-203.474-35.573-279.052s-7.793-111.59,112.784-136.153S1131.57,143.161,1219.22,128.7,1481.72,83.1,1535,76.4c45.62-5.733,143.5-41.609,161.1,85.765s19.64,137.382,20.21,165.929-4.44,67.646-55.97,112.364c-55.51,48.179-58.86,73.288-66.05,97.554-12.87,43.414-3.95,111.012,119.76,110.875,39.3-.043,108.84-12.267,145.92-5.9,20.24,3.475,59.32,2.457,67.52,101.524,8.31,100.265,4.7,153.508-9.03,228.635s-25.9,162.944-19.16,235.6,32.86,212.57,60.2,295.75,36.56,131.73,79.36,200.12,96.43,140.96,116.53,204.75c15.98,50.7,28.99,160.78,29.07,213.4,0.06,37.56,1.67,114.56-119.22,130.72-125.72,16.8-334.65,38.75-474.05,55.22s-416.02,58.73-515.14,73.56-262.656,41.66-301.917,47.29-143.57,34.34-175.284-145.22c-34.614-195.98-48.183-339.72-65.737-480.16s-44.263-330.94-58.2-436.71c-39.96-303.27-100.778-504.116,95.158-528.776C770.258,813.5,886.1,833.766,841.6,591.692Z"/>
        </svg>`,
            'item-4': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 2500">
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
              }
              #svgFirstThreadColor {
                stroke: #fff;              
              }
              #svgSecondThreadColor {
                stroke: #fff;              
              }
            </style>
          </defs>
          <path id="svgBaseColor" d="M820,573c-16.792-91.417-26.458-203.333-23-280s2.792-107.083,125-132,207.17-35.334,296-50,263-43.207,317-50c46.24-5.816,158.17-42.208,176,87s20.42,150.042,21,179,7.92,69.3-44,115c-29.57,26.033-44.61,39.465-54,48-1.81,1.642-6.71,6.854-8.11,8.491C1611.4,515.529,1558.62,630.175,1718,630c39.83-.044,116.42-13.458,154-7,20.52,3.525,63.68,3.507,72,104,8.42,101.708,13.92,159.792,0,236s-32.83,165.29-26,239,28.29,215.62,56,300,40.62,133.62,84,203,97.62,132.29,118,197c16.19,51.43,18.96,164.62,18,218s-2.38,139.62-130,155-327.71,38.29-469,55-415.54,52.96-516,68-248.208,44.29-288,50-165.875,41.46-197-158-60.208-341.54-78-484-45.875-335.71-60-443-21.542-251.71-22-304-0.875-73.042,1-100S420.792,854.292,566,836C768.9,810.442,865.105,818.558,820,573Z"/>
          <path id="svgBorderColor" d="M834.714,587.455c-16.493-89.743-38.809-205.609-35.413-280.872S800.543,195.461,920.576,171s211.8-33.187,299.054-47.584S1480.95,78,1533.98,71.333c45.42-5.709,150.85-41.435,168.37,85.406s18.55,139.794,19.13,168.222,6.57,67.362-44.72,111.893c-55.26,47.977-67.6,72.981-74.76,97.146-12.81,43.231-12.93,109.546,110.22,109.411,39.13-.043,108.35-13.212,145.26-6.872,20.15,3.461,67.05,3.443,75.22,102.1,8.27,99.845,7.67,153.865-6,228.677s-28.78,162.269-22.07,234.619,31.71,211.68,58.93,294.51,34.4,131.18,77,199.28,98,140.37,118.01,203.89c15.91,50.49,33.37,161.61,32.43,214.01s-2.33,132.57-127.68,147.66-334.63,37.59-473.41,53.99-414.14,56.49-512.81,71.26-261.466,43.48-300.55,49.08-153.921,36.2-184.492-159.6-48.957-341.29-66.432-481.14-45.058-329.56-58.931-434.89c-39.78-302-95.331-503.992,99.719-528.549C765.7,806.34,879.015,828.515,834.714,587.455Z"/>
          <path id="svgFirstThreadColor" data-name="Ata 1" d="M830.06,584.662c-16.567-90.119-40.485-207.973-37.073-283.552s3.748-110.589,124.325-135.152,214.258-34.827,301.908-49.284,262.5-45.607,315.78-52.3c45.62-5.733,153.04-39.609,170.63,87.766s21.64,140.381,22.22,168.929,6.6,68.646-44.92,113.364c-55.51,48.178-67.41,71.288-74.6,95.554-12.87,43.413-17.99,108.007,105.72,107.871,39.3-.043,108.84-12.268,145.92-5.9,20.24,3.475,69.35,5.457,77.56,104.524,8.3,100.266,6.7,154.512-7.03,229.639s-27.91,162.944-21.17,235.614,31.86,212.56,59.2,295.74,35.56,131.73,78.35,200.12,96.44,140.96,116.54,204.75c15.98,50.7,33.53,162.29,32.58,214.9s-2.34,131.63-128.26,146.79-337.15,41.74-476.55,58.22-416.02,56.72-515.14,71.55-262.656,41.16-301.917,46.79-156.62,36.35-187.329-160.28-47.179-342.72-64.733-483.15-47.263-330.95-61.2-436.72c-39.96-303.27-93.764-508.115,102.172-532.776C763.23,802.468,874.563,826.737,830.06,584.662Z"/>
          <path id="svgSecondThreadColor" data-name="Ata 2" d="M841.6,591.692c-16.567-90.12-38.985-203.474-35.573-279.052s-7.793-111.59,112.784-136.153S1131.57,143.161,1219.22,128.7,1481.72,83.1,1535,76.4c45.62-5.733,143.5-41.609,161.1,85.765s19.64,137.382,20.21,165.929-4.44,67.646-55.97,112.364c-55.51,48.179-58.86,73.288-66.05,97.554-12.87,43.414-3.95,111.012,119.76,110.875,39.3-.043,108.84-12.267,145.92-5.9,20.24,3.475,59.32,2.457,67.52,101.524,8.31,100.265,4.7,153.508-9.03,228.635s-25.9,162.944-19.16,235.6,32.86,212.57,60.2,295.75,36.56,131.73,79.36,200.12,96.43,140.96,116.53,204.75c15.98,50.7,28.99,160.78,29.07,213.4,0.06,37.56,1.67,114.56-119.22,130.72-125.72,16.8-334.65,38.75-474.05,55.22s-416.02,58.73-515.14,73.56-262.656,41.66-301.917,47.29-143.57,34.34-175.284-145.22c-34.614-195.98-48.183-339.72-65.737-480.16s-44.263-330.94-58.2-436.71c-39.96-303.27-100.778-504.116,95.158-528.776C770.258,813.5,886.1,833.766,841.6,591.692Z"/>
        </svg>`,
        },
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
            }
        },
        init: function () {
            this.loadStages();
            this.updateCanvasByCurrentSettings();
            this.addListeners();
            this.initModals();
        },
        addListeners: function () {
            document.getElementById('embroideryEditAllModalBtn').addEventListener('click', function () {
                PTCProductBuilder.embroideryBuilder.showEmbroideryEditModal('all');
            });
            document.getElementById('embroideryEditCustomModalBtn').addEventListener('click', function () {
                PTCProductBuilder.embroideryBuilder.showEmbroideryEditModal('custom');
            });
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
            const svg = this.svgs[itemKey];
            const svgDocument = new DOMParser().parseFromString(svg, 'image/svg+xml');

            const svgBaseColorEl = svgDocument.getElementById('svgBaseColor');
            svgBaseColorEl.style.fill = settings.baseColor;

            const svgBorderColorEl = svgDocument.getElementById('svgBorderColor');
            svgBorderColorEl.style.stroke = settings.borderColor;

            const svgFirstThreadColorEl = svgDocument.getElementById('svgFirstThreadColor');
            svgFirstThreadColorEl.style.stroke = settings.firstThreadColor;

            const svgSecondThreadColorEl = svgDocument.getElementById('svgSecondThreadColor');
            svgSecondThreadColorEl.style.stroke = settings.secondThreadColor;

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
            if (type !== 'all' || specificItemKey) type = specificItemKey ?? 'item-1';
            document.getElementById('textItem').value = type;
            document.getElementById('iconItem').value = type;
            document.getElementById('embroideryItem').style.display = (type === 'all') ? 'none' : 'block';
            this.applyItemSettings(specificItemKey ?? 'item-1');
            this.displayModalCanvasByItem(specificItemKey ?? 'item-1');
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

            const positions = {
                'center-bottom': {
                    x: stage.width() / 2 + 20,
                    y: stage.height() - 55,
                    rotation: params.flip === 'no' ? -8 : -188,
                },
                'center-left': {
                    x: 130,
                    y: stage.height() / 2 + 80,
                    rotation: params.flip === 'no' ? 84 : -98,
                },
                'center-right': {
                    x: 355,
                    y: stage.height() / 2 + 10,
                    rotation: params.flip === 'no' ? 80 : -98,
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

            const positions = {
                'center-bottom': {
                    x: (stage.width() - imgSize.width) / 2 + 20,
                    y: stage.height() - imgSize.height,
                    offsetX: imgSize.width / 2,
                    offsetY: imgSize.height / 2
                },
                'center-left': {
                    x: imgSize.height - 70,
                    y: (stage.height() - imgSize.width) / 2 + 80,
                    offsetX: imgSize.width / 2,
                    offsetY: imgSize.height / 2
                },
                'center-right': {
                    x: (stage.width() - imgSize.width) - 80,
                    y: (stage.height() - imgSize.width) / 2 + 30,
                    offsetX: imgSize.width / 2,
                    offsetY: imgSize.height / 2
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
                } else {
                    parent.style.height = fontOption.offsetWidth ?? 0;
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
