import words from 'lodash.words'

function timeToRead(content) {
  let TTR
  const avgWPM = 240
  const wordCount = words(content).length
  TTR = Math.round(wordCount / avgWPM)
  if (TTR === 0) {
    TTR = 1
  }
  return TTR
}

export default timeToRead
