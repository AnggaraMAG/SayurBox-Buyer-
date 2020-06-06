const setTimeChooser = () => {
  const date = new Date();
  const days = [
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    "Jum'at",
    'Sabtu',
    'Minggu',
  ];
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  if (
    (date.getDay() === 1 && date.getHours() > 15) ||
    (date.getDay() > 1 && date.getDay() <= 5 && date.getHours <= 15)
  ) {
    let day = 0;
    let i = date.getDay();
    while (i < 8) {
      if (i > 6) {
        i = 0;
      }
      if (days[i] === 'Sabtu') {
        day++;
        break;
      }
      day++;
      i++;
    }
    let nextDate1 = date.getDate() + day;
    let nextDate2 = nextDate1 + 4;
    let nextMonth1 = date.getMonth();
    let nextMonth2 = date.getMonth();

    if (date.getMonth % 2 === 0 || date.getMonth() === 7) {
      if (nextDate1 > 31) {
        nextDate1 = nextDate1 % 31;
        nextDate2 = nextDate2 % 31;
        nextMonth1++;
        nextMonth2++;
      } else {
        if (nextDate2 > 31) {
          nextDate2 = nextDate2 % 31;
          nextMonth2++;
        }
      }
    } else {
      if (nextDate1 > 30) {
        nextDate1 = nextDate1 % 31;
        nextDate2 = nextDate2 % 31;
        nextMonth1++;
        nextMonth2++;
      } else {
        if (nextDate2 > 30) {
          nextDate2 = nextDate2 % 31;
          nextMonth2++;
        }
      }
    }
    return {
      day1: 'Sabtu',
      date1: nextDate1,
      month1: nextMonth1,
      day2: 'Rabu',
      date2: nextDate2,
      month2: nextMonth2,
    };
  } else {
    let day = 0;
    let i = date.getDay();
    while (i < 8) {
      if (i > 6) {
        i = 0;
      }
      if (days[i] === 'Rabu') {
        day++;
        break;
      }
      day++;
      i++;
    }
    let nextDate1 = date.getDate() + day;
    let nextDate2 = nextDate1 + 3;
    let nextMonth1 = date.getMonth();
    let nextMonth2 = date.getMonth();

    if (date.getMonth % 2 === 0 || date.getMonth() === 7) {
      if (nextDate1 > 31) {
        nextDate1 = nextDate1 % 31;
        nextDate2 = nextDate2 % 31;
        nextMonth1++;
        nextMonth2++;
      } else {
        if (nextDate2 > 31) {
          nextDate2 = nextDate2 % 31;
          nextMonth2++;
        }
      }
    } else {
      if (nextDate1 > 30) {
        nextDate1 = nextDate1 % 31;
        nextDate2 = nextDate2 % 31;
        nextMonth1++;
        nextMonth2++;
      } else {
        if (nextDate2 > 30) {
          nextDate2 = nextDate2 % 31;
          nextMonth2++;
        }
      }
    }
    return {
      day1: 'Rabu',
      date1: nextDate1,
      month1: months[nextMonth1],
      day2: 'Sabtu',
      date2: nextDate2,
      month2: months[nextMonth2],
    };
  }
};

export default setTimeChooser;
