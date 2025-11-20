"""
Flask backend for The Practical AI Index.

This backend provides API endpoints for model comparisons, behavioral testing,
and stewardship calculations using OpenRouter's free models.
"""

import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from openrouter_client import OpenRouterClient
import requests

load_dotenv()

app = Flask(__name__)

# Configure CORS
cors_origins = os.getenv("CORS_ORIGINS", "http://localhost:3000").split(",")
CORS(app, origins=cors_origins)

# Initialize OpenRouter client
try:
    openrouter = OpenRouterClient()
except ValueError as e:
    print(f"Warning: OpenRouter client not initialized: {e}")
    openrouter = None


@app.route("/")
def home():
    """Health check endpoint."""
    return jsonify({
        "status": "running",
        "app": "The Practical AI Index Backend",
        "openrouter_configured": openrouter is not None
    })


@app.route("/api/chat", methods=["POST"])
def chat():
    """
    Chat completion endpoint using OpenRouter free models.

    Request body:
    {
        "message": "Your prompt here",
        "model": "deepseek/deepseek-r1:free" (optional, defaults to env var)
    }
    """
    if not openrouter:
        return jsonify({"error": "OpenRouter not configured. Set OPENROUTER_API_KEY in .env"}), 500

    data = request.get_json()

    if not data or "message" not in data:
        return jsonify({"error": "Missing 'message' in request body"}), 400

    user_message = data["message"]
    model = data.get("model", os.getenv("OPENROUTER_MODEL", "deepseek/deepseek-r1:free"))

    try:
        response = openrouter.chat_completion(
            model=model,
            messages=[{"role": "user", "content": user_message}],
            temperature=0.7
        )

        return jsonify({
            "success": True,
            "model": model,
            "response": response["choices"][0]["message"]["content"],
            "usage": response.get("usage", {})
        })

    except requests.HTTPError as e:
        return jsonify({
            "error": "OpenRouter API error",
            "details": str(e),
            "status_code": e.response.status_code
        }), 500
    except Exception as e:
        return jsonify({
            "error": "Unexpected error",
            "details": str(e)
        }), 500


@app.route("/api/models/free", methods=["GET"])
def get_free_models():
    """Get list of available free models on OpenRouter."""
    free_models = [
        {
            "id": "deepseek/deepseek-r1:free",
            "name": "DeepSeek R1 Free",
            "provider": "DeepSeek",
            "context_window": 32768,
            "best_for": "Reasoning, coding, complex problem-solving"
        },
        {
            "id": "z-ai/glm-4.5-air:free",
            "name": "GLM-4.5 Air Free",
            "provider": "Zhipu AI",
            "context_window": 32768,
            "best_for": "Fast general tasks, quick responses"
        },
        {
            "id": "qwen/qwen-2.5-7b:free",
            "name": "Qwen 2.5 7B Free",
            "provider": "Alibaba",
            "context_window": 32768,
            "best_for": "Multilingual support, general tasks"
        },
        {
            "id": "mistralai/mistral-7b:free",
            "name": "Mistral 7B Free",
            "provider": "Mistral AI",
            "context_window": 32000,
            "best_for": "High-speed inference, general purpose"
        },
        {
            "id": "google/gemma-7b:free",
            "name": "Gemma 7B Free",
            "provider": "Google",
            "context_window": 8192,
            "best_for": "Lightweight tasks, quick inference"
        }
    ]

    return jsonify({
        "success": True,
        "count": len(free_models),
        "models": free_models
    })


@app.route("/api/compare", methods=["POST"])
def compare_models():
    """
    Compare multiple models on the same prompt.

    Request body:
    {
        "prompt": "Your test prompt",
        "models": ["model1", "model2"] (optional, uses free models by default)
    }
    """
    if not openrouter:
        return jsonify({"error": "OpenRouter not configured"}), 500

    data = request.get_json()

    if not data or "prompt" not in data:
        return jsonify({"error": "Missing 'prompt' in request body"}), 400

    prompt = data["prompt"]
    models = data.get("models", [
        "deepseek/deepseek-r1:free",
        "z-ai/glm-4.5-air:free",
        "qwen/qwen-2.5-7b:free"
    ])

    results = []

    for model in models:
        try:
            response = openrouter.chat_completion(
                model=model,
                messages=[{"role": "user", "content": prompt}],
                temperature=0.7
            )

            results.append({
                "model": model,
                "success": True,
                "response": response["choices"][0]["message"]["content"],
                "usage": response.get("usage", {})
            })
        except Exception as e:
            results.append({
                "model": model,
                "success": False,
                "error": str(e)
            })

    return jsonify({
        "success": True,
        "prompt": prompt,
        "results": results
    })


@app.route("/api/health", methods=["GET"])
def health():
    """Detailed health check with configuration status."""
    return jsonify({
        "status": "healthy",
        "openrouter": {
            "configured": openrouter is not None,
            "api_url": os.getenv("OPENROUTER_API_URL", "https://openrouter.ai/api/v1"),
            "default_model": os.getenv("OPENROUTER_MODEL", "deepseek/deepseek-r1:free")
        },
        "cors": {
            "allowed_origins": cors_origins
        }
    })


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    debug = os.getenv("FLASK_ENV") == "development"

    app.run(host="0.0.0.0", port=port, debug=debug)
