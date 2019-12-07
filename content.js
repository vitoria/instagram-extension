const scriptInstagram = e => {
  switch(e.keyCode) {
    // Send message on enter
    case 13:
      document.querySelector('.X3a-9 button').click()
      break
    // Back on delete
    case 46:
      document.querySelector('.Iazdo').click()    
      break
    default:
      break
  }
}

addEventListener('keyup', scriptInstagram)