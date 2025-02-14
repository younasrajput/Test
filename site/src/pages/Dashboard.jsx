import React from 'react';
import NodeStats from '../components/NodeStats';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="neon-text">Node Statistics</h1>
      <NodeStats />
    </div>
  );
};

export default Dashboard;
