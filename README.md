Herkese Merhaba,

Ben Hazal Şendoğan.

Codezone Vaka Çalışması için "Rapkoloji" adlı blogu Next.js ile geliştirdim.


## Başlarken

Production Linki:[`Rapkoloji`](https://rapkoloji-by-hazal.netlify.app/)  

Localde çalıştırmak için öncelikle
``` git clone ``` ile localinize almanız gerekmektedir.

Daha sonra 

```
cd rapkoloji-by-hazal
npm install
```
komutlarını çalıştırmanız gerekmektedir.

Uygulamayı localde ayağa kaldırmak için

```
cd rapkoloji-by-hazal
bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Ardından bu linki [http://localhost:3000](http://localhost:3000) tarayıcınızda açınız.


Bu projede Google fontunu kullanabilmek için [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) özelliği kullanılmıştır.
Carousel için Swiper.js kullanılmıştır.

CSS için hiçbir ui library (swiper dışında) kullanılmamış olup, hepsi benim tarafımdan CSS Grid ya da Flexbox gibi modern teknolojiler kullanılarak yapılmıştır.

## Klasör Yapısı
assets klasöründe imagelar ve logolar yer almaktadır.
components klasöründe componentler ortak özelliklerine göre bir klasöre alınmıştır.
Her componentin kendi module.css'i vardır.


## Daha Fazlası için sizinle bir görüşme yapmak isterim.


