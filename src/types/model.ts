/**
 * Type definitions for AI model data
 */

export interface ModelBenchmark {
  name: string;
  score: number;
  description?: string;
}

export interface CompetitorInfo {
  modelId: string;
  modelName: string;
  advantage: string;
}

export interface ModelProfile {
  id: string;
  name: string;
  provider: string;
  version?: string;

  // Quick summary
  tagline: string;
  bestFor: string[];

  // Practical AI Insights
  behavioralDescription: string;
  personality: string;
  strengths: string[];
  weaknesses: string[];

  // Competitive landscape
  closestTwins: CompetitorInfo[];
  beatBy: CompetitorInfo[];
  valueSwaps: CompetitorInfo[];
  uniqueAdvantages: string[];

  // Pricing
  costPer1MTokens: number;
  contextWindow: number;

  // Raw benchmarks
  benchmarks: ModelBenchmark[];

  // Stewardship notes
  stewardshipNote?: string;
}
