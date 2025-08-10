const labTests = [
  "Complete Blood Count (CBC)",
  "Liver Function Test (LFT)",
  "Kidney Function Test (KFT)",
  "Thyroid Profile (T3, T4, TSH)",
  "Blood Sugar Test",
  "Lipid Profile",
  "Vitamin D Test",
  "Urine Routine",
  "COVID-19 RT-PCR",
  "Malaria Test",
  "Dengue NS1 Antigen",
  "HbA1c (Glycated Hemoglobin)",
  "Electrolyte Panel",
  "Widal Test",
  "HIV Test"
];

const labTestList = document.getElementById("labTestList");
const searchInput = document.getElementById("searchInput");

// Load all lab tests on page load
function displayLabTests(filteredTests = labTests) {
  labTestList.innerHTML = "";
  filteredTests.forEach(test => {
    const li = document.createElement("li");
    li.textContent = test;
    labTestList.appendChild(li);
  });
}

// Search filter
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = labTests.filter(test => test.toLowerCase().includes(query));
  displayLabTests(filtered);
});

displayLabTests(); // Initial load
