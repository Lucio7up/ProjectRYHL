import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Privacy.css";
import mobileLogo from "../../image/mobile_logo.png";

const Privacy = () => {
  const [state, setstate] = useState("");
  function handleClick() {
    setstate("responsive_bar");
  }
  function handleClose() {
    setstate("");
  }
  return (
    <div style={{ backgroundColor: "" }}>
      <section id="greater_then_mobile">
        <section class="privacy_page_section">
          <Sidebar />
          <section class="privacy_body_section">
            <div class="privacy_container">
              <div class="privacy_section_heading">
                <h3>privacy</h3>
              </div>
              <div class="privacy_section_contact_detail">
                <div class="privacy_section_contact_fields">
                  <p class="privacy_red_color">
                    Welche Daten werden von uns bei Nutzung unseres Online-Shops
                    erhoben und verarbeitet?
                  </p>
                </div>
                <div class="privacy_section_contact_fields">
                  <p>
                    Wenn Sie eine Anfrage an uns richten oder in unserem
                    Online-Shop Waren bestellen möchten, benötigen und
                    verarbeiten wir bestimmte Daten, wie insbesondere die
                    Angaben zur von Ihnen ausgewählten oder vorgenommenen
                    Bestellung, zu Ihrer Adresse und E-Mail-Adresse und zur
                    gewählten Zahlungsweise. Sie haben die Möglichkeit, uns
                    ergänzende Informationen wie eine Telefonnummer freiwillig
                    zu überlassen, um etwa eine raschere Kontaktaufnahme zu
                    ermöglichen.
                  </p>
                </div>
                <div class="privacy_section_contact_fields">
                  <p>
                    Sie können freiwillig ein Kundenkonto anlegen, durch das wir
                    Ihre Daten für spätere weitere Einkäufe speichern können.
                    Bei Anlegung eines Kundenkontos unter „Mein Konto“ werden
                    die von Ihnen angegebenen Daten für den Zeitraum des
                    Bestehens des Kundenkontos widerruflich gespeichert. Die
                    Rechtsgrundlage hierfür findet sich in Art. 6 Abs. 1 a)
                    DS-GVO.
                  </p>
                </div>
                <div class="privacy_section_contact_fields">
                  <p>
                    Wir verarbeiten die uns überlassenen Daten für die
                    Vertragsdurchführung, je nach gewünschter Zahlungsweise für
                    eine vorvertragliche Prüfung und für eine eventuelle
                    Bearbeitung von Gewährleistungsansprüchen. Die
                    Rechtsgrundlage hierfür findet sich in Art. 6 Abs. 1 c) und
                    f) DS-GVO.
                  </p>
                </div>
                <div class="privacy_section_contact_fields">
                  <p>
                    Zudem erhalten die von uns eingesetzten Dienstleister (wie
                    beispielsweise Logistikunternehmen, Zahlungsvermittler) die
                    jeweils notwendigen Daten zu Ihrer Person bzw. zu Ihrer
                    Bestellung. Je nach gewählter Zahlungsweise führen wir auch
                    Bonitätsprüfungen durch. Ohne zutreffende Angaben
                    personenbezogener Daten können wir eine Annahme von
                    Bestellungen entweder gar nicht oder nur unter
                    eingeschränkter Auswahl bei den Zahlungsweisen anbieten.
                  </p>
                </div>

                <div class="privacy_section_contact_fields">
                  <p>
                    Im Rahmen des Betriebs unseres Unternehmens verarbeiten wir
                    Ihre Daten mittels unserer IT-Systeme. Teilweise bedienen
                    wir uns zur Verarbeitung Ihrer Daten externer Dienstleister.
                    Diese wurden von uns sorgfältig ausgewählt und beauftragt,
                    sind an unsere Weisungen gebunden und werden regelmäßig
                    kontrolliert.
                  </p>
                </div>
                <div class="privacy_section_contact_fields">
                  <p>
                    Wir können die von Ihnen angegebenen Daten zudem
                    verarbeiten, um Sie über weitere interessante Produkte aus
                    unserem Portfolio zu informieren oder zu bestimmten Anlässen
                    mit Ihnen in Verbindung zu treten.
                  </p>
                </div>
              </div>

              <div class="privacy_down_arrow">
                <a href="#">
                  <i class="fas fa-angle-double-down"></i>
                </a>
              </div>
            </div>
          </section>
        </section>
      </section>

      <section class="Mobile_home_section">
        <div class="mobile_header">
          <div class="shopping_cart">
            <i class="fas fa-shopping-bag"></i>
          </div>
          <div class="logo">
            <a href="index.html">
              <img src={mobileLogo} alt="" />
            </a>
          </div>
          <div class="nav_icon">
            <a class="open_close_nav">
              <i class="fas fa-bars" onClick={handleClick}></i>
            </a>
          </div>
        </div>

        <section class="privacy_body_section" style={{ backgroundColor: "" }}>
          <div class="privacy_container">
            <div class="privacy_section_heading">
              <h3>privacy</h3>
            </div>
            <div class="privacy_section_contact_detail">
              <div class="privacy_section_contact_fields">
                <p class="privacy_red_color">
                  Welche Daten werden von uns bei Nutzung unseres Online-Shops
                  erhoben und verarbeitet?
                </p>
              </div>
              <div class="privacy_section_contact_fields">
                <p>
                  Wenn Sie eine Anfrage an uns richten oder in unserem
                  Online-Shop Waren bestellen möchten, benötigen und verarbeiten
                  wir bestimmte Daten, wie insbesondere die Angaben zur von
                  Ihnen ausgewählten oder vorgenommenen Bestellung, zu Ihrer
                  Adresse und E-Mail-Adresse und zur gewählten Zahlungsweise.
                  Sie haben die Möglichkeit, uns ergänzende Informationen wie
                  eine Telefonnummer freiwillig zu überlassen, um etwa eine
                  raschere Kontaktaufnahme zu ermöglichen.
                </p>
              </div>
              <div class="privacy_section_contact_fields">
                <p>
                  Sie können freiwillig ein Kundenkonto anlegen, durch das wir
                  Ihre Daten für spätere weitere Einkäufe speichern können. Bei
                  Anlegung eines Kundenkontos unter „Mein Konto“ werden die von
                  Ihnen angegebenen Daten für den Zeitraum des Bestehens des
                  Kundenkontos widerruflich gespeichert. Die Rechtsgrundlage
                  hierfür findet sich in Art. 6 Abs. 1 a) DS-GVO.
                </p>
              </div>
              <div class="privacy_section_contact_fields">
                <p>
                  Wir verarbeiten die uns überlassenen Daten für die
                  Vertragsdurchführung, je nach gewünschter Zahlungsweise für
                  eine vorvertragliche Prüfung und für eine eventuelle
                  Bearbeitung von Gewährleistungsansprüchen. Die Rechtsgrundlage
                  hierfür findet sich in Art. 6 Abs. 1 c) und f) DS-GVO.
                </p>
              </div>
              <div class="privacy_section_contact_fields">
                <p>
                  Zudem erhalten die von uns eingesetzten Dienstleister (wie
                  beispielsweise Logistikunternehmen, Zahlungsvermittler) die
                  jeweils notwendigen Daten zu Ihrer Person bzw. zu Ihrer
                  Bestellung. Je nach gewählter Zahlungsweise führen wir auch
                  Bonitätsprüfungen durch. Ohne zutreffende Angaben
                  personenbezogener Daten können wir eine Annahme von
                  Bestellungen entweder gar nicht oder nur unter eingeschränkter
                  Auswahl bei den Zahlungsweisen anbieten.
                </p>
              </div>

              <div class="privacy_section_contact_fields">
                <p>
                  Im Rahmen des Betriebs unseres Unternehmens verarbeiten wir
                  Ihre Daten mittels unserer IT-Systeme. Teilweise bedienen wir
                  uns zur Verarbeitung Ihrer Daten externer Dienstleister. Diese
                  wurden von uns sorgfältig ausgewählt und beauftragt, sind an
                  unsere Weisungen gebunden und werden regelmäßig kontrolliert.
                </p>
              </div>
              <div class="privacy_section_contact_fields">
                <p>
                  Wir können die von Ihnen angegebenen Daten zudem verarbeiten,
                  um Sie über weitere interessante Produkte aus unserem
                  Portfolio zu informieren oder zu bestimmten Anlässen mit Ihnen
                  in Verbindung zu treten.
                </p>
              </div>
            </div>

            <div class="privacy_down_arrow">
              <a href="#">
                <i class="fas fa-angle-double-down"></i>
              </a>
            </div>
          </div>
        </section>
      </section>

      <section class={`responsive_nav_bar ${state}`}>
        <section class="responsive_nav_page_section">
          <div class="responsive_header">
            <div class="responsive_nav_icon">
              <a class="open_close_nav">
                <i class="fas fa-times" onClick={handleClose}></i>
              </a>
            </div>

            <div class="responsive_logo">
              <span>REACH YOUR</span>
              <span class="responsive_logo_middle_part">
                <a href="index.html">
                  <small>R</small>
                  <small>Y</small>
                  <small>H</small>
                  <small>L</small>
                </a>
              </span>
              <span>HIGHEST LEVEL</span>
            </div>

            <div class="responsive_insta_icon">
              <i class="fab fa-instagram"></i>
            </div>
          </div>

          <section class="responsive_nav_details">
            <div class="responsive_nav_details_secion_one">
              <span>
                <a href="index.html">start</a>
              </span>
              <span>
                <a href="raffle.html">RAFFLE</a>
              </span>
              <span>
                {" "}
                <a href="sneaker.html">SNEAKERS</a>
              </span>
              <span>
                {" "}
                <a href="sign_up.html">Sign up</a>
              </span>
              <span>
                {" "}
                <a href="account_setting.html">Account</a>
              </span>
              <span>
                <a href="login.html">login</a>
              </span>
            </div>
            <div class="responsive_nav_details_secion_two">
              <ul>
                <li>
                  <a href="impressum.html">IMPRESSUM</a>
                </li>
                <li>
                  <a href="shipping.html">SHIPPING</a>
                </li>
                <li>
                  <a href="contact.html">CONTACT</a>
                </li>
              </ul>
            </div>
            <div class="responsive_nav_details_secion_three">
              <ul>
                <li>
                  <a href="privacy.html">privacy</a>
                </li>
                <li>
                  <a href="agb.html">agb</a>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Privacy;
