import { GoogleGenAI } from '@google/genai';

export async function generateAISummary({ repoData, readmeContent, contributors, apiKey }) {
    try {
        if (!apiKey) {
            throw new Error('API key is required');
        }

        const ai = new GoogleGenAI({
            apiKey: apiKey
        });

        const config = {
            thinkingConfig: {
                thinkingBudget: -1
            }
        };

        const model = 'gemini-2.5-pro';

        const prompt = `Analyze this GitHub repository and provide the following information in valid JSON format:
    
    {
      "summary": "concise summary of the project's purpose (1-2 paragraphs)",
      "features": ["array", "of", "key", "features"],
      "useCases": ["array", "of", "use", "cases"],
      "stats": {
        "notableStatistics": "text description"
      }
    }
    
    Repository: ${repoData.full_name}
    ${repoData.description ? `Description: ${repoData.description}` : ''}
    ${readmeContent ? `Readme Content: ${readmeContent.substring(0, 30000)}` : ''}
    `;

        const contents = [
            {
                role: 'user',
                parts: [
                    {
                        text: prompt
                    }
                ]
            }
        ];

        const response = await ai.models.generateContentStream({
            model,
            config,
            contents
        });

        let fullText = '';
        for await (const chunk of response) {
            if (chunk.text) {
                fullText += chunk.text;
            }
        }

        // Clean and parse response
        const cleanText = fullText
            .replace(/```json/g, '')
            .replace(/```/g, '')
            .trim();
        return JSON.parse(cleanText);
    } catch (error) {
        console.error('Google GenAI API error details:', {
            message: error.message,
            stack: error.stack,
            response: error.response?.text?.()
        });
        throw new Error('Failed to generate AI summary: ' + error.message);
    }
}
