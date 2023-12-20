import ibuprofen from './medicines/medicineImg/Ibuprofen.jpg';
import ketanov from './medicines/medicineImg/ketanov.jpg';
import analgin from './medicines/medicineImg/analgin.jpg';

const medicines = [
    {
        name: 'Ibuprofen',
        image: ibuprofen,
        price: '0.47$',
        link: 'https://asevalar.ru/catalog/lekarstvennye_preparaty/nervnaya_sistema/sredstva_ot_boli/168253_ibuprofen_200_mg_20_sht_tabletki_pokrytye_obolochkoy/',
        description: 'Описание Ibuprofen',
    },
    {
        name: 'Ketanov',
        image: ketanov,
        price: '4.63$',
        link: 'https://366.ru/p/ketanov-tab-p-o-10mg-100-5004/?utm_source=google.com&utm_medium=organic&utm_campaign=google.com&utm_referrer=google.com',
        description: 'Описание Ketanov',
    },
    {
        name: 'Analgin',
        image: analgin,
        price: '1.33$',
        link: 'https://www.eapteka.ru/goods/id35136/',
        description: 'Описание Analgin',
    },
];

export default medicines;