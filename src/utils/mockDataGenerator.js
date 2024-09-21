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
        { severity: 'low', message: 'Oil change needed soon' },
        { severity: 'medium', message: 'Low tire pressure' },
        { severity: 'high', message: 'Check engine light on' }
      ].filter(() => Math.random() > 0.7) // Randomly include some alerts
    };
  };