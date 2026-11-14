# ∑ Egyetemi Függvénytáblázat & Interaktív Tanuló Webapp

**Vezetői számvitel • Pénzügyi kimutatások elemzése • Döntéstámogatás**

Ez a repository három pénzügyi-számviteli-controlling tárgy teljes féléves **előadásanyagának (PDF)** és **szemináriumi/gyakorlati Excel-munkafüzeteinek (`.xlsx`)** összes képletét, módszertani levezetését és értelmezését foglalja össze egy **GitHub Pages-en azonnal megosztható, nyomtatható függvénytáblázatban** és egy hozzá épített **5-módos interaktív tanuló webappban**.

---

## 🎯 Mi található a projektben?

Minden egyes képletkártya (összesen **58 komplex képletcsoport / több mint 130 rész-összefüggés**) tartalmazza:
1. **Matematikai (LaTeX / KaTeX) képletet** és alternatív felírási alakokat
2. **📌 Mi ez?** — A mutató vagy modell pontos definíciója és szerepe
3. **🧮 Mit számolunk?** — A számláló, a nevező és a számítási lépések gyakorlati levezetése
4. **💡 Miért és hogyan értelmezzük?** — Gazdasági-vezetői jelentés, döntési szabályok és vizsgacsapdák
5. **🎯 Irányadó értékek (Benchmarkok)** és **📊 Excel-képletek** a gyakorlati fájlok alapján

---

## 📚 Feldolgozott Tantárgyak és Forrásfájlok

### 1. Vezetői számvitel (`VSZ` — 28 képletkártya, 1–9. vizsgatétel)
* **Források:** `vezetői számvitel .pdf` (173 dia), `tételsor .pdf` (9 tétel), `Gyakorlat.xlsx` (11 munkalap), `Költségek vetítése.xlsx`
* **Témakörök és képletek:**
  * **1–2. tétel (Beszámoló és Költségalapfogalmak):** Mérleg „A” és „B” változat ($F = B+C-D-E$, $G = A+F = H+I+J$), Összköltség vs. Forgalmi költség eredménykimutatás ($\text{ÜTE}_{\text{ÖK}} \equiv \text{ÜTE}_{\text{FK}}$), Kiadás–Költség–Ráfordítás elhatárolása és raktári készletmérleg, Költségek dinamikus ($D_K = K_1/K_0$) és megoszlási viszonyszáma ($M_i = K_i/\sum K_i$).
  * **3. tétel (Rugalmasság és Fedezeti elemzés):** Költségfüggvény és egységköltség ($k = K_{\text{fix}}/Q + k_v$), Költségváltozási tényező / Reagálási fok ($r = \frac{\Delta K / K_0}{\Delta Q / Q_0}$), Átlagos reagálási fok ($\bar{r}$), Redukált változó ($K_{\text{red,vált}} = \sum K_i r_i$) és Redukált fix költség ($K_{\text{red,fix}}$), Határköltség ($k_{\text{határ}} = K_{\text{red,vált}}/Q$), Degresszív költség előrejelzése ($K_1 = K_0(1 + \Delta Q_{\%}\cdot r)$), Fedezeti összeg ($F$), Fedezeti hányad ($\text{FH}$), Eredményhányad ($\text{EH}$), Fedezeti pont mennyiségben ($Q_{\text{krit}}$) és értékben ($\text{FP} = K_{\text{fix}}/\text{FH}$), Cél-eredményhányad elérésének **„Négy alapvető útja”** és az **Erőkifejtés** mutatói (fix ktg. csökkentés, változó ktg. csökkentés, áremelés, volumenbővítés: $\text{ÁB}_{\text{terv}} = \frac{K_{\text{fix},0}}{\text{FH}_0 - \text{EH}_{\text{cél}}}$), Divízió toleranciája és mozgástér-mutatók, **Szűk keresztmetszet** (Fajlagos gépóra fedezet: $f_{\text{gó},i} = f_i / g_i$).
  * **4. tétel (Termelési érték kategóriák és Indexszámítás):** Termelési költség visszavezetése forgalmi költségű eredménykimutatásból, Feldolgozóipari termelési érték piramis ($\text{FKÉ} \to \text{BFTÉ} \to \text{TFTÉ} \to \text{BTÉ}$), Bruttó termelési érték ($\text{BTÉ}$), Anyagmentes termelési érték ($\text{AMTÉ}$), Nettó termelési érték ($\text{NTÉ}$), Hozzáadott érték ($\text{HÉ}$), Ár-, Volumen- és Értékindex ($I_{\text{É}} = I_{\text{Á}}\cdot I_{\text{V}}$, $K_{\text{É}} = K_{\text{Á}} + K_{\text{V}}$), Kumulatív eltérésfelbontás (Láncbehelyettesítés, Abszolút és Százalékos különbözetek módszere).
  * **5–7. tétel (Önköltségszámítás és Hagyományos kalkuláció):** Technológiai, Szűkített és Teljes önköltség, STKÁV eredményhatása, Egyszerű és Egyenértékszámos osztókalkuláció (vezértermék-módszer és befejezetlen termelés korrekciója), Pótlékoló kalkuláció, Normatív kalkuláció (alapnorma, folyónorma, normaváltozás, normaeltérés), Kupolkalkuláció (ikertermékek piaci hozamarányos költségfelosztása és indokolatlan költségek kiszűrése), Rezsibíró képesség.
  * **8–9. tétel (Modern kalkulációs módszerek):** Minőségköltség (QC), Kaizen (KC), Életciklusköltség (LCC), Célköltségszámítás (Target Costing: $K_{\text{cél}} = p_{\text{piaci}} - \pi_{\text{elvárt}}$), Értékáram-számítás (VSC), Átmenő teljesítményszámítás (TPA – csak a közvetlen anyagköltség változó!), Nullbázisú tervezés (ZBB), Tevékenységalapú (ABC/PKR) és Idővezérelt tevékenységalapú költségszámítás (TDABC).

