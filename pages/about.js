import Image from "next/image";
import Nav from "../components/Nav/Nav";
import styles from "./styles/about.module.scss";

export default function About() {
  return (
    <main>
      <Nav />
      <section>
        <div className={styles.content}>
          <div className={styles.about_text}>
            <div className={styles.header}>
              <h1>About !</h1>
              <h1>Carolin Anna Magdalena Wenzel * 1982 in München</h1>
            </div>

            <div className={styles.text}>
              <p>
                Carolin Wenzel studierte an der Kunstakademie München
                Kunstpädagogik, Bildhauerei und Installation und unterrichtet
                seit 2012 Kunst am Gymnasium.{" "}
              </p>
              <p>
                Bereits während des Studiums begann sie zahlreiche Reisen zu
                unternehmen, unter anderem nach Ägypten, Marokko, Usbekistan,
                Armenien, Israel, Japan, USA, Brasilien in den Iran und nach
                Niederbayern, die bis heute als Inspiration für ihre
                verschiedenen bildnerischen Arbeiten dienen.{" "}
              </p>
              <p>Von 2015 bis 2017 lebte sie in Portugal.</p>
              <p>
                In ihren kulissenhaften Installationen greift sie die Poesie von
                Tankstellen, Motelzimmern, Hausschreinen und anderen Orten der
                Durchreise und des Kurzaufenthaltes auf und sammelt ausserdem
                die Eindrücke der verschiedenen Exkursionen in analogen und
                digitalen Skizzenbüchern, Fotografien und Zeichnungen.
              </p>
              <p>
                Auch der Shutdown des Jahres 2020 hinterließ seine
                hausmütterlichen Spuren- und somit verstricken sich die
                Motelschilder von einst in textilen Sehnsuchtsgedecken. Es ist
                angerichtet. Oder hingerichtet bzw. aufgerichtet.
              </p>
            </div>
          </div>

          <div className={styles.imageCont}>
            <Image
              src={"/badewannwe-matte.jpeg"}
              alt="img"
              width="400"
              height="500"
            />
          </div>
        </div>
      </section>

      <section className={styles.about_img}>
        <img src="prazer.jpg" />
      </section>

      <section className={styles.intro}>
        <div>
          <p>
            Irgendwo auf einer Landstrasse zwischen Salamanca und Ávila im
            Morgengrauen vor der grossen Hitze, auf dem vollbepackten Fahrrad
            den Seitenstreifen entlang, auf der Suche nach Tostada und Café con
            leche.
          </p>
          <p>
            Irgendwo bei Barstow am Rande der Wüste auf dem Weg nach Twentynine
            Palms über Fledermausland auf der Suche nach einem Motelzimmer mit
            Fliegenklatsche.
          </p>
          <p>
            Irgendwo in den nächtlichen Gassen Portos zwischen Azuleijos und
            abblätterndem Putz, Fischgeruch und Katzengeschrei und matt in
            warmes Gelb getauchten Balkonen, ganz vom Wein erwärmt auf der Suche
            nach einem offenen Lokal, dem letzten des Abends, dem allerletzten,
            weil morgen und so.
          </p>
          <p>
            Irgendwo an der georgisch-armenischen Grenze, an Hoppers Gasstation,
            hier steht die also, die poésie des stations-service erkunden, auf
            der Suche nach dem einsamen Tankwart im gut sitzenden Blaumann
            schließlich zum Gruppenfoto mit Marschrutka-Fahrer und
            Camouflage-Buben aufgestellt.
          </p>
          <p>
            Irgendwo ausserhalb der Orangerie an der Meerenge von Gibraltar, der
            „détroit de la mer mediteranée“, sehnsüchtiger Blick zur anderen
            Seite, Wäsche flatternd an der Leine im Nordwind, Salzgeschmack und
            billiger Fusel. Verheissung Dattelschnaps, der hat schon Eugène in
            die Knie gezwungen, also den Delacroix Eugène. Es muss hier irgendwo
            eine Brücke geben, eine Art Hängebrücke- suche schon mal den
            Auslöser.
          </p>
          <p>
            Irgendwo im sengenden Dünenmeer auf der Suche nach dem Leuchtturm
            des vergilbten Zeitungsschnipsels von 1984, Sand und Leute, ein
            Junge ohne Schuhe aber mit Handy und das Handy mit ihm. Der Fisch
            filetiert, frittiert, frisiert. Der Frosch unterm Tisch. Solidão
            superbe.
          </p>
          <p>
            Warum bewusst die Demonstration der eigenen Geringfügigkeit suchen-
            sogar darin schwelgen?
          </p>
          <p> Verheissung. </p>
          <p> Das Erhabene. </p>
          <p> Fernweh. </p>
        </div>
      </section>
    </main>
  );
}
