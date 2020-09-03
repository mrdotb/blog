function mailTo() {
  let location = 'mailto:'
  let mail = 'lqcnsa?oqnsnml`hk-bnl'
  for (let i = 0; i < mail.length; i++) {
    location += String.fromCharCode(mail.charCodeAt(i) + 1)
  }
  window.location.href = location
}

export default mailTo
