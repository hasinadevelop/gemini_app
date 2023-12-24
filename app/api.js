const { GoogleGenerativeAI } = require("@google/generative-ai")

const genAI = new GoogleGenerativeAI(process.env.API_KEY)

const model = genAI.getGenerativeModel({ model: "gemini-pro"})


let run = async (prompt) => {
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    return text
}

async function runConversation(prompt, history) {
    const chat = model.startChat({
        history: history,
        generationConfig: {
            maxOutputTokens: 100,
        },
    })
  
    const result = await chat.sendMessage(prompt)
    const response = await result.response
    const text = response.text()
    return text
}  

module.exports = {
    genAI,
    model,
    run,
    runConversation
}