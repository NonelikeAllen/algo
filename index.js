function analyzeSentence(sentence) {
    // Initialize counters
    let charCount = 0;
    let wordCount = 0;
    let vowelCount = 0;
  
    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
      // Increment character count
      charCount++;
  
      // Check if the current character is a letter and the next character is not a letter or it's the last character (a point)
      if (/[a-zA-Z]/.test(sentence[i]) && (!/[a-zA-Z]/.test(sentence[i + 1]) || i === sentence.length - 1)) {
        // Increment word count
        wordCount++;
      }
  
      // Check if the current character is a vowel
      if (/[aeiouAEIOU]/.test(sentence[i])) {
        // Increment vowel count
        vowelCount++;
      }
    }
  
    // Output the results
    console.log(`Length of the sentence: ${charCount}`);
    console.log(`Number of words in the sentence: ${wordCount}`);
    console.log(`Number of vowels in the sentence: ${vowelCount}`);
  }
  
  // Example usage
  const inputSentence = "This is a sample sentence.";
  analyzeSentence(inputSentence);
  