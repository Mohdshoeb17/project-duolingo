/**
 * Smart, multilingual text-to-speech audio helper
 * Supports English, Spanish, French, German, Japanese, and Indian languages
 * (Hindi, Tamil, Telugu, Kannada, Malayalam).
 */
export function playAudio(rawText: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  // Check if sound effects/audio are disabled in settings
  const soundPref = localStorage.getItem('sound_effects');
  if (soundPref === 'false') {
    return;
  }

  window.speechSynthesis.cancel();

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

  // Detect language
  let lang = 'en-US';

  // Indian Languages detection (Devanagari, Tamil, Telugu, Kannada, Malayalam, or Transliterated keywords)
  if (/[\u0900-\u097F]/.test(textToSpeak) || /Namaste|Dhanyawad|Shubh|prabhat|Aap|kaise/i.test(textToSpeak)) {
    lang = 'hi-IN'; // Hindi
  } else if (/[\u0B80-\u0BFF]/.test(textToSpeak) || /Vanakkam|Nandri|Eppadi|irukkeenga/i.test(textToSpeak)) {
    lang = 'ta-IN'; // Tamil
  } else if (/[\u0C00-\u0C7F]/.test(textToSpeak) || /Namaskaram|Dhanyavadalu|Meeru|unnaru/i.test(textToSpeak)) {
    lang = 'te-IN'; // Telugu
  } else if (/[\u0C80-\u0CFF]/.test(textToSpeak) || /Namaskara|Dhanyavada|Neevu|hege|Haudu/i.test(textToSpeak)) {
    lang = 'kn-IN'; // Kannada
  } else if (/[\u0D00-\u0D7F]/.test(textToSpeak) || /Nandi|Sukham|aano|Athe/i.test(textToSpeak)) {
    lang = 'ml-IN'; // Malayalam
  } else if (/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(textToSpeak) || /Konnichiwa|Arigatou|Sayonara|Hai|Ohayou/i.test(textToSpeak)) {
    lang = 'ja-JP'; // Japanese
  } else if (/[äöüß]/i.test(textToSpeak) || /Hallo|Tschüss|Danke|Guten|Morgen|Bitte/i.test(textToSpeak)) {
    lang = 'de-DE'; // German
  } else if (/[éèêëàâôûùç]/i.test(textToSpeak) || /Bonjour|Bonsoir|Merci|Au revoir|Oui/i.test(textToSpeak)) {
    lang = 'fr-FR'; // French
  } else if (/[áéíóúñ¿¡]/i.test(textToSpeak) || /Hola|Cómo|Dónde|Adiós|Gracias|llamas|estás/i.test(textToSpeak)) {
    lang = 'es-ES'; // Spanish
  } else {
    lang = 'en-US'; // English default
  }

  try {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = lang;
    utterance.volume = 1.0;
    utterance.rate = 0.9;
    utterance.pitch = 1.05;

    const voices = window.speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
      const preferredVoice = voices.find(
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
