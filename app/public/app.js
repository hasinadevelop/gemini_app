//document ready without jquery
var conversationHistory = []

document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let prompt = document.getElementById('prompt').value
        document.getElementById('prompt').value = ''
        run(prompt)
    })
});

function run(prompt) {
    if(prompt == '') {
        return
    }

    // change content button to loader spinner de tailwind
    document.getElementById('submit').innerHTML = '<div class="animate-spin rounded-full h-6 w-6 border-b-2 border-white m-auto"></div>'

    // call fetch post with /api
    fetch('/api', {
        method: 'POST',
        body: JSON.stringify({ prompt: prompt, history: conversationHistory }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(text => {

        // add new conversation
        conversationHistory.push({
            role: 'user',
            parts: prompt
        })

        // add new conversation
        conversationHistory.push({
            role: 'model',
            parts: text
        })

        // render conversations
        renderConversations()

        document.getElementById('submit').innerHTML = '<i class="fa fa-paper-plane"></i>'
    })
    .catch(error => {
        console.error(error);
    });
}

function renderConversations() {
    var html = ''

    var conversationHistoryClone = [...conversationHistory];
    var conversationHistoryReversed = conversationHistoryClone.reverse();
    conversationHistoryReversed.forEach((conversation) => {
        if(conversation.role == 'user') {
            html += '<div class="flex flex-col  bg-gray-200 rounded-lg p-4"><div class="text-gray-500"><i class="fa fa-user text-black"></i>&nbsp;&nbsp;&nbsp;&nbsp;' + conversation.parts + '</div></div>'
        } else {
            html += '<div class="flex flex-col bg-white rounded-lg p-4"><div class="text-gray-500 flex"><i class="fa fa-robot text-black mt-1" style="width: 30px;"></i><div style="width: calc(100% - 30px);">' + conversation.parts + '</div></div></div>'
        }
    })

    document.getElementById('result').innerHTML = html
}