const msToTime = (duration) => {
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    let output = "";

    if(hours) output += `${hours} hour${hours === 1 ? "" : "s"} `;
    if(minutes) output += `${minutes} minute${minutes === 1 ? "" : "s"} `;
    if(seconds && minutes < 5) output += `${seconds} second${seconds === 1 ? "" : "s"}`;
  
    return output;
};

const haversine = (A, B) => {
    const rad = (deg) => deg * Math.PI / 180;
    const R = 6371;
    const dX = rad(B.lat - A.lat);
    const dY = rad(B.lng - A.lng);
    A.lat = rad(A.lat);
    B.lat = rad(B.lat);

    const a = Math.pow(Math.sin(dX / 2), 2) + Math.pow(Math.sin(dY / 2), 2) * Math.cos(A.lat) * Math.cos(B.lat);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

export { msToTime, haversine };
