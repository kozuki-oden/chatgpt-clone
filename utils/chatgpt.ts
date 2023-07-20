import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-T8qXLBx6iQTgOcz3SlNUTMJx",
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  const openai = new OpenAIApi(configuration);
  
  export default openai;