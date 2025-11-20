# Using Free Models on OpenRouter

The Practical AI Index backend is configured to use **free models** by default, enabling cost-free development and testing while maintaining high-quality AI capabilities.

## Why Free Models?

Aligns with core project principles:
- **Financial Stewardship**: Zero API costs for development and testing
- **Low Friction**: Get started immediately without payment setup
- **Purposeful Technology**: Focus on building value, not managing costs
- **No Vendor Lock-in**: Easy to test multiple models without commitment

## Available Free Models (2025)

OpenRouter provides free access to several high-quality models via monthly credit quotas:

### DeepSeek R1 (Recommended Default)
```
Model ID: deepseek/deepseek-r1:free
Provider: DeepSeek
Context: 32,768 tokens
Best For: Reasoning, coding, complex problem-solving
```

**Why we chose this as default:**
- Excellent reasoning capabilities
- Strong at coding tasks (perfect for our use case)
- Large context window for analyzing model comparisons
- Fast inference speed

### GLM-4.5 Air
```
Model ID: z-ai/glm-4.5-air:free
Provider: Zhipu AI
Context: 32,768 tokens
Best For: Fast general tasks, quick responses
```

**Use case:** When you need rapid responses for simple queries or UI interactions.

### Qwen 2.5 7B
```
Model ID: qwen/qwen-2.5-7b:free
Provider: Alibaba
Context: 32,768 tokens
Best For: Multilingual support, general tasks
```

**Use case:** Testing behavioral patterns across different language contexts.

### Mistral 7B
```
Model ID: mistralai/mistral-7b:free
Provider: Mistral AI
Context: 32,000 tokens
Best For: High-speed inference, general purpose
```

**Use case:** Bulk processing tasks where speed matters.

### Gemma 7B
```
Model ID: google/gemma-7b:free
Provider: Google
Context: 8,192 tokens
Best For: Lightweight tasks, quick inference
```

**Use case:** Simple queries with smaller context requirements.

## Usage Limits

- **Free Monthly Credits**: OpenRouter provides free credits each month
- **BYOK Proxy**: First 1M requests/month are free when using OpenRouter as a proxy
- **Rate Limits**: Generous limits suitable for development and testing

**No credit card required** to get started.

## Quick Start

### 1. Get Your Free API Key

```bash
# Visit https://openrouter.ai/keys
# Sign up (free, no payment required)
# Create a new API key
```

### 2. Configure Backend

```bash
cd backend
cp .env.example .env
# Edit .env and add your API key
```

Your `.env` should include:
```bash
OPENROUTER_API_KEY=sk-or-v1-your-key-here
OPENROUTER_MODEL=deepseek/deepseek-r1:free  # Default free model
```

### 3. Test the API

```bash
# Start the Flask server
uv run flask run --debug

# In another terminal, test the chat endpoint
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Explain LLMs in one sentence"}'
```

### 4. Compare Multiple Free Models

```bash
curl -X POST http://localhost:5000/api/compare \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Write a haiku about AI",
    "models": [
      "deepseek/deepseek-r1:free",
      "z-ai/glm-4.5-air:free",
      "qwen/qwen-2.5-7b:free"
    ]
  }'
```

## API Endpoints

### GET `/api/models/free`
Get list of all available free models with metadata.

**Response:**
```json
{
  "success": true,
  "count": 5,
  "models": [
    {
      "id": "deepseek/deepseek-r1:free",
      "name": "DeepSeek R1 Free",
      "provider": "DeepSeek",
      "context_window": 32768,
      "best_for": "Reasoning, coding, complex problem-solving"
    }
  ]
}
```

### POST `/api/chat`
Send a message to a free model.

**Request:**
```json
{
  "message": "Your prompt here",
  "model": "deepseek/deepseek-r1:free"  // Optional, uses default if not specified
}
```

**Response:**
```json
{
  "success": true,
  "model": "deepseek/deepseek-r1:free",
  "response": "Model's response text",
  "usage": {
    "prompt_tokens": 10,
    "completion_tokens": 50,
    "total_tokens": 60
  }
}
```

### POST `/api/compare`
Compare multiple models on the same prompt.

**Request:**
```json
{
  "prompt": "Your test prompt",
  "models": ["model1", "model2"]  // Optional, uses default free models if not specified
}
```

## Python Client Usage

```python
from openrouter_client import OpenRouterClient

client = OpenRouterClient()

# Use default free model
response = client.chat_completion(
    model="deepseek/deepseek-r1:free",
    messages=[{"role": "user", "content": "Hello!"}]
)

print(response["choices"][0]["message"]["content"])
```

## Best Practices

### 1. Model Selection Strategy
- **Development**: Use `deepseek/deepseek-r1:free` for general testing
- **Speed Tests**: Use `z-ai/glm-4.5-air:free` for rapid iterations
- **Multilingual**: Use `qwen/qwen-2.5-7b:free` for language testing

### 2. Cost Optimization
- Start with free models for all development
- Only upgrade to paid models when specific capabilities are needed
- Use the `/api/compare` endpoint to validate if paid models are worth it

### 3. Rate Limiting
- Free models have generous limits for development
- Monitor your usage at https://openrouter.ai/activity
- Implement caching for repeated prompts

### 4. Privacy
- OpenRouter does not store your prompts by default
- Free models have the same privacy guarantees as paid models
- Data is not used for training

## Upgrading to Paid Models

When you need premium capabilities:

```python
# In your .env or API call
OPENROUTER_MODEL=openai/gpt-4-turbo  # Paid model

# Or specify per-request
response = client.chat_completion(
    model="anthropic/claude-3.5-sonnet",  # Paid model
    messages=[...]
)
```

The same API works for both free and paid models—just change the model ID.

## Troubleshooting

### "API key not configured"
- Ensure `.env` file exists in `/backend`
- Check that `OPENROUTER_API_KEY` is set
- Restart the Flask server after changing `.env`

### "Model not available"
- Verify model ID is correct (include `:free` suffix)
- Check https://openrouter.ai/models for current free model list
- Some free models may have temporary availability limits

### Rate Limit Errors
- Check your usage at https://openrouter.ai/activity
- Implement request throttling if needed
- Consider caching responses

## Integration with Practical AI Index

Free models enable:

1. **Behavioral Testing**: Compare response styles across models at zero cost
2. **Versus Engine**: Real-time model comparisons without API charges
3. **Development**: Build and test features without worrying about costs
4. **Custom Benchmarks**: Run "Shade Protocol" tests extensively

## Resources

- [OpenRouter Free Models](https://openrouter.ai/models?free=true)
- [OpenRouter Documentation](https://openrouter.ai/docs)
- [Usage Dashboard](https://openrouter.ai/activity)
- [API Reference](https://openrouter.ai/docs/api-reference)

---

**Financial Stewardship Note**: Using free models allows The Practical AI Index to operate at zero API cost during development, aligning with our principle of purposeful, financially-wise technology choices. This enables us to focus resources on delivering value rather than managing expenses.
