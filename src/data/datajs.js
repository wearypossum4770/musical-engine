let users = [
  { image: "Ep343KeigoCharaPic2.png", username: "Keigo Asano" },
  { image: "Ep229MizuhoCharaPic.png", username: "Mizuho Asano" },
  { image: "Ep343TatsukiCharaPic2.png", username: "Tatsuki Arisawa" },
  { image: "Ep249OscarCharaPic.png", username: "Oscar Joaquín de la Rosa" },
  { image: "Ep261KyokoCharaPic.png", username: "Kyōko Haida" },
  { image: "Ep344JintaCharaPic2.png", username: "Jinta Hanakari" },
  { image: "Ep314HarukoCharaPic2.png", username: "Haruko" },
  { image: "Ep7HashigamaCharaPic.png", username: "Hashigami" },
  { image: "Ep214ChizuruCharaPic.png", username: "Chizuru Honshō" },
  { image: "Ep4HarutokiCharaPic2.png", username: "Harutoki Ide" },
  { image: "Ep133ShinjiCharaPic.png", username: "Shinji Iijima" },
  { image: "Ep7InoCharaPic.png", username: "Ino" },
  { image: "Ep347OrihimeCharaPic2.png", username: "Orihime Inoue" },
  { image: "Ep67KagineCharaPic.png", username: "Kagine" },
  { image: "Ep7KanedaCharaPic.png", username: "Kaneda" },
  { image: "Ep50DonCharaPic.png", username: "Don Kanonji" },
  { image: "Ep343MizuiroCharaPic2.png", username: "Mizuiro Kojima" },
  { image: "Ep6KuneidaCharaPic.png", username: "Ryō Kunieda" },
  { image: "Ep366IchigoCharaPic.png", username: "Ichigo Kurosaki" },
  { image: "Ep347KarinCharaPic2.png", username: "Karin Kurosaki" },
  { image: "Ep345YuzuCharaPic2.png", username: "Yuzu Kurosaki" },
  { image: "Ep135MiyukiCharaPic2.png", username: "Miyuki" },
  { image: "Ep3MahanaCharaPic.png", username: "Mahana Natsui" },
  { image: "Ep64MisatoCharaPic.png", username: "Misato Ochi" },
  { image: "Ep7MichiruCharaPic2.png", username: "Michiru Ogawa" },
  { image: "Ep227ŌshimaCharaPic.png", username: "Reiichi Ōshima" },
  { image: "Ep12GitanoCharaPic.png", username: "Gitano Shigeo" },
  { image: "Ep227SorimachiCharaPic.png", username: "Sorimachi" },
  { image: "Ep261MaiCharaPic.png", username: "Mai Suzuki" },
  { image: "Ep347JackieCharaPic2.png", username: "Jackie Tristan" },
  { image: "Ep344UruruCharaPic2.png", username: "Ururu Tsumugiya" },
  { image: "Ep344IkumiCharaPic2.png", username: "Ikumi Unagiya" },
  { image: "Ep344KaoruCharaPic2.png", username: "Kaoru Unagiya" },
  { image: "Ep344YokochiniCharaPic2.png", username: "Yokochini" },

  { image: "Ep352RirukaCharaPic.png", username: "Riruka Dokugamine" },
  { image: "Ep344KugoCharaPic.png", username: "Kūgo Ginjō" },
  { image: "Ep351GirikoCharaPic.png", username: "Giriko Kutsuzawa" },
  { image: "Ep351SadoCharaPic2.png", username: "Yasutora Sado" },
  { image: "Ep349MoeCharaPic.png", username: "Moe Shishigawara" },
  { image: "Ep350TsukishimaCharaPic.png", username: "Shūkurō Tsukishima" },
  { image: "Ep354YukioCharaPic2.png", username: "Yukio Hans Vorarlberna" },
  { image: "CFYOWAuraCharaPic.png", username: "Aura Michibane" },
];

let profile = {
    "model": "users.profile",
    "pk": 29,
        "user": 29,
        "image": "default.webp",
        "mobile_number": null,
        "internal_notes": "",
        "addresses": []

}

let profiles = users.map((_,index) => ({
    "model": "users.profile",
    "pk": index+1,
    "user": index+1,
    "image": "default.webp",
    "mobile_number": null,
    "internal_notes": "",
    "addresses": []

}))