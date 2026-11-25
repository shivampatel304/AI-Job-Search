import OpenAI from "openai";

const client = new OpenAI();

const OPENAI_MODEL = process.env.OPENAI_MODEL;

const response = await client.responses.create({
    model: OPENAI_MODEL,
    tools: [{type: "web_search"}],
    input: "find 10 software developer job for a candidate with 3 years of experience in node and typescript.",
    instructions: "Find a reputated companies around Toronto ontario."
});

console.log(response.output_text);