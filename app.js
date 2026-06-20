const scriptURL = "https://script.google.com/macros/s/AKfycbxNDQRvl_s0pcifmS7yeHlw3NWUk6kyh-SB-FV0UdtNi_mvYJiTSHMvHlPJboKgy7So/exec";
const reportDate = document.getElementById("reportDate");
const employee = document.getElementById("employee");
const workReport = document.getElementById("workReport");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", saveReport);

async function saveReport() {

  const date = reportDate.value;
  const emp = employee.value;
  const report = workReport.value;

  if (!date || !emp || !report) {
    alert("Please fill all fields");
    return;
  }

  try {

    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify({
        date: date,
        employee: emp,
        report: report
      })
    });

    const result = await response.text();

    alert("Report Saved Successfully");

    reportDate.value = "";
    employee.value = "";
    workReport.value = "";

    console.log(result);

  } catch (error) {

    console.error(error);
    alert("Error Saving Report");

  }
}