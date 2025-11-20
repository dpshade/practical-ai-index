'use client';

import { useState } from 'react';
import ModelList from '@/components/ModelList';
import ModelDetail from '@/components/ModelDetail';
import { mockModels } from '@/data/mockModels';
import { ModelProfile } from '@/types/model';

export default function Home() {
  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);

  const selectedModel = mockModels.find((m) => m.id === selectedModelId);

  const handleSelectModel = (modelId: string) => {
    setSelectedModelId(modelId);
  };

  const handleCloseDetail = () => {
    setSelectedModelId(null);
  };

  return (
    <main className="app-container">
      <div className={`list-pane ${selectedModelId ? 'with-detail' : ''}`}>
        <ModelList
          models={mockModels}
          selectedModelId={selectedModelId || undefined}
          onSelectModel={handleSelectModel}
        />
      </div>

      {selectedModel && (
        <>
          {/* Overlay for mobile */}
          <div className="detail-overlay" onClick={handleCloseDetail} />

          {/* Detail pane/modal */}
          <div className="detail-pane">
            <ModelDetail model={selectedModel} onClose={handleCloseDetail} />
          </div>
        </>
      )}
    </main>
  );
}
