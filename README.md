# Project Techorium
Techolay Sosyal deneyiminizi iyileştirmek için yapılan Project Techorium, birkaç ekleme ile beraber daha güzel bir deneyim vermek amacındadır.
Aslı sadece OS kategori ikonlarını değiştirme amacı olan Project TechnOSpat'tan başlayıp daha gelişmiş olan Project Quettapat'ın Techolay Sosyal'e sıçramasıdır. Her ikisini de tek saniyede nakavt eden, gelişmiş bir eklentidir.

Şu anki Chrome Web Mağazası ve Firefox Uzantıları sürümü güncel. 1.60.0 sürümü en güncel sürümdür.

[![Foo](https://github.com/user-attachments/assets/9e72da57-2ed9-47d2-b06b-c82a75bfde6e)](https://chromewebstore.google.com/detail/project-techorium/ndlgcleajbcbklofcefeghigioafcjhb?hl=tr)
[![Foo](https://github.com/user-attachments/assets/aea6e79a-d48f-423b-97e5-d9e605518f5e)](https://addons.mozilla.org/tr/firefox/addon/project-techorium/)


Eklentinin getirdiği başlıca özellikler şunlar:

- ~~GIF profil fotoğrafları (Nizel G'nin orijinal kodu Techolay için revize edildi.)~~ <br />
  Techolay Sosyal'de hazır bulunduğu için devre dışı bıraktım, olası bir durumda açmak için yapılması gerekenler aşağıda bulunuyor.

- Yeni Techolay logosu (Logo için dijitalfikir'e sonsuz teşekkürler!)
- İşletim sistemi kategorilerinde yeni logolar (Bkz. Project TechnOSpat)
- Kullanıcı altındaki İS/tarayıcı kısmında yeni ikonlar
- Eklenti ayarlarını düzenleyebileceğiniz pop-up (Pop-up'ın büyük ölçüde gelişiminden ötürü Yonga'ya teşekkürler!)
- Pop-up aracılığıyla özel CSS ekleme
- Ana sayfa ve profil sayfanıza özel duvar kağıdı ekleme. Sadece siz görebilirsiniz. :d
- Eski Techolay teması (3507Enes/Wyltre'a teşekkürler!)

![project-techorium-1](https://github.com/StereoLuigi99/Project-Techorium/assets/166461481/d40e3b83-1a12-48fb-b45b-f1758e26bcf2)

## Resimler/Ekran Görüntüleri

![project-techorium-ss](https://github.com/user-attachments/assets/5cac382e-deb9-45e7-901d-a0cd0af36e96)

## Alternatif Yükleme Aşamaları
### Chromium (Chrome, Edge, Opera, Brave vb.)
- ZIP dosyalarını klasöre çıkartın.
- Tarayıcının eklentiler bölümüne girin. Genellikle `chrome://extensions` olur.
- Geliştirici modunu açın ve paketlenmemiş eklenti yükleme tuşuna basın.
- Eklentinin çıkartıldığı klasörü seçin.

### Firefox (Firefox, R3dfox, Librewolf vb.)
- XPI dosyasını indirin.
- Tarayıcının eklentiler bölümüne girin. Genellikle `about:addons` olur.
- XPI dosyasını tutup eklentiler bölümüne sürükleyin.

## GIF Özelliği Nasıl Açılır? (Chromium İçin)
Bir gün bir yönetici GIF özelliğini devre dışı bıraktı diyelim, GIF özelliğini eklentiden nasıl geri açacaksınız?
Chromium'un alternatif yükleme yöntemini kullananlar eklenti klasörünün olduğu yere bakabilirler. Mağazadan kuranlar için:
- Genellikle `%userprofile%\AppData\Local\<tarayıcı adının olduğu klasör>\User Data\Default\Extensions\<eklenti id>\1.60.0_0` klasöründe bulabilirsiniz.

- `manifest.json` dosyasına girin.
- Müsait bir yere aşağıdaki kod bloğunu yapıştırın. Eğer hata verirse yanlış yapıştırmış olabilirsiniz.

```
"declarative_net_request": {
    "rule_resources": [
      {
        "id": "ruleset_1",
        "enabled": true,
        "path": "rules.json"
      }
    ]
  },
```

## Emeği Geçenler
- Technopat'taki GIF eklentisini hazırladığı için Nizel G'ye,
- Techolay için mükemmel bir konsept logo hazırladığı için DijitalFikir'e,
- İşletim sistemi kategori ikonlarında yardım ettiği için Vavien.'e,
- Eklentiyi optimize etmekte ve pop-up'ı geliştirmekte büyük katkısı olan Yonga'ya sonsuz teşekkürlerimi sunarım.

Kısacası eklentimi destekleyen ve kullanan herkese sonsuz teşekkürler! <3
