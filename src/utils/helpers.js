export function formatSpeed(speed) {
    return `${speed} km/h`;
  }
  
  export function formatFuelLevel(level) {
    return `${level}%`;
  }
  
  export function getAlertColor(severity) {
    switch (severity) {
      case 'low':
        return '#FFA500';
      case 'medium':
        return '#FFA500';
      case 'high':
        return '#FF0000';
      default:
        return '#000000';
    }
  }