// Automatikusan generált, teljes körű képlet-, gyakorló- és kvíz-adatbázis
window.FORMULA_DATA = [
  {
    "id": "vsz-01",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "1–2. tétel: Beszámoló és Költségalapfogalmak",
    "source": "1. tétel • Előadás 12–18. dia • Gyakorlat.xlsx (1. munkalap)",
    "name": "Mérleg „B” változat – Nettó forgótőke (F) és Tartósan lekötött vagyon (G)",
    "latex": "F = B + C - D - E \\qquad \\text{és} \\qquad G = A + F = H + I + J",
    "altLatex": [
      "\\text{Mérleg „A” változat: } A + B + C = \\text{Saját tőke (D)} + \\text{Céltartalékok (E)} + \\text{Kötelezettségek (F)} + \\text{PIE (G)}"
    ],
    "variables": [
      {
        "sym": "A",
        "desc": "Befektetett eszközök",
        "unit": "eFt"
      },
      {
        "sym": "B, C",
        "desc": "Forgóeszközök (B) és Aktív időbeli elhatárolások (C)",
        "unit": "eFt"
      },
      {
        "sym": "D, E",
        "desc": "Egy éven belül esedékes kötelezettségek (D) és Passzív időbeli elhatárolások (E)",
        "unit": "eFt"
      },
      {
        "sym": "F",
        "desc": "Forgóeszközök – rövid lejáratú kötelezettségek különbözete (Nettó forgótőke)",
        "unit": "eFt"
      },
      {
        "sym": "G",
        "desc": "Az eszközök összértéke az éven belül esedékes kötelezettségek levonása után",
        "unit": "eFt"
      },
      {
        "sym": "H, I, J",
        "desc": "Évnél hosszabb lejáratú kötelezettségek (H), Céltartalékok (I), Saját tőke (J)",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "A számviteli mérleg lépcsőzetes („B” típusú) felépítésének alapegyenlete, amely közvetlenül a mérlegben mutatja ki a rövid távú fizetőképességet jelző nettó forgótőkét.",
    "whatWeCalculate": "Azt számoljuk ki, hogy a rövid távon megtérülő eszközök (B+C) milyen összegben haladják meg az éven belül esedékes tartozásokat (D+E), illetve mekkora a tartós forrásokkal finanszírozott vagyon (G = A+F).",
    "whyAndHow": "Azért számoljuk, mert a lépcsőzetes mérleg azonnal megmutatja a finanszírozási egyensúlyt: a G sor értéke forintban megegyezik a tartós források (hosszú lejáratú kötelezettségek, céltartalékok és saját tőke) összegével.",
    "benchmark": "F > 0: konzervatív (stabil) finanszírozás; F = 0: illeszkedő; F < 0: agresszív finanszírozás.",
    "excelFormula": "Eszközök összesen = Befektetett eszközök + Forgóeszközök + AIE"
  },
  {
    "id": "vsz-02",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "1–2. tétel: Beszámoló és Költségalapfogalmak",
    "source": "1–2. tétel • Előadás 14–22. dia • Gyakorlat.xlsx (2. és 7. munkalap)",
    "name": "Üzemi (üzleti) eredmény: Összköltség vs. Forgalmi költség eljárás",
    "latex": "\\text{ÜTE}_{\\text{ÖK}} = \\text{ÁB} \\pm \\text{ASTÉ} + \\text{EB} - (\\text{AJR} + \\text{SZJR} + \\text{ÉCS}) - \\text{ER}",
    "altLatex": [
      "\\text{ÜTE}_{\\text{FK}} = (\\text{ÁB} - \\text{ÉKÖK}) - \\text{ÉKettK} + \\text{EB} - \\text{ER} = \\text{ÉBE} - \\text{ÉKettK} + \\text{EB} - \\text{ER}",
      "\\text{ASTÉ} = \\pm \\text{STKÁV} + \\text{SEEAÉ}, \\qquad \\text{ÜTE}_{\\text{ÖK}} \\equiv \\text{ÜTE}_{\\text{FK}}"
    ],
    "variables": [
      {
        "sym": "ÁB",
        "desc": "I. Értékesítés nettó árbevétele",
        "unit": "eFt"
      },
      {
        "sym": "ASTÉ",
        "desc": "II. Aktivált saját teljesítmények értéke (±STKÁV + SEEAÉ)",
        "unit": "eFt"
      },
      {
        "sym": "AJR, SZJR, ÉCS",
        "desc": "Anyagjellegű ráfordítások, Személyi jellegű ráfordítások, Értékcsökkenési leírás",
        "unit": "eFt"
      },
      {
        "sym": "ÉKÖK, ÉBE",
        "desc": "Értékesítés közvetlen költségei (II.) és Értékesítés bruttó eredménye (III. = ÁB - ÉKÖK)",
        "unit": "eFt"
      },
      {
        "sym": "ÉKettK",
        "desc": "IV. Értékesítés közvetett költségei (Értékesítési + Igazgatási + Egyéb általános ktg.)",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "Az eredménykimutatás két törvényi változatának (összköltség és forgalmi költség eljárás) alapösszefüggése az alaptevékenység (üzemi/üzleti) eredményének levezetésére.",
    "whatWeCalculate": "Az összköltség eljárásnál a tárgyidőszak összes termelési hozamát (ÁB ± ASTÉ) állítjuk szembe a tárgyidőszakban felmerült összes költségnemmel; a forgalmi költség eljárásnál pedig az árbevételből csak az értékesített termékek közvetlen és közvetett költségeit vonjuk le.",
    "whyAndHow": "Bár a két eljárás eltérő bontásban mutatja be a gazdálkodást, az üzemi (üzleti) eredményüknek forintban mindig pontosan meg kell egyeznie. A vezetői számvitel számára a forgalmi költség eljárás információtartalma sokkal gazdagabb.",
    "benchmark": "ÜTE_ÖK = ÜTE_FK (azonos üzemi eredmény mindkét eljárásnál).",
    "excelFormula": "=D10-D14+D15-D17 (Bruttó eredmény - Közvetett ktg + Egyéb bev - Egyéb ráf)"
  },
  {
    "id": "vsz-03",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "1–2. tétel: Beszámoló és Költségalapfogalmak",
    "source": "2. tétel • Előadás 25–30. dia • Gyakorlat.xlsx (2. munkalap)",
    "name": "Kiadás, Költség, Ráfordítás és a Raktári készletmérleg",
    "latex": "\\text{Záró anyagkészlet} = \\text{Nyitó anyagkészlet} + \\text{Beszerzés} - \\text{Felhasználás (Anyagköltség)}",
    "altLatex": [
      "\\text{Értékesített késztermék önköltsége (Ráfordítás)} = \\text{Nyitó KT} + \\text{Termelési önköltség} - \\text{Záró KT}"
    ],
    "variables": [
      {
        "sym": "Kiadás",
        "desc": "Fizetési eszköz (pénz) vagy naturális készlet kiáramlása a vállalkozásból",
        "unit": "Ft"
      },
      {
        "sym": "Költség",
        "desc": "A termelési/szolgáltatási tevékenység érdekében felhasznált erőforrások pénzértéke",
        "unit": "Ft"
      },
      {
        "sym": "Ráfordítás",
        "desc": "Az adott időszak eredményét terhelő (értékesített teljesítményekhez kapcsolódó vagy egyéb/pénzügyi) tétel",
        "unit": "Ft"
      }
    ],
    "whatIsIt": "A vezetői és pénzügyi számvitel három legfontosabb alapfogalmának (kiadás, költség, ráfordítás) elhatárolása és a raktári készletmozgások mérlegszerű egyenlete.",
    "whatWeCalculate": "Azt határozzuk meg, hogy egy gazdasági esemény mikor okoz pénzkiadást (kifizetéskor), mikor válik költséggé (amikor az erőforrást a termelésben felhasználjuk), és mikor jelenik meg ráfordításként (amikor a terméket értékesítjük).",
    "whyAndHow": "Azért elengedhetetlen, mert nem minden kiadás költség (pl. hiteltörlesztés, osztalékfizetés, raktárra vásárolt alapanyag), és nem minden ráfordítás költség (pl. fizetett kamat, káresemény, ELÁBÉ). A vezetői számvitel fókuszában a szigorúan vett termelési költségek állnak.",
    "benchmark": "Pénzfelvétel bankból, osztalékfizetés, raktári anyagvásárlás: NEM költség és NEM ráfordítás!",
    "excelFormula": "Felhasználás (Anyagköltség) = Nyitó készlet + Beszerzés - Záró készlet"
  },
  {
    "id": "vsz-04",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "1–2. tétel: Beszámoló és Költségalapfogalmak",
    "source": "2. tétel • Előadás 48–50. dia",
    "name": "Költségek dinamikus viszonyszáma és Költségmegoszlási viszonyszám",
    "latex": "D_K = \\frac{K_1}{K_0} \\times 100\\% \\qquad \\text{és} \\qquad M_i = \\frac{K_i}{\\sum_{i=1}^{n} K_i} \\times 100\\%",
    "altLatex": [
      "\\Delta K = K_1 - K_0, \\qquad \\sum_{i=1}^{n} M_i = 100\\%"
    ],
    "variables": [
      {
        "sym": "D_K",
        "desc": "Költségek dinamikus viszonyszáma (időbeli változás üteme)",
        "unit": "%"
      },
      {
        "sym": "K_0, K_1",
        "desc": "Bázisidőszaki (K_0) és tárgyidőszaki (K_1) költség",
        "unit": "eFt"
      },
      {
        "sym": "M_i",
        "desc": "Az i-edik költségnem vagy költségcsoport megoszlási viszonyszáma (részaránya)",
        "unit": "%"
      }
    ],
    "whatIsIt": "A költségelemzés két alapvető statisztikai mutatója, amelyek a költségek időbeli alakulását (dinamikáját) és belső szerkezetét (megoszlását) számszerűsítik.",
    "whatWeCalculate": "A dinamikus viszonyszámmal a tárgyévi költséget viszonyítjuk a bázisévihez, a megoszlási viszonyszámmal pedig az egyes költségnemek részarányát számítjuk ki az összes költségen belül.",
    "whyAndHow": "Segítségükkel azonnal látható, mely költségtételek növekedtek kiugró ütemben, illetve milyen a vállalkozás technológiai profilja (anyagigényes, élőmunka-igényes vagy eszközigényes termelés).",
    "benchmark": "D_K > 100%: költségnövekedés; D_K < 100%: költségcsökkenés.",
    "excelFormula": "=E17/D17 (Dinamikus viszonyszám) | =D23/SUM($D$23:$D$27) (Megoszlási viszonyszám)"
  },
  {
    "id": "vsz-05",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "3. tétel: Rugalmasság és Fedezeti elemzés",
    "source": "3. tétel • Előadás 51–56. dia",
    "name": "Összköltség és Fajlagos költség (Egységköltség) függvénye",
    "latex": "K(Q) = K_{\\text{fix}} + k_{\\text{vált}} \\cdot Q \\qquad \\text{és} \\qquad k(Q) = \\frac{K(Q)}{Q} = \\frac{K_{\\text{fix}}}{Q} + k_{\\text{vált}}",
    "altLatex": [
      "K_{\\text{fix}} = \\text{állandó}, \\qquad \\lim_{Q \\to \\infty} k(Q) = k_{\\text{vált}}"
    ],
    "variables": [
      {
        "sym": "K(Q)",
        "desc": "Teljes termelési költség Q volumen mellett",
        "unit": "eFt"
      },
      {
        "sym": "k(Q)",
        "desc": "Fajlagos költség (1 db termékre jutó átlagköltség)",
        "unit": "Ft/db"
      },
      {
        "sym": "K_{\\text{fix}}",
        "desc": "Időszaki állandó (fix) költségek összege",
        "unit": "eFt"
      },
      {
        "sym": "k_{\\text{vált}}",
        "desc": "Fajlagos proporcionális változó költség",
        "unit": "Ft/db"
      }
    ],
    "whatIsIt": "A termelési összköltség és az egy termékegységre jutó fajlagos költség (egységköltség) viselkedését leíró lineáris költségfüggvény.",
    "whatWeCalculate": "Az összköltséget a fix költség és a mennyiséggel arányos változó költség összegeként, az egységköltséget pedig az egy darabra jutó fix költség (K_fix/Q) és a fajlagos változó költség összegeként számítjuk ki.",
    "whyAndHow": "Megmagyarázza a méretgazdaságosság (economies of scale) alapelvét: a termelési volumen növelésével a fajlagos változó költség állandó marad, az egy darabra jutó fix költség viszont hiperbolikusan csökken, így javul a fajlagos önköltség.",
    "benchmark": "Volumennövekedéskor az összköltség nő, de a fajlagos egységköltség csökken!",
    "excelFormula": "Összköltség = Fix_ktg + Fajlagos_vált_ktg * Volumen | Egységköltség = Összköltség / Volumen"
  },
  {
    "id": "vsz-06",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "3. tétel: Rugalmasság és Fedezeti elemzés",
    "source": "3. tétel • Előadás 51–59. dia",
    "name": "Költségváltozási tényező (Reagálási fok / Reagálási ráta)",
    "latex": "r = \\frac{\\text{Költségváltozás \\%}}{\\text{Költségjellemző változása \\%}} = \\frac{\\frac{K_1 - K_0}{K_0} \\times 100}{\\frac{Q_1 - Q_0}{Q_0} \\times 100} = \\frac{\\Delta K / K_0}{\\Delta Q / Q_0}",
    "altLatex": [
      "\\Delta K_{\\%} = r \\cdot \\Delta Q_{\\%}, \\qquad K_1 = K_0 \\cdot (1 + r \\cdot \\Delta Q_{\\%})"
    ],
    "variables": [
      {
        "sym": "r",
        "desc": "Költségváltozási tényező (reagálási fok / költségrugalmasság)",
        "unit": "arány"
      },
      {
        "sym": "K_0, K_1",
        "desc": "Bázisidőszaki és tárgyidőszaki költség",
        "unit": "eFt"
      },
      {
        "sym": "Q_0, Q_1",
        "desc": "Bázisidőszaki és tárgyidőszaki termelési volumen (költségjellemző)",
        "unit": "db"
      }
    ],
    "whatIsIt": "A rugalmasságon alapuló költségelemzés központi mutatója, amely a költségek termelési volumenre (költségjellemzőre) való érzékenységét méri.",
    "whatWeCalculate": "Azt számoljuk ki, hogy a termelési volumen (költségjellemző) 1%-os változása hány százalékos változást idéz elő a vizsgált költség összegében.",
    "whyAndHow": "A reagálási fok értéke alapján soroljuk be a költségeket állandó (fix) és különböző változó (proporcionális, degresszív, progresszív, regresszív) kategóriákba, ami a költségtervezés és a fedezetszámítás alapfeltétele.",
    "benchmark": "r = 0: fix; 0 < r < 1: degresszív; r = 1: proporcionális (lineáris); r > 1: progresszív; r < 0: regresszív költség.",
    "excelFormula": "=((K1-K0)/K0)/((Q1-Q0)/Q0)"
  },
  {
    "id": "vsz-07",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "3. tétel: Rugalmasság és Fedezeti elemzés",
    "source": "3. tétel • Előadás 60–63. dia • Gyakorlat.xlsx (4. és 5. munkalap)",
    "name": "Átlagos reagálási fok, Redukált változó és Redukált fix költség",
    "latex": "\\bar{r} = \\frac{\\sum_{i=1}^{n} (K_i \\cdot r_i)}{\\sum_{i=1}^{n} K_i}, \\qquad K_{\\text{red, vált}} = \\sum_{i=1}^{n} (K_i \\cdot r_i) = K_{\\text{össz}} \\cdot \\bar{r}, \\qquad K_{\\text{red, fix}} = K_{\\text{össz}} - K_{\\text{red, vált}}",
    "altLatex": [
      "K_{\\text{red, fix}} = K_{\\text{össz}} \\cdot (1 - \\bar{r}) = \\sum_{i=1}^{n} K_i \\cdot (1 - r_i)"
    ],
    "variables": [
      {
        "sym": "\\bar{r}",
        "desc": "A vállalat összes költségének súlyozott átlagos reagálási foka",
        "unit": "arány"
      },
      {
        "sym": "K_i, r_i",
        "desc": "Az i-edik költségcsoport összege (eFt) és egyedi reagálási rátája",
        "unit": "eFt, -"
      },
      {
        "sym": "K_{\\text{red, vált}}",
        "desc": "Redukált (proporcionálisra átszámított) változó költség",
        "unit": "eFt"
      },
      {
        "sym": "K_{\\text{red, fix}}",
        "desc": "Redukált állandó (fix) költség",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "A vegyes (degresszív és progresszív) költségeket tisztán lineárisan változó (proporcionális) és tisztán fix költségrészre szétbontó módszer.",
    "whatWeCalculate": "Minden költségtételt megszorzunk a saját reagálási rátájával (vagy az összköltséget az átlagos reagálási fokkal), így megkapjuk a redukált változó költséget; az összköltség és a redukált változó költség különbsége pedig a redukált fix költséget adja.",
    "whyAndHow": "Mivel a fedezeti pont és a fedezeti összegek számítása csak tisztán proporcionális és fix költségekkel végezhető el, a degresszív (0 < r < 1) és progresszív (r > 1) költségeket előbb redukálni kell.",
    "benchmark": "Proporcionálisnál r=1 (100% változó), fixnél r=0 (0% változó), degresszívnél (1-r) hányad a redukált fix költségbe kerül.",
    "excelFormula": "Redukált változó ktg = D7 + D8*D9 + D11*D12 | Redukált fix ktg = Összes ktg - Redukált változó ktg"
  },
  {
    "id": "vsz-08",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "3. tétel: Rugalmasság és Fedezeti elemzés",
    "source": "3. tétel • Gyakorlat.xlsx (5. és 6. munkalap)",
    "name": "Határköltség (Marginal Cost) és Degresszív költség előrejelzése",
    "latex": "k_{\\text{határ}} = \\frac{\\Delta K}{\\Delta Q} = \\frac{K_{\\text{red, vált}}}{Q} \\qquad \\text{és} \\qquad K_1 = K_0 \\cdot (1 + \\Delta Q_{\\%} \\cdot r)",
    "altLatex": [
      "\\Delta K_{\\%} = \\Delta Q_{\\%} \\cdot r \\quad (\\text{pl. } 25\\% \\times 75\\% = 18{,}75\\% \\text{ költségnövekedés})"
    ],
    "variables": [
      {
        "sym": "k_{\\text{határ}}",
        "desc": "Határköltség (egy pótlólagos termékegység előállításának többletköltsége)",
        "unit": "Ft/db"
      },
      {
        "sym": "K_{\\text{red, vált}}",
        "desc": "Redukált változó költség összege",
        "unit": "eFt"
      },
      {
        "sym": "Q",
        "desc": "Termelt és értékesített darabszám",
        "unit": "db"
      },
      {
        "sym": "\\Delta Q_{\\%}",
        "desc": "A kapacitás vagy termelési volumen százalékos bővülése",
        "unit": "%"
      }
    ],
    "whatIsIt": "A pótlólagos kibocsátási egység költségét (határköltséget), valamint a nem lineáris (degresszív) költségek kapacitásbővítéskori növekedését meghatározó képletpár.",
    "whatWeCalculate": "A határköltségnél az egy darabra jutó redukált változó költséget számítjuk ki; a degresszív költségvetítésnél pedig a volumennövekedés százalékát megszorozzuk a reagálási fokkal, és ezzel emeljük meg a bázisköltséget.",
    "whyAndHow": "Több telephely (pl. A és B üzem) összehasonlításakor a többletmennyiséget mindig az alacsonyabb határköltségű (magasabb fedezeti/eredményhányadú) üzemben érdemes gyártani. Kapacitásbővítésnél pedig elkerülhető vele a degresszív gépköltségek túltervezése.",
    "benchmark": "A pótlólagos termelést a kisebb határköltségű / magasabb eredményhányadú üzembe kell telepíteni.",
    "excelFormula": "=D24/D5*1000 (Határköltség Ft/db) | =D17*(1 + 25%*75%) (Növelt gépköltség)"
  },
  {
    "id": "vsz-09",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "3. tétel: Rugalmasság és Fedezeti elemzés",
    "source": "3. tétel • Előadás 57–64. dia • Gyakorlat.xlsx (3., 4., 5. munkalap)",
    "name": "Fedezeti összeg (F), Fedezeti hányad (FH) és Eredményhányad (EH)",
    "latex": "F = \\text{ÁB} - K_v = K_{\\text{fix}} + E, \\qquad \\text{FH} = \\frac{F}{\\text{ÁB}} = 1 - \\frac{K_v}{\\text{ÁB}}, \\qquad \\text{EH} = \\frac{E}{\\text{ÁB}}",
    "altLatex": [
      "f = p - k_v \\quad (\\text{fajlagos fedezet}), \\qquad \\text{FH} = \\frac{p - k_v}{p}, \\qquad E = F - K_{\\text{fix}} = \\text{ÁB} \\cdot \\text{FH} - K_{\\text{fix}}"
    ],
    "variables": [
      {
        "sym": "F",
        "desc": "Fedezeti összeg (Bruttó fedezet / Rezsibíró képesség)",
        "unit": "eFt"
      },
      {
        "sym": "FH",
        "desc": "Fedezeti hányad (Fedezeti összeg / Nettó árbevétel)",
        "unit": "%"
      },
      {
        "sym": "E, EH",
        "desc": "Üzemi eredmény (E = F - K_fix) és Eredményhányad (E / ÁB)",
        "unit": "eFt, %"
      },
      {
        "sym": "f",
        "desc": "Fajlagos fedezet (egységár - fajlagos változó költség = p - k_v)",
        "unit": "Ft/db"
      }
    ],
    "whatIsIt": "A fedezeti elemzés (CVP / ÁKVFN-struktúra) alapmutatói, amelyek megmutatják, mennyi összeg marad az árbevételből a változó költségek levonása után a fix költségek fedezésére és a nyereségre.",
    "whatWeCalculate": "Az árbevételből levonjuk a változó költségeket (ez a fedezeti összeg), majd elosztjuk az árbevétellel (ez a fedezeti hányad). A fedezeti összegből a fix költséget levonva kapjuk az üzemi eredményt.",
    "whyAndHow": "A fedezeti hányad megmutatja, hogy minden 100 Ft árbevételből hány Ft szolgál a fix költségek és az eredmény fedezetére; a fedezeti pont elérése után minden 1 Ft többletárbevétel a fedezeti hányaddal megegyező nyereséget hoz.",
    "benchmark": "Ha F > K_fix -> nyereséges (E > 0); ha F = K_fix -> nullszaldós (E = 0); ha F < K_fix -> veszteséges (E < 0).",
    "excelFormula": "Fedezet =C5-C14 | Fedezeti hányad =C17/C5 | Eredményhányad =C18/C5"
  },
  {
    "id": "vsz-10",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "3. tétel: Rugalmasság és Fedezeti elemzés",
    "source": "3. tétel • Előadás 57–64. dia • Gyakorlat.xlsx (4. és 5. munkalap)",
    "name": "Fedezeti pont (Kritikus pont) mennyiségben és értékben",
    "latex": "Q_{\\text{krit}} = \\frac{K_{\\text{fix}}}{p - k_v} = \\frac{K_{\\text{fix}}}{f}, \\qquad \\text{FP}_{\\text{érték}} = \\frac{K_{\\text{fix}}}{\\text{FH}} = \\frac{\\text{ÁB} \\cdot K_{\\text{fix}}}{F} = Q_{\\text{krit}} \\cdot p",
    "altLatex": [
      "\\text{FP}_{\\text{érték}} = \\text{ÁB} - \\left(\\text{ÁB} \\cdot \\frac{E}{F}\\right), \\qquad \\text{Biztonsági határ (BH)} = \\text{ÁB} - \\text{FP}_{\\text{érték}}"
    ],
    "variables": [
      {
        "sym": "Q_{\\text{krit}}",
        "desc": "Fedezeti pont természetes mértékegységben (kritikus darabszám)",
        "unit": "db"
      },
      {
        "sym": "\\text{FP}_{\\text{érték}}",
        "desc": "Fedezeti pont értékben (kritikus árbevétel, ahol E = 0)",
        "unit": "eFt"
      },
      {
        "sym": "K_{\\text{fix}}",
        "desc": "Állandó (vagy redukált fix) költségek összege",
        "unit": "eFt"
      },
      {
        "sym": "FH, f",
        "desc": "Fedezeti hányad (%) és egy darabra jutó fajlagos fedezet (Ft/db)",
        "unit": "%, Ft/db"
      }
    ],
    "whatIsIt": "Az a kritikus értékesítési mennyiség (Q_krit) vagy kritikus árbevétel (FP_érték), amelynél a vállalkozás árbevétele éppen fedezi az összes (változó és fix) költséget, így az eredmény pontosan nulla.",
    "whatWeCalculate": "A fix költséget elosztjuk az egy darabra jutó fajlagos fedezettel (mennyiségi fedezeti pont), illetve a fedezeti hányaddal (értékbeli fedezeti pont).",
    "whyAndHow": "A fedezeti pont a legfontosabb operatív kockázati mutató: megmutatja a nullszaldós működés minimális volumenét, a biztonsági határ pedig azt, hogy mennyivel eshet vissza az értékesítés anélkül, hogy a cég veszteségbe fordulna.",
    "benchmark": "Fedezeti pontban: Árbevétel = Összes költség, Fedezeti összeg = Fix költség, Üzemi eredmény = 0.",
    "excelFormula": "Fedezeti pont (érték) =D3*D11/D12 (Árbevétel * Fix ktg / Fedezet) vagy =K_fix / Fedezeti_hányad"
  },
  {
    "id": "vsz-11",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "3. tétel: Rugalmasság és Fedezeti elemzés",
    "source": "3. tétel • Gyakorlat.xlsx (3. és 4. munkalap – Napelem divízió)",
    "name": "Cél-eredményhányad elérése: A „Négy alapvető út” és az Erőkifejtés mutatói",
    "latex": "\\Delta E_{\\text{szüks}} = (\\text{EH}_{\\text{cél}} - \\text{EH}_0) \\cdot \\text{ÁB}_0, \\qquad \\text{ÁB}_{\\text{terv, vol}} = \\frac{K_{\\text{fix}, 0}}{\\text{FH}_0 - \\text{EH}_{\\text{cél}}}",
    "altLatex": [
      "1.\\ \\text{Fix ktg. csökkentés: } e_{\\text{fix}} = \\frac{\\Delta E_{\\text{szüks}}}{K_{\\text{fix},0}}, \\qquad 2.\\ \\text{Változó ktg. csökkentés: } e_{\\text{vált}} = \\frac{\\Delta E_{\\text{szüks}}}{K_{v,0}}",
      "3.\\ \\text{Áremelés: } e_{\\text{ár}} = \\frac{\\Delta E_{\\text{szüks}}}{\\text{ÁB}_0} \\ \\left(\\text{vagy } \\text{ÁB}_{\\text{új}} = \\frac{K_v + K_{\\text{fix}}}{1 - \\text{EH}_{\\text{cél}}}\\right), \\qquad 4.\\ \\text{Volumenbővítés: } e_{\\text{vol}} = \\frac{\\text{ÁB}_{\\text{terv, vol}} - \\text{ÁB}_0}{\\text{ÁB}_0}"
    ],
    "variables": [
      {
        "sym": "\\text{EH}_0, \\text{EH}_{\\text{cél}}",
        "desc": "Jelenlegi és megcélzott árbevétel-arányos eredményhányad",
        "unit": "%"
      },
      {
        "sym": "\\Delta E_{\\text{szüks}}",
        "desc": "Hiányzó (szükséges további) eredmény összege",
        "unit": "eFt"
      },
      {
        "sym": "e_{\\text{fix}}, e_{\\text{vált}}, e_{\\text{ár}}, e_{\\text{vol}}",
        "desc": "Az egyes cselekvési utakhoz szükséges relatív változtatás (erőkifejtés)",
        "unit": "%"
      },
      {
        "sym": "\\text{ÁB}_{\\text{terv, vol}}",
        "desc": "Volumenbővítéssel elérhető cél-eredményhányadhoz szükséges tervezett árbevétel",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "Olyan döntéstámogatási modell, amely számszerűsíti, hogyan érheti el egy alulteljesítő üzletág a kitűzött eredményhányad-célt (pl. 10%-ot) négy tiszta stratégiai úton.",
    "whatWeCalculate": "Meghatározzuk a hiányzó eredményhányadot és eredménytömeget, majd kiszámítjuk, hogy hány százalékos fixköltség-csökkentés, változóköltség-csökkentés, áremelés vagy volumenbővítés (erőkifejtés) szükséges külön-külön a cél eléréséhez.",
    "whyAndHow": "Volumenbővítésnél azért kell a K_fix / (FH - EH_cél) képletet alkalmazni, mert a többletvolumen előállításakor a változó költségek is arányosan nőnek! Az erőkifejtési százalékok összehasonlításával a vezetés kiválaszthatja a legkisebb ellenállással vagy piaci kockázattal járó beavatkozást.",
    "benchmark": "Minél kisebb az erőkifejtés %-os értéke, annál kisebb relatív változtatással érhető el a cél.",
    "excelFormula": "Volumenbővítés tervezett ÁB: =C43/(C44-C21) | Erőkifejtés: =(C45-C42)/C42"
  },
  {
    "id": "vsz-12",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "3. tétel: Rugalmasság és Fedezeti elemzés",
    "source": "3. tétel • Gyakorlat.xlsx (3. munkalap – Szélerőmű divízió)",
    "name": "Divízió toleranciája és Mozgástér-mutatók (Céltúlteljesítés esetén)",
    "latex": "T_{\\text{arányos}} = \\text{EH}_0 - \\text{EH}_{\\text{cél}}, \\qquad T_{\\text{nom}} = T_{\\text{arányos}} \\cdot \\text{ÁB}_0",
    "altLatex": [
      "M_{\\text{fix}} = \\frac{T_{\\text{nom}}}{K_{\\text{fix}, 0}}, \\qquad M_{\\text{vált}} = \\frac{T_{\\text{nom}}}{K_{v, 0}}, \\qquad M_{\\text{ár}} = -\\frac{T_{\\text{nom}}}{\\text{ÁB}_0} = -T_{\\text{arányos}}"
    ],
    "variables": [
      {
        "sym": "T_{\\text{arányos}}",
        "desc": "Arányos jövedelmezőségi tartalék (jelenlegi EH - célérték EH)",
        "unit": "%"
      },
      {
        "sym": "T_{\\text{nom}}",
        "desc": "Nominális eredménytartalék (forintban kifejezett puffer)",
        "unit": "eFt"
      },
      {
        "sym": "M_{\\text{fix}}, M_{\\text{vált}}, M_{\\text{ár}}",
        "desc": "Fix költség, változó költség és árcsökkentés %-os mozgástere",
        "unit": "%"
      }
    ],
    "whatIsIt": "Érzékenységvizsgálati mutatócsoport olyan üzletágakra, amelyek jelenlegi eredményhányada már meghaladja a vezetőség által elvárt célértéket.",
    "whatWeCalculate": "Kiszámítjuk a célérték feletti arányos (%) és nominális (eFt) eredménytartalékot, majd meghatározzuk, hogy ennek terhére legfeljebb hány százalékkal nőhet a fix vagy a változó költség, illetve mennyivel csökkenhet az ár.",
    "whyAndHow": "Segítségével a menedzsment pontosan látja a divízió kockázattűrő képességét (toleranciáját): milyen mértékű költségdrágulást vagy árengedményt visel el az üzletág anélkül, hogy a jövedelmezősége az elvárt küszöbérték alá esne.",
    "benchmark": "Ha EH_0 > EH_cél, a nominális tartalék (T_nom) adja a maximálisan elviselhető költségnövekedést vagy árbevétel-kiesést.",
    "excelFormula": "Nominális tartalék =D53*D5 | Fix ktg mozgástér =D54/D15 | Változó ktg mozgástér =D54/D14"
  },
  {
    "id": "vsz-13",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "3. tétel: Rugalmasság és Fedezeti elemzés",
    "source": "3. és 9. tétel • Előadás 35., 159–161. dia • Gyakorlat.xlsx (6. munkalap)",
    "name": "Szűk keresztmetszet: Fajlagos gépóra fedezet és Optimális termelési terv",
    "latex": "f_i = p_i - k_{\\text{kalk}, i}, \\qquad f_{\\text{gó}, i} = \\frac{f_i}{g_i} = \\frac{p_i - k_{\\text{kalk}, i}}{g_i}",
    "altLatex": [
      "k_{\\text{gó}} = \\frac{K_{\\text{gép}, 0} \\cdot (1 + \\Delta \\text{Kap}_{\\%} \\cdot r)}{\\text{Kap}_0 \\cdot (1 + \\Delta \\text{Kap}_{\\%})}, \\qquad k_{\\text{gép}, i} = k_{\\text{gó}} \\cdot g_i",
      "\\text{GÓ}_{\\text{szabad}} = \\text{Kap}_{\\text{teljes}} - \\sum_{i=1}^{n} (Q_{\\text{rend}, i} \\cdot g_i), \\qquad Q_{\\text{maradék}} = \\left\\lfloor \\frac{\\text{GÓ}_{\\text{maradék}}}{g_{\\text{utolsó}}} \\right\\rfloor"
    ],
    "variables": [
      {
        "sym": "f_i",
        "desc": "Az i-edik termék darabra jutó fajlagos fedezete (Eladási ár - Kalkulált közvetlen ktg.)",
        "unit": "Ft/db"
      },
      {
        "sym": "g_i",
        "desc": "Az i-edik termék fajlagos normaóra-igénye (szűk keresztmetszet igénybevétele)",
        "unit": "gépóra/db"
      },
      {
        "sym": "f_{\\text{gó}, i}",
        "desc": "Fajlagos gépóra fedezet (1 gépórára jutó fedezet)",
        "unit": "Ft/gépóra"
      },
      {
        "sym": "k_{\\text{gó}}",
        "desc": "Egy gépóra kalkulált költsége a növelt kapacitás mellett",
        "unit": "Ft/gépóra"
      }
    ],
    "whatIsIt": "Kapacitáskorlátos (szűk keresztmetszetes) termelésoptimalizálási eljárás, amely maximalizálja a vállalat által elérhető összes fedezetet.",
    "whatWeCalculate": "Először meghatározzuk az 1 gépóra költségét és a termékek kalkulált közvetlen önköltségét, majd a darabra jutó fajlagos fedezetet (f_i) elosztjuk a termék gépóra-igényével (g_i), így megkapjuk a fajlagos gépóra fedezetet.",
    "whyAndHow": "Szűk keresztmetszet esetén a jövedelmezőségi rangsort SOHA nem a darabra jutó fedezet, hanem a szűk keresztmetszet egységére (1 gépórára) jutó fedezet alapján kell felállítani! Először legyártjuk a kötelező rendeléseket, majd a szabad kapacitást a rangsor szerinti 1., 2., 3. termékkel töltjük fel a piaci maximumig.",
    "benchmark": "Rangsorolási szabály szűk keresztmetszetnél: a magasabb Ft/gépóra (f_gó) értékű termék élvez prioritást!",
    "excelFormula": "Fajlagos gépóra fedezet =D26/D14 | Utolsó termék darabszáma =ROUNDDOWN(I39/F14; 0)"
  },
  {
    "id": "vsz-14",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "4. tétel: Termelési érték és Eltéréselemzés",
    "source": "4. tétel • Előadás 105–109. dia • Gyakorlat.xlsx (7. munkalap)",
    "name": "Termelési költség és Bruttó termelési érték (BTÉ) levezetése",
    "latex": "K_{\\text{term}} = \\text{ÉKÖK} + \\text{ÉKettK} - \\text{ELÁBÉ} - \\text{EKözvSz} \\pm \\text{STKÁV} + \\text{SEEAÉ}",
    "altLatex": [
      "\\text{BTÉ} = \\text{ÁB} - \\text{ELÁBÉ} - \\text{EKözvSz} \\pm \\text{STKÁV} + \\text{SEEAÉ}"
    ],
    "variables": [
      {
        "sym": "K_{\\text{term}}",
        "desc": "Tárgyidőszaki összes termelési költség (5. számlaosztály összesen)",
        "unit": "eFt"
      },
      {
        "sym": "BTÉ",
        "desc": "Bruttó termelési érték (saját termelő/szolgáltató tevékenység teljes hozama)",
        "unit": "eFt"
      },
      {
        "sym": "ÉKÖK, ÉKettK",
        "desc": "Értékesítés közvetlen (II.) és közvetett (IV.) költségei",
        "unit": "eFt"
      },
      {
        "sym": "ELÁBÉ, EKözvSz",
        "desc": "Eladott áruk beszerzési értéke (04.) és Eladott (közvetített) szolgáltatások értéke (05.)",
        "unit": "eFt"
      },
      {
        "sym": "STKÁV, SEEAÉ",
        "desc": "Saját termelésű készletek állományváltozása és Saját előállítású eszközök aktivált értéke",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "A forgalmi költség eljárású eredménykimutatás adataiból a tárgyidőszaki teljes termelési költséget és a bruttó termelési értéket visszavezető alapösszefüggés.",
    "whatWeCalculate": "Az értékesítési költségekből (illetve az árbevételből) levonjuk a változatlan formában továbbadott vásárolt tételeket (ELÁBÉ, közvetített szolgáltatások), majd hozzáadjuk az aktivált saját teljesítményeket (±STKÁV + SEEAÉ).",
    "whyAndHow": "Azért van rá szükség, mert a forgalmi költség eljárású eredménykimutatás csak az értékesített termékek költségeit mutatja, míg a költségnemek és a nettó termelési értékek meghatározásához a tárgyévben ténylegesen felmerült összes termelési költségre és bruttó kibocsátásra van szükség.",
    "benchmark": "BTÉ halmozódást tartalmaz (magában foglalja a vásárolt anyagok, szolgáltatások és az ÉCS értékét is).",
    "excelFormula": "Termelési ktg =D9+D14-D7-D8+D32+D33 | Bruttó termelési érték =D5-D8-D7+D32+D33"
  },
  {
    "id": "vsz-15",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "4. tétel: Termelési érték és Eltéréselemzés",
    "source": "4. tétel • Előadás 105–108. dia",
    "name": "Feldolgozóipari bruttó típusú termelési érték piramis (FKÉ, BFTÉ, TFTÉ, BTÉ)",
    "latex": "\\text{FKÉ} = \\text{ÁB}_{\\text{KT}} \\pm \\Delta\\text{KT} + \\text{ÁB}_{\\text{FKT}} + \\text{SEEAÉ}",
    "altLatex": [
      "\\text{BFTÉ} = \\text{FKÉ} + \\text{Számlázott feldolgozóipari szolgáltatások nettó ÁB}",
      "\\text{TFTÉ} = \\text{BFTÉ} \\pm \\Delta(\\text{Befejezetlen és félkésztermék})",
      "\\text{BTÉ} = \\text{TFTÉ} + \\text{Egyéb termelő hozam} + \\text{Szolg. ÁB} + (\\text{ÁB}_{\\text{ker}} - \\text{ELÁBÉ}) + \\text{Egyéb ÁB}"
    ],
    "variables": [
      {
        "sym": "FKÉ",
        "desc": "Feldolgozóipari késztermelés (készárutermelés) értéke",
        "unit": "eFt"
      },
      {
        "sym": "BFTÉ",
        "desc": "Befejezett feldolgozóipari termelés értéke",
        "unit": "eFt"
      },
      {
        "sym": "TFTÉ",
        "desc": "Teljes feldolgozóipari termelési érték",
        "unit": "eFt"
      },
      {
        "sym": "BTÉ",
        "desc": "Bruttó feldolgozóipari termelési érték (kereskedelmi árréssel és egyéb hozamokkal)",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "Az ipari/feldolgozóipari vállalkozások kibocsátását a készültségi fok és a tevékenységi kör bővülése szerint egymásra építő négyfokozatú mutatórendszer.",
    "whatWeCalculate": "A késztermelés értékéhez (FKÉ) hozzáadjuk az ipari szolgáltatásokat (BFTÉ), majd a befejezetlen/félkésztermékek állományváltozását (TFTÉ), végül a nem ipari tevékenységek hozamát és a kereskedelmi árrést (BTÉ).",
    "whyAndHow": "Segítségével pontosan elkülöníthető a már értékesítésre kész (befejezett) ipari kibocsátás a még gyártásban lévő (befejezetlen) teljesítményektől, valamint az alaptevékenységen kívüli kereskedelmi/szolgáltató tevékenységektől.",
    "benchmark": "FKÉ -> BFTÉ -> TFTÉ -> BTÉ (egymásra épülő piramis).",
    "excelFormula": "Kereskedelmi árrés = Kereskedelmi ÁB - ELÁBÉ"
  },
  {
    "id": "vsz-16",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "4. tétel: Termelési érték és Eltéréselemzés",
    "source": "4. tétel • Előadás 105–110. dia • Gyakorlat.xlsx (7. munkalap)",
    "name": "Anyagmentes termelési érték (AMTÉ), Nettó termelési érték (NTÉ) és Hozzáadott érték (HÉ)",
    "latex": "\\text{AMTÉ} = \\text{BTÉ} - K_{\\text{anyag}} - K_{\\text{anyagjell. szolg.}}, \\qquad \\text{NTÉ} = \\text{AMTÉ} - K_{\\text{ÉCS}}",
    "altLatex": [
      "K_{\\text{anyag}} = K_{\\text{term}} \\cdot m_{\\text{anyag}}, \\qquad K_{\\text{anyagjell. szolg.}} = K_{\\text{term}} \\cdot m_{\\text{igénybe vett}} \\cdot \\alpha_{\\text{anyagjell.}}",
      "\\text{Hozzáadott érték (HÉ)} = \\text{BTÉ} - (K_{\\text{anyag}} + K_{\\text{igénybe vett szolg.}} + K_{\\text{egyéb szolg.}}) = \\text{SZJR} + \\text{ÉCS} + \\text{ÜTE}"
    ],
    "variables": [
      {
        "sym": "AMTÉ",
        "desc": "Anyagmentes termelési érték",
        "unit": "eFt"
      },
      {
        "sym": "NTÉ",
        "desc": "Nettó termelési érték (újonnan létrehozott érték)",
        "unit": "eFt"
      },
      {
        "sym": "HÉ",
        "desc": "Bruttó hozzáadott érték (Value Added)",
        "unit": "eFt"
      },
      {
        "sym": "\\alpha_{\\text{anyagjell.}}",
        "desc": "Az igénybe vett szolgáltatásokon belül az anyagjellegű szolgáltatások aránya",
        "unit": "%"
      }
    ],
    "whatIsIt": "A vállalkozások közötti halmozódást (külső anyag- és szolgáltatásfelhasználást, illetve eszközfelélést) kiszűrő, saját értékteremtést mérő mutatószámok.",
    "whatWeCalculate": "Az AMTÉ-nél a bruttó termelési értékből levonjuk az anyagköltséget és az igénybe vett szolgáltatások anyagjellegű részét; az NTÉ-nél ebből továbbá levonjuk az értékcsökkenési leírást (ÉCS) is; a Hozzáadott értéknél pedig minden vásárolt anyagjellegű költséget levonunk.",
    "whyAndHow": "Azért kulcsfontosságú, mert a bruttó termelési értéket egy drága alapanyag is felduzzaszthatja saját munka nélkül; a nettó típusú mutatók viszont pontosan azt az új értéket mutatják, amelyet maga a vállalat hozott létre.",
    "benchmark": "Figyelem: nem minden igénybe vett szolgáltatás anyagjellegű, ezért az AMTÉ-nél csak az anyagjellegű hányadot (α) szabad levonni!",
    "excelFormula": "AMTÉ =D38-D39-D40 | Anyagjell. szolg. =D24*D30*D37 | NTÉ =D41-D42"
  },
  {
    "id": "vsz-17",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "4. tétel: Termelési érték és Eltéréselemzés",
    "source": "4. tétel • Előadás 111–113. dia • Gyakorlat.xlsx (11. munkalap)",
    "name": "Árbevétel és Termelési érték indexszámításos elemzése (Ár-, Volumen- és Értékindex)",
    "latex": "I_{\\text{É}} = \\frac{\\sum q_1 p_1}{\\sum q_0 p_0}, \\qquad I_{\\text{Á}} = \\frac{\\sum q_1 p_1}{\\sum q_1 p_0}, \\qquad I_{\\text{V}} = \\frac{\\sum q_1 p_0}{\\sum q_0 p_0}, \\qquad I_{\\text{É}} = I_{\\text{Á}} \\cdot I_{\\text{V}}",
    "altLatex": [
      "K_{\\text{É}} = \\sum q_1 p_1 - \\sum q_0 p_0 = K_{\\text{Á}} + K_{\\text{V}}",
      "K_{\\text{Á}} = \\sum q_1 p_1 - \\sum q_1 p_0 \\quad (\\text{Árváltozás hatása}), \\qquad K_{\\text{V}} = \\sum q_1 p_0 - \\sum q_0 p_0 \\quad (\\text{Volumenváltozás hatása})"
    ],
    "variables": [
      {
        "sym": "q_0, q_1",
        "desc": "Bázisévi és tárgyévi értékesített/termelt mennyiség",
        "unit": "db"
      },
      {
        "sym": "p_0, p_1",
        "desc": "Bázisévi és tárgyévi nettó egységár",
        "unit": "eFt/db"
      },
      {
        "sym": "\\sum q_1 p_0",
        "desc": "Változatlan áras árbevétel (tárgyévi mennyiség bázisévi áron)",
        "unit": "eFt"
      },
      {
        "sym": "K_{\\text{É}}, K_{\\text{Á}}, K_{\\text{V}}",
        "desc": "Teljes értékváltozás, árváltozás hatása és volumenváltozás hatása forintban",
        "unit": "eFt"
      },
      {
        "sym": "I_{\\text{É}}, I_{\\text{Á}}, I_{\\text{V}}",
        "desc": "Értékindex, Árindex (Paasche) és Volumenindex (Laspeyres)",
        "unit": "arány / %"
      }
    ],
    "whatIsIt": "Többtermékes vállalkozások árbevétel- vagy termelésiérték-változását árváltozási és mennyiségi (volumen-) hatásra szétválasztó statisztikai-számviteli módszer.",
    "whatWeCalculate": "Kiszámítjuk a bázisévi (q0*p0), a tárgyévi (q1*p1) és a segédadatként szolgáló változatlan áras (q1*p0) árbevételt, majd ezek különbségeként az abszolút hatásokat (K_Á, K_V), hányadosaként pedig az ár-, volumen- és értékindexet.",
    "whyAndHow": "Segítségével tisztán kimutatható a forgalom belső szerkezete: vajon a növekvő árbevétel mögött valódi mennyiségi bővülés (I_V > 1) áll, vagy csupán az áremelés (I_Á > 1) fedte el az értékesített darabszám visszaesését.",
    "benchmark": "Ellenőrzési szabályok: K_Á + K_V = K_É (összeg) és I_Á * I_V = I_É (szorzat).",
    "excelFormula": "Árváltozás hatása =J6-I6 (q1p1-q1p0) | Volumenváltozás hatása =I6-H6 (q1p0-q0p0) | Árindex =J9/I9 | Volumenindex =I9/H9"
  },
  {
    "id": "vsz-18",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "4. tétel: Termelési érték és Eltéréselemzés",
    "source": "4. tétel • Előadás 114–121. dia • Döntéstámogatás 60. dia",
    "name": "Kumulatív eltérésfelbontás: Láncbehelyettesítés, Abszolút és Százalékos különbözetek",
    "latex": "T = a \\cdot b \\cdot c \\cdot d \\implies \\Delta T = T_1 - T_0 = \\Delta T_a + \\Delta T_b + \\Delta T_c + \\Delta T_d",
    "altLatex": [
      "\\Delta T_a = (a_1 - a_0) \\cdot b_0 c_0 d_0, \\qquad \\Delta T_b = a_1 \\cdot (b_1 - b_0) \\cdot c_0 d_0",
      "\\Delta T_c = a_1 b_1 \\cdot (c_1 - c_0) \\cdot d_0, \\qquad \\Delta T_d = a_1 b_1 c_1 \\cdot (d_1 - d_0)",
      "\\text{Háromtényezős (Kapacitás}\\cdot\\text{Hozam}\\cdot\\text{Ár): } \\Delta T_k = (k_1-k_0)q_0p_0,\\ \\Delta T_q = k_1(q_1-q_0)p_0,\\ \\Delta T_p = k_1q_1(p_1-p_0)"
    ],
    "variables": [
      {
        "sym": "a, b, c, d",
        "desc": "Hatótényezők (pl. a: Létszám, b: Nap/fő, c: Óra/nap, d: 1 órára jutó termelési érték)",
        "unit": "vegyes"
      },
      {
        "sym": "0, 1",
        "desc": "Alsó indexek: 0 = terv (vagy bázis), 1 = tény (vagy tárgy)",
        "unit": "-"
      },
      {
        "sym": "\\Delta T_a, \\dots, \\Delta T_d",
        "desc": "Az egyes hatótényezők változásának tulajdonítható részelemzési értékhatás",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "Szorzatalakban felírható gazdasági mutatók (pl. termelési érték = létszám × munkanapok × munkaórák × órateljesítmény) terv–tény eltérésének tényezőkre bontási eljárásai.",
    "whatWeCalculate": "A láncbehelyettesítésnél (és a vele azonos eredményt adó abszolút és százalékos különbözetek módszerénél) egymás után cseréljük le a tényezők tervértékét tényértékre, és minden lépésben kiszámítjuk az adott tényező önálló eredményhatását.",
    "whyAndHow": "Módszertani alapszabály, hogy a tényezők sorrendje kötött: mindig a mennyiségi (extenzív) tényezőtől (pl. létszám, kapacitás) kell haladni a minőségi (intenzív) tényező (pl. órateljesítmény, egységár) felé, mert a vegyes hatást a kumulatív módszerek a későbbi tényezőhöz rendelik.",
    "benchmark": "Sorrendi szabály: Extenzív (mennyiségi) tényezők elöl -> Intenzív (minőségi / ár) tényezők hátul.",
    "excelFormula": "Részhatások összege = Teljes eltérés (T1 - T0)"
  },
  {
    "id": "vsz-19",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "5–7. tétel: Önköltségszámítás és Hagyományos kalkuláció",
    "source": "5. tétel • Előadás 69–76. dia • Gyakorlat.xlsx (9–10. munkalap)",
    "name": "Önköltség-kategóriák hierarchiája és a Készletváltozás (STKÁV) eredményhatása",
    "latex": "\\text{Szűkített önköltség} = \\text{Közvetlen költségek} + \\text{Felosztott üzemi általános költségek}",
    "altLatex": [
      "\\text{Teljes önköltség} = \\text{Szűkített önköltség} + \\text{Felosztott vállalati általános költségek (ért., ig., egyéb)}",
      "\\text{STKÁV} = (Q_{\\text{termelt}} - Q_{\\text{értékesített}}) \\cdot k_{\\text{ön}}"
    ],
    "variables": [
      {
        "sym": "Technológiai ÖK",
        "desc": "Közvetlen költségek + Gyártási költség változó része (pl. gépköltség)",
        "unit": "Ft/db"
      },
      {
        "sym": "Szűkített ÖK",
        "desc": "Közvetlen önköltség I. (közvetlen ktg.) + Közvetlen önköltség II. (felosztott üzemi ált. ktg.)",
        "unit": "Ft/db"
      },
      {
        "sym": "Teljes ÖK",
        "desc": "Szűkített önköltség + Felosztott értékesítési, igazgatási és egyéb általános költségek",
        "unit": "Ft/db"
      },
      {
        "sym": "STKÁV",
        "desc": "Saját termelésű készletek állományváltozása",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "Az egy termékegységre felosztott költségek tartalma szerinti önköltség-kategóriák rendszere és azok hatása a vállalkozás kimutatott üzemi eredményére.",
    "whatWeCalculate": "A közvetlen anyag- és bérköltségekhez fokozatosan hozzáadjuk az üzemi szintű általános költségeket (szűkített önköltség – ez a számviteli törvény szerinti mérlegértékelési felső határ!), majd a vezetői döntésekhez a vállalati szintű általános költségeket is (teljes önköltség).",
    "whyAndHow": "Ha a termelt és az értékesített mennyiség eltér, a választott önköltség-kategória megváltoztatja az eredményt: készletnövekedéskor (STKÁV > 0) a tágabb önköltség magasabb eredményt, készletcsökkenéskor (STKÁV < 0) pedig a szűkebb önköltség magasabb eredményt mutat ki.",
    "benchmark": "STKÁV = 0: nincs eredményhatás; STKÁV > 0: tágabb ÖK -> nagyobb eredmény; STKÁV < 0: szűkebb ÖK -> nagyobb eredmény.",
    "excelFormula": "Szűkített önköltség =D16+D17+D19 | Teljes önköltség =D26+D21"
  },
  {
    "id": "vsz-20",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "5–7. tétel: Önköltségszámítás és Hagyományos kalkuláció",
    "source": "6. tétel • Előadás 80–84. dia • Gyakorlat.xlsx (8. és 9. munkalap)",
    "name": "Egyszerű és Egyenértékszámos osztókalkuláció (Vezértermék-módszer)",
    "latex": "k_{\\text{egyszerű}} = \\frac{K_{\\text{összes}}}{\\sum Q_i}, \\qquad Q_v = \\sum_{i=1}^{n} (Q_i \\cdot e_i), \\qquad k_v = \\frac{K_{\\text{kalk}}}{Q_v}, \\qquad k_i = k_v \\cdot e_i",
    "altLatex": [
      "\\Delta \\text{BT} = \\text{BT}_{\\text{záró}} - \\text{BT}_{\\text{nyitó}}, \\qquad K_{\\text{kalk}} = -\\Delta \\text{BT} + K_{\\text{tárgyidőszaki közv.}} - \\text{Hulladék} + K_{\\text{felosztott üzemi}}"
    ],
    "variables": [
      {
        "sym": "Q_i, e_i",
        "desc": "Az i-edik termék elkészült darabszáma és egyenértékszáma (vezérterméknél e = 1)",
        "unit": "db, -"
      },
      {
        "sym": "Q_v",
        "desc": "Vezértermékre átszámított összes termelési mennyiség",
        "unit": "vezértermék db"
      },
      {
        "sym": "K_{\\text{kalk}}",
        "desc": "Befejezetlen termelés állományváltozásával és hulladékkal korrigált felosztandó költség",
        "unit": "eFt"
      },
      {
        "sym": "k_v, k_i",
        "desc": "Egy vezértermék önköltsége (k_v) és az i-edik termék kalkulált önköltsége (k_i)",
        "unit": "eFt/db"
      }
    ],
    "whatIsIt": "Homogén tömegtermelésnél (egyszerű), illetve rokon technológiájú termékváltozatok sorozatgyártásánál (egyenértékszámos) alkalmazott önköltségszámítási módszer.",
    "whatWeCalculate": "Az egyenértékszámos kalkulációnál minden termék mennyiségét átszámítjuk vezértermék-egységre (Q_v = Σ Q_i*e_i), kiszámítjuk a befejezetlen termeléssel és hulladékkal korrigált közvetlen költségből az 1 vezértermékre jutó önköltséget (k_v), majd azt visszaszorozzuk az egyes termékek egyenértékszámával.",
    "whyAndHow": "Amikor a termékek közös alapanyagból, hasonló munkafolyamatokkal készülnek, de méretükben vagy normaigényükben arányosan eltérnek, az egyenértékszámok biztosítják az erőforrás-igényességgel arányos, igazságos költségterhelést.",
    "benchmark": "A vezértermék egyenértékszáma mindig e_v = 1,0. Ellenőrzés: Σ (Q_i * k_i) = K_kalk.",
    "excelFormula": "Vezértermék db =C4*C5+D4*D5+E4*E5 | Közvetlen ktg =-C18+C11-C12+C13 | Vezértermék ÖK =C19/C17 | Termék ÖK =C5*$C$20"
  },
  {
    "id": "vsz-21",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "5–7. tétel: Önköltségszámítás és Hagyományos kalkuláció",
    "source": "6. tétel • Előadás 85–92. dia • Gyakorlat.xlsx (9. munkalap)",
    "name": "Pótlékoló kalkuláció (Pótlékkulcs és Általános költség felosztása)",
    "latex": "p_{\\text{kulcs}} = \\frac{K_{\\text{általános}}}{\\sum_{i=1}^{n} V_i}, \\qquad K_{\\text{ált}, i} = V_i \\cdot p_{\\text{kulcs}}, \\qquad k_{\\text{ált}, i} = \\frac{K_{\\text{ált}, i}}{Q_i}",
    "altLatex": [
      "\\text{Ha } V_i = Q_i \\cdot v_i \\text{ (pl. munkaóra/db):} \\quad p_{\\text{kulcs}} = \\frac{K_{\\text{általános}}}{\\sum (Q_i \\cdot v_i)}, \\qquad k_{\\text{ált}, i} = p_{\\text{kulcs}} \\cdot v_i"
    ],
    "variables": [
      {
        "sym": "p_{\\text{kulcs}}",
        "desc": "Pótlékkulcs (egységnyi vetítési alapra jutó általános költség)",
        "unit": "Ft/egység vagy %"
      },
      {
        "sym": "K_{\\text{általános}}",
        "desc": "Felosztandó közvetett (üzemi vagy vállalati általános) költségtömeg",
        "unit": "eFt"
      },
      {
        "sym": "V_i, v_i",
        "desc": "Az i-edik termék összes (V_i) vagy fajlagos (v_i) vetítési alapja (pl. munkaóra, gépóra, versenytárs db)",
        "unit": "egység"
      },
      {
        "sym": "k_{\\text{ált}, i}",
        "desc": "Egy darab termékre jutó felosztott általános költség",
        "unit": "Ft/db"
      }
    ],
    "whatIsIt": "Heterogén termékek egyedi vagy sorozatgyártásánál alkalmazott kalkulációs eljárás, amely a közvetett (általános) költségeket vetítési alapok (pótlékkulcsok) segítségével terheli a termékekre.",
    "whatWeCalculate": "A felosztandó általános költséget elosztjuk az összes termék vetítési alapjának összegével (ez a pótlékkulcs), majd a pótlékkulcsot visszaszorozzuk az adott termék vetítési alapjával.",
    "whyAndHow": "Vigyázni kell arra, hogy a vetítési alap fajlagosan (pl. 0,8 munkaóra/db -> előbb szorozni kell a darabszámmal a nevezőben!) vagy termékcsoportra összesítve (pl. 2 db versenytárs -> a nevezőben simán összeadjuk, majd a végén osztunk a termék darabszámával!) van-e megadva.",
    "benchmark": "Válogató (szelektív) pótlékolásnál minden általános költségcsoportot a hozzá ok-okozatilag legjobban illő vetítési alappal osztunk fel.",
    "excelFormula": "Gyártási pótlékkulcs =D12/(D6*D8+E6*E8+F6*F8) | Marketing pótlékkulcs =D13/SUM(D9:F9)"
  },
  {
    "id": "vsz-22",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "5–7. tétel: Önköltségszámítás és Hagyományos kalkuláció",
    "source": "6. tétel • Előadás 93–100. dia • Gyakorlat.xlsx (10. munkalap)",
    "name": "Normatív kalkuláció: Alapnorma, Folyónorma, Normaváltozás és Normaeltérés",
    "latex": "k_{\\text{folyó}} = k_{\\text{alapnorma}} \\pm \\Delta k_{\\text{normaváltozás}}, \\qquad k_{\\text{tény}} = k_{\\text{folyó}} \\pm \\Delta k_{\\text{normaeltérés}}",
    "altLatex": [
      "k_{\\text{ÜÁK, alap}} = A_{\\text{alap}} \\cdot p_{\\text{kulcs}, 0}, \\qquad k_{\\text{ÜÁK, folyó}} = (A_{\\text{alap}} \\pm \\Delta A_{\\text{normavált}}) \\cdot p_{\\text{kulcs}, 0}",
      "k_{\\text{ÜÁK, tény}} = A_{\\text{tény}} \\cdot p_{\\text{kulcs}, 1}, \\qquad \\Delta k_{\\text{ÜÁK, normaelt}} = k_{\\text{ÜÁK, tény}} - k_{\\text{ÜÁK, folyó}}"
    ],
    "variables": [
      {
        "sym": "k_{\\text{alapnorma}}",
        "desc": "Időszak (év) elején érvényes műszaki-gazdasági norma szerinti egységköltség",
        "unit": "Ft/db"
      },
      {
        "sym": "\\Delta k_{\\text{normaváltozás}}",
        "desc": "Év közbeni hivatalos normamódosítás (technológia- vagy árváltozás miatt)",
        "unit": "Ft/db"
      },
      {
        "sym": "k_{\\text{folyó}}",
        "desc": "Folyónorma (a normaváltozással korrigált aktuális norma)",
        "unit": "Ft/db"
      },
      {
        "sym": "\\Delta k_{\\text{normaeltérés}}",
        "desc": "A tényleges költség eltérése a folyónormától (+: túllépés, -: megtakarítás)",
        "unit": "Ft/db"
      }
    ],
    "whatIsIt": "Előre kidolgozott műszaki-gazdasági normákra épülő önköltségszámítási és operatív költségellenőrzési módszer.",
    "whatWeCalculate": "Az év eleji alapnormát módosítjuk a jóváhagyott normaváltozásokkal, így megkapjuk a folyónormát; a folyónormához hozzáadva a gyártás során keletkezett normaeltéréseket kapjuk meg a tényleges (utókalkulált) önköltséget.",
    "whyAndHow": "Az üzemi általános költség folyónormájánál a folyónorma szerinti anyagköltséget még az EREDETI (bázis) pótlékkulccsal szorozzuk, a tényköltséget viszont már a TÉNY pótlékkulccsal, és a kettő különbsége adja az ÜÁK normaeltérését!",
    "benchmark": "Normaeltérés < 0: költségmegtakarítás; Normaeltérés > 0: költségtúllépés.",
    "excelFormula": "Tényleges ÖK =D3+F3+G3 | Folyónorma ÜÁK =(D3+F3)*D8 | Tény ÜÁK =H3*G8 | ÜÁK normaeltérés =H11-F11"
  },
  {
    "id": "vsz-23",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "5–7. tétel: Önköltségszámítás és Hagyományos kalkuláció",
    "source": "7. tétel • Előadás 129–134. dia • Költségek vetítése.xlsx",
    "name": "Kupolkalkuláció (Ikertermékek) és Indokolatlan költségek kiszűrése",
    "latex": "r_{\\text{piaci}} = \\frac{K_{\\text{közös}}}{\\sum_{i \\in \\{A,B\\}} (Q_i \\cdot p_i)}, \\qquad K_{\\text{közös}, i} = r_{\\text{piaci}} \\cdot (Q_i \\cdot p_i), \\qquad k_{\\text{bekerülési}, i} = \\frac{K_{\\text{indokolt}, i}}{Q_i}",
    "altLatex": [
      "K_{\\text{fix, indokolt}} = K_{\\text{fix, össz}} \\cdot \\text{Kapacitáskihasználtság \\%} \\quad (\\text{pl. } 50\\% \\text{ kihasználtságnál a fele!})"
    ],
    "variables": [
      {
        "sym": "K_{\\text{közös}}",
        "desc": "Az ikertermékek (A és B) szétválási pontig felmerült közös anyag- és bérköltsége",
        "unit": "eFt"
      },
      {
        "sym": "r_{\\text{piaci}}",
        "desc": "Közös költség piaci hozamra (Σ Q_i*p_i) vetített arányszáma",
        "unit": "arány"
      },
      {
        "sym": "K_{\\text{indokolt}, i}",
        "desc": "A termék előállításához szakmailag és kapacitásarányosan indokolt költség",
        "unit": "eFt"
      },
      {
        "sym": "k_{\\text{bekerülési}, i}",
        "desc": "Mérlegértékeléshez használható indokolt fajlagos bekerülési érték",
        "unit": "Ft/db"
      }
    ],
    "whatIsIt": "Kapcsolt (kupol-) gyártás során keletkező ikertermékek közös költségeinek piaci hozamarányos felosztása és a számviteli törvény szerinti indokolatlan költségek leválasztása.",
    "whatWeCalculate": "A közös költséget a létrehozott piaci érték (Q*p) arányában osztjuk szét, és a bekerülési értékbe csak az indokolt költségeket (pl. 50%-os kapacitáskihasználtság mellett a fix üzemi költség 50%-át, valamint a technológiai pihentetési raktározást) számítjuk be.",
    "whyAndHow": "Azért kritikus, mert az indokolatlan költségek (megsemmisült anyag, szervezési hiba miatti raktározás, kihasználatlan kapacitás fix költsége) beemelése a készletértékbe felülértékelné a mérleget és torzítaná az önköltséget.",
    "benchmark": "Bekerülési értékbe CSAK indokolt költség kerülhet; az indokolatlan költség az időszak eredményét terheli!",
    "excelFormula": "Arányszám =C15/(E7/1000*E6+G7/1000*G6) | Arányosított ktg =$C$18*E7/1000*E6 | Bekerülési érték =E15/E7*1000"
  },
  {
    "id": "vsz-24",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "5–7. tétel: Önköltségszámítás és Hagyományos kalkuláció",
    "source": "7. tétel • Előadás 135–140. dia",
    "name": "Rezsibíró képesség és Veszteségesnek tűnő termék megszüntetésének eredményhatása",
    "latex": "\\text{Rezsibíró képesség}_i = \\text{ÁB}_i - K_{v, i} = F_i, \\qquad \\Delta E_{\\text{vállalat (termék törlésekor)}} = -(\\text{ÁB}_i - K_{v, i}) = -F_i",
    "altLatex": [
      "E_{\\text{új}} = E_{\\text{eredeti}} - F_{\\text{megszüntetett termék}} \\quad (\\text{ha a közös fix költségek rövid távon megmaradnak})"
    ],
    "variables": [
      {
        "sym": "Rezsibíró képesség",
        "desc": "A termék fedezeti összege (ÁB - Változó költség = F_i)",
        "unit": "eFt"
      },
      {
        "sym": "\\Delta E_{\\text{vállalat}}",
        "desc": "A vállalati üzemi eredmény változása a termék gyártásának leállításakor",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "A hagyományos pótlékoló kalkuláció legnagyobb döntési csapdáját leleplező összefüggés: hogyan hat a vállalati eredményre egy felosztott fix költségek miatt veszteségesnek kimutatott termék törlése.",
    "whatWeCalculate": "A termék árbevételéből levonjuk a közvetlen (változó) költségeit, így megkapjuk a termék rezsibíró képességét (fedezetét).",
    "whyAndHow": "Ha egy termék teljes önköltségen számolva veszteséges, de a rezsibíró képessége pozitív (F_i > 0), akkor hozzájárul a közös fix (rezsi-) költségek fedezéséhez. Ha megszüntetjük, a felosztott fix költségek nem tűnnek el, hanem átterhelődnek a többi termékre, és a vállalati eredmény pontosan a kieső fedezettel (F_i) csökken!",
    "benchmark": "Pozitív rezsibíró képességű (F_i > 0) terméket rövid távon NEM szabad megszüntetni pusztán a felosztott fix költségek miatt!",
    "excelFormula": "Rezsibíró képesség = Árbevétel - Közvetlen (változó) költség"
  },
  {
    "id": "vsz-25",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "8–9. tétel: Újabb kalkulációs módszerek",
    "source": "8. tétel • Előadás 143–147. dia",
    "name": "Minőségköltség (QC), Kaizen költségszámítás (KC) és Életciklusköltség (LCC)",
    "latex": "K_{\\text{QC}} = K_{\\text{jó minőség (megelőzés + vizsgálat)}} + K_{\\text{rossz minőség (belső + külső hibajavítás)}}",
    "altLatex": [
      "K_{\\text{LCC}} = K_{\\text{tervezés és fejlesztés}} + K_{\\text{aktív gyártás}} + K_{\\text{logisztika/szerviz}} + K_{\\text{kivonás és ártalmatlanítás}}",
      "K_{\\text{cél, Kaizen}} = K_{\\text{tény}, t-1} - \\Delta K_{\\text{Kaizen költségcsökkentési előirányzat}}"
    ],
    "variables": [
      {
        "sym": "K_{\\text{QC}}",
        "desc": "Teljes minőségköltség (megelőzési + ellenőrzési + belső/külső selejt és garancia)",
        "unit": "eFt"
      },
      {
        "sym": "K_{\\text{LCC}}",
        "desc": "A termék teljes életciklusára (bölcsőtől a sírig) kumulált költség",
        "unit": "eFt"
      },
      {
        "sym": "K_{\\text{cél, Kaizen}}",
        "desc": "Az aktív gyártási szakaszra előírt folyamatos költségcsökkentési célköltség",
        "unit": "Ft/db"
      }
    ],
    "whatIsIt": "A minőségügyi ráfordításokat (QC), a gyártási folyamat apró, folyamatos tökéletesítését (Kaizen) és a termék teljes életútjának költségeit (LCC) integráló modern költségmenedzsment-módszerek.",
    "whatWeCalculate": "A QC-nál szembeállítjuk a megelőzés/ellenőrzés költségeit a hibák (selejt, garancia) költségeivel; az LCC-nél a K+F-től az ártalmatlanításig összesítjük a kiadásokat; a Kaizennél pedig az előző évi tényköltségből levonjuk az elvárt hatékonyságjavulást.",
    "whyAndHow": "Az életciklusköltség-számítás rávilágít arra, hogy a termék összes költségének 70–85%-a már a tervezési szakaszban eldől, a minőségköltség-elemzés pedig megmutatja, hogy a megelőzésbe fektetett 1 Ft többszörös megtakarítást hoz a hibaköltségeken.",
    "benchmark": "A megelőzési költségek növelése csökkenti a belső/külső hibaköltségeket és az összes minőségköltséget.",
    "excelFormula": "LCC = Tervezési_ktg + Gyártási_ktg + Üzemeltetési_ktg + Kivonási_ktg"
  },
  {
    "id": "vsz-26",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "8–9. tétel: Újabb kalkulációs módszerek",
    "source": "8. tétel • Előadás 148–149. dia",
    "name": "Célköltségszámítás (Target Costing – TC) és Célköltség-index",
    "latex": "K_{\\text{cél (TC)}} = p_{\\text{tervezett piaci}} - \\pi_{\\text{elvárt}}, \\qquad \\text{Célköltség-rés} = K_{\\text{várható}} - K_{\\text{cél (TC)}}",
    "altLatex": [
      "\\text{Célköltség-index (CI)} = \\frac{\\text{Funkció (tulajdonság) vevői fontossága \\%}}{\\text{Részegység költségrészaránya \\%}} \\quad (\\text{ideális: } \\text{CI} \\approx 1)"
    ],
    "variables": [
      {
        "sym": "K_{\\text{cél (TC)}}",
        "desc": "Piac által megengedett maximális előállítási célköltség (Target Cost)",
        "unit": "Ft/db"
      },
      {
        "sym": "p_{\\text{tervezett piaci}}",
        "desc": "Piaci verseny alapján elérhető tervezett eladási ár",
        "unit": "Ft/db"
      },
      {
        "sym": "\\pi_{\\text{elvárt}}",
        "desc": "A vállalat által elvárt egységnyi nyereség (célprofit)",
        "unit": "Ft/db"
      },
      {
        "sym": "K_{\\text{várható}}",
        "desc": "Jelenlegi technológiával kalkulált várható (drifting) önköltség",
        "unit": "Ft/db"
      }
    ],
    "whatIsIt": "Piacorientált („kívülről befelé” gondolkodó) költségtervezési módszer, amely megfordítja a hagyományos Költség + Haszon = Ár képletet.",
    "whatWeCalculate": "A piacon érvényesíthető eladási árból levonjuk a tulajdonosok által elvárt nyereséget, így megkapjuk a megengedhető célköltséget. Ha a várható költség ennél magasabb, értékelemzéssel (funkciófontosság / költségarány) kell megszüntetni a célköltség-rést.",
    "whyAndHow": "Versenypiacon az árat a piac diktálja, nem a vállalat költségei. Ha egy részegység célköltség-indexe CI < 1, akkor a részegység túl drága ahhoz képest, amennyire a vevőnek fontos, ezért ott kell költséget csökkenteni.",
    "benchmark": "Döntési szabály: a gyártás csak akkor indítható el, ha K_várható <= K_cél! Ha CI < 1 -> költségcsökkentés szükséges.",
    "excelFormula": "Célköltség = Tervezett_piaci_ár - Elvárt_profit"
  },
  {
    "id": "vsz-27",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "8–9. tétel: Újabb kalkulációs módszerek",
    "source": "8–9. tétel • Előadás 150–163. dia",
    "name": "Értékáram-számítás (VSC), Átmenő teljesítményszámítás (TPA) és Nullbázisú tervezés (ZBB)",
    "latex": "k_{\\text{VSC}} = \\frac{K_{\\text{értékáram}}}{Q_{\\text{értékáram}}}, \\qquad f_{\\text{TPA}, i} = p_i - k_{\\text{közv. anyag}, i}, \\qquad f_{\\text{TPA, szűk}, i} = \\frac{p_i - k_{\\text{közv. anyag}, i}}{g_i}",
    "altLatex": [
      "T_{\\text{TPA}} = \\text{ÁB} - K_{\\text{közvetlen anyag}}, \\qquad E_{\\text{TPA}} = \\sum T_{\\text{TPA}, i} - K_{\\text{működési (összes többi ktg.)}}",
      "K_{\\text{ZBB}} = 0 + \\sum_{k \\in \\text{Jóváhagyott}} K_{\\text{döntési csomag}, k} \\quad (\\text{cél: } \\ge 10\\% \\text{ általános költség megtakarítás})"
    ],
    "variables": [
      {
        "sym": "k_{\\text{VSC}}",
        "desc": "Értékáram (Value Stream) egyszerű átlagos egységköltsége",
        "unit": "Ft/db"
      },
      {
        "sym": "f_{\\text{TPA}, i}",
        "desc": "Egy termékre jutó átmenő teljesítmény (Throughput: Eladási ár - Közvetlen anyagköltség)",
        "unit": "Ft/db"
      },
      {
        "sym": "f_{\\text{TPA, szűk}, i}",
        "desc": "Szűk keresztmetszet egységére (pl. 1 dkg-ra vagy 1 gépórára) jutó TPA-fedezet",
        "unit": "Ft/egység"
      },
      {
        "sym": "K_{\\text{ZBB}}",
        "desc": "Nullbázisról (0-ról) felépített, prioritások szerint jóváhagyott költségvetés",
        "unit": "Ft"
      }
    ],
    "whatIsIt": "A Lean menedzsmenthez (VSC), a szűk keresztmetszetek elméletéhez (TPA) és az általános költségek radikális lefaragásához (ZBB) tartozó modern számítási módszerek.",
    "whatWeCalculate": "A VSC-nél a teljes értékáram heti tényköltségét osztjuk a kibocsátott mennyiséggel; a TPA-nál kizárólag a közvetlen anyagköltséget vonjuk le az árból (minden más költséget, még a közvetlen munkabért is fix működési költségnek tekintve!); a ZBB-nél pedig 0-ról indulva, 9 lépésben rangsoroljuk a döntési csomagokat.",
    "whyAndHow": "A TPA kiküszöböli a bér- és általános költségek önkényes felosztásából eredő torzításokat a termékösszetétel optimalizálásakor; a VSC felszámolja a felesleges készletezést és átfutási időt; a ZBB pedig megszünteti a bázisszemléletű tervezés pazarlásait.",
    "benchmark": "TPA-ban CSAK a közvetlen anyagköltség számít változó költségnek! ZBB megtakarítási potenciál: >= 10%.",
    "excelFormula": "TPA fajlagos fedezet = Eladási ár - Fajlagos közvetlen anyagköltség"
  },
  {
    "id": "vsz-28",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "category": "8–9. tétel: Újabb kalkulációs módszerek",
    "source": "9. tétel • Előadás 164–171. dia",
    "name": "Tevékenységalapú (ABC / PKR) és Idővezérelt tevékenységalapú költségszámítás (TDABC)",
    "latex": "r_j = \\frac{K_{\\text{tev}, j}}{\\sum_{i=1}^{n} D_{ij}}, \\qquad k_{\\text{ABC}, i} = k_{\\text{közv}, i} + \\frac{\\sum_{j=1}^{m} (r_j \\cdot D_{ij})}{Q_i}",
    "altLatex": [
      "\\text{TDABC: } c_t = \\frac{K_{\\text{erőforrás}}}{\\text{Kap}_{\\text{nettó idő}}}, \\qquad K_{\\text{folyamat}, j} = t_{\\text{norma}, j} \\cdot N_{\\text{lefutás}, j} \\cdot c_t",
      "K_{\\text{felesleges (kihasználatlan kapacitás)}} = K_{\\text{erőforrás}} - \\sum_{j=1}^{m} K_{\\text{folyamat}, j}"
    ],
    "variables": [
      {
        "sym": "r_j, D_{ij}",
        "desc": "A j-edik tevékenység költségokozó rátája (Ft/driver) és az i-edik termék driver-igénybevétele",
        "unit": "Ft/egység, db"
      },
      {
        "sym": "c_t",
        "desc": "TDABC: egységnyi nettó időkapacitás költsége",
        "unit": "Ft/perc vagy Ft/óra"
      },
      {
        "sym": "t_{\\text{norma}, j}, N_{\\text{lefutás}, j}",
        "desc": "TDABC: egy folyamatlefutás időnormája és a lefutások darabszáma",
        "unit": "perc, db"
      },
      {
        "sym": "K_{\\text{felesleges}}",
        "desc": "TDABC: a kihasználatlan kapacitásra jutó (nem értékteremtő) költség",
        "unit": "Ft"
      }
    ],
    "whatIsIt": "Az általános költségeket tevékenységek és költségokozók (ABC), illetve közvetlenül a folyamatok időszükséglete (TDABC) alapján felosztó modern kalkulációs eljárások.",
    "whatWeCalculate": "Az ABC-nél az erőforrásköltségeket tevékenységekhez, majd cost driverekkel a termékekhez rendeljük; a TDABC-nél pedig a folyamat időnormáját, lefutási számát és az 1 percre/órára jutó nettó kapacitásköltséget szorozzuk össze.",
    "whyAndHow": "Az ABC megmutatja, hogy a kis sorozatban gyártott, sok átállást igénylő termékek fajlagos önköltsége sokkal magasabb, mint amit a hagyományos pótlékolás mutat. A TDABC továbbá különválasztja a hasznos (értékteremtő) költséget a kihasználatlan kapacitás felesleges költségétől.",
    "benchmark": "Hagyományos kalkuláció a kis sorozatokat alulárazza, a nagy sorozatokat felülárazza az ABC-hez képest.",
    "excelFormula": "TDABC folyamatköltség = Időnorma * Lefutások száma * (Erőforrásköltség / Nettó időkapacitás)"
  },
  {
    "id": "pke-01",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Vagyoni helyzet: Vertikális eszközszerkezeti mutatók",
    "source": "Előadás 51–52. dia • Szemináriumi feladatsor.xlsx (Row 89–90, 96, 106–107)",
    "name": "Befektetett eszközök részaránya, Forgóeszközök részaránya és FE / BE arány",
    "latex": "\\text{BE részaránya} = \\frac{\\text{Befektetett eszközök}}{\\text{Összes eszköz}}, \\qquad \\text{FE részaránya} = \\frac{\\text{Forgóeszközök}}{\\text{Összes eszköz}}, \\qquad \\text{FE / BE} = \\frac{\\text{Forgóeszközök}}{\\text{Befektetett eszközök}}",
    "altLatex": [
      "\\text{Aktív időbeli elhatárolások aránya} = \\frac{\\text{Aktív időbeli elhatárolások}}{\\text{Összes eszköz}}"
    ],
    "variables": [
      {
        "sym": "Befektetett eszközök (BE)",
        "desc": "Mérleg A. főcsoport (Immateriális javak + Tárgyi eszközök + Befektetett pénzügyi eszközök)",
        "unit": "eFt"
      },
      {
        "sym": "Forgóeszközök (FE)",
        "desc": "Mérleg B. főcsoport (Készletek + Követelések + Értékpapírok + Pénzeszközök)",
        "unit": "eFt"
      },
      {
        "sym": "Összes eszköz",
        "desc": "Mérlegfőösszeg (A + B + C)",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "A mérleg eszközoldalának legfelső szintű vertikális szerkezeti mutatói, amelyek a tartósan és a rövid távon lekötött vagyon arányát vizsgálják.",
    "whatWeCalculate": "Kiszámítjuk a befektetett eszközök, a forgóeszközök és az aktív elhatárolások százalékos súlyát a mérlegfőösszegen belül, valamint a két fő eszközcsoport egymáshoz viszonyított hányadosát.",
    "whyAndHow": "Az eszközszerkezet tükrözi a vállalkozás tevékenységi profilját és rugalmasságát: minél kisebb a Forgóeszközök / Befektetett eszközök arány, annál valószínűbb, hogy eszközigényes gyártó/termelő vállalatról van szó; minél nagyobb, annál inkább kereskedelmi vagy szolgáltató jellegű a cég.",
    "benchmark": "Alacsony FE/BE arány -> termelő tevékenység; Magas FE/BE arány -> kereskedelmi tevékenység.",
    "excelFormula": "=D5/D25 (Befektetett eszk. részaránya) | =D14/D25 (Forgóeszk. részaránya) | =D14/D5 (FE/BE arány)"
  },
  {
    "id": "pke-02",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Vagyoni helyzet: Vertikális eszközszerkezeti mutatók",
    "source": "Előadás 53–54. dia • Szemináriumi feladatsor.xlsx (Row 91–95)",
    "name": "Befektetett eszközök belső arányai, Beruházások aránya és Bef. pü. eszközök hozama",
    "latex": "\\text{Tárgyi eszközök aránya} = \\frac{\\text{Tárgyi eszközök}}{\\text{Befektetett eszközök}}, \\qquad \\text{Beruházások aránya} = \\frac{\\text{Beruházások, felújítások}}{\\text{Tárgyi eszközök}}",
    "altLatex": [
      "\\text{Immateriális javak aránya} = \\frac{\\text{Immateriális javak}}{\\text{Befektetett eszközök}}, \\qquad \\text{Bef. pü. eszközök aránya} = \\frac{\\text{Bef. pü. eszközök}}{\\text{Befektetett eszközök}}",
      "\\text{Bef. pü. eszközök átlagos hozama} = \\frac{\\text{Kapott osztalék (13)} + \\text{Részesedés/Bef.pü. bev. (14+15)} - \\text{Részesedés/Bef.pü. ráf. (18+19)}}{\\text{Befektetett pénzügyi eszközök}}"
    ],
    "variables": [
      {
        "sym": "Tárgyi eszközök aránya",
        "desc": "A tárgyi eszközök súlya a Befektetett eszközökön (A.) belül",
        "unit": "%"
      },
      {
        "sym": "Beruházások aránya",
        "desc": "Befejezetlen beruházások és felújítások aránya a Tárgyi eszközökön belül",
        "unit": "%"
      },
      {
        "sym": "Bef. pü. eszk. hozama",
        "desc": "A tartós pénzügyi befektetések által termelt nettó pénzügyi eredmény aránya",
        "unit": "%"
      }
    ],
    "whatIsIt": "A befektetett eszközök (A.) belső összetételét, a fejlesztési aktivitást és a tartós pénzügyi befektetések jövedelmezőségét feltáró mutatók.",
    "whatWeCalculate": "Az immateriális javakat, tárgyi eszközöket és befektetett pénzügyi eszközöket a Befektetett eszközök összegéhez, a beruházásokat a Tárgyi eszközökhöz, a pénzügyi befektetések nettó hozamát pedig a Befektetett pénzügyi eszközök állományához viszonyítjuk.",
    "whyAndHow": "Ha a beruházások aránya az első évben magas, majd a következő évben csökken az ingatlanok/gépek állományának megugrása mellett, az a beruházások üzembe helyezését (aktiválását) bizonyítja. Ha a befektetett pénzügyi eszközök átlagos hozama csökken, racionális döntés a tartós részesedések leépítése.",
    "benchmark": "Tárgyi eszközök > 75%: tárgyieszköz-igényes gyártó profil.",
    "excelFormula": "Tárgyi eszk. aránya =D8/D5 | Beruházások aránya =D11/D8 | Bef. pü. eszk. hozama =(D68+D69+D70-D74-D75)/D12"
  },
  {
    "id": "pke-03",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Vagyoni helyzet: Vertikális eszközszerkezeti mutatók",
    "source": "Előadás 54–55., 66–71. dia • Szemináriumi feladatsor.xlsx (Row 97–105)",
    "name": "Forgóeszközök és Készletek belső arányai, Szabad forgóeszközök mutatója",
    "latex": "\\text{Készletek aránya} = \\frac{\\text{Készletek}}{\\text{Forgóeszközök}}, \\qquad \\text{Anyagok aránya} = \\frac{\\text{Anyagok}}{\\text{Készletek}}, \\qquad \\text{Áruk aránya} = \\frac{\\text{Áruk}}{\\text{Készletek}}",
    "altLatex": [
      "\\text{Szabad forgóeszközök mutatója} = \\frac{\\text{Pénzeszközök} + \\text{Követelések} + \\text{Értékpapírok}}{\\text{Forgóeszközök}} = 1 - \\frac{\\text{Készletek}}{\\text{Forgóeszközök}}",
      "\\text{Vásárolt készletek aránya} = \\frac{\\text{Anyagok} + \\text{Áruk}}{\\text{Készletek}}, \\qquad \\text{Saját termelésű készletek aránya} = \\frac{\\text{Befejezetlen} + \\text{Félkész} + \\text{Késztermék}}{\\text{Készletek}}"
    ],
    "variables": [
      {
        "sym": "Készletek / Követelések / Pénz aránya",
        "desc": "Az egyes forgóeszköz-csoportok részaránya a Forgóeszközökön (B.) belül",
        "unit": "%"
      },
      {
        "sym": "Anyagok / Áruk aránya",
        "desc": "Az anyagok és az áruk részaránya a Készleteken (B.I.) belül",
        "unit": "%"
      },
      {
        "sym": "Szabad forgóeszközök",
        "desc": "A készletekben le nem kötött, likvidebb forgóeszközök részaránya",
        "unit": "%"
      }
    ],
    "whatIsIt": "A forgóeszközök és azon belül a készletek szerkezetét, valamint a forgóeszközök mobilitási fokát (szabad forgóeszközök arányát) mérő mutatócsoport.",
    "whatWeCalculate": "A készleteket, követeléseket, értékpapírokat és pénzeszközöket a Forgóeszközökhöz, az anyagokat és árukat pedig a Készletekhez viszonyítjuk.",
    "whyAndHow": "A készletek a legkevésbé likvid forgóeszközök, ezért minél magasabb a szabad forgóeszközök mutatója (és minél alacsonyabb az elfekvő készletek aránya), annál rugalmasabb a vállalkozás fizetőképessége.",
    "benchmark": "Termelő cégnél az anyagok és késztermékek, kereskedelmi cégnél az áruk dominálnak a készleteken belül.",
    "excelFormula": "Készletek aránya =D15/D14 | Anyagok aránya =D16/D15 | Áruk aránya =D17/D15"
  },
  {
    "id": "pke-04",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Vagyoni helyzet: Mérlegtételek részletes és futamidő mutatói",
    "source": "Előadás 66–68. dia",
    "name": "Tárgyi eszközök használhatósági foka és Megújítási mértéke",
    "latex": "\\text{Használhatósági fok} = \\frac{\\text{Tárgyi eszközök nettó értéke}}{\\text{Tárgyi eszközök bruttó értéke}}, \\qquad \\text{Megújítási mérték} = \\frac{\\text{Tárgyévben aktivált tárgyi eszközök értéke}}{\\text{Tárgyi eszközök záró bruttó értéke}}",
    "altLatex": [
      "\\text{Elhasználódási fok} = \\frac{\\text{Halmozott értékcsökkenés}}{\\text{Tárgyi eszközök bruttó értéke}} = 1 - \\text{Használhatósági fok}"
    ],
    "variables": [
      {
        "sym": "Nettó érték",
        "desc": "A mérlegben szereplő, halmozott ÉCS-vel csökkentett könyv szerinti érték",
        "unit": "eFt"
      },
      {
        "sym": "Bruttó érték",
        "desc": "A kiegészítő mellékletből kiolvasható bekerülési (beszerzési/előállítási) érték",
        "unit": "eFt"
      },
      {
        "sym": "Aktivált érték",
        "desc": "A tárgyévben üzembe helyezett új tárgyi eszközök bruttó értéke",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "A tárgyi eszközállomány műszaki-erkölcsi korszerűségét, elöregedettségét és pótlási ütemét a kiegészítő melléklet adatai alapján mérő mutatópár.",
    "whatWeCalculate": "A használhatósági foknál a nettó értéket osztjuk a bruttó értékkel; a megújítási mértéknél pedig a tárgyévi új aktiválásokat viszonyítjuk a záró bruttó állományhoz.",
    "whyAndHow": "Ha a használhatósági fok tartósan csökken (pl. 30–40% alá esik) és a megújítási mérték alacsony, az a géppark elöregedését, a beruházások elmaradását és a jövőbeli versenyképesség romlását jelzi.",
    "benchmark": "Használhatósági fok > 50%: jó műszaki állapot; < 35%: elöregedett eszközpark, sürgős pótlási igény.",
    "excelFormula": "Használhatósági fok = Nettó_érték / Bruttó_érték"
  },
  {
    "id": "pke-05",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Vagyoni helyzet: Mérlegtételek részletes és futamidő mutatói",
    "source": "Előadás 72–77. dia • Szemináriumi feladatsor.xlsx (Row 100–103)",
    "name": "Napi forgalmi alapú futamidő-mutatók (Anyagtárolási, Árutárolási, Beszedési és Szállítási idő)",
    "latex": "\\text{Anyagtárolási idő} = \\frac{\\text{Anyagok}}{\\text{Anyagköltség} / 365}, \\qquad \\text{Árutárolási idő} = \\frac{\\text{Áruk}}{\\text{ELÁBÉ} / 365}, \\qquad \\text{Beszedési idő} = \\frac{\\text{Követelések}}{(\\text{ÁB} + \\text{EB}) / 365}",
    "altLatex": [
      "\\text{ÁFA-korrigált vevőfutamidő} = \\frac{\\text{Vevők} - \\text{ÁFA}}{\\text{Nettó ÁB} / 365}, \\qquad \\text{Szállítási futamidő} = \\frac{\\text{Szállítók} - \\text{ÁFA}}{\\text{Anyagjellegű ráfordítások} / 365}",
      "\\text{Késztermék tárolási idő} = \\frac{\\text{Késztermékek}}{\\text{Értékesített KT közv. önköltsége} / 365}, \\qquad \\text{Pénzeszközök napokban} = \\frac{\\text{Pénzeszközök}}{(\\text{ÁB} + \\text{EB} + \\text{Pü. bev.}) / 365}"
    ],
    "variables": [
      {
        "sym": "Anyagköltség / 365",
        "desc": "Egy átlagos napra jutó anyagfelhasználás",
        "unit": "eFt/nap"
      },
      {
        "sym": "(ÁB + EB) / 365",
        "desc": "Egy átlagos napra jutó értékesítési és egyéb bevétel",
        "unit": "eFt/nap"
      },
      {
        "sym": "ÁFA-korrekció",
        "desc": "A mérlegben bruttó (ÁFA-s) értéken szereplő vevők/szállítók nettósítása a nettó ÁB-val való összevetéshez",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "Az egyes forgóeszköz- és szállítóállományok napokban kifejezett lekötési idejét (futamidejét) a hozzájuk tartalmilag pontosan illeszkedő 1 napi forgalmi adattal mérő mutatók.",
    "whatWeCalculate": "Minden mérlegtételt elosztunk a saját 1 napi forgalmával: az anyagokat a napi anyagköltséggel, az árukat a napi ELÁBÉ-val, a késztermékeket a napi közvetlen önköltséggel, a követeléseket pedig a napi bevétellel.",
    "whyAndHow": "Sokkal pontosabb képet ad az általános (árbevétel-alapú) forgási időknél: ha például a napi anyagfelhasználás csökken, miközben az anyagtárolási idő nő, az azonnal jelzi a készletfelhalmozódást. A vevőknél és szállítóknál az ÁFA levonása szünteti meg a számláló (bruttó) és nevező (nettó) közötti torzítást.",
    "benchmark": "Növekvő tárolási idő -> készletbefagyás; Növekvő beszedési idő -> romló vevői fizetési fegyelem.",
    "excelFormula": "1 napi anyagfelhasználás =D55/365 | Anyagtárolási idő =D16/D100 | Napi bevétel =(D50+D54)/365 | Beszedési idő =D18/D102"
  },
  {
    "id": "pke-06",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Vagyoni helyzet: Vertikális forrásszerkezeti mutatók",
    "source": "Előadás 56–60., 78–83. dia • Szemináriumi feladatsor.xlsx (Row 109–119)",
    "name": "Tőkeerősség, Kötelezettségek aránya, Saját tőke / Jegyzett tőke és Idegen tőke átlagos költsége",
    "latex": "\\text{Tőkeerősség} = \\frac{\\text{Saját tőke}}{\\text{Összes forrás}}, \\qquad \\text{Kötelezettségek aránya} = \\frac{\\text{Kötelezettségek}}{\\text{Összes forrás}}, \\qquad \\text{ST/JT} = \\frac{\\text{Saját tőke}}{\\text{Jegyzett tőke}}",
    "altLatex": [
      "\\text{Idegen tőke átlagos költsége} = \\frac{\\text{Fizetendő kamatok és kamatjellegű ráfordítások (20. sor)}}{\\text{Hosszú lej. köt.} + \\text{Rövid lej. köt.} - \\text{Szállítók} - \\text{Egyéb rövid lej. köt.}}",
      "\\text{Szállítók aránya} = \\frac{\\text{Szállítók}}{\\text{Rövid lejáratú kötelezettségek}}, \\qquad \\text{CL/E\\&L mutató} = \\frac{\\text{Rövid lejáratú kötelezettségek}}{\\text{Összes forrás}}"
    ],
    "variables": [
      {
        "sym": "Tőkeerősség",
        "desc": "A saját tőke részaránya a mérlegfőösszegen (összes forráson) belül",
        "unit": "%"
      },
      {
        "sym": "ST / JT arány",
        "desc": "Saját tőke és Jegyzett tőke aránya (felhalmozott tartalékok mutatója)",
        "unit": "arány"
      },
      {
        "sym": "Idegen tőke átl. költsége",
        "desc": "A fizetendő kamatok aránya a kamatozó hitel- és kölcsönállományhoz",
        "unit": "%"
      }
    ],
    "whatIsIt": "A mérleg forrásoldalának szerkezetét, a tulajdonosi tőke biztonságát és a kamatozó idegen források átlagos kamatterhét mérő mutatócsoport.",
    "whatWeCalculate": "Meghatározzuk a saját tőke és a kötelezettségek (hosszú, rövid, azon belül szállítók) részarányát, a saját tőke jegyzett tőkéhez viszonyított többszörösét, valamint a fizetett kamatok és a kamatozó adósság (HLK + RLK - Szállítók - Egyéb RLK) hányadosát.",
    "whyAndHow": "Az idegen tőke átlagos költségének nevezőjéből azért vonjuk ki a szállítókat és az egyéb rövid lejáratú kötelezettségeket (adó, TB, munkabér), mert azok után nem fizetünk banki kamatot! Ha az ST/JT arány 1 alá esik, a cég veszteségei már a jegyzett tőkét emésztik fel.",
    "benchmark": "Kötelezettségek aránya < 65% (Tőkeerősség > 35%): hitelezhető. Kritikus, ha ST <= 0,5*JT két egymást követő évben!",
    "excelFormula": "Tőkeerősség =D27/D42 | Idegen tőke átl. ktg =D76/(D34+D35-D38-D39) | ST/JT =D27/D28"
  },
  {
    "id": "pke-07",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Horizontális mérlegelemzés és Finanszírozási stratégiák",
    "source": "Előadás 61–64., 85–88. dia • Szemináriumi feladatsor.xlsx (Row 122–126) • Gyakorló Feladatsor 5. hét.xlsx",
    "name": "Befektetett eszközök fedezete I–II., Nettó forgótőke (NFT) és Finanszírozási stratégiák",
    "latex": "\\text{Fedezet I.} = \\frac{\\text{Saját tőke}}{\\text{Befektetett eszközök}}, \\qquad \\text{Fedezet II.} = \\frac{\\text{Saját tőke} + \\text{Hosszú lej. köt.}}{\\text{Befektetett eszközök}}",
    "altLatex": [
      "\\text{Nettó forgótőke (NFT)} = \\text{Forgóeszközök} - \\text{Rövid lejáratú kötelezettségek} = (\\text{ST} + \\text{HLK}) - \\text{Befektetett eszközök}",
      "\\text{Forgóeszközök tartósan finanszírozott hányada} = \\frac{\\text{NFT}}{\\text{Forgóeszközök}}, \\qquad \\text{Vevők / Szállítók} = \\frac{\\text{Vevők}}{\\text{Szállítók}}"
    ],
    "variables": [
      {
        "sym": "Fedezet I. és II.",
        "desc": "A befektetett eszközök saját tőkével (I.), illetve tartós forrásokkal (ST + HLK, II.) való lefedettsége",
        "unit": "%"
      },
      {
        "sym": "NFT (NWC)",
        "desc": "Nettó forgótőke (tartós forrásokkal finanszírozott forgóeszköz-rész)",
        "unit": "eFt"
      },
      {
        "sym": "Vevők / Szállítók",
        "desc": "Szállítók fedezettségi mutatója (kereskedelmi hitelezési pozíció)",
        "unit": "arány"
      }
    ],
    "whatIsIt": "Az eszközök megtérülési idejét és a források esedékességét összevető horizontális mérlegmutatók, amelyekből közvetlenül meghatározható a vállalat finanszírozási stratégiája.",
    "whatWeCalculate": "A Befektetett eszközök fedezete II. mutatóval a tartós forrásokat (Saját tőke + Hosszú lejáratú kötelezettségek) osztjuk a befektetett eszközökkel; a Nettó forgótőkével pedig a forgóeszközök és a rövid lejáratú kötelezettségek különbségét számítjuk ki.",
    "whyAndHow": "Az illeszkedés elve szerint a tartós eszközöket tartós forrásból kell finanszírozni (Fedezet II. >= 100%, azaz NFT >= 0). Az NFT előjele egyértelműen meghatározza, hogy a vállalat konzervatív, óvatos (illeszkedő) vagy agresszív finanszírozási politikát folytat.",
    "benchmark": "Fedezet II. >= 100% (illeszkedés elve). NFT > 0: konzervatív; NFT = 0: óvatos (szolid); NFT < 0: agresszív (kockázatos) finanszírozási politika.",
    "excelFormula": "Fedezet I =D27/D5 | Fedezet II =(D27+D34)/D5 | Nettó forgótőke =D14-D35 | Vevők/Szállítók =D19/D38"
  },
  {
    "id": "pke-08",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Rövid távú pénzügyi helyzet: Likviditás és Pénzciklus",
    "source": "Előadás 96–105. dia • Szemináriumi feladatsor.xlsx (Row 129–132)",
    "name": "Hagyományos likviditási mutatók (Általános likviditás, Gyorsráta, Készpénzlikviditás)",
    "latex": "\\text{Általános likviditás} = \\frac{\\text{Forgóeszközök}}{\\text{RLK}}, \\qquad \\text{Gyorsráta} = \\frac{\\text{FE} - \\text{Készletek}}{\\text{RLK}}, \\qquad \\text{Készpénzlikviditás} = \\frac{\\text{Értékpapír} + \\text{Pénzeszköz}}{\\text{RLK}}",
    "altLatex": [
      "\\text{Gyorsráta (alternatív felírás)} = \\frac{\\text{Követelések} + \\text{Értékpapírok} + \\text{Pénzeszközök}}{\\text{Rövid lejáratú kötelezettségek}}"
    ],
    "variables": [
      {
        "sym": "FE",
        "desc": "Forgóeszközök (B. főcsoport összesen)",
        "unit": "eFt"
      },
      {
        "sym": "RLK",
        "desc": "Rövid lejáratú kötelezettségek (F.III.)",
        "unit": "eFt"
      },
      {
        "sym": "FE - Készletek",
        "desc": "Likvid forgóeszközök (Követelések + Értékpapírok + Pénzeszközök)",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "A vállalkozás rövid távú (éven belüli) fizetőképességét mérő három alapvető statikus mutatószám.",
    "whatWeCalculate": "A rövid lejáratú kötelezettségeket (RLK) vetjük össze a teljes forgóeszköz-állománnyal (általános likviditás), a készletekkel csökkentett forgóeszközökkel (savpróba / gyorsráta), illetve a közvetlenül fizetésre fordítható pénzeszközökkel és értékpapírokkal (készpénzlikviditás).",
    "whyAndHow": "Azért szűkítjük fokozatosan a számlálót, mert a készletek értékesítése bizonytalan és időigényes. A túl alacsony érték fizetésképtelenségi veszélyt, a túl magas érték viszont feleslegesen lekötött, nem kamatozó forgóeszköz-többletet jelez.",
    "benchmark": "Ideális tartományok: Általános likviditás: 1,3 – 1,7 | Likviditási gyorsráta: 0,8 – 1,0 | Készpénzlikviditás: 0,25 – 0,30.",
    "excelFormula": "Általános likviditás =D14/D35 | Gyorsráta =(D14-D15)/D35 | Készpénzlikviditás =(D21+D22)/D35"
  },
  {
    "id": "pke-09",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Rövid távú pénzügyi helyzet: Likviditás és Pénzciklus",
    "source": "Előadás 106–111. dia • Szemináriumi feladatsor.xlsx (Row 133, 157–162)",
    "name": "Átfogó likviditási index (Comprehensive Liquidity Index – CLI)",
    "latex": "X_{\\text{korr}} = X \\cdot \\left(1 - \\frac{1}{\\text{Forgási sebesség}_X}\\right), \\qquad \\text{CLI} = \\frac{\\text{Készlet}_{\\text{korr}} + \\text{Köv.}_{\\text{korr}} + \\text{Értékpapír} + \\text{Pénzeszköz}}{\\text{RLK}_{\\text{korr}}}",
    "altLatex": [
      "\\text{Köv.}_{\\text{korr}} = \\text{Vevők} \\cdot \\left(1 - \\frac{1}{\\text{FS}_{\\text{vevő}}}\\right) + (\\text{Követelések} - \\text{Vevők})",
      "\\text{RLK}_{\\text{korr}} = \\text{Szállítók} \\cdot \\left(1 - \\frac{1}{\\text{FS}_{\\text{szállító}}}\\right) + (\\text{RLK} - \\text{Szállítók})"
    ],
    "variables": [
      {
        "sym": "1 - 1/FS_X",
        "desc": "Forgási sebességgel súlyozó korrekciós faktor a készletekre, vevőkre és szállítókra",
        "unit": "arány"
      },
      {
        "sym": "Köv._korr",
        "desc": "Korrigált vevőkövetelések + egyéb (nem vevő) követelések",
        "unit": "eFt"
      },
      {
        "sym": "RLK_korr",
        "desc": "Korrigált szállítói tartozások + egyéb (nem szállítói) rövid lejáratú kötelezettségek",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "A hagyományos likviditási rátát a készletek, vevők és szállítók forgási sebességével dinamizáló, pontosított fizetőképességi mutató.",
    "whatWeCalculate": "A készleteket, a vevőket és a szállítókat megszorozzuk a saját (1 - 1/forgási sebesség) korrekciós tényezőjükkel, majd a korrigált forgóeszközök összegét elosztjuk a korrigált rövid lejáratú kötelezettségekkel.",
    "whyAndHow": "A hagyományos likviditási ráta nem érzékeli, milyen gyorsan válik pénzzé a készlet vagy a vevőkövetelés. A CLI-nél minél nagyobb a forgási sebesség, annál közelebb van a korrekciós faktor 1-hez (tehát annál inkább pénzértékűnek számít az adott tétel).",
    "benchmark": "Minél magasabb a CLI, annál kedvezőbb a dinamikus likviditás (és annál gyorsabb a készlet/vevő forgása a szállítókhoz képest).",
    "excelFormula": "Korrigált készlet =E15*(1-1/E140) | Korrigált követelés =E158+E18-E19 | Korrigált RLK =E35-E38+E159 | CLI =(E157+E160+E21+E22)/E161"
  },
  {
    "id": "pke-10",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Rövid távú pénzügyi helyzet: Likviditás és Pénzciklus",
    "source": "Előadás 112–119. dia • Mutatószám elemzés_Likviditási mérleg.xlsx (Row 90–108)",
    "name": "Négyfokozatú Likviditási mérleg (E1–E4, F1–F4) és Fizetőképességi egyenlegek",
    "latex": "\\text{Azonnali} = E_1 - F_1, \\qquad \\text{Rövid távú} = (E_1 + E_2) - (F_1 + F_2), \\qquad \\text{Középtávú} = (E_1 + E_2 + E_3) - (F_1 + F_2 + F_3)",
    "altLatex": [
      "E_1 = \\text{Pénzeszköz} + \\text{Értékpapír}, \\quad E_2 = \\text{Készlet}\\cdot\\beta + \\text{Követelés}\\cdot\\gamma + \\text{AIE}, \\quad E_3 = \\text{Készlet}(1-\\beta) + \\text{Köv.}(1-\\gamma), \\quad E_4 = \\text{Bef. eszk.}",
      "F_1 = \\text{Szállítók}\\cdot\\alpha + \\text{Egyéb RLK (adó, TB, bér)}, \\quad F_2 = (\\text{RLK} - F_1) + \\text{PIE} + \\text{Céltartalék}, \\quad F_3 = \\text{HLK} + \\text{Hátrasorolt}, \\quad F_4 = \\text{Saját tőke}"
    ],
    "variables": [
      {
        "sym": "E_1, E_2, E_3, E_4",
        "desc": "I. Likvid eszközök, II. Éven belül mobilizálható, III. Éven túl mobilizálható, IV. Immobil eszközök",
        "unit": "eFt"
      },
      {
        "sym": "F_1, F_2, F_3, F_4",
        "desc": "I. Azonnal esedékes, II. Éven belül esedékes, III. Éven túl esedékes tartozások, IV. Vissza nem fizetendő forrás",
        "unit": "eFt"
      },
      {
        "sym": "\\alpha, \\beta, \\gamma",
        "desc": "10 napon belüli szállítók aránya (α), 1 éven belül mobilizálható készletek (β) és követelések (γ) aránya",
        "unit": "%"
      }
    ],
    "whatIsIt": "A számviteli mérleg tételeit az eszközök mobilitási (pénzzé tehetőségi) sebessége és a források lejárati esedékessége szerint 4–4 fokozatba átrendező speciális mérleg.",
    "whatWeCalculate": "Kiszámítjuk az egyes likviditási fokozatok értékét és halmozott összegeit (Halmozott #1: I+II., Halmozott #2: I+II+III.), majd a halmozott eszköz- és forrásértékek különbségeként az azonnali, a rövid távú és a középtávú fizetőképességet.",
    "whyAndHow": "A likviditási mérleg rávilágít arra, hogy a vállalat mely időhorizonton rendelkezik likviditási többlettel (> 0) vagy küzd likviditási hiánnyal (< 0). Különösen fontos, hogy az adó-, TB- és bértartozások (egyéb RLK) a 10 napon belüli szállítókkal együtt az azonnal esedékes tartozások (F1) közé kerülnek!",
    "benchmark": "Különbség > 0: likviditási többlet (fizetőképes); Különbség = 0: pénzügyi egyensúly; Különbség < 0: likviditási hiány.",
    "excelFormula": "E1 =D21+D22 | F1 =D38*D94+D39 | E2 =D15*D93+D18*D92+D23 | F2 =(D35-J98)+D40+D31 | E3 =D15*(1-D93)+D18*(1-D92)"
  },
  {
    "id": "pke-11",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Rövid távú pénzügyi helyzet: Likviditás és Pénzciklus",
    "source": "Előadás 122–141. dia • Szemináriumi feladatsor.xlsx (Row 136–154) • Gyakorló Feladatsor 5. hét.xlsx",
    "name": "Hagyományos és Módosított Pénzkonverziós Ciklus (Működési ciklus és Pénzciklus)",
    "latex": "\\text{Működési ciklus} = \\text{KI} + \\text{BI}, \\qquad \\text{Pénzciklus (CCC)} = \\text{Működési ciklus} - \\text{TI} = \\text{KI} + \\text{BI} - \\text{TI}",
    "altLatex": [
      "\\text{Forgási sebesség}_X = \\frac{\\text{Értékesítés nettó ÁB}}{\\text{Átlagos } X \\text{ állomány}}, \\qquad \\text{Forgási idő (KI, BI, TI)} = \\frac{365}{\\text{Forgási sebesség}_X}",
      "\\text{Módosított KI} = \\text{KI} \\cdot (1 - \\text{Bruttó ROS}), \\qquad \\text{Módosított BI} = \\text{BI} \\cdot \\text{Hitelben történő értékesítés aránya}",
      "\\text{Módosított működési ciklus} = \\text{Mód. KI} + \\text{Mód. BI}, \\qquad \\text{Módosított pénzciklus} = \\text{Mód. működési ciklus} - \\text{TI}"
    ],
    "variables": [
      {
        "sym": "KI",
        "desc": "Átlagos készletezési időszak (365 / Készletek forgási sebessége)",
        "unit": "nap"
      },
      {
        "sym": "BI",
        "desc": "Átlagos beszedési időszak (365 / Vevők forgási sebessége)",
        "unit": "nap"
      },
      {
        "sym": "TI",
        "desc": "Átlagos tartozási időszak (365 / Szállítók forgási sebessége)",
        "unit": "nap"
      },
      {
        "sym": "Bruttó ROS",
        "desc": "Értékesítés bruttó eredménye / Értékesítés nettó árbevétele (árrés)",
        "unit": "%"
      }
    ],
    "whatIsIt": "A forgótőke-menedzsment dinamikus időmutatója, amely megmutatja, hány napig kell a vállalatnak finanszíroznia a működését a szállítók kifizetése és a vevői ellenérték befolyása között.",
    "whatWeCalculate": "A nyitó és záró állományok átlagából kiszámítjuk a készletek, vevők és szállítók forgási sebességét és napokban mért forgási idejét; a készletezési és beszedési idő összege adja a működési ciklust, amelyből a szállítói tartozási időt levonva kapjuk a pénzciklust.",
    "whyAndHow": "A módosított pénzkonverziós ciklus korrigálja a hagyományos modell túlbecslését: a készletezési időt csökkenti a bruttó árréssel (mert a készlet csak önköltségen köti le a pénzt), a beszedési időt pedig megszorozza a halasztott fizetésű (hitelben történő) értékesítés arányával.",
    "benchmark": "Minél rövidebb (vagy negatív) a pénzciklus, annál kisebb a vállalkozás külső forgótőke-finanszírozási igénye.",
    "excelFormula": "Működési ciklus =E143+E144 | Pénzciklus =E146-E145 | Módosított KI =E143*(1-E150) | Módosított BI =E144*$I$152"
  },
  {
    "id": "pke-12",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Hosszú távú fizetőképesség: Eladósodottság és Tőkeáttétel",
    "source": "Előadás 166–173. dia • Szemináriumi feladatsor.xlsx (Row 166–169)",
    "name": "Eladósodottsági mutatók (Összes, Hosszú lejáratú, D/E) és Saját tőke multiplikátor (STM)",
    "latex": "\\text{Összes eladósodottság} = \\frac{\\text{Összes eszköz} - \\text{ST}}{\\text{Összes eszköz}}, \\qquad \\text{D/E} = \\frac{\\text{Összes eszköz} - \\text{ST}}{\\text{ST}}, \\qquad \\text{STM} = \\frac{\\text{Összes eszköz}}{\\text{ST}} = 1 + \\frac{D}{E}",
    "altLatex": [
      "\\text{Hosszú lejáratú eladósodottság} = \\frac{\\text{Hosszú lejáratú kötelezettségek}}{\\text{Hosszú lejáratú kötelezettségek} + \\text{Saját tőke}}, \\qquad \\text{STM} = \\frac{1}{\\text{Tőkeerősség}}"
    ],
    "variables": [
      {
        "sym": "Összes eladósodottság",
        "desc": "A nem saját tőkéből finanszírozott eszközök aránya (1 - Tőkeerősség)",
        "unit": "%"
      },
      {
        "sym": "D/E (Adósság / ST)",
        "desc": "Az idegen források (Kötelezettségek + Céltartalék + PIE) aránya a Saját tőkéhez",
        "unit": "arány / %"
      },
      {
        "sym": "STM",
        "desc": "Saját tőke multiplikátor (Equity Multiplier = Összes eszköz / Saját tőke)",
        "unit": "szeres"
      }
    ],
    "whatIsIt": "A vállalkozás hosszú távú eladósodottságát és tőkeáttételi szorzóját (multiplikátorát) mérő alapmutatók.",
    "whatWeCalculate": "Számszerűsítjük az idegen források arányát az összes eszközhöz és a saját tőkéhez (D/E) képest, a tartós forrásokon belüli hosszú lejáratú adósság arányát, valamint az eszközök és a saját tőke hányadosát (STM).",
    "whyAndHow": "A Saját tőke multiplikátor (STM) a DuPont-elemzés harmadik fő tényezője: megmutatja, hogy 1 Ft saját tőke hány Ft eszközt mozgat a vállalatban (és így hányszorosára nagyítja fel a ROA-t a ROE-ban).",
    "benchmark": "Összes eladósodottság < 65%; Hosszú lej. eladósodottság <= 50%; STM = 1 (nincs idegen tőke), STM = 2 (IT = ST), STM > 2 (IT > ST).",
    "excelFormula": "Összes eladósodottság =(D25-D27)/D25 | D/E =(D25-D27)/D27 | Hosszú lej. elad. =D34/(D34+D27) | STM =D25/D27"
  },
  {
    "id": "pke-13",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Hosszú távú fizetőképesség: Eladósodottság és Tőkeáttétel",
    "source": "Előadás 174–176. dia • Szemináriumi feladatsor.xlsx (Row 170–171)",
    "name": "Kamatfedezeti mutatók (I. és II.) és Működési Cash Flow / Összes adósság",
    "latex": "\\text{Kamatfedezet I.} = \\frac{\\text{Üzemi (üzleti) eredmény (ÜÜTE)}}{\\text{Fizetendő kamatok}}, \\qquad \\text{Kamatfedezet II.} = \\frac{\\text{ÜÜTE} + \\text{ÉCS (EBITDA)}}{\\text{Fizetendő kamatok}}",
    "altLatex": [
      "\\text{Cash flow / Adósság mutató} = \\frac{\\text{Működési cash flow}}{\\text{Összes adósság (kötelezettség)}}"
    ],
    "variables": [
      {
        "sym": "Kamatfedezet I.",
        "desc": "Az üzemi eredmény hányszorosan fedezi a tárgyévi kamatfizetési kötelezettséget",
        "unit": "szeres"
      },
      {
        "sym": "Kamatfedezet II.",
        "desc": "Az értékcsökkenéssel növelt üzemi eredmény (EBITDA) hányszorosan fedezi a kamatokat",
        "unit": "szeres"
      },
      {
        "sym": "Fizetendő kamatok",
        "desc": "Eredménykimutatás 20. sora (Fizetendő kamatok és kamatjellegű ráfordítások)",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "A vállalkozás adósságszolgálati teherbírását (kamatfizetési és hiteltörlesztési képességét) az eredménykimutatás és a cash flow oldaláról mérő mutatók.",
    "whatWeCalculate": "Az üzemi eredményt (I.), illetve az értékcsökkenési leírással növelt üzemi eredményt (II.) elosztjuk a fizetendő kamatokkal; a CF/Adósság mutatónál pedig a működési cash flow-t viszonyítjuk a teljes adósságállományhoz.",
    "whyAndHow": "A Kamatfedezet II. azért pontosabb a pénzügyi teljesítőképesség megítélésére, mert az értékcsökkenési leírás (ÉCS) nem jár tényleges pénzkiadással, így az ÉCS-nek megfelelő bevétel is felhasználható a kamatok kifizetésére.",
    "benchmark": "Kamatfedezet I. >= 5,0: banki elvárás (jó); >= 3,0: elfogadható; <= 2,0: kritikus! (Kamatfedezet I. = 1,0 esetén az adózás előtti eredmény 0-ra olvad.)",
    "excelFormula": "Kamatfedezet I =D67/D76 | Kamatfedezet II =(D67+D65)/D76"
  },
  {
    "id": "pke-14",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Hosszú távú fizetőképesség: Eladósodottság és Tőkeáttétel",
    "source": "Előadás 177–182. dia",
    "name": "Pénzügyi tőkeáttétel hozamegyenlete és az Adópajzs (Tax Shield) hatása",
    "latex": "r_E = r_A + (r_A - r_D) \\cdot \\frac{D}{E}, \\qquad \\text{ahol} \\qquad r_D = r_{D,\\text{tényleges}} \\cdot (1 - T)",
    "altLatex": [
      "\\text{Adópajzs (Tax Shield)} = \\text{Fizetett kamat} \\cdot T \\quad (\\text{a kamatráfordítás csökkenti a társasági adóalapját})"
    ],
    "variables": [
      {
        "sym": "r_E",
        "desc": "Saját tőke arányos hozam (ROE)",
        "unit": "%"
      },
      {
        "sym": "r_A",
        "desc": "Eszközarányos hozam kamatfizetés előtt (ROA / ROIC)",
        "unit": "%"
      },
      {
        "sym": "r_D",
        "desc": "Adópajzzsal csökkentett effektív hitelkamatláb",
        "unit": "%"
      },
      {
        "sym": "T",
        "desc": "Társasági nyereségadó-kulcs",
        "unit": "%"
      },
      {
        "sym": "D / E",
        "desc": "Idegen tőke / Saját tőke arány (tőkeáttétel)",
        "unit": "arány"
      }
    ],
    "whatIsIt": "A saját tőke hozama (r_E), az eszközarányos hozam (r_A), a hitelkamatláb (r_D) és az eladósodottság (D/E) közötti fundamentális pénzügyi összefüggés.",
    "whatWeCalculate": "Az eszközarányos hozamhoz hozzáadjuk az eszközhozam és az adózás utáni hitelköltség különbségének (r_A - r_D) a D/E aránnyal vett szorzatát.",
    "whyAndHow": "Megmutatja, miért „kétélű kard” a hitelfelvétel: amíg a befektetett eszközök hozama meghaladja az adópajzzsal csökkentett hitelkamatot (r_A > r_D), addig a D/E növelése emeli a tulajdonosok hozamát (r_E); ha azonban r_A < r_D, a hitel minden egyes forintja lerontja a ROE-t!",
    "benchmark": "Ha r_A > r_D: pozitív tőkeáttételi hatás (ROE > ROA); ha r_A < r_D: negatív tőkeáttételi hatás (ROE < ROA).",
    "excelFormula": "r_E = r_A + (r_A - r_D*(1-T)) * (D/E)"
  },
  {
    "id": "pke-15",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Hosszú távú fizetőképesség: Eladósodottság és Tőkeáttétel",
    "source": "Előadás 183–190. dia (188. oldali kép) • Szemináriumi feladatsor.xlsx (Row 173–177)",
    "name": "Működési (operatív) tőkeáttétel foka (DOL) és kapcsolata a Fedezeti ponttal",
    "latex": "\\text{DOL} = \\frac{\\%\\Delta \\text{ÜÜTE}}{\\%\\Delta \\text{ÁB}} = \\frac{S - VC}{S - VC - FC} = \\frac{\\text{Fedezeti összeg}}{\\text{ÜTE}}",
    "altLatex": [
      "\\text{DOL mennyiségi fedezeti ponttal: } \\text{DOL}_Q = \\frac{Q}{Q - Q^*}, \\qquad \\text{Értékbeli fedezeti ponttal: } \\text{DOL}_S = \\frac{S}{S - S^*}"
    ],
    "variables": [
      {
        "sym": "DOL",
        "desc": "Működési (operatív) tőkeáttétel foka (Degree of Operating Leverage)",
        "unit": "szeres"
      },
      {
        "sym": "S, VC, FC",
        "desc": "Nettó árbevétel (S), Változó működési költségek (VC), Fix működési költségek (FC)",
        "unit": "eFt"
      },
      {
        "sym": "Q^*, S^*",
        "desc": "Fedezeti pont mennyiségben (Q* = FC/(P-VC_e)) és árbevételben (S*)",
        "unit": "db, eFt"
      }
    ],
    "whatIsIt": "Az eredménykimutatás felső szakaszára vonatkozó rugalmassági mutató, amely a fix működési költségek (amortizáció, bérleti díj, alapbér) eredmény-felnagyító hatását méri.",
    "whatWeCalculate": "Az üzemi eredmény (ÜÜTE) százalékos változását elosztjuk az árbevétel százalékos változásával (dinamikus képlet), vagy egy adott bázispontban a fedezeti összeget osztjuk az üzemi eredménnyel (statikus képlet).",
    "whyAndHow": "A Q / (Q - Q*) képlet megmutatja, hogy a DOL nem más, mint a relatív biztonsági határ reciproka: minél közelebb működik a vállalat a fedezeti ponthoz (Q*), annál hatalmasabb a DOL, vagyis egy apró árbevétel-ingadozás is óriási kilengést okoz az üzemi eredményben!",
    "benchmark": "Fedezeti pontban (Q = Q*) a DOL végtelen; ha nincs fix költség (FC = 0), akkor DOL = 1,0.",
    "excelFormula": "DOL =E175/E174 (%ΔÜÜTE / %ΔÁB)"
  },
  {
    "id": "pke-16",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Hosszú távú fizetőképesség: Eladósodottság és Tőkeáttétel",
    "source": "Előadás 191–199. dia • Szemináriumi feladatsor.xlsx (Row 178–180)",
    "name": "Pénzügyi tőkeáttétel foka (DFL) és Kombinált (összetett) tőkeáttétel foka (DCL)",
    "latex": "\\text{DFL} = \\frac{\\%\\Delta \\text{AE}}{\\%\\Delta \\text{ÜÜTE}} = \\frac{\\text{ÜTE}}{\\text{ÜTE} - I}, \\qquad \\text{DCL} = \\text{DOL} \\times \\text{DFL} = \\frac{\\%\\Delta \\text{AE}}{\\%\\Delta \\text{ÁB}} = \\frac{S - VC}{\\text{ÜTE} - I}",
    "altLatex": [
      "\\text{Kapcsolat a Kamatfedezettel (KF): } \\text{DFL} = \\frac{\\text{KF}}{\\text{KF} - 1} \\quad (\\text{pl. ha KF} = 5 \\implies \\text{DFL} = 1{,}25)"
    ],
    "variables": [
      {
        "sym": "DFL",
        "desc": "Pénzügyi (finanszírozási) tőkeáttétel foka (Degree of Financial Leverage)",
        "unit": "szeres"
      },
      {
        "sym": "DCL",
        "desc": "Kombinált (összetett) tőkeáttétel foka (Degree of Combined Leverage)",
        "unit": "szeres"
      },
      {
        "sym": "I",
        "desc": "Fizetendő fix kamatráfordítás (Interest)",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "Az eredménykimutatás alsó szakaszán a fix kamatterhek kockázatát mérő pénzügyi tőkeáttétel (DFL), valamint a teljes eredménykimutatást átfogó kombinált tőkeáttétel (DCL).",
    "whatWeCalculate": "A DFL-nél az adózott eredmény (vagy EPS) százalékos változását osztjuk az ÜÜTE százalékos változásával; a DCL-nél pedig a DOL és DFL szorzataként közvetlenül az árbevétel 1%-os változásának adózott eredményre gyakorolt hatását kapjuk meg.",
    "whyAndHow": "Ha egy vállalatnak magas a működési kockázata (magas DOL), akkor a teljes vállalati kockázat (DCL) kordában tartása érdekében alacsony pénzügyi tőkeáttételt (alacsony DFL-t, óvatos hitelfelvételt) kell választania.",
    "benchmark": "DFL <= 1,25–1,33: jó (banki elvárás, KF >= 4–5); DFL < 1,5: elfogadható; DFL > 2,0: kritikus pénzügyi kockázat!",
    "excelFormula": "DFL =E176/E175 (%ΔAE / %ΔÜÜTE) | DCL =E177*E178 (vagy E176/E174)"
  },
  {
    "id": "pke-17",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Jövedelmezőség és DuPont mutatófelbontás",
    "source": "Előadás 148–157. dia • Szemináriumi feladatsor.xlsx (Row 183–193)",
    "name": "Jövedelmezőségi alapmutatók: ROS (4 szinten), Eszközforgás, ROA és ROE",
    "latex": "\\text{Bruttó ROS} = \\frac{\\text{ÉBE}}{\\text{ÁB}}, \\quad \\text{Működési ROS} = \\frac{\\text{ÜÜTE}}{\\text{ÁB}}, \\quad \\text{Nettó ROS} = \\frac{\\text{AE}}{\\text{ÁB}}, \\quad \\text{ROA} = \\frac{\\text{AE}}{\\text{ÖE}}, \\quad \\text{ROE} = \\frac{\\text{AE}}{\\text{ST}}",
    "altLatex": [
      "\\text{Eszközök forgási sebessége} = \\frac{\\text{Értékesítés nettó árbevétele}}{\\text{Összes eszköz}}, \\qquad \\text{ROI} = \\frac{\\text{Eredmény}}{\\text{Befektetett tőke}}"
    ],
    "variables": [
      {
        "sym": "ROS",
        "desc": "Árbevétel-arányos jövedelmezőség (Return on Sales – bruttó, működési, adózás előtti, nettó)",
        "unit": "%"
      },
      {
        "sym": "ROA",
        "desc": "Eszközarányos jövedelmezőség (Return on Assets = Adózott eredmény / Összes eszköz)",
        "unit": "%"
      },
      {
        "sym": "ROE",
        "desc": "Saját tőke arányos jövedelmezőség (Return on Equity = Adózott eredmény / Saját tőke)",
        "unit": "%"
      }
    ],
    "whatIsIt": "A vállalkozás jövedelemtermelő képességét az árbevételre (ROS), a befektetett összvagyonra (ROA) és a tulajdonosi saját tőkére (ROE) vetítő alapmutatók.",
    "whatWeCalculate": "A négyféle ROS mutatóval az eredménykimutatás egymás alatti eredményszintjeit (Bruttó eredmény, ÜÜTE, AEE, Adózott eredmény) viszonyítjuk a nettó árbevételhez; a ROA-nál és ROE-nál pedig az adózott eredményt osztjuk az összes eszközzel, illetve a saját tőkével.",
    "whyAndHow": "A négyféle ROS együttese megmutatja, hol „olvad el” a nyereség: ha a Bruttó ROS magas, de a Működési ROS alacsony, akkor az igazgatási/értékesítési általános költségek túl magasak; ha az Adózás előtti ROS esik vissza a Működési ROS-hoz képest, akkor a kamatterhek viszik el az eredményt.",
    "benchmark": "A ROE akkor tekinthető kedvezőnek, ha tartósan meghaladja a kockázatmentes állampapírhozam és a vállalati kockázati prémium összegét.",
    "excelFormula": "Bruttó ROS =D58/D50 | Működési ROS =D67/D50 | Nettó ROS =D83/D50 | ROA =D83/D25 | ROE =D83/D27"
  },
  {
    "id": "pke-18",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Jövedelmezőség és DuPont mutatófelbontás",
    "source": "Előadás 158–164. dia • Szemináriumi feladatsor.xlsx (Row 188–204) • Mutatószám elemzés.xlsx (Row 147–162)",
    "name": "DuPont mutatópiramis: 3-tényezős és 5-tényezős ROE felbontás és Láncbehelyettesítés",
    "latex": "\\text{ROE}_{3} = \\underbrace{\\frac{\\text{AE}}{\\text{ÁB}}}_{\\text{Nettó ROS}} \\times \\underbrace{\\frac{\\text{ÁB}}{\\text{ÖE}}}_{\\text{Eszközforgás}} \\times \\underbrace{\\frac{\\text{ÖE}}{\\text{ST}}}_{\\text{STM}} = \\text{ROA} \\times \\text{STM}",
    "altLatex": [
      "\\text{ROE}_{5} = \\underbrace{\\frac{\\text{ÜÜTE}}{\\text{ÁB}}}_{\\text{Műk. ROS}} \\times \\underbrace{\\frac{\\text{AEE}}{\\text{ÜÜTE}}}_{\\text{Pü. műv. hatása}} \\times \\underbrace{\\frac{\\text{AE}}{\\text{AEE}}}_{\\text{Adóteher hatása}} \\times \\underbrace{\\frac{\\text{ÁB}}{\\text{ÖE}}}_{\\text{Eszközforgás}} \\times \\underbrace{\\frac{\\text{ÖE}}{\\text{ST}}}_{\\text{STM}}"
    ],
    "variables": [
      {
        "sym": "Pü. műveletek hatása",
        "desc": "Adózás előtti eredmény / Üzemi eredmény (AEE / ÜÜTE)",
        "unit": "arány / %"
      },
      {
        "sym": "Adóteher hatása",
        "desc": "Adózott eredmény / Adózás előtti eredmény (AE / AEE = 1 - effektív adókulcs)",
        "unit": "arány / %"
      },
      {
        "sym": "Eszközforgás, STM",
        "desc": "Eszközök forgási sebessége (ÁB/ÖE) és Saját tőke multiplikátor (ÖE/ST)",
        "unit": "fordulat, szeres"
      }
    ],
    "whatIsIt": "A saját tőke arányos jövedelmezőséget (ROE) 3, illetve 5 szorzótényezőre bontó elemzési piramis, amely összekapcsolja az eredménykimutatást és a mérleget.",
    "whatWeCalculate": "A ROE-t először a Nettó ROS, az Eszközforgás és az STM szorzataként, majd a Nettó ROS-t három további tényezőre (Működési ROS × Pénzügyi műveletek hatása × Adóteher hatása) bontva számítjuk ki, és láncbehelyettesítéssel számszerűsítjük az egyes tényezők %-pontos hatását a ROE változására.",
    "whyAndHow": "Az 5-tényezős DuPont-elemzés röntgenfelvételként mutatja meg, mi mozgatta a tulajdonosi hozamot: az alaptevékenység árrése, a pénzügyi eredmény, az adózás, az eszközök kihasználtsága vagy a tőkeáttétel.",
    "benchmark": "Pénzügyi műveletek hatása (AEE/ÜÜTE) < 100%, ha a pénzügyi műveletek eredménye veszteséges.",
    "excelFormula": "5-tényezős ROE =PRODUCT(D199:D203)"
  },
  {
    "id": "pke-19",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Cash Flow, Szabad Cash Flow és Csődmodellek",
    "source": "Mutatószám elemzés_Likviditási mérleg.xlsx & Szemináriumi feladatsor.xlsx (Cash flow munkalap)",
    "name": "Számviteli Cash Flow kimutatás (I–IV.), Bruttó Cash Flow és Finanszírozási erő",
    "latex": "\\text{Vállalati CF (IV.)} = \\text{Működési CF (I.)} + \\text{Befektetési CF (II.)} + \\text{Finanszírozási CF (III.)} = \\Delta \\text{Pénzeszközök}",
    "altLatex": [
      "\\text{Bruttó CF} = \\text{AEE (1)} + \\text{Amortizáció (2)} \\pm \\text{Értékvesztés (3)} \\pm \\Delta\\text{Céltartalék (4)} \\pm \\text{Bef. eszk. ért. eredm. (5)}",
      "\\text{Finanszírozási erő} = \\text{Bruttó CF} - \\text{Fizetett adó (12)} \\quad (\\text{vagy Működési CF osztalékfizetés előtt})"
    ],
    "variables": [
      {
        "sym": "Működési CF (1–13. sor)",
        "desc": "Bruttó CF ± Forgótőke-elemek változása (6–11. sor) - Fizetett adó (12) - Fizetett osztalék (13)",
        "unit": "eFt"
      },
      {
        "sym": "Befektetési CF (14–16. sor)",
        "desc": "- Bef. eszközök beszerzése (14) + Bef. eszközök eladása eladási áron (15) + Kapott osztalék (16)",
        "unit": "eFt"
      },
      {
        "sym": "Finanszírozási CF (17–27.)",
        "desc": "+ Tőkebevonás/Hitelfelvétel (17–21) - Tőkeleszállítás/Hiteltörlesztés/Átadott pénz (22–27)",
        "unit": "eFt"
      },
      {
        "sym": "Bruttó CF",
        "desc": "A forgótőke-változások előtti, nem pénzmozgásos tételekkel korrigált eredmény",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "A vállalkozás pénzeszközeinek változását működési, befektetési és finanszírozási területekre bontó 27 soros számviteli kimutatás, valamint a belső önfinanszírozó erőt mérő mutatópár.",
    "whatWeCalculate": "Az indirekt működési cash flow-nál az adózás előtti eredményt korrigáljuk az amortizációval, értékvesztéssel, céltartalék-változással és a befektetett eszközök értékesítési eredményével (ez a Bruttó CF), majd a forgótőke-mérlegtételek változásával, az adóval és az osztalékkal.",
    "whyAndHow": "Alapvető előjelszabály a 6–11. sorokban: az eszközállományok (vevők, készletek, AIE) növekedése pénzkiáramlás (-), csökkenése pénzbeáramlás (+); a forrásállományok (szállítók, egyéb RLK, PIE) növekedése (+), csökkenése (-). Az 5. sorban az eszközértékesítési nyereséget azért vonjuk le (-), mert a teljes eladási ár a 15. sorban (+) szerepel!",
    "benchmark": "Egészséges érett vállalatnál: Működési CF > 0, Befektetési CF < 0 (beruházás), amelyet a Működési CF fedez.",
    "excelFormula": "Bef. eszk. ért. eredménye = Eladási ár (Egyéb bev * %) - Könyv szerinti érték (Egyéb ráf * %)"
  },
  {
    "id": "pke-20",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Cash Flow, Szabad Cash Flow és Csődmodellek",
    "source": "Mutatószám elemzés_Likviditási mérleg.xlsx & Szemináriumi feladatsor.xlsx (Cash flow munkalap 60–82. sor)",
    "name": "Vállalati szabad cash flow (FCFF) és Saját tőkére jutó szabad cash flow (FCFE)",
    "latex": "\\text{FCFF} = \\text{AE} + \\text{Kamat}\\cdot(1 - T) + \\text{ÉCS} - \\text{CapEx} - \\Delta\\text{NWC} = \\text{Működési CF} + \\text{Osztalék} + \\text{Kamat}\\cdot(1-T) + \\text{Befektetési CF}",
    "altLatex": [
      "\\text{FCFE (a) FCFF-ből: } \\text{FCFE} = \\text{FCFF} - \\text{Kamat}\\cdot(1 - T) + \\text{Nettó hitelfelvétel (Felvett hitel} - \\text{Törlesztett hitel)}",
      "\\text{FCFE (b) Adózott eredményből: } \\text{FCFE} = \\text{AE} + \\text{ÉCS (2..5. sor)} - \\Delta\\text{NWC (6..11. sor)} + \\text{Befektetési CF} + \\text{Nettó hitelfelvétel}",
      "\\text{FCFE (c) CF-kimutatásból: } \\text{FCFE} = \\text{Működési CF} + \\text{Fizetett osztalék (13)} + \\text{Befektetési CF} + \\text{Nettó hitelfelvétel (19} - \\text{24. sor)}"
    ],
    "variables": [
      {
        "sym": "FCFF",
        "desc": "Free Cash Flow to Firm (valamennyi finanszírozó – hitelezők és tulajdonosok – számára szabad pénzáram)",
        "unit": "eFt"
      },
      {
        "sym": "FCFE",
        "desc": "Free Cash Flow to Equity (a hitelezők kifizetése után a tulajdonosoknak maradó szabad pénzáram)",
        "unit": "eFt"
      },
      {
        "sym": "Kamat*(1-T)",
        "desc": "Adópajzzsal csökkentett fizetett kamatráfordítás (T = társasági adókulcs)",
        "unit": "eFt"
      },
      {
        "sym": "Nettó hitelfelvétel",
        "desc": "Tárgyévben felvett hitel/kötvény (18–19. sor) mínusz törlesztett hitel/kötvény (23–24. sor)",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "A modern vállalatértékelés és pénzügyi elemzés két legfontosabb szabad pénzáram-mutatója, amelyek a szükséges beruházások és forgótőke-pótlás után szabadon kivonható pénzeszközöket mérik.",
    "whatWeCalculate": "Az FCFF-et kiszámíthatjuk az adózott eredményből kiindulva, vagy a magyar számviteli CF-kimutatásból (ahol a Működési CF-hez vissza kell adni a 13. sorban levont osztalékot és az adópajzzsal korrigált kamatot, majd hozzáadni a Befektetési CF-et). Az FCFE-hez ebből levonjuk a kamat*(1-T) összeget és hozzáadjuk a nettó hitelfelvételt.",
    "whyAndHow": "Míg a számviteli eredmény manipulálható és nem veszi figyelembe a tárgyieszköz-pótlást, az FCFF megmutatja a cég teljes adósságszolgálati és osztalékfizetési képességét, az FCFE pedig azt az összeget, amelyet a tulajdonosok a hitelezők kielégítése után ténylegesen kivehetnek a cégből.",
    "benchmark": "FCFF -> hitelezők + tulajdonosok szabad pénzárama; FCFE -> kizárólag a tulajdonosok (részvényesek) szabad pénzárama.",
    "excelFormula": "FCFF (CF-ből) = Működési CF + Fizetett osztalék + Kamat*(1-T) + Befektetési CF | FCFE = FCFF - Kamat*(1-T) + Felvett hitel - Törlesztett hitel"
  },
  {
    "id": "pke-21",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "category": "Cash Flow, Szabad Cash Flow és Csődmodellek",
    "source": "Előadás 203–218. dia",
    "name": "Nemzetközi és Magyar Csődelőrejelzési Modellek (Altman Z és Z', Springate, Fulmer, Hajdú–Virág)",
    "latex": "Z_{\\text{Altman}} = 1{,}2 A + 1{,}4 B + 3{,}3 C + 0{,}6 D + 0{,}999 E, \\qquad Z_{\\text{Hajdú–Virág}} = 1{,}3566 X_1 + 1{,}63397 X_2 + 3{,}66384 X_3 + 0{,}03366 X_4",
    "altLatex": [
      "\\text{Altman változók: } A=\\frac{\\text{NFT}}{\\text{ÖE}},\\ B=\\frac{\\text{AE}}{\\text{ÖE}},\\ C=\\frac{\\text{ÜÜTE}}{\\text{ÖE}},\\ D=\\frac{\\text{ST}}{\\text{Összes adósság}},\\ E=\\frac{\\text{ÁB}}{\\text{ÖE}}",
      "\\text{Zártkörű Altman } Z' = 0{,}717 A + 0{,}847 B + 3{,}107 C + 0{,}42 D_{\\text{könyv sz.}} + 0{,}998 E",
      "\\text{Springate: } Z = 1{,}03\\frac{\\text{NFT}}{\\text{ÖE}} + 3{,}07\\frac{\\text{ÜÜTE}}{\\text{ÖE}} + 0{,}66\\frac{\\text{AEE}}{\\text{RLK}} + 0{,}4\\frac{\\text{ÁB}}{\\text{ÖE}} \\quad (\\text{Csőd, ha } Z < 0{,}862)",
      "\\text{Hajdú–Virág változók: } X_1 = \\text{Gyorsráta},\\ X_2 = \\frac{\\text{Működési CF}}{\\text{Összes tartozás}},\\ X_3 = \\frac{\\text{FE}}{\\text{ÖE}},\\ X_4 = \\frac{\\text{Működési CF}}{\\text{ÖE}}"
    ],
    "variables": [
      {
        "sym": "Z, Z'",
        "desc": "Diszkriminancia-függvény (Z-score) értéke nyilvános (Z) és zártkörű (Z') cégekre",
        "unit": "pontszám"
      },
      {
        "sym": "ÖE, NFT, RLK",
        "desc": "Összes eszköz (mérlegfőösszeg), Nettó forgótőke, Rövid lejáratú kötelezettségek",
        "unit": "eFt"
      },
      {
        "sym": "X_1..X_4",
        "desc": "A magyar Hajdú–Virág (1996) modell likviditási és működési cash-flow arányszámai",
        "unit": "arány"
      }
    ],
    "whatIsIt": "Többváltozós statisztikai (diszkriminancia-analízisen alapuló) csődelőrejelzési modellek, amelyek több pénzügyi mutató súlyozott összegeként egyetlen mutatószámba sűrítik a fizetésképtelenségi kockázatot.",
    "whatWeCalculate": "Az Altman- és Springate-modellben a nettó forgótőke, az eredménykategóriák (AE, ÜÜTE, AEE), a saját tőke és az árbevétel eszköz- vagy adósságarányos mutatóit súlyozzuk; a Hajdú–Virág és Fulmer modellben pedig a működési cash flow mutatókat is bevonjuk.",
    "whyAndHow": "A könyvvizsgálók, hitelező bankok és kontrollerek e modellek küszöbértékeivel tesztelik a „vállalkozás folytatása” (going concern) elvének teljesülését és a csőd bekövetkezésének valószínűségét 1–2 éves időtávon.",
    "benchmark": "Altman Z < 1,81: csődzóna | 1,81–2,99: szürke zóna | > 2,99: stabil. Springate: Z < 0,862 csőd. Fulmer: H < 0 csőd. Hajdú–Virág: Z < 2,61612 csőd.",
    "excelFormula": "Altman Z = 1.2*(NFT/ÖE) + 1.4*(AE/ÖE) + 3.3*(ÜÜTE/ÖE) + 0.6*(ST/Adósság) + 0.999*(ÁB/ÖE)"
  },
  {
    "id": "dt-01",
    "course": "dt",
    "courseName": "Döntéstámogatás",
    "category": "Operatív tervezés: High-Low költségfelbontás és Költségkalkuláció",
    "source": "Előadás 56–58. dia • Operatív tervezés (levelező)_Botond.xlsx (Row 20–28)",
    "name": "Szélsőérték-módszer (High-Low módszer): Fajlagos változó költség és Közvetlen fix költség",
    "latex": "k_v = \\frac{\\Delta K}{\\Delta Q} = \\frac{K(Q_{\\max}) - K(Q_{\\min})}{Q_{\\max} - Q_{\\min}}, \\qquad K_{f,\\text{közv}} = K(Q_{\\max}) - k_v \\cdot Q_{\\max}",
    "altLatex": [
      "Q_{\\min} = \\min_{t:\\, Q_t > 0} Q_t, \\qquad Q_{\\max} = \\max_{t} Q_t, \\qquad \\Delta Q = Q_{\\max} - Q_{\\min}, \\qquad \\Delta K = K(Q_{\\max}) - K(Q_{\\min})"
    ],
    "variables": [
      {
        "sym": "Q_{\\min}, Q_{\\max}",
        "desc": "A múltbeli idősor legkisebb (pozitív, Q > 0!) és legnagyobb havi termelési volumene",
        "unit": "db"
      },
      {
        "sym": "K(Q_{\\min}), K(Q_{\\max})",
        "desc": "A legkisebb és legnagyobb volumenponthoz tartozó havi összköltség",
        "unit": "eFt"
      },
      {
        "sym": "k_v",
        "desc": "Fajlagos (egységnyi) változó költség",
        "unit": "eFt/db"
      },
      {
        "sym": "K_{f,\\text{közv}}",
        "desc": "A termékhez közvetlenül rendelhető havi fix költség",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "Múltbeli havi volumen- és költségidősorból a vegyes költségeket fajlagos változó és közvetlen fix költségre szétválasztó operatív controlling eljárás.",
    "whatWeCalculate": "Kiválasztjuk a pozitív kibocsátású hónapok közül a legkisebb és legnagyobb volumenpontot és azok költségét; a két pont költségkülönbségének és volumenkülönbségének hányadosa adja a fajlagos változó költséget (k_v), majd a teljes költségből levonva a változó részt (k_v * Q_max) megkapjuk a közvetlen fix költséget.",
    "whyAndHow": "Kritikus gyakorlati szabály, hogy a minimum kiválasztásánál a 0 db-os (gyártási leállásos) hónapokat ki kell zárni a MINIFS(L13:L37; L13:L37; \">0\") függvénnyel! (Ugyanakkor a 0 db-os hónapban felmerült költség – pl. a B terméknél 400 eFt – kiváló ellenőrző pont, mert közvetlenül megmutatja a fix költséget.)",
    "benchmark": "Ellenőrzés: K(Q_min) - k_v * Q_min == K(Q_max) - k_v * Q_max == K_{f,közv}.",
    "excelFormula": "Min volumen =MINIFS(L13:L37;L13:L37;\">0\") | Min ktg =XLOOKUP(B20;L13:L37;O13:O37) | Fajlagos vált. ktg =(B23-B21)/(B22-B20) | Fix ktg =B23-(B27*B22)"
  },
  {
    "id": "dt-02",
    "course": "dt",
    "courseName": "Döntéstámogatás",
    "category": "Operatív tervezés: High-Low költségfelbontás és Költségkalkuláció",
    "source": "Előadás 58. dia • Operatív tervezés (levelező)_Botond.xlsx (Row 30–38)",
    "name": "Általános (közvetett) költségek felosztása költségjellemzőkkel és Tervezett havi összköltség",
    "latex": "K_{\\text{közv}, i}^{(m)} = \\frac{D_i^{(m)}}{\\sum_{j=1}^{n} D_j^{(m)}} \\cdot K_{\\text{közv, össz}}^{(m)}, \\qquad K_{\\text{terv}, i} = Q_i \\cdot k_{v, i} + K_{f,\\text{közv}, i} + \\sum_{m} K_{\\text{közv}, i}^{(m)}",
    "altLatex": [
      "\\text{Felhasznált normaórák: } \\text{NO}_i = Q_i \\cdot \\text{no}_i \\implies K_{\\text{admin}, i} = \\frac{\\text{NO}_i}{\\sum \\text{NO}_j} \\cdot K_{\\text{admin, össz}}",
      "K_{\\text{raktár}, i} = \\frac{\\text{Raktár m}^2_i}{\\sum \\text{Raktár m}^2_j} \\cdot K_{\\text{raktár, össz}}, \\qquad K_{\\text{mkt}, i} = \\frac{\\text{Versenytársak}_i}{\\sum \\text{Versenytársak}_j} \\cdot K_{\\text{mkt, össz}}"
    ],
    "variables": [
      {
        "sym": "D_i^{(m)}",
        "desc": "Az m-edik költségjellemző (normaóra, raktár m², versenytárs db) értéke az i-edik terméknél",
        "unit": "óra, m², db"
      },
      {
        "sym": "\\text{NO}_i",
        "desc": "Tervezett mennyiség × fajlagos normaóra-szükséglet (Q_i * no_i)",
        "unit": "normaóra"
      },
      {
        "sym": "K_{\\text{terv}, i}",
        "desc": "Az i-edik termék tervezett havi teljes összköltsége",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "A vállalati közvetett (általános) fix költségek ok-okozati költségjellemzők (cost driverek) arányában történő felosztása és a termékek teljes havi költségtervének összeállítása.",
    "whatWeCalculate": "Az adminisztratív bérköltséget az összes felhasznált normaóra (Q_i * no_i), a raktárkarbantartást a raktárterület (m²), a marketingköltséget pedig a versenytárs-termékek száma arányában osztjuk szét, majd összeadjuk a változó, a közvetlen fix és a felosztott közvetett költségeket.",
    "whyAndHow": "A helyes vetítési alap kiválasztása döntő: a normaóra fajlagos adat (óra/db), ezért felosztás előtt meg kell szorozni a tervezett darabszámmal, míg a raktár-m² és a versenytársak száma már eleve a teljes termékcsoportra vonatkozik (és a zavarkeltő 'vásárló ügyfelek száma' adatot figyelmen kívül kell hagyni).",
    "benchmark": "Ellenőrzés: a három termékre felosztott közvetett költségek összege soronként kiadja a vállalati keretösszeget (1200, 1450 és 980 eFt).",
    "excelFormula": "Normaóra =B12*G15 | Raktárkarbantartás =B33/$E$33*$G$13 | Admin ktg =B31/$E$31*$G$12 | Marketing =B32/$E$32*$G$14 | Összköltség =B12*B15+B14+SUM(B16:B18)"
  },
  {
    "id": "dt-03",
    "course": "dt",
    "courseName": "Döntéstámogatás",
    "category": "Árkalkuláció, Árérzékenység és Szcenárióelemzés",
    "source": "Előadás 59. dia • Operatív tervezés (levelező)_Botond.xlsx (Row 40–48)",
    "name": "Árkalkulációs modellek: Költség + nyereség (Haszonkulcsos) és Súlyozott piaci átlagár",
    "latex": "k_{\\text{ön}, i} = \\frac{K_{\\text{terv}, i}}{Q_i}, \\qquad P_{\\text{költség+nyereség}, i} = \\frac{k_{\\text{ön}, i}}{1 - m}, \\qquad P_{\\text{piac}, A} = \\frac{\\sum_{j=1}^{k} (P_j \\cdot V_j)}{\\sum_{j=1}^{k} V_j \\cdot 1000}",
    "altLatex": [
      "\\text{20\\%-os elvárt árbevétel-arányos nyereségnél: } P_i = \\frac{k_{\\text{ön}, i}}{1 - 0{,}20} = \\frac{k_{\\text{ön}, i}}{0{,}80}"
    ],
    "variables": [
      {
        "sym": "k_{\\text{ön}, i}",
        "desc": "Fajlagos teljes önköltség (Tervezett havi összköltség / Tervezett volumen)",
        "unit": "eFt/db"
      },
      {
        "sym": "m",
        "desc": "Megcélzott árbevétel-arányos eredményhányad / haszonkulcs (pl. 20% = 0,20)",
        "unit": "%"
      },
      {
        "sym": "P_j, V_j, k",
        "desc": "A releváns k db versenytárs (A terméknél k = 8!) eladási ára (Ft/db) és várható volumene (db)",
        "unit": "Ft/db, db"
      }
    ],
    "whatIsIt": "A piaci versenyhelyzethez igazított kétféle árképzési modell: a gyengébb versenyben alkalmazható költség + nyereség típusú árképzés és az erős versenyben alkalmazott árkövető (volumennel súlyozott piaci átlagár) modell.",
    "whatWeCalculate": "A „B” és „C” terméknél a fajlagos önköltséget elosztjuk (1 - 0,20) = 0,8-cal; az erős versenyben lévő „A” terméknél pedig a 8 releváns versenytárs várható értékesítési mennyiségével súlyozott átlagárat számítjuk ki.",
    "whyAndHow": "Kiemelten fontos módszertani szabály, hogy 20%-os árbevétel-arányos eredménycélnál 0,8-cal OSZTUNK (nem 1,2-vel szorzunk, mert az eladási ár 20%-ának kell nyereségnek lennie: (P - k_ön)/P = 0,20 => P = k_ön / 0,8)!",
    "benchmark": "Ellenőrzés: (P - k_ön) / P = 20%. Az A terméknél csak a k = 8 releváns versenytársat szabad figyelembe venni!",
    "excelFormula": "Fajlagos ÖK =B38/B12 | B és C ár =C42/0.8 | A piaci átlagár =SUMPRODUCT(L41:L48;M41:M48)/SUM(M41:M48)/1000"
  },
  {
    "id": "dt-04",
    "course": "dt",
    "courseName": "Döntéstámogatás",
    "category": "Árkalkuláció, Árérzékenység és Szcenárióelemzés",
    "source": "Előadás 59. dia • Operatív tervezés (levelező)_Botond.xlsx (Row 50–60)",
    "name": "Kereslet árérzékenysége (Árrugalmasság) és EBIT szcenárióelemzés",
    "latex": "P_{\\text{új}} = P_0 \\cdot \\left(1 + \\frac{\\%\\Delta P}{100}\\right), \\qquad \\%\\Delta Q = -E_p \\cdot \\%\\Delta P, \\qquad Q_{\\text{új}} = Q_0 \\cdot \\left(1 + \\frac{\\%\\Delta Q}{100}\\right)",
    "altLatex": [
      "\\text{EBIT}_{\\text{új}} = P_{\\text{új}} \\cdot Q_{\\text{új}} - k_v \\cdot Q_{\\text{új}} - K_f = (P_{\\text{új}} - k_v) \\cdot Q_{\\text{új}} - K_f"
    ],
    "variables": [
      {
        "sym": "E_p",
        "desc": "A kereslet árérzékenysége / árrugalmassága (pl. E_p = 2,2: 1% áremelés 2,2% volumencsökkenést okoz)",
        "unit": "arány"
      },
      {
        "sym": "\\%\\Delta P, \\%\\Delta Q",
        "desc": "Tervezett áremelés százaléka (1%..10%) és a következményes volumencsökkenés százaléka",
        "unit": "%"
      },
      {
        "sym": "\\text{EBIT}_{\\text{új}}",
        "desc": "Az adott áremelési szcenárió mellett elérhető új havi üzemi eredmény",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "Az eladási ár emelésének a keresletre (értékesített darabszámra), az árbevételre és az üzemi eredményre (EBIT) gyakorolt hatását vizsgáló szcenáriómodell.",
    "whatWeCalculate": "Minden vizsgált áremelési lépcsőre (pl. +1% ... +10%) kiszámítjuk a volumenvisszaesést (%ΔQ = -2,2 * %ΔP), az új volument, az új árbevételt, a csökkenő változó költséget, és végül az új EBIT-et (a fix költségek változatlanok maradnak!).",
    "whyAndHow": "A szcenárióelemzés bebizonyítja, hogy magas árérzékenység (E_p = 2,2 > 1) mellett a „B” termék áremelése veszteséget okoz: a volumen olyan drasztikusan esik vissza, hogy az EBIT minden áremelési lépcsőben csökken (609,89 eFt-ról 10%-os áremelésnél 383,46 eFt-ra).",
    "benchmark": "Ha E_p > 1 (rugalmas kereslet), az áremelés csökkenti az árbevételt és az EBIT-et!",
    "excelFormula": "Volumenváltozás % =(-2.2)*B52 | Új ár =($C$44)*(1+B52/100) | Új volumen =$C$12*(1+B53/100) | Új EBIT =B56-B57-B58"
  },
  {
    "id": "dt-05",
    "course": "dt",
    "courseName": "Döntéstámogatás",
    "category": "ÁKVFN struktúra, Fedezeti pont és Terv–Tény Vízesés-elemzés",
    "source": "Előadás 57. dia • Operatív tervezés (levelező)_Botond.xlsx (Row 63–72)",
    "name": "Termékszintű ÁKVFN-struktúra, Fedezeti pont és Biztonsági határ",
    "latex": "f_i = P_i - k_{v, i}, \\qquad Q_{\\text{fed}, i} = \\frac{K_{f,\\text{közv}, i} + \\sum K_{\\text{közv}, i}}{P_i - k_{v, i}}, \\qquad \\text{BH}_i = Q_{\\text{terv}, i} - Q_{\\text{fed}, i}",
    "altLatex": [
      "\\text{EBIT}_i = \\text{ÁB}_i - K_{v, i} - K_{f,\\text{közv}, i} - K_{\\text{admin}, i} - K_{\\text{raktár}, i} - K_{\\text{mkt}, i}"
    ],
    "variables": [
      {
        "sym": "f_i",
        "desc": "Egy darab termékre jutó fajlagos fedezet (Eladási ár - Fajlagos változó költség)",
        "unit": "eFt/db"
      },
      {
        "sym": "Q_{\\text{fed}, i}",
        "desc": "Fedezeti pont darabszáma (a termék összes közvetlen és felosztott fix költségére)",
        "unit": "db"
      },
      {
        "sym": "BH_i",
        "desc": "Biztonsági határ mennyiségben (Tervezett volumen - Fedezeti pont)",
        "unit": "db"
      }
    ],
    "whatIsIt": "Az Árbevétel – Költségek (változó és fix) – Fedezet – Nyereség (ÁKVFN) struktúra termékszintű és vállalati szintű levezetése.",
    "whatWeCalculate": "Termékenként kiszámítjuk a fajlagos fedezetet (P_i - k_v,i), a teljes (közvetlen + felosztott közvetett) fix költséget elosztjuk a fajlagos fedezettel (ez a fedezeti pont Q_fed,i), majd a tervezett mennyiségből kivonva megkapjuk a biztonsági határt (BH_i).",
    "whyAndHow": "A biztonsági határ pontosan megmutatja, hány darabbal eshet vissza az adott termék értékesítése a tervhez képest anélkül, hogy a termék (a rá osztott közvetett fix költségekkel együtt számolva) veszteségessé válna.",
    "benchmark": "BH_i > 0 esetén a termék a teljes önköltség felett teljesít (EBIT_i > 0).",
    "excelFormula": "Fajlagos fedezet =B44-B15 | Fedezeti pont =SUM(B66:B69)/B70 | Biztonsági határ =B12-B71"
  },
  {
    "id": "dt-06",
    "course": "dt",
    "courseName": "Döntéstámogatás",
    "category": "ÁKVFN struktúra, Fedezeti pont és Terv–Tény Vízesés-elemzés",
    "source": "Előadás 60. dia • Operatív tervezés (levelező)_Botond.xlsx (Row 74–87)",
    "name": "Terv–Tény Eredmény-vízesés (Waterfall / Bridge elemzés) és Előjelszabályok",
    "latex": "\\Delta \\text{EBIT}(\\text{ÁB}) = +(\\text{ÁB}_{\\text{tény}} - \\text{ÁB}_{\\text{terv}}), \\qquad \\Delta \\text{EBIT}(K_j) = -(K_{j,\\text{tény}} - K_{j,\\text{terv}})",
    "altLatex": [
      "\\text{EBIT}_{\\text{tény}} = \\text{EBIT}_{\\text{terv}} + \\Delta \\text{EBIT}(\\text{ÁB}) + \\sum_{j} \\Delta \\text{EBIT}(K_j)"
    ],
    "variables": [
      {
        "sym": "\\Delta \\text{EBIT}(\\text{ÁB})",
        "desc": "Az árbevétel terv–tény eltérésének eredményhatása (azonos előjelű)",
        "unit": "eFt"
      },
      {
        "sym": "\\Delta \\text{EBIT}(K_j)",
        "desc": "A j-edik költségtétel terv–tény eltérésének eredményhatása (ellentétes előjelű: -1-gyel szorozva!)",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "A vállalati terv- és tényeredmény (EBIT_terv és EBIT_tény) közötti eltérést az egyes bevételi és költségtényezők eredményhatására lebontó vízesés-elemzés (bridge).",
    "whatWeCalculate": "Az árbevételnél a (Tény - Terv) különbséget változatlan előjellel, minden költségtételnél (változó, közvetlen fix, adminisztratív, raktár, marketing) viszont (-1)-gyel megszorozva számítjuk ki az eredményre gyakorolt hatást.",
    "whyAndHow": "A vízesés-diagram (waterfall chart) a vezetői beszámolók legfontosabb vizuális eszköze: azonnal megmutatja, hogy a tervezett eredményhez (4073,65 eFt) képest mely tényezők növelték (pl. magasabb árbevétel +1811,35 eFt, alacsonyabb raktárktg. +152 eFt) és melyek csökkentették (pl. többlet változó ktg. -955 eFt) a tényeredményt (4872 eFt).",
    "benchmark": "Költségtúllépés (Tény > Terv) -> negatív eredményhatás (-); Költségmegtakarítás (Tény < Terv) -> pozitív eredményhatás (+).",
    "excelFormula": "ÁB hatás =F64-E64 | Költség hatása =(F65-E65)*-1 | Tény EBIT = Terv EBIT + SUM(Hatások)"
  },
  {
    "id": "dt-07",
    "course": "dt",
    "courseName": "Döntéstámogatás",
    "category": "Teljesítménymérés, Value Driver Tree és Stratégiai Controlling",
    "source": "Előadás 29. dia",
    "name": "Teljesítménymérés alapfogalmai: Eredményesség, Hatékonyság és Igényesség",
    "latex": "\\text{Eredményesség} = \\frac{\\text{Elért output (Tény)}}{\\text{Tervezett output (Cél)}}, \\qquad \\text{Hatékonyság} = \\frac{\\text{Output}}{\\text{Input}}, \\qquad \\text{Igényesség} = \\frac{\\text{Input}}{\\text{Output}} = \\frac{1}{\\text{Hatékonyság}}",
    "altLatex": [
      "\\text{Célok (Miért?)} \\longleftrightarrow \\text{Eredmények / Output (Mit?)} \\longleftrightarrow \\text{Erőforrások / Input (Miből?)}"
    ],
    "variables": [
      {
        "sym": "Eredményesség",
        "desc": "Effectiveness – a kitűzött célok megvalósításának foka (Output / Cél)",
        "unit": "%"
      },
      {
        "sym": "Hatékonyság",
        "desc": "Efficiency – egységnyi ráfordítással (inputtal) elért hozam (Output / Input)",
        "unit": "egység"
      },
      {
        "sym": "Igényesség",
        "desc": "Egy egységnyi eredmény (output) előállításához szükséges erőforrás-mennyiség (Input / Output)",
        "unit": "egység"
      }
    ],
    "whatIsIt": "A controlling és teljesítménymenedzsment három gyakran összekevert alapfogalmának pontos matematikai elhatárolása.",
    "whatWeCalculate": "Az eredményességnél a tényteljesítményt a kitűzött célhoz, a hatékonyságnál a kibocsátást (outputot) a felhasznált erőforráshoz (inputhoz), az igényességnél pedig a felhasznált erőforrást az outputhoz viszonyítjuk.",
    "whyAndHow": "Egy szervezet lehet egyszerre eredményes, de nem hatékony (ha elérte a célt, de túl sok erőforrást pazarolt el hozzá), vagy hatékony, de eredménytelen (ha kevés inputból olcsón gyártott olyan terméket, amelyre nincs piaci kereslet).",
    "benchmark": "Cél: a Hatékonyság (Output/Input) maximalizálása, illetve a fajlagos erőforrás-igényesség (Input/Output) minimalizálása.",
    "excelFormula": "Hatékonyság = Output / Input | Igényesség = Input / Output"
  },
  {
    "id": "dt-08",
    "course": "dt",
    "courseName": "Döntéstámogatás",
    "category": "Teljesítménymérés, Value Driver Tree és Stratégiai Controlling",
    "source": "Előadás 37–38., 55. dia",
    "name": "Value Driver Tree (Értékvezérlő fa): EVA, Spread, ROCE és Nettó forgótőke (NWC)",
    "latex": "\\text{EVA} = \\text{Spread} \\times \\text{Befektetett tőke} = (\\text{ROCE} - \\text{WACC}) \\times \\text{Befektetett tőke}, \\qquad \\text{ROCE} = \\frac{\\text{EBIT}}{\\text{Befektetett tőke}}",
    "altLatex": [
      "\\text{Befektetett tőke (CE)} = \\text{Befektetett eszközök} + \\text{NWC}, \\qquad \\text{NWC} = (\\text{Készletek} + \\text{Vevők} + \\text{Adott előleg}) - (\\text{Szállítók} + \\text{Kapott előleg})"
    ],
    "variables": [
      {
        "sym": "EVA",
        "desc": "Gazdasági hozzáadott érték / Szegmens által hozzáadott érték (Economic Value Added)",
        "unit": "eFt"
      },
      {
        "sym": "ROCE, WACC",
        "desc": "Befektetett tőke megtérülése (EBIT / Befektetett tőke) és Súlyozott átlagos tőkeköltség",
        "unit": "%"
      },
      {
        "sym": "Spread",
        "desc": "Tőkearányos többlethozam (ROCE - WACC)",
        "unit": "%-pont"
      },
      {
        "sym": "NWC",
        "desc": "Operatív nettó forgótőke (Net Working Capital)",
        "unit": "eFt"
      }
    ],
    "whatIsIt": "Az értékalapú vállalatirányítás (Value Driver Tree) csúcsképlete, amely a számviteli eredményt a lekötött tőke alternatív költségével (WACC) veti össze.",
    "whatWeCalculate": "A befektetett tőke megtérüléséből (ROCE = EBIT / Befektetett tőke) levonjuk a tőkeköltséget (WACC), és a kapott Spreadet megszorozzuk a befektetett tőkével (Befektetett eszközök + Nettó forgótőke).",
    "whyAndHow": "Valódi tulajdonosi értékteremtés (EVA > 0) csak akkor történik, ha a ROCE meghaladja a WACC-ot (Spread > 0). Az értékvezérlő fa megmutatja, hogy a controller két fő ágon javíthatja az EVA-t: az eredményágon az EBIT növelésével, a tőkeágon pedig a készletekben és vevőkövetelésekben lekötött nettó forgótőke (NWC) csökkentésével.",
    "benchmark": "Értékteremtés feltétele: ROCE > WACC (azaz Spread > 0 és EVA > 0).",
    "excelFormula": "ROCE = EBIT / (Befektetett eszközök + Nettó forgótőke) | EVA = (ROCE - WACC) * Befektetett tőke"
  },
  {
    "id": "dt-09",
    "course": "dt",
    "courseName": "Döntéstámogatás",
    "category": "Teljesítménymérés, Value Driver Tree és Stratégiai Controlling",
    "source": "Előadás 35–53., 73. dia",
    "name": "Stratégiai Döntéstámogatási Keretrendszerek: SMART KPI, Balanced Scorecard (BSC), Hoshin Kanri és Analitika",
    "latex": "\\text{BSC 4 nézőpont: } \\text{Tanulás és fejlődés} \\longrightarrow \\text{Belső folyamatok} \\longrightarrow \\text{Vevői} \\longrightarrow \\text{Pénzügyi}",
    "altLatex": [
      "\\text{SMART KPI: } \\textbf{S}\\text{pecific (Konkrét)} \\cdot \\textbf{M}\\text{easurable (Mérhető)} \\cdot \\textbf{A}\\text{chievable (Elérhető)} \\cdot \\textbf{R}\\text{elevant (Releváns)} \\cdot \\textbf{T}\\text{imely (Időhöz kötött)}",
      "\\text{Hoshin Kanri X-mátrix: Dél (3–5 éves cél)} \\to \\text{Nyugat (Éves cél)} \\to \\text{Észak (Prioritások)} \\to \\text{Kelet (KPI-ok és Felelősök)}",
      "\\text{Controlling analitika 4 szintje: } 1.\\ \\text{Leíró (Mi történt?)} \\to 2.\\ \\text{Diagnosztikai (Miért?)} \\to 3.\\ \\text{Prediktív (Mi fog?)} \\to 4.\\ \\text{Preskriptív (Mit tegyünk?)}"
    ],
    "variables": [
      {
        "sym": "BSC 4 elem",
        "desc": "Minden nézőpontban: Célok -> Mutatók (KPI) -> Elvárások (Célértékek) -> Intézkedések (Akciók)",
        "unit": "-"
      },
      {
        "sym": "Leading vs. Lagging",
        "desc": "Előrejelző / teljesítményokozó (leading) és utólagos / eredménymutatók (lagging)",
        "unit": "-"
      },
      {
        "sym": "Catchball",
        "desc": "A Hoshin Kanri 4. lépése: a KPI-ok és felelősségek kétirányú, visszacsatolásos egyeztetése",
        "unit": "-"
      }
    ],
    "whatIsIt": "A stratégiai controlling és teljesítménymenedzsment elméleti és gyakorlati keretrendszerei, amelyek a hosszú távú stratégiát operatív célokká és mérhető KPI-okká fordítják le.",
    "whatWeCalculate": "A SMART-kritériumokkal validáljuk a KPI-okat; a Balanced Scorecarddal (20–25 mutatóval) ok-okozati láncba rendezzük a 4 nézőpontot; a Hoshin Kanri X-mátrixszal pedig egyetlen vizuális lapon hangoljuk össze a 3–5 éves célokat, az éves célokat, a fejlesztési akciókat, a KPI-okat és a felelősöket.",
    "whyAndHow": "A BSC legfontosabb szabálya, hogy minden nem pénzügyi (tanulási, folyamatbeli, vevői) mutatónak ok-okozati láncolaton keresztül végső soron a Pénzügyi célok elérését kell szolgálnia. Az analitikai szintek pedig megmutatják, hogyan válik a múltat rögzítő számvitelből proaktív, jövőorientált döntéstámogatás.",
    "benchmark": "BSC optimális mutatószám: összesen 20–25 db ok-okozati kapcsolatban álló mutató a 4 nézőpont között.",
    "excelFormula": "Célok -> Mutatók (SMART KPI) -> Elvárások -> Intézkedések"
  }
];

window.PRACTICE_PROBLEMS = [
  {
    "id": "prac-vsz-1",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "title": "Fedezeti elemzés és a „Négy alapvető út” (Gyakorlat.xlsx – 3–4. munkalap)",
    "source": "Gyakorlat.xlsx • 3. és 4. feladat (Napelem divízió)",
    "scenario": "A Napelem divízió éves nettó árbevétele (ÁB) 300 000 eFt, változó költsége (K_v) 195 000 eFt, fix költsége (K_fix) 90 000 eFt. A vezetőség által elvárt cél-eredményhányad (EH_cél) 10%.",
    "steps": [
      {
        "label": "Fedezeti összeg (F = ÁB - K_v)",
        "unit": "eFt",
        "answer": 105000,
        "tolerance": 1,
        "formula": "300 000 - 195 000 = 105 000 eFt"
      },
      {
        "label": "Fedezeti hányad (FH = F / ÁB)",
        "unit": "%",
        "answer": 35.0,
        "tolerance": 0.1,
        "formula": "105 000 / 300 000 = 35,0%"
      },
      {
        "label": "Jelenlegi üzemi eredmény (E = F - K_fix)",
        "unit": "eFt",
        "answer": 15000,
        "tolerance": 1,
        "formula": "105 000 - 90 000 = 15 000 eFt (EH = 5%)"
      },
      {
        "label": "Fedezeti pont értékben (FP = K_fix / FH)",
        "unit": "eFt",
        "answer": 257142.86,
        "tolerance": 5,
        "formula": "90 000 / 0,35 = 257 142,86 eFt"
      },
      {
        "label": "Hiányzó eredménytömeg a 10%-os célhoz (ΔE_szüks)",
        "unit": "eFt",
        "answer": 15000,
        "tolerance": 1,
        "formula": "(10% - 5%) × 300 000 = 15 000 eFt"
      },
      {
        "label": "1. út: Szükséges fixköltség-csökkentés (% erőkifejtés)",
        "unit": "%",
        "answer": 16.67,
        "tolerance": 0.1,
        "formula": "15 000 / 90 000 = 16,67%"
      },
      {
        "label": "4. út: Volumenbővítésnél szükséges tervezett ÁB",
        "unit": "eFt",
        "answer": 360000,
        "tolerance": 1,
        "formula": "K_fix / (FH - EH_cél) = 90 000 / (0,35 - 0,10) = 360 000 eFt (+20% erőkifejtés)"
      }
    ]
  },
  {
    "id": "prac-vsz-2",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "title": "Reagálási fok, Redukált költségek és Határköltség (Gyakorlat.xlsx – 5. munkalap)",
    "source": "Gyakorlat.xlsx • 5. feladat (A és B üzem)",
    "scenario": "Az „A” üzem 16 000 db terméket gyárt, árbevétele 32 000 eFt. Költségei: Proporcionális (r=1) 14 500 eFt; Degresszív (r=0,8) 4 200 eFt; Fix (r=0) 4 940 eFt.",
    "steps": [
      {
        "label": "Összes költség (K_össz)",
        "unit": "eFt",
        "answer": 23640,
        "tolerance": 1,
        "formula": "14 500 + 4 200 + 4 940 = 23 640 eFt"
      },
      {
        "label": "Redukált változó költség (K_red,vált = Σ K_i * r_i)",
        "unit": "eFt",
        "answer": 17860,
        "tolerance": 1,
        "formula": "14 500×1 + 4 200×0,8 + 4 940×0 = 17 860 eFt"
      },
      {
        "label": "Redukált fix költség (K_red,fix = K_össz - K_red,vált)",
        "unit": "eFt",
        "answer": 5780,
        "tolerance": 1,
        "formula": "23 640 - 17 860 = 5 780 eFt (azaz 4 940 + 4 200×0,2)"
      },
      {
        "label": "Átlagos reagálási fok (r_átl = K_red,vált / K_össz)",
        "unit": "%",
        "answer": 75.55,
        "tolerance": 0.1,
        "formula": "17 860 / 23 640 = 75,55%"
      },
      {
        "label": "Fedezeti összeg (F = ÁB - K_red,vált)",
        "unit": "eFt",
        "answer": 14140,
        "tolerance": 1,
        "formula": "32 000 - 17 860 = 14 140 eFt"
      },
      {
        "label": "Határköltség (k_határ = K_red,vált / Q)",
        "unit": "Ft/db",
        "answer": 1116.25,
        "tolerance": 0.5,
        "formula": "17 860 eFt / 16 000 db × 1000 = 1 116,25 Ft/db"
      }
    ]
  },
  {
    "id": "prac-vsz-3",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "title": "Szűk keresztmetszet és Optimális termelési program (Gyakorlat.xlsx – 6. munkalap)",
    "source": "Gyakorlat.xlsx • 6. feladat",
    "scenario": "A vállalat gépóra-kapacitása 25%-kal nő (36 800-ról 46 000 gépórára), a gépköltség 73 600 eFt (degresszív, r = 0,75). A termékek fajlagos fedezete (f_i) és gépóra-igénye (g_i): A termék: f_A = 1 020 Ft/db, g_A = 1,2 óra/db; B termék: f_B = 2 570 Ft/db, g_B = 1,6 óra/db; C termék: f_C = 1 650 Ft/db, g_C = 1,0 óra/db.",
    "steps": [
      {
        "label": "Növelt gépköltség (K_gép,1 = K_0 × (1 + 25% × 75%))",
        "unit": "eFt",
        "answer": 87400,
        "tolerance": 1,
        "formula": "73 600 × (1 + 0,1875) = 87 400 eFt"
      },
      {
        "label": "1 gépóra kalkulált költsége (k_gó = K_gép,1 / Kap_1)",
        "unit": "Ft/gépóra",
        "answer": 1900,
        "tolerance": 1,
        "formula": "87 400 000 Ft / 46 000 gépóra = 1 900 Ft/gépóra"
      },
      {
        "label": "A termék fajlagos gépóra fedezete (f_gó,A = f_A / g_A)",
        "unit": "Ft/gépóra",
        "answer": 850,
        "tolerance": 1,
        "formula": "1 020 / 1,2 = 850 Ft/gépóra (Rangsor: 3. hely)"
      },
      {
        "label": "B termék fajlagos gépóra fedezete (f_gó,B = f_B / g_B)",
        "unit": "Ft/gépóra",
        "answer": 1606.25,
        "tolerance": 0.5,
        "formula": "2 570 / 1,6 = 1 606,25 Ft/gépóra (Rangsor: 2. hely)"
      },
      {
        "label": "C termék fajlagos gépóra fedezete (f_gó,C = f_C / g_C)",
        "unit": "Ft/gépóra",
        "answer": 1650,
        "tolerance": 1,
        "formula": "1 650 / 1,0 = 1 650 Ft/gépóra (Rangsor: 1. hely!)"
      }
    ]
  },
  {
    "id": "prac-vsz-4",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "title": "Termelési költség, BTÉ, AMTÉ és NTÉ levezetése (Gyakorlat.xlsx – 7. munkalap)",
    "source": "Gyakorlat.xlsx • 7. feladat",
    "scenario": "Forgalmi költségű eredménykimutatás adatai (eFt): Nettó árbevétel = 148 000; ÉKÖK = 98 200 (ebből ELÁBÉ = 4 500, Közvetített szolg. = 9 700); Értékesítés közvetett költségei = 21 000; STKÁV = +1 550; SEEAÉ = 2 450. A termelési költségből: Anyagköltség = 52%, Igénybe vett szolg. = 15% (amelynek 60%-a anyagjellegű), ÉCS = 8%.",
    "steps": [
      {
        "label": "Tárgyidőszaki Termelési költség (K_term)",
        "unit": "eFt",
        "answer": 109000,
        "tolerance": 1,
        "formula": "98 200 + 21 000 - 4 500 - 9 700 + 1 550 + 2 450 = 109 000 eFt"
      },
      {
        "label": "Bruttó termelési érték (BTÉ)",
        "unit": "eFt",
        "answer": 137800,
        "tolerance": 1,
        "formula": "148 000 - 4 500 - 9 700 + 1 550 + 2 450 = 137 800 eFt"
      },
      {
        "label": "Anyagköltség (52%) + Anyagjell. szolg. (15% × 60%)",
        "unit": "eFt",
        "answer": 66490,
        "tolerance": 1,
        "formula": "109 000 × 0,52 (56 680) + 109 000 × 0,15 × 0,60 (9 810) = 66 490 eFt"
      },
      {
        "label": "Anyagmentes termelési érték (AMTÉ)",
        "unit": "eFt",
        "answer": 71310,
        "tolerance": 1,
        "formula": "137 800 - 56 680 - 9 810 = 71 310 eFt"
      },
      {
        "label": "Nettó termelési érték (NTÉ = AMTÉ - ÉCS)",
        "unit": "eFt",
        "answer": 62590,
        "tolerance": 1,
        "formula": "71 310 - (109 000 × 0,08 = 8 720) = 62 590 eFt"
      }
    ]
  },
  {
    "id": "prac-vsz-5",
    "course": "vsz",
    "courseName": "Vezetői számvitel",
    "title": "Egyenértékszámos osztókalkuláció (Gyakorlat.xlsx – 8. munkalap)",
    "source": "Gyakorlat.xlsx • 8. feladat",
    "scenario": "Három rokon termék (A, B, C) mennyisége és egyenértékszáma: A: 5 600 db (e=0,8); B: 4 000 db (e=1,0 vezértermék); C: 3 800 db (e=1,5). Nyitó befejezetlen termelés = 3 400 eFt, Záró BT = 4 850 eFt. Tárgyidőszaki közvetlen költség = 58 200 eFt, megtérült hulladék = 468 eFt, felosztott üzemi általános költség = 18 094 eFt.",
    "steps": [
      {
        "label": "Vezértermékben kifejezett összes mennyiség (Q_v)",
        "unit": "vezér db",
        "answer": 14180,
        "tolerance": 1,
        "formula": "5600×0,8 (4480) + 4000×1,0 (4000) + 3800×1,5 (5700) = 14 180 db"
      },
      {
        "label": "Befejezetlen termelés állományváltozása (ΔBT = Záró - Nyitó)",
        "unit": "eFt",
        "answer": 1450,
        "tolerance": 1,
        "formula": "4 850 - 3 400 = +1 450 eFt (levonandó a tárgyidőszaki költségből!)"
      },
      {
        "label": "Kalkulációba vehető közvetlen önköltség (K_kalk)",
        "unit": "eFt",
        "answer": 74376,
        "tolerance": 1,
        "formula": "-1 450 + 58 200 - 468 + 18 094 = 74 376 eFt"
      },
      {
        "label": "1 db vezértermék (B) önköltsége (k_v = K_kalk / Q_v)",
        "unit": "eFt/db",
        "answer": 5.245,
        "tolerance": 0.01,
        "formula": "74 376 / 14 180 = 5,245 eFt/db (5 245 Ft/db)"
      },
      {
        "label": "A termék fajlagos önköltsége (k_A = k_v × 0,8)",
        "unit": "eFt/db",
        "answer": 4.196,
        "tolerance": 0.01,
        "formula": "5,245 × 0,8 = 4,196 eFt/db"
      },
      {
        "label": "C termék fajlagos önköltsége (k_C = k_v × 1,5)",
        "unit": "eFt/db",
        "answer": 7.868,
        "tolerance": 0.01,
        "formula": "5,245 × 1,5 = 7,868 eFt/db"
      }
    ]
  },
  {
    "id": "prac-pke-1",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "title": "Likviditási ráták és Négyfokozatú Likviditási Mérleg (Likviditási mérleg.xlsx)",
    "source": "Mutatószám elemzés_Likviditási mérleg.xlsx • KOMPLEX munkalap",
    "scenario": "Tárgyévi mérlegadatok (eFt): Befektetett eszközök = 839 240; Készletek = 398 112 (85%-a éven belül mobilizálható); Követelések = 407 823 (92%-a éven belül mobilizálható); Értékpapírok = 56 320; Pénzeszközök = 43 431; AIE = 42 752. Saját tőke = 795 366; Céltartalék = 50 400; HLK = 197 464; RLK = 708 994 (ebből Szállítók = 342 365, amelynek 15%-a 10 napon belüli; Egyéb RLK = 98 929); PIE = 35 454.",
    "steps": [
      {
        "label": "Általános likviditási ráta (FE / RLK)",
        "unit": "arány",
        "answer": 1.277,
        "tolerance": 0.01,
        "formula": "905 686 / 708 994 = 1,28"
      },
      {
        "label": "Likviditási gyorsráta ((FE - Készletek) / RLK)",
        "unit": "arány",
        "answer": 0.716,
        "tolerance": 0.01,
        "formula": "(905 686 - 398 112) / 708 994 = 0,72"
      },
      {
        "label": "Likvid eszközök (E1 = Értékpapírok + Pénzeszközök)",
        "unit": "eFt",
        "answer": 99751,
        "tolerance": 1,
        "formula": "56 320 + 43 431 = 99 751 eFt"
      },
      {
        "label": "Azonnal esedékes tartozások (F1 = 15% Szállítók + Egyéb RLK)",
        "unit": "eFt",
        "answer": 150283.75,
        "tolerance": 1,
        "formula": "342 365 × 0,15 + 98 929 = 150 283,75 eFt"
      },
      {
        "label": "Azonnali fizetőképesség (E1 - F1)",
        "unit": "eFt",
        "answer": -50532.75,
        "tolerance": 1,
        "formula": "99 751 - 150 283,75 = -50 532,75 eFt (likviditási hiány!)"
      },
      {
        "label": "Rövid távú fizetőképesség ((E1+E2) - (F1+F2))",
        "unit": "eFt",
        "answer": 61768.21,
        "tolerance": 2,
        "formula": "856 095,21 - 794 327,00 = +61 768,21 eFt (likviditási többlet)"
      }
    ]
  },
  {
    "id": "prac-pke-2",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "title": "Hagyományos és Módosított Pénzkonverziós Ciklus (Szemináriumi feladatsor.xlsx)",
    "source": "Szemináriumi feladatsor.xlsx • Row 136–154",
    "scenario": "Tárgyévi nettó árbevétel = 3 231 542 eFt, bruttó eredmény (ÉBE) = 1 180 652 eFt. Átlagos állományok: Átlagkészlet = 357 056 eFt; Átlagos vevőállomány = 335 768,5 eFt; Átlagos szállítóállomány = 319 011,5 eFt. A hitelben (halasztott fizetéssel) történő értékesítés aránya 78%.",
    "steps": [
      {
        "label": "Átlagos készletezési időszak (KI = 365 / (ÁB / Átlagkészlet))",
        "unit": "nap",
        "answer": 40.33,
        "tolerance": 0.1,
        "formula": "365 / (3 231 542 / 357 056 = 9,05) = 40,33 nap"
      },
      {
        "label": "Átlagos beszedési időszak (BI = 365 / (ÁB / Átlagos vevők))",
        "unit": "nap",
        "answer": 37.92,
        "tolerance": 0.1,
        "formula": "365 / (3 231 542 / 335 768,5 = 9,62) = 37,92 nap"
      },
      {
        "label": "Átlagos tartozási időszak (TI = 365 / (ÁB / Átlagos szállítók))",
        "unit": "nap",
        "answer": 36.03,
        "tolerance": 0.1,
        "formula": "365 / (3 231 542 / 319 011,5 = 10,13) = 36,03 nap"
      },
      {
        "label": "Hagyományos Pénzciklus (KI + BI - TI)",
        "unit": "nap",
        "answer": 42.22,
        "tolerance": 0.15,
        "formula": "40,33 + 37,92 - 36,03 = 42,22 nap"
      },
      {
        "label": "Módosított KI (KI × (1 - Bruttó ROS))",
        "unit": "nap",
        "answer": 25.59,
        "tolerance": 0.1,
        "formula": "Bruttó ROS = 1 180 652 / 3 231 542 = 36,54% -> 40,33 × (1 - 0,3654) = 25,59 nap"
      },
      {
        "label": "Módosított Pénzciklus (Mód. KI + BI×78% - TI)",
        "unit": "nap",
        "answer": 19.14,
        "tolerance": 0.15,
        "formula": "25,59 + (37,92 × 0,78 = 29,58) - 36,03 = 19,14 nap"
      }
    ]
  },
  {
    "id": "prac-pke-3",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "title": "DuPont-elemzés (3 és 5 tényezős ROE) és DOL / DFL / DCL (Szemináriumi feladatsor.xlsx)",
    "source": "Szemináriumi feladatsor.xlsx • Row 173–204",
    "scenario": "Bázisévi adatok (eFt): Árbevétel = 3 158 550; ÜÜTE = 224 445; AEE = 181 735; Adózott eredmény (AE) = 160 882; Összes eszköz = 1 605 568; Saját tőke = 749 234. Tárgyévre az ÁB +2,31%-kal, az ÜÜTE +15,72%-kal, az AE +17,22%-kal nőtt.",
    "steps": [
      {
        "label": "Bázis Nettó ROS (AE / ÁB)",
        "unit": "%",
        "answer": 5.09,
        "tolerance": 0.05,
        "formula": "160 882 / 3 158 550 = 5,09%"
      },
      {
        "label": "Bázis Eszközforgás (ÁB / Összes eszköz)",
        "unit": "fordulat",
        "answer": 1.967,
        "tolerance": 0.01,
        "formula": "3 158 550 / 1 605 568 = 1,967"
      },
      {
        "label": "Bázis ROA (AE / Összes eszköz = Nettó ROS × Eszközforgás)",
        "unit": "%",
        "answer": 10.02,
        "tolerance": 0.05,
        "formula": "160 882 / 1 605 568 = 10,02%"
      },
      {
        "label": "Bázis Saját tőke multiplikátor (STM = Összes eszköz / ST)",
        "unit": "szeres",
        "answer": 2.143,
        "tolerance": 0.01,
        "formula": "1 605 568 / 749 234 = 2,143"
      },
      {
        "label": "Bázis ROE (ROA × STM = AE / ST)",
        "unit": "%",
        "answer": 21.47,
        "tolerance": 0.05,
        "formula": "160 882 / 749 234 = 21,47%"
      },
      {
        "label": "Működési tőkeáttétel (DOL = %ΔÜÜTE / %ΔÁB)",
        "unit": "szeres",
        "answer": 6.8,
        "tolerance": 0.1,
        "formula": "15,72% / 2,31% = 6,80"
      },
      {
        "label": "Pénzügyi tőkeáttétel (DFL = %ΔAE / %ΔÜÜTE)",
        "unit": "szeres",
        "answer": 1.1,
        "tolerance": 0.05,
        "formula": "17,22% / 15,72% = 1,10 (DCL = 6,80 × 1,10 = 7,45)"
      }
    ]
  },
  {
    "id": "prac-pke-4",
    "course": "pke",
    "courseName": "Pénzügyi kimutatások elemzése",
    "title": "Szabad Cash Flow: FCFF és FCFE számítása (Cash flow munkalap)",
    "source": "Szemináriumi feladatsor.xlsx • Cash flow munkalap (Row 60–82)",
    "scenario": "Tárgyévi Cash Flow és eredményadatok (eFt): Adózott eredmény (AE) = 188 591; Fizetett kamat = 42 520; Effektív adókulcs (T) = 10,077%; ÉCS és nem pénzmozgásos korrekciók (2–5. sor) = 123 197; Nettó forgótőke-változás (6–11. sor, pénzkiáramlás) = -126 111; Fizetett osztalék (13. sor) = 142 459; Működési CF = 43 218; Befektetési CF = -109 802; Nettó hitelfelvétel (Felvett 169 062 - Törlesztett 77 102) = +91 960.",
    "steps": [
      {
        "label": "Adópajzzsal csökkentett kamat: Kamat × (1 - T)",
        "unit": "eFt",
        "answer": 38235.15,
        "tolerance": 2,
        "formula": "42 520 × (1 - 0,10077) = 38 235,15 eFt"
      },
      {
        "label": "FCFF (CF-kimutatásból: Műk.CF + Osztalék + Kamat(1-T) + Bef.CF)",
        "unit": "eFt",
        "answer": 114110.15,
        "tolerance": 2,
        "formula": "43 218 + 142 459 + 38 235,15 - 109 802 = 114 110,15 eFt"
      },
      {
        "label": "FCFE (FCFF - Kamat×(1-T) + Nettó hitelfelvétel)",
        "unit": "eFt",
        "answer": 167835.0,
        "tolerance": 2,
        "formula": "114 110,15 - 38 235,15 + (169 062 - 77 102) = 167 835 eFt"
      }
    ]
  },
  {
    "id": "prac-dt-1",
    "course": "dt",
    "courseName": "Döntéstámogatás",
    "title": "High-Low költségfelbontás, Árkalkuláció, Árérzékenység és Vízesés (Operatív tervezés_Botond.xlsx)",
    "source": "Operatív tervezés (levelező)_Botond.xlsx • 1–4. feladat",
    "scenario": "A „B” termék múltbeli pozitív (Q>0) minimuma: Q_min = 9 db, K(Q_min) = 535 eFt; maximuma: Q_max = 100 db, K(Q_max) = 1 900 eFt. Tervezett havi mennyiség Q_B = 74 db. A „B” termékre felosztott közvetett költségek: Adminisztratív = 674,42 eFt, Raktár = 483,33 eFt, Marketing = 217,78 eFt. Elvárt árbevétel-arányos nyereség m = 20%, árérzékenység E_p = 2,2.",
    "steps": [
      {
        "label": "B termék fajlagos változó költsége (k_v = ΔK / ΔQ)",
        "unit": "eFt/db",
        "answer": 15.0,
        "tolerance": 0.01,
        "formula": "(1 900 - 535) / (100 - 9) = 1 365 / 91 = 15,00 eFt/db"
      },
      {
        "label": "B termék közvetlen fix költsége (K_f,közv = K_max - k_v×Q_max)",
        "unit": "eFt",
        "answer": 400.0,
        "tolerance": 0.1,
        "formula": "1 900 - 15 × 100 = 400 eFt"
      },
      {
        "label": "B termék tervezett havi összköltsége (74 db-ra)",
        "unit": "eFt",
        "answer": 2885.53,
        "tolerance": 0.5,
        "formula": "74×15 (1 110) + 400 + 674,42 + 483,33 + 217,78 = 2 885,53 eFt"
      },
      {
        "label": "B termék fajlagos önköltsége (k_ön = K_terv / Q_B)",
        "unit": "eFt/db",
        "answer": 38.99,
        "tolerance": 0.05,
        "formula": "2 885,53 / 74 = 38,99 eFt/db"
      },
      {
        "label": "B termék eladási ára 20%-os eredménycélnál (P_B = k_ön / 0,8)",
        "unit": "eFt/db",
        "answer": 48.74,
        "tolerance": 0.05,
        "formula": "38,9936 / (1 - 0,20) = 48,74 eFt/db"
      },
      {
        "label": "B termék fedezeti pontja (Q_fed = Összes fix ktg / (P_B - k_v))",
        "unit": "db",
        "answer": 52.62,
        "tolerance": 0.1,
        "formula": "(400 + 674,42 + 483,33 + 217,78) / (48,742 - 15) = 1 775,53 / 33,742 = 52,62 db"
      },
      {
        "label": "B termék biztonsági határa (BH = Q_terv - Q_fed)",
        "unit": "db",
        "answer": 21.38,
        "tolerance": 0.1,
        "formula": "74 - 52,62 = 21,38 db"
      },
      {
        "label": "5%-os áremelésnél a volumenváltozás (%ΔQ = -2,2 × 5%)",
        "unit": "%",
        "answer": -11.0,
        "tolerance": 0.1,
        "formula": "-2,2 × 5% = -11,0% (az EBIT 609,89 eFt-ról 508,97 eFt-ra csökken!)"
      }
    ]
  }
];

window.EXTRA_QUIZ_QUESTIONS = [
  {
    "course": "vsz",
    "q": "Milyen költségnek minősül az a költségtétel, amelynek reagálási foka (költségváltozási tényezője) r = 0,75?",
    "options": [
      "Degresszív változó költség (a volumen növekedésénél kisebb ütemben nő)",
      "Progresszív változó költség (a volumen növekedésénél gyorsabb ütemben nő)",
      "Proporcionális változó költség (a volumennel egyenesen arányos)",
      "Regresszív változó költség (a volumen növekedésekor abszolút összegben csökken)"
    ],
    "correct": 0,
    "explanation": "Ha 0 < r < 1 (itt r = 0,75), a költség degresszív: 1%-os volumennövekedés hatására a költség csak 0,75%-kal emelkedik. Redukáláskor a 75%-a proporcionális változó, 25%-a (1 - r) redukált fix költségnek minősül."
  },
  {
    "course": "vsz",
    "q": "Szűk keresztmetszet (pl. korlátos gépóra-kapacitás) esetén mi alapján kell felállítani a termékek gyártási rangsorát?",
    "options": [
      "Az 1 gépórára (szűk keresztmetszeti egységre) jutó fajlagos fedezet alapján",
      "Az 1 darab termékre jutó fajlagos fedezet (p - k_v) alapján",
      "A termékek eladási ára és piaci kereslete alapján",
      "A termékek teljes önköltségének nagysága alapján"
    ],
    "correct": 0,
    "explanation": "Amikor egy erőforrás (pl. gépóra) korlátos, a vállalati összfedezetet az a gyártási program maximalizálja, amely a szűk keresztmetszet 1 egységére (Ft/gépóra = f_i / g_i) a legmagasabb fedezetet termeli."
  },
  {
    "course": "vsz",
    "q": "Az Átmenő teljesítményszámítás (Throughput Accounting – TPA) módszerében melyik költség minősül EGYEDÜL változó költségnek?",
    "options": [
      "Kizárólag a közvetlen anyagköltség",
      "A közvetlen anyagköltség és a közvetlen bérköltség",
      "Minden közvetlen költség és a felosztott gépköltség",
      "Az összes termelési költség a vállalati általános költségek kivételével"
    ],
    "correct": 0,
    "explanation": "A TPA (Goldratt szűk keresztmetszet elméletére épülő módszer) kizárólag a közvetlen anyagköltséget tekinti változó költségnek; minden egyéb költséget (még a közvetlen munkabért is!) az adott időszak fix működési költségeként kezel."
  },
  {
    "course": "vsz",
    "q": "Mi történik a vállalat üzemi eredményével rövid távon, ha megszüntetünk egy olyan terméket, amely teljes önköltségen számolva veszteséges, de a rezsibíró képessége (fedezeti összege) pozitív?",
    "options": [
      "A vállalati üzemi eredmény a megszüntetett termék kieső fedezeti összegével CSÖKKEN",
      "A vállalati üzemi eredmény a termék eddigi veszteségével NŐ",
      "A vállalati üzemi eredmény nem változik",
      "A vállalati fix költségek automatikusan megszűnnek"
    ],
    "correct": 0,
    "explanation": "Ha a termék rezsibíró képessége (ÁB - K_v) pozitív, akkor hozzájárul a közös fix (rezsi-) költségek fedezéséhez. Megszüntetésekor a közös fix költségek megmaradnak, a fedezet viszont kiesik, így a vállalati eredmény pontosan a kieső fedezettel romlik!"
  },
  {
    "course": "pke",
    "q": "Milyen finanszírozási stratégiát folytat az a vállalkozás, amelynél a Befektetett eszközök fedezete II. mutató értéke 88% (azaz a Nettó forgótőke negatív)?",
    "options": [
      "Agresszív (kockázatos) finanszírozási stratégiát",
      "Konzervatív (óvatosnál biztonságosabb) finanszírozási stratégiát",
      "Óvatos (szolid / illeszkedő) finanszírozási stratégiát",
      "Tiszta saját tőkés finanszírozási stratégiát"
    ],
    "correct": 0,
    "explanation": "Ha a tartós források (ST + HLK) nem fedezik a befektetett eszközöket (Fedezet II. < 100%, azaz NFT < 0), akkor a vállalat még a tartós eszközeinek egy részét is rövid lejáratú kötelezettségekből finanszírozza, ami agresszív (likviditási szempontból kockázatos) stratégia."
  },
  {
    "course": "pke",
    "q": "Miért vonjuk ki a Szállítókat és az Egyéb rövid lejáratú kötelezettségeket a nevezőből az Idegen tőke átlagos költsége mutató számításakor?",
    "options": [
      "Mert a szállítói és adó-/bértartozások után a vállalat nem fizet banki ügyleti kamatot",
      "Mert a szállítók a saját tőke részét képezik",
      "Mert ezek éven túli lejáratú kötelezettségek",
      "Mert az eredménykimutatásban a kamatráfordítás már tartalmazza a szállítókat"
    ],
    "correct": 0,
    "explanation": "A Fizetendő kamatok (20. sor) csak a kamatozó hitelekre, kölcsönökre és kötvényekre vonatkozik. Ha a nevezőben benne hagynánk az ingyenes forrásként működő szállítókat és egyéb RLK-t, mesterségesen alulbecsülnénk a hitelek tényleges kamatlábát."
  },
  {
    "course": "pke",
    "q": "Hogyan szerepel a Vevőkövetelések állományának növekedése és a Befektetett eszközök értékesítésének nyeresége a számviteli Cash Flow kimutatás I. Működési cash flow részében?",
    "options": [
      "Mindkettő negatív (-) előjellel (csökkentő tételként)",
      "Mindkettő pozitív (+) előjellel (növelő tételként)",
      "A vevők növekedése (+), az eszközértékesítés nyeresége (-)",
      "A vevők növekedése (-), az eszközértékesítés nyeresége (+)"
    ],
    "correct": 0,
    "explanation": "A vevőállomány növekedése azt jelenti, hogy a kiszámlázott árbevétel egy része még nem folyt be pénzben (-). A befektetett eszközök eladásán elért nyereséget pedig azért kell az 5. sorban (-) előjellel kiszűrni az adózás előtti eredményből, mert a teljes eladási ár a Befektetési CF 15. sorában (+) szerepel."
  },
  {
    "course": "dt",
    "q": "Hogyan számoljuk ki egy termék eladási árát a Költség + nyereség ármodellben, ha a fajlagos teljes önköltség 39 eFt/db és az elvárt árbevétel-arányos eredményhányad 20%?",
    "options": [
      "P = 39 / (1 - 0,20) = 39 / 0,8 = 48,75 eFt/db",
      "P = 39 × 1,20 = 46,80 eFt/db",
      "P = 39 / 0,20 = 195,00 eFt/db",
      "P = 39 + 20 = 59,00 eFt/db"
    ],
    "correct": 0,
    "explanation": "Ha az elvárt nyereség az ELADÁSI ÁR (árbevétel) 20%-a, akkor az önköltség az eladási ár 80%-át teszi ki, tehát P = k_ön / (1 - 0,20) = k_ön / 0,8. (Ha 1,2-vel szoroznánk, az árbevétel-arányos nyereség csak 16,67% lenne!)"
  },
  {
    "course": "dt",
    "q": "Miért kell a High-Low (szélsőérték) költségfelbontásnál a minimum volumen kiválasztásakor a MINIFS(..., \">0\") feltételt használni?",
    "options": [
      "Mert a 0 db-os (gyártási leállásos) hónapot ki kell zárni az aktív termelési tartomány szélsőértékei közül",
      "Mert az Excel MIN függvénye nem működik egész számokra",
      "Mert negatív darabszámok is szerepelnek a múltbeli adatok között",
      "Mert a 0 db-os hónapban a fix költség is mindig 0 Ft"
    ],
    "correct": 0,
    "explanation": "A High-Low módszer a normál üzemszerű működés legkisebb (Q > 0) és legnagyobb kibocsátási pontja közé illeszt egyenest. A 0 db-os hónapban nincs termelés, viszont az akkori költség (pl. 400 eFt) közvetlenül megmutatja a fix költséget ellenőrzésként."
  },
  {
    "course": "dt",
    "q": "Hogyan hat az eladási ár emelése az üzemi eredményre (EBIT), ha a termék keresletének árérzékenysége E_p = 2,2?",
    "options": [
      "Az áremelés CSÖKKENTI az EBIT-et, mert 1% áremelés 2,2%-os volumenvisszaesést okoz",
      "Az áremelés NÖVELI az EBIT-et, mert a magasabb ár kompenzálja a kisebb mennyiséget",
      "Az EBIT változatlan marad",
      "A fix költségek 2,2%-kal csökkennek"
    ],
    "correct": 0,
    "explanation": "Mivel E_p = 2,2 > 1 (erősen árrugalmas kereslet), minden 1%-os áremelés 2,2%-kal veti vissza az értékesített darabszámot, így az összfedezet és az EBIT minden áremelési lépcsőben csökken."
  }
];
