# Healthcare Translation Web App with Generative AI

This project is a Vite-based application that uses Tailwind CSS for styling and integrates speech recognition and translation services. The primary goal is to enable real-time, multilingual translation between patients and healthcare providers.

## Objective

Develop a web-based prototype that converts spoken input into text, provides a live transcript, and offers a translated version with audio playback. This application aims to facilitate communication in healthcare settings.

## Project Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/waqarali5498/Real-Time-Multilingual-Healthcare-Translator.git
   cd Real-Time-Multilingual-Healthcare-Translator
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```properties
   VITE_AZURE_TRANSLATOR_KEY="your-azure-translator-key"
   VITE_AZURE_TRANSLATOR_ENDPOINT="your-azure-translator-endpoint"
   VITE_AZURE_TRANSLATOR_REGION="your-azure-translator-region"
   VITE_AZURE_GPT_35_TURBO_ENDPOINT="your-azure-gpt-35-turbo-endpoint"
   VITE_AZURE_GPT_35_TURBO_APIKEY="your-azure-gpt-35-turbo-apikey"
   ```

### Running the Project

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

### Building the Project

To build the project for production, run:

```bash
npm run build
# or
yarn build
```

### Linting and Formatting

To lint the project, run:

```bash
npm run lint
# or
yarn lint
```

To format the code, run:

```bash
npm run format
# or
yarn format
```

## Project Structure

- `src/`: Contains the source code of the application.
  - `components/`: React components.
  - `hooks/`: Custom React hooks.
  - `services/`: Service modules for API calls.
  - `index.css`: Tailwind CSS imports.
- `tailwind.config.js`: Tailwind CSS configuration.
- `.env`: Environment variables.

## Usage

### Speech Recognition and Translation

The application supports speech recognition and translation using Azure and Google APIs. The main component for this functionality is `MainComponent`.

### Tailwind CSS

Tailwind CSS is used for styling. You can customize the styles in `tailwind.config.js` and `src/index.css`.

## License

This project is licensed under the MIT License.
