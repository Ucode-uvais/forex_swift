# ForexSwift

**ForexSwift** is a currency converter application that allows users to get real-time exchange rates and convert amounts from one currency to another seamlessly. This project is built with modern web technologies, offering an intuitive user experience for all devices.

## Features

- **Real-Time Exchange Rates**: Get accurate exchange rates for major global currencies.
- **Currency Swap Functionality**: Easily swap "from" and "to" currencies with a single click.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **User-Friendly Interface**: Simple, accessible design with input validation and error handling.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Icons**: Lucide React
- **API**: Exchange Rate API (https://v6.exchangerate-api.com/)

## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/ForexSwift.git
   cd ForexSwift

   ```

2. **Install Dependencies**:

   npm install

3. **Environment Variables: Create a .env file in the project root and add your Exchange Rate API key**:

   VITE_API_KEY=your_api_key

4. **Run The Application**:

   npm run dev


**Screenshot**
![Screenshot 2024-10-30 075422](https://github.com/user-attachments/assets/2bc7147f-70e6-4ed3-99fc-95eff1df148c)

**Folder Structure**

ForexSwift
│
├── public
│ └── index.html
│
├── src
│ ├── assets # Static files and images
│ ├── components # Reusable components (e.g., SelectCurrency)
│ ├── App.jsx # Main app component
│ ├── main.jsx # React entry point
│ └── styles # Global and component styles
│
├── .env # Environment variables for API key
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js # PostCSS configuration
└── README.md # Project documentation

**Acknowledgments**

Exchange Rate API - For providing the reliable and accurate exchange rates.
Lucide React - For the beautiful icon set.
React & Tailwind CSS - For making development easy and efficient.
