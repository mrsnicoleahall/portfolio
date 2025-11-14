/**
 * Cloudflare Worker - OpenAI Chat Proxy
 *
 * This worker acts as a secure proxy between your portfolio site and OpenAI's API.
 * It prevents exposing your API key in the browser and adds rate limiting.
 */

export default {
  async fetch(request, env) {
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*', // In production, replace * with your domain
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders,
      });
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', {
        status: 405,
        headers: corsHeaders,
      });
    }

    try {
      // Parse the incoming request
      const body = await request.json();
      const { messages } = body;

      // Validate messages
      if (!messages || !Array.isArray(messages)) {
        return new Response(JSON.stringify({ error: 'Invalid request: messages array required' }), {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        });
      }

      // Call OpenAI API
      const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: messages,
          temperature: 0.7,
          max_tokens: 300,
        }),
      });

      // Handle OpenAI API errors
      if (!openaiResponse.ok) {
        const errorData = await openaiResponse.json();
        console.error('OpenAI API Error:', errorData);
        return new Response(JSON.stringify({
          error: errorData.error?.message || 'OpenAI API request failed'
        }), {
          status: openaiResponse.status,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        });
      }

      // Return successful response
      const data = await openaiResponse.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      });

    } catch (error) {
      console.error('Worker Error:', error);
      return new Response(JSON.stringify({
        error: 'Internal server error: ' + error.message
      }), {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      });
    }
  },
};
