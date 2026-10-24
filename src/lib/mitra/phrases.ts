import type { Lang } from "./languages";

export type PhraseKey =
  | "chooseTitle"
  | "chooseHint"
  | "languageBtn"
  | "about"
  | "aboutLead"
  | "yourName"
  | "birth"
  | "who"
  | "roleSenior"
  | "roleParent"
  | "roleStudent"
  | "savedHere"
  | "years"
  | "weatherWait"
  | "weatherDenied"
  | "weatherFail"
  | "weatherLine"
  | "skyClear"
  | "skyPart"
  | "skyCloud"
  | "skyFog"
  | "skyRain"
  | "skySnow"
  | "skyStorm"
  | "weatherBtn"
  | "weatherSub"
  | "switched";

export type MoreKey =
  | "personaStudent"
  | "personaParent"
  | "personaSenior"
  | "personaSeniorPlain"
  | "usingProfile"
  | "easierTitle"
  | "easierBody"
  | "pitchTitle"
  | "pitchBody"
  | "costTitle"
  | "costBody"
  | "hearYou"
  | "needTime"
  | "setRemind";

const phrases: Record<Lang, Record<PhraseKey, string>> = {
  en: {
    chooseTitle: "Choose your language",
    chooseHint: "Tap one. The words change at once, and I speak that language.",
    languageBtn: "Language",
    about: "About you",
    aboutLead: "This stays on this phone. ARIA uses it when she greets you.",
    yourName: "Your name",
    birth: "Date of birth",
    who: "Who is using ARIA?",
    roleSenior: "Older person",
    roleParent: "Parent",
    roleStudent: "Student",
    savedHere: "Saved on this phone.",
    years: "{n} years old",
    weatherWait: "Please allow location. I am checking the weather near you.",
    weatherDenied: "Location is off. Allow location for ARIA in the phone settings, then ask again.",
    weatherFail: "I could not get the weather just now. Please try again in a moment.",
    weatherLine: "Near you it is {temp} degrees. {sky}.",
    skyClear: "The sky is clear",
    skyPart: "It is partly cloudy",
    skyCloud: "It is cloudy",
    skyFog: "It is foggy",
    skyRain: "It is raining",
    skySnow: "It is snowing",
    skyStorm: "There is a storm",
    weatherBtn: "Weather",
    weatherSub: "Near you, with location",
    switched: "I will speak English with you.",
  },
  hi: {
    chooseTitle: "अपनी भाषा चुनें",
    chooseHint: "एक भाषा दबाएँ। शब्द तुरंत बदलेंगे, और मैं उसी भाषा में बोलूँगा।",
    languageBtn: "भाषा",
    about: "आपके बारे में",
    aboutLead: "यह इसी फ़ोन पर रहेगा। आरिया आपका नाम लेकर बात करेगी।",
    yourName: "आपका नाम",
    birth: "जन्म की तारीख",
    who: "ARIA कौन इस्तेमाल कर रहा है?",
    roleSenior: "बुज़ुर्ग",
    roleParent: "माता-पिता",
    roleStudent: "विद्यार्थी",
    savedHere: "इस फ़ोन पर सेव हो गया।",
    years: "{n} साल",
    weatherWait: "जगह की अनुमति दें। मैं आपके पास का मौसम देख रहा हूँ।",
    weatherDenied: "जगह बंद है। फ़ोन की सेटिंग में ARIA के लिए जगह चालू करें, फिर फिर पूछें।",
    weatherFail: "मौसम अभी नहीं मिला। थोड़ी देर बाद फिर पूछें।",
    weatherLine: "आपके आस-पास {temp} डिग्री है। {sky}।",
    skyClear: "आसमान साफ है",
    skyPart: "हल्के बादल हैं",
    skyCloud: "बादल छाए हैं",
    skyFog: "कोहरा है",
    skyRain: "बारिश हो रही है",
    skySnow: "बर्फ गिर रही है",
    skyStorm: "आँधी है",
    weatherBtn: "मौसम",
    weatherSub: "आपके पास, जगह की अनुमति से",
    switched: "अब मैं आपसे हिन्दी में बोलूँगा।",
  },
  bn: {
    chooseTitle: "আপনার ভাষা বেছে নিন",
    chooseHint: "একটি ভাষায় চাপুন। লেখা সঙ্গে সঙ্গে বদলাবে, আর আমি সেই ভাষায় বলব।",
    languageBtn: "ভাষা",
    about: "আপনার পরিচয়",
    aboutLead: "এটা এই ফোনেই থাকবে। ARIA আপনার নাম ধরে কথা বলবে।",
    yourName: "আপনার নাম",
    birth: "জন্মতারিখ",
    who: "ARIA কে ব্যবহার করছেন?",
    roleSenior: "বয়স্ক মানুষ",
    roleParent: "বাবা-মা",
    roleStudent: "ছাত্রছাত্রী",
    savedHere: "এই ফোনে সেভ হয়েছে।",
    years: "{n} বছর",
    weatherWait: "লোকেশনের অনুমতি দিন। আমি আপনার কাছের আবহাওয়া দেখছি।",
    weatherDenied: "লোকেশন বন্ধ। ফোনের সেটিংসে ARIA-র জন্য লোকেশন চালু করুন, তারপর আবার জিজ্ঞাসা করুন।",
    weatherFail: "এখন আবহাওয়া পাইনি। একটু পরে আবার জিজ্ঞাসা করুন।",
    weatherLine: "আপনার কাছে {temp} ডিগ্রি। {sky}।",
    skyClear: "আকাশ পরিষ্কার",
    skyPart: "হালকা মেঘ আছে",
    skyCloud: "মেঘলা",
    skyFog: "কুয়াশা আছে",
    skyRain: "বৃষ্টি হচ্ছে",
    skySnow: "তুষার পড়ছে",
    skyStorm: "ঝড় হচ্ছে",
    weatherBtn: "আবহাওয়া",
    weatherSub: "আপনার কাছে, লোকেশন দিয়ে",
    switched: "এখন আমি বাংলায় বলব।",
  },
  te: {
    chooseTitle: "మీ భాషను ఎంచుకోండి",
    chooseHint: "ఒక భాషను నొక్కండి. మాటలు వెంటనే మారతాయి, నేను ఆ భాషలో మాట్లాడతాను.",
    languageBtn: "భాష",
    about: "మీ వివరాలు",
    aboutLead: "ఇది ఈ ఫోన్‌లోనే ఉంటుంది. ARIA మీ పేరుతో మాట్లాడుతుంది.",
    yourName: "మీ పేరు",
    birth: "పుట్టిన తేదీ",
    who: "ARIA ను ఎవరు వాడుతున్నారు?",
    roleSenior: "పెద్దవారు",
    roleParent: "తల్లిదండ్రులు",
    roleStudent: "విద్యార్థి",
    savedHere: "ఈ ఫోన్‌లో సేవ్ అయింది.",
    years: "{n} ఏళ్లు",
    weatherWait: "స్థలానికి అనుమతి ఇవ్వండి. మీ దగ్గర వాతావరణం చూస్తున్నాను.",
    weatherDenied: "స్థలం ఆఫ్‌లో ఉంది. ఫోన్ సెట్టింగ్స్‌లో ARIA కి స్థలం ఆన్ చేసి మళ్లీ అడగండి.",
    weatherFail: "వాతావరణం ఇప్పుడు రాలేదు. కాసేపు తర్వాత మళ్లీ అడగండి.",
    weatherLine: "మీ దగ్గర {temp} డిగ్రీలు. {sky}.",
    skyClear: "ఆకాశం స్పష్టంగా ఉంది",
    skyPart: "కొంచెం మేఘాలు ఉన్నాయి",
    skyCloud: "మేఘావృతంగా ఉంది",
    skyFog: "పొగమంచు ఉంది",
    skyRain: "వర్షం పడుతోంది",
    skySnow: "మంచు పడుతోంది",
    skyStorm: "తుఫాను ఉంది",
    weatherBtn: "వాతావరణం",
    weatherSub: "మీ దగ్గర, స్థల అనుమతితో",
    switched: "ఇప్పుడు నేను తెలుగులో మాట్లాడతాను.",
  },
  mr: {
    chooseTitle: "तुमची भाषा निवडा",
    chooseHint: "एक भाषा दाबा. शब्द लगेच बदलतील, आणि मी त्या भाषेत बोलेन.",
    languageBtn: "भाषा",
    about: "तुमची माहिती",
    aboutLead: "हे या फोनवरच राहील. ARIA तुमचे नाव घेऊन बोलेल.",
    yourName: "तुमचे नाव",
    birth: "जन्मतारीख",
    who: "ARIA कोण वापरत आहे?",
    roleSenior: "ज्येष्ठ व्यक्ती",
    roleParent: "पालक",
    roleStudent: "विद्यार्थी",
    savedHere: "या फोनवर जतन झाले.",
    years: "{n} वर्षे",
    weatherWait: "ठिकाणाची परवानगी द्या. मी तुमच्या जवळचे हवामान पाहत आहे.",
    weatherDenied: "ठिकाण बंद आहे. फोन सेटिंगमध्ये ARIA साठी ठिकाण चालू करा, मग पुन्हा विचारा.",
    weatherFail: "हवामान आत्ता मिळाले नाही. थोड्या वेळाने पुन्हा विचारा.",
    weatherLine: "तुमच्या जवळ {temp} अंश आहे. {sky}.",
    skyClear: "आकाश स्वच्छ आहे",
    skyPart: "हलके ढग आहेत",
    skyCloud: "ढगाळ आहे",
    skyFog: "धुके आहे",
    skyRain: "पाऊस पडत आहे",
    skySnow: "बर्फ पडत आहे",
    skyStorm: "वादळ आहे",
    weatherBtn: "हवामान",
    weatherSub: "तुमच्या जवळ, ठिकाणाने",
    switched: "आता मी मराठीत बोलेन.",
  },
  ta: {
    chooseTitle: "உங்கள் மொழியைத் தேர்ந்தெடுங்கள்",
    chooseHint: "ஒரு மொழியைத் தொடுங்கள். சொற்கள் உடனே மாறும். நான் அந்த மொழியில் பேசுவேன்.",
    languageBtn: "மொழி",
    about: "உங்களைப் பற்றி",
    aboutLead: "இது இந்த தொலைபேசியிலேயே இருக்கும். ARIA உங்கள் பெயரைச் சொல்லிப் பேசும்.",
    yourName: "உங்கள் பெயர்",
    birth: "பிறந்த தேதி",
    who: "ARIA-ஐ யார் பயன்படுத்துகிறீர்கள்?",
    roleSenior: "மூத்தவர்",
    roleParent: "பெற்றோர்",
    roleStudent: "மாணவர்",
    savedHere: "இந்த தொலைபேசியில் சேமித்தது.",
    years: "{n} வயது",
    weatherWait: "இட அனுமதி கொடுங்கள். உங்கள் அருகிலுள்ள வானிலையைப் பார்க்கிறேன்.",
    weatherDenied: "இடம் அணைந்துள்ளது. தொலைபேசி அமைப்பில் ARIA-க்கு இடத்தை இயக்கி மீண்டும் கேளுங்கள்.",
    weatherFail: "வானிலை இப்போது கிடைக்கவில்லை. சற்று நேரம் கழித்து மீண்டும் கேளுங்கள்.",
    weatherLine: "உங்கள் அருகில் {temp} டிகிரி. {sky}.",
    skyClear: "வானம் தெளிவாக உள்ளது",
    skyPart: "சிறிது மேகம் உள்ளது",
    skyCloud: "மேகமூட்டமாக உள்ளது",
    skyFog: "மூடுபனி உள்ளது",
    skyRain: "மழை பெய்கிறது",
    skySnow: "பனி பெய்கிறது",
    skyStorm: "புயல் உள்ளது",
    weatherBtn: "வானிலை",
    weatherSub: "உங்கள் அருகில், இட அனுமதியுடன்",
    switched: "இப்போது நான் தமிழில் பேசுவேன்.",
  },
  ur: {
    chooseTitle: "اپنی زبان چنیں",
    chooseHint: "ایک زبان دبائیں۔ الفاظ فوراً بدلیں گے، اور میں اسی زبان میں بولوں گی۔",
    languageBtn: "زبان",
    about: "آپ کے بارے میں",
    aboutLead: "یہ اسی فون پر رہے گا۔ ARIA آپ کا نام لے کر بات کرے گی۔",
    yourName: "آپ کا نام",
    birth: "تاریخ پیدائش",
    who: "ARIA کون استعمال کر رہا ہے؟",
    roleSenior: "بزرگ",
    roleParent: "والدین",
    roleStudent: "طالب علم",
    savedHere: "اس فون پر محفوظ ہو گیا۔",
    years: "{n} سال",
    weatherWait: "جگہ کی اجازت دیں۔ میں آپ کے پاس کا موسم دیکھ رہی ہوں۔",
    weatherDenied: "جگہ بند ہے۔ فون کی سیٹنگ میں ARIA کے لیے جگہ کھولیں، پھر دوبارہ پوچھیں۔",
    weatherFail: "موسم ابھی نہیں ملا۔ تھوڑی دیر بعد پھر پوچھیں۔",
    weatherLine: "آپ کے پاس {temp} ڈگری ہے۔ {sky}۔",
    skyClear: "آسمان صاف ہے",
    skyPart: "ہلکے بادل ہیں",
    skyCloud: "بادل ہیں",
    skyFog: "دھند ہے",
    skyRain: "بارش ہو رہی ہے",
    skySnow: "برف پڑ رہی ہے",
    skyStorm: "طوفان ہے",
    weatherBtn: "موسم",
    weatherSub: "آپ کے پاس، جگہ کی اجازت سے",
    switched: "اب میں اردو میں بولوں گی۔",
  },
  gu: {
    chooseTitle: "તમારી ભાષા પસંદ કરો",
    chooseHint: "એક ભાષા દબાવો. શબ્દો તરત બદલાશે, અને હું એ ભાષામાં બોલીશ.",
    languageBtn: "ભાષા",
    about: "તમારી વિગત",
    aboutLead: "આ આ ફોન પર જ રહેશે. ARIA તમારું નામ લઈને વાત કરશે.",
    yourName: "તમારું નામ",
    birth: "જન્મ તારીખ",
    who: "ARIA કોણ વાપરે છે?",
    roleSenior: "વડીલ",
    roleParent: "માતા-પિતા",
    roleStudent: "વિદ્યાર્થી",
    savedHere: "આ ફોન પર સાચવાયું.",
    years: "{n} વર્ષ",
    weatherWait: "સ્થાનની પરવાનગી આપો. હું તમારી આસપાસનું હવામાન જોઈ રહી છું.",
    weatherDenied: "સ્થાન બંધ છે. ફોન સેટિંગમાં ARIA માટે સ્થાન ચાલુ કરો, પછી ફરી પૂછો.",
    weatherFail: "હવામાન અત્યારે મળ્યું નહીં. થોડી વારે ફરી પૂછો.",
    weatherLine: "તમારી આસપાસ {temp} ડિગ્રી છે. {sky}.",
    skyClear: "આકાશ સાફ છે",
    skyPart: "હળવા વાદળ છે",
    skyCloud: "વાદળછાયું છે",
    skyFog: "ધુમ્મસ છે",
    skyRain: "વરસાદ પડી રહ્યો છે",
    skySnow: "બરફ પડી રહ્યો છે",
    skyStorm: "તોફાન છે",
    weatherBtn: "હવામાન",
    weatherSub: "તમારી પાસે, સ્થાનથી",
    switched: "હવે હું ગુજરાતીમાં બોલીશ.",
  },
  kn: {
    chooseTitle: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    chooseHint: "ಒಂದು ಭಾಷೆಯನ್ನು ಒತ್ತಿ. ಪದಗಳು ತಕ್ಷಣ ಬದಲಾಗುತ್ತವೆ, ನಾನು ಆ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡುತ್ತೇನೆ.",
    languageBtn: "ಭಾಷೆ",
    about: "ನಿಮ್ಮ ವಿವರ",
    aboutLead: "ಇದು ಈ ಫೋನ್‌ನಲ್ಲೇ ಇರುತ್ತದೆ. ARIA ನಿಮ್ಮ ಹೆಸರಿನಿಂದ ಮಾತನಾಡುತ್ತದೆ.",
    yourName: "ನಿಮ್ಮ ಹೆಸರು",
    birth: "ಹುಟ್ಟಿದ ದಿನಾಂಕ",
    who: "ARIA ಅನ್ನು ಯಾರು ಬಳಸುತ್ತಿದ್ದಾರೆ?",
    roleSenior: "ಹಿರಿಯರು",
    roleParent: "ಪೋಷಕರು",
    roleStudent: "ವಿದ್ಯಾರ್ಥಿ",
    savedHere: "ಈ ಫೋನ್‌ನಲ್ಲಿ ಉಳಿಸಲಾಗಿದೆ.",
    years: "{n} ವರ್ಷ",
    weatherWait: "ಸ್ಥಳದ ಅನುಮತಿ ನೀಡಿ. ನಿಮ್ಮ ಹತ್ತಿರದ ಹವಾಮಾನ ನೋಡುತ್ತಿದ್ದೇನೆ.",
    weatherDenied: "ಸ್ಥಳ ಆಫ್ ಆಗಿದೆ. ಫೋನ್ ಸೆಟ್ಟಿಂಗ್‌ನಲ್ಲಿ ARIA ಗೆ ಸ್ಥಳ ಆನ್ ಮಾಡಿ, ಮತ್ತೆ ಕೇಳಿ.",
    weatherFail: "ಹವಾಮಾನ ಈಗ ಸಿಗಲಿಲ್ಲ. ಸ್ವಲ್ಪ ಹೊತ್ತಿನ ನಂತರ ಮತ್ತೆ ಕೇಳಿ.",
    weatherLine: "ನಿಮ್ಮ ಹತ್ತಿರ {temp} ಡಿಗ್ರಿ. {sky}.",
    skyClear: "ಆಕಾಶ ತೆಳ್ಳಗಿದೆ",
    skyPart: "ಸ್ವಲ್ಪ ಮೋಡವಿದೆ",
    skyCloud: "ಮೋಡ ಕವಿದಿದೆ",
    skyFog: "ಮಂಜು ಇದೆ",
    skyRain: "ಮಳೆ ಬರುತ್ತಿದೆ",
    skySnow: "ಹಿಮ ಬೀಳುತ್ತಿದೆ",
    skyStorm: "ಬಿರುಗಾಳಿ ಇದೆ",
    weatherBtn: "ಹವಾಮಾನ",
    weatherSub: "ನಿಮ್ಮ ಹತ್ತಿರ, ಸ್ಥಳದಿಂದ",
    switched: "ಈಗ ನಾನು ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡುತ್ತೇನೆ.",
  },
  or: {
    chooseTitle: "ଆପଣଙ୍କ ଭାଷା ବାଛନ୍ତୁ",
    chooseHint: "ଗୋଟିଏ ଭାଷା ଦବାନ୍ତୁ। ଶବ୍ଦ ତୁରନ୍ତ ବଦଳିବ, ଆଉ ମୁଁ ସେହି ଭାଷାରେ କହିବି।",
    languageBtn: "ଭାଷା",
    about: "ଆପଣଙ୍କ ବିଷୟରେ",
    aboutLead: "ଏହା ଏହି ଫୋନରେ ରହିବ। ARIA ଆପଣଙ୍କ ନାମ ଧରି କଥା ହେବ।",
    yourName: "ଆପଣଙ୍କ ନାମ",
    birth: "ଜନ୍ମ ତାରିଖ",
    who: "ARIA କିଏ ବ୍ୟବହାର କରୁଛନ୍ତି?",
    roleSenior: "ବୟସ୍କ",
    roleParent: "ପିତାମାତା",
    roleStudent: "ଛାତ୍ର",
    savedHere: "ଏହି ଫୋନରେ ସେଭ୍ ହେଲା।",
    years: "{n} ବର୍ଷ",
    weatherWait: "ସ୍ଥାନ ଅନୁମତି ଦିଅନ୍ତୁ। ମୁଁ ଆପଣଙ୍କ ପାଖର ପାଣିପାଗ ଦେଖୁଛି।",
    weatherDenied: "ସ୍ଥାନ ବନ୍ଦ ଅଛି। ଫୋନ ସେଟିଂରେ ARIA ପାଇଁ ସ୍ଥାନ ଖୋଲନ୍ତୁ, ପୁଣି ପଚାରନ୍ତୁ।",
    weatherFail: "ପାଣିପାଗ ଏବେ ମିଳିଲା ନାହିଁ। କିଛି ସମୟ ପରେ ପୁଣି ପଚାରନ୍ତୁ।",
    weatherLine: "ଆପଣଙ୍କ ପାଖରେ {temp} ଡିଗ୍ରୀ। {sky}।",
    skyClear: "ଆକାଶ ସଫା",
    skyPart: "ହାଲୁକା ମେଘ ଅଛି",
    skyCloud: "ମେଘୁଆ",
    skyFog: "କୁହୁଡ଼ି ଅଛି",
    skyRain: "ବର୍ଷା ହେଉଛି",
    skySnow: "ବରଫ ପଡ଼ୁଛି",
    skyStorm: "ଝଡ଼ ଅଛି",
    weatherBtn: "ପାଣିପାଗ",
    weatherSub: "ଆପଣଙ୍କ ପାଖରେ, ସ୍ଥାନ ସହ",
    switched: "ଏବେ ମୁଁ ଓଡ଼ିଆରେ କହିବି।",
  },
  ml: {
    chooseTitle: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക",
    chooseHint: "ഒരു ഭാഷ തൊടുക. വാക്കുകൾ ഉടൻ മാറും, ഞാൻ ആ ഭാഷയിൽ സംസാരിക്കും.",
    languageBtn: "ഭാഷ",
    about: "നിങ്ങളെക്കുറിച്ച്",
    aboutLead: "ഇത് ഈ ഫോണിലാണ് നിൽക്കുക. ARIA നിങ്ങളുടെ പേര് പറഞ്ഞ് സംസാരിക്കും.",
    yourName: "നിങ്ങളുടെ പേര്",
    birth: "ജനനത്തീയതി",
    who: "ARIA ആരാണ് ഉപയോഗിക്കുന്നത്?",
    roleSenior: "മുതിർന്ന വ്യക്തി",
    roleParent: "രക്ഷിതാവ്",
    roleStudent: "വിദ്യാർത്ഥി",
    savedHere: "ഈ ഫോണിൽ സേവ് ചെയ്തു.",
    years: "{n} വയസ്സ്",
    weatherWait: "സ്ഥലാനുമതി നൽകുക. നിങ്ങളുടെ അടുത്തുള്ള കാലാവസ്ഥ നോക്കുന്നു.",
    weatherDenied: "സ്ഥലം ഓഫ് ആണ്. ഫോൺ ക്രമീകരണത്തിൽ ARIA-യ്ക്ക് സ്ഥലം ഓണാക്കി വീണ്ടും ചോദിക്കുക.",
    weatherFail: "കാലാവസ്ഥ ഇപ്പോൾ കിട്ടിയില്ല. കുറച്ച് കഴിഞ്ഞ് വീണ്ടും ചോദിക്കുക.",
    weatherLine: "നിങ്ങളുടെ അടുത്ത് {temp} ഡിഗ്രി. {sky}.",
    skyClear: "ആകാശം തെളിഞ്ഞു",
    skyPart: "ചെറിയ മേഘമുണ്ട്",
    skyCloud: "മേഘാവൃതമാണ്",
    skyFog: "മൂടൽമഞ്ഞുണ്ട്",
    skyRain: "മഴ പെയ്യുന്നു",
    skySnow: "മഞ്ഞ് പെയ്യുന്നു",
    skyStorm: "കൊടുങ്കാറ്റുണ്ട്",
    weatherBtn: "കാലാവസ്ഥ",
    weatherSub: "നിങ്ങളുടെ അടുത്ത്, സ്ഥലത്തോടെ",
    switched: "ഇനി ഞാൻ മലയാളത്തിൽ സംസാരിക്കും.",
  },
  pa: {
    chooseTitle: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ",
    chooseHint: "ਇੱਕ ਭਾਸ਼ਾ ਦਬਾਓ। ਸ਼ਬਦ ਤੁਰੰਤ ਬਦਲਣਗੇ, ਅਤੇ ਮੈਂ ਉਸ ਭਾਸ਼ਾ ਵਿੱਚ ਬੋਲਾਂਗੀ।",
    languageBtn: "ਭਾਸ਼ਾ",
    about: "ਤੁਹਾਡੇ ਬਾਰੇ",
    aboutLead: "ਇਹ ਇਸੇ ਫ਼ੋਨ ਉੱਤੇ ਰਹੇਗਾ। ARIA ਤੁਹਾਡਾ ਨਾਮ ਲੈ ਕੇ ਗੱਲ ਕਰੇਗੀ।",
    yourName: "ਤੁਹਾਡਾ ਨਾਮ",
    birth: "ਜਨਮ ਤਾਰੀਖ",
    who: "ARIA ਕੌਣ ਵਰਤ ਰਿਹਾ ਹੈ?",
    roleSenior: "ਬਜ਼ੁਰਗ",
    roleParent: "ਮਾਪੇ",
    roleStudent: "ਵਿਦਿਆਰਥੀ",
    savedHere: "ਇਸ ਫ਼ੋਨ ਉੱਤੇ ਸੰਭਾਲ ਲਿਆ।",
    years: "{n} ਸਾਲ",
    weatherWait: "ਥਾਂ ਦੀ ਇਜਾਜ਼ਤ ਦਿਓ। ਮੈਂ ਤੁਹਾਡੇ ਨੇੜੇ ਦਾ ਮੌਸਮ ਵੇਖ ਰਹੀ ਹਾਂ।",
    weatherDenied: "ਥਾਂ ਬੰਦ ਹੈ। ਫ਼ੋਨ ਸੈਟਿੰਗ ਵਿੱਚ ARIA ਲਈ ਥਾਂ ਚਾਲੂ ਕਰੋ, ਫਿਰ ਦੁਬਾਰਾ ਪੁੱਛੋ।",
    weatherFail: "ਮੌਸਮ ਹੁਣੇ ਨਹੀਂ ਮਿਲਿਆ। ਥੋੜ੍ਹੀ ਦੇਰ ਬਾਅਦ ਫਿਰ ਪੁੱਛੋ।",
    weatherLine: "ਤੁਹਾਡੇ ਨੇੜੇ {temp} ਡਿਗਰੀ ਹੈ। {sky}।",
    skyClear: "ਆਸਮਾਨ ਸਾਫ਼ ਹੈ",
    skyPart: "ਹਲਕੇ ਬੱਦਲ ਹਨ",
    skyCloud: "ਬੱਦਲ ਛਾਏ ਹਨ",
    skyFog: "ਧੁੰਦ ਹੈ",
    skyRain: "ਮੀਂਹ ਪੈ ਰਿਹਾ ਹੈ",
    skySnow: "ਬਰਫ਼ ਪੈ ਰਹੀ ਹੈ",
    skyStorm: "ਤੂਫ਼ਾਨ ਹੈ",
    weatherBtn: "ਮੌਸਮ",
    weatherSub: "ਤੁਹਾਡੇ ਨੇੜੇ, ਥਾਂ ਨਾਲ",
    switched: "ਹੁਣ ਮੈਂ ਪੰਜਾਬੀ ਵਿੱਚ ਬੋਲਾਂਗੀ।",
  },
};

