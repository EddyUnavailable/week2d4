function addParagraph(paragraph) {
    let firstWord = paragraph.split(' ')[0]
    let rest = paragraph.substring(firstWord.length)

    const span = document.createElement('span')
    span.innerText = firstWord
    span.classList.add('add-indent')

    const p = document.createElement('p')

    p.appendChild(span)
    p.appendChild(document.createTextNode(' ' + rest))
    document.body.appendChild(p)
}

addParagraph(`Hello how are you`)

const notificationDisplay = document.getElementById('notificationDisplay')
const notificationButton = document.getElementById('notification')

notificationButton.addEventListener('click', function() {
    notificationDisplay.innerText = 'New email in your inbox!!'
})