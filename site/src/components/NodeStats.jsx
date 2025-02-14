import React from 'react';
import GlassCard from './GlassCard';

const NodeStats = () => {
  return (
    <div>
      <GlassCard title="Uptime" content="99.9%" />
      <GlassCard title="Staked Amount" content="10,000 TOKEN" />
      <GlassCard title="Commission Rate" content="5%" />
    </div>
  );
};

export default NodeStats;
