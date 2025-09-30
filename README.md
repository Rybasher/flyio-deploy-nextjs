# Next.js Hello App

A basic Next.js application that displays a greeting with a name from environment variables.

## Installation and Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file from the example:
```bash
cp example.env .env.local
```

3. Edit `.env.local` and set the value for the `NEXT_PUBLIC_NAME` variable:
```
NEXT_PUBLIC_NAME=YourName
```

4. Run the application in development mode:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

The application uses the `NEXT_PUBLIC_NAME` environment variable to display a personalized greeting.

- The `NEXT_PUBLIC_` prefix is required for accessing the variable on the client side
- If the variable is not set, the default value "World" is used
- In development mode, the variable is read from the `.env.local` file
- In production, the variable must be set in the runtime environment

## Deployment on Fly.io

The application is ready for deployment on Fly.io:

```bash
# Install Fly.io CLI and login to your account
fly auth login

# Deploy the application
fly deploy

# Set the environment variable
fly secrets set NEXT_PUBLIC_NAME=YourName
```

## Project Structure

- `src/app/page.tsx` - main application page
- `next.config.js` - Next.js configuration (standalone mode for Docker)
- `Dockerfile` - configuration for containerization
- `example.env` - example file with environment variables