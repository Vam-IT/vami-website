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
          <h1 className="text-4xl font-bold text-gradient mb-4">Privacy Policy VAMI</h1>
          <p className="text-sm text-gray-400 mb-8">Last Updated: February 10, 2026</p>

          <div className="space-y-6 text-gray-300">
            <p className="leading-relaxed">
              Your privacy is our top priority. This Privacy Policy explains how VAMI (hereinafter "the App") processes data and what your rights are.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">1. Data Controller</h2>
              <p className="leading-relaxed">
                Responsible for data processing in this App is:
              </p>
              <p className="leading-relaxed mt-3">
                Mauritz Langer<br />
                Münchener Str. 1<br />
                46414 Rhede Germany<br />
                Email: info@vam-it.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">2. Camera Usage & On-Device Processing (Privacy by Design)</h2>
              <p className="leading-relaxed mb-3">
                The core feature of the App is counting your push-ups using your device's camera.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Type of Processing:</span> We use Apple's Vision Framework for real-time body pose estimation.
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">On-Device Only:</span> All camera data is processed locally on your device.
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">No Storage or Transmission:</span> No video or images are ever recorded, stored, or transmitted to any server. The visual data is discarded immediately after the movement analysis is performed in the device's volatile memory (RAM).
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Legal Basis:</span> Performance of a contract (Art. 6 (1) (b) GDPR) and your explicit consent when granting camera permissions.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">3. Analytics & App Improvement (PostHog)</h2>
              <p className="leading-relaxed mb-3">
                We use PostHog to monitor app stability and improve features.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Service Provider:</span> PostHog Inc., Cloud Server Location: Frankfurt, Germany (EU Cloud).
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">With Tracking Consent (ATT Allowed):</span> If you grant permission via the App Tracking Transparency (ATT) prompt, we collect usage statistics (e.g., features used) linked to an anonymous ID.
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">If Tracking is Denied:</span> If you decline permission, the App uses daily rotating anonymous IDs. In this case, it is technically impossible for us to identify you or link your behavior across multiple days.
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Legal Basis:</span> Consent (Art. 6 (1) (a) GDPR) for personalized analytics; Legitimate Interest (Art. 6 (1) (f) GDPR) for anonymized stability and performance metrics.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">4. Local Data Storage (UserDefaults)</h2>
              <p className="leading-relaxed">
                Your workout statistics (e.g., number of push-ups, personal records, goals) are stored locally on your device using UserDefaults.
              </p>
              <ul className="space-y-2 ml-4 mt-3">
                <li className="leading-relaxed">This data never leaves your device.</li>
                <li className="leading-relaxed">The data is automatically deleted when you uninstall the App.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">5. International Data Transfers</h2>
              <p className="leading-relaxed">
                By using the PostHog EU instance, your data remains within the European Economic Area (EEA). No analytics data is transferred to the United States.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">6. Your Rights</h2>
              <p className="leading-relaxed mb-3">
                You have the following rights regarding your personal data:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Right of Access:</span> You can request information about the data we hold (typically just the anonymous PostHog ID).
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Right to Erasure:</span> You can delete all local data at any time by uninstalling the App.
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Right to Withdraw Consent:</span> You can change your tracking preferences at any time in the iOS System Settings under "Privacy & Security" → "Tracking."
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">7. Data Security</h2>
              <p className="leading-relaxed">
                We follow a "Privacy by Design" approach. Since the most sensitive data (camera feed) never leaves your device, unauthorized access to this data via our servers is technically impossible.
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
          <h1 className="text-4xl font-bold text-gradient mb-4">Datenschutzerklärung VAMI</h1>
          <p className="text-sm text-gray-400 mb-8">Stand: 10. Februar 2026</p>

          <div className="space-y-6 text-gray-300">
            <p className="leading-relaxed">
              Der Schutz deiner Privatsphäre ist uns extrem wichtig. Diese Datenschutzerklärung erklärt, wie die App VAMI (nachfolgend „die App") Daten verarbeitet und welche Rechte du hast.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">1. Verantwortlicher</h2>
              <p className="leading-relaxed">
                Verantwortlich für die Datenverarbeitung in dieser App ist:
              </p>
              <p className="leading-relaxed mt-3">
                Mauritz Langer<br />
                Münchener Str. 1<br />
                46414 Rhede Deutschland<br />
                E-Mail: info@vam-it.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">2. Kamera-Nutzung & Lokale Analyse (On-Device)</h2>
              <p className="leading-relaxed mb-3">
                Die Kernfunktion der App besteht darin, deine Liegestütze mithilfe der Kamera zu zählen.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Art der Daten:</span> Live-Videostream der Kamera.
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Zweck:</span> Analyse der Körperhaltung (Pose Estimation) zur Erkennung von Bewegungsabläufen.
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Verarbeitung:</span> Die Analyse erfolgt vollständig lokal auf deinem Gerät unter Verwendung des Apple Vision Frameworks.
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Speicherung:</span> Es werden keine Bilder oder Videos aufgenommen, gespeichert oder an Server übertragen. Die Bilddaten werden nach der Analyse im Arbeitsspeicher (RAM) sofort verworfen.
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Rechtsgrundlage:</span> Erfüllung des Vertrages (Art. 6 Abs. 1 lit. b DSGVO) sowie deine explizite Einwilligung beim ersten Zugriff auf die Kamera.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">3. Analyse & App-Verbesserung (PostHog)</h2>
              <p className="leading-relaxed mb-3">
                Wir nutzen den Analysedienst PostHog, um Fehler zu finden und die App zu verbessern.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Anbieter:</span> PostHog Inc., Cloud-Serverstandort: Frankfurt, Deutschland (EU Cloud).
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Verarbeitung bei erteilter Einwilligung (ATT):</span> Wenn du dem Tracking zustimmst, erfassen wir Nutzungsstatistiken (z. B. welche Funktionen du nutzt) verknüpft mit einer anonymen ID.
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Verarbeitung bei Ablehnung des Trackings:</span> Wenn du die Erlaubnis verweigerst, nutzt die App täglich rotierende, anonyme IDs. Eine Identifizierung deiner Person oder eine Verknüpfung deines Verhaltens über mehrere Tage hinweg ist uns in diesem Fall technisch nicht möglich.
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Rechtsgrundlage:</span> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) für personalisiertes Tracking; berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) für anonymisierte Statistiken zur App-Stabilität.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">4. Lokale Speicherung (UserDefaults)</h2>
              <p className="leading-relaxed">
                Deine Trainingsdaten (z. B. Anzahl der geschafften Liegestütze, Rekorde) werden lokal auf deinem Gerät in den sogenannten UserDefaults gespeichert.
              </p>
              <ul className="space-y-2 ml-4 mt-3">
                <li className="leading-relaxed">Diese Daten verlassen dein Gerät nicht.</li>
                <li className="leading-relaxed">Sie werden gelöscht, sobald du die App deinstallierst.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">5. Datenübermittlung an Drittstaaten</h2>
              <p className="leading-relaxed">
                Da wir die EU-Instanz von PostHog nutzen, bleiben deine Daten innerhalb des europäischen Rechtsraums. Eine Übermittlung in die USA findet für Analysezwecke nicht statt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">6. Deine Rechte</h2>
              <p className="leading-relaxed mb-3">
                Du hast gegenüber uns folgende Rechte hinsichtlich deiner personenbezogenen Daten:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Recht auf Auskunft:</span> Welche Daten haben wir (meist nur die anonyme PostHog ID)?
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Recht auf Löschung:</span> Du kannst die App deinstallieren, um alle lokalen Daten zu löschen.
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Recht auf Widerruf:</span> Du kannst die Tracking-Einwilligung jederzeit in den iOS-Systemeinstellungen unter „Datenschutz & Sicherheit" → „Tracking" widerrufen.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">7. Datensicherheit</h2>
              <p className="leading-relaxed">
                Wir setzen auf Privacy by Design. Da die sensibelsten Daten (Kamerabild) dein Gerät nie verlassen, ist ein Missbrauch dieser Daten technisch ausgeschlossen.
              </p>
            </section>
          </div>
        </motion.div>
    </div>
  );
};

export default Privacy;