const more: Record<Lang, Record<MoreKey, string>> = {
  en: {
    personaStudent:
      "{name} is a student{age}. ARIA uses large buttons and slow speech in the language you chose. ARIA only reminds. ARIA never gives medical advice.",
    personaParent:
      "{name} is a parent{age}. This setup is for the family: tablet reminders, a careful call, and simple answers. ARIA never gives medical advice.",
    personaSenior:
      "{name} is {age}. Small phone text is hard on the eyes, and stiff fingers miss tiny buttons. They need tablet reminders, a careful call to family, and simple answers. They do not need medical advice from an app.",
    personaSeniorPlain:
      "{name} is an older person. Small phone text is hard on the eyes, and stiff fingers miss tiny buttons. They need tablet reminders, a careful call to family, and simple answers. They do not need medical advice from an app.",
    usingProfile: "This uses the name, date of birth, and role saved in About you.",
    easierTitle: "Why this is easier than a phone",
    easierBody:
      "You speak instead of typing or hunting through small menus. ARIA helps with medicine reminders, calling family, and simple questions. The words are large and the speech is slow.",
    pitchTitle: "For the family",
    pitchBody:
      "Help your loved ones use technology with their voice. They can get reminders, contact family, and ask everyday questions. ARIA is a simple voice assistant for older people.",
    costTitle: "What it costs to set up",
    costBody:
      "Open ARIA on a smartphone with internet. A family member adds contacts and tablet times once. The aim is to keep it affordable.",
    hearYou: "Yes, I can hear you. How can I help?",
    needTime: "What time should I remind you? Please say the time, like 8 in the morning.",
    setRemind: "I have set your medicine reminder for {time}.",
  },
  hi: {
    personaStudent:
      "{name} विद्यार्थी हैं{age}। ARIA बड़े बटन और धीमी आवाज़ इस्तेमाल करती है। ARIA सिर्फ याद दिलाती है। इलाज की सलाह नहीं देती।",
    personaParent:
      "{name} माता-पिता हैं{age}। यह सेटअप परिवार के लिए है: दवा की याद, सावधानी से कॉल, और आसान जवाब। इलाज की सलाह नहीं।",
    personaSenior:
      "{name} {age} के हैं। फोन का छोटा अक्षर आँखों पर भारी है। उन्हें दवा की याद, परिवार को कॉल, और आसान जवाब चाहिए। ऐप से इलाज की सलाह नहीं।",
    personaSeniorPlain:
      "{name} बुज़ुर्ग हैं। फोन का छोटा अक्षर आँखों पर भारी है। उन्हें दवा की याद, परिवार को कॉल, और आसान जवाब चाहिए। ऐप से इलाज की सलाह नहीं।",
    usingProfile: "यह आपके बारे में में सेव नाम, जन्म तारीख और भूमिका इस्तेमाल करता है।",
    easierTitle: "यह फ़ोन से आसान क्यों है",
    easierBody:
      "छोटे मेनू टाइप करने के बजाय बोलिए। ARIA दवा, परिवार को कॉल, और आसान सवाल में मदद करती है। अक्षर बड़े हैं और आवाज़ धीमी है।",
    pitchTitle: "परिवार के लिए",
    pitchBody:
      "अपने लोगों को आवाज़ से तकनीक इस्तेमाल करने में मदद कीजिए। याद, परिवार से बात, और रोज़ के सवाल। ARIA बुज़ुर्गों के लिए सरल सहायक है।",
    costTitle: "सेटअप में क्या लगता है",
    costBody:
      "इंटरनेट वाले फ़ोन पर ARIA खोलिए। परिवार एक बार संपर्क और दवा का समय जोड़ता है। इसे सस्ता रखना मकसद है।",
    hearYou: "हाँ, मैं आपको सुन रही हूँ। मैं कैसे मदद करूँ?",
    needTime: "किस समय याद दिलाऊँ? समय बोलिए, जैसे सुबह 8 बजे।",
    setRemind: "मैंने आपकी दवा की याद {time} के लिए रख दी है।",
  },
  bn: {
    personaStudent:
      "{name} একজন ছাত্রছাত্রী{age}। ARIA বড় বোতাম ও ধীর কথা ব্যবহার করে। ARIA শুধু মনে করিয়ে দেয়। চিকিৎসার পরামর্শ দেয় না।",
    personaParent:
      "{name} বাবা-মা{age}। এই সেটআপ পরিবারের জন্য: বড়ির কথা, সাবধানে কল, সহজ উত্তর। চিকিৎসার পরামর্শ নয়।",
    personaSenior:
      "{name} {age}। ফোনের ছোট অক্ষর চোখে কষ্ট। দরকার বড়ির কথা, পরিবারকে কল, সহজ উত্তর। অ্যাপ থেকে চিকিৎসার পরামর্শ নয়।",
    personaSeniorPlain:
      "{name} একজন বয়স্ক মানুষ। ফোনের ছোট অক্ষর চোখে কষ্ট। দরকার বড়ির কথা, পরিবারকে কল, সহজ উত্তর।",
    usingProfile: "এটা আপনার পরিচয়ে সেভ করা নাম, জন্মতারিখ ও ভূমিকা ব্যবহার করে।",
    easierTitle: "ফোনের চেয়ে সহজ কেন",
    easierBody: "ছোট মেনুতে টাইপ না করে বলুন। ওষুধ, পরিবারকে কল, সহজ প্রশ্ন। অক্ষর বড়, কথা ধীর।",
    pitchTitle: "পরিবারের জন্য",
    pitchBody: "প্রিয়জনকে কণ্ঠে প্রযুক্তি ব্যবহার করতে সাহায্য করুন। স্মরণ, পরিবার, প্রতিদিনের প্রশ্ন। বয়স্কদের জন্য সহজ সহায়ক।",
    costTitle: "সেটআপে কী লাগে",
    costBody: "ইন্টারনেটযুক্ত ফোনে ARIA খুলুন। পরিবার একবার পরিচিতি ও বড়ির সময় যোগ করে। খরচ সাশ্রয়ী রাখাই লক্ষ্য।",
    hearYou: "হ্যাঁ, আমি শুনতে পাচ্ছি। কীভাবে সাহায্য করব?",
    needTime: "কখন মনে করিয়ে দেব? সময় বলুন, যেমন সকাল ৮টা।",
    setRemind: "আমি আপনার ওষুধের কথা {time}-এর জন্য রেখেছি।",
  },
  te: {
    personaStudent:
      "{name} విద్యార్థి{age}. ARIA పెద్ద బటన్లు, నెమ్మది మాట వాడుతుంది. గుర్తు మాత్రమే చేస్తుంది. వైద్య సలహా ఇవ్వదు.",
    personaParent:
      "{name} తల్లిదండ్రులు{age}. ఇది కుటుంబం కోసం: మాత్ర గుర్తు, జాగ్రత్తగా కాల్, సులభ సమాధానాలు.",
    personaSenior:
      "{name} {age}. చిన్న అక్షరాలు కళ్లకు కష్టం. మాత్ర గుర్తు, కుటుంబ కాల్, సులభ సమాధానాలు కావాలి. యాప్ నుంచి వైద్య సలహా వద్దు.",
    personaSeniorPlain:
      "{name} పెద్దవారు. చిన్న అక్షరాలు కళ్లకు కష్టం. మాత్ర గుర్తు, కుటుంబ కాల్, సులభ సమాధానాలు కావాలి.",
    usingProfile: "మీ వివరాల్లో సేవ్ చేసిన పేరు, పుట్టిన తేదీ, పాత్రను ఇది వాడుతుంది.",
    easierTitle: "ఫోన్ కంటే సులభం ఎందుకు",
    easierBody: "చిన్న మెనూలు వెతకకుండా మాట్లాడండి. మాత్రలు, కుటుంబం, సులభ ప్రశ్నలు. అక్షరాలు పెద్దవి, మాట నెమ్మది.",
    pitchTitle: "కుటుంబం కోసం",
    pitchBody: "మీ వారు కంఠంతో సాంకేతికత వాడేలా సహాయపడండి. గుర్తు, కుటుంబం, రోజువారీ ప్రశ్నలు.",
    costTitle: "సెటప్‌కు ఏమి కావాలి",
    costBody: "ఇంటర్నెట్ ఉన్న ఫోన్‌లో ARIA తెరవండి. కుటుంబం ఒకసారి పరిచయాలు, మాత్ర సమయం పెడతారు. ఖర్చు తక్కువగా ఉంచడమే లక్ష్యం.",
    hearYou: "అవును, నేను వింటున్నాను. ఎలా సహాయం చేయాలి?",
    needTime: "ఎప్పుడు గుర్తు చేయాలి? సమయం చెప్పండి, ఉదాహరణకు ఉదయం 8.",
    setRemind: "మీ మందు గుర్తు {time}కి పెట్టాను.",
  },
  mr: {
    personaStudent:
      "{name} विद्यार्थी आहेत{age}. ARIA मोठी बटणे आणि हळू आवाज वापरते. फक्त आठवण देते. वैद्यकीय सल्ला देत नाही.",
    personaParent:
      "{name} पालक आहेत{age}. हा सेटअप कुटुंबासाठी आहे: गोळ्यांची आठवण, काळजीपूर्वक कॉल, सोपी उत्तरे.",
    personaSenior:
      "{name} {age} आहेत. फोनचे छोटे अक्षर डोळ्यांना जड आहे. गोळ्यांची आठवण, कुटुंब कॉल आणि सोपी उत्तरे हवी. अॅपकडून वैद्यकीय सल्ला नको.",
    personaSeniorPlain:
      "{name} ज्येष्ठ व्यक्ती आहेत. फोनचे छोटे अक्षर डोळ्यांना जड आहे. गोळ्यांची आठवण, कुटुंब कॉल आणि सोपी उत्तरे हवी.",
    usingProfile: "तुमची माहिती मध्ये जतन केलेले नाव, जन्मतारीख आणि भूमिका येथे वापरली जाते.",
    easierTitle: "फोनपेक्षा सोपे का",
    easierBody: "छोटे मेनू टाइप न करता बोला. गोळ्या, कुटुंब कॉल, सोपे प्रश्न. अक्षरे मोठी, आवाज हळू.",
    pitchTitle: "कुटुंबासाठी",
    pitchBody: "आपल्या माणसांना आवाजाने तंत्रज्ञान वापरण्यास मदत करा. आठवण, कुटुंब, रोजचे प्रश्न.",
    costTitle: "सेटअपला काय लागते",
    costBody: "इंटरनेट असलेल्या फोनवर ARIA उघडा. कुटुंब एकदा संपर्क आणि गोळीची वेळ टाकते. परवडणारे ठेवणे हे ध्येय आहे.",
    hearYou: "हो, मी ऐकते आहे. मी कशी मदत करू?",
    needTime: "कोणत्या वेळी आठवण द्यावी? वेळ सांगा, जसे सकाळी ८.",
    setRemind: "मी तुमची गोळीची आठवण {time} साठी ठेवली आहे.",
  },
  ta: {
    personaStudent:
      "{name} ஒரு மாணவர்{age}. ARIA பெரிய பொத்தான்களும் மெதுவான பேச்சும் பயன்படுத்தும். நினைவூட்டல் மட்டும். மருத்துவ ஆலோசனை இல்லை.",
    personaParent:
      "{name} பெற்றோர்{age}. இது குடும்பத்திற்கான அமைப்பு: மாத்திரை நினைவூட்டல், கவனமாக அழைப்பு, எளிய பதில்.",
    personaSenior:
      "{name} {age}. சிறிய எழுத்து கண்களுக்குக் கடினம். மாத்திரை நினைவூட்டல், குடும்ப அழைப்பு, எளிய பதில் வேண்டும். செயலியிலிருந்து மருத்துவ ஆலோசனை வேண்டாம்.",
    personaSeniorPlain:
      "{name} ஒரு மூத்தவர். சிறிய எழுத்து கண்களுக்குக் கடினம். மாத்திரை நினைவூட்டல், குடும்ப அழைப்பு, எளிய பதில் வேண்டும்.",
    usingProfile: "உங்களைப் பற்றி சேமித்த பெயர், பிறந்த தேதி, பொறுப்பை இது பயன்படுத்தும்.",
    easierTitle: "தொலைபேசியை விட எளிது ஏன்",
    easierBody: "சிறிய பட்டிகளில் தட்டாமல் பேசுங்கள். மாத்திரை, குடும்ப அழைப்பு, எளிய கேள்வி. எழுத்து பெரியது, பேச்சு மெதுவு.",
    pitchTitle: "குடும்பத்திற்கு",
    pitchBody: "உங்கள் உறவினர் குரலால் தொழில்நுட்பத்தைப் பயன்படுத்த உதவுங்கள். நினைவூட்டல், குடும்பம், தினசரி கேள்வி.",
    costTitle: "அமைக்க என்ன வேண்டும்",
    costBody: "இணையம் உள்ள தொலைபேசியில் ARIA திறக்கவும். குடும்பம் ஒருமுறை தொடர்புகளையும் மாத்திரை நேரத்தையும் சேர்க்கும். செலவு குறைவாக வைப்பதே நோக்கம்.",
    hearYou: "ஆம், நான் கேட்கிறேன். எப்படி உதவட்டுமா?",
    needTime: "எந்த நேரத்தில் நினைவூட்ட வேண்டும்? நேரத்தைச் சொல்லுங்கள், காலை 8 போல.",
    setRemind: "உங்கள் மருந்து நினைவூட்டலை {time}க்கு வைத்தேன்.",
  },
  ur: {
    personaStudent:
      "{name} طالب علم ہیں{age}۔ ARIA بڑے بٹن اور آہستہ آواز استعمال کرتی ہے۔ صرف یاد دلاتی ہے۔ علاج کا مشورہ نہیں دیتی۔",
    personaParent:
      "{name} والدین ہیں{age}۔ یہ سیٹ اپ خاندان کے لیے ہے: دوا کی یاد، احتیاط سے کال، آسان جواب۔",
    personaSenior:
      "{name} {age} کے ہیں۔ فون کا چھوٹا حرف آنکھوں پر بھاری ہے۔ دوا کی یاد، خاندان کو کال، آسان جواب چاہیے۔ ایپ سے علاج کا مشورہ نہیں۔",
    personaSeniorPlain:
      "{name} بزرگ ہیں۔ فون کا چھوٹا حرف آنکھوں پر بھاری ہے۔ دوا کی یاد، خاندان کو کال، آسان جواب چاہیے۔",
    usingProfile: "یہ آپ کے بارے میں میں محفوظ نام، تاریخ پیدائش اور کردار استعمال کرتا ہے۔",
    easierTitle: "فون سے آسان کیوں",
    easierBody: "چھوٹے مینو ٹائپ کرنے کے بجائے بولیں۔ دوا، خاندان، آسان سوال۔ حرف بڑے، آواز آہستہ۔",
    pitchTitle: "خاندان کے لیے",
    pitchBody: "اپنوں کو آواز سے ٹیکنالوجی استعمال کرنے میں مدد دیں۔ یاد، خاندان، روزمرہ سوال۔",
    costTitle: "سیٹ اپ میں کیا لگے",
    costBody: "انٹرنیٹ والے فون پر ARIA کھولیں۔ خاندان ایک بار رابطے اور دوا کا وقت ڈالے۔ خرچ کم رکھنا مقصد ہے۔",
    hearYou: "جی، میں سن رہی ہوں۔ میں کیسے مدد کروں؟",
    needTime: "کس وقت یاد دلاؤں؟ وقت بولیں، جیسے صبح 8 بجے۔",
    setRemind: "میں نے آپ کی دوا کی یاد {time} کے لیے رکھ دی ہے۔",
  },
  gu: {
    personaStudent:
      "{name} વિદ્યાર્થી છે{age}. ARIA મોટા બટન અને ધીમી અવાજ વાપરે છે. ફક્ત યાદ અપાવે છે. તબીબી સલાહ નથી.",
    personaParent:
      "{name} માતા-પિતા છે{age}. આ સેટઅપ પરિવાર માટે છે: ગોળીની યાદ, કાળજીપૂર્વક કૉલ, સરળ જવાબ.",
    personaSenior:
      "{name} {age} છે. ફોનનો નાનો અક્ષર આંખો પર ભારે છે. ગોળીની યાદ, પરિવાર કૉલ અને સરળ જવાબ જોઈએ. એપમાંથી તબીબી સલાહ નહીં.",
    personaSeniorPlain:
      "{name} વડીલ છે. ફોનનો નાનો અક્ષર આંખો પર ભારે છે. ગોળીની યાદ, પરિવાર કૉલ અને સરળ જવાબ જોઈએ.",
    usingProfile: "તમારી વિગતમાં સાચવેલું નામ, જન્મ તારીખ અને ભૂમિકા અહીં વપરાય છે.",
    easierTitle: "ફોન કરતાં સહેલું કેમ",
    easierBody: "નાના મેનૂ ટાઇપ કર્યા વગર બોલો. દવા, પરિવાર, સરળ પ્રશ્ન. અક્ષર મોટા, અવાજ ધીમો.",
    pitchTitle: "પરિવાર માટે",
    pitchBody: "તમારા લોકોને અવાજથી ટેક્નોલોજી વાપરવામાં મદદ કરો. યાદ, પરિવાર, રોજિંદા પ્રશ્ન.",
    costTitle: "સેટઅપમાં શું જોઈએ",
    costBody: "ઇન્ટરનેટવાળા ફોન પર ARIA ખોલો. પરિવાર એક વાર સંપર્ક અને ગોળીનો સમય મૂકે. ખર્ચ ઓછો રાખવો લક્ષ્ય છે.",
    hearYou: "હા, હું સાંભળું છું. હું કેવી રીતે મદદ કરું?",
    needTime: "ક્યારે યાદ અપાવું? સમય કહો, જેમ સવારે 8.",
    setRemind: "મેં તમારી દવાની યાદ {time} માટે મૂકી છે.",
  },
  kn: {
    personaStudent:
      "{name} ವಿದ್ಯಾರ್ಥಿ{age}. ARIA ದೊಡ್ಡ ಬಟನ್ ಮತ್ತು ನಿಧಾನ ಮಾತು ಬಳಸುತ್ತದೆ. ನೆನಪು ಮಾತ್ರ. ವೈದ್ಯಕೀಯ ಸಲಹೆ ಇಲ್ಲ.",
    personaParent:
      "{name} ಪೋಷಕರು{age}. ಇದು ಕುಟುಂಬಕ್ಕೆ: ಮಾತ್ರೆ ನೆನಪು, ಎಚ್ಚರಿಕೆಯ ಕರೆ, ಸರಳ ಉತ್ತರ.",
    personaSenior:
      "{name} {age}. ಸಣ್ಣ ಅಕ್ಷರ ಕಣ್ಣಿಗೆ ಕಷ್ಟ. ಮಾತ್ರೆ ನೆನಪು, ಕುಟುಂಬ ಕರೆ, ಸರಳ ಉತ್ತರ ಬೇಕು. ಅಪ್‌ನಿಂದ ವೈದ್ಯಕೀಯ ಸಲಹೆ ಬೇಡ.",
    personaSeniorPlain:
      "{name} ಹಿರಿಯರು. ಸಣ್ಣ ಅಕ್ಷರ ಕಣ್ಣಿಗೆ ಕಷ್ಟ. ಮಾತ್ರೆ ನೆನಪು, ಕುಟುಂಬ ಕರೆ, ಸರಳ ಉತ್ತರ ಬೇಕು.",
    usingProfile: "ನಿಮ್ಮ ವಿವರದಲ್ಲಿ ಉಳಿಸಿದ ಹೆಸರು, ಹುಟ್ಟಿದ ದಿನ ಮತ್ತು ಪಾತ್ರವನ್ನು ಇದು ಬಳಸುತ್ತದೆ.",
    easierTitle: "ಫೋನ್‌ಗಿಂತ ಸುಲಭ ಏಕೆ",
    easierBody: "ಸಣ್ಣ ಮೆನು ಟೈಪ್ ಮಾಡದೆ ಮಾತನಾಡಿ. ಮಾತ್ರೆ, ಕುಟುಂಬ, ಸರಳ ಪ್ರಶ್ನೆ. ಅಕ್ಷರ ದೊಡ್ಡದು, ಮಾತು ನಿಧಾನ.",
    pitchTitle: "ಕುಟುಂಬಕ್ಕೆ",
    pitchBody: "ನಿಮ್ಮವರು ಧ್ವನಿಯಿಂದ ತಂತ್ರಜ್ಞಾನ ಬಳಸಲು ಸಹಾಯ ಮಾಡಿ. ನೆನಪು, ಕುಟುಂಬ, ದಿನನಿತ್ಯದ ಪ್ರಶ್ನೆ.",
    costTitle: "ಸೆಟಪ್‌ಗೆ ಏನು ಬೇಕು",
    costBody: "ಇಂಟರ್ನೆಟ್ ಇರುವ ಫೋನ್‌ನಲ್ಲಿ ARIA ತೆರೆಯಿರಿ. ಕುಟುಂಬ ಒಮ್ಮೆ ಸಂಪರ್ಕ ಮತ್ತು ಮಾತ್ರೆ ಸಮಯ ಹಾಕುತ್ತದೆ. ಖರ್ಚು ಕಡಿಮೆ ಇಡುವುದೇ ಗುರಿ.",
    hearYou: "ಹೌದು, ನಾನು ಕೇಳುತ್ತಿದ್ದೇನೆ. ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?",
    needTime: "ಯಾವ ಸಮಯಕ್ಕೆ ನೆನಪಿಸಲಿ? ಸಮಯ ಹೇಳಿ, ಬೆಳಿಗ್ಗೆ 8 ಹಾಗೆ.",
    setRemind: "ನಿಮ್ಮ ಔಷಧ ನೆನಪನ್ನು {time}ಗೆ ಇಟ್ಟಿದ್ದೇನೆ.",
  },
  or: {
    personaStudent:
      "{name} ଜଣେ ଛାତ୍ର{age}। ARIA ବଡ଼ ବଟନ୍ ଓ ଧୀର କଥା ବ୍ୟବହାର କରେ। କେବଳ ମନେ ପକାଏ। ଚିକିତ୍ସା ପରାମର୍ଶ ଦିଏ ନାହିଁ।",
    personaParent:
      "{name} ପିତାମାତା{age}। ଏହା ପରିବାର ପାଇଁ: ବଟିକା ସ୍ମରଣ, ସାବଧାନ କଲ୍, ସହଜ ଉତ୍ତର।",
    personaSenior:
      "{name} {age}। ଫୋନର ଛୋଟ ଅକ୍ଷର ଆଖିକୁ କଷ୍ଟ। ବଟିକା ସ୍ମରଣ, ପରିବାର କଲ୍, ସହଜ ଉତ୍ତର ଦରକାର। ଆପ୍‌ରୁ ଚିକିତ୍ସା ପରାମର୍ଶ ନୁହେଁ।",
    personaSeniorPlain:
      "{name} ଜଣେ ବୟସ୍କ। ଫୋନର ଛୋଟ ଅକ୍ଷର ଆଖିକୁ କଷ୍ଟ। ବଟିକା ସ୍ମରଣ, ପରିବାର କଲ୍, ସହଜ ଉତ୍ତର ଦରକାର।",
    usingProfile: "ଆପଣଙ୍କ ବିଷୟରେ ସେଭ୍ ନାମ, ଜନ୍ମ ତାରିଖ ଓ ଭୂମିକା ଏଠାରେ ବ୍ୟବହାର ହୁଏ।",
    easierTitle: "ଫୋନଠାରୁ ସହଜ କାହିଁକି",
    easierBody: "ଛୋଟ ମେନୁ ଟାଇପ୍ ନକରି କୁହନ୍ତୁ। ଔଷଧ, ପରିବାର, ସହଜ ପ୍ରଶ୍ନ। ଅକ୍ଷର ବଡ଼, କଥା ଧୀର।",
    pitchTitle: "ପରିବାର ପାଇଁ",
    pitchBody: "ଆପଣଙ୍କ ଲୋକଙ୍କୁ ସ୍ୱରରେ ଟେକ୍ନୋଲୋଜି ବ୍ୟବହାରରେ ସାହାଯ୍ୟ କରନ୍ତୁ। ସ୍ମରଣ, ପରିବାର, ଦୈନନ୍ଦିନ ପ୍ରଶ୍ନ।",
    costTitle: "ସେଟଅପ୍‌ରେ କଣ ଲାଗେ",
    costBody: "ଇଣ୍ଟରନେଟ୍ ଥିବା ଫୋନରେ ARIA ଖୋଲନ୍ତୁ। ପରିବାର ଥରେ ଯୋଗାଯୋଗ ଓ ବଟିକା ସମୟ ରଖେ। ଖର୍ଚ୍ଚ କମ୍ ରଖିବା ଲକ୍ଷ୍ୟ।",
    hearYou: "ହଁ, ମୁଁ ଶୁଣୁଛି। କିପରି ସାହାଯ୍ୟ କରିବି?",
    needTime: "କେତେବେଳେ ମନେ ପକାଇବି? ସମୟ କୁହନ୍ତୁ, ଯେମିତି ସକାଳ ୮।",
    setRemind: "ମୁଁ ଆପଣଙ୍କ ଔଷଧ ସ୍ମରଣ {time} ପାଇଁ ରଖିଛି।",
  },
  ml: {
    personaStudent:
      "{name} ഒരു വിദ്യാർത്ഥി{age}. ARIA വലിയ ബട്ടണുകളും പതുക്കെയുള്ള സംസാരവും ഉപയോഗിക്കുന്നു. ഓർമ്മപ്പെടുത്തൽ മാത്രം. ചികിത്സാ ഉപദേശം ഇല്ല.",
    personaParent:
      "{name} രക്ഷിതാവ്{age}. ഇത് കുടുംബത്തിന്: ഗുളിക ഓർമ്മ, ശ്രദ്ധയോടെ കോൾ, ലളിതമായ മറുപടി.",
    personaSenior:
      "{name} {age}. ചെറിയ അക്ഷരം കണ്ണിന് ബുദ്ധിമുട്ട്. ഗുളിക ഓർമ്മ, കുടുംബ കോൾ, ലളിതമായ മറുപടി വേണം. ആപ്പിൽ നിന്ന് ചികിത്സാ ഉപദേശം വേണ്ട.",
    personaSeniorPlain:
      "{name} ഒരു മുതിർന്ന വ്യക്തി. ചെറിയ അക്ഷരം കണ്ണിന് ബുദ്ധിമുട്ട്. ഗുളിക ഓർമ്മ, കുടുംബ കോൾ, ലളിതമായ മറുപടി വേണം.",
    usingProfile: "നിങ്ങളെക്കുറിച്ച് സേവ് ചെയ്ത പേര്, ജനനത്തീയതി, റോൾ ഇവിടെ ഉപയോഗിക്കും.",
    easierTitle: "ഫോണിനേക്കാൾ എളുപ്പം എന്തുകൊണ്ട്",
    easierBody: "ചെറിയ മെനു ടൈപ്പ് ചെയ്യാതെ സംസാരിക്കുക. മരുന്ന്, കുടുംബം, ലളിതമായ ചോദ്യം. അക്ഷരം വലുത്, സംസാരം പതുക്കെ.",
    pitchTitle: "കുടുംബത്തിന്",
    pitchBody: "പ്രിയപ്പെട്ടവർ ശബ്ദത്തിലൂടെ സാങ്കേതികവിദ്യ ഉപയോഗിക്കാൻ സഹായിക്കുക. ഓർമ്മ, കുടുംബം, ദൈനംദിന ചോദ്യം.",
    costTitle: "സജ്ജീകരിക്കാൻ എന്ത് വേണം",
    costBody: "ഇന്റർനെറ്റുള്ള ഫോണിൽ ARIA തുറക്കുക. കുടുംബം ഒരിക്കൽ കോൺടാക്റ്റും ഗുളിക സമയവും ചേർക്കും. ചെലവ് കുറയ്ക്കുകയാണ് ലക്ഷ്യം.",
    hearYou: "അതെ, ഞാൻ കേൾക്കുന്നു. എങ്ങനെ സഹായിക്കാം?",
    needTime: "ഏത് സമയത്ത് ഓർമ്മിപ്പിക്കണം? സമയം പറയുക, രാവിലെ 8 പോലെ.",
    setRemind: "നിങ്ങളുടെ മരുന്ന് ഓർമ്മ {time}ന് വെച്ചു.",
  },
  pa: {
    personaStudent:
      "{name} ਵਿਦਿਆਰਥੀ ਹਨ{age}। ARIA ਵੱਡੇ ਬਟਨ ਅਤੇ ਹੌਲੀ ਆਵਾਜ਼ ਵਰਤਦੀ ਹੈ। ਸਿਰਫ਼ ਯਾਦ ਦਿਵਾਉਂਦੀ ਹੈ। ਇਲਾਜ ਦੀ ਸਲਾਹ ਨਹੀਂ।",
    personaParent:
      "{name} ਮਾਪੇ ਹਨ{age}। ਇਹ ਸੈਟਅੱਪ ਪਰਿਵਾਰ ਲਈ ਹੈ: ਦਵਾਈ ਦੀ ਯਾਦ, ਸਾਵਧਾਨੀ ਨਾਲ ਕਾਲ, ਸੌਖੇ ਜਵਾਬ।",
    personaSenior:
      "{name} {age} ਦੇ ਹਨ। ਫ਼ੋਨ ਦਾ ਛੋਟਾ ਅੱਖਰ ਅੱਖਾਂ ਉੱਤੇ ਭਾਰੀ ਹੈ। ਦਵਾਈ ਦੀ ਯਾਦ, ਪਰਿਵਾਰ ਕਾਲ, ਸੌਖੇ ਜਵਾਬ ਚਾਹੀਦੇ ਹਨ। ਐਪ ਤੋਂ ਇਲਾਜ ਦੀ ਸਲਾਹ ਨਹੀਂ।",
    personaSeniorPlain:
      "{name} ਬਜ਼ੁਰਗ ਹਨ। ਫ਼ੋਨ ਦਾ ਛੋਟਾ ਅੱਖਰ ਅੱਖਾਂ ਉੱਤੇ ਭਾਰੀ ਹੈ। ਦਵਾਈ ਦੀ ਯਾਦ, ਪਰਿਵਾਰ ਕਾਲ, ਸੌਖੇ ਜਵਾਬ ਚਾਹੀਦੇ ਹਨ।",
    usingProfile: "ਤੁਹਾਡੇ ਬਾਰੇ ਵਿੱਚ ਸੰਭਾਲਿਆ ਨਾਮ, ਜਨਮ ਤਾਰੀਖ ਅਤੇ ਭੂਮਿਕਾ ਇੱਥੇ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।",
    easierTitle: "ਫ਼ੋਨ ਨਾਲੋਂ ਸੌਖਾ ਕਿਉਂ",
    easierBody: "ਛੋਟੇ ਮੀਨੂ ਟਾਈਪ ਕਰਨ ਦੀ ਥਾਂ ਬੋਲੋ। ਦਵਾਈ, ਪਰਿਵਾਰ, ਸੌਖੇ ਸਵਾਲ। ਅੱਖਰ ਵੱਡੇ, ਆਵਾਜ਼ ਹੌਲੀ।",
    pitchTitle: "ਪਰਿਵਾਰ ਲਈ",
    pitchBody: "ਆਪਣਿਆਂ ਨੂੰ ਆਵਾਜ਼ ਨਾਲ ਤਕਨਾਲੋਜੀ ਵਰਤਣ ਵਿੱਚ ਮਦਦ ਕਰੋ। ਯਾਦ, ਪਰਿਵਾਰ, ਰੋਜ਼ਾਨਾ ਸਵਾਲ।",
    costTitle: "ਸੈਟਅੱਪ ਵਿੱਚ ਕੀ ਲੱਗਦਾ ਹੈ",
    costBody: "ਇੰਟਰਨੈੱਟ ਵਾਲੇ ਫ਼ੋਨ ਉੱਤੇ ARIA ਖੋਲ੍ਹੋ। ਪਰਿਵਾਰ ਇੱਕ ਵਾਰ ਸੰਪਰਕ ਅਤੇ ਦਵਾਈ ਦਾ ਸਮਾਂ ਰੱਖਦਾ ਹੈ। ਖ਼ਰਚ ਘੱਟ ਰੱਖਣਾ ਮਕਸਦ ਹੈ।",
    hearYou: "ਹਾਂ, ਮੈਂ ਸੁਣ ਰਹੀ ਹਾਂ। ਮੈਂ ਕਿਵੇਂ ਮਦਦ ਕਰਾਂ?",
    needTime: "ਕਿਸ ਵੇਲੇ ਯਾਦ ਦਿਵਾਵਾਂ? ਸਮਾਂ ਬੋਲੋ, ਜਿਵੇਂ ਸਵੇਰੇ 8।",
    setRemind: "ਮੈਂ ਤੁਹਾਡੀ ਦਵਾਈ ਦੀ ਯਾਦ {time} ਲਈ ਰੱਖ ਦਿੱਤੀ ਹੈ।",
  },
};

export function phrase(lang: Lang, key: PhraseKey | MoreKey, vars?: Record<string, string>): string {
  const main = phrases[lang][key as PhraseKey] || phrases.en[key as PhraseKey];
  const extra = more[lang][key as MoreKey] || more.en[key as MoreKey];
  let text = (key in phrases.en ? main : extra) || extra || main;
  if (vars) {
    for (const [name, value] of Object.entries(vars)) text = text.replaceAll(`{${name}}`, value);
  }
  return text;
}

export function yearsOld(birth: string, now = new Date()): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(birth)) return null;
  const [year, month, day] = birth.split("-").map(Number);
  if (!year || !month || !day) return null;
  let age = now.getFullYear() - year;
  const monthDelta = now.getMonth() - (month - 1);
  if (monthDelta < 0 || (monthDelta === 0 && now.getDate() < day)) age -= 1;
  if (age < 0 || age > 120) return null;
  return age;
}
