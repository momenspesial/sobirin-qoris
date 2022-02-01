
const templateUcapanBox = (data) => `
  <div class="ucapan-box">
    <img class="ucapan-img" src="images/default-user.png" style="object-fit:cover;border:5px solid ${(data.item.guestRef=='a')?'#ff66b0':'#007bff'}">
    <h3 class="ucapan-name">${data.item.guestName}</h3>
    <p class="ucapan-info">
      <small class="badge rounded-pill badge-${(data.item.guestRef=='a')?'pink':'primary'}">${(data.item.guestRef=='a')?'annisa':'ikhwan'}</small>
      <small class="badge rounded-pill bg-secondary">${data.item.guestPlace}</small>
      <small class="badge badge-${(data.item.guestPresence=='hadir')?'success':'danger'}"">${data.item.guestPresence}</small>
    </p>
    <span class="ucapan-date">${new Date(data.item.timestamp).toLocaleString("en-US", {timeZone: "Asia/Jakarta"})}</span>
    <p class="ucapan-msg" style="clear:both">${data.item.guestMsg}</p>
  </div>
`;
const ucapanContainer = $('#ucapan-container');