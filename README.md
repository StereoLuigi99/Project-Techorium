# Project Techorium
Techolay Sosyal deneyiminizi iyileştirmek için yapılan Project Techorium, birkaç ekleme ile beraber daha güzel bir deneyim vermek amacındadır.
Aslı sadece OS kategori ikonlarını değiştirme amacı olan Project TechnOSpat'tan başlayıp daha gelişmiş olan Project Quettapat'ın Techolay Sosyal'e sıçramasıdır. Her ikisini de tek saniyede nakavt eden, gelişmiş bir eklentidir.

Şu anki Chrome Web Mağazası sürümü güncel. 1.60.0 sürümü en güncel sürümdür.

[![Foo](https://github.com/user-attachments/assets/9e72da57-2ed9-47d2-b06b-c82a75bfde6e)](https://chromewebstore.google.com/detail/project-techorium/ndlgcleajbcbklofcefeghigioafcjhb?hl=tr)

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

## Yükleme Aşamaları
### Chromium (Chrome, Edge, Opera, Brave vb.)
- ZIP dosyalarını klasöre çıkartın.
- Tarayıcının eklentiler bölümüne girin.
- Geliştirici modunu açın ve paketlenmemiş eklenti yükleme tuşuna basın.
- Eklentinin çıkartıldığı klasörü seçin.

## GIF Özelliği Nasıl Açılır?
Bir gün Recep Baltaş veya herhangi bir yönetici GIF özelliğini devre dışı bıraktı diyelim, GIF özelliğini eklentiden nasıl geri açacaksınız?
Bunun için Chrome Web Mağazası'ndan kurduysanız onu kaldırıp geleneksel yolla kurmanız lazım.
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
