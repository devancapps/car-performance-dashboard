export const generateMockData = () => {
    return {
      currentSpeed: Math.floor(Math.random() * 180),
      currentFuel: Math.floor(Math.random() * 100),
      engineHealth: {
        healthy: Math.floor(Math.random() * 70) + 30,
        warning: Math.floor(Math.random() * 20),
        critical: Math.floor(Math.random() * 10)
      },
      alerts: [
        { type: 'oil', severity: 'low', message: 'Oil change needed soon' },
        { type: 'engine', severity: 'high', message: 'Check engine light on' },
        { type: 'tire', severity: 'medium', message: 'Low tire pressure' }
      ].filter(() => Math.random() > 0.5)
    };
  };