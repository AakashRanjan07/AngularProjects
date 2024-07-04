import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  phone = [
    { id: 1, 
      name: 'Pharmeasy Calcium Fish Oil', 
      desc: ' It is a common pain reliever that also reduces inflammation and fever. It is often used to treat headaches, muscle aches, and arthritis.', 
      price: 55000,
      img:'https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg'},
    { id: 2,
       name: 'Rawrx Organic',
       desc: ' It is an NSAID (nonsteroidal anti-inflammatory drug) used to relieve pain, reduce fever, and alleviate inflammation. Its effective for headaches, menstrual cramps.',         
       price:45000, 
        img: 'https://cdn01.pharmeasy.in/dam/products_otc/V95136/rawrx-organic-calcium-vitamin-d3-tablet-with-vitamin-c-magnesium-and-zinc-for-bone-joint-health-2-1687782449.jpg?dim=700x0&dpr=1&q=100'},
    { id: 3, 
      name: 'Liveasy Wellness Calcium',
      desc: ' It is an antihistamine used to relieve symptoms of allergies, such as sneezing, runny nose, and itchy/watery eyes. Its non-drowsy and suitable for seasonal allergies.',         
      price: 10000, 
        img:'https://cdn01.pharmeasy.in/dam/products_otc/Q97636/pharmeasy-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-120-2-1698645746.jpg'},
    { id: 4,
       name: 'Earthking Ultiboost ',
       desc: ' It is a proton pump inhibitor (PPI) used to reduce stomach acid production. It helps treat acid reflux, gastroesophageal reflux disease (GERD), and ulcers.', 
       price: 20000, 
        img:'https://cdn01.pharmeasy.in/dam/products_otc/N40965/earth-king-horny-goat-weed-capsule-epimedium-extract-with-maca-root-powder-500mg-60-capsules-2-1689394372.jpg'},
        { id: 5, 
          name: 'WOW Briyo Fish Oil ',
          desc: 'It is a statin medication used to lower cholesterol levels and reduce the risk of heart disease. Its part of a treatment plan to manage high cholesterol.',         
          price: 10000, 
            img:'https://cdn01.pharmeasy.in/dam/products_otc/W97816/wow-life-science-multivitamin-for-women-60-veg-capsules-2-1671742204.jpg'},
            { id: 6, 
              name: 'Swisse Triple Strength',
              desc: 'It is an antidepressant medication used to treat depression, anxiety disorders, obsessive-compulsive disorder (OCD), and post-traumatic stress disorder (PTSD).',         
              price: 10000, 
                img:'https://cdn01.pharmeasy.in/dam/products_otc/M36017/swisse-ultiboost-odourless-high-strength-wild-fish-oil-1500-mg-omega-3-60-capsules-2-1671742385.jpg'},
                { id: 7, 
                  name: 'Ensure Flaxseed Omega',
                  desc: 'It is an anticoagulant medication used to prevent blood clots. It prescribed for conditions like atrial fibrillation, deep vein thrombosis, and pulmonary embolism.',         
                  price: 10000, 
                    img:'https://cdn01.pharmeasy.in/dam/products_otc/I13139/ensure-diabetes-care-vanilla-diabetes-care-powder-jar-of-400-g-2-1669710201.jpg'},
                    { id: 8, 
                      name: 'Cipzer Omega-3',
                      desc: 'It is a beta-blocker medication used to treat high blood pressure, angina (chest pain), and heart failure. It helps lower heart rate and blood pressure',         
                      price: 10000, 
                        img:'https://cdn01.pharmeasy.in/dam/products_otc/Z63893/liveasy-wellness-antacid-mint-flavour-sugar-free-bottle-of-200ml-oral-liquid-2-1695207631.jpg'},
                        { id: 9, 
                          name: 'Nutrabay Wellness Fish Oil',
                          desc: 'It is a bronchodilator that helps relieve symptoms of asthma and other respiratory conditions by opening airways and making breathing easier.',         
                          price: 10000, 
                            img:'https://cdn01.pharmeasy.in/dam/products_otc/E85882/gnc-calcium-plus-with-magnesium-vitamin-d3-strengthens-bones-1000mg-per-serving-60-capsules-2-1670821436.jpg'},
                            { id: 10, 
                              name: 'HK Truebasics Multivit',
                              desc: 'It is an ACE inhibitor used to treat high blood pressure (hypertension) and heart failure. It helps relax blood vessels to improve blood flow.',         
                              price: 10000, 
                                img:'https://cdn01.pharmeasy.in/dam/products_otc/Y73818/healthkart-calcium-tablets-for-men-women-with-vitamin-d3-for-complete-bone-health-joint-60-no-2-1709081187.jpg'}
  ];
  getPhone(){
    return this.phone;
  }
}
