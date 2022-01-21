window.toggleBasket = function () {
  const basketContent = document.getElementById('warenkorbinhalt');
  const offen = basketContent.classList.contains('offen');
  basketContent.classList = offen ? 'warenkorbinhalt' : 'warenkorbinhalt offen';
};
window.goToPage = function () {
  const [lieferland, rechnungsland] = document.getElementsByClassName('land');
  const [lieferstadt, rechnungsstadt] =
    document.getElementsByClassName('stadt');
  const [lieferpostleitzahl, rechnungspostleitzahl] =
    document.getElementsByClassName('postleitzahl');
  const [lieferhausnummer, rechnungshausnummer] =
    document.getElementsByClassName('hausnummer');
  const [lieferstraße, rechnungsstraße] =
    document.getElementsByClassName('straße');
  const score =
    (lieferland.value === rechnungsland.value ? 0 : 25) +
    (lieferstadt.value === rechnungsstadt.value ? 0 : 20) +
    (lieferpostleitzahl.value === rechnungspostleitzahl.value ? 0 : 17) +
    (lieferhausnummer.value === rechnungshausnummer.value ? 0 : 5) +
    (lieferstraße.value === rechnungsstraße.value ? 0 : 10);
    const confirmResult = confirm('--- Für Betrugsprüfer --- \nDie Betrugswahrscheinlichkeit ist   \n' + (score === 0 ? 1 : score) + "! Sollen wir die Bestellung freigeben oder abbrechen?");
confirmResult === true ? alert("Ihre Bestellung wurde bestätigt") : alert("Ihre Bestellung wurde nicht bestätigt denn sie ähneln Betrug deshalb schicken wir ihnen eine extra Bibel zu.")
}