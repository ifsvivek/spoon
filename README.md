# Spoon - AI Document Analyzer

![Spoon Interface Preview](https://github.com/user-attachments/assets/06c7dc2a-b59b-4218-8439-ce05e91f504b)

Spoon is a lightweight AI-powered tool that analyzes documents and GitHub repositories to extract key insights and technical information using Google's Gemini AI.

## ✨ Features

- **📄 File Analysis**  
  Supports PDF and Markdown documents with automatic content parsing
- **🐙 GitHub Integration**  
  Analyze public repositories by URL or `owner/repo` format
- **🤖 AI-Powered Insights**  
  Uses Google Gemini 2.5 Pro to extract:
    - Intelligent project summaries
    - Key features and use cases identification
    - Technology stack analysis
    - Project structure overview
    - Document statistics (word count, sections, etc.)
- **🎨 Clean Interface**  
  Intuitive tab-based navigation with responsive design
- **🔒 Secure API Handling**  
  Server-side API key management for enhanced security

## 🚀 Quick Start

1. Clone the repository:

    ```bash
    git clone https://github.com/chinni-03/spoon.git
    cd spoon
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory:

    ```bash
    GEMINI_API_KEY=your_gemini_api_key_here
    ```

    Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Open in your browser:
    ```text
    http://localhost:5173
    ```

## 📖 Usage Guide

### For Document Analysis

1. Select the "Upload File" tab
2. Choose a PDF or Markdown file
3. View automatically generated analysis

### For GitHub Analysis

1. Select the "GitHub Repo" tab
2. Enter repository URL (e.g., `https://github.com/owner/repo` or `owner/repo`)
3. Click "Analyze" to view AI-generated insights including:
    - Project purpose and summary
    - Key features identification
    - Use cases analysis
    - Notable statistics

## 🤖 AI Analysis Features

Spoon leverages Google's Gemini 2.5 Pro model to provide intelligent analysis:

- **Smart Content Understanding**: Advanced comprehension of code, documentation, and project structure
- **Contextual Insights**: Generates relevant summaries based on repository content and README files
- **Structured Output**: Provides well-organized JSON responses for consistent data presentation
- **Streaming Responses**: Uses efficient streaming for real-time analysis feedback

## 🛠️ Tech Stack

| Technology                                    | Purpose                         |
| --------------------------------------------- | ------------------------------- |
| [Svelte](https://svelte.dev/)                 | Frontend framework              |
| [Tailwind CSS](https://tailwindcss.com/)      | Utility-first CSS styling       |
| [Google GenAI](https://aistudio.google.com/)  | AI analysis with Gemini 2.5 Pro |
| [Marked.js](https://marked.js.org/)           | Markdown parsing                |
| [PDF-lib](https://pdf-lib.js.org/)            | PDF document processing         |
| [GitHub API](https://docs.github.com/en/rest) | Repository analysis             |

## ⚙️ Configuration

### Environment Variables

The application requires the following environment variable:

- `GEMINI_API_KEY`: Your Google AI API key for Gemini access

### Development Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run format     # Format code with Prettier
npm run lint       # Check code formatting
```

## 🔧 API Endpoints

- `POST /api/analyze-file` - Analyze uploaded documents
- `POST /api/analyze-github` - Analyze GitHub repositories

## 🔒 Security Features

- Server-side API key handling using SvelteKit's `$env/static/private`
- No client-side exposure of sensitive credentials
- Secure AI API integration with proper error handling

## � Troubleshooting

### Common Issues

1. **"API key is required" error**
    - Ensure `GEMINI_API_KEY` is set in your `.env` file
    - Verify the API key is valid and has Gemini API access

2. **GitHub API rate limiting**
    - The app uses public GitHub API endpoints
    - Rate limits may apply for excessive requests

3. **AI analysis fails**
    - Check your Gemini API quota and billing status
    - Ensure the repository content is accessible

## �📜 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/chinni-03/spoon/blob/main/LICENSE) file for details.

---

**Maintained by** [ifsvivek](https://github.com/ifsvivek) | **Originally by** [Harshini Vijendra Kumar](https://github.com/chinni-03)
