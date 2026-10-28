# Barbossa's Bounty: kako staviti igru na GitHub i igrati je na iPhoneu

Ovo je gotova igra. Ništa se ne instalira i ne programira. Treba samo staviti datoteke na GitHub, a GitHub ih besplatno pretvara u web stranicu (GitHub Pages).

## Zašto prva verzija vjerojatno nije radila

Prije nego kreneš, provjeri je li ti se dogodilo nešto od ovoga. To su najčešći razlozi:

1. **`index.html` nije u glavnoj mapi repozitorija.** Uploadana je cijela mapa (`saltwake-pages/index.html`) ili sam ZIP, umjesto onoga što je unutar mape. Na `https://ime.github.io/repo/` tada nema ničega i dobiješ 404.
2. **Nisu uploadane podmape.** Safari i neki preglednici ne prenose mape kad ih povučeš u GitHub. Tada nedostaju `vendor`, `assets` ili `icons`, a igra zastane na "Hoisting the sails…".
3. **GitHub Pages nije uključen**, ili je uključen na krivoj grani ili mapi.
4. **Igra je otvorena kao datoteka s računala** (dvoklik na `index.html`). Tako ne može raditi. Mora se otvoriti preko `https://` adrese.
5. **Repozitorij je privatan.** Na besplatnom računu GitHub Pages radi samo za javne repozitorije.
6. **iPhone drži staru verziju.** O tome je više na kraju.

Nova verzija igre sama javlja razlog ako se datoteke ne učitaju u 25 sekundi.

## Što ti treba

- Računalo s **Chromeom ili Edgeom**. Na iPhoneu i u Safariju upload mapa ne radi pouzdano.
- Besplatan račun na [github.com](https://github.com).
- ZIP s ovim paketom, raspakiran. Unutra je mapa `barbossas-bounty-pages`.

## Način A: preko web stranice GitHuba (bez instaliranja)

### 1. Napravi repozitorij

1. Prijavi se na GitHub i gore desno klikni **+**, pa **New repository**.
2. **Repository name** postavi na `barbossas-bounty` (mala slova, bez razmaka).
3. Odaberi **Public**.
4. Ne uključuj ništa ispod (README, .gitignore, licence).
5. Klikni **Create repository**.

### 2. Uploadaj datoteke (najvažniji korak)

1. Na stranici praznog repozitorija klikni poveznicu **uploading an existing file**.
2. Na računalu otvori raspakiranu mapu `barbossas-bounty-pages` i **uđi u nju**. Trebaš vidjeti `index.html`, `sw.js`, `manifest.webmanifest` i mape `assets`, `vendor`, `icons`.
3. Označi **sve unutar mape**: Ctrl+A na Windowsu, Cmd+A na Macu.
4. Povuci označeno u prozor GitHuba u Chromeu. Ne povlači samu mapu `barbossas-bounty-pages`, nego ono što je u njoj.
5. Pričekaj da se popis datoteka napuni. Mora biti oko 60 datoteka, s putanjama poput `assets/music/pirate1.mp3` i `vendor/three/build/three.module.min.js`.
6. Dolje klikni **Commit changes**.

Skrivena datoteka `.nojekyll` nije obavezna. Igra radi i ako se ne uploada.

### 3. Uključi GitHub Pages

1. U repozitoriju idi na **Settings**, pa lijevo na **Pages**.
2. Pod **Build and deployment** odaberi **Source: Deploy from a branch**.
3. Odaberi **Branch: main**, mapu **/ (root)** i klikni **Save**.
4. Pričekaj 1 do 3 minute i osvježi stranicu. Gore se pojavi "Your site is live at …".

### 4. Provjeri

Otvori `https://TVOJE-KORISNIČKO-IME.github.io/barbossas-bounty/`.

- Ako vidiš naslov igre i traku učitavanja, sve radi.
- Ako dobiješ **404**, `index.html` nije u glavnoj mapi (vrati se na korak 2) ili Pages još nije gotov (pričekaj još 2 minute).
- Ako igra stoji na učitavanju, otvori `https://TVOJE-KORISNIČKO-IME.github.io/barbossas-bounty/vendor/three/build/three.module.min.js`. Ako i to daje 404, mapa `vendor` nije uploadana. Ponovi korak 2 u Chromeu.

## Način B: GitHub Desktop (preporučeno za sljedeće verzije)

1. Instaliraj [GitHub Desktop](https://desktop.github.com) i prijavi se.
2. **File → Clone repository** i odaberi `barbossas-bounty`. Program napravi mapu na računalu.
3. U tu mapu kopiraj **sadržaj** mape `barbossas-bounty-pages`. Pristani na zamjenu postojećih datoteka.
4. U GitHub Desktopu upiši kratak opis (npr. "nova verzija"), klikni **Commit to main**, pa **Push origin**.

Ovako se uvijek prenesu sve mape, pa i skrivene datoteke.

## Igranje na iPhoneu

1. Otvori adresu igre u **Safariju**.
2. Pričekaj natpis **Tap to start**.
3. Dodirni **Dijeli** (kvadrat sa strelicom), pa **Dodaj na početni zaslon**, pa **Dodaj**.
4. Igru pokreći s nove ikone. Otvara se preko cijelog zaslona. Telefon drži položeno.

## Nova verzija igre

1. Uploadaj nove datoteke preko starih na isti način (Način A ili B).
2. Na iPhoneu zatvori igru i otvori je ponovno. Stranica se sada uvijek povlači svježa kad si na internetu.
3. Ako i dalje vidiš staru verziju: **Postavke → Safari → Napredno → Podaci web-stranica**, potraži `github.io`, obriši ga i ponovno otvori igru.

## Kontrole na iPhoneu

- **Lijeva strana zaslona:** joystick za kretanje.
- **Desna strana:** povlačenje za okretanje kamere.
- **Gumbi dolje desno:**
  - akcija, skok, udarac ili pucanj, blok;
  - oružje (mač / pištolj / bomba);
  - jelo, kopanje, vađenje vode;
  - paljba iz topa.
- **Gore:** pauza, karta blaga, pomorska karta, posada, pomoć.

## Licence

Popis autora modela, zvukova i glazbe nalazi se u `CREDITS.md`. Taj popis mora ostati uz igru.

Glazba je AlkaKrabov Pirate Music Pack. Njegova licenca dopušta korištenje u igrama, ali traži da ga se pita prije korištenja u igri otvorenog koda. Javni GitHub repozitorij čini MP3 datoteke dostupnima svima, pa mu je pametno poslati kratak e-mail (`alkakrab04@gmail.com`) i pitati je li to u redu.
