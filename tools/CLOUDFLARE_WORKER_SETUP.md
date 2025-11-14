# Cloudflare Worker Setup for ChatBot

## Step 1: Create a Cloudflare Worker

1. Go to https://dash.cloudflare.com/
2. Click on "Workers & Pages" in the left sidebar
3. Click "Create Application"
4. Click "Create Worker"
5. Give it a name (e.g., `portfolio-chatbot`)
6. Click "Deploy"

## Step 2: Add Your Code

1. After deploying, click "Edit Code"
2. Delete all the default code
3. Copy and paste the entire contents of `cloudflare-worker-chatbot.js` from this folder
4. Click "Save and Deploy"

## Step 3: Configure Environment Variables (Secrets)

1. Go back to your Worker's page (Workers & Pages > your-worker-name)
2. Click on "Settings" tab
3. Click on "Variables and Secrets"
4. Under "Environment Variables", click "Add variable"
5. Add the following secret:
   - **Variable name**: `OPENAI_API_KEY`
   - **Value**: HIDDEN
   - **Type**: Choose "Secret" (this encrypts the value)
6. Click "Save and Deploy"

## Step 4: Get Your Worker URL

After deployment, you'll see your worker URL. It will look like:
```
https://portfolio-chatbot.YOUR-SUBDOMAIN.workers.dev
```

Copy this URL - you'll need to provide it to update the frontend code.

## Step 5: (Optional) Set Up Custom Domain

If you want a custom domain for your worker:
1. Go to "Triggers" tab in your Worker settings
2. Click "Add Custom Domain"
3. Enter your desired subdomain (e.g., `api.yourdomain.com`)
4. Follow the DNS setup instructions

## Security Notes

- The API key is stored as an encrypted secret in Cloudflare
- It's never exposed to the browser or client-side code
- The worker acts as a secure proxy

## Testing

Once deployed, you can test the worker with:

```bash
curl -X POST https://your-worker-url.workers.dev \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Hello!"}
    ]
  }'
```

## Troubleshooting

If you get errors:
1. Check that the OPENAI_API_KEY secret is set correctly
2. Verify your OpenAI API key is valid and has credits
3. Check the worker logs in the Cloudflare dashboard (Logs tab)
4. Make sure you clicked "Save and Deploy" after adding the secret

## Important: Update CORS for Production

In the worker code, this line allows any origin:
```javascript
'Access-Control-Allow-Origin': '*'
```

For production, change it to your specific domain:
```javascript
'Access-Control-Allow-Origin': 'https://yourdomain.com'
```
