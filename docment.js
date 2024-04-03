let api = "api_key"
let submet = document.getElementById("btns")
let input = document.getElementById("inp")
let resolt = document.getElementById("textP")


async function getmassge(){
    console.log("good")

    const openai = {
        method:"POST",
        headers:{
            "Authorization": `Bearer ${api}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: input.value }],
            max_tokens:100,
        })
    }
    try
    {
        let response = await fetch("https://api.openai.com/v1/chat/completions" , openai)
        const date = await response.json()
        console.log(date)
        resolt.textContent = date.choices[0].message.content
    }
    catch (error){
        console.log(error)
    }
    input.value = ""
}
submet.addEventListener("click" , getmassge)










