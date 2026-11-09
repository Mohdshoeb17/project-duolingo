/**
 * Clear & Loud client-side text-to-speech audio helper
 * Checks sound_enabled preference before speaking.
 */
export function playAudio(rawText: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  // Check if sound effects/audio are disabled in settings
  const soundPref = localStorage.getItem('sound_effects');
  if (soundPref === 'false') {
    return; // User disabled audio in settings
  }

  // Ensure speech synthesis is active and cancel any previous queued utterances
  window.speechSynthesis.cancel();

  // Clean the text to speak
  let textToSpeak = rawText.trim();

  // If text is wrapped in quotes, prefer speaking the quoted target phrase
  const quoteMatch = rawText.match(/['"“‘]([^'"”’]+)['"”’]/);
  if (quoteMatch && quoteMatch[1] && quoteMatch[1].length > 1) {
    textToSpeak = quoteMatch[1].trim();
  } else {
    textToSpeak = textToSpeak.replace(/^(Translate:\s*)/i, '').trim();
  }

  if (!textToSpeak) {
    textToSpeak = rawText;
  }

  // Detect language for authentic pronunciation
  let lang = 'en-US';
  if (/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(textToSpeak) || /Konnichiwa|Arigatou|Sayonara|Hai|Ohayou/i.test(textToSpeak)) {
    lang = 'ja-JP';
  } else if (/[äöüß]/i.test(textToSpeak) || /Hallo|Tschüss|Danke|Guten|Morgen|Bitte/i.test(textToSpeak)) {
    lang = 'de-DE';
  } else if (/[éèêëàâôûùç]/i.test(textToSpeak) || /Bonjour|Bonsoir|Merci|Au revoir|Oui/i.test(textToSpeak)) {
    lang = 'fr-FR';
  } else if (/[áéíóúñ¿¡]/i.test(textToSpeak) || /Hola|Cómo|Dónde|Adiós|Gracias|llamas|estás/i.test(textToSpeak)) {
    lang = 'es-ES';
  } else {
    lang = 'en-US';
  }

  try {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = lang;
    utterance.volume = 1.0;
    utterance.rate = 0.92;
    utterance.pitch = 1.05;

    const voices = window.speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
      const preferredVoice = voices.find(
        (v) =>
          v.lang.toLowerCase().replace('_', '-').startsWith(lang.toLowerCase().slice(0, 2)) &&
          (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Premium') || v.default)
      ) || voices.find(
        (v) => v.lang.toLowerCase().replace('_', '-').startsWith(lang.toLowerCase().slice(0, 2))
      );

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
    }

    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.warn('Speech synthesis error:', e);
  }
}
