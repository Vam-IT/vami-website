import { motion } from 'framer-motion';

const Terms = () => {
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
        <h1 className="text-4xl font-bold text-gradient mb-4">Terms of Use - VAMI Push-Ups</h1>
        <p className="text-sm text-gray-400 mb-8">Last Updated: July 2026</p>

        <div className="space-y-6 text-gray-300">
          <p className="leading-relaxed">
            Please read these Terms of Use carefully before downloading or using the App.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By downloading, installing, or using the App VAMI Push-Ups (hereinafter &quot;the App&quot;),
              you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree
              to these terms, do not download or use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Provider</h2>
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
            <h2 className="text-2xl font-semibold text-white mb-3">3. Health &amp; Safety Disclaimer</h2>
            <p className="leading-relaxed mb-3">
              <span className="text-vami-primary font-semibold">Please read this section carefully before using the App.</span>
            </p>
            <ul className="space-y-3 ml-4">
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Not Medical Advice:</span> The App is intended for general fitness support only and does not constitute medical advice, diagnosis, or treatment. Always consult a qualified physician or healthcare professional before starting any new exercise programme, particularly if you have pre-existing health conditions.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Assumption of Risk:</span> Physical exercise involves inherent risks of injury. You use this App and perform exercises entirely at your own risk.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Stop Signal:</span> If you experience pain, dizziness, shortness of breath, or any other discomfort during exercise, stop immediately and seek medical attention if necessary.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Limitation of Liability:</span> To the fullest extent permitted by applicable law, VAMIT UG shall not be liable for any injuries, health issues, or damages of any kind resulting from the use of the App or the performance of exercises suggested or counted by the App.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Functionality and Accuracy</h2>
            <p className="leading-relaxed">
              The App uses AI-based camera analysis (Apple Vision Framework) to detect and count push-up
              movements. Since accuracy depends on factors such as lighting conditions, camera angle, and
              device placement, we do not guarantee 100% accuracy in movement detection or rep counting.
              The App is a fitness aid and should not be used as a sole performance measurement tool.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Licence</h2>
            <p className="leading-relaxed">
              Subject to these Terms, VAMIT UG grants you a limited, non-exclusive, non-transferable,
              revocable licence to use the App for personal, non-commercial purposes on Apple devices
              you own or control, in accordance with Apple&apos;s App Store Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content, design, trademarks, and source code of the App are the intellectual property
              of VAMIT UG or its licensors. Unauthorised reproduction, modification, distribution, or
              use of any part of the App is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. In-App Purchases</h2>
            <p className="leading-relaxed">
              Any in-app purchases are processed exclusively by Apple Inc. via the App Store. VAMIT UG
              does not collect or store payment information. Refunds are subject to Apple&apos;s refund
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Changes to the App and Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify, update, suspend, or discontinue features of the App at any
              time without prior notice. We may also update these Terms of Use. The current version is
              always available at <span className="text-vami-primary font-semibold">vamiapp.com/terms</span>.
              Continued use of the App after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">9. Termination</h2>
            <p className="leading-relaxed">
              We reserve the right to terminate or suspend your access to the App at any time, without
              notice, if you breach these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">10. Governing Law and Jurisdiction</h2>
            <p className="leading-relaxed">
              These Terms of Use are governed by the laws of the Federal Republic of Germany, excluding
              its conflict of law provisions. The United Nations Convention on Contracts for the
              International Sale of Goods (CISG) does not apply.
            </p>
            <p className="leading-relaxed mt-3">
              If you are a consumer resident within the European Union, you also benefit from any
              mandatory protective provisions of the law of the country in which you reside.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">11. Dispute Resolution</h2>
            <p className="leading-relaxed">
              The European Commission provides an online dispute resolution (ODR) platform for consumers:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vami-primary hover:text-orange-400 transition-colors"
              >
                ec.europa.eu/consumers/odr
              </a>
              .
            </p>
            <p className="leading-relaxed mt-3">
              We are not obliged to participate in dispute resolution proceedings before a consumer
              arbitration board and do not voluntarily do so. You can reach us directly at
              info@vam-it.com to resolve any issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">12. Severability</h2>
            <p className="leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining
              provisions shall continue in full force and effect.
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
        <h1 className="text-4xl font-bold text-gradient mb-4">Nutzungsbedingungen - VAMI Push-Ups</h1>
        <p className="text-sm text-gray-400 mb-8">Stand: Juli 2026</p>

        <div className="space-y-6 text-gray-300">
          <p className="leading-relaxed">
            Bitte lies diese Nutzungsbedingungen sorgfältig durch, bevor du die App herunterlädst oder
            nutzt.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Annahme der Bedingungen</h2>
            <p className="leading-relaxed">
              Durch das Herunterladen, Installieren oder die Nutzung der App VAMI Push-Ups (nachfolgend
              &quot;die App&quot;) erklärst du dich mit diesen Nutzungsbedingungen sowie unserer
              Datenschutzerklärung einverstanden. Wenn du mit diesen Bedingungen nicht einverstanden bist,
              darfst du die App nicht herunterladen oder nutzen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Anbieter</h2>
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
            <h2 className="text-2xl font-semibold text-white mb-3">3. Wichtiger Gesundheitshinweis (Haftungsausschluss)</h2>
            <p className="leading-relaxed mb-3">
              <span className="text-vami-primary font-semibold">Bitte lies diesen Abschnitt sorgfältig, bevor du die App nutzt.</span>
            </p>
            <ul className="space-y-3 ml-4">
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Keine medizinische Beratung:</span> Die App dient ausschließlich der allgemeinen Fitness-Unterstützung und stellt keine medizinische Beratung, Diagnose oder Behandlung dar. Konsultiere vor Beginn eines neuen Trainingsprogramms - insbesondere bei Vorerkrankungen - stets einen Arzt oder eine medizinische Fachkraft.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Eigenverantwortung:</span> Körperliches Training ist mit einem inhärenten Verletzungsrisiko verbunden. Du nutzt diese App und führst Übungen vollständig auf eigene Gefahr durch.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Stopp-Signal:</span> Wenn du während des Trainings Schmerzen, Schwindel, Kurzatmigkeit oder sonstige Beschwerden verspürst, beende das Training sofort und suche bei Bedarf ärztliche Hilfe auf.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Haftungsbeschränkung:</span> Soweit gesetzlich zulässig, haftet VAMIT UG nicht für Verletzungen, gesundheitliche Schäden oder sonstige Schäden jeglicher Art, die aus der Nutzung der App oder der Durchführung von durch die App gezählten oder vorgeschlagenen Übungen entstehen. Die Haftung für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit bleibt unberührt.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Funktionsweise und Genauigkeit</h2>
            <p className="leading-relaxed">
              Die App nutzt KI-gestützte Kamera-Analyse (Apple Vision Framework), um Liegestütz-Bewegungen
              zu erkennen und zu zählen. Da die Genauigkeit von Faktoren wie Lichtverhältnissen,
              Kamerawinkel und Gerätepositionierung abhängt, übernehmen wir keine Gewähr für die
              vollständige Genauigkeit der Bewegungserkennung oder Wiederholungszählung. Die App ist ein
              Fitness-Hilfsmittel und sollte nicht als alleiniges Leistungsmessinstrument verwendet
              werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Lizenz</h2>
            <p className="leading-relaxed">
              Vorbehaltlich dieser Nutzungsbedingungen gewährt VAMIT UG dir eine beschränkte,
              nicht-exklusive, nicht übertragbare, widerrufliche Lizenz zur Nutzung der App für
              persönliche, nicht-kommerzielle Zwecke auf Apple-Geräten, die du besitzt oder kontrollierst,
              in Übereinstimmung mit den App Store-Nutzungsbedingungen von Apple.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Geistiges Eigentum</h2>
            <p className="leading-relaxed">
              Alle Inhalte, das Design, Marken und der Quellcode der App sind geistiges Eigentum von
              VAMIT UG oder deren Lizenzgebern. Unbefugte Vervielfältigung, Änderung, Verbreitung oder
              Nutzung von Teilen der App ist ausdrücklich untersagt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. In-App-Käufe</h2>
            <p className="leading-relaxed">
              Etwaige In-App-Käufe werden ausschließlich über Apple Inc. via App Store abgewickelt.
              VAMIT UG erhebt oder speichert keine Zahlungsinformationen. Rückerstattungen richten sich
              nach den Erstattungsrichtlinien von Apple.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Änderungen der App und der Nutzungsbedingungen</h2>
            <p className="leading-relaxed">
              Wir behalten uns das Recht vor, Funktionen der App jederzeit ohne vorherige Ankündigung zu
              ändern, zu aktualisieren, auszusetzen oder den Betrieb einzustellen. Wir können auch diese
              Nutzungsbedingungen aktualisieren. Die jeweils aktuelle Fassung ist stets unter{' '}
              <span className="text-vami-primary font-semibold">vamiapp.com/terms</span> abrufbar. Die
              weitere Nutzung der App nach Änderungen gilt als Zustimmung zu den aktualisierten
              Bedingungen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">9. Kündigung</h2>
            <p className="leading-relaxed">
              Wir behalten uns das Recht vor, deinen Zugang zur App jederzeit ohne Vorankündigung zu
              beenden oder zu sperren, wenn du gegen diese Nutzungsbedingungen verstößt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">10. Anwendbares Recht und Gerichtsstand</h2>
            <p className="leading-relaxed">
              Diese Nutzungsbedingungen unterliegen dem Recht der Bundesrepublik Deutschland unter
              Ausschluss des UN-Kaufrechts (CISG).
            </p>
            <p className="leading-relaxed mt-3">
              Wenn du Verbraucher mit Wohnsitz in der Europäischen Union bist, gelten zusätzlich die
              zwingenden Schutzvorschriften des Rechts deines Wohnsitzlandes.
            </p>
            <p className="leading-relaxed mt-3">
              Gerichtsstand für Streitigkeiten mit Unternehmern ist Bocholt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">11. Streitbeilegung</h2>
            <p className="leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vami-primary hover:text-orange-400 transition-colors"
              >
                ec.europa.eu/consumers/odr
              </a>
              .
            </p>
            <p className="leading-relaxed mt-3">
              Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen. Für eine direkte Klärung stehen wir jederzeit
              unter info@vam-it.com zur Verfügung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">12. Salvatorische Klausel</h2>
            <p className="leading-relaxed">
              Sollte eine Bestimmung dieser Nutzungsbedingungen unwirksam oder nicht durchsetzbar sein,
              bleiben die übrigen Bestimmungen davon unberührt und weiterhin gültig.
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

export default Terms;