---

### 2. Pénzügyi kimutatások elemzése (`PKE` — 21 képletkártya)
* **Források:** `pénzügyi kimutatások elemzése .pdf` (222 dia), `Mutatószám elemzés_Likviditási mérleg.xlsx`, `Szemináriumi feladatsor.xlsx`, `Gyakorló Feladatsor 5. hét.xlsx`
* **Témakörök és képletek:**
  * **Vagyoni helyzet (Vertikális eszköz- és forrásszerkezet):** Befektetett és Forgóeszközök részaránya, FE/BE arány, Belső eszközarányok (Immateriális, Tárgyi, Beruházások, Bef. pü. eszközök és azok átlagos hozama, Készletek, Anyagok, Áruk, Szabad forgóeszközök), Használhatósági fok és Megújítási mérték, Napi forgalmi alapú futamidő-mutatók (Anyagtárolási idő, Árutárolási idő, Követelések beszedési ideje, ÁFA-korrigált vevő- és szállítófutamidő), Tőkeerősség ($\ge 35\%$), Kötelezettségek aránya ($< 65\%$), ST/JT arány, Idegen tőke átlagos költsége (szállítók és egyéb RLK nélkül!).
  * **Horizontális mutatók és Finanszírozási stratégiák:** Befektetett eszközök fedezete I. és II. ($\ge 100\%$), Nettó forgótőke ($\text{NFT} = \text{FE} - \text{RLK} = \text{ST} + \text{HLK} - \text{BE}$: $>0$ konzervatív, $=0$ óvatos, $<0$ agresszív), Forgóeszközök tartósan finanszírozott hányada, Vevők/Szállítók.
  * **Likviditás, Likviditási mérleg és Pénzkonverziós ciklus:** Általános likviditási ráta ($1{,}3\text{–}1{,}7$), Gyorsráta ($0{,}8\text{–}1{,}0$), Készpénzlikviditás ($0{,}25\text{–}0{,}30$), Átfogó likviditási index ($\text{CLI}$, $1 - 1/\text{forgási sebesség}$ korrekcióval), **4-fokozatú Likviditási mérleg** ($E_1\dots E_4$, $F_1\dots F_4$, Azonnali, Rövid és Középtávú fizetőképesség), **Hagyományos és Módosított Pénzkonverziós Ciklus** ($\text{KI}, \text{BI}, \text{TI}$, Működési ciklus, Pénzciklus, $\text{Mód. KI} = \text{KI}(1-\text{Bruttó ROS})$, $\text{Mód. BI} = \text{BI}\cdot\text{Hitelarány}$).
  * **Eladósodottság, Tőkeáttétel és DuPont-elemzés:** Összes és Hosszú lejáratú eladósodottság, $D/E$, Saját tőke multiplikátor ($\text{STM}$), Kamatfedezet I. ($\ge 5$) és II. (EBITDA/Kamat), Tőkeáttételi hozamegyenlet ($r_E = r_A + (r_A - r_D)\frac{D}{E}$), **DOL, DFL, DCL**, Bruttó/Működési/Adózás előtti/Nettó ROS, ROA, ROE, **3-tényezős és 5-tényezős ROE DuPont-felbontás**.
  * **Cash Flow és Csődmodellek:** 27 soros Számviteli Cash Flow kimutatás, Bruttó CF és Finanszírozási erő, **FCFF** (2 módon) és **FCFE** (3 módon), Altman $Z$ és $Z'$-score, Springate-modell, Fulmer $H$-modell, **Hajdú–Virág magyar csődmodell**.

---

