// playground-utils.js
// Einheitliche Aufgaben-Check- und Feedback-Logik für alle Playgrounds

/**
 * Prüft die Lösung und gibt Feedback aus.
 * @param {string} userInput - Der vom Nutzer eingegebene Code/Text
 * @param {function} checkFn - Die Check-Funktion der Aufgabe
 * @param {HTMLElement} outputEl - Das Output-Element für das Feedback
 * @param {HTMLElement} infoBox - Die Info-Box (für Tipps)
 * @param {string} successMsg - Nachricht bei Erfolg
 * @param {string} errorMsg - Nachricht bei Fehler
 */
export function checkAndFeedback(userInput, checkFn, outputEl, infoBox, successMsg, errorMsg) {
  let result = '';
  try {
    if (checkFn(userInput)) {
      result = `<div style="color:green;font-weight:bold;">✅ ${successMsg}</div>`;
    } else {
      result = `<div style="color:#e65100;font-weight:bold;">❌ ${errorMsg} Tipp: ${infoBox ? infoBox.innerText : ''}</div>`;
    }
  } catch (e) {
    result = `<span style="color:red;">Fehler: ${e.message}</span>`;
  }
  outputEl.innerHTML += result;
} 