// script.js
document.addEventListener('DOMContentLoaded', () => {
    const chatLog = document.getElementById('chat-log');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');

    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    sendButton.addEventListener('click', sendMessage);

    function sendMessage() {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            addMessageToChat('user', userMessage);
            chatInput.value = '';
            getBotResponse(userMessage);
        }
    }

    function addMessageToChat(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender);
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function getBotResponse(userMessage) {
        const botMessage = generateBotResponse(userMessage);
        addMessageToChat('bot', botMessage);
    }

    function generateBotResponse(userMessage) {
        // Simple response logic
        const responses = {
            'hi': 'Hi there!',
            'hello': 'Hello!',
            'how are you': 'I am doing great, thank you for asking!',
            'who created you':'Ngio did',
            'what is your name': 'Mulatya',
            'bye': 'Goodbye!',
            
            
        };

        userMessage = userMessage.toLowerCase();
        return responses[userMessage] || "I didn't understand that. Can you please rephrase?";
    }
});
