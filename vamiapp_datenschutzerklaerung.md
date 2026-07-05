# Datenschutzerklärung – VAMI Push-Ups

**Stand: Juni 2026**

Der Schutz deiner Privatsphäre ist uns äußerst wichtig. Diese Datenschutzerklärung erklärt, wie die App VAMI Push-Ups (nachfolgend „die App") Daten verarbeitet und welche Rechte du hast.

---

## 1. Verantwortlicher

Verantwortlich für die Datenverarbeitung in dieser App ist:

**VAMIT UG (haftungsbeschränkt)**
Petersfeldstraße 16
46395 Bocholt
Deutschland

Geschäftsführer: Veselin Kolev
Handelsregister: Amtsgericht Coesfeld, HRB 23796
E-Mail: info@vam-it.com

---

## 2. Hosting dieser Datenschutzseite

Diese Datenschutzerklärung ist auf unserer App-Landingpage (vamiapp.com) veröffentlicht, die über **GitHub Pages** (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA) gehostet wird. Beim Aufruf dieser Seite übermittelt dein Browser automatisch technische Zugriffsdaten (IP-Adresse, Browsertyp, Datum/Uhrzeit, aufgerufene URL) an die Server von GitHub. GitHub ist unter dem **EU-U.S. Data Privacy Framework (DPF)** zertifiziert, wodurch ein angemessenes Datenschutzniveau gemäß Art. 45 DSGVO gewährleistet ist. Weitere Informationen: https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement

---

## 3. Kamera-Nutzung & lokale Analyse (On-Device, Privacy by Design)

Die Kernfunktion der App besteht darin, deine Liegestütze mithilfe der Kamera zu zählen.

- **Art der Daten:** Live-Videostream der Kamera (nur im Arbeitsspeicher, keine Aufzeichnung).
- **Zweck:** Analyse der Körperhaltung (Pose Estimation) zur Bewegungserkennung mittels Apple Vision Framework.
- **Ausschließlich On-Device:** Die gesamte Verarbeitung erfolgt lokal auf deinem Gerät. Es werden keine Bilder oder Videos gespeichert oder an Server übertragen.
- **Keine Speicherung:** Die Bilddaten werden nach der Analyse im RAM sofort verworfen.
- **Rechtsgrundlage:** Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) sowie deine explizite Einwilligung beim erstmaligen Zugriff auf die Kamera (Art. 6 Abs. 1 lit. a DSGVO).

---

## 4. Analyse & App-Verbesserung (PostHog)

Wir nutzen den Analysedienst PostHog, um Fehler zu beheben und die App zu verbessern.

- **Anbieter:** PostHog Inc., EU-Cloud (Serverstandort: Frankfurt, Deutschland). Deine Daten verbleiben jederzeit innerhalb des Europäischen Wirtschaftsraums (EWR). Eine Übermittlung in die USA findet nicht statt.
- **Bei erteilter Einwilligung (ATT):** Wenn du dem Tracking über den App Tracking Transparency (ATT)-Dialog zustimmst, erfassen wir Nutzungsstatistiken (z. B. genutzte Funktionen, Sitzungsdauer) verknüpft mit einer persistenten anonymen ID. Eine persönliche Identifizierung ist damit nicht möglich.
- **Bei Ablehnung des Trackings:** Die App verwendet täglich rotierende, anonyme IDs. Eine Identifizierung deiner Person oder eine tagesübergreifende Verknüpfung deines Verhaltens ist uns technisch nicht möglich.
- **Speicherdauer:** Anonyme Analysedaten werden maximal 12 Monate gespeichert und danach automatisch gelöscht.
- **Rechtsgrundlage:** Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) für Tracking mit persistenter anonymer ID; berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) für anonymisierte Stabilitäts- und Leistungsstatistiken.

Du kannst deine Tracking-Einwilligung jederzeit in den iOS-Systemeinstellungen unter **Datenschutz & Sicherheit → Tracking** widerrufen.

---

## 5. Gesundheitsdaten (Apple HealthKit)

Die App ist mit Apple HealthKit verbunden, um deine Trainingsaktivität zu speichern und die App-Freischaltungs-Funktion als Belohnung zu ermöglichen.

Zweck: Wir schreiben deine Liegestütz-Workouts (Wiederholungen, Dauer, Kalorien) in HealthKit, damit sie in der Apple Health App erscheinen. Zudem lesen wir relevante HealthKit-Daten, um von dir blockierte Apps als Trainingsanreiz automatisch freizuschalten.

Ausschließlich On-Device: Sämtliche HealthKit-Daten werden ausschließlich lokal auf deinem Gerät über Apples HealthKit-Framework gelesen und geschrieben. Sie werden niemals an unsere Server, an PostHog oder an sonstige Dritte übertragen.

Keine Werbenutzung: Gemäß den Richtlinien des Apple Developer Programs werden HealthKit-Daten niemals für Werbung, Marketing oder die Weitergabe an Datenhändler genutzt.

Löschung: Du kannst den HealthKit-Zugriff jederzeit in den iOS-Einstellungen unter Datenschutz & Sicherheit → Health widerrufen. Die Deinstallation der App löscht keine bereits in Apple Health gespeicherten Daten; dies muss separat in der Health-App verwaltet werden.

