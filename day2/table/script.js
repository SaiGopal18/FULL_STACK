const batsmenData = {
    ODI: [
        { name: "Sachin Tendulkar", runs: 18426, country: "India" },
        { name: "Kumar Sangakkara", runs: 14234, country: "Sri Lanka" },
        { name: "Virat Kohli", runs: 14181, country: "India" },
        { name: "Ricky Ponting", runs: 13704, country: "Australia" },
        { name: "Sanath Jayasuriya", runs: 13430, country: "Sri Lanka" }
    ],
    T20I: [
        { name: "Virat Kohli", runs: 4008, country: "India" },
        { name: "Rohit Sharma", runs: 3853, country: "India" },
        { name: "Babar Azam", runs: 3485, country: "Pakistan" },
        { name: "David Warner", runs: 2894, country: "Australia" },
        { name: "Martin Guptill", runs: 3531, country: "New Zealand" }
    ],
    TEST: [
        { name: "Sachin Tendulkar", runs: 15921, country: "India" },
        { name: "Ricky Ponting", runs: 13378, country: "Australia" },
        { name: "Jacques Kallis", runs: 13289, country: "South Africa" },
        { name: "Rahul Dravid", runs: 13288, country: "India" },
        { name: "Alastair Cook", runs: 12472, country: "England" }
    ]
};

// Function to update the table based on selection
function updateTable(format) {
    const tableBody = document.querySelector("#batsmanTable tbody");
    tableBody.innerHTML = ""; // Clear existing data

    batsmenData[format].forEach(player => {
        const row = `<tr>
                        <td>${player.name}</td>
                        <td>${player.runs}</td>
                        <td>${player.country}</td>
                     </tr>`;
        tableBody.innerHTML += row;
    });
}

// Add event listeners for buttons
document.getElementById("ODI").addEventListener("click", () => updateTable("ODI"));
document.getElementById("T20I").addEventListener("click", () => updateTable("T20I"));
document.getElementById("TEST").addEventListener("click", () => updateTable("TEST"));

// Load default data (ODI)
updateTable("ODI");
