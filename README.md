# Recipe App

A React.js application that generates recipes using Hugging Face AI (Mistral AI) based on a list of ingredients entered by the user. Users must provide at least **four ingredients** to receive a recipe suggestion.

## Features

- Accepts a list of ingredients as input.
- Uses **Hugging Face API (Mistral AI)** to generate recipe suggestions.
- Displays AI-generated recipes using **React Markdown**.
- Automatically scrolls to the response when received.
- Built with **React 19** and **Node.js 22**.
- Securely stores API access token in an **.env** file.
- Utilizes **side effects (useEffect) and refs (useRef) hooks**.

## Requirements

Before running this project, ensure you have the following installed:

- **Node.js v22** or later
- **npm** or **yarn**
- **React 19** or later
- A **Hugging Face API token** (store it in an `.env` file)

## Installation

Follow these steps to set up and run the project:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/recipe-app.git
   cd recipe-app
   ```

2. **Install dependencies:**

   ```sh
   npm install  # or yarn install
   ```

3. **Create a **``** file** in the root directory and add your Hugging Face API token:

   ```env
   REACT_APP_HUGGINGFACE_API_KEY=your_api_token_here
   ```

4. **Start the development server:**

   ```sh
   npm start  # or yarn start
   ```

## Dependencies

The project relies on the following npm packages:

- `react` (v19)
- `react-dom`
- `react-scripts`
- `react-markdown` (for rendering AI responses)
- `@huggingface/inference` (for API calls to Hugging Face)

## Usage

1. Enter at least **four ingredients** in the input field.
2. Click the "Get Recipe" button.
3. Wait for the AI-generated recipe.
4. The response will be displayed using **React Markdown** and will automatically scroll into view.

## Contributing

Feel free to contribute by submitting issues or pull requests.

## License

This project is licensed under the **MIT License**.

---

**Author:** Utkarsh Kamra\
GitHub: [Utkarsh-kamra](https://github.com/Utkarsh-kamra)







<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->
