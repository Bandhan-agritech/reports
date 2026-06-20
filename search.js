const scriptURL = "https://script.google.com/macros/s/AKfycbw2wU1hTe8qq9C_Bms5Qlwwca09u9OrQ4ZR9BJXkG6JSaDKSqaHfSuXtyygQdyr85lf/exec";

async function searchReport() {

    const date = document.getElementById("searchDate").value;
    const employee = document.getElementById("searchEmployee").value;

    if (!date || !employee) {
        alert("Please select Date and Employee");
        return;
    }

    try {

        const response = await fetch(
            `${scriptURL}?date=${date}&employee=${employee}`
        );

        const data = await response.json();

        if (data.length === 0) {

            document.getElementById("showDate").innerText = "-";
            document.getElementById("showEmp").innerText = "-";
            document.getElementById("showReport").innerText = "No Report Found";

            return;
        }

        document.getElementById("showDate").innerText = data[0].date;
        document.getElementById("showEmp").innerText = data[0].employee;
        document.getElementById("showReport").innerText = data[0].report;

    } catch (error) {

        console.error(error);
        alert("Error Loading Report");

    }
}