Rechtsgrundlage: Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) sowie deine explizite Einwilligung bei Erteilung der HealthKit-Berechtigung (Art. 6 Abs. 1 lit. a DSGVO).

## 6. Family Controls / Screen Time (App-Blockierungs-Funktion)

Die App nutzt Apples Family-Controls-Framework (eine geschützte Apple-API), damit du ablenkende Apps blockieren und dir den Zugriff darauf durch absolvierte Liegestütz-Workouts "zurückverdienen" kannst.

Zweck: Gamification — Motivation zu regelmäßigem Training durch Verknüpfung von Trainingserfolg mit temporärem App-Zugriff.

Ausschließlich On-Device: Sämtliche Informationen darüber, welche Apps du blockierst, für wie lange und wann sie freigeschaltet werden, werden ausschließlich lokal auf deinem Gerät gespeichert (in einer lokalen App Group). Diese Informationen verlassen dein Gerät nicht und werden nicht an unsere Server oder Dritte übertragen.

Keine Nutzungsüberwachung: Wir erhalten keinerlei Daten über deine allgemeine App-Nutzung, Bildschirmzeit oder darüber, welche Drittanbieter-Apps auf deinem Gerät installiert sind.

Rechtsgrundlage: Deine explizite Einwilligung bei Aktivierung der Screen-Time-Funktion (Art. 6 Abs. 1 lit. a DSGVO).

## 7. Lokale Datenspeicherung (UserDefaults)

Deine Trainingsdaten (z. B. Anzahl der Liegestütze, persönliche Rekorde, Ziele) werden lokal auf deinem Gerät in den iOS UserDefaults gespeichert.

- Diese Daten verlassen dein Gerät nicht und werden nicht an unsere Server übertragen.
- Die Daten werden vollständig und dauerhaft gelöscht, sobald du die App deinstallierst.

---

## 8. Daten, die wir nicht erheben

- Namen, E-Mail-Adressen oder sonstige direkt identifizierende Daten
- Zahlungsinformationen (alle Käufe werden ausschließlich über Apple abgewickelt)
- Standortdaten
- Kontaktlisten
- Video- oder Bilddaten der Kamera (ausschließlich lokal verarbeitet, siehe Abschnitt 3)
- Gesundheits- und Fitnessdaten sowie Screen-Time-/App-Blockierungsdaten (ausschließlich lokal verarbeitet, siehe Abschnitte 5 und 6) — diese Daten erreichen unsere Server zu keinem Zeitpunkt, auch wenn die App um lokale Zugriffsberechtigung dafür bittet

---

## 9. Deine Rechte

Du hast gegenüber uns folgende Rechte hinsichtlich deiner personenbezogenen Daten:

- **Recht auf Auskunft (Art. 15 DSGVO):** Du kannst Auskunft über die von uns gespeicherten Daten verlangen. Aufgrund unseres Privacy-by-Design-Ansatzes handelt es sich in der Regel nur um eine anonyme PostHog-ID.
- **Recht auf Löschung (Art. 17 DSGVO):** Du kannst alle lokalen Daten jederzeit durch Deinstallation der App löschen.
- **Recht auf Widerruf (Art. 7 Abs. 3 DSGVO):** Du kannst deine Tracking-Einwilligung jederzeit in den iOS-Systemeinstellungen unter **Datenschutz & Sicherheit → Tracking** widerrufen.
- **Widerspruchsrecht (Art. 21 DSGVO):** Du kannst der auf berechtigten Interessen gestützten Verarbeitung jederzeit widersprechen.
- **Beschwerderecht (Art. 77 DSGVO):** Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig für VAMIT UG ist: Landesbeauftragte für Datenschutz und Informationsfreiheit NRW (LDI NRW), Kavalleriestraße 2–4, 40213 Düsseldorf, https://www.ldi.nrw.de

Zur Ausübung deiner Rechte wende dich bitte an: info@vam-it.com

---

## 10. Datensicherheit

Wir verfolgen einen **Privacy-by-Design**-Ansatz:

- Die sensibelsten Daten (Kamerabild) werden ausschließlich lokal verarbeitet und nie übertragen – ein unbefugter Zugriff über unsere Server ist technisch ausgeschlossen.
- Alle Netzwerkkommunikation (z. B. PostHog-Analyse) ist durch TLS/SSL verschlüsselt.
- Diese Landingpage wird ausschließlich über HTTPS ausgeliefert.

---

## 11. Kinder

Diese App richtet sich nicht an Kinder unter 13 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Kindern. Solltest du glauben, dass uns ein Kind personenbezogene Daten übermittelt hat, wende dich bitte an info@vam-it.com – wir werden die Daten umgehend löschen.

---

## 12. Aktualität und Änderung dieser Datenschutzerklärung

Wir können diese Datenschutzerklärung bei Änderungen der App oder der rechtlichen Anforderungen aktualisieren. Die jeweils aktuelle Fassung ist stets unter vamiapp.com/privacy abrufbar. Wesentliche Änderungen werden, soweit gesetzlich erforderlich, durch einen In-App-Hinweis kommuniziert.

---

*VAMIT UG (haftungsbeschränkt) · Petersfeldstraße 16 · 46395 Bocholt · Deutschland*
