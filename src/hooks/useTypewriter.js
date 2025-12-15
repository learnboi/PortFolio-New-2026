import { useState, useEffect } from 'react';

const useTypewriter = (words, typingSpeed = 50, deletingSpeed = 30, delay = 2000) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length === 0) return;
    
    const currentWord = words[currentIndex];
    if (!currentWord) return;
    
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        // Typing
        setCurrentText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setCurrentText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        // Finished typing, wait then start deleting
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setCharIndex(0);
        setCurrentText('');
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentIndex, words, typingSpeed, deletingSpeed, delay]);

  return currentText;
};

export default useTypewriter;

