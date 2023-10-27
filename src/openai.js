const OpenAI=require("openai");
const openai=new OpenAI({
    apiKey:"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",
    dangerouslyAllowBrowser: true
});

export async function sendMsgToOpenAI(message){
    const res=await openai.completions.create({
        model:'text-davinci-003',
        prompt: message,
        temperature:0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        
    });
    return res.choices[0].text;
}