### 3. Döntéstámogatás (`DT` — 9 képletkártya)
* **Források:** `döntéstámogatás.pdf` (82 dia), `Operatív tervezés (levelező)_Botond.xlsx`
* **Témakörök és képletek:**
  * **Szélsőérték-módszer (High-Low költségfelbontás):** `MINIFS(>0)` minimumválasztás (0 db-os hónap kizárásával), fajlagos változó költség ($k_v = \Delta K / \Delta Q$) és közvetlen fix költség ($K_{f,\text{közv}} = K_{\max} - k_v Q_{\max}$).
  * **Általános költségek felosztása és Árkalkuláció:** Költségjellemzők (összes normaóra $\text{NO}_i = Q_i\cdot\text{no}_i$, raktár $\text{m}^2$, versenytárs db), Tervezett havi összköltség, Fajlagos önköltség ($k_{\text{ön},i}$), **Költség + nyereség ármodell** ($P_i = \frac{k_{\text{ön},i}}{1 - m} = \frac{k_{\text{ön},i}}{0{,}8}$), **Súlyozott piaci átlagár** ($k=8$ releváns versenytárssal: `SUMPRODUCT/SUM`).
  * **Árérzékenység és Eredmény-vízesés (Waterfall Bridge):** Kereslet árérzékenysége ($E_p = 2{,}2 \implies \%\Delta Q = -2{,}2\cdot\%\Delta P$) és EBIT szcenárióelemzés, ÁKVFN struktúra, Fedezeti pont és Biztonsági határ, **Terv–Tény Eredmény-vízesés** (ahol a költségdeltákat $-1$-gyel szorozzuk!).
  * **Stratégiai Controlling és Value Driver Tree:** Eredményesség vs. Hatékonyság vs. Igényesség, **Value Driver Tree** ($\text{EVA} = (\text{ROCE} - \text{WACC})\times\text{Befektetett tőke}$, $\text{Spread}$, $\text{NWC}$), SMART KPI, Balanced Scorecard (4 nézőpont ok-okozati lánca), Hoshin Kanri X-mátrix, Controlling analitika 4 szintje.

---

## 🖥️ A Tanuló Webapp 5 Módja

1. **📖 Függvénytáblázat (Referencia & Puska):**
   * Tantárgy-, témakör- és tanulásiállapot-szűrő (`Összes`, `★ Kedvencek`, `⏳ Tanulom`, `✓ Tudom`), azonnali kereső, részletes és kompakt nézet, valamint **🖨️ Nyomtatás / PDF mentés** gomb.
2. **🃏 Tanulókártyák (3D Flashcards):**
   * Megfordítható kártyák mindkét irányban (*Fogalom $\to$ Képlet* és *Képlet $\to$ Fogalom*), billentyűzet-vezérlés (`Space` = fordítás, `←/→` = léptetés, `1/2/3` = önértékelés), helyi haladásmentéssel (`localStorage`).
3. **🧩 Képletpárosító (Active Recall Matching):**
   * Interaktív 6-os párosító játék a fogalmak/definíciók és a matematikai képletek gyors memorizálásához.
4. **📝 Vizsgakvíz (Exam Simulator):**
   * Feleletválasztós vizsgaszimulátor képletfelismerési, értelmezési (*Mit számolunk és miért?*) és elméleti/módszertani csapdakérdésekkel, azonnali magyarázattal és a **hibás válaszok újragyakorlásával**.
5. **🧮 Excel Gyakorlatok (Step-by-Step Számoló):**
   * A féléves Excel-fájlok (`Gyakorlat.xlsx`, `Mutatószám elemzés_Likviditási mérleg.xlsx`, `Szemináriumi feladatsor.xlsx`, `Operatív tervezés_Botond.xlsx`) konkrét számítási feladatai lépésről lépésre ellenőrizhető beviteli mezőkkel és részletes megoldókulccsal.

---

## 🚀 Megosztás GitHub Pages-en és Helyi Használat

### Bekapcsolás GitHub Pages-en (30 másodperc)
Mivel az alkalmazás tisztán statikus HTML/CSS/JS fájlokból (`index.html`, `styles.css`, `data.js`, `app.js`) áll a repository gyökerében, külső build lépés nélkül azonnal publikálható:
1. Nyisd meg a GitHub repository-ban a **Settings** $\to$ **Pages** menüpontot.
2. A **Build and deployment** $\to$ **Source** alatt válaszd a **Deploy from a branch** opciót.
3. Branch-ként állítsd be a `main` (vagy `master`) ágat és a `/ (root)` mappát, majd kattints a **Save** gombra.
4. Néhány másodperc múlva a függvénytáblázat és a webapp elérhető lesz a `https://bboti86.github.io/fuggvenytablazat/` címen!

### Futtatás saját gépen (Offline / Localhost)
Bármelyik modern böngészőben közvetlenül megnyitható az `index.html`, vagy elindítható egy helyi szerverrel:
```bash
python3 -m http.server 8000
# Ezután nyisd meg: http://localhost:8000
```
