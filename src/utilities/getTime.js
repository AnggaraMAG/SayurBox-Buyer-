getTime = () => {
  const date = new Date();
  let month = '';
  let day = '';
  switch (date.getMonth()) {
    case 0:
      month = 'Januari';
      break;
    case 1:
      month = 'Februari';
      break;
    case 2:
      month = 'Maret';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'Juni';
      break;
    case 6:
      month = 'Juli';
      break;
    case 7:
      month = 'Agustus';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'Oktober';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'Desember';
      break;
    default:
      console.log('error');
      break;
  }

  switch (date.getDay()) {
    case 0:
      day = 'Senin';
      break;
    case 1:
      day = 'Selasa';
      break;
    case 2:
      day = 'Rabu';
      break;
    case 3:
      day = 'Kamis';
      break;
    case 4:
      day = "Jum'at";
      break;
    case 5:
      day = 'Sabtu';
      break;
    case 6:
      day = 'Minggu';
      break;
    default:
      console.log('error');
      break;
  }
  return `${day}, ${date.getDate()} ${month} ${date.getFullYear()}`;
};

export default getTime;
