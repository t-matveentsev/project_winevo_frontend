const countriesList = [
  "Poland",
  "Hungary",
  "Austria",
  "Australia",
  "France",
  "Italy",
  "Spain",
  "United States",
  "Chile",
  "Argentina",
  "Germany",
  "Portugal",
  "New Zealand",
  "China",
];

export const COUNTRIES = countriesList.sort();

export const COUNTRIES_DETAILS = [
  {
    country: "Polska",
    regions:
      "Małopolska (Jura, okolice Krakowa), Podkarpacie, Lubuskie (Zielona Góra), Dolny Śląsk, Sandomierz, Zachodniopomorskie, Kujawy.",
    why: "Chłodny klimat z ociepleniem ostatnich dekad i nowoczesną enologią → styl świeży, aromatyczny; rosnąca turystyka enogastronomiczna.",
    grapes:
      "Białe: Solaris, Hibernal, Seyval Blanc, Johanniter, Riesling. Czerwone: Regent, Rondo, Pinot Noir, Zweigelt.",
    fun: "Polskie winiarstwo przeżywa renesans od lat 2000.; Zielona Góra ma tradycję winobrań od XIX w.",
  },
  {
    country: "Węgry",
    regions:
      "Tokaj, Eger, Villány, Szekszárd, Somló, okolice Balatonu (Badacsony, Balatonfüred), Mátra.",
    why: "Zróżnicowane tereny wulkaniczne i lessy, ciepły klimat kontynentalny → białe aromatyczne i czerwone o dobrej strukturze; długa historia dworów i klasztorów.",
    grapes:
      "Białe: Furmint, Hárslevelű, Olaszrizling. Czerwone: Kékfrankos (Blaufränkisch), Kadarka; kupaż Bikavér.",
    fun: "Tokaji Aszú nazywano „winem królów i królem win”.",
  },
  {
    country: "Austria",
    regions:
      "Wachau, Kamptal, Kremstal, Weinviertel, Burgenland (Leithaberg, Neusiedlersee), Styria (Südsteiermark).",
    why: "Chłodny–umiarkowany klimat z dużą amplitudą dobową → wysoka kwasowość i czystość aromatu; jezioro Nezyderskie sprzyja stylom botrytyzowanym.",
    grapes:
      "Białe: Grüner Veltliner, Riesling. Czerwone: Blaufränkisch, Zweigelt, St. Laurent.",
    fun: "Po aferze 1985 r. Austria zbudowała jedne z najsurowszych przepisów jakościowych w Europie.",
  },
  {
    country: "Australia",
    regions:
      "Barossa i McLaren Vale (SA), Coonawarra, Yarra Valley (VIC), Margaret River (WA), Hunter Valley (NSW), Tasmania.",
    why: "Ogromna rozpiętość klimatów od gorących po chłodne przybrzeżne; dojrzałe owoce, czysta technologia; silny eksport.",
    grapes:
      "Shiraz (Syrah), Cabernet Sauvignon, Chardonnay, Riesling, Grenache, Semillon.",
    fun: "Australia spopularyzowała zakrętki (screw cap) i kupaż GSM (Grenache–Shiraz–Mourvèdre).",
  },
  {
    country: "Francja",
    regions:
      "Bordeaux, Burgundia, Szampania, Dolina Rodanu, Loara, Alzacja, Prowansja, Langwedocja, Jura, Sabaudia.",
    why: "Koncepcja terroir i system AOC/AOP; olbrzymia różnorodność gleb i klimatów od oceanicznego po śródziemnomorski.",
    grapes:
      "Czerwone: Cabernet Sauvignon, Merlot, Pinot Noir, Syrah. Białe: Chardonnay, Sauvignon Blanc, Chenin, Riesling, Melon de Bourgogne.",
    fun: "Tu sformalizowano system apelacji i klasyfikacji naśladowany na całym świecie.",
  },
  {
    country: "Włochy",
    regions:
      "Piemont, Toskania, Veneto, Sycylia, Apulia, Trentino-Alto Adige, Friuli, Abruzja, Kampania, Marche.",
    why: "Ogromna bioróżnorodność i tradycja od antyku; wpływ mórz i gór → style od alpejskich po śródziemnomorskie.",
    grapes:
      "Czerwone: Sangiovese, Nebbiolo, Barbera, Montepulciano. Białe: Glera (Prosecco), Garganega (Soave), Verdicchio, Falanghina. Południe: Nero d’Avola, Aglianico.",
    fun: "Włochy mają setki rodzimych szczepów (ponad 500 uprawianych komercyjnie).",
  },
  {
    country: "Hiszpania",
    regions:
      "Rioja, Ribera del Duero, Priorat, Rías Baixas, Penedès (Cava), Jerez (Sherry), La Mancha.",
    why: "Największa powierzchnia winnic na świecie; spektrum klimatów; tradycja długiego dojrzewania w dębie.",
    grapes:
      "Czerwone: Tempranillo, Garnacha, Monastrell. Białe: Albariño, Verdejo, Airén. Wzmacniane: Palomino (Jerez).",
    fun: "Kategorie dojrzewania Crianza/Reserva/Gran Reserva są ikoną stylu.",
  },
  {
    country: "Stany Zjednoczone",
    regions:
      "Kalifornia (Napa, Sonoma, Central Coast, Lodi), Oregon (Willamette), Waszyngton (Columbia Valley), Nowy Jork (Finger Lakes), Virginia.",
    why: "Przedsiębiorczość i innowacje + różnorodność mikroklimatów; system AVA jako odpowiednik apelacji.",
    grapes:
      "Cabernet Sauvignon, Chardonnay, Pinot Noir, Zinfandel, Merlot, Riesling.",
    fun: "„Judgment of Paris” 1976 wyniósł Kalifornię na światowe salony.",
  },
  {
    country: "Chile",
    regions: "Maipo, Colchagua, Maule, Casablanca, Aconcagua, Itata, Bío-Bío.",
    why: "Zimny Pacyfik i Andy → duże amplitudy dobowe, czystość owocu i świetny stosunek jakości do ceny.",
    grapes:
      "Cabernet Sauvignon, Carménère, Merlot, Syrah; białe: Sauvignon Blanc, Chardonnay; historycznie País.",
    fun: "Carménère „odkryto na nowo” w latach 90., wcześniej mylony z Merlotem.",
  },
  {
    country: "Argentyna",
    regions:
      "Mendoza (Luján de Cuyo, Uco), San Juan, Salta (Cafayate), Patagonia (Neuquén, Río Negro).",
    why: "Wysokogórski, suchy klimat Andów i nawadnianie śniegami → intensywność i czystość aromatu.",
    grapes:
      "Malbec (ikona), Bonarda, Cabernet Sauvignon, Syrah; białe: Torrontés Riojano, Chardonnay.",
    fun: "Jedne z najwyższych winnic świata znajdują się w Salcie (ok. 2000–3000 m n.p.m.).",
  },
  {
    country: "Niemcy",
    regions: "Mozela, Rheingau, Rheinhessen, Pfalz, Nahe, Baden, Franken, Ahr.",
    why: "Chłodny klimat i strome zbocza nad rzekami → wysoka kwasowość, niska alkoholowość, precyzja; tradycja Prädikat.",
    grapes: "Riesling, Spätburgunder (Pinot Noir), Silvaner, Müller-Thurgau.",
    fun: "Prädikatswein klasyfikuje się wg dojrzałości moszczu (Kabinett, Spätlese itd.).",
  },
  {
    country: "Portugalia",
    regions:
      "Douro (Porto i stołowe), Vinho Verde, Dão, Bairrada, Alentejo, Setúbal, Madeira, Azory (Pico).",
    why: "Atlantycki klimat, granitowo-łupkowe gleby i mozaika lokalnych szczepów; silna kultura kupażu.",
    grapes:
      "Touriga Nacional, Touriga Franca, Tinta Roriz (Aragonez), Baga; białe: Alvarinho, Arinto, Encruzado.",
    fun: "Portugalia jest światowym liderem produkcji naturalnego korka.",
  },
  {
    country: "Nowa Zelandia",
    regions:
      "Marlborough, Central Otago, Hawke’s Bay, Martinborough/Wairarapa, Nelson, Canterbury.",
    why: "Chłodny morski klimat, dużo słońca i czysta technologia → aromatyczność i precyzja.",
    grapes: "Sauvignon Blanc, Pinot Noir, Chardonnay, Syrah, Pinot Gris.",
    fun: "To stąd pochodzi hiper-aromatyczny styl Sauvignon Blanc; wcześnie spopularyzowano też screw cap.",
  },
  {
    country: "Chiny",
    regions:
      "Ningxia (Helan Mountain East), Shandong (Yantai/Penglai), Xinjiang, Hebei (Huailai), Shanxi.",
    why: "Szybkie inwestycje i różnorodne terroir – od pustyń po wybrzeże; silny popyt wewnętrzny.",
    grapes:
      "Cabernet Sauvignon, Merlot, Marselan; lokalnie „Cabernet Gernischt” (spokrewniony z Carménère), Syrah.",
    fun: "Ningxia zdobywa międzynarodowe nagrody, stając się wizytówką chińskiego winiarstwa.",
  },
];
