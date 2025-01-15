import axios from "axios";

const AZURE_TRANSLATOR_KEY = import.meta.env.VITE_AZURE_TRANSLATOR_KEY;
const AZURE_TRANSLATOR_ENDPOINT = import.meta.env
  .VITE_AZURE_TRANSLATOR_ENDPOINT;
const AZURE_TRANSLATOR_REGION = import.meta.env.VITE_AZURE_TRANSLATOR_REGION;

export const translateText = async (
  text: string,
  targetLanguage: string
): Promise<string> => {
  try {
    const response = await axios.post(
      `${AZURE_TRANSLATOR_ENDPOINT}/translate?api-version=3.0&to=${targetLanguage}`,
      [
        {
          Text: text,
        },
      ],
      {
        headers: {
          "Ocp-Apim-Subscription-Key": AZURE_TRANSLATOR_KEY,
          "Content-Type": "application/json",
          "Ocp-Apim-Subscription-Region": AZURE_TRANSLATOR_REGION, // Include region header
        },
      }
    );
    return response.data[0].translations[0].text;
  } catch (error) {
    console.error("Translation API error:", error);
    throw new Error("Failed to translate text");
  }
};
