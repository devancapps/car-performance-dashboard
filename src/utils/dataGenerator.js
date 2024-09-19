export function generateDashboardData() {
    return {
      speed: {
        current: Math.floor(Math.random() * 180),
        max: 180,
      },
      fuel: {
        labels: ['1h ago', '45m ago', '30m ago', '15m ago', 'Now'],
        values: [
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
        ],
      },
      engineHealth: {
        healthy: Math.floor(Math.random() * 70) + 30,
        warning: Math.floor(Math.random() * 20),
        critical: Math.floor(Math.random() * 10),
      },
      alerts: [
        { severity: 'low', message: 'Oil change needed soon' },
        { severity: 'medium', message: 'Tire pressure low' },
        { severity: 'high', message: 'Check engine light on' },
      ],
    };
  }
  