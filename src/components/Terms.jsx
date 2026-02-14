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
        <h1 className="text-4xl font-bold text-gradient mb-8">Terms of Use VAMI</h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By downloading and using this App, you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Important Health & Safety Disclaimer</h2>
            <ul className="space-y-3 ml-4">
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Not Medical Advice:</span> The App is intended for general fitness purposes only and does not constitute medical advice.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Assumption of Risk:</span> You use this App and perform exercises at your own risk. Consult a physician before starting any new exercise routine.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Listen to Your Body:</span> If you feel pain, dizziness, or discomfort during exercise, stop immediately.
              </li>
              <li className="leading-relaxed">
                <span className="text-vami-primary font-semibold">Limitation of Liability:</span> The developer is not liable for any health issues, injuries, or accidents resulting from the use of the App or the performance of exercises.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Functionality and Accuracy</h2>
            <p className="leading-relaxed">
              The App uses AI-based camera analysis to detect movement. Since this technology depends on lighting conditions and camera positioning, we do not guarantee 100% accuracy in counting or form analysis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content, design, and source code of the App are the intellectual property of the developer. Unauthorized reproduction or modification is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Changes to the App</h2>
            <p className="leading-relaxed">
              We reserve the right to modify, update, or discontinue features of the App at any time without prior notice.
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
          <h1 className="text-4xl font-bold text-gradient mb-8">Nutzungsbedingungen VAMI</h1>

          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">1. Annahme der Bedingungen</h2>
              <p className="leading-relaxed">
                Durch das Herunterladen und die Nutzung dieser App erklärst du dich mit diesen Nutzungsbedingungen einverstanden. Wenn du mit diesen Bedingungen nicht einverstanden bist, darfst du die App nicht nutzen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">2. Wichtiger Gesundheitshinweis (Haftungsausschluss)</h2>
              <ul className="space-y-3 ml-4">
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Keine medizinische Beratung:</span> Die App dient ausschließlich der allgemeinen Fitness-Unterstützung und stellt keine medizinische Beratung dar.
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Eigenverantwortung:</span> Das Training erfolgt auf eigene Gefahr. Konsultiere vor Beginn eines neuen Trainingsprogramms einen Arzt.
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Stopp-Signal:</span> Wenn du während der Übung Schmerzen, Schwindel oder Unwohlsein verspürst, beende das Training sofort.
                </li>
                <li className="leading-relaxed">
                  <span className="text-vami-primary font-semibold">Haftungsbeschränkung:</span> Der Entwickler haftet nicht für gesundheitliche Schäden, Verletzungen oder Unfälle, die im Zusammenhang mit der Nutzung der App oder der Ausführung der Übungen entstehen.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">3. Funktionsweise und Genauigkeit</h2>
              <p className="leading-relaxed">
                Die App nutzt KI-gestützte Kamera-Analyse, um Bewegungen zu erkennen. Da diese Technologie von Lichtverhältnissen und Kamerapositionen abhängt, übernehmen wir keine Gewähr für die 100%ige Genauigkeit der Zählung oder Form-Analyse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">4. Geistiges Eigentum</h2>
              <p className="leading-relaxed">
                Alle Inhalte, das Design und der Quellcode der App sind geistiges Eigentum des Entwicklers. Eine unbefugte Vervielfältigung oder Modifikation ist untersagt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-3">5. Änderungen der App</h2>
              <p className="leading-relaxed">
                Wir behalten uns das Recht vor, Funktionen der App jederzeit zu ändern, zu aktualisieren oder den Dienst einzustellen.
              </p>
            </section>
          </div>
        </motion.div>
    </div>
  );
};

export default Terms;
