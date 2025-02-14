import React from 'react';
import NodeStats from '../components/NodeStats';
import GlassCard from '../components/GlassCard';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="neon-text">Node Statistics</h1>
      <NodeStats />
      <GlassCard title="Uptime" content="99.9%" />
      <GlassCard title="Staked Amount" content="10,000 TOKEN" />
    </div>
  );
};

export default Dashboard;
