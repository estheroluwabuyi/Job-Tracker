export function getThirdStat(stats) {
    if (stats.offers > 0) {
      const offerRate = Math.round((stats.offers / stats.total) * 100)
      return {
        value: `${offerRate}%`,
        label: 'Offer Rate',
        subtext: `${stats.offers} offer${stats.offers !== 1 ? 's' : ''} received`,
        color: 'green',
      }
    }
    
    if (stats.interviews > 0) {
      const interviewRate = Math.round((stats.interviews / stats.total) * 100)
      return {
        value: `${stats.interviews}`,
        label: `Interview${stats.interviews !== 1 ? 's' : '' }`,
        subtext: `Progress happening!`,
        color: 'purple',
             }
    }
    
    return {
      value: `${stats.applied}`,
      label: 'Applied',
      subtext: 'Applications submitted',
      color: 'blue',
      }
  }
