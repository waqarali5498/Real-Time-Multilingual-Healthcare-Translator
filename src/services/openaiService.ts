import axios from "axios";

const AZURE_OPENAI_ENDPOINT = import.meta.env.VITE_AZURE_GPT_35_TURBO_ENDPOINT;
const AZURE_OPENAI_API_KEY = import.meta.env.VITE_AZURE_GPT_35_TURBO_APIKEY;

export const enhanceTranscription = async (
  transcript: string
): Promise<string> => {
  const response = await axios.post(
    AZURE_OPENAI_ENDPOINT,
    {
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that enhances transcriptions for medical accuracy.",
        },
        {
          role: "user",
          content: `Enhance the following transcription for medical accuracy: ${transcript}`,
        },
      ],
      max_tokens: 100,
      temperature: 0.7,
    },
    {
      headers: {
        "api-key": AZURE_OPENAI_API_KEY,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.choices[0].message.content.trim();
};
