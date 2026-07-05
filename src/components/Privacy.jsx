import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      {/* English Version */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-effect p-8 rounded-2xl mb-8"
      >
        <h1 className="text-4xl font-bold text-gradient mb-4">Privacy Policy - VAMI Push-Ups</h1>
        <p className="text-sm text-gray-400 mb-8">Last Updated: June 2026</p>

        <div className="space-y-6 text-gray-300">
          <p className="leading-relaxed">
            Your privacy is our top priority. This Privacy Policy explains how the App VAMI Push-Ups
            (hereinafter &quot;the App&quot;) processes data and what your rights are.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Data Controller</h2>
            <p className="leading-relaxed mb-3">Responsible for data processing in this App is:</p>
            <p className="leading-relaxed">
              VAMIT UG (haftungsbeschränkt)<br />
              Petersfeldstraße 16<br />
              46395 Bocholt<br />
              Germany
            </p>
            <p className="leading-relaxed mt-3">
              Managing Director: Veselin Kolev<br />
              Commercial Register: Amtsgericht Coesfeld, HRB 23796<br />
              Email: info@vam-it.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Hosting of this Privacy Policy Page</h2>
            <p className="leading-relaxed">
              This Privacy Policy is published on our App landing page (vamiapp.com), which is hosted
              via <span className="text-vami-primary font-semibold">GitHub Pages</span> (GitHub, Inc.,
              88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). When you visit this page,
              your browser automatically transmits technical access data (IP address, browser type,
              date/time, requested URL) to GitHub&apos;s servers. GitHub is certified under the
              <span className="text-vami-primary font-semibold"> EU-U.S. Data Privacy Framework (DPF)</span>,
              ensuring an adequate level of data protection pursuant to Art. 45 GDPR. Further
              information:{' '}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vami-primary hover:text-orange-400 transition-colors"
              >
                GitHub Privacy Statement
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Camera Usage & On-Device Processing (Privacy by Design)</h2>
            <p className="leading-relaxed mb-3">
              The core feature of the App is counting your push-ups using your device&apos;s camera.
            </p>
            <ul className="space-y-2 ml-4">
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Type of Processing:</span> We use Apple&apos;s Vision Framework for real-time body pose estimation.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">On-Device Only:</span> All camera data is processed locally on your device. No video or images are ever recorded, stored, or transmitted to any server.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">No Storage or Transmission:</span> The visual data is discarded immediately after movement analysis is performed in the device&apos;s volatile memory (RAM).
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Legal Basis:</span> Performance of a contract (Art. 6 (1) (b) GDPR) and your explicit consent when granting camera permissions (Art. 6 (1) (a) GDPR).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Analytics & App Improvement (PostHog)</h2>
            <p className="leading-relaxed mb-3">
              We use PostHog to monitor app stability and improve features.
            </p>
            <ul className="space-y-2 ml-4">
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Service Provider:</span> PostHog Inc., EU Cloud (server location: Frankfurt, Germany). Data remains within the European Economic Area (EEA) at all times. No analytics data is transferred to the United States.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">If Tracking is Allowed (ATT):</span> If you grant permission via the App Tracking Transparency (ATT) prompt, we collect usage statistics (e.g., features used, session duration) linked to a persistent anonymous ID. This data cannot be used to identify you personally.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">If Tracking is Denied:</span> The App uses daily rotating anonymous IDs. It is technically impossible for us to identify you or link your behaviour across multiple days.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Retention:</span> Anonymous analytics data is retained for a maximum of 12 months, after which it is automatically deleted.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Legal Basis:</span> Consent (Art. 6 (1) (a) GDPR) for analytics linked to a persistent anonymous ID; Legitimate Interest (Art. 6 (1) (f) GDPR) for anonymised stability and performance metrics.
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              You can withdraw your tracking consent at any time in iOS System Settings under{' '}
              <span className="text-vami-primary font-semibold">Privacy &amp; Security → Tracking</span>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Health Data (Apple HealthKit)</h2>
            <p className="leading-relaxed mb-3">
              The App integrates with Apple HealthKit to store your workout activity and to power the app-unlock reward feature.
            </p>
            <ul className="space-y-2 ml-4">
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Purpose:</span> We write your push-up workouts (repetitions, duration, calories) to HealthKit so they appear in the Apple Health app. We also read relevant HealthKit data to automatically unlock apps you have blocked as a training incentive.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">On-Device Only:</span> All HealthKit data is read and written exclusively on your device via Apple&apos;s HealthKit framework. It is never transmitted to our servers, to PostHog, or to any other third party.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">No Advertising Use:</span> In accordance with Apple&apos;s Developer Program guidelines, HealthKit data is never used for advertising, marketing, or shared with data brokers.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Deletion:</span> You can revoke HealthKit access at any time in iOS Settings → Privacy & Security → Health. Uninstalling the App does not delete data already written to Apple Health; this must be managed separately within the Health app.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Legal Basis:</span> Performance of a contract (Art. 6 (1) (b) GDPR) and your explicit consent when granting HealthKit permissions (Art. 6 (1) (a) GDPR).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Family Controls / Screen Time (App Blocking Feature)</h2>
            <p className="leading-relaxed mb-3">
              The App uses Apple&apos;s Family Controls framework (a restricted Apple API) to let you block distracting apps and &quot;earn back&quot; access to them by completing push-up workouts.
            </p>
            <ul className="space-y-2 ml-4">
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Purpose:</span> Gamification — motivating consistent training by linking workout completion to temporary app access.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">On-Device Only:</span> All information about which apps you choose to block, for how long, and when they are unlocked is stored exclusively on your device (in a local App Group). This information never leaves your device and is never transmitted to our servers or any third party.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">No Usage Monitoring:</span> We do not receive any data about your general app usage, screen time, or which third-party apps are installed on your device.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Legal Basis:</span> Your explicit consent when enabling the Screen Time feature (Art. 6 (1) (a) GDPR).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Local Data Storage (UserDefaults)</h2>
            <p className="leading-relaxed mb-3">
              Your workout statistics (e.g., push-up counts, personal records, goals) are stored locally on your device using iOS UserDefaults.
            </p>
            <ul className="space-y-2 ml-4">
              <li className="leading-relaxed">This data never leaves your device and is never transmitted to our servers.</li>
              <li className="leading-relaxed">The data is automatically and permanently deleted when you uninstall the App.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Data We Do Not Collect</h2>
            <ul className="space-y-2 ml-4">
              <li className="leading-relaxed">Names, email addresses, or any other directly identifying personal information</li>
              <li className="leading-relaxed">Payment information (all purchases are handled exclusively by Apple)</li>
              <li className="leading-relaxed">Location data</li>
              <li className="leading-relaxed">Contact lists</li>
              <li className="leading-relaxed">Video or images from the camera (processed on-device only, see Section 3)</li>
              <li className="leading-relaxed">Health & fitness data or Screen Time/app-blocking data (processed on-device only, see Sections 5 and 6) — we never receive this data on our servers, even though the App requests permission to access it locally on your device</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">9. Your Rights</h2>
            <p className="leading-relaxed mb-3">You have the following rights regarding your personal data:</p>
            <ul className="space-y-2 ml-4">
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Right of Access (Art. 15 GDPR):</span> You can request information about the data we hold. Given our Privacy by Design approach, this typically only includes an anonymous PostHog analytics ID.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Right to Erasure (Art. 17 GDPR):</span> You can delete all local data at any time by uninstalling the App.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Right to Withdraw Consent (Art. 7 (3) GDPR):</span> You can change your tracking preferences at any time in iOS System Settings under <span className="text-vami-primary font-semibold">Privacy &amp; Security → Tracking</span>.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Right to Object (Art. 21 GDPR):</span> You may object to processing based on legitimate interests at any time.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Right to Lodge a Complaint (Art. 77 GDPR):</span> You have the right to lodge a complaint with a supervisory authority. The competent authority for VAMIT UG is Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestraße 2-4, 40213 Düsseldorf:{' '}
                <a
                  href="https://www.ldi.nrw.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vami-primary hover:text-orange-400 transition-colors"
                >
                  www.ldi.nrw.de
                </a>
                .
              </li>
            </ul>
            <p className="leading-relaxed mt-3">To exercise your rights, please contact us at: info@vam-it.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">10. Data Security</h2>
            <p className="leading-relaxed mb-3">We follow a <span className="text-vami-primary font-semibold">Privacy by Design</span> approach:</p>
            <ul className="space-y-2 ml-4">
              <li className="leading-relaxed">The most sensitive data (camera feed) is processed exclusively on-device and never transmitted, making unauthorised server-side access technically impossible.</li>
              <li className="leading-relaxed">All network communication (e.g., PostHog analytics) is encrypted via TLS/SSL.</li>
              <li className="leading-relaxed">This landing page is served exclusively over HTTPS.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">11. Children&apos;s Privacy</h2>
            <p className="leading-relaxed">
              This App is not directed at children under the age of 13. We do not knowingly collect
              personal data from children. If you believe a child has provided us with personal data,
              please contact us at info@vam-it.com and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">12. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in the App or
              applicable law. The current version is always available at{' '}
              <span className="text-vami-primary font-semibold">vamiapp.com/privacy</span>. Material
              changes will be communicated via an in-app notice where required by law.
            </p>
            <p className="leading-relaxed mt-3 italic">
              VAMIT UG (haftungsbeschränkt) · Petersfeldstraße 16 · 46395 Bocholt · Germany
            </p>
          </section>
        </div>
      </motion.div>

      {/* German Version */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-effect p-8 rounded-2xl"
      >
        <h1 className="text-4xl font-bold text-gradient mb-4">Datenschutzerklärung - VAMI Push-Ups</h1>
        <p className="text-sm text-gray-400 mb-8">Stand: Juni 2026</p>

        <div className="space-y-6 text-gray-300">
          <p className="leading-relaxed">
            Der Schutz deiner Privatsphäre ist uns äußerst wichtig. Diese Datenschutzerklärung erklärt,
            wie die App VAMI Push-Ups (nachfolgend &quot;die App&quot;) Daten verarbeitet und welche Rechte
            du hast.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Verantwortlicher</h2>
            <p className="leading-relaxed mb-3">Verantwortlich für die Datenverarbeitung in dieser App ist:</p>
            <p className="leading-relaxed">
              VAMIT UG (haftungsbeschränkt)<br />
              Petersfeldstraße 16<br />
              46395 Bocholt<br />
              Deutschland
            </p>
            <p className="leading-relaxed mt-3">
              Geschäftsführer: Veselin Kolev<br />
              Handelsregister: Amtsgericht Coesfeld, HRB 23796<br />
              E-Mail: info@vam-it.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Hosting dieser Datenschutzseite</h2>
            <p className="leading-relaxed">
              Diese Datenschutzerklärung ist auf unserer App-Landingpage (vamiapp.com) veröffentlicht,
              die über <span className="text-vami-primary font-semibold">GitHub Pages</span> (GitHub,
              Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA) gehostet wird. Beim
              Aufruf dieser Seite übermittelt dein Browser automatisch technische Zugriffsdaten
              (IP-Adresse, Browsertyp, Datum/Uhrzeit, aufgerufene URL) an die Server von GitHub.
              GitHub ist unter dem
              <span className="text-vami-primary font-semibold"> EU-U.S. Data Privacy Framework (DPF)</span>
              zertifiziert, wodurch ein angemessenes Datenschutzniveau gemäß Art. 45 DSGVO gewährleistet
              ist. Weitere Informationen:{' '}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vami-primary hover:text-orange-400 transition-colors"
              >
                GitHub Privacy Statement
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Kamera-Nutzung & lokale Analyse (On-Device, Privacy by Design)</h2>
            <p className="leading-relaxed mb-3">
              Die Kernfunktion der App besteht darin, deine Liegestütze mithilfe der Kamera zu zählen.
            </p>
            <ul className="space-y-2 ml-4">
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Art der Daten:</span> Live-Videostream der Kamera (nur im Arbeitsspeicher, keine Aufzeichnung).
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Zweck:</span> Analyse der Körperhaltung (Pose Estimation) zur Bewegungserkennung mittels Apple Vision Framework.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Ausschließlich On-Device:</span> Die gesamte Verarbeitung erfolgt lokal auf deinem Gerät. Es werden keine Bilder oder Videos gespeichert oder an Server übertragen.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Keine Speicherung:</span> Die Bilddaten werden nach der Analyse im RAM sofort verworfen.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Rechtsgrundlage:</span> Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) sowie deine explizite Einwilligung beim erstmaligen Zugriff auf die Kamera (Art. 6 Abs. 1 lit. a DSGVO).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Analyse & App-Verbesserung (PostHog)</h2>
            <p className="leading-relaxed mb-3">
              Wir nutzen den Analysedienst PostHog, um Fehler zu beheben und die App zu verbessern.
            </p>
            <ul className="space-y-2 ml-4">
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Anbieter:</span> PostHog Inc., EU-Cloud (Serverstandort: Frankfurt, Deutschland). Deine Daten verbleiben jederzeit innerhalb des Europäischen Wirtschaftsraums (EWR). Eine Übermittlung in die USA findet nicht statt.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Bei erteilter Einwilligung (ATT):</span> Wenn du dem Tracking über den App Tracking Transparency (ATT)-Dialog zustimmst, erfassen wir Nutzungsstatistiken (z. B. genutzte Funktionen, Sitzungsdauer) verknüpft mit einer persistenten anonymen ID. Eine persönliche Identifizierung ist damit nicht möglich.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Bei Ablehnung des Trackings:</span> Die App verwendet täglich rotierende, anonyme IDs. Eine Identifizierung deiner Person oder eine tagesübergreifende Verknüpfung deines Verhaltens ist uns technisch nicht möglich.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Speicherdauer:</span> Anonyme Analysedaten werden maximal 12 Monate gespeichert und danach automatisch gelöscht.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Rechtsgrundlage:</span> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) für Tracking mit persistenter anonymer ID; berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) für anonymisierte Stabilitäts- und Leistungsstatistiken.
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              Du kannst deine Tracking-Einwilligung jederzeit in den iOS-Systemeinstellungen unter{' '}
              <span className="text-vami-primary font-semibold">Datenschutz &amp; Sicherheit → Tracking</span> widerrufen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Gesundheitsdaten (Apple HealthKit)</h2>
            <p className="leading-relaxed mb-3">
              Die App ist mit Apple HealthKit verbunden, um deine Trainingsaktivität zu speichern und die App-Freischaltungs-Funktion als Belohnung zu ermöglichen.
            </p>
            <ul className="space-y-2 ml-4">
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Zweck:</span> Wir schreiben deine Liegestütz-Workouts (Wiederholungen, Dauer, Kalorien) in HealthKit, damit sie in der Apple Health App erscheinen. Zudem lesen wir relevante HealthKit-Daten, um von dir blockierte Apps als Trainingsanreiz automatisch freizuschalten.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Ausschließlich On-Device:</span> Sämtliche HealthKit-Daten werden ausschließlich lokal auf deinem Gerät über Apples HealthKit-Framework gelesen und geschrieben. Sie werden niemals an unsere Server, an PostHog oder an sonstige Dritte übertragen.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Keine Werbenutzung:</span> Gemäß den Richtlinien des Apple Developer Programs werden HealthKit-Daten niemals für Werbung, Marketing oder die Weitergabe an Datenhändler genutzt.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Löschung:</span> Du kannst den HealthKit-Zugriff jederzeit in den iOS-Einstellungen unter Datenschutz &amp; Sicherheit → Health widerrufen. Die Deinstallation der App löscht keine bereits in Apple Health gespeicherten Daten; dies muss separat in der Health-App verwaltet werden.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Rechtsgrundlage:</span> Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) sowie deine explizite Einwilligung bei Erteilung der HealthKit-Berechtigung (Art. 6 Abs. 1 lit. a DSGVO).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Family Controls / Screen Time (App-Blockierungs-Funktion)</h2>
            <p className="leading-relaxed mb-3">
              Die App nutzt Apples Family-Controls-Framework (eine geschützte Apple-API), damit du ablenkende Apps blockieren und dir den Zugriff darauf durch absolvierte Liegestütz-Workouts &quot;zurückverdienen&quot; kannst.
            </p>
            <ul className="space-y-2 ml-4">
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Zweck:</span> Gamification — Motivation zu regelmäßigem Training durch Verknüpfung von Trainingserfolg mit temporärem App-Zugriff.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Ausschließlich On-Device:</span> Sämtliche Informationen darüber, welche Apps du blockierst, für wie lange und wann sie freigeschaltet werden, werden ausschließlich lokal auf deinem Gerät gespeichert (in einer lokalen App Group). Diese Informationen verlassen dein Gerät nicht und werden nicht an unsere Server oder Dritte übertragen.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Keine Nutzungsüberwachung:</span> Wir erhalten keinerlei Daten über deine allgemeine App-Nutzung, Bildschirmzeit oder darüber, welche Drittanbieter-Apps auf deinem Gerät installiert sind.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Rechtsgrundlage:</span> Deine explizite Einwilligung bei Aktivierung der Screen-Time-Funktion (Art. 6 Abs. 1 lit. a DSGVO).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Lokale Datenspeicherung (UserDefaults)</h2>
            <p className="leading-relaxed mb-3">
              Deine Trainingsdaten (z. B. Anzahl der Liegestütze, persönliche Rekorde, Ziele) werden lokal auf deinem Gerät in den iOS UserDefaults gespeichert.
            </p>
            <ul className="space-y-2 ml-4">
              <li className="leading-relaxed">Diese Daten verlassen dein Gerät nicht und werden nicht an unsere Server übertragen.</li>
              <li className="leading-relaxed">Die Daten werden vollständig und dauerhaft gelöscht, sobald du die App deinstallierst.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Daten, die wir nicht erheben</h2>
            <ul className="space-y-2 ml-4">
              <li className="leading-relaxed">Namen, E-Mail-Adressen oder sonstige direkt identifizierende Daten</li>
              <li className="leading-relaxed">Zahlungsinformationen (alle Käufe werden ausschließlich über Apple abgewickelt)</li>
              <li className="leading-relaxed">Standortdaten</li>
              <li className="leading-relaxed">Kontaktlisten</li>
              <li className="leading-relaxed">Video- oder Bilddaten der Kamera (ausschließlich lokal verarbeitet, siehe Abschnitt 3)</li>
              <li className="leading-relaxed">Gesundheits- und Fitnessdaten sowie Screen-Time-/App-Blockierungsdaten (ausschließlich lokal verarbeitet, siehe Abschnitte 5 und 6) — diese Daten erreichen unsere Server zu keinem Zeitpunkt, auch wenn die App um lokale Zugriffsberechtigung dafür bittet</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">9. Deine Rechte</h2>
            <p className="leading-relaxed mb-3">Du hast gegenüber uns folgende Rechte hinsichtlich deiner personenbezogenen Daten:</p>
            <ul className="space-y-2 ml-4">
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Recht auf Auskunft (Art. 15 DSGVO):</span> Du kannst Auskunft über die von uns gespeicherten Daten verlangen. Aufgrund unseres Privacy-by-Design-Ansatzes handelt es sich in der Regel nur um eine anonyme PostHog-ID.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Recht auf Löschung (Art. 17 DSGVO):</span> Du kannst alle lokalen Daten jederzeit durch Deinstallation der App löschen.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Recht auf Widerruf (Art. 7 Abs. 3 DSGVO):</span> Du kannst deine Tracking-Einwilligung jederzeit in den iOS-Systemeinstellungen unter <span className="text-vami-primary font-semibold">Datenschutz &amp; Sicherheit → Tracking</span> widerrufen.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Widerspruchsrecht (Art. 21 DSGVO):</span> Du kannst der auf berechtigten Interessen gestützten Verarbeitung jederzeit widersprechen.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Beschwerderecht (Art. 77 DSGVO):</span> Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig für VAMIT UG ist die Landesbeauftragte für Datenschutz und Informationsfreiheit NRW (LDI NRW), Kavalleriestraße 2-4, 40213 Düsseldorf:{' '}
                <a
                  href="https://www.ldi.nrw.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vami-primary hover:text-orange-400 transition-colors"
                >
                  www.ldi.nrw.de
                </a>
                .
              </li>
            </ul>
            <p className="leading-relaxed mt-3">Zur Ausübung deiner Rechte wende dich bitte an: info@vam-it.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">10. Datensicherheit</h2>
            <p className="leading-relaxed mb-3">
              Wir verfolgen einen <span className="text-vami-primary font-semibold">Privacy-by-Design</span>-Ansatz:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="leading-relaxed">Die sensibelsten Daten (Kamerabild) werden ausschließlich lokal verarbeitet und nie übertragen - ein unbefugter Zugriff über unsere Server ist technisch ausgeschlossen.</li>
              <li className="leading-relaxed">Alle Netzwerkkommunikation (z. B. PostHog-Analyse) ist durch TLS/SSL verschlüsselt.</li>
              <li className="leading-relaxed">Diese Landingpage wird ausschließlich über HTTPS ausgeliefert.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">11. Kinder</h2>
            <p className="leading-relaxed">
              Diese App richtet sich nicht an Kinder unter 13 Jahren. Wir erheben wissentlich keine
              personenbezogenen Daten von Kindern. Solltest du glauben, dass uns ein Kind
              personenbezogene Daten übermittelt hat, wende dich bitte an info@vam-it.com - wir werden
              die Daten umgehend löschen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">12. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p className="leading-relaxed">
              Wir können diese Datenschutzerklärung bei Änderungen der App oder der rechtlichen
              Anforderungen aktualisieren. Die jeweils aktuelle Fassung ist stets unter{' '}
              <span className="text-vami-primary font-semibold">vamiapp.com/privacy</span> abrufbar.
              Wesentliche Änderungen werden, soweit gesetzlich erforderlich, durch einen In-App-Hinweis
              kommuniziert.
            </p>
            <p className="leading-relaxed mt-3 italic">
              VAMIT UG (haftungsbeschränkt) · Petersfeldstraße 16 · 46395 Bocholt · Deutschland
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Privacy;
