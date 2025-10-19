import styles from "./WineCountries.module.css";

const WineCountries = () => {
  return (
    <div>
      <h2 className={styles.title}>Wine Countries — Polska & English</h2>
      <p className={styles.subtitle}>
        Zbiór najważniejszych informacji o regionach, odmianach i ciekawostkach
        (PL & EN). Tekst ułożony w czytelny blok z wygodną typografią.
      </p>
      <article className={styles.article}>
        <p className={styles.bodyText}>
          Polska • Główne regiony: Małopolska (Jura, okolice Krakowa),
          Podkarpacie, Lubuskie (Zielona Góra), Dolny Śląsk, Sandomierz,
          Zachodniopomorskie, Kujawy. • Dlaczego produkuje wino: chłodny klimat,
          ocieplenie ostatnich dekad i nowoczesna enologia → styl świeży,
          aromatyczny; rosnąca turystyka enogastronomiczna. • Odmiany: białe
          hybrydy i klasyki chłodnego klimatu – Solaris, Hibernal, Seyval Blanc,
          Johanniter, Riesling; czerwone – Regent, Rondo, Pinot Noir, Zweigelt.
          • Ciekawostka: polskie winiarstwo przeżywa renesans od lat 2000.;
          Zielona Góra ma tradycję winobrań od XIX w. Węgry • Główne regiony:
          Tokaj, Eger, Villány, Szekszárd, Somló, okolice Balatonu (Badacsony,
          Balatonfüred), Mátra. • Dlaczego: zróżnicowane tereny wulkaniczne i
          lessy; ciepły, kontynentalny klimat sprzyja białym aromatycznym i
          czerwonym o dobrej strukturze; długa historia król. dworów. • Odmiany:
          Furmint, Hárslevelű (białe), Olaszrizling; czerwone: Kékfrankos
          (Blaufränkisch), Kadarka, Bikavér (kupaż). • Ciekawostka: Tokaji Aszú
          nazywano „winem królów i królem win”. Austria • Główne regiony:
          Wachau, Kamptal, Kremstal, Weinviertel, Burgenland (Leithaberg,
          Neusiedlersee), Styria (Südsteiermark). • Dlaczego: chłodny do
          umiarkowanego klimat kontynentalny, duże amplitudy dobowe → kwasowość
          i czystość aromatu; jezioro Nezyderskie sprzyja słodkim stylom. •
          Odmiany: Grüner Veltliner, Riesling; czerwone: Blaufränkisch,
          Zweigelt, St. Laurent. • Ciekawostka: po aferze z 1985 r. Austria
          zbudowała jedne z najsurowszych przepisów jakościowych w Europie.
          Australia • Główne regiony: Barossa i McLaren Vale (SA), Coonawarra,
          Yarra Valley (VIC), Margaret River (WA), Hunter Valley (NSW),
          Tasmania. • Dlaczego: szeroki wachlarz klimatów (od gorących po
          chłodne przybrzeżne), dojrzałe owoce i czysta technologia; silny
          eksport. • Odmiany: Shiraz (Syrah), Cabernet Sauvignon, Chardonnay,
          Riesling, Grenache, Semillon. • Ciekawostka: Australia spopularyzowała
          zakrętki (screw cap) i kupaże GSM (Grenache–Shiraz–Mourvèdre). Francja
          • Główne regiony: Bordeaux, Burgundia, Szampania, Dolina Rodanu,
          Loara, Alzacja, Prowansja, Langwedocja, Jura, Sabaudia. • Dlaczego:
          idea terroir i system AOC/AOP; różnorodność gleb i klimatów od
          oceanicznego po śródziemnomorski. • Odmiany: Cabernet Sauvignon,
          Merlot, Pinot Noir, Syrah; białe: Chardonnay, Sauvignon Blanc, Chenin,
          Riesling, Muscadet (Melon). • Ciekawostka: to tu sformalizowano
          koncepcję apelacji i klasyfikacji, którą naśladuje cały świat. Włochy
          • Główne regiony: Piemont, Toskania, Veneto, Sycylia, Apulia,
          Trentino-Alto Adige, Friuli, Abruzja, Kampania, Marche. • Dlaczego:
          ogromna bioróżnorodność, tradycja od antyku, wpływ mórz i gór; styl od
          eleganckich chłodnych po śródziemnomorskie. • Odmiany: Sangiovese,
          Nebbiolo, Barbera, Montepulciano; białe: Glera (Prosecco), Garganega
          (Soave), Verdicchio, Falanghina; południe: Nero d’Avola, Aglianico. •
          Ciekawostka: Włochy mają setki rodzimych szczepów (ponad 500
          uprawianych komercyjnie). Hiszpania • Główne regiony: Rioja, Ribera
          del Duero, Priorat, Rías Baixas, Penedès (Cava), Jerez (Sherry), La
          Mancha. • Dlaczego: największa powierzchnia winnic na świecie; klimat
          od atlantyckiego po gorący kontynentalny; tradycja długiego
          dojrzewania w dębie. • Odmiany: Tempranillo, Garnacha, Monastrell;
          białe: Albariño, Verdejo, Airén; wzmacniane: Palomino (Jerez). •
          Ciekawostka: system klasyfikacji dojrzewania (Crianza/Reserva/Gran
          Reserva) jest ikoną stylu. Stany Zjednoczone • Główne regiony:
          Kalifornia (Napa, Sonoma, Central Coast, Lodi), Oregon (Willamette),
          Waszyngton (Columbia Valley), Nowy Jork (Finger Lakes), Virginia. •
          Dlaczego: przedsiębiorczość i innowacje, różnorodność mikroklimatów;
          AVA jako odpowiednik apelacji. • Odmiany: Cabernet Sauvignon,
          Chardonnay, Pinot Noir, Zinfandel, Merlot, Riesling. • Ciekawostka:
          „Judgment of Paris” 1976 wyniósł Kalifornię na światowe salony. Chile
          • Główne regiony: Maipo, Colchagua, Maule, Casablanca, Aconcagua,
          Itata, Bío-Bío. • Dlaczego: chłodny Pacyfik + Andy = duże wiatry i
          amplitudy; czystość owocu, świetny stosunek jakości do ceny. •
          Odmiany: Cabernet Sauvignon, Carménère, Merlot, Syrah; białe:
          Sauvignon Blanc, Chardonnay; historycznie País. • Ciekawostka:
          Carménère „odkryto na nowo” w Chile w latach 90., mylony wcześniej z
          Merlotem. Argentyna • Główne regiony: Mendoza (Luján de Cuyo, Uco),
          San Juan, Salta (Cafayate), Patagonia (Neuquén, Río Negro). •
          Dlaczego: wysokogórski, suchy klimat Andów → intensywna dojrzałość i
          czyste aromaty; nawadnianie z topniejących śniegów. • Odmiany: Malbec
          (ikona), Bonarda, Cabernet Sauvignon, Syrah; białe: Torrontés Riojano,
          Chardonnay. • Ciekawostka: jedne z najwyższych winnic świata znajdują
          się w Salcie (ok. 2 000–3 000 m n.p.m.). Niemcy • Główne regiony:
          Mozela, Rheingau, Rheinhessen, Pfalz, Nahe, Baden, Franken, Ahr. •
          Dlaczego: chłodny klimat i strome stoki nad rzekami → wysoka
          kwasowość, niska alkoholowość, czystość; tradycja Prädikat. • Odmiany:
          Riesling, Spätburgunder (Pinot Noir), Silvaner, Müller-Thurgau. •
          Ciekawostka: klasyfikacja Prädikatswein oparta jest na dojrzałości
          moszczu (np. Kabinett, Spätlese). Portugalia • Główne regiony: Douro
          (Porto i stołowe), Vinho Verde, Dão, Bairrada, Alentejo, Setúbal,
          Madeira, Azory (Pico). • Dlaczego: mozaika lokalnych szczepów,
          atlantycki klimat i granitowo-łupkowe gleby; silna kultura kupażu. •
          Odmiany: Touriga Nacional, Touriga Franca, Tinta Roriz (Aragonez),
          Baga; białe: Alvarinho, Arinto, Encruzado. • Ciekawostka: Portugalia
          jest światowym liderem korka naturalnego (dęby korkowe). Nowa Zelandia
          • Główne regiony: Marlborough, Central Otago, Hawke’s Bay,
          Martinborough/Wairarapa, Nelson, Canterbury. • Dlaczego: chłodny
          morski klimat, duże nasłonecznienie i czyste techniki → aromatyczność
          i precyzja. • Odmiany: Sauvignon Blanc, Pinot Noir, Chardonnay, Syrah,
          Pinot Gris. • Ciekawostka: to stąd pochodzi styl ultra-aromatycznego
          Sauvignon Blanc, który zdefiniował kategorię. Chiny • Główne regiony:
          Ningxia (Helan Mountain East), Shandong (Yantai/Penglai), Xinjiang,
          Hebei (Huailai), Shanxi. • Dlaczego: szybki rozwój nasadzeń,
          inwestycje i zróżnicowane terroir od pustyń po wybrzeże; rosnący popyt
          wewnętrzny. • Odmiany: Cabernet Sauvignon, Merlot, Marselan; lokalnie
          „Cabernet Gernischt” (związany z Carménère), Syrah. • Ciekawostka:
          Ningxia zdobywa międzynarodowe nagrody, stając się wizytówką
          chińskiego winiarstwa. ⸻ English version Poland • Key regions: Lesser
          Poland (Jura), Subcarpathia, Lubusz (Zielona Góra), Lower Silesia,
          Sandomierz, West Pomerania, Kuyavia. • Why wine here: cool climate
          with recent warming and modern winemaking → crisp, aromatic styles;
          growing wine tourism. • Grapes: Solaris, Hibernal, Seyval Blanc,
          Johanniter, Riesling; reds: Regent, Rondo, Pinot Noir, Zweigelt. • Fun
          fact: Poland’s modern wine revival began in the 2000s; Zielona Góra
          has harvest festivals dating to the 19th c. Hungary • Key regions:
          Tokaj, Eger, Villány, Szekszárd, Somló, Lake Balaton (Badacsony,
          Balatonfüred), Mátra. • Why: volcanic/loess soils and continental
          climate yield both complex whites and structured reds; royal and
          monastic heritage. • Grapes: Furmint, Hárslevelű, Olaszrizling; reds:
          Kékfrankos (Blaufränkisch), Kadarka, Bikavér blends. • Fun fact:
          Tokaji Aszú was long called “the wine of kings and the king of wines.”
          Austria • Key regions: Wachau, Kamptal, Kremstal, Weinviertel,
          Burgenland (Leithaberg, Neusiedlersee), Styria (Südsteiermark). • Why:
          cool–continental climate with big diurnal shifts → purity and acidity;
          Lake Neusiedl enables noble-rot sweets. • Grapes: Grüner Veltliner,
          Riesling; reds: Blaufränkisch, Zweigelt, St. Laurent. • Fun fact:
          After the 1985 scandal, Austria built some of Europe’s strictest
          quality rules. Australia • Key regions: Barossa & McLaren Vale (SA),
          Coonawarra, Yarra Valley (VIC), Margaret River (WA), Hunter Valley
          (NSW), Tasmania. • Why: vast range of climates from hot interiors to
          cool coasts; clean tech and export focus. • Grapes: Shiraz (Syrah),
          Cabernet Sauvignon, Chardonnay, Riesling, Grenache, Semillon. • Fun
          fact: Australia popularised screwcaps and GSM
          (Grenache–Shiraz–Mourvèdre) blends. France • Key regions: Bordeaux,
          Burgundy, Champagne, Rhône, Loire, Alsace, Provence, Languedoc, Jura,
          Savoie. • Why: terroir-driven AOC/AOP system; diversity from oceanic
          to Mediterranean climates. • Grapes: Cabernet Sauvignon, Merlot, Pinot
          Noir, Syrah; whites: Chardonnay, Sauvignon Blanc, Chenin, Riesling,
          Melon de Bourgogne. • Fun fact: France codified the appellation
          concept emulated worldwide. Italy • Key regions: Piedmont, Tuscany,
          Veneto, Sicily, Apulia, Trentino-Alto Adige, Friuli, Abruzzo,
          Campania, Marche. • Why: immense native diversity, ancient traditions,
          mountain–sea influences; styles from alpine to Mediterranean. •
          Grapes: Sangiovese, Nebbiolo, Barbera, Montepulciano; whites: Glera,
          Garganega, Verdicchio, Falanghina; south: Nero d’Avola, Aglianico. •
          Fun fact: Italy cultivates hundreds of indigenous varieties (500+
          commercially grown). Spain • Key regions: Rioja, Ribera del Duero,
          Priorat, Rías Baixas, Penedès (Cava), Jerez (Sherry), La Mancha. •
          Why: world’s largest vineyard area; climates from Atlantic to hot
          continental; tradition of long oak ageing. • Grapes: Tempranillo,
          Garnacha, Monastrell; whites: Albariño, Verdejo, Airén; fortified:
          Palomino. • Fun fact: Ageing categories (Crianza/Reserva/Gran Reserva)
          are Spanish style icons. United States • Key regions: California
          (Napa, Sonoma, Central Coast, Lodi), Oregon (Willamette), Washington
          (Columbia Valley), New York (Finger Lakes), Virginia. • Why:
          entrepreneurial innovation and diverse microclimates; AVA system
          parallels appellations. • Grapes: Cabernet Sauvignon, Chardonnay,
          Pinot Noir, Zinfandel, Merlot, Riesling. • Fun fact: The 1976 Judgment
          of Paris put California on the global map. Chile • Key regions: Maipo,
          Colchagua, Maule, Casablanca, Aconcagua, Itata, Bío-Bío. • Why: cold
          Pacific and Andes winds create high diurnal ranges → vivid fruit and
          value; phylloxera-free zones. • Grapes: Cabernet Sauvignon, Carménère,
          Merlot, Syrah; whites: Sauvignon Blanc, Chardonnay; historic País. •
          Fun fact: Carménère was “rediscovered” in Chile in the 1990s after
          decades misidentified as Merlot. Argentina • Key regions: Mendoza
          (Luján de Cuyo, Uco Valley), San Juan, Salta (Cafayate), Patagonia
          (Neuquén, Río Negro). • Why: high-altitude, arid Andean sites with
          snowmelt irrigation → intensity and purity. • Grapes: Malbec
          (flagship), Bonarda, Cabernet Sauvignon, Syrah; whites: Torrontés
          Riojano, Chardonnay. • Fun fact: Some of the world’s highest vineyards
          are in Salta (~2,000–3,000 m). Germany • Key regions: Mosel, Rheingau,
          Rheinhessen, Pfalz, Nahe, Baden, Franken, Ahr. • Why: cool climate and
          steep river slopes yield low-alcohol, high-acid precision; Prädikat
          tradition. • Grapes: Riesling, Spätburgunder (Pinot Noir), Silvaner,
          Müller-Thurgau. • Fun fact: Prädikatswein categories are based on must
          weight (e.g., Kabinett, Spätlese). Portugal • Key regions: Douro (Port
          & table), Vinho Verde, Dão, Bairrada, Alentejo, Setúbal, Madeira,
          Azores (Pico). • Why: Atlantic influence, granite/slate soils, and a
          mosaic of native grapes; blending culture. • Grapes: Touriga Nacional,
          Touriga Franca, Tinta Roriz (Aragonez), Baga; whites: Alvarinho,
          Arinto, Encruzado. • Fun fact: Portugal is the global leader in
          natural cork production. New Zealand • Key regions: Marlborough,
          Central Otago, Hawke’s Bay, Martinborough/Wairarapa, Nelson,
          Canterbury. • Why: cool maritime climate with high sunlight → aromatic
          precision; strong quality focus. • Grapes: Sauvignon Blanc, Pinot
          Noir, Chardonnay, Syrah, Pinot Gris. • Fun fact: NZ helped define the
          hyper-aromatic Sauvignon Blanc style and pushed early screwcap
          adoption. China • Key regions: Ningxia (Helan Mountain East), Shandong
          (Yantai/Penglai), Xinjiang, Hebei (Huailai), Shanxi. • Why: rapid
          investment, vast terroir diversity, rising domestic demand; arid
          interiors and coastal zones both viable. • Grapes: Cabernet Sauvignon,
          Merlot, Marselan; “Cabernet Gernischt” (related to Carménère), Syrah.
          • Fun fact: Ningxia wines have won notable international awards,
          becoming China’s quality flagship.
        </p>
      </article>
    </div>
  );
};

export default WineCountries;
