const languages = {
English: ["technology","future","learning","internet","computer","science","education","people","development","system","design","keyboard","practice","performance","speed","accuracy","challenge","software","hardware","communication","network"],
Nepali: ["नेपाल","प्रविधि","भविष्य","सिकाइ","कम्प्युटर","शिक्षा","मानिस","विकास","प्रणाली","डिजिटल"],
Hindi: ["तकनीक","भविष्य","सीखना","कंप्यूटर","शिक्षा","लोग","विकास","प्रणाली","डिजिटल"],
Spanish: ["tecnología","futuro","aprendizaje","internet","computadora","ciencia","educación","personas","desarrollo","sistema"],
French: ["technologie","avenir","apprentissage","internet","ordinateur","science","éducation","personnes","développement","système"],
Chinese: ["技术","未来","学习","互联网","计算机","科学","教育","人","发展","系统"],
Arabic: ["تكنولوجيا","مستقبل","تعلم","انترنت","حاسوب","علم","تعليم","ناس","تطوير","نظام"],
Japanese: ["技術","未来","学習","インターネット","コンピュータ","科学","教育","人々","開発","システム"]
};

let currentLanguage = "English";
function setLanguage(lang){ currentLanguage = lang; }