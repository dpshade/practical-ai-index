import { ModelProfile } from '@/types/model';

/**
 * Mock model data for UI development
 * These are hand-curated profiles demonstrating the Practical AI Index approach
 */

export const mockModels: ModelProfile[] = [
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    provider: 'OpenAI',
    version: '2024-11',
    tagline: 'The reliable generalist with strong reasoning',
    bestFor: ['General purpose', 'API documentation', 'Customer support', 'Creative writing'],

    behavioralDescription:
      'GPT-4o is the steady professional in the room—polite, thorough, and rarely surprised. ' +
      'It follows instructions closely and prefers structured outputs. Occasionally verbose when ' +
      'brevity would serve better. Rarely hallucinates but sometimes over-explains.',

    personality: 'Professional, helpful, slightly formal. Like a diligent research assistant.',

    strengths: [
      'Excellent instruction following',
      'Strong reasoning on multi-step problems',
      'Very low hallucination rate',
      'Consistent output quality',
      'Good at structured data generation (JSON, tables)'
    ],

    weaknesses: [
      'Can be unnecessarily verbose',
      'Sometimes refuses valid requests due to overly cautious safety filters',
      'Not the fastest for real-time applications',
      'Premium pricing compared to alternatives'
    ],

    closestTwins: [
      {
        modelId: 'claude-3-5-sonnet',
        modelName: 'Claude 3.5 Sonnet',
        advantage: 'Better at code review and following specific formats'
      },
      {
        modelId: 'gemini-pro-1.5',
        modelName: 'Gemini Pro 1.5',
        advantage: 'Larger context window (2M tokens vs 128K)'
      }
    ],

    beatBy: [
      {
        modelId: 'claude-3-5-sonnet',
        modelName: 'Claude 3.5 Sonnet',
        advantage: 'Code generation and technical writing'
      },
      {
        modelId: 'deepseek-r1',
        modelName: 'DeepSeek R1',
        advantage: 'Mathematical reasoning and theorem proving'
      }
    ],

    valueSwaps: [
      {
        modelId: 'gpt-4o-mini',
        modelName: 'GPT-4o Mini',
        advantage: '15x cheaper ($0.15 vs $2.50) with 80% of the capability'
      },
      {
        modelId: 'claude-3-haiku',
        modelName: 'Claude 3 Haiku',
        advantage: '10x cheaper, nearly as good for straightforward tasks'
      }
    ],

    uniqueAdvantages: [
      'Best-in-class function calling for tool use',
      'Most widely supported by third-party tools',
      'Excellent multilingual capabilities'
    ],

    costPer1MTokens: 2.50,
    contextWindow: 128000,

    benchmarks: [
      { name: 'MMLU', score: 88.7, description: 'Multitask Language Understanding' },
      { name: 'HumanEval', score: 90.2, description: 'Python coding tasks' },
      { name: 'GSM8K', score: 94.8, description: 'Grade school math' },
      { name: 'MATH', score: 76.4, description: 'Advanced mathematics' },
      { name: 'DROP', score: 83.7, description: 'Reading comprehension' }
    ],

    stewardshipNote:
      'GPT-4o is premium-priced. For most API docs, customer support, or content generation, ' +
      'consider GPT-4o Mini at 1/15th the cost. Save GPT-4o for tasks requiring complex reasoning.'
  },

  {
    id: 'claude-3-5-sonnet',
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    version: '20241022',
    tagline: 'The meticulous coder with a formal tone',
    bestFor: ['Code generation', 'Technical writing', 'Code review', 'Complex analysis'],

    behavioralDescription:
      'Claude 3.5 Sonnet is the engineer\'s engineer—precise, thoughtful, and detail-oriented. ' +
      'Excels at breaking down complex problems and writing clean, well-documented code. ' +
      'Has strong opinions about code quality. Sometimes over-explains edge cases.',

    personality: 'Analytical, thorough, slightly pedantic. Like a senior developer in code review.',

    strengths: [
      'Best-in-class code generation and review',
      'Excellent at following specific output formats',
      'Strong technical writing and documentation',
      'Low hallucination rate on factual queries',
      'Great at incremental refinement'
    ],

    weaknesses: [
      'Can be overly cautious about edge cases',
      'Sometimes refuses creative tasks citing "I should be balanced"',
      'Slightly slower than competitors',
      'May over-engineer simple solutions'
    ],

    closestTwins: [
      {
        modelId: 'gpt-4o',
        modelName: 'GPT-4o',
        advantage: 'Faster response times and better multilingual support'
      }
    ],

    beatBy: [
      {
        modelId: 'gpt-4o',
        modelName: 'GPT-4o',
        advantage: 'Creative writing and conversational tasks'
      }
    ],

    valueSwaps: [
      {
        modelId: 'claude-3-haiku',
        modelName: 'Claude 3 Haiku',
        advantage: '10x cheaper ($0.25 vs $3.00), good for simple code tasks'
      }
    ],

    uniqueAdvantages: [
      'Best at maintaining context in long conversations',
      'Strongest refusal to produce low-quality code',
      'Excellent at understanding and fixing existing codebases'
    ],

    costPer1MTokens: 3.00,
    contextWindow: 200000,

    benchmarks: [
      { name: 'MMLU', score: 89.1, description: 'Multitask Language Understanding' },
      { name: 'HumanEval', score: 92.0, description: 'Python coding tasks' },
      { name: 'GSM8K', score: 96.4, description: 'Grade school math' },
      { name: 'MATH', score: 78.3, description: 'Advanced mathematics' },
      { name: 'DROP', score: 87.1, description: 'Reading comprehension' }
    ],

    stewardshipNote:
      'Worth the premium for code generation and technical docs. For simpler tasks, ' +
      'Claude Haiku offers 80% of the quality at 10% of the cost.'
  },

  {
    id: 'deepseek-r1',
    name: 'DeepSeek R1',
    provider: 'DeepSeek',
    version: '2025-01',
    tagline: 'The mathematical prodigy that shows its work',
    bestFor: ['Mathematical reasoning', 'Complex problem solving', 'Scientific computing', 'Logical proofs'],

    behavioralDescription:
      'DeepSeek R1 is the math PhD who thinks out loud. It breaks down complex reasoning into ' +
      'explicit steps, showing its work like a patient tutor. Strongest at mathematical and logical ' +
      'tasks. Less polished at creative writing or casual conversation.',

    personality: 'Analytical, systematic, academic. Like a mathematician explaining a proof.',

    strengths: [
      'Best-in-class mathematical reasoning',
      'Transparent thinking process (shows reasoning steps)',
      'Excellent at theorem proving and formal logic',
      'Strong performance on STEM problems',
      'Highly cost-effective (free tier available)'
    ],

    weaknesses: [
      'Weaker at creative or conversational tasks',
      'Can over-explain simple concepts',
      'Less polished output formatting',
      'Smaller context window than competitors'
    ],

    closestTwins: [
      {
        modelId: 'gpt-4o',
        modelName: 'GPT-4o',
        advantage: 'More versatile across task types'
      }
    ],

    beatBy: [
      {
        modelId: 'gpt-4o',
        modelName: 'GPT-4o',
        advantage: 'General purpose tasks and creative writing'
      },
      {
        modelId: 'claude-3-5-sonnet',
        modelName: 'Claude 3.5 Sonnet',
        advantage: 'Code generation and technical documentation'
      }
    ],

    valueSwaps: [],

    uniqueAdvantages: [
      'Free tier available on OpenRouter',
      'Best score on MATH benchmark (advanced mathematics)',
      'Shows explicit reasoning steps',
      'Excellent for educational/tutoring applications'
    ],

    costPer1MTokens: 0.55,
    contextWindow: 64000,

    benchmarks: [
      { name: 'MMLU', score: 86.4, description: 'Multitask Language Understanding' },
      { name: 'HumanEval', score: 85.7, description: 'Python coding tasks' },
      { name: 'GSM8K', score: 97.3, description: 'Grade school math' },
      { name: 'MATH', score: 89.2, description: 'Advanced mathematics' },
      { name: 'DROP', score: 81.9, description: 'Reading comprehension' }
    ],

    stewardshipNote:
      'DeepSeek R1 is a steal for STEM work. At $0.55 per million tokens (and free tier available), ' +
      'it outperforms models 5x more expensive on mathematical reasoning. Use premium models for ' +
      'general purpose work, but R1 for anything math-heavy.'
  },

  {
    id: 'gemini-pro-1.5',
    name: 'Gemini Pro 1.5',
    provider: 'Google',
    version: '1.5',
    tagline: 'The context king with massive memory',
    bestFor: ['Long document analysis', 'Video understanding', 'Large codebase review', 'Research synthesis'],

    behavioralDescription:
      'Gemini Pro 1.5 is the librarian with a photographic memory. Its superpower is processing ' +
      'massive amounts of context—entire codebases, long documents, or hours of video. Great at ' +
      'finding needles in haystacks. Sometimes gets lost in the details when simpler answers would do.',

    personality: 'Comprehensive, detail-oriented, eager to process everything. Like a thorough researcher.',

    strengths: [
      'Massive 2M token context window',
      'Can process video, audio, and images natively',
      'Excellent at document synthesis and summarization',
      'Strong multilingual capabilities',
      'Competitive pricing for the context size'
    ],

    weaknesses: [
      'Can be unfocused when given too much context',
      'Sometimes produces verbose outputs',
      'Less consistent than GPT-4o or Claude on structured tasks',
      'Occasional factual errors mixed into otherwise good responses'
    ],

    closestTwins: [
      {
        modelId: 'gpt-4o',
        modelName: 'GPT-4o',
        advantage: 'More consistent quality and better reasoning'
      }
    ],

    beatBy: [
      {
        modelId: 'gpt-4o',
        modelName: 'GPT-4o',
        advantage: 'Structured outputs and reasoning tasks'
      },
      {
        modelId: 'claude-3-5-sonnet',
        modelName: 'Claude 3.5 Sonnet',
        advantage: 'Code generation and technical precision'
      }
    ],

    valueSwaps: [],

    uniqueAdvantages: [
      '2M token context window (largest available)',
      'Native multimodal understanding (video, audio, images)',
      'Free tier available in Google AI Studio',
      'Fast inference speed for its size'
    ],

    costPer1MTokens: 1.25,
    contextWindow: 2000000,

    benchmarks: [
      { name: 'MMLU', score: 86.5, description: 'Multitask Language Understanding' },
      { name: 'HumanEval', score: 84.1, description: 'Python coding tasks' },
      { name: 'GSM8K', score: 91.7, description: 'Grade school math' },
      { name: 'MATH', score: 73.5, description: 'Advanced mathematics' },
      { name: 'DROP', score: 82.4, description: 'Reading comprehension' }
    ],

    stewardshipNote:
      'Use Gemini Pro 1.5 when you need to process huge amounts of context—entire books, large ' +
      'codebases, or long videos. For smaller tasks, GPT-4o or Claude offer better consistency. ' +
      'The 2M context window is legitimately unique.'
  },

  {
    id: 'llama-3.1-70b',
    name: 'Llama 3.1 70B',
    provider: 'Meta',
    version: '3.1',
    tagline: 'The open-source workhorse for self-hosting',
    bestFor: ['Self-hosted deployments', 'Privacy-sensitive work', 'Cost-conscious builders', 'Fine-tuning base'],

    behavioralDescription:
      'Llama 3.1 70B is the practical choice for teams who want control. Not the smartest in the room, ' +
      'but reliable, fast, and fully yours to run. Great for high-volume, moderate-complexity tasks where ' +
      'privacy or cost matters more than cutting-edge performance.',

    personality: 'Straightforward, efficient, no-nonsense. Like a reliable contractor.',

    strengths: [
      'Fully open-source (permissive license)',
      'Can be self-hosted for full control',
      'Fast inference speed',
      'Good cost/performance ratio',
      'Strong base for fine-tuning'
    ],

    weaknesses: [
      'Weaker reasoning than GPT-4o/Claude',
      'More prone to hallucination on complex tasks',
      'Less polished conversational ability',
      'Requires infrastructure for self-hosting'
    ],

    closestTwins: [
      {
        modelId: 'mixtral-8x7b',
        modelName: 'Mixtral 8x7B',
        advantage: 'Similar performance, smaller size for easier hosting'
      }
    ],

    beatBy: [
      {
        modelId: 'gpt-4o',
        modelName: 'GPT-4o',
        advantage: 'Reasoning, instruction following, and output quality'
      },
      {
        modelId: 'claude-3-5-sonnet',
        modelName: 'Claude 3.5 Sonnet',
        advantage: 'Code generation and technical accuracy'
      },
      {
        modelId: 'deepseek-r1',
        modelName: 'DeepSeek R1',
        advantage: 'Mathematical reasoning and complex problem solving'
      }
    ],

    valueSwaps: [
      {
        modelId: 'gpt-4o-mini',
        modelName: 'GPT-4o Mini',
        advantage: 'Similar performance, no hosting required, $0.15/M tokens'
      }
    ],

    uniqueAdvantages: [
      'Fully open-source and self-hostable',
      'No per-token costs if self-hosted',
      'Full data privacy and control',
      'Can be fine-tuned for domain-specific tasks'
    ],

    costPer1MTokens: 0.35,
    contextWindow: 128000,

    benchmarks: [
      { name: 'MMLU', score: 82.0, description: 'Multitask Language Understanding' },
      { name: 'HumanEval', score: 72.6, description: 'Python coding tasks' },
      { name: 'GSM8K', score: 89.5, description: 'Grade school math' },
      { name: 'MATH', score: 51.9, description: 'Advanced mathematics' },
      { name: 'DROP', score: 79.7, description: 'Reading comprehension' }
    ],

    stewardshipNote:
      'Choose Llama 3.1 70B if you need data privacy, want to avoid per-token costs, or plan to fine-tune. ' +
      'For pure API usage, GPT-4o Mini often delivers better quality at similar or lower cost without the ' +
      'hosting burden.'
  }
